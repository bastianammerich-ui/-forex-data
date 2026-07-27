# FOREX TEST PROTOCOL V2 — Anti-Overfitting

## Ziel
Neue Kandidaten nicht nach dem höchsten EUR/USD-Profit auswählen, sondern nach Robustheit.

## Datenhierarchie
1. EUR/USD 2024–2025: bereits stark gesehen -> Development/Research.
2. EUR/USD 2026: nur noch eingeschränkt OOS, weil Ergebnisse bereits betrachtet wurden.
3. GBP/USD, USD/JPY, USD/CHF, USD/CAD, AUD/USD, NZD/USD: für A-V2.2 und verwandte Ideen primäre Cross-Pair-OOS-Daten, solange sie vor dem Test nicht zur Regelanpassung benutzt werden.
4. Später neu hinzukommende Daten ab Teststart: echter Forward-Test.

## Execution
- Native Broker-M1 wenn möglich.
- Signal nur auf abgeschlossener Kerze.
- Entry auf nächster handelbarer Kerze / realistischer Brokerkurs.
- Variable oder konservative Kosten: Spread + Kommission + ggf. Swap.
- Wenn TP und SL innerhalb derselben M1-Bar möglich: konservativ SL zuerst, sofern Tickdaten fehlen.
- Slippage-Stresstest zusätzlich.

## Keine freie Optimierung
Je Kandidat vor Test maximal:
- 1 Hauptspezifikation,
- höchstens 2 angrenzende Robustheitsvarianten.
Nicht 50 Parameterkombinationen und danach den Gewinner auswählen.

## Mindestmetriken
- Trades
- Profit Factor
- Expectancy in R
- Trefferquote
- Max Drawdown
- Max. Verlustserie
- Monats-/Jahreskonsistenz
- Anteil des Gewinns des besten Trades / besten Monats / besten Pairs
- Kosten-Stresstest
- Long/Short separat
- Session separat
- MFE/MAE
- Time-in-market

## OOS-Akzeptanz für einen ernsthaften Forward-Kandidaten
Richtwerte, keine Naturgesetze:
- aggregierter OOS PF >= 1.30
- Median-Pair PF > 1.10
- mindestens 4 von 6 neuen Majors PF > 1.0
- aggregiert >= 100 abgeschlossene Trades oder entsprechend lange Langfrist-Historie
- Max-DD <= 15% bei 2% dynamischem Risiko; besser deutlich darunter
- kein einzelnes Pair > 40% des gesamten Gewinns
- bei +50% Kostenannahme weiterhin PF > 1
- Nachbarparameter bleiben positiv (Parameterplateau)
- Long und Short nicht beide zwingend profitabel, aber keine Seite darf das Ergebnis durch wenige Ausreißer dominieren

## Multiple Testing
Da bereits viele Strategien getestet wurden:
- Anzahl aller Varianten protokollieren.
- Block-Bootstrap (Monat/Quartal) statt IID-Bootstrap.
- White/SPA Reality-Check soweit praktikabel.
- Deflated Sharpe Ratio für Kandidaten mit ausreichender Renditefrequenz.
- Gewinnerwartung nach Backtest bewusst haircutten.

## Reihenfolge
### Welle 1 – sofort nach Beschaffung der 6 Pair-Datensätze
1. A-V2.2 unverändert auf 6 Majors.
2. Regime-Blend A-V2.2 + v3.
3. Broad-USD-Factor Confirmation.
4. Session-Seasonality nur als vorab definierter Filter.
5. Daily TSMOM Basisversion.

### Welle 2 – Cross-Sectional
6. Cross-sectional Currency Momentum.
7. Price-only Factor Momentum / Dollar-Factor Momentum.

### Welle 3 – zusätzliche Daten
8. Carry + Momentum (Forward-/Swapdaten).
9. Macro-News Surprise Continuation (Actual/Consensus-Timestamps).

### Welle 4 – lange Historie
10. Skewness/Kurtosis-enhanced Momentum.
11. Currency Value + Momentum.

## Stop-Regeln für Forschung
- Strategie nicht retten, wenn OOS scheitert.
- Keine Regeländerung nach einzelnen Verlusttrades.
- Jede Regeländerung erhält neue Versionsnummer.
- Nach OOS-Test keine rückwirkende Umschreibung der alten Version.
