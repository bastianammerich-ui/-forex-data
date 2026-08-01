# LAB-010 â€” H1 Rolling-Hedge Pair Mean Reversion

## Status und Einordnung

Statistical-Arbitrage-/Relative-Value-Smoke-Test, mittleres Risiko, vorgesehenes Risiko 0,25 % je Spread. Nicht live freigegeben.

## Spreads

- EUR/USD gegen GBP/USD
- AUD/USD gegen NZD/USD
- USD/CHF gegen USD/CAD

Jeweils 400 vollstÃ¤ndige H1-Kerzen aus dem validierten Feed vom `2026-07-31T19:47:54.481Z`.

## Regeln

1. Rollierende OLS-Regression der Logpreise Ã¼ber die letzten 60 abgeschlossenen H1-Kerzen: `log(P1) = alpha + beta * log(P2) + residual`.
2. Residual-Z-Score anhand derselben vergangenen 60 Kerzen.
3. Bei Z â‰¥ +2 wird der Spread am nÃ¤chsten H1-Open verkauft, bei Z â‰¤ âˆ’2 gekauft.
4. Alpha, Beta, Mittelwert und Standardabweichung werden beim Signal eingefroren.
5. Ziel: Residual erreicht oder Ã¼berschreitet Z=0 auf Schlusskursbasis.
6. Stop: Residual erreicht |Z|=3,5 in Verlust-Richtung auf Schlusskursbasis.
7. Zeit-Exit nach 48 H1-Kerzen.
8. Eine eingefrorene Residual-Standardabweichung entspricht 1R. Dies verhindert instabile R-Skalierung bei Entries nahe der Stop-Grenze.

## Kosten

1,5 Pip Round-Turn je Leg, mit absolutem Hedge-Beta gewichtet; keine gesonderte Slippage.

## Methodischer Hinweis

Ein verworfener Vorlauf verwendete die Restdistanz vom Entry zur 3,5Ïƒ-Grenze als 1R. Bei Gaps konnte diese gegen null gehen und sinnlose R-Werte erzeugen. Dieser Harness-Fehler wurde nicht als Ergebnis gespeichert. Der gÃ¼ltige Test verwendet die stabile 1Ïƒ-Risikoeinheit.

## Entscheidung

Keine nachtrÃ¤gliche Auswahl anderer Spreads oder Z-Grenzen. Eine rollierende Regression allein beweist keine StationaritÃ¤t; die getestete Fassung bleibt als negativer Benchmark erhalten.

