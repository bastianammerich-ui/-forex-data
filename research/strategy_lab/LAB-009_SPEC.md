# LAB-009 â€” H4 Donchian 20/10 Trend Following

## Status und Einordnung

Unoptimierter klassischer Trendfolge-Smoke-Test. Swing / Trend / Breakout, Low Risk; vorgesehenes Risiko 0,25 % je Position. Nicht live freigegeben.

## Daten

Sieben Majors, 299 vollstÃ¤ndige H4-Kerzen je Paar aus dem validierten Feed vom `2026-07-31T19:47:54.481Z`.

## Regeln

1. Long-Signal bei Close Ã¼ber dem hÃ¶chsten Hoch der vorherigen 20 H4-Kerzen; Short unter dem tiefsten Tief.
2. Entry am nÃ¤chsten H4-Open.
3. Notstopp bei 2 Ã— ATR(20).
4. Long-Exit bei Close unter dem tiefsten Tief der vorherigen zehn H4-Kerzen; Short gespiegelt.
5. SpÃ¤tester Exit nach 60 H4-Kerzen.
6. Eine Position je Paar gleichzeitig; Intrabar-Stop hat Vorrang vor dem Schlusskurs-Exit.

## Kosten

1,5 Pip Round-Turn, hÃ¤lftig auf Entry und Exit; keine gesonderte Slippage.

## Interpretation

Etwa 50 Kalendertage sind kein valider Horizont fÃ¼r eine konvexe Trendstrategie. Das Ergebnis erlaubt keine generelle Aussage Ã¼ber Donchian-Systeme, aber keine BefÃ¶rderung dieser Instanz. Die Regeln werden fÃ¼r einen spÃ¤teren mehrjÃ¤hrigen OOS-Test unverÃ¤ndert bewahrt.

