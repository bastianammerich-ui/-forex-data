# LAB-007-R2 â€” Symmetric Neighbor-Parameter Audit

## Methodik

Die Baseline wurde nicht verÃ¤ndert. Sechs symmetrische Nachbarn wurden vorab festgelegt und gleichberechtigt geprÃ¼ft: Bodyfilter 0,4/0,6 statt 0,5; Stop 1,0/1,4 ATR statt 1,2; Ziel 1,5/2,1R statt 1,8. Kosten bleiben 1,5 Pip. Es wird kein Gewinner ausgewÃ¤hlt.

## Gesamtergebnisse

| Variante | Trades | PF | R | Max-DD R |
|---|---:|---:|---:|---:|
| Baseline | 52 | 1,077 | +2,506 | 13,334 |
| Body 0,4 | 54 | 1,016 | +0,557 | 13,334 |
| Body 0,6 | 43 | 1,051 | +1,379 | 12,856 |
| Stop 1,0 ATR | 52 | 1,050 | +1,664 | 12,189 |
| Stop 1,4 ATR | 48 | 1,011 | +0,299 | 11,011 |
| Ziel 1,5R | 52 | 1,060 | +1,806 | 10,257 |
| Ziel 2,1R | 51 | 1,065 | +2,118 | 13,951 |

Alle Varianten sind nominal positiv, jedoch nur knapp. Positive Paare liegen je nach Variante bei lediglich 2 bis 4 von 7. Die Baseline-ZweithÃ¤lfte bleibt mit PF 0,989 negativ; Nachbar-ZweithÃ¤lften schwanken deutlich.

## Entscheidung

Das Plateau reduziert den Verdacht eines einzigen magischen Baseline-Parameters, beweist aber keinen robusten Edge. Der Zeitraum umfasst nur ungefÃ¤hr fÃ¼nf Handelstage, 2-Pip-Kostenstress ist negativ und LAB-007-R1 zeigte starke AbhÃ¤ngigkeit von AUD/USD und USD/JPY. Status bleibt `FRAGILE_RESEARCH_ONLY`; keine ParameterÃ¤nderung und keine Live-Freigabe.

