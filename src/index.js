const PAIRS = [
  "EUR/USD",
  "GBP/USD",
  "USD/JPY",
  "USD/CHF",
  "USD/CAD",
  "AUD/USD",
  "NZD/USD"
];

const CONFIG = {
  "15min": { outputsize: 80, ttl: 15 * 60 },
  "1h":    { outputsize: 100, ttl: 60 * 60 },
  "4h":    { outputsize: 80, ttl: 4 * 60 * 60 },
  "1day":  { outputsize: 100, ttl: 12 * 60 * 60 }
};

const GITHUB = {
  owner: "bastianammerich-ui",
  repo: "-forex-data",
  branch: "main",
  path: "forex.json"
};

export default {
  async fetch(request, env) {
    try {
      validateEnvironment(env);
      const url = new URL(request.url);
      const requestedInterval = url.searchParams.get("refresh");
      const historyRequest = url.searchParams.get("history");
      const historyExportRequest = url.searchParams.get("history_export");
      const historyEnd = url.searchParams.get("end");

      if (historyExportRequest === "1") {
        if (!historyEnd || !/^\d{4}-\d{2}-\d{2}$/.test(historyEnd)) {
          return json({ success: false, error: "Parameter end fehlt oder ist ungueltig.", example: "?history_export=1&end=2026-06-01" }, 400);
        }
        const history = await fetchHistoryBlock(env.TWELVE_DATA_API_KEY, historyEnd);
        const github = await publishHistoryToGitHub(env, history, historyEnd);
        return json({ success: github.status === "updated", mode: "history_export", generated_at_utc: new Date().toISOString(), requested_end_date: historyEnd, summary: summarizeHistoryBlock(history), github });
      }

      if (historyRequest === "1") {
        const history = await fetchHistoryTest(env.TWELVE_DATA_API_KEY);
        return json({ success: true, mode: "history_test", generated_at_utc: new Date().toISOString(), history });
      }

      if (requestedInterval) {
        if (!CONFIG[requestedInterval]) {
          return json({ success: false, error: "Ungültiger Timeframe", allowed: Object.keys(CONFIG) }, 400);
        }
        const update = await refreshOneInterval(env, requestedInterval);
        const market = await readMarketData(env);
        let github = null;
        if (update.status === "updated") github = await publishMarketToGitHub(env, market);
        return json({ success: update.status !== "error", mode: "refresh", requested_interval: requestedInterval, generated_at_utc: new Date().toISOString(), update, github, market });
      }

      const market = await readMarketData(env);
      return json({ success: true, mode: "cache", generated_at_utc: new Date().toISOString(), strategy: getStrategy(), market });
    } catch (error) {
      return json({ success: false, generated_at_utc: new Date().toISOString(), error: error instanceof Error ? error.message : String(error) }, 500);
    }
  },

  async scheduled(event, env, ctx) {
    ctx.waitUntil(runScheduledUpdate(env, event.cron));
  }
};

function validateEnvironment(env) {
  if (!env.TWELVE_DATA_API_KEY) throw new Error("TWELVE_DATA_API_KEY fehlt");
  if (!env.FOREX_CACHE) throw new Error("FOREX_CACHE Binding fehlt");
  if (!env.GITHUB_TOKEN) throw new Error("GITHUB_TOKEN fehlt");
}

function getStrategy() {
  return {
    account_eur: 10000,
    max_risk_percent: 2,
    primary_timeframe: "1h",
    entry_timeframe: "15min",
    context_timeframes: ["4h", "1day"],
    setup_types: ["trend_market_structure", "breakout_retest", "trend_pullback_confirmation"],
    pairs: PAIRS
  };
}

