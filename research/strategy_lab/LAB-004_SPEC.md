# LAB-004 â€” Weekly Cross-Sectional Currency Strength Portfolio

## Status

Vorab spezifizierter Smoke-Test. Keine Parameteroptimierung. Nicht fÃ¼r Live- oder Echtgeldbetrieb freigegeben.

## Klasse und Risiko

- Klasse: Relative Strength / Cross-Sectional / Portfolio / Swing
- Zeithorizont: 5 Handelstage
- Risikoprofil: Medium
- Vorgesehenes Risiko: 0,5 % je Leg, hÃ¶chstens 1,0 % initial pro Portfolio

## Universum und Daten

EUR/USD, GBP/USD, USD/JPY, USD/CHF, USD/CAD, AUD/USD und NZD/USD. Es werden ausschlieÃŸlich vollstÃ¤ndige, validierte Daily-Kerzen an gemeinsamen Wochentagen verwendet. Der Testfeed stammt aus GitHub-Commit `839131c418abca362e43bf05d77e78db1cdec025` und wurde am `2026-07-31T19:47:54.481Z` erzeugt.

## Regeln

1. Nach 20 gemeinsamen Handelstagen wird fÃ¼r jede Nicht-USD-WÃ¤hrung ihre 20-Tage-Rendite gegenÃ¼ber USD berechnet.
2. Alle sieben WÃ¤hrungen werden absteigend sortiert.
3. Am nÃ¤chsten Daily-Open wird die stÃ¤rkste WÃ¤hrung gegen USD gekauft und die schwÃ¤chste gegen USD verkauft.
4. Beide Legs werden gleich gewichtet. Falls USD im Paar die Basis ist, wird die Handelsrichtung entsprechend invertiert.
5. Initialer Stop je Leg: 2 Ã— ATR(14), berechnet am Signaltag.
6. Ohne Stop-AuslÃ¶sung erfolgt der Exit am Schluss der fÃ¼nften Haltedauer-Kerze.
7. AnschlieÃŸend wird anhand des nÃ¤chsten festen 5-Tage-Rasters neu ausgewÃ¤hlt. Keine Ã¼berlappenden Portfolios.

## Kosten und AusfÃ¼hrung

- 1,5 Pip Round-Turn-Kosten je Leg, je zur HÃ¤lfte an Entry und Exit belastet
- Keine zusÃ¤tzliche Slippage modelliert
- Stop-AusfÃ¼hrung wird konservativ inklusive Exit-Kosten gerechnet
- Portfolio-R ist der Mittelwert der beiden Leg-R-Ergebnisse

## Vorab festgelegte Bewertung

Der kurze Feed ist nur ein Smoke-Test. Eine BefÃ¶rderung erfordert unabhÃ¤ngige Langzeitdaten, PF > 1 nach Kosten, Nachbarparameter- und Kostenstress sowie Walk-Forward/OOS-PrÃ¼fung. Ein negatives Ergebnis wird dokumentiert und nicht durch nachtrÃ¤gliche Filter repariert.

## EinschrÃ¤nkungen

Die beiden USD-Legs sind nur eine handelbare NÃ¤herung fÃ¼r ein direktes Strongest-vs-Weakest-Cross. Der vorhandene Zeitraum umfasst weniger als ein Jahr und ist fÃ¼r langfristige FaktorprÃ¤mien nicht belastbar.

