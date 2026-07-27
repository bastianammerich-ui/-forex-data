# A-V2.2 BODYCAP — eingefrorene Forschungs-Spezifikation

## Status
Research / Forward-Test-Kandidat. Noch kein bewiesener Echtgeld-Edge.

## Basis
A-V2.1-LUNCH-BLOCK plus genau eine zusätzliche Regel:

**Bestätigungskerze M15: Body/Range muss zwischen 0,50 und 0,80 liegen.**

Rationale: Sehr große Bestätigungskerzen werden nicht mehr hinterhergejagt.

## Regeln
- H4: Close relativ EMA200 + 3-Bar-EMA-Slope in Trendrichtung
- H1: Close relativ EMA100 + 3-Bar-EMA-Slope in Trendrichtung
- H1 ADX(14) >= 25
- M15 EMA30 Pullback / Reclaim
- RSI(14), letzte 4 M15:
  - Long: Minimum <= 40, aktueller RSI >= 45
  - Short: Maximum >= 60, aktueller RSI <= 55
- M15 Body/Range >= 0,50 UND <= 0,80
- Keine neuen Signale 11:00–13:59 TMGM-Serverzeit
- Entry: nächste M15-Eröffnung
- SL: 2,0 × M15 ATR(14)
- TP: 3,0 R
- Time Exit: 16 M15-Bars = 4 Stunden
- Risiko: 2 % dynamisch
- Maximal eine Position gleichzeitig
- Intrabar bei gleichzeitig möglichem SL/TP: konservativ SL zuerst

## EUR/USD TMGM 2024–24.07.2026, 1 Pip Spread
- 44 Trades
- PF: 2,618
- Gesamt: +21,893 R
- Trefferquote: 54,55 %
- Max-DD: 5,88 %
- 10.000 EUR -> 15.240,09 EUR

Jahre:
- 2024: 21 Trades, PF 2,931, +10,793 R
- 2025: 13 Trades, PF 2,096, +5,668 R
- 2026 bis 24.07.: 10 Trades, PF 2,961, +5,432 R

## Spread-Stresstest
- 0,5 Pip: PF 2,985, +24,312 R
- 1,0 Pip: PF 2,618, +21,893 R
- 1,5 Pip: PF 2,490, +20,697 R
- 2,0 Pip: PF 2,211, +18,331 R

## Wichtige Einschränkung
Es wurden viele Strategien/Varianten untersucht. Dadurch besteht Data-Snooping-/Multiple-Testing-Risiko. Die nächste echte Prüfung muss unverändert auf anderen Währungspaaren und im Forward-Test erfolgen.
