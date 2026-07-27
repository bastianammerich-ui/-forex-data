# Dave Perk / Dave FX Hunter — CLS Strategy Research V1

Stand: 27.07.2026

## Status

This document reconstructs the publicly available Dave Perk / Dave FX Hunter CLS framework from primary creator sources (TradingView, MQL5, ForexFactory/Whop) and checks the CLS-market-mechanism claims against official CLS Group sources.

Important: this is a reconstruction of PUBLIC rules. It is not a substitute for private academy/Discord material and must not be represented as a perfect 1:1 transcription of proprietary training.

## 1. What CLS means in Dave's system

Dave currently describes CLS as **Candle Liquidity Sweep**. His MQL5 copy-trading overview says the current strategy uses Weekly and Daily timeframes and has two models:

- Model 1: liquidity sweep -> rejection -> reversal
- Model 2: liquidity sweep -> acceptance -> continuation

Primary source: https://www.mql5.com/en/signals/2369911

His public TradingView system description is broader and treats a CLS/range setup as a false breakout / liquidity manipulation of a defined range, followed by a lower-timeframe change in order flow. The strategy is top-down and requires context, not merely a candle pattern.

Primary source: https://www.tradingview.com/chart/BTCUSDT.P/PkQJvVm4-Complete-system-for-Day-Swing-Traders/

## 2. Canonical three-timeframe structure

Dave's public framework explicitly uses three layers:

1. HTF = trend / directional draw on liquidity
2. ITF = range + key levels + stop hunt/manipulation
3. LTF = AMD profiling / confirmation / entry

Public alignments:

- Short-term: Monthly trend -> Weekly range -> H4/H1 entries
- Swing: Weekly trend -> Daily range -> H1/M15 entries
- Day: Daily trend -> H4 range -> M15/M5 entries
- Scalping: H4 trend -> H1 range -> M5/M1 entries

Dave states he prefers Daily and Weekly ranges as higher-probability and less screen-intensive.

This corrects our earlier simplified internal interpretation "H4 bias -> H1 CLS". That mapping is not the canonical public swing mapping.

## 3. Direction / HTF bias

Dave's public daily-bias material uses candle closes and the location of remaining liquidity rather than moving averages.

### Continuation logic

Bullish example:
- today's Daily candle closes above the previous day's high;
- the relevant higher-timeframe key level has not yet been reached;
- draw on liquidity is considered above today's high;
- therefore bullish continuation bias.

Bearish is the mirror image: close below previous day's low, key level not yet reached, draw below today's low.

### Reversal logic

Bearish example:
- price wicks/sweeps above the previous day's high;
- then closes back below/inside rather than accepting above;
- draw is then expected toward liquidity below the previous day's low.

Bullish is the mirror image after a sweep below the previous day's low and rejection/close back inside.

Public sources:
- https://kr.tradingview.com/chart/BTCUSD/NfrL6hNZ-Easy-method-to-determine-next-target-based-on-candle-close/
- https://tw.tradingview.com/chart/BTCUSDT.P/9N1Ymkja-Easy-Method-to-Spot-and-Trade-Reversal/
- https://ru.tradingview.com/chart/EURUSD/biqplj21-Understand-Asia-Session-Conquer-London-Setups/

## 4. Range rules

The ITF range is the central object.

Public rules:
- Define a range near a meaningful key level.
- Bearish setup: manipulation/stop hunt should wick above the range; a same-timeframe candle CLOSE above the range invalidates that bearish range and a new range must be considered.
- Bullish setup: manipulation/stop hunt should wick below the range; a same-timeframe candle CLOSE below the range invalidates that bullish range.
- Do not trade in the middle of nowhere; the manipulation should occur around a key level.
- Dave repeatedly states: "No manipulation = no trade."

Primary sources:
- https://www.tradingview.com/chart/BTCUSDT.P/PkQJvVm4-Complete-system-for-Day-Swing-Traders/
- https://www.forexfactory.com/thread/1399859-the-cls-lab-strategy-and-mindset