async function runScheduledUpdate(env, cron) {
  try {
    validateEnvironment(env);
    let interval = null;
    switch (cron) {
      case "3,17,32,47 * * * *": interval = "15min"; break;
      case "2 * * * *": interval = "1h"; break;
      case "4 */4 * * *": interval = "4h"; break;
      case "6 0 * * *": interval = "1day"; break;
      default:
        console.error("Unbekannter Cron Trigger:", cron);
        return;
    }
    console.log(`Scheduled Forex Update: ${interval} | Cron: ${cron}`);
    const result = await refreshOneInterval(env, interval);
    console.log(`Scheduled update ${interval}:`, JSON.stringify(result));
    if (result.status === "updated") {
      const market = await readMarketData(env);
      const githubResult = await publishMarketToGitHub(env, market);
      console.log("GitHub publish:", JSON.stringify(githubResult));
    } else {
      console.error(`Update ${interval} fehlgeschlagen:`, JSON.stringify(result));
    }
  } catch (error) {
    console.error("Scheduled Update Fehler:", error instanceof Error ? error.message : String(error));
  }
}

async function refreshOneInterval(env, interval) {
  const config = CONFIG[interval];
  const cacheKey = `forex:${interval}`;
  try {
    const data = await fetchInterval(env.TWELVE_DATA_API_KEY, interval, config.outputsize);
    const record = { updated_at_utc: new Date().toISOString(), interval, pairs: data };
    await env.FOREX_CACHE.put(cacheKey, JSON.stringify(record));
    return { interval, status: "updated", updated_at_utc: record.updated_at_utc, pair_count: PAIRS.length };
  } catch (error) {
    return { interval, status: "error", error: error instanceof Error ? error.message : String(error) };
  }
}

async function fetchHistoryTest(apiKey) {
  const symbols = PAIRS.join(",");
  const params = new URLSearchParams({ symbol: symbols, interval: "15min", outputsize: "5000", timezone: "Europe/Berlin", apikey: apiKey });
  const endpoint = `https://api.twelvedata.com/time_series?${params.toString()}`;
  const response = await fetch(endpoint);
  const text = await response.text();
  if (!response.ok) throw new Error(`Twelve Data History HTTP ${response.status}: ${text}`);
  let raw;
  try { raw = JSON.parse(text); } catch { throw new Error("Ungültige History-JSON-Antwort von Twelve Data"); }
  if (raw.status === "error") throw new Error(`Twelve Data History: ${raw.message || "Unbekannter Fehler"}`);
  const result = {};
  for (const pair of PAIRS) {
    const source = raw[pair];
    if (!source) { result[pair] = { success: false, message: "Keine Daten erhalten" }; continue; }
    if (source.status === "error" || source.code || (source.message && !source.values)) {
      result[pair] = { success: false, message: source.message || "API-Fehler" }; continue;
    }
    const candles = Array.isArray(source.values) ? source.values : [];
    result[pair] = { success: true, candle_count: candles.length, newest_candle: candles.length ? candles[0].datetime : null, oldest_candle: candles.length ? candles[candles.length - 1].datetime : null };
  }
  return { interval: "15min", requested_outputsize: 5000, pair_count: PAIRS.length, pairs: result };
}

async function fetchHistoryBlock(apiKey, endDate) {
  const symbols = PAIRS.join(",");
  const params = new URLSearchParams({ symbol: symbols, interval: "15min", outputsize: "5000", end_date: `${endDate} 23:59:59`, timezone: "Europe/Berlin", apikey: apiKey });
  const endpoint = `https://api.twelvedata.com/time_series?${params.toString()}`;
  const response = await fetch(endpoint);
  const text = await response.text();
  if (!response.ok) throw new Error(`Twelve Data History Export HTTP ${response.status}: ${text}`);
  let raw;
  try { raw = JSON.parse(text); } catch { throw new Error("Ungueltige History-JSON-Antwort von Twelve Data"); }
  if (raw.status === "error") throw new Error(`Twelve Data History Export: ${raw.message || "Unbekannter Fehler"}`);
  const pairs = normalizeResponse(raw);
  for (const pair of PAIRS) {
    if (!pairs[pair] || pairs[pair].error || !Array.isArray(pairs[pair].candles) || pairs[pair].candles.length === 0) {
      throw new Error(`History Export unvollstaendig fuer ${pair}: ${pairs[pair]?.message || "keine Kerzen"}`);
    }
  }
  return { source: "Twelve Data", interval: "15min", timezone: "Europe/Berlin", requested_end_date: endDate, generated_at_utc: new Date().toISOString(), pair_count: PAIRS.length, pairs };
}

