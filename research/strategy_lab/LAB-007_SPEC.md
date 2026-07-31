# LAB-007 â€” M15 EMA-Regime Pullback Reclaim

## Status

Vorab spezifizierter Scalping-Smoke-Test. Positives Basisergebnis ist wegen DatenlÃ¤nge und Kostenempfindlichkeit nur `RESEARCH_ONLY`; keine Live-Freigabe.

## Einordnung

- Klasse: Scalping / Trendfolge / Pullback
- Zeithorizont: M15, hÃ¶chstens zwei Stunden
- Risikoprofil: High
- Vorgesehenes Risiko: 0,25 % je Trade

## Daten

Sieben Majors mit jeweils 500 M15-Kerzen aus dem validierten GitHub-Feed vom `2026-07-31T19:47:54.481Z`. Nur vollstÃ¤ndige Kerzen. EMA(200) lÃ¤sst lediglich rund 300 Kerzen effektiven Testzeitraum.

## Regeln

1. Long-Regime: EMA(50) > EMA(200) und EMA(200) hÃ¶her als vier Kerzen zuvor. Short gespiegelt.
2. Long-Trigger: vorheriger Close unter EMA(20), aktueller bullischer Close Ã¼ber EMA(20). Short gespiegelt.
3. BestÃ¤tigungskerze: Body/Range mindestens 50 %.
4. Signale nur 06:00 bis 18:59 UTC.
5. Entry am nÃ¤chsten M15-Open.
6. Stop: 1,2 Ã— ATR(14).
7. Ziel: 1,8R.
8. Zeit-Exit nach acht M15-Kerzen. Nur eine Position je Paar gleichzeitig; bei Stop und Ziel in derselben Kerze gilt Stop zuerst.

## Kosten

- Basistest: 1,5 Pip Round-Turn
- Vorab begrÃ¼ndeter Stress: 1,0 und 2,0 Pip
- Keine gesonderte Slippage

## Entscheidungskriterien

Keine BefÃ¶rderung aufgrund dieses kurzen Samples. Erforderlich sind mehrjÃ¤hrige M15-Daten, getrenntes OOS, Cross-Pair-StabilitÃ¤t, Nachbarparameter sowie weiterhin PF > 1 bei mindestens 2,0 Pip Gesamtkosten.

