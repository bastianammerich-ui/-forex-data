# FOREX STRATEGY RESEARCH MASTER V2
Stand: 27.07.2026

## 1. Ausgangslage

Bisher wurden auf TMGM EUR/USD 2024–24.07.2026 bereits 25 Strategiefamilien / 76 feste Varianten untersucht. Die meisten klassischen Intraday-Ansätze waren nicht robust: Donchian/Breakout, Opening Range Breakout, Bollinger Squeeze, Keltner, RSI/MACD Momentum, mehrere Mean-Reversion- und Candle-Pattern-Ansätze.

Der bislang stärkste lokale Kandidat ist A-V2.2 BODYCAP:
- 44 Trades
- PF 2,618 bei 1 Pip Spread
- +21,893 R
- Trefferquote 54,55%
- Max-DD 5,88%
- 2024 PF 2,931
- 2025 PF 2,096
- 2026 bis 24.07. PF 2,961

Wichtig: EUR/USD wurde inzwischen intensiv untersucht. Diese Zahlen sind deshalb Forschungsresultate, kein Beweis eines echten Edge. Die sechs anderen Majors sind für unveränderte Regeln wesentlich wertvoller.

## 2. Was die externe Forschung nahelegt

### 2.1 Trend / Time-Series Momentum
Peer-reviewed Forschung dokumentiert Time-Series-Momentum in Currency Futures über ungefähr 1–12 Monate. Das ist ein anderer Horizont als unser M15/H1-System und deshalb ein sinnvoller Diversifikator.

### 2.2 Cross-Sectional Currency Momentum
Currency Momentum ist als eigenständige FX-Prämie dokumentiert. Transaktionskosten und Limits to Arbitrage reduzieren die praktische Ausbeutbarkeit; deshalb muss unser Test kostenrealistisch sein.

### 2.3 Currency Factor Momentum
Neuere Forschung zeigt, dass Momentum in gemeinsamen FX-Faktoren (insbesondere Dollar/Carry) einen großen Teil klassischer Currency-Momentum-Effekte erklären kann. Für uns interessant: statt EUR/USD isoliert zu analysieren, die gemeinsame USD-Bewegung aller Majors als Bestätigung verwenden.

### 2.4 Carry
Carry ist empirisch relevant, hat aber klares Crash-/Liquidity-Unwind-Risiko. Für uns nur sinnvoll mit tatsächlichen Forward-/Swapdaten und einem Regime-/Risikofilter, nicht als blindes 'höherer Zins = kaufen'.

### 2.5 Value
Fundamentale Currency-Value-Maße enthalten Information, die von Carry und Momentum verschieden ist. Das ist langfristig interessant, braucht aber makroökonomische Daten und deutlich längere Historien.

### 2.6 Intraday Seasonality
Es gibt peer-reviewed Evidenz für lokale Tageszeiteffekte in FX-Renditen und Orderflow. Die erwartete Größenordnung ist wahrscheinlich klein; deshalb als Filter untersuchen, nicht als frei optimierte Standalone-Stundenstrategie.

### 2.7 Makro-News
High-Frequency-Forschung zeigt, dass makroökonomische Überraschungen FX-Kurse unmittelbar bewegen und viele Effekte besonders in den ersten 5–15 Minuten konzentriert sind. Das ist für eine Event-Driven-Strategie interessant, erfordert aber historische Consensus-vs-Actual-Daten mit exakten Zeitstempeln.

### 2.8 Skewness/Kurtosis Momentum
Eine 2026 veröffentlichte Studie berichtet verbesserte Momentum-Ergebnisse, wenn Gewinner/Verlierer zusätzlich nach Skewness/Kurtosis differenziert werden. Spannend, aber unsere 7 Majors und 2,5 Jahre reichen für eine belastbare Replikation noch nicht.

## 3. Priorisierte Testkandidaten

