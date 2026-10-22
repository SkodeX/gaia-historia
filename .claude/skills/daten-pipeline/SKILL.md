---
name: daten-pipeline
description: Datenquellen und Build-Zeit-Aufbereitung für Gaia Historia – Paläo-Küstenlinien (GPlates), Dino-Fossilfunde (PBDB), Verbreitung bedrohter Arten (GBIF), historische Grenzen (historical-basemaps), Texte/Bilder (Wikipedia/Commons). Geprüfte Endpunkte, Feldnamen, Größenbudgets. Laden, bevor du Daten holst, Skripte in scripts/ schreibst oder eine neue Quelle anbindest.
---

# Daten-Pipeline

Grundsatz: **Schwere Daten werden zur Build-Zeit** von `scripts/*.mjs` nach `public/data/` erzeugt (`npm run data`), vereinfacht und klein gerechnet. Der Browser lädt nur fertige, kleine Pakete. Fällt eine Quelle aus, bleiben die alten Dateien liegen (nie überschreiben, wenn der Download leer/fehlerhaft ist). GitHub Actions führt `npm run data` vor jedem Build aus (`continue-on-error: true`).

Endpunkte unten wurden am 2026-10-22 geprüft. Teste neue Abfragen erst mit kleinem `limit` und kürze die Ausgabe (`head -c 500`).

## 1. Kontinente über die Zeit – GEBAUT (Phase 1)

**So läuft es jetzt:** `scripts/build-plates.mjs` (`npm run plates`) lädt vom GPlates Plate Model Manager `https://repo.gplates.org/webdav/pmm/<modell>/{Rotations,Coastlines,StaticPolygons}.zip` (Modellliste: `https://repo.gplates.org/webdav/pmm/config/models_v2.json`), cached in `.cache/<modell>/`, parst GPML per Regex (Platte: `reconstructionPlateId…<gpml:value>`, Gültigkeit: `gml:begin/end timePosition`, Geometrie: `gml:exterior … gml:posList` in **lat lon**-Reihenfolge; Statische Polygone sind je nach Modell `.gpml` oder `.gpmlz`), vereinfacht (Douglas-Peucker 0,08°, geschlossene Ringe vorher am fernsten Punkt teilen!), dreht Ringe für d3 in den Uhrzeigersinn (`geoArea > 2π` → umkehren) und weist Orten aus `src/content/geo-points.json` per `geoContains` eine Platte zu. Ausgabe `public/data/plates/` (~590 KB). Modell über `PLATE_MODEL=…`, Ziel über `PLATE_OUT=…` wählbar.
- **Modellwahl:** `cao2024` (Standard) = paläomagnetischer Rahmen bis 1800 Ma, für 0–1000 Ma identisch mit MERDITH2021. **Nicht** `muller2025` (Mantel-Rahmen → falsche Paläobreiten, Berlin 500 Ma auf 18° N statt 63° S). PALEOMAP nur 0–750 Ma.
- Neue Orte (z. B. Fundstellen) → in `geo-points.json` eintragen und `npm run plates` laufen lassen. Für Phase 2 (PBDB-Funde) dieselbe Punkt-in-Polygon-Zuordnung im Skript wiederverwenden und Fossilien im Browser mit `reconstructPoint` zurückrechnen statt PBDB-Paläokoordinaten zu nutzen (so passen sie zu den Küsten).
- Prüfen gegen den Web Service geht nur mit MERDITH2021 (`gws.gplates.org` kennt weder cao2024 noch muller2025): `PLATE_MODEL=merdith2021 PLATE_OUT=.cache/merdith-out npm run plates`, dann `reconstruct_points/?points=lon,lat&time=t&model=MERDITH2021` vergleichen.

### Alter Plan / GPlates Web Service (nur noch zum Gegenprüfen)

- Küstenlinien: `https://gws.gplates.org/reconstruct/coastlines/?time=<Ma>&model=<MODELL>` → GeoJSON-FeatureCollection (Polygone, ~0,6–1,4 MB je Zeitpunkt).
- Punkt rekonstruieren: `https://gws.gplates.org/reconstruct/reconstruct_points/?points=<lon>,<lat>&time=<Ma>&model=<MODELL>` → `{"type":"MultiPoint","coordinates":[[lon,lat]]}`.
- CORS: `*` – aber wegen der Größe nur zur Build-Zeit nutzen.
- **Modelle und Reichweite:** `PALEOMAP` 0–750 Ma (Standard, passt zu PBDB-`pgm=scotese`); `MERDITH2021` bis 1000 Ma (für 750–1000 Ma). **Vor 1000 Ma gibt es keine Rekonstruktion** → für Hadaikum/Archaikum/frühes Proterozoikum gezeichnete Stadien (Magma-Ozean, Urozean, erste Kratone, Columbia/Rodinia schematisch) mit Hinweis „künstlerische Darstellung“.
- Schritte: 0–750 Ma alle 5–10 Ma, 750–1000 Ma alle 25 Ma; dazwischen im Browser überblenden.
- Größenbudget: je Zeitpunkt < 60 KB nach Vereinfachung (Douglas-Peucker/Visvalingam, Koordinaten auf 2 Nachkommastellen, als TopoJSON oder quantisiert). Alles zusammen < 5 MB.

