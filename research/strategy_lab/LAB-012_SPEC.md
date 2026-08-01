# LAB-012 â€” H1 Keltner Trend Expansion

## Status und Einordnung

VolatilitÃ¤ts-/Trendfolge-Smoke-Test, Intraday, mittleres Risiko, vorgesehenes Risiko 0,5 % je Trade. Nicht live freigegeben.

## Daten

Sieben Majors mit je 400 vollstÃ¤ndigen H1-Kerzen aus dem validierten Feed vom `2026-07-31T19:47:54.481Z`.

## Regeln

1. Keltner-Expansion: Close auÃŸerhalb EMA(20) Â± 1,5 Ã— ATR(20).
2. Long nur bei EMA(20) > EMA(50), Short gespiegelt.
3. ADX(14) muss mindestens 25 betragen.
4. Entry am nÃ¤chsten H1-Open.
5. Stop bei 1,5 Ã— ATR(20).
6. Dynamischer Exit bei Close durch EMA(20) entgegen der Position.
7. SpÃ¤tester Exit nach 24 H1-Kerzen.
8. Eine Position je Paar gleichzeitig; Intrabar-Stop wird vor Schlusskurs-Exit gewertet.

## Kosten

1,5 Pip Round-Turn, hÃ¤lftig an Entry und Exit; keine gesonderte Slippage.

## Entscheidung

Die Kanalbreite, ADX-Schwelle und Exit-Regel werden nach dem Ergebnis nicht angepasst. Diese Fassung bleibt als negativer VolatilitÃ¤ts-/Trend-Benchmark erhalten.

