# LAB-006 â€” London H1 Opening-Range Breakout

## Status

Vorab spezifizierter Session-Smoke-Test. Keine nachtrÃ¤gliche Stunden-, Range- oder Zieloptimierung. Nicht live freigegeben.

## Einordnung

- Klasse: Session / Opening Range / Breakout
- Zeithorizont: Intraday
- Risikoprofil: High (Breakout- und Session-Cluster-Risiko)
- Vorgesehenes Risiko: 0,5 % je Trade

## Daten

Sieben Majors, jeweils 400 H1-Kerzen aus dem validierten GitHub-Feed vom `2026-07-31T19:47:54.481Z`. Zeitstempel werden als UTC interpretiert. Nur vollstÃ¤ndige Kerzen an Wochentagen werden berÃ¼cksichtigt.

## Regeln

1. Opening Range: hÃ¶chstes Hoch und tiefstes Tief der 06:00- und 07:00-UTC-H1-Kerzen.
2. Handelsfenster: 08:00 bis einschlieÃŸlich 14:00 UTC.
3. Entry beim ersten einseitigen Bruch der Range: Long am Range-Hoch oder Short am Range-Tief.
4. Werden beide Grenzen erstmals in derselben H1-Kerze berÃ¼hrt, wird der Tag wegen unbekannter Intrabar-Reihenfolge verworfen.
5. Stop: gegenÃ¼berliegende Range-Grenze.
6. Ziel: 1,5R.
7. Falls weder Stop noch Ziel erreicht wird, Exit am Schluss der 15:00-UTC-Kerze.
8. Nur ein Trade pro Paar und Tag. Liegen Stop und Ziel in derselben Kerze, gilt konservativ Stop zuerst.

## Kosten

- 1,5 Pip Round-Turn-Kosten, je zur HÃ¤lfte an Entry und Exit
- Keine gesonderte Slippage

## Grenzen

Der Zeitraum umfasst nur rund 16 Kalendertage. Damit lassen sich weder Sommer-/Winterzeit noch unterschiedliche VolatilitÃ¤ts- und Newsregime prÃ¼fen. Ein spÃ¤terer unverÃ¤nderter Test benÃ¶tigt mehrere Jahre H1-Daten und einen UTC-/Brokerzeit-Abgleich.

