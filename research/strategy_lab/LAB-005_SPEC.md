# LAB-005 â€” H4 Regime-Filtered Bollinger Mean Reversion

## Status

Vorab spezifizierter Smoke-Test ohne Parametersuche. Nicht fÃ¼r Live- oder Echtgeldbetrieb freigegeben.

## Einordnung

- Klasse: Mean Reversion / VolatilitÃ¤t / Regime
- Zeithorizont: Intraday bis kurzer Swing
- Risikoprofil: Medium
- Vorgesehenes Risiko: 0,5 % je Position

## Universum und Daten

Sieben Forex-Majors aus dem validierten GitHub-Feed. Verwendet werden 299 vollstÃ¤ndige H4-Kerzen je Paar aus dem Feed vom `2026-07-31T19:47:54.481Z`.

## Regeln

1. Bollinger Bands: SMA(20) Â± 2 Populations-Standardabweichungen.
2. Long-Signal: H4-Close unter unterem Band, RSI(14) < 30 und ADX(14) â‰¤ 20.
3. Short-Signal: H4-Close Ã¼ber oberem Band, RSI(14) > 70 und ADX(14) â‰¤ 20.
4. Entry am nÃ¤chsten H4-Open. Liegt der Mittelwert bereits hinter dem Entry, wird nicht gehandelt.
5. Stop: 1,5 Ã— ATR(14) vom Entry.
6. Ziel: SMA(20) zum Signalzeitpunkt.
7. Zeit-Exit nach 12 H4-Kerzen.
8. Nur eine Position je Paar gleichzeitig. Bei Stop und Ziel in derselben Kerze gilt konservativ Stop zuerst.

## Kosten

- 1,5 Pip Round-Turn-Kosten, je zur HÃ¤lfte auf Entry und Exit
- Keine gesonderte Slippage

## Forschungsdisziplin

Der verfÃ¼gbare Zeitraum ist fÃ¼r Regimeaussagen unzureichend. Grenzwerte werden nach diesem Ergebnis nicht angepasst. Ein spÃ¤terer unverÃ¤nderter Test benÃ¶tigt mehrere Jahre, Kostenstress, NachbarparameterprÃ¼fung und getrennte OOS-Perioden.