function summarizeHistoryBlock(history) {
  const summary = {};
  for (const pair of PAIRS) {
    const candles = history.pairs[pair]?.candles || [];
    summary[pair] = { candle_count: candles.length, newest_candle: candles.length ? candles[0].datetime : null, oldest_candle: candles.length ? candles[candles.length - 1].datetime : null };
  }
  return summary;
}

async function publishHistoryToGitHub(env, history, endDate) {
  try {
    const path = `history/m15_${endDate}.json`;
    const content = JSON.stringify(history);
    const apiUrl = `https://api.github.com/repos/${GITHUB.owner}/${GITHUB.repo}/contents/${path}`;
    const existingResponse = await fetch(`${apiUrl}?ref=${encodeURIComponent(GITHUB.branch)}`, { method: "GET", headers: githubHeaders(env.GITHUB_TOKEN) });
    let sha = null;
    if (existingResponse.ok) sha = (await existingResponse.json()).sha || null;
    else if (existingResponse.status !== 404) throw new Error(`GitHub History GET ${existingResponse.status}: ${await existingResponse.text()}`);
    const body = { message: `Add M15 history block ending ${endDate}`, content: utf8ToBase64(content), branch: GITHUB.branch };
    if (sha) body.sha = sha;
    const putResponse = await fetch(apiUrl, { method: "PUT", headers: githubHeaders(env.GITHUB_TOKEN), body: JSON.stringify(body) });
    const responseText = await putResponse.text();
    if (!putResponse.ok) throw new Error(`GitHub History PUT ${putResponse.status}: ${responseText}`);
    let githubResponse = null;
    try { githubResponse = JSON.parse(responseText); } catch {}
    return { status: "updated", repository: `${GITHUB.owner}/${GITHUB.repo}`, path, branch: GITHUB.branch, commit_sha: githubResponse?.commit?.sha || null, raw_url: `https://raw.githubusercontent.com/${GITHUB.owner}/${GITHUB.repo}/${GITHUB.branch}/${path}` };
  } catch (error) {
    console.error("GitHub History Export Fehler:", error instanceof Error ? error.message : String(error));
    return { status: "error", error: error instanceof Error ? error.message : String(error) };
  }
}

async function fetchInterval(apiKey, interval, outputsize) {
  const symbols = PAIRS.join(",");
  const params = new URLSearchParams({ symbol: symbols, interval, outputsize: String(outputsize), timezone: "Europe/Berlin", apikey: apiKey });
  const endpoint = `https://api.twelvedata.com/time_series?${params.toString()}`;
  const response = await fetch(endpoint);
  const text = await response.text();
  if (!response.ok) throw new Error(`Twelve Data HTTP ${response.status}: ${text}`);
  let raw;
  try { raw = JSON.parse(text); } catch { throw new Error("Ungültige JSON-Antwort von Twelve Data"); }
  if (raw.status === "error") throw new Error(`Twelve Data: ${raw.message || "Unbekannter Fehler"}`);
  return normalizeResponse(raw);
}

function normalizeResponse(raw) {
  const result = {};
  for (const pair of PAIRS) {
    const source = raw[pair];
    if (!source) { result[pair] = { error: true, message: "Keine Daten erhalten" }; continue; }
    if (source.status === "error" || source.code || (source.message && !source.values)) {
      result[pair] = { error: true, message: source.message || "API-Fehler" }; continue;
    }
    const candles = Array.isArray(source.values) ? source.values.map(candle => ({ datetime: candle.datetime, open: Number(candle.open), high: Number(candle.high), low: Number(candle.low), close: Number(candle.close) })) : [];
    result[pair] = { meta: source.meta || null, candle_count: candles.length, candles };
  }
  return result;
}

