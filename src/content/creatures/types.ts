// Datenmodell der Urzeit-Stars (Phase 2). Jede Gruppe liegt in einer eigenen Datei in diesem Ordner.

export type CreatureGroup =
  | 'theropod' // Raubdinosaurier (inkl. Urvögel)
  | 'sauropod' // Langhälse und Vorfahren
  | 'ornithischian' // Vogelbeckendinosaurier: Horn-, Panzer-, Entenschnabel-, Dickkopfdinos …
  | 'marine' // Meeresreptilien und andere Meeresriesen des Erdmittelalters
  | 'pterosaur' // Flugsaurier
  | 'paleozoic' // Leben vor den Dinosauriern (Ediacarium bis Perm)
  | 'cenozoic'; // Nach den Dinosauriern: Urwale, Megalodon, Eiszeit-Säuger …

export type Diet = 'carnivore' | 'herbivore' | 'omnivore' | 'piscivore' | 'insectivore' | 'filter';
export type Habitat = 'land' | 'sea' | 'air' | 'freshwater';
/** Heutige Fundgebiete: Kontinente, OC = Meeresablagerungen weltweit verbreitet */
export type Region = 'NA' | 'SA' | 'EU' | 'AF' | 'AS' | 'AU' | 'AN' | 'OC';

export interface Text {
  de: string;
  en: string;
}

export interface Creature {
  /** kebab-case, eindeutig, z. B. 'tyrannosaurus' */
  id: string;
  /** Wissenschaftlicher Gattungsname, wird kursiv gezeigt */
  genus: string;
  /** Anzeigename, meist = Gattung; bei bekannten Trivialnamen dieser (z. B. Megalodon, Wollhaarmammut) */
  name: Text;
  /** Bedeutung des Namens, z. B. „Tyrannenechse“ / "tyrant lizard" */
  meaning?: Text;
  group: CreatureGroup;
  diet: Diet;
  habitat: Habitat;
  regions: Region[];
  /** Lebenszeit der Gattung in Mio. Jahren vor heute (from > to) */
  from: number;
  to: number;
  /** Typische Maximallänge (bzw. Flügelspannweite bei Flugsauriern) in m */
  length: number;
  /** Geschätztes Gewicht in kg (falls sinnvoll schätzbar) */
  weight?: number;
  /** Ein Satz für Listen und Vorschauen */
  teaser: Text;
  /** 3–4 Erkenntnisse der Forschung („Was wir herausgefunden haben“), je 1–2 Sätze */
  facts: { de: string[]; en: string[] };
  /** Wikipedia-Artikeltitel */
  wiki: Text;
  /** PBDB-Taxon, falls abweichend von genus (z. B. 'Otodus' für Megalodon) */
  pbdb?: string;
  /** PhyloPic-Suchname, falls die Gattung keine Silhouette hat (z. B. Familie oder nahe Verwandte) */
  silhouette?: string;
}
