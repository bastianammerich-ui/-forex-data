# FOREX CANDIDATE SHORTLIST V2
Stand: 27.07.2026

## Priorität 1 — A-V2.2 BODYCAP Cross-Pair OOS
**Score:** 9.8/10
- Daten: M1/M15/H1/H4 für GBP/USD, USD/JPY, USD/CHF, USD/CAD, AUD/USD, NZD/USD
- Regeln: A-V2.2 unverändert
- Ziel: prüfen, ob der auf EUR/USD gefundene Edge pairübergreifend existiert

## Priorität 2 — Regime Blend A-V2.2 + v3
**Score:** 9.4/10
- A-V2.2 nur im Trendregime
- v3 Mean Reversion unverändert im Seitwärts-/MR-Regime
- Keine Vermischung der Entry-Regeln
- Ziel: Portfolio-DD, Auslastung und Regimeabdeckung verbessern

## Priorität 3 — Broad USD Factor Confirmation
**Score:** 9.0/10
- Zeitgleiche 7-Major-Daten nötig
- A-V2.2-Signal nur bei Bestätigung durch vorab eingefrorenen breiten USD-Faktor
- Ziel: idiosynkratische Fehltrades reduzieren

## Priorität 4 — Daily Multi-Horizon Time-Series Momentum
**Score:** 8.8/10
- Literaturbasierte Trendprämie
- 20/60/120-Tage-Momentum-Ensemble
- ATR/Vol-Risikobudget, niedriger Turnover
- Für belastbaren Test ideal >10 Jahre Daten

## Priorität 5 — Cross-Sectional Currency Momentum
**Score:** 8.7/10
- Portfolio über mehrere Währungen
- Monatliches Ranking nach 1/3/6-Monats-Returns
- Top-2 long / Bottom-2 short
- Kosten explizit modellieren

## Priorität 6 — Currency Factor Momentum
**Score:** 8.6/10
- Momentum auf gemeinsamen Dollar-/Carry-Faktoren statt nur Einzelpaaren
- Price-only Dollar-Faktor zuerst; Carry-Komponente erst mit Zins-/Swapdaten

## Priorität 7 — Carry + Momentum Hybrid
**Score:** 8.4/10
- Nur mit echten historischen Forward-/Swapdaten
- Carry nur in Richtung des Momentum-Signals
- Global-Risk/Interest-Rate-Volatility-Overlay vorab definieren

## Priorität 8 — Macro-News Surprise Continuation
**Score:** 7.9/10
- Historische Actual/Consensus-Daten mit exakten Zeitstempeln nötig
- M1/M5-Ausführung
- Nur vorab definierte High-Impact-Releases

## Priorität 9 — Local-Trading-Hours Seasonality Filter
**Score:** 7.6/10
- Als Filter, nicht als frei optimierte Standalone-Strategie
- Korrektes Mapping TMGM-Serverzeit -> UTC -> lokale Handelszeit zwingend

## Priorität 10 — Skewness/Kurtosis-enhanced Currency Momentum
**Score:** 7.4/10
- Aktuelle JIMF-2026-Idee
- Breiteres Currency-Universum und längere Historie nötig

## Priorität 11 — Currency Value + Momentum
**Score:** 6.9/10
- Langfristig, fundamental
- CPI/Real Exchange Rates/Makrodaten nötig
- Nicht als Intraday-System gedacht

## Priorität 12 — ML Meta-Filter
**Score:** 5.8/10
- Erst nach vielen hundert bis tausend sauber gelabelten Signalen
- ML darf nur bestehende regelbasierte Signale annehmen/ablehnen
- Keine neuen Trades aus Black-Box-Modellen auf kleinem Datensatz

## Nicht priorisieren
Weitere freie RSI/MACD/BB/Keltner/ORB-Grids, frei optimierte Uhrzeiten, Deep Learning/RL auf nur 2,5 Jahren EUR/USD, Martingale/Grid.
