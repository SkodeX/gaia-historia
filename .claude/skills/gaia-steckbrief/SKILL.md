---
name: gaia-steckbrief
description: Steckbrief von Gaia Historia (E:\Coding\Dinoooo) – vereinbarter Umfang, Stack, Ordneraufbau, Befehle, Konventionen, Lizenzen und Phasenstand. Laden, bevor du im Projekt Code suchst, planst oder baust; ersetzt das Erkunden des Repos.
---

# Gaia Historia – Projektsteckbrief

Lies diesen Steckbrief statt das Repo zu durchsuchen. Öffne danach nur die Dateien, die du wirklich ändern musst (gezielt mit Grep/Glob, Dateien in Abschnitten lesen).

## Vereinbarter Umfang (mit dem Nutzer geklärt am 2026-10-22)

- **Zeitraum:** ganze Erdgeschichte, 4,6 Mrd. Jahre bis heute, mit **zwei Schwerpunkten**: Dino-Zeit (Trias–Kreide, 252–66 Mio. J.) und **Neuzeit 1000 n. Chr.–heute**. Beide bekommen auf dem Zeitregler deutlich mehr Platz (eigene Zoomstufe bzw. Abschnitt mit Jahresauflösung) und die dichtesten Inhalte.
- **Hauptansicht:** 3D-Globus (three.js) + Zeitregler; Kontinente wandern beim Ziehen, Inhalte erscheinen als Ebenen.
- **Modi (Auswahl oben):**
  - **Erde** – Plattentektonik, Erdzeitalter-Zeitstrahl (Mond, erstes Leben, Schneeball-Erde, Massenaussterben, Eiszeiten …), Klima & Meer (Temperatur, Meeresspiegel, CO₂ als Kurven unter dem Regler).
  - **Tierwelt** – Dinos: kuratierte Stars mit Steckbrief + alle echten Fossilfunde (PBDB) als Punktebene an ihrer damaligen Position. Heute: ca. 150 bedrohte und potenziell gefährdete Arten (Rote-Liste-Kategorien CR, EN, VU, NT) mit Verbreitungsgebiet und Steckbrief. **Meerestiere stark vertreten** (Nutzerwunsch): Orca, Hammerhaie, Wale, Haie, Rochen, Meeresschildkröten, Korallen … – Wunschtiere wie den Orca (Rote Liste „unzureichende Datenlage“) trotzdem aufnehmen und die Kategorie ehrlich zeigen. In der Urzeit entsprechend Meeresreptilien (Ichthyosaurier, Plesiosaurier, Mosasaurier), Megalodon, Urwale.
  - **Menschen** – Ländergrenzen über die Zeit (ab ca. 3000 v. Chr., Reiche wachsen und zerfallen; ab 1000 n. Chr. dichteste Stichjahre und flüssige Übergänge). Kriege: die 30 größten **je Epoche** in 5 Epochen (Antike, Mittelalter, Frühe Neuzeit, 1800–1914, 1914–heute = 150 Kriege) mit Ort(en), Zeitraum, Parteien, Anführern, Opfern, Ausgang.
- **Extras:** Dino-Lexikon (Steckbriefe, Größenvergleich mit Mensch, Ernährung), Erdzeitalter-Zeitstrahl, Klima & Meer, Quiz & Abzeichen.
- **Bilder:** freie Fotos/Paleoart von Wikimedia Commons, live geladen, immer mit Urheber und Lizenz anzeigen.
- **Rahmen wie Orbitus Maximus** (Schwesterprojekt in `E:\Coding\Space`): PWA, Deutsch + Englisch umschaltbar, cineastisch dunkel, kein Konto, GitHub Pages.
- **Reihenfolge:** Phase 1 Erde → 2 Dinos → 3 Tiere heute → 4 Menschen → 5 Quiz & Feinschliff. Nach jeder Phase veröffentlichen.
- **Repo:** eigenes öffentliches Repo `SkodeX/gaia-historia`, Branch `main`, Deploy per GitHub Actions auf GitHub Pages (`https://skodex.github.io/gaia-historia/`). Git-Identität im Repo: GitHub-noreply-Adresse (Nutzer hält seine E-Mail privat).

## Stack (gleich wie Orbitus Maximus – dort abschauen statt neu erfinden)

