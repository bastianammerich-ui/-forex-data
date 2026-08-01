# LAB-011 â€” Asia-Range Liquidity-Sweep Fade

## Status und Einordnung

Mechanischer Session-/Liquidity-Sweep-/Mean-Reversion-Smoke-Test, mittleres Risiko, vorgesehenes Risiko 0,5 % je Trade. Nicht live freigegeben.

## Daten

Sieben Majors mit je 400 H1-Kerzen aus dem validierten Feed vom `2026-07-31T19:47:54.481Z`. Zeitstempel werden als UTC behandelt.

## Regeln

1. Asia Range: Hoch und Tief der Kerzen von 00:00 bis 05:00 UTC.
2. Signalzeit: 06:00 bis 10:00 UTC.
3. Short-Signal: Wick Ã¼ber Range-Hoch und Close strikt zurÃ¼ck innerhalb der Range. Long gespiegelt.
4. Sweep beider Grenzen in derselben Signalkerze verwirft den Tag.
5. Entry am nÃ¤chsten H1-Open, sofern der Range-Mittelpunkt noch in Gewinnrichtung liegt.
6. Stop jenseits des Signalextrems plus 10 % der Asia-Range.
7. Ziel am Range-Mittelpunkt; ansonsten Exit am Schluss der 15:00-UTC-Kerze.
8. Ein Trade pro Paar und Tag. Bei Stop und Ziel in derselben Kerze gilt Stop zuerst.

## Kosten

1,5 Pip Round-Turn, hÃ¤lftig an Entry und Exit; keine gesonderte Slippage.

## Entscheidung

Die reine Sweep-und-Reentry-Hypothese wird ohne nachtrÃ¤gliche Zusatzfilter bewertet. Das negative Ergebnis wird als Benchmark gespeichert; Key-Level- oder Trendfilter wÃ¤ren eine eigenstÃ¤ndige, vorab zu definierende Strategie.