async function readMarketData(env) {
  const market = {};
  for (const interval of Object.keys(CONFIG)) {
    const key = `forex:${interval}`;
    const record = await env.FOREX_CACHE.get(key, { type: "json" });
    if (!record) { market[interval] = { available: false, message: "Noch keine Daten im Cache" }; continue; }
    const age = ageSeconds(record.updated_at_utc);
    market[interval] = { available: true, updated_at_utc: record.updated_at_utc, age_seconds: age, stale: age >= CONFIG[interval].ttl, pairs: record.pairs };
  }
  return market;
}

async function publishMarketToGitHub(env, market) {
  try {
    const payload = { success: true, source: "Twelve Data via Cloudflare Worker", generated_at_utc: new Date().toISOString(), strategy: getStrategy(), market };
    const content = JSON.stringify(payload, null, 2);
    const apiUrl = `https://api.github.com/repos/${GITHUB.owner}/${GITHUB.repo}/contents/${GITHUB.path}`;
    const existingResponse = await fetch(`${apiUrl}?ref=${encodeURIComponent(GITHUB.branch)}`, { method: "GET", headers: githubHeaders(env.GITHUB_TOKEN) });
    let sha = null;
    if (existingResponse.ok) sha = (await existingResponse.json()).sha || null;
    else if (existingResponse.status !== 404) throw new Error(`GitHub GET ${existingResponse.status}: ${await existingResponse.text()}`);
    const body = { message: `Update Forex Market Data ${new Date().toISOString()}`, content: utf8ToBase64(content), branch: GITHUB.branch };
    if (sha) body.sha = sha;
    const putResponse = await fetch(apiUrl, { method: "PUT", headers: githubHeaders(env.GITHUB_TOKEN), body: JSON.stringify(body) });
    const responseText = await putResponse.text();
    if (!putResponse.ok) throw new Error(`GitHub PUT ${putResponse.status}: ${responseText}`);
    let githubResponse = null;
    try { githubResponse = JSON.parse(responseText); } catch {}
    return { status: "updated", repository: `${GITHUB.owner}/${GITHUB.repo}`, path: GITHUB.path, branch: GITHUB.branch, commit_sha: githubResponse?.commit?.sha || null, raw_url: `https://raw.githubusercontent.com/${GITHUB.owner}/${GITHUB.repo}/${GITHUB.branch}/${GITHUB.path}` };
  } catch (error) {
    console.error("GitHub Export Fehler:", error instanceof Error ? error.message : String(error));
    return { status: "error", error: error instanceof Error ? error.message : String(error) };
  }
}

function githubHeaders(token) {
  return {
    "Accept": "application/vnd.github+json",
    "Authorization": `Bearer ${token}`,
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "cloudflare-forex-worker",
    "Content-Type": "application/json"
  };
}

function utf8ToBase64(value) {
  const bytes = new TextEncoder().encode(value);
  let binary = "";
  const chunkSize = 0x8000;
  for (let i = 0; i < bytes.length; i += chunkSize) {
    const chunk = bytes.subarray(i, i + chunkSize);
    binary += String.fromCharCode(...chunk);
  }
  return btoa(binary);
}

function ageSeconds(timestamp) {
  const time = new Date(timestamp).getTime();
  if (!Number.isFinite(time)) return Number.MAX_SAFE_INTEGER;
  return Math.max(0, Math.floor((Date.now() - time) / 1000));
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: {
      "content-type": "application/json; charset=UTF-8",
      "cache-control": "no-store",
      "access-control-allow-origin": "*"
    }
  });
}
