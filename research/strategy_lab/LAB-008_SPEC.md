# LAB-008 â€” H1 Inside-Bar Trend Breakout

## Status und Klasse

Vorab spezifizierter Smoke-Test ohne Optimierung. Price Action / Breakout / Intraday, mittleres Risiko, vorgesehenes Risiko 0,5 % je Trade. Nicht live freigegeben.

## Daten

Sieben Majors, jeweils 400 vollstÃ¤ndige H1-Kerzen aus dem validierten Feed vom `2026-07-31T19:47:54.481Z`.

## Regeln

1. Inside Bar: Hoch strikt unter und Tief strikt Ã¼ber den Grenzen der unmittelbar vorherigen Mother Bar.
2. Long nur bei Close Ã¼ber EMA(100) und steigender EMA(100) gegenÃ¼ber vier Kerzen zuvor. Short gespiegelt.
3. Stop-Order am Mother-Bar-Hoch beziehungsweise -Tief in Trendrichtung; gÃ¼ltig fÃ¼r die nÃ¤chsten drei H1-Kerzen.
4. Stop am gegenÃ¼berliegenden Extrem der Inside Bar.
5. Ziel 2R; Zeit-Exit nach zwÃ¶lf H1-Kerzen.
6. Nur ein Trade pro Paar gleichzeitig. Treffen Stop und Ziel in derselben Kerze, wird Stop zuerst gewertet.
7. Setups mit Risikodistanz kleiner oder gleich den modellierten Gesamtkosten werden verworfen.

## Kosten

1,5 Pip Round-Turn, hÃ¤lftig auf Entry und Exit; keine gesonderte Slippage.

## Forschungsentscheidung

Ein deutlich negatives Basisergebnis wird nicht durch nachtrÃ¤gliche Pattern-, Zeit- oder Range-Filter repariert. Die Spezifikation bleibt als negativer Benchmark erhalten.