## 5. Premium / Discount and dealing ranges

Dave defines a dealing range after price takes both a swing high and a swing low and then expands. Divide that expansion range at 50%:

- lower half = discount; preferred location for buys
- upper half = premium; preferred location for sells

The key level should align with the correct premium/discount side. He warns against taking a long from a premium key level or a short from discount simply because a level exists.

Source:
https://my.tradingview.com/chart/GBPUSD/eiML0Niy-Dealing-Ranges-Powerful-filter-tool-to-your-trading/

## 6. Key levels

A key level is mandatory in the public system. Dave says his preferred key level is an Order Block / Supply-Demand zone, though FVG and IFVG are also accepted in the checklist.

His public Order Block definition:
- last bullish or bearish candle before a strong market move;
- high-quality OB should be in the appropriate premium/discount location;
- he additionally wants an FVG or IFVG associated with the move;
- no liquidity raid -> no trade.

Timeframe pairing for OB confirmation:
- Monthly key-level OB -> Daily OB entry
- Weekly -> H4
- Daily -> H1
- H4 -> M15

Entry confirmation is based on candle close through the relevant opposing close candle(s), producing a lower-timeframe change in order flow.

Source:
https://kr.tradingview.com/chart/BTCUSD/LJ69Z8r4-Order-Block-Powerful-Key-level-and-Entry-confirmation/

## 7. Manipulation and AMD

Dave uses AMD = Accumulation, Manipulation, Distribution.

At the edge of the range:
- accumulation/consolidation develops near the key level;
- manipulation sweeps the range high/low and liquidity;
- lower timeframe must show a switch from manipulation into distribution before Model 1 entry.

For intraday FX he often frames Asia as the accumulation/manipulation source and London as either continuation or reversal, but this is a session narrative layered on the same range/stop-hunt framework.

Source:
https://tw.tradingview.com/chart/BTCUSDT.P/XxzXz7Ll-High-probability-strategies-for-the-London-Session/

## 8. Change in Order Flow / CIOD

This is the public Model 1 trigger.

Dave repeatedly says not to enter before the confirming candle CLOSE.

Public descriptions include:
- LTF Order Block created after manipulation;
- close beyond the manipulation candle(s);
- structure break with close / engulfing;
- close below the last up-close candle for bearish switch, or above the last down-close candle for bullish switch.

The public system article explicitly says entering before the close violates the strategy rules.

Primary source:
https://www.tradingview.com/chart/BTCUSDT.P/PkQJvVm4-Complete-system-for-Day-Swing-Traders/

## 9. Model 1 — public reconstruction

### Preconditions
1. HTF directional bias/draw on liquidity identified.
2. Pullback is in correct premium/discount location.
3. ITF CLS range defined.
4. Price sweeps the appropriate range edge (against HTF trend for a continuation trade).
5. Sweep reaches a valid key level (OB/FVG/IFVG).
6. Same-ITF close must NOT invalidate the range.
7. LTF change in order flow / OB is confirmed by candle close.

### Entry
Enter only after the LTF manipulation-to-distribution switch has CLOSED/confirmed.

### Stop
Beyond the manipulation high/low:
- long -> below manipulation low
- short -> above manipulation high

### Target
50% midpoint of the CLS range. Dave says always take partial or full profit there.

Primary source:
https://www.tradingview.com/chart/BTCUSDT.P/PkQJvVm4-Complete-system-for-Day-Swing-Traders/

Supplementary Model 1 source:
https://www.tradingview.com/chart/GBPUSD/wjRRXQpu-CLS-Model-1-100-Mechanical-Trading-setup/

## 10. Model 2 — public reconstruction

Model 2 generally becomes relevant after Model 1 / the first expansion has occurred.

Public rules:
- after Model 1 reaches/works toward the 50% objective, price may retrace;
- if trend/bias remains correct, find a key level in the 61.8%-80% pullback/reload zone;
- enter Model 2 from that pullback zone;
- target the full CLS range / opposite side;
- Model 2 is not always offered.

