# Forex Strategy Lab

Permanent research area for reproducible Forex strategy development.

## Rules

- Separate development, out-of-sample, and forward/shadow testing.
- Include spreads, slippage, commissions, and conservative same-bar handling.
- Record failed variants as well as successful ones.
- Do not promote a strategy from smoke test results.
- Do not change live or real-money systems automatically.
- Rankings are split by risk and horizon and require documented evidence.

## Status labels

- `IDEA`: rules not yet executable
- `SMOKE_TESTED`: code path validated on insufficient data
- `RESEARCH`: meaningful historical test in progress
- `OOS_CANDIDATE`: passed development gates, awaiting independent data
- `SHADOW`: forward test only
- `REJECTED`: failed a relevant test
