# LAB-007-R1 â€” Locked-Rule Robustness Audit

## Zweck

Keine neuen Parameter und keine Reparatur des positiven Smoke-Tests. GeprÃ¼ft werden ausschlieÃŸlich zeitliche StabilitÃ¤t, Cross-Pair-Breite, Gewinnkonzentration, Leave-one-pair-out und der bereits festgelegte Kostenstress.

## Ergebnis

- Baseline: 52 Trades, PF 1,077, +2,506R, Max-DD 13,334R
- Erste chronologische HÃ¤lfte: 26 Trades, PF 1,171, +2,689R
- Zweite chronologische HÃ¤lfte: 26 Trades, PF 0,989, âˆ’0,184R
- Positive Paare: 2 von 7
- AUD/USD: +4,858R; ohne AUD/USD fÃ¤llt der Rest auf PF 0,922 und âˆ’2,353R
- USD/JPY: +4,811R; ohne USD/JPY fÃ¤llt der Rest auf PF 0,924 und âˆ’2,306R
- SchwÃ¤chstes Paar USD/CAD: âˆ’2,891R
- Die fÃ¼nf grÃ¶ÃŸten Gewinner liefern 25,17 % des gesamten Bruttogewinns
- Kostenstress 2,0 Pip: PF 0,925 und âˆ’2,655R

## Entscheidung

`INSUFFICIENT_AND_FRAGILE`. Der positive Basistest ist weder Ã¼ber die Paare noch in der zweiten ZeithÃ¤lfte ausreichend stabil und verschwindet bei hÃ¶herer Kostenannahme. Keine BefÃ¶rderung, keine Live-Freigabe und kein Ausschluss der schwachen Paare anhand dieses Samples.

## NÃ¤chster valider Schritt

Regeln unverÃ¤ndert lassen. Erst auf mehrjÃ¤hrigen M15-Daten mit chronologischem OOS, echten zeitvariablen Spreads und Brokerzeit-Abgleich erneut prÃ¼fen.