Dave's MQL5 shorthand calls Model 2 "liquidity sweep -> acceptance -> continuation".

Sources:
- https://www.tradingview.com/chart/BTCUSDT.P/PkQJvVm4-Complete-system-for-Day-Swing-Traders/
- https://www.tradingview.com/u/David_Perk/page-27/
- https://www.mql5.com/en/signals/2369911

### Important unresolved public details
The public material does NOT fully and numerically specify:
- exact Fibonacci anchor orientation in every range type;
- exact protected-swing algorithm for Model 2 stop;
- whether LTF CIOD is mandatory for every Model 2 variant (some public examples imply confirmation is useful; the complete article is less explicit than for Model 1).

Therefore an automated "exact Dave Model 2" cannot honestly be claimed from public material alone.

## 11. Session variant

Dave's London-session material distinguishes:

### London continuation
Asia has already manipulated into a key level and displaced away; CIOD/OB exists before London. London retraces into a premium/discount LTF key level and continues.

### London reversal
Asia consolidates near a HTF key level; London raids Asia liquidity into the key level, rejects and creates M15 order flow change/OB; target is HTF draw on liquidity.

He says a continuation may occur in the first part of London settlement; for reversal he suggests not entering before about 10 CET and waiting for clear order-flow change.

Source:
https://tw.tradingview.com/chart/BTCUSDT.P/XxzXz7Ll-High-probability-strategies-for-the-London-Session/

## 12. Dave's own 2026 process/risk observations

A TradingView post describing his review says:
- average target around 2.3R worked for him;
- maximum ~15 trades/month;
- no Mondays;
- focus on New York and PM sessions;
- focus on EUR, GBP, DXY, CHF and Bitcoin;
- Models 1, 2 and 3; Model 0 = entry without confirmation and is treated as a mistake.

These are creator-specific process notes, not necessarily immutable core CLS rules, and they are not identical to the fixed range targets described in the core system article.

Source: David_Perk TradingView profile page 120, "The Simplest Trading Strategy Nobody Talks About".

## 13. Current MQL5 signal — what it proves and what it does not

As captured in July 2026, MQL5 shows approximately:
- initial deposit: USD20,000
- profit: roughly USD700k (snapshot changes over time)
- ~9,900 historical trades
- win rate ~80%
- profit factor ~1.86-1.93 depending snapshot
- Sharpe ratio 0.08
- average hold ~2 days
- algo trading 88%
- creator says current CLS copy focus: EURUSD, USDCHF, GBPUSD, DXY; Weekly/Daily; Model 1 and Model 2.

However MQL5 explicitly states: "Trading style has changed. Part of history is not included in statistics." The signal was published on 20.04.2026 while the displayed account history goes back to 2019 and contains many instruments (including USDJPY, USDCAD, gold, AUD pairs, indices and others). Therefore the multi-year account growth CANNOT be treated as a clean independent backtest/live proof of the current Weekly/Daily CLS Model 1/2 rules.

Source:
https://www.mql5.com/en/signals/2369911

## 14. User reviews

Whop and Forex Peace Army currently contain positive user reviews about the teaching/community. These are anecdotal testimonials and cannot establish a strategy edge, because they are self-selected, have short histories in many cases, and do not provide a controlled sample of trades.

Sources:
- https://whop.com/david-perk-fx/cls-lab-membership/
- https://www.forexpeacearmy.com/forex-reviews/23466/davidperkfx-review

## 15. Critical check: what official CLS actually is

This is the most important distinction.

Official CLS Group describes CLSSettlement as financial-market infrastructure for **payment-versus-payment (PvP) settlement of already-executed FX transactions**, settlement-risk mitigation, multilateral netting and liquidity efficiency.

Current official figures:
- over USD8.0 trillion of payments settled per day;
- 18 currencies;
- over 75 settlement members and over 38,000 other users/participants.