## 2a. GEBAUT (Phase 2): Fossilien und Silhouetten

- `scripts/lib/gplates.mjs`: gemeinsame Helfer (`download`, `gpml`, `parseGpml`, `PlateLocator` – Punkt→Platte mit Bounding-Box-Vorfilter).
- `scripts/build-fossils.mjs` (`npm run fossils`, ~6 s): PBDB `occs/list.json?base_name=…&show=coords,class&limit=all` für `Dinosauria^Aves`, `Sauropterygia,Ichthyosauromorpha,Mosasauridae`, `Pterosauria` plus alle Star-Gattungen (in 20er-Gruppen). Gattung aus `gnl`. Dedupliziert je Gattung/0,5°-Zelle/Alter, Platte per `PlateLocator`. Ausgabe `public/data/fossils.json` (~280 KB): `rows` flach je 7 Ints `[lon*10, lat*10, Platte, Platte-seit, eag*10, lag*10, Gattung]`, `genera`, `genusCat` (0 dino, 1 marine, 2 pterosaur, 3 other), `stars` (Star-ID → Gattung). Der Browser rechnet Funde mit der Platte zurück (`src/globe/fossils.ts`) – nicht die PBDB-Paläokoordinaten nutzen.
- `scripts/build-silhouettes.mjs` (`npm run silhouettes`): PhyloPic-API (`/images?build=<aktuell>&filter_name=<name klein>&embed_items=true`; Build-Nummer von `GET https://api.phylopic.org/`), nur Lizenzen CC0/PDM/BY/BY-SA, Reihenfolge Gattung → `silhouette`-Feld → Gruppen-Ersatz. Speichert `public/data/silhouettes/<id>.svg` + `index.json` (by, license, page, aspect). Bereits vorhandene werden übersprungen (zum Erneuern Eintrag löschen).
- Beide Skripte laden die Steckbriefe direkt aus `src/content/creatures/*.ts` (Node-Typ-Stripping, daher dort nur `import type`).
- Wikipedia-Bild + Commons-Lizenz im Browser: `src/lib/wiki.ts`.

## 2. Dino-Fossilfunde – Paleobiology Database (PBDB) (ursprünglicher Plan)

- `https://paleobiodb.org/data1.2/occs/list.json?base_name=Dinosauria&show=paleoloc,coords&pgm=scotese&limit=…` (CORS `*`, Lizenz CC BY 4.0).
- Kompakte Feldnamen: `tna` Taxonname, `rnk` Rang, `tid` Taxon-ID, `oei` Stufe/Intervall, `eag`/`lag` frühestes/spätestes Alter in Ma, `pla`/`pln` **Paläo-Breite/-Länge** (Modell `pm1`), `lat`/`lng` heutige Position, `cid` Sammlung.
- Mit `vocab=pbdb` gibt es ausgeschriebene Feldnamen – unnötig und größer, kompakt bleiben.
- Für Phase 2 Funde zur Build-Zeit holen, auf Gattung zusammenfassen, Position auf 0,5° runden, doppelte Sammlungen zusammenlegen; je Zeitpunkt nur, was `lag ≤ t ≤ eag` erfüllt (im Browser filtern).
- Kuratierte Star-Dinos: eigene TS-Datensätze in `src/content/dinos.ts` mit PBDB-Taxon-ID als Brücke zu den Funden.

## 3a. GEBAUT (Phase 3): Verbreitung heutiger Arten

- `scripts/build-species.mjs` (`npm run species`, ~2 min, 6 parallel): GBIF `species/match` → `usageKey`, dann **Maps API** statt Suche (die Suche liefert nur 300 gehäufte Datensätze): `https://api.gbif.org/v2/map/occurrence/density/0/{0,1}/0@1x.png?srs=EPSG:4326&taxonKey=…&basisOfRecord=…` – zwei 512-px-Kacheln, je 180°. PNG mit `pngjs` dekodieren, Bildpunkte mit Alpha > 0 auf 2°-Raster zählen, einzelne isolierte Pixel verwerfen. Status 204 = keine Daten. Ausgestorbene Arten werden übersprungen (nur kuratierte `range`-Kreise). Ausgabe `public/data/species.json` (~340 KB) `{ranges: {id: [lon, lat, gewicht, …]}}`.
- Wikipedia-API drosselt bei vielen Einzelabfragen (auch Subagenten trafen das Limit) → Titel/Status immer gebündelt prüfen (`titles=` mit bis zu 50, `prop=revisions` für Taxobox-Status), wie in `check-species.mjs`.

