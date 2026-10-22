// Datenmodell der heutigen (bedrohten) und in der Neuzeit ausgestorbenen Tierarten (Phase 3).
import type { Text } from '../creatures/types';

export type { Text };

export type SpeciesGroup =
  | 'marine-mammal' // Wale, Delfine, Robben, Seekühe, Eisbär, Seeotter
  | 'shark-ray' // Haie und Rochen
  | 'sea-other' // Meeresschildkröten, Meeresfische, Korallen, Weichtiere, Seevögel, Meeresleguane …
  | 'land-mammal'
  | 'bird' // Landvögel
  | 'reptile-amphibian' // Land-/Süßwasserreptilien und Amphibien
  | 'freshwater' // Süßwasserfische, Flussdelfine u. a.
  | 'invertebrate'; // Insekten und andere Wirbellose an Land

/** Rote-Liste-Kategorie (IUCN). EX = ausgestorben, EW = in der Natur ausgestorben, DD = unzureichende Datenlage */
export type RedList = 'EX' | 'EW' | 'CR' | 'EN' | 'VU' | 'NT' | 'LC' | 'DD';
export type Realm = 'sea' | 'land' | 'freshwater';
export type Trend = 'down' | 'stable' | 'up' | 'unknown';

export interface Species {
  /** kebab-case, eindeutig */
  id: string;
  /** Wissenschaftlicher Artname (Binomen), für GBIF */
  sci: string;
  name: Text;
  group: SpeciesGroup;
  realm: Realm;
  status: RedList;
  /** Nur bei ausgestorbenen Arten: Jahr des letzten gesicherten Nachweises */
  extinct?: number;
  /** Bestand in Worten, z. B. „rund 3.900 Tiere in freier Wildbahn“ */
  population: Text;
  trend: Trend;
  /** Typische Länge in m (bei Vögeln Körperlänge) */
  length?: number;
  /** Typisches Gewicht in kg */
  weight?: number;
  teaser: Text;
  /** 2–3 Besonderheiten der Art */
  facts: { de: string[]; en: string[] };
  /** 2–4 Hauptgefahren, je ein kurzer Satz */
  threats: { de: string[]; en: string[] };
  /** 2–3 Punkte „Was hilft“: Schutzmaßnahmen, Erfolge, was jede/r tun kann */
  help: { de: string[]; en: string[] };
  /** Repräsentativer Ort im Verbreitungsgebiet [lat, lon] – für die Markierung auf dem Globus */
  home: [number, number];
  /**
   * Verbreitungsgebiet als grobe Kreise [lat, lon, Radius in km]. Pflicht bei ausgestorbenen Arten
   * (dort gibt es kaum Sichtungsdaten); sonst optional als Ergänzung zu den GBIF-Sichtungen.
   */
  range?: [number, number, number][];
  /** IDs verwandter Urzeit-Tiere aus src/content/creatures (z. B. 'megalodon') */
  relatives?: string[];
  wiki: Text;
  /** GBIF-Suchname, falls vom sci abweichend */
  gbif?: string;
}
