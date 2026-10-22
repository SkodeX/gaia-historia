# Gaia Historia

Die Geschichte der Erde auf einem 3D-Globus – von der Entstehung vor 4,6 Milliarden Jahren bis heute. Als installierbare Web-App (PWA), auf Deutsch und Englisch.

**Live:** https://skodex.github.io/gaia-historia/

Auf dem iPhone: Seite in Safari öffnen → „Teilen“ → „Zum Home-Bildschirm“.

## Phase 1 „Erde“

- **Wandernde Kontinente:** Die Platten werden im Browser für jeden beliebigen Zeitpunkt der letzten 1,8 Milliarden Jahre aus dem Plattenmodell von Cao et al. (2024) zurückgerechnet – flüssig, ohne Sprünge. Davor künstlerische Stadien: Magma-Ozean, Urozean, erste Kratone.
- **Zeitregler** mit den offiziellen Farben der Erdzeitalter, Abspielen, Sprungmarken und zwei Schwerpunkten mit viel Platz: Dino-Zeit (252–66 Mio. Jahre) und Neuzeit (1000 n. Chr. bis heute, jahrgenau).
- **Erdzeitalter:** Äonen, Ären, Perioden sowie Pleistozän, Holozän und Epochen der Neuzeit mit kurzen Erklärungen.
- **Ereignisse:** rund 60 Meilensteine – Mondentstehung, erstes Leben, Sauerstoffkatastrophe, Schneeball-Erde, Massenaussterben, Asteroid, Eiszeit, Vulkanausbrüche, Keeling-Kurve … – als Markierungen am damaligen Ort.
- **Klima & Meer:** Temperatur, CO₂ und Meeresspiegel über die ganze Erdgeschichte; Polareis, Schelfgebiete und Vegetation färben den Globus passend ein.
- **„Wo lag Berlin damals?“:** heutige Städte wandern mit ihren Platten in die Vergangenheit.
- Die aktuelle Zeit steht in der Adresse (`#/erde?t=66`) und lässt sich teilen.

## Phase 2 „Tierwelt“ (`#/tierwelt`)

- **Echte Fossilfunde als leuchtende Punkte:** rund 30.000 Funde aus der Paleobiology Database (alle Dinosaurier, Meeresreptilien, Flugsaurier und die Urzeit-Stars), an ihrer damaligen Position auf dem Globus. Antippen zeigt Gattung, Alter und heutigen Fundort.
- **100 Urzeit-Stars mit Steckbrief:** vom Ediacarium über Trilobiten, Riesen-Seeskorpione und Dunkleosteus, Dinosaurier, Ichthyo-, Plesio- und Mosasaurier, Flugsaurier bis zu Megalodon, Urwalen, Säbelzahnkatze und Mammut.
- **Steckbrief:** Foto/Paleoart (Wikimedia, mit Urheber und Lizenz), Kennzahlen, Größenvergleich mit einem Menschen (PhyloPic-Silhouetten), „Was wir herausgefunden haben“, Fundorte auf dem Globus, „Lebte zur selben Zeit“.
- **Lexikon** mit Suche und Gruppen, Reiter „Damals“ mit allen Stars, die zur eingestellten Zeit lebten.

## Phase 3 „Tiere heute“

- Zieh den Regler in die Neuzeit (ab 1000 n. Chr.): Die Tierwelt zeigt dann **170 heutige und in der Neuzeit ausgestorbene Arten** statt Fossilien – rund die Hälfte Meerestiere (Orca, Hammerhaie, Walhai, Mantas, Meeresschildkröten, Korallen, Pinguine …).
- **Leuchtende Verbreitungsgebiete** aus echten Sichtungen (GBIF) und Fachliteratur.
- **Steckbrief:** Rote-Liste-Status, Bestand und Trend, Größenvergleich, Besonderheiten, was sie bedroht, was hilft (Schutzerfolge und was jede/r tun kann) und ihre Verwandten aus der Urzeit (z. B. Weißer Hai ↔ Megalodon, Lederschildkröte ↔ Archelon).
- **Ausgestorben in der Neuzeit:** Dodo, Stellers Seekuh, Riesenalk, Beutelwolf, Wandertaube … – sie tauchen auf dem Globus auf, solange der Regler vor ihrem letzten Nachweis steht.

Geplant: Phase 4 Menschen (Grenzen über die Zeit, 150 Kriege), Phase 5 Quiz & Feinschliff.

## Entwickeln

```bash
npm install
npm run dev        # http://localhost:5174
npm run typecheck
npm run build      # nach dist/
npm run data       # Plattenmodell neu laden und public/data/plates/ erzeugen
npm run icons      # App-Icons aus public/logo.svg
```

Jeder Push auf `main` baut die App per GitHub Actions und veröffentlicht sie auf GitHub Pages. Die Datenpakete liegen im Repo; `npm run data` lädt das Plattenmodell (≈ 5 MB) nach `.cache/` und erzeugt sie neu.

## Aufbau

| Ordner | Inhalt |
| --- | --- |
| `src/globe/` | Plattenrekonstruktion (Quaternionen), Bemalung der Erdoberfläche, three.js-Globus |
| `src/time/` | Zeitregler-Skala, Erdzeitalter (ICS), Zeitformate |
| `src/content/` | Ereignisse, Klimadaten, Orte |
| `src/components/`, `src/views/` | Oberfläche |
| `scripts/` | Datenaufbereitung |
| `public/data/` | Erzeugte Datenpakete |
| `.claude/` | Projektwissen für Claude Code (Skills) |

## Quellen

Siehe [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