## 3. Bedrohte Arten heute – GBIF (ursprünglicher Plan)

- Name → Schlüssel: `https://api.gbif.org/v1/species/match?name=<Art>` → `usageKey` (CORS `*`).
- Verbreitung: Vorkommen zur Build-Zeit über `https://api.gbif.org/v1/occurrence/search?taxonKey=<key>&hasCoordinate=true&hasGeospatialIssue=false&limit=300` in mehreren Seiten holen und auf ein Raster (z. B. 1°) aggregieren; Ausreißer (Zoos: `basisOfRecord=LIVING_SPECIMEN`) ausschließen.
- **IUCN-Verbreitungskarten nicht mitliefern** (Lizenz verbietet Weitergabe). Rote-Liste-Kategorie (CR/EN/VU/NT) kuratiert im Datensatz pflegen, Quelle nennen.
- Liste der ca. 150 Arten in `src/content/species.ts` (deutsch/englischer Name, wissenschaftlicher Name, Kategorie, Lebensraum, Bedrohung).

## 4. Grenzen über die Zeit – historical-basemaps

- GitHub `aourednik/historical-basemaps`, Ordner `geojson/`, Dateien `world_<jahr>.geojson` und `world_bc<jahr>.geojson` (z. B. `world_bc3000`, `world_bc323`, `world_1`, `world_1279`, `world_1492`, `world_1914`, `world_1945`, `world_2010`; auch `world_bc123000` bis `world_bc5000` für Vorgeschichte). Rohdaten: `https://raw.githubusercontent.com/aourednik/historical-basemaps/master/geojson/<datei>`.
- **Lizenz GPL-3.0** → siehe Steckbrief, Lizenzfrage vor Veröffentlichung klären.
- Zur Build-Zeit vereinfachen (Ziel < 150 KB je Stichjahr), Namen in DE/EN-Lookup übertragen.
- **Schwerpunkt 1000–heute:** Hier liegen die meisten Stichjahre (1000, 1100, 1200, 1279, 1300, 1400, 1492, 1500, 1530, 1600, 1650, 1700, 1715, 1783, 1800, 1815, 1878, 1880, 1900, 1914, 1920, 1930, 1938, 1945, 1960, 1994, 2000, 2010) – alle mitnehmen, ältere nur ausgewählt. Zwischen Stichjahren nicht morphen, sondern zum nächstälteren Stand springen und die Jahreszahl des Stands anzeigen.

## 5. Kriege

- Kuratiert in `src/content/wars/<epoche>.ts` (5 Dateien à 30): Name DE/EN, Beginn/Ende (Kalenderjahr), Schauplätze als Punkte/Regionen, Parteien, Anführer je Seite, geschätzte Opfer (Spanne + Quelle), Ausgang, Wikipedia-Titel.
- Opferzahlen sind umstritten → immer Spanne und „Schätzung“ zeigen.

## 6. Texte und Bilder – Wikipedia/Wikimedia

- Zusammenfassung + Vorschaubild: `https://de.wikipedia.org/api/rest_v1/page/summary/<Titel>` (bzw. `en.`), CORS `*`, live im Browser.
- Lizenz/Urheber eines Bildes: Commons-API `https://commons.wikimedia.org/w/api.php?action=query&titles=File:<Name>&prop=imageinfo&iiprop=extmetadata&format=json&origin=*` → `extmetadata.Artist`, `LicenseShortName`.
- Ergebnisse im Laufzeit-Cache des Service Workers halten (StaleWhileRevalidate).

## Klima & Meer (Phase 1)

Kurven (Temperatur, Meeresspiegel, CO₂) über die Zeit als kleine kuratierte Stützpunkt-Tabellen in `src/content/climate.ts`; Quellen (z. B. Scotese et al. 2021 für Temperatur, Foster et al. 2017 für CO₂, Haq/Miller für Meeresspiegel) beim Einbau prüfen und zitieren.

## Nach dem Anbinden einer Quelle

Diesen Skill aktualisieren (tatsächliche Skriptnamen, Dateigrößen, Fallen) und die Quelle in `THIRD_PARTY_NOTICES.md` eintragen.
