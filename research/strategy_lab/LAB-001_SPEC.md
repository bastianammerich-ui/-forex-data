# LAB-001 — H1 Volatility-Compression Breakout

## Classification

- Horizon: intraday
- Intended risk: medium
- Timeframe: H1
- Universe: EUR/USD, GBP/USD, USD/JPY, USD/CHF, USD/CAD, AUD/USD, NZD/USD
- Status: rejected in current form after smoke test

## Frozen rules tested

1. Calculate EMA50 on H1 closes.
2. Calculate ATR14 and ATR50 from H1 true range.
3. Compression requires ATR14 <= 0.85 × ATR50.
4. Long signal: completed H1 close above the preceding 20-bar high and above EMA50.
5. Short signal: completed H1 close below the preceding 20-bar low and below EMA50.
6. Enter at the next H1 open.
7. Stop distance: 1.5 × signal-bar ATR14.
8. Target: 2R.
9. Time exit after at most 24 H1 bars.
10. Only one position per pair at a time.
11. Same-bar SL/TP conflict: SL first.
12. Cost approximation: 1.0 pip round turn.

## Test limitations

The available feed contained only 400 H1 bars per pair, roughly 16 calendar days. This run validates the test implementation and rejects the current form on this small sample; it cannot establish long-run performance.

## Smoke-test result

- Trades: 24
- Win rate: 25.0%
- Profit factor: 0.424
- Total: -11.433R
- Max drawdown: 13.394R

No parameter tuning is authorized on this sample.
