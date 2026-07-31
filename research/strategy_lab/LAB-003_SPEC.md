# LAB-003 — Daily 60-Day Time-Series Momentum

## Classification

- Horizon: swing / position
- Intended account risk: low, 0.5% per position
- Timeframe: Daily
- Universe: seven FX majors
- Status: rejected in current form after smoke test

## Frozen rules tested

1. Exclude Saturday and Sunday bars.
2. Calculate 60-trading-day close-to-close momentum.
3. Calculate EMA100.
4. Long only when momentum > 0 and close > EMA100.
5. Short only when momentum < 0 and close < EMA100.
6. Evaluate every 20 trading bars.
7. Enter at next daily open.
8. Catastrophic stop: 3 ATR14.
9. Exit at the next 20-bar rebalance or stop.
10. Cost approximation: 1.5 pip round turn.
11. Intended position risk: 0.5%.

## Data limitation

The feed contains 300 daily records, less than one year after weekday filtering. The known invalid NZD/USD daily candle was rejected by the feed. This run is a smoke test, not a test of the established long-horizon momentum premium.

## Result

- Trades: 40
- Win rate: 27.50%
- Profit factor: 0.366
- Total: -14.147R
- Max drawdown: 14.147R

No tuning is authorized on this short sample. A legitimate momentum test needs multiple market cycles and ideally 10+ years of daily data.