Vite + React + TypeScript, `vite-plugin-pwa`, three.js für den Globus, d3-geo/topojson für Geometrie, lucide-react für Icons, Schriften Inter + Space Grotesk über @fontsource. Hash-Router (`#/erde`, `#/tierwelt`, `#/menschen`, `#/lexikon`, `#/quiz`). Ansichten per `React.lazy` laden. Vorlagen für Router, i18n, Sheet, PWA-Config und Deploy-Workflow: `E:\Coding\Space\src\lib\router.ts`, `src\i18n\`, `src\components\Sheet.tsx`, `vite.config.ts`, `.github\workflows\deploy.yml`.

## Geplanter Aufbau

| Pfad | Inhalt |
| --- | --- |
| `src/globe/` | three.js-Globus: Kugel, Küstenlinien/Kontinente je Zeitpunkt, Punkt- und Flächenebenen, Kamera |
| `src/time/` | Zeitmodell: Jahre vor heute ↔ Erdzeitalter, Regler-Skala (abschnittsweise, gestreckt für Dino-Zeit und 1000–heute), Epochen |
| `src/layers/` | Ebenen: `plates`, `fossils`, `species`, `borders`, `wars` |
| `src/content/` | Kuratierte Inhalte als TS-Daten: Zeitstrahl, Dinos, Tiere, Kriege, Quiz (DE/EN-Texte direkt im Datensatz) |
| `src/views/` | Seiten je Modus + Lexikon + Quiz |
| `src/i18n/` | UI-Texte `de.ts`, `en.ts` |
| `scripts/` | Build-Zeit-Datenaufbereitung (siehe Skill `daten-pipeline`) |
| `public/data/` | Erzeugte Datenpakete, nur bei Bedarf geladen, nicht im Precache |

Zeit wird intern überall als **Ma (Millionen Jahre vor heute, Zahl)** geführt; historische Jahre (Menschen-Modus) als Kalenderjahr (negativ = v. Chr.) und nur an der Anzeigegrenze umgerechnet.

## Befehle

```bash
npm run dev        # http://localhost:5173
npm run typecheck  # schneller als build – zuerst das
npm run build      # tsc + vite build nach dist/
npm run data       # alle Datenpakete neu erzeugen (scripts/)
```

## Konventionen

- Code-Kommentare und UI-Texte auf Deutsch, Bezeichner auf Englisch.
- Jeder sichtbare Text in DE und EN. Kuratierte Datensätze haben `{ de, en }`-Felder.
- Effekte immer mit Block-Körper (`useEffect(() => { … })`), nie Ausdruck zurückgeben (Chromium-`scrollTo` gibt ein Promise zurück → React-Absturz).
- Große Daten nie ins JS-Bundle, sondern nach `public/data/` und per `fetch` nachladen.
- Neue Quellen sofort in `THIRD_PARTY_NOTICES.md` eintragen.

## Lizenzen – beachten

- **historical-basemaps** (Grenzen) ist **GPL-3.0** → beim Mitliefern muss das Repo GPL-kompatibel lizenziert sein. Code-Lizenz mit dem Nutzer klären, bevor Phase 4 veröffentlicht wird.
- PBDB-Daten: CC BY 4.0 (Quelle nennen). GBIF: Datensätze CC0/CC BY/CC BY-NC – Aggregat mit GBIF-Zitat nennen, App bleibt nicht-kommerziell.
- Wikimedia-Bilder: Lizenz und Urheber pro Bild aus der API anzeigen.
- GPlates-Rekonstruktionen (PALEOMAP von C. R. Scotese, MERDITH2021): Modell und Zitat in den Hinweisen nennen.

## Phasenstand

- 2026-10-22: Umfang geklärt, Skills angelegt.
- 2026-10-22 **Phase 1 „Erde“ fertig** und veröffentlicht (Repo `SkodeX/gaia-historia`, Pages). Gebaut:
  - `src/globe/plates.ts` rechnet Platten **im Browser** aus Rotationsfolgen (Quaternionen-Slerp, gegen GPlates Web Service geprüft – identisch auf 4 Nachkommastellen). Modell **Cao et al. 2024** (paläomagnetischer Rahmen, 0–1800 Ma, CC BY 4.0). `data.ts` rekonstruiert Küsten/Orte, `paint.ts` malt eine Equirectangular-Canvas-Textur (Ozeanfarbe je Ära, Land nach Breite/Vegetation/Temperatur, Polareis aus Temperatur, trockene Schelfe bei niedrigem Meeresspiegel, Magma > 4300 Ma, Kratone 1900–4400 Ma, Überblendung 1900→1800), `Globe.ts` = three.js + CSS2D-Markierungen + Atmosphären-Shader.
  - `src/time/scale.ts` abschnittsweise Reglerskala (Dinos 0,35–0,57, Neuzeit 0,76–1); `geologic.ts` ICS-Einheiten mit Texten; `format.ts`.
  - `src/content/events.ts` (~60 Ereignisse mit Ort aus `geo-points.json`), `climate.ts` (TEMP/CO2/SEA-Stützpunkte, `iceEdgeLat`), `places.ts` (Städte).
  - UI: `TimeBar` (Bänder, Abspielen, Sprungmarken), `InfoPanel` (Zeitalter/Klima & Meer/Ereignisse, Ereigniskarte), `SettingsSheet`, Modus-Umschalter (Tierwelt/Menschen „bald“). Zeit steht in der URL `#/erde?t=<Ma>`.
  - Dev-Port **5174**, Vorschau **4174** (`.claude/launch.json`: `gaia-dev`, `gaia-preview`). three.js liegt im Hauptbundle (~880 KB, gzip 250 KB).
  - Debug: `window.__gaia.globe`.
- Offen: Code-Lizenz (wichtig vor Phase 4 wegen GPL-Grenzdaten). Nächste Phase: 2 Dinos.

(Nach jeder Phase hier ergänzen: was gebaut ist, Routen, offene Punkte, neue Fallen.)