1. **A-V2.2 Cross-Pair OOS** — Regeln unverändert auf GBP/USD, USD/JPY, USD/CHF, USD/CAD, AUD/USD und NZD/USD testen.
2. **Regime Blend A-V2.2 + v3** — getrennte Engines für Trend- und Mean-Reversion-Regime; keine Vermischung der Entry-Regeln.
3. **Broad USD Factor Confirmation** — A-V2.2-Signale gegen eine vorab eingefrorene breite USD-Bewegung der 7 Majors prüfen.
4. **Daily Multi-Horizon Time-Series Momentum** — 20/60/120-Tage-Momentum-Ensemble mit volatilitätsbasiertem Risiko; bevorzugt mit 10+ Jahren Daten.
5. **Cross-Sectional Currency Momentum** — monatliches Ranking der Majors nach vergangenen 1/3/6-Monats-Returns; Top-2 gegen Bottom-2.
6. **Currency Factor Momentum** — Momentum auf Dollar-/Carry-Faktoren statt nur auf Einzelpaaren.
7. **Carry + Momentum Hybrid** — erst mit echten Forward-/Swapdaten; Momentum-Bestätigung und Volatilitäts-/Risk-Off-Filter.
8. **Macro-News Surprise Continuation** — Event-Driven, standardisierte Surprise, M1/M5-Ausführung.
9. **Local-Trading-Hours Seasonality als Filter** — nur ökonomisch definierte Sessions/Overlaps, keine beliebige Stundenoptimierung.
10. **Skewness/Kurtosis-enhanced Currency Momentum** — später mit breiterem Universum/längerer Historie.
11. **Currency Value + Momentum** — langfristiges Fundamentalsystem mit CPI/Real Exchange Rates und Makrodaten.
12. **ML Meta-Filter** — erst später; ML darf nur eingefrorene regelbasierte Signale annehmen/ablehnen, keine neuen Trades erfinden.

## 4. Nicht weiter priorisieren

- weitere beliebige RSI/MACD/BB/Keltner/ORB-Parametergrids
- Deep Learning / Reinforcement Learning auf nur 2,5 Jahren EUR/USD
- frei optimierte Uhrzeiten, Tage oder Candle-Patterns
- Martingale/Grid ohne harten Risikorahmen

## 5. Forschungsdisziplin

Wir haben bereits Data-Snooping-Risiko. Ab jetzt gilt:
1. Kandidaten vor Cross-Pair-Test einfrieren.
2. Andere Majors nicht zur Anpassung verwenden und anschließend als OOS verkaufen.
3. Jede neue Regel = neue Versionsnummer.
4. Alle Fehlversuche speichern.
5. Kosten und Slippage konservativ modellieren.
6. Multiple-Testing-Korrekturen und Block-Bootstrap verwenden.
7. Das Ziel ist nicht maximaler PF auf EUR/USD, sondern stabile Performance auf unbekannten Daten.

## 6. Kernquellen

- Moskowitz, Ooi & Pedersen (2012), Time Series Momentum, Journal of Financial Economics. https://doi.org/10.1016/j.jfineco.2011.11.003
- Menkhoff, Sarno, Schmeling & Schrimpf (2012), Currency Momentum Strategies. https://www.bis.org/publ/work366.htm
- Dissecting Currency Momentum (JFE 2022). https://doi.org/10.1016/j.jfineco.2021.05.035
- Burnside, Eichenbaum & Rebelo, Carry Trade and Momentum in Currency Markets. https://www.nber.org/papers/w16942
- Lustig, Roussanov & Verdelhan, Common Risk Factors in Currency Markets. https://www.nber.org/papers/w14082
- Menkhoff et al., Currency Value. https://cepr.org/publications/dp11324
- Breedon & Ranaldo (2013), Intraday Patterns in FX Returns and Order Flow. https://doi.org/10.1111/jmcb.12032
- Andersen et al., Micro Effects of Macro Announcements. https://www.nber.org/papers/w8959
- Brunnermeier, Nagel & Pedersen, Carry Trades and Currency Crashes. https://www.nber.org/papers/w14473
- Zeng, Currency Carry, Momentum, and Global Interest Rate Volatility. https://www.cambridge.org/core/journals/journal-of-financial-and-quantitative-analysis/article/abs/currency-carry-momentum-and-global-interest-rate-volatility/6DAA8829E00934C1FBEA610136307E5C
- How to maximize momentum returns in foreign exchange markets? (JIMF 2026). https://doi.org/10.1016/j.jimonfin.2026.103566
- Sullivan, Timmermann & White, Data-Snooping, Technical Trading Rule Performance, and the Bootstrap. https://doi.org/10.1111/0022-1082.00163
- Bailey & López de Prado, The Deflated Sharpe Ratio. https://ssrn.com/abstract=2460551