CLSMarketData separately reports executed trade data submitted to CLS; April 2026 average daily traded volume submitted was USD2.53 trillion. This is NOT the same concept as the >USD8 trillion gross payment-instruction settlement value.

Sources:
- https://www.cls-group.com/products/settlement/clssettlement/
- https://www.cls-group.com/news/cls-fx-trading-activity-april-2026/
- https://www.cls-group.com/products/data/clsmarketdata/

### Official operational timeline
- 00:00 CET initial pay-in schedule
- trades/instructions can still be submitted up to 06:30 CET for same-day settlement
- 06:30 CET revised pay-in schedule
- 07:00 CET settlement starts
- target/typical settlement completion about 09:00 CET
- funding window continues to 12:00 CET

Sources:
- https://www.cls-group.com/news/update-on-the-potential-change-to-clssettlement-timelines-following-the-move-to-tplus1-securities-settlement/
- https://www.cls-group.com/insights/the-fx-ecosystem/fx-ecosystem-04-robust-and-resilient-fx-in-times-of-poly-crisis-shapingfx-series/
- https://www.cls-group.com/insights/innovation/report-reimagining-same-day-fx-exploring-the-case-for-additional-settlement-cycles-shapingfx-series/

## 16. What is NOT independently established

No official CLS Group source found supports the claim that:
- CLS itself is a directional market maker;
- CLS intentionally creates stop hunts;
- a large displacement candle can be uniquely identified as a "CLS candle" caused by CLS;
- the Model 1 / Model 2 chart patterns are a direct mechanical consequence of the CLS settlement cycle.

Official CLS material describes settlement/netting infrastructure, not a directional trading desk hunting liquidity. Thus Dave's link between the chart pattern and CLS settlement flows should be treated as his market hypothesis/narrative, not as a verified causal mechanism.

This does NOT automatically invalidate the price-action rules. A strategy may have statistical value even if its causal story is wrong. It means the rules must be validated empirically rather than accepted because of the CLS explanation.

## 17. What is sufficiently public to backtest

A "Dave Public Model 1" can be approximated with explicit mechanical definitions for:
- three-timeframe hierarchy;
- HTF candle-close bias;
- ITF range and same-timeframe close invalidation;
- premium/discount;
- liquidity sweep beyond range edge;
- key-level requirement;
- LTF CIOD close;
- stop behind manipulation extreme;
- 50% range target.

But numerical definitions still must be chosen for:
- how a CLS range is detected automatically;
- exact swing definition;
- OB/FVG/IFVG algorithm;
- minimum sweep distance;
- exact CIOD/engulfing algorithm when several candles are involved.

Any such choices create a **mechanical research implementation**, not an exact private Dave implementation.

## 18. Recommended canonical Strategy-B variants for this project

### B1 — DAVE_PUBLIC_SWING_M1
- HTF: Weekly bias/directional draw
- ITF: Daily CLS range + key level + manipulation
- LTF: H1 primary CIOD, M15 refinement
- Entry: after confirmed LTF order-flow change close
- SL: beyond manipulation extreme
- TP1: Daily range midpoint 50%
- no Model 2 in first baseline

This most closely matches Dave's current MQL5 Weekly/Daily emphasis.

### B2 — DAVE_PUBLIC_DAY_M1
- HTF: Daily bias
- ITF: H4 CLS range
- LTF: M15 CIOD (M5 optional but current feed lacks it)
- same entry/SL/50% target logic

This is the most feasible live version with the current GitHub feed once range/key-level detection is formalized.

### B3 — DAVE_PUBLIC_MODEL2
Do not automate until Fibonacci anchoring, stop selection and confirmation requirement are explicitly frozen. Test separately from Model 1.

## 19. Research integrity

Never mix the following under one performance number:
- Dave's historical MQL5 account history
- current Weekly/Daily CLS copy-trading rules
- our public-rule mechanical approximation
- any private academy rules not actually available to us

Every rule change gets a new version. Backtest other pairs only after the specification is frozen.
