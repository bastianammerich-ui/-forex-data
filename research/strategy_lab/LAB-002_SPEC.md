# LAB-002 — H4 EMA Pullback Continuation

## Classification

- Horizon: swing
- Intended account risk: low, 0.5% per trade
- Timeframe: H4
- Universe: seven FX majors
- Status: rejected in current form after smoke test

## Frozen rules tested

1. Exclude Saturday and Sunday bars.
2. Trend: EMA20 above/below EMA80 and EMA20 slope over three bars in trend direction.
3. Pullback: at least one of the current/previous three bars touches EMA20.
4. Confirmation: close returns beyond EMA20 in trend direction with body/range >= 50%.
5. Reject entries more than 1 ATR14 from EMA20.
6. Enter at next H4 open.
7. Stop: 2 ATR14.
8. Target: 2.5R.
9. Time exit after 18 H4 bars.
10. One position per pair.
11. Same-bar conflict: stop first.
12. Cost approximation: 1.2 pip round turn.

## Dataset and limitations

The live feed supplied 300 H4 bars per pair, roughly 50 calendar days. All tested H4 series had zero rejected candles. This is enough for a technical smoke test, not a durable edge estimate.

## Result

- Trades: 21
- Win rate: 14.29%
- Profit factor: 0.268
- Total: -12.352R
- Max drawdown: 12.352R

No parameter tuning is authorized on this short sample.
