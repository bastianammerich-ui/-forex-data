# Dave CLS – EUR/USD Backtest V1

**Status:** Mechanical public-rule approximation, **not** private exact Dave/CLS rules.

## Data
TMGM EUR/USD native data, 2024-01-02 through 2026-07-24.
Execution resolved on M1. Main comparison assumes fixed 1.0 pip spread.
Risk model: 10,000 EUR start, 2% dynamic risk per trade.
If SL and TP are both reachable in the same M1 candle, SL is counted first.

## Mechanical public-rule approximation
- Weekly bias from the last completed weekly candle vs its predecessor.
- Swing CLS range proxy = previous completed Daily candle high/low.
- Manipulation = M15 sweep beyond prior Daily range edge + M15 close back inside.
- Premium/discount = latest confirmed Daily dealing-range midpoint proxy.
- CIOD proxy = lower-timeframe close through the most recent opposing-color candle.
- Entry = next M15/H1 open after confirmed CIOD.
- SL = beyond manipulation extreme (+0.1 pip buffer).
- TP = 50% of prior Daily CLS-range proxy.
- Key-level variant = overlap with an active Daily FVG; an FVG/OB proxy was also checked.
- No minimum-RR filter, no time exit, no hindsight parameter changes.

## Main result — B1 Swing, M15 confirmation, core
- Trades: 80
- Wins: 37
- Win rate: 46.25%
- PF: 1.365
- Total: 15.71 R
- Max DD: 16.81%
- 10,000 EUR -> 13069.38 EUR
- Max loss streak: 5

Yearly:
|   year |   trades |   wins |   winrate |       pf |        R |
|-------:|---------:|-------:|----------:|---------:|---------:|
|   2024 |       24 |     13 |   54.1667 | 2.71396  | 18.8536  |
|   2025 |       41 |     19 |   46.3415 | 1.08147  |  1.79225 |
|   2026 |       15 |      5 |   33.3333 | 0.506792 | -4.93208 |

## Stricter public-key-level proxy — Daily FVG
- Trades: 18
- Win rate: 55.56%
- PF: 1.256
- Total: 2.05 R
- Max DD: 6.54%
- 10,000 EUR -> 10375.92 EUR

Yearly:
|   year |   trades |   wins |   winrate |      pf |        R |
|-------:|---------:|-------:|----------:|--------:|---------:|
|   2024 |        5 |      3 |   60      | 1.83117 | 1.66235  |
|   2025 |        9 |      5 |   55.5556 | 1.04334 | 0.173376 |
|   2026 |        4 |      2 |   50      | 1.10667 | 0.213331 |

## H1 confirmation
Core H1: PF 1.209, 61 trades, 5.21R.
FVG-key-level H1: PF 0.816, 12 trades, -0.92R.

## Day-model diagnostic
Daily bias -> H4 range -> M15 confirmation was also tested.
The stricter FVG/OB proxy version produced 106 trades, PF 0.971, -1.18R, Max DD 18.70%.
This version did not show a robust positive edge.

## Interpretation
The public CLS concept is not rejected outright: the core Swing/M15 proxy is positive across the full sample at 1 pip spread.
However it is **not robust enough yet** for an evidence-based live endorsement:
- 2024 is strong;
- 2025 is only marginally positive;
- 2026 is negative;
- the stricter FVG key-level variant has only 18 trades and only a small aggregate edge;
- several public terms (exact CLS-range formation, exact OB/IFVG algorithm and exact CIOD implementation) are not numerically specified in the public material.

Therefore these results must not be presented as Dave's exact historical performance.
