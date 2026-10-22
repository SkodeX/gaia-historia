import type { Species } from './types';

export const SEA_MAMMALS_SHARKS: Species[] = [
  // ───────────────────────── Meeressäuger ─────────────────────────
  {
    id: 'orca',
    sci: 'Orcinus orca',
    name: { de: 'Orca (Schwertwal)', en: 'Orca (killer whale)' },
    group: 'marine-mammal',
    realm: 'sea',
    status: 'DD',
    population: {
      de: 'vermutlich rund 50.000 Tiere weltweit; manche Gruppen wie die „Southern Residents“ vor Kanada zählen nur noch etwa 75 Tiere',
      en: 'probably around 50,000 worldwide; some groups such as the “Southern Residents” off Canada number only about 75',
    },
    trend: 'unknown',
    length: 8,
    weight: 6000,
    teaser: {
      de: 'Der größte Delfin der Welt jagt im Familienverband – mit Strategien, die von Generation zu Generation weitergegeben werden.',
      en: 'The world’s largest dolphin hunts in family groups, using tactics passed down from one generation to the next.',
    },
    facts: {
      de: [
        'Orca-Gruppen haben eigene „Dialekte“ und Jagdtraditionen – manche fressen nur Fisch, andere nur Robben oder Wale.',
        'Weibchen können über 80 Jahre alt werden und führen ihre Familie oft bis ins hohe Alter an.',
        'Orcas leben in allen Ozeanen, vom Packeis der Antarktis bis in tropische Gewässer.',
      ],
      en: [
        'Orca groups have their own “dialects” and hunting traditions – some eat only fish, others only seals or whales.',
        'Females can live beyond 80 years and often lead their family well into old age.',
        'Orcas live in every ocean, from Antarctic pack ice to tropical waters.',
      ],
    },
    threats: {
      de: [
        'Langlebige Umweltgifte wie PCB reichern sich in ihrem Fett an und schwächen Immunsystem und Fortpflanzung.',
        'Überfischung nimmt fischfressenden Gruppen die Beute, etwa den Königslachs.',
        'Schiffslärm stört ihre Verständigung und die Jagd per Echoortung.',
      ],
      en: [
        'Persistent pollutants such as PCBs build up in their blubber and weaken immunity and reproduction.',
        'Overfishing robs fish-eating groups of prey such as Chinook salmon.',
        'Ship noise disrupts their communication and echolocation hunting.',
      ],
    },
    help: {
      de: [
        'Kanada und die USA haben Schutzzonen und Mindestabstände für Boote eingeführt und den Schiffsverkehr gedrosselt.',
        'Das weltweite PCB-Verbot (Stockholmer Konvention) wirkt langfristig – auch wenn die Gifte noch Jahrzehnte im Meer bleiben.',
        'Wer Wale beobachten will, wählt Anbieter, die Abstand halten und den Motor drosseln.',
      ],
      en: [
        'Canada and the US have created protected zones, minimum boat distances and slow-down areas for ships.',
        'The global PCB ban (Stockholm Convention) helps in the long run, even though the chemicals linger for decades.',
        'If you go whale watching, choose operators who keep their distance and throttle down.',
      ],
    },
    home: [48.5, -123.2],
    range: [
      [55, -140, 2500],
      [62, -10, 2000],
      [-65, -60, 2500],
      [-45, 150, 2000],
      [-40, 40, 2000],
    ],
    relatives: ['basilosaurus', 'ambulocetus'],
    wiki: { de: 'Schwertwal', en: 'Orca' },
  },
  {
    id: 'blauwal',
    sci: 'Balaenoptera musculus',
    name: { de: 'Blauwal', en: 'Blue whale' },
    group: 'marine-mammal',
    realm: 'sea',
    status: 'EN',
    population: {
      de: 'rund 5.000–15.000 erwachsene Tiere – nur ein Bruchteil der Bestände vor dem Walfang',
      en: 'around 5,000–15,000 adults – a fraction of the numbers before whaling',
    },
    trend: 'up',
    length: 25,
    weight: 120000,
    teaser: {
      de: 'Das größte Tier, das je gelebt hat – größer als jeder Dinosaurier.',
      en: 'The largest animal that has ever lived – bigger than any dinosaur.',
    },
    facts: {
      de: [
        'Blauwale werden bis 30 Meter lang; ihr Herz ist so groß wie ein Kleinwagen.',
        'Sie ernähren sich fast nur von winzigen Krillkrebsen – bis zu 16 Tonnen an einem Tag.',
        'Ihre tiefen Rufe gehören zu den lautesten Tierlauten und tragen Hunderte Kilometer weit.',
      ],
      en: [
        'Blue whales reach up to 30 metres; their heart is the size of a small car.',
        'They feed almost entirely on tiny krill – up to 16 tonnes in a single day.',
        'Their deep calls are among the loudest animal sounds and carry hundreds of kilometres.',
      ],
    },
    threats: {
      de: [
        'Kollisionen mit großen Schiffen, besonders vor Sri Lanka und Kalifornien.',
        'Schiffslärm übertönt ihre Rufe über weite Strecken.',
        'Der Klimawandel verändert die Krillvorkommen, von denen sie abhängen.',
      ],
      en: [
        'Collisions with large ships, especially off Sri Lanka and California.',
        'Shipping noise drowns out their calls over long distances.',
        'Climate change is shifting the krill swarms they depend on.',
      ],
    },
    help: {
      de: [
        'Seit 1966 ist die Jagd auf Blauwale weltweit verboten – seitdem erholen sich einige Bestände langsam.',
        'Vor Kalifornien fahren Frachter freiwillig langsamer, was tödliche Zusammenstöße verringert.',
        'Der Schutz des antarktischen Krills vor Überfischung sichert ihre wichtigste Nahrung.',
      ],
      en: [
        'Blue whale hunting has been banned worldwide since 1966, and some populations are slowly recovering.',
        'Off California, cargo ships voluntarily slow down, cutting deadly collisions.',
        'Protecting Antarctic krill from overfishing safeguards their main food.',
      ],
    },
    home: [34, -121],
    range: [
      [30, -125, 2000],
      [-60, 0, 3000],
      [5, 80, 1500],
      [55, -30, 1500],
      [-40, 145, 1500],
    ],
    relatives: ['basilosaurus', 'ambulocetus'],
    wiki: { de: 'Blauwal', en: 'Blue whale' },
  },
  {
    id: 'finnwal',
    sci: 'Balaenoptera physalus',
    name: { de: 'Finnwal', en: 'Fin whale' },
    group: 'marine-mammal',
    realm: 'sea',
    status: 'VU',
    population: {
      de: 'rund 100.000 erwachsene Tiere',
      en: 'around 100,000 adults',
    },
    trend: 'up',
    length: 20,
    weight: 60000,
    teaser: {
      de: 'Das zweitgrößte Tier der Erde ist zugleich einer der schnellsten Großwale – der „Windhund der Meere“.',
      en: 'The second-largest animal on Earth is also one of the fastest great whales – the “greyhound of the sea”.',
    },
    facts: {
      de: [
        'Finnwale erreichen kurzzeitig über 35 km/h.',
        'Ihr Kopf ist asymmetrisch gefärbt: rechts hell, links dunkel – vermutlich ein Trick bei der Jagd.',
      ],
      en: [
        'Fin whales can briefly exceed 35 km/h.',
        'Their head is coloured asymmetrically – pale on the right, dark on the left – probably a hunting trick.',
      ],
    },
    threats: {
      de: [
        'Zusammenstöße mit Schiffen, etwa im stark befahrenen Mittelmeer.',
        'Island jagt Finnwale bis heute kommerziell.',
        'Unterwasserlärm durch Schifffahrt und Rohstoffsuche.',
      ],
      en: [
        'Ship strikes, for example in the busy Mediterranean.',
        'Iceland still hunts fin whales commercially.',
        'Underwater noise from shipping and seismic surveys.',
      ],
    },
    help: {
      de: [
        'Das Walfangmoratorium von 1986 hat die Bestände deutlich wachsen lassen.',
        'Das Pelagos-Schutzgebiet im Mittelmeer (1999) schützt Finnwale zwischen Frankreich, Monaco und Italien.',
      ],
      en: [
        'The 1986 whaling moratorium has allowed populations to grow markedly.',
        'The Pelagos Sanctuary in the Mediterranean (1999) protects fin whales between France, Monaco and Italy.',
      ],
    },
    home: [43.5, 8.5],
    range: [
      [45, -35, 2000],
      [42, 7, 600],
      [45, -140, 2500],
      [-60, 0, 3000],
    ],
    relatives: ['basilosaurus', 'ambulocetus'],
    wiki: { de: 'Finnwal', en: 'Fin whale' },
  },
  {
    id: 'nordatlantischer-glattwal',
    sci: 'Eubalaena glacialis',
    name: { de: 'Nordatlantischer Glattwal (Atlantischer Nordkaper)', en: 'North Atlantic right whale' },
    group: 'marine-mammal',
    realm: 'sea',
    status: 'CR',
    population: {
      de: 'nur noch rund 380 Tiere, davon weniger als 70 fortpflanzungsfähige Weibchen',
      en: 'only about 380 animals left, including fewer than 70 breeding females',
    },
    trend: 'down',
    length: 15,
    weight: 60000,
    teaser: {
      de: 'Einst der „richtige“ Wal für Walfänger – heute einer der seltensten Großwale der Welt.',
      en: 'Once the “right” whale to hunt – now one of the rarest great whales on Earth.',
    },
    facts: {
      de: [
        'Den englischen Namen bekam er, weil er langsam schwimmt und nach dem Tod an der Oberfläche treibt – der „richtige“ Wal für Jäger.',
        'Weiße Hornschwielen am Kopf bilden bei jedem Tier ein einzigartiges Muster, an dem Forschende sie erkennen.',
      ],
      en: [
        'Whalers called it the “right” whale because it swims slowly and floats when dead.',
        'White callosities on its head form a unique pattern that lets researchers identify every individual.',
      ],
    },
    threats: {
      de: [
        'Verfangen in Seilen von Hummer- und Krabbenfallen – fast alle Tiere tragen Narben davon.',
        'Kollisionen mit Schiffen vor der Ostküste der USA und Kanadas.',
        'Weil sich ihre Beute durch das wärmere Meer verlagert, wandern sie in neue, ungeschützte Gebiete.',
      ],
      en: [
        'Entanglement in lobster and crab trap lines – almost every animal bears the scars.',
        'Ship strikes off the east coasts of the US and Canada.',
        'As warming seas move their prey, they wander into new, unprotected areas.',
      ],
    },
    help: {
      de: [
        'Tempolimits für Schiffe und zeitweise gesperrte Fanggebiete in den USA und Kanada.',
        'Neue „seillose“ Fallen, die erst auf Funksignal an die Oberfläche steigen, werden erprobt.',
      ],
      en: [
        'Speed limits for ships and seasonal fishing closures in the US and Canada.',
        'New “ropeless” traps that surface only on an acoustic signal are being trialled.',
      ],
    },
    home: [42, -69],
    range: [
      [42, -68, 600],
      [47.5, -63, 400],
      [31, -80.5, 400],
    ],
    relatives: ['basilosaurus', 'ambulocetus'],
    wiki: { de: 'Atlantischer Nordkaper', en: 'North Atlantic right whale' },
  },
  {
    id: 'groenlandwal',
    sci: 'Balaena mysticetus',
    name: { de: 'Grönlandwal', en: 'Bowhead whale' },
    group: 'marine-mammal',
    realm: 'sea',
    status: 'LC',
    population: {
      de: 'vermutlich über 25.000 Tiere; der größte Bestand lebt vor Alaska',
      en: 'probably more than 25,000; the largest population lives off Alaska',
    },
    trend: 'up',
    length: 16,
    weight: 75000,
    teaser: {
      de: 'Das langlebigste Säugetier der Welt kann über 200 Jahre alt werden.',
      en: 'The longest-lived mammal on Earth can live for more than 200 years.',
    },
    facts: {
      de: [
        'In erlegten Tieren fand man Harpunenspitzen aus dem 19. Jahrhundert.',
        'Mit seinem massigen Schädel bricht er bis zu 60 cm dickes Meereis auf, um zu atmen.',
        'Er hat die längsten Barten aller Wale – bis zu 4 Meter.',
      ],
      en: [
        'Harpoon tips from the 19th century have been found in hunted animals.',
        'It breaks through ice up to 60 cm thick with its massive skull to breathe.',
        'It has the longest baleen of any whale – up to 4 metres.',
      ],
    },
    threats: {
      de: [
        'Das schwindende Meereis öffnet die Arktis für Schiffe, Lärm und Ölbohrungen.',
        'Der kleine Bestand rund um Spitzbergen und in der Barentssee hat sich vom Walfang kaum erholt.',
      ],
      en: [
        'Shrinking sea ice opens the Arctic to shipping, noise and oil drilling.',
        'The small population around Svalbard and the Barents Sea has barely recovered from whaling.',
      ],
    },
    help: {
      de: [
        'Der Bestand vor Alaska hat sich dank Fangverbot erholt; indigene Gemeinschaften jagen nur streng begrenzte Quoten.',
        'Klimaschutz ist der wichtigste Schutz für alle Arten des Meereises.',
      ],
      en: [
        'The Alaskan population has recovered thanks to the hunting ban; Indigenous communities hunt only strictly limited quotas.',
        'Climate action is the most important protection for all sea-ice species.',
      ],
    },
    home: [71, -155],
    range: [
      [71, -160, 1000],
      [70, -75, 1000],
      [78, 15, 700],
      [55, 140, 500],
    ],
    relatives: ['basilosaurus', 'ambulocetus'],
    wiki: { de: 'Grönlandwal', en: 'Bowhead whale' },
  },
  {
    id: 'pottwal',
    sci: 'Physeter macrocephalus',
    name: { de: 'Pottwal', en: 'Sperm whale' },
    group: 'marine-mammal',
    realm: 'sea',
    status: 'VU',
    population: {
      de: 'unbekannt, grob geschätzt einige Hunderttausend Tiere',
      en: 'unknown, roughly a few hundred thousand animals',
    },
    trend: 'unknown',
    length: 16,
    weight: 40000,
    teaser: {
      de: 'Der größte Zahnwal taucht über 2.000 Meter tief, um Riesenkalmare zu jagen.',
      en: 'The largest toothed whale dives more than 2,000 metres deep to hunt giant squid.',
    },
    facts: {
      de: [
        'Er hat das größte Gehirn aller Tiere – rund 8 Kilogramm.',
        'Seine Klicklaute erreichen über 230 Dezibel und sind die lautesten Tiergeräusche überhaupt.',
        'Ein Tauchgang kann über eine Stunde dauern.',
      ],
      en: [
        'It has the largest brain of any animal – around 8 kilograms.',
        'Its clicks exceed 230 decibels, the loudest sounds made by any animal.',
        'A single dive can last over an hour.',
      ],
    },
    threats: {
      de: [
        'Verschlucktes Plastik füllt bei gestrandeten Tieren oft den Magen.',
        'Verfangen in Treibnetzen und Kollisionen mit Schiffen.',
        'Lärm von Militär-Sonar und seismischen Messungen.',
      ],
      en: [
        'Stranded animals are often found with stomachs full of plastic.',
        'Entanglement in drift nets and collisions with ships.',
        'Noise from military sonar and seismic surveys.',
      ],
    },
    help: {
      de: [
        'Das Walfangverbot von 1986 beendete die massive Jagd auf Pottwale.',
        'Weniger Einwegplastik verringert den Müll, der im Meer landet.',
      ],
      en: [
        'The 1986 whaling ban ended the large-scale hunt for sperm whales.',
        'Using less single-use plastic reduces the litter that ends up in the sea.',
      ],
    },
    home: [38.5, -28.5],
    range: [
      [38, -30, 1500],
      [15, -60, 1500],
      [20, -160, 3000],
      [-40, 175, 2000],
      [0, 70, 2500],
    ],
    relatives: ['livyatan', 'basilosaurus'],
    wiki: { de: 'Pottwal', en: 'Sperm whale' },
  },
  {
    id: 'buckelwal',
    sci: 'Megaptera novaeangliae',
    name: { de: 'Buckelwal', en: 'Humpback whale' },
    group: 'marine-mammal',
    realm: 'sea',
    status: 'LC',
    population: {
      de: 'über 80.000 Tiere – eine der großen Erfolgsgeschichten des Artenschutzes',
      en: 'more than 80,000 animals – one of conservation’s great success stories',
    },
    trend: 'up',
    length: 15,
    weight: 30000,
    teaser: {
      de: 'Der Sänger unter den Walen wäre fast ausgerottet worden – heute gibt es wieder Zehntausende.',
      en: 'The ocean’s great singer was nearly wiped out – today there are tens of thousands again.',
    },
    facts: {
      de: [
        'Männchen singen stundenlange Lieder, die sich jedes Jahr verändern und sich wie Hits über ganze Ozeane verbreiten.',
        'Mit „Blasennetzen“ aus Luftblasen treiben sie Fischschwärme zusammen.',
        'Manche Buckelwale wandern über 8.000 Kilometer zwischen Futter- und Paarungsgebieten.',
      ],
      en: [
        'Males sing songs lasting hours that change every year and spread across whole oceans like hit tunes.',
        'They herd fish with “bubble nets” made of rising air.',
        'Some humpbacks migrate over 8,000 kilometres between feeding and breeding grounds.',
      ],
    },
    threats: {
      de: [
        'Verfangen in Fischereileinen und Netzen.',
        'Kollisionen mit Schiffen in den Wanderrouten.',
        'Meereshitzewellen haben ihre Nahrung zeitweise einbrechen lassen, etwa vor Alaska.',
      ],
      en: [
        'Entanglement in fishing lines and nets.',
        'Ship strikes along migration routes.',
        'Marine heatwaves have caused food shortages, for example off Alaska.',
      ],
    },
    help: {
      de: [
        'Seit dem Jagdverbot (1966) haben sich viele Bestände vervielfacht – mehrere wurden in den USA 2016 von der Liste bedrohter Arten gestrichen.',
        'Rettungsteams befreien verhedderte Wale vielerorts aus Netzen.',
      ],
      en: [
        'Since the hunting ban (1966) many populations have multiplied – several were removed from the US endangered list in 2016.',
        'Rescue teams in many countries free whales caught in fishing gear.',
      ],
    },
    home: [20.8, -156.6],
    range: [
      [21, -157, 600],
      [57, -140, 1200],
      [18, -68, 800],
      [-25, 152, 1200],
      [-60, -60, 2000],
    ],
    relatives: ['basilosaurus', 'ambulocetus'],
    wiki: { de: 'Buckelwal', en: 'Humpback whale' },
  },
  {
    id: 'vaquita',
    sci: 'Phocoena sinus',
    name: { de: 'Vaquita (Kalifornischer Schweinswal)', en: 'Vaquita' },
    group: 'marine-mammal',
    realm: 'sea',
    status: 'CR',
    population: {
      de: 'nur noch etwa 10 Tiere – 2024 wurden 6 bis 8 gesichtet',
      en: 'only about 10 animals left – 6 to 8 were sighted in 2024',
    },
    trend: 'down',
    length: 1.4,
    weight: 45,
    teaser: {
      de: 'Der kleinste und seltenste Wal der Welt lebt nur im nördlichsten Zipfel des Golfs von Kalifornien.',
      en: 'The world’s smallest and rarest cetacean lives only in the far north of the Gulf of California.',
    },
    facts: {
      de: [
        'Dunkle Ringe um die Augen und Lippen lassen ihn aussehen, als trüge er Make-up.',
        'Er wurde erst 1958 wissenschaftlich beschrieben.',
      ],
      en: [
        'Dark rings around its eyes and lips make it look as if it is wearing make-up.',
        'It was only scientifically described in 1958.',
      ],
    },
    threats: {
      de: [
        'Er ertrinkt in illegalen Stellnetzen für den Totoaba – einen Fisch, dessen Schwimmblase in China teuer gehandelt wird.',
        'Mit so wenigen Tieren kann jedes einzelne tote Tier das Aussterben bedeuten.',
      ],
      en: [
        'It drowns in illegal gillnets set for totoaba, a fish whose swim bladder fetches high prices in China.',
        'With so few left, every single death brings extinction closer.',
      ],
    },
    help: {
      de: [
        'Mexiko hat eine Null-Toleranz-Zone eingerichtet; dort versenkte Betonblöcke verhindern seit 2022 das Auslegen von Netzen.',
        'Die Zahl der Vaquitas ist seit 2019 erstaunlich stabil geblieben – die Tiere bekommen weiterhin Kälber.',
        'Garnelen aus dem Golf von Kalifornien nur kaufen, wenn sie mit vaquitasicheren Methoden gefangen wurden.',
      ],
      en: [
        'Mexico has set up a zero-tolerance zone; concrete blocks sunk there since 2022 stop nets from being set.',
        'Vaquita numbers have stayed surprisingly stable since 2019 – the animals are still having calves.',
        'Only buy shrimp from the Gulf of California if caught with vaquita-safe methods.',
      ],
    },
    home: [31.2, -114.4],
    range: [[31.1, -114.4, 60]],
    relatives: ['basilosaurus', 'ambulocetus'],
    wiki: { de: 'Kalifornischer Schweinswal', en: 'Vaquita' },
  },
  {
    id: 'hector-delfin',
    sci: 'Cephalorhynchus hectori',
    name: { de: 'Hector-Delfin', en: "Hector's dolphin" },
    group: 'marine-mammal',
    realm: 'sea',
    status: 'EN',
    population: {
      de: 'rund 15.000 Tiere; von der Unterart Maui-Delfin gibt es nur noch etwa 50',
      en: 'around 15,000; only about 50 remain of the Māui dolphin subspecies',
    },
    trend: 'down',
    length: 1.4,
    weight: 50,
    teaser: {
      de: 'Einer der kleinsten Delfine der Welt lebt nur an den Küsten Neuseelands.',
      en: 'One of the world’s smallest dolphins lives only along the coasts of New Zealand.',
    },
    facts: {
      de: [
        'Seine Rückenflosse ist rund wie ein Mickey-Mouse-Ohr.',
        'Die Unterart Maui-Delfin vor der Nordinsel gehört zu den seltensten Delfinen überhaupt.',
        'Die Tiere entfernen sich selten mehr als 50 Kilometer von ihrem Geburtsort.',
      ],
      en: [
        'Its dorsal fin is rounded like a Mickey Mouse ear.',
        'Its subspecies, the Māui dolphin off the North Island, is among the rarest dolphins on Earth.',
        'Individuals seldom move more than 50 kilometres from where they were born.',
      ],
    },
    threats: {
      de: [
        'Beifang in Stellnetzen und Schleppnetzen der Küstenfischerei.',
        'Toxoplasmose – ein Krankheitserreger aus Katzenkot, der über Flüsse ins Meer gelangt.',
      ],
      en: [
        'Bycatch in coastal gillnets and trawls.',
        'Toxoplasmosis – a parasite from cat faeces washed into the sea by rivers.',
      ],
    },
    help: {
      de: [
        'Neuseeland hat 2020 die Stellnetz-Verbotszonen vor der Nordinsel stark ausgeweitet.',
        'Das Banks-Peninsula-Schutzgebiet (seit 1988) hat die Überlebensrate der Delfine messbar erhöht.',
        'Katzenhalter in Neuseeland können helfen, indem sie Katzenstreu nicht in Toilette oder Abfluss entsorgen.',
      ],
      en: [
        'In 2020 New Zealand greatly expanded gillnet bans off the North Island.',
        'The Banks Peninsula sanctuary (since 1988) has measurably improved dolphin survival.',
        'Cat owners in New Zealand can help by not flushing cat litter down toilets or drains.',
      ],
    },
    home: [-43.8, 173],
    range: [
      [-43.5, 172.5, 300],
      [-41.5, 171.5, 250],
      [-37.5, 174.5, 150],
    ],
    relatives: ['basilosaurus', 'ambulocetus'],
    wiki: { de: 'Hector-Delfin', en: "Hector's dolphin" },
  },
  {
    id: 'irawadi-delfin',
    sci: 'Orcaella brevirostris',
    name: { de: 'Irawadi-Delfin', en: 'Irrawaddy dolphin' },
    group: 'marine-mammal',
    realm: 'sea',
    status: 'EN',
    population: {
      de: 'unbekannt, vermutlich wenige Tausend; manche Flussbestände wie im Mekong zählen kaum 100 Tiere',
      en: 'unknown, probably a few thousand; some river populations such as in the Mekong number barely 100',
    },
    trend: 'down',
    length: 2.3,
    weight: 130,
    teaser: {
      de: 'Der Delfin mit dem runden Kopf lebt an Küsten und in großen Flüssen Südostasiens.',
      en: 'This round-headed dolphin lives along coasts and in large rivers of South and Southeast Asia.',
    },
    facts: {
      de: [
        'Er hat keinen Schnabel und erinnert eher an einen kleinen Beluga.',
        'In Myanmar treiben Delfine den Fischern Fische in die Netze – eine jahrhundertealte Zusammenarbeit.',
        'Er kann Wasser in einem Strahl aus dem Maul spritzen, vermutlich um Fische zu treiben.',
      ],
      en: [
        'It has no beak and looks more like a small beluga.',
        'In Myanmar dolphins drive fish into fishermen’s nets – a cooperation centuries old.',
        'It can squirt jets of water from its mouth, probably to herd fish.',
      ],
    },
    threats: {
      de: [
        'Ertrinken in Stellnetzen, oft auch durch illegale Elektro- und Dynamitfischerei.',
        'Staudämme und Sandabbau zerstören ihre Flusslebensräume.',
      ],
      en: [
        'Drowning in gillnets, often alongside illegal electric and dynamite fishing.',
        'Dams and sand mining destroy their river habitats.',
      ],
    },
    help: {
      de: [
        'In Kambodscha und Laos sind Netze in den Kernzonen des Mekong verboten; Delfinbeobachtung schafft dort Einkommen.',
        'Bangladesch hat in den Sundarbans eigene Delfin-Schutzgebiete ausgewiesen.',
      ],
      en: [
        'In Cambodia and Laos, nets are banned in core Mekong zones, and dolphin watching provides local income.',
        'Bangladesh has created dedicated dolphin sanctuaries in the Sundarbans.',
      ],
    },
    home: [21.8, 89.5],
    range: [
      [22, 90, 400],
      [12.5, 106, 300],
      [20, 95.5, 500],
      [-1, 117, 400],
      [-15, 140, 1000],
    ],
    relatives: ['basilosaurus', 'ambulocetus'],
    wiki: { de: 'Irawadidelfin', en: 'Irrawaddy dolphin' },
  },
  {
    id: 'schweinswal',
    sci: 'Phocoena phocoena',
    name: { de: 'Gewöhnlicher Schweinswal', en: 'Harbour porpoise' },
    group: 'marine-mammal',
    realm: 'sea',
    status: 'LC',
    population: {
      de: 'rund 700.000 Tiere weltweit; in der zentralen Ostsee leben jedoch nur noch etwa 500',
      en: 'around 700,000 worldwide, but only about 500 remain in the central Baltic Sea',
    },
    trend: 'unknown',
    length: 1.6,
    weight: 55,
    teaser: {
      de: 'Der einzige heimische Wal Deutschlands – in der Ostsee akut vom Aussterben bedroht.',
      en: 'Germany’s only native whale – critically endangered in the Baltic Sea.',
    },
    facts: {
      de: [
        'Schweinswale müssen fast pausenlos fressen – bis zu 10 % ihres Körpergewichts am Tag.',
        'Die Population der zentralen Ostsee gilt als eigene Gruppe und ist dort vom Aussterben bedroht.',
      ],
      en: [
        'Harbour porpoises have to eat almost constantly – up to 10% of their body weight a day.',
        'The central Baltic population is genetically distinct and critically endangered.',
      ],
    },
    threats: {
      de: [
        'Beifang in Stellnetzen ist die häufigste Todesursache.',
        'Unterwasserlärm beim Bau von Windparks und durch Munitionssprengungen schädigt ihr Gehör.',
        'Schadstoffe und Sauerstoffmangel in der Ostsee schwächen Tiere und Nahrung.',
      ],
      en: [
        'Bycatch in gillnets is the leading cause of death.',
        'Underwater noise from wind-farm construction and munitions blasting damages their hearing.',
        'Pollution and oxygen-poor “dead zones” in the Baltic weaken the animals and their prey.',
      ],
    },
    help: {
      de: [
        '„Pinger“ an Netzen und Blasenschleier beim Rammen von Fundamenten halten die Tiere fern oder dämpfen den Lärm.',
        'Schutzgebiete wie das Sylter Außenriff sind wichtige Kinderstuben.',
        'Wer Schweinswale in der Ostsee sieht, kann die Sichtung melden und so die Forschung unterstützen.',
      ],
      en: [
        'Acoustic “pingers” on nets and bubble curtains around pile driving keep animals away or muffle the noise.',
        'Protected areas such as the Sylt Outer Reef are important nurseries.',
        'Anyone who spots a porpoise in the Baltic can report it to help researchers.',
      ],
    },
    home: [54.9, 7.8],
    range: [
      [56, 4, 600],
      [55.5, 16, 300],
      [62, -20, 1000],
      [45, -65, 800],
      [50, -150, 1500],
    ],
    relatives: ['basilosaurus', 'ambulocetus'],
    wiki: { de: 'Gewöhnlicher Schweinswal', en: 'Harbour porpoise' },
  },
  {
    id: 'narwal',
    sci: 'Monodon monoceros',
    name: { de: 'Narwal', en: 'Narwhal' },
    group: 'marine-mammal',
    realm: 'sea',
    status: 'LC',
    population: {
      de: 'rund 170.000 Tiere, die meisten in der kanadischen Arktis und vor Grönland',
      en: 'around 170,000, mostly in the Canadian Arctic and around Greenland',
    },
    trend: 'unknown',
    length: 4.5,
    weight: 1200,
    teaser: {
      de: 'Das „Einhorn der Meere“ trägt einen spiralförmigen Stoßzahn von bis zu drei Metern.',
      en: 'The “unicorn of the sea” carries a spiralled tusk up to three metres long.',
    },
    facts: {
      de: [
        'Der Stoßzahn ist ein Zahn, der durch die Oberlippe wächst – mit Millionen Nervenenden.',
        'Narwale tauchen im Winter unter dem Packeis bis zu 1.500 Meter tief.',
        'Im Mittelalter wurden ihre Zähne als „Einhorn-Hörner“ teurer als Gold gehandelt.',
      ],
      en: [
        'The tusk is a tooth that grows through the upper lip and contains millions of nerve endings.',
        'In winter, narwhals dive up to 1,500 metres under the pack ice.',
        'In medieval times their tusks were sold as “unicorn horns”, worth more than gold.',
      ],
    },
    threats: {
      de: [
        'Das Meereis schwindet – und damit Schutz vor Orcas, die nun weiter in die Arktis vordringen.',
        'Zunehmender Schiffsverkehr und Lärm in früher eisbedeckten Gewässern.',
      ],
      en: [
        'Sea ice is shrinking, taking away shelter from orcas that now venture further into the Arctic.',
        'Increasing shipping and noise in formerly ice-covered waters.',
      ],
    },
    help: {
      de: [
        'Kanada hat 2019 das Meeresschutzgebiet Tallurutiup Imanga ausgewiesen, ein Kerngebiet der Narwale.',
        'Die Jagd durch Inuit wird über Quoten gemeinsam mit den Gemeinden gesteuert.',
      ],
      en: [
        'In 2019 Canada created the Tallurutiup Imanga marine conservation area, a narwhal stronghold.',
        'Inuit hunting is managed through quotas set together with local communities.',
      ],
    },
    home: [74, -80],
    range: [
      [74, -80, 800],
      [70, -60, 700],
      [77, 15, 600],
    ],
    relatives: ['basilosaurus', 'ambulocetus'],
    wiki: { de: 'Narwal', en: 'Narwhal' },
  },
  {
    id: 'beluga',
    sci: 'Delphinapterus leucas',
    name: { de: 'Beluga (Weißwal)', en: 'Beluga whale' },
    group: 'marine-mammal',
    realm: 'sea',
    status: 'LC',
    population: {
      de: 'rund 200.000 Tiere; einzelne Bestände wie im Cook Inlet (Alaska) zählen nur wenige Hundert',
      en: 'around 200,000; some populations such as in Alaska’s Cook Inlet number only a few hundred',
    },
    trend: 'unknown',
    length: 4.5,
    weight: 1400,
    teaser: {
      de: 'Der weiße Wal der Arktis wird wegen seiner vielen Laute „Kanarienvogel der Meere“ genannt.',
      en: 'The white whale of the Arctic is nicknamed the “canary of the sea” for its many sounds.',
    },
    facts: {
      de: [
        'Belugas können ihren Kopf drehen und nicken, weil ihre Halswirbel nicht verwachsen sind.',
        'Ihre weiche „Melone“ auf der Stirn verändert die Form, wenn sie Laute aussenden.',
        'Kälber werden grau geboren und erst mit einigen Jahren weiß.',
      ],
      en: [
        'Belugas can turn and nod their heads because their neck vertebrae are not fused.',
        'The soft “melon” on their forehead changes shape as they make sounds.',
        'Calves are born grey and only turn white after several years.',
      ],
    },
    threats: {
      de: [
        'Umweltgifte im St.-Lorenz-Strom und im Cook Inlet machen Tiere krank.',
        'Schwindendes Meereis, Lärm und Ölförderung in der Arktis.',
      ],
      en: [
        'Pollution in the St. Lawrence estuary and Cook Inlet makes animals ill.',
        'Shrinking sea ice, noise and oil extraction in the Arctic.',
      ],
    },
    help: {
      de: [
        'Die bedrohten Bestände im St.-Lorenz-Strom und im Cook Inlet stehen unter besonderem Schutz.',
        'Island hat 2019 ein Schutzbecken im Meer für zwei ehemalige Zoo-Belugas eröffnet.',
      ],
      en: [
        'The threatened St. Lawrence and Cook Inlet populations are under special protection.',
        'In 2019 Iceland opened a sea sanctuary for two former aquarium belugas.',
      ],
    },
    home: [58.7, -94],
    range: [
      [60, -88, 900],
      [70, -140, 900],
      [65, 50, 1000],
      [61, -150, 200],
      [48.3, -69.5, 200],
    ],
    relatives: ['basilosaurus', 'ambulocetus'],
    wiki: { de: 'Weißwal', en: 'Beluga whale' },
  },
  {
    id: 'atlantischer-buckeldelfin',
    sci: 'Sousa teuszii',
    name: { de: 'Atlantischer Buckeldelfin (Kamerunflussdelfin)', en: 'Atlantic humpback dolphin' },
    group: 'marine-mammal',
    realm: 'sea',
    status: 'CR',
    population: {
      de: 'vermutlich weniger als 1.500 erwachsene Tiere, verteilt auf kleine Gruppen',
      en: 'probably fewer than 1,500 adults, split into small groups',
    },
    trend: 'down',
    length: 2.5,
    weight: 150,
    teaser: {
      de: 'Ein kaum bekannter Küstendelfin Westafrikas mit einem auffälligen Buckel unter der Rückenflosse.',
      en: 'A little-known coastal dolphin of West Africa with a distinctive hump below its dorsal fin.',
    },
    facts: {
      de: [
        'Er lebt nur in seichten Küstengewässern von Westsahara bis Angola.',
        'Vor Mauretanien sollen Delfine früher gemeinsam mit Fischern Meeräschen in die Netze getrieben haben.',
      ],
      en: [
        'It lives only in shallow coastal waters from Western Sahara to Angola.',
        'Off Mauritania, dolphins were reported to drive mullet into fishermen’s nets.',
      ],
    },
    threats: {
      de: [
        'Beifang in Küstennetzen ist die größte Gefahr.',
        'Hafenbau und Küstenverbauung zerstören seine Lebensräume.',
        'Er wird teilweise als „Buschfleisch des Meeres“ gegessen.',
      ],
      en: [
        'Bycatch in coastal nets is the greatest danger.',
        'Port construction and coastal development destroy its habitat.',
        'It is sometimes eaten as “marine bushmeat”.',
      ],
    },
    help: {
      de: [
        'Der Nationalpark Banc d’Arguin in Mauretanien schützt einen wichtigen Lebensraum.',
        'Forschende in mehreren Ländern bauen ein gemeinsames Sichtungsnetz auf, um die Restbestände zu finden.',
      ],
      en: [
        'Banc d’Arguin National Park in Mauritania protects key habitat.',
        'Researchers across several countries are building a shared sighting network to locate the remaining groups.',
      ],
    },
    home: [11.5, -16],
    range: [
      [20, -16.5, 300],
      [12, -16, 400],
      [-1, 9, 300],
      [-10, 13, 300],
    ],
    relatives: ['basilosaurus', 'ambulocetus'],
    wiki: { de: 'Kamerunflussdelfin', en: 'Atlantic humpback dolphin' },
  },
  {
    id: 'dugong',
    sci: 'Dugong dugon',
    name: { de: 'Dugong (Gabelschwanzseekuh)', en: 'Dugong' },
    group: 'marine-mammal',
    realm: 'sea',
    status: 'VU',
    population: {
      de: 'unbekannt; der größte Teil – vermutlich über 80.000 Tiere – lebt vor Nordaustralien',
      en: 'unknown; most – probably over 80,000 – live off northern Australia',
    },
    trend: 'down',
    length: 3,
    weight: 400,
    teaser: {
      de: 'Die friedliche Seekuh grast Seegraswiesen ab – und gilt als Ursprung mancher Meerjungfrauen-Sagen.',
      en: 'This gentle sea cow grazes seagrass meadows – and may have inspired mermaid legends.',
    },
    facts: {
      de: [
        'Seekühe sind näher mit Elefanten verwandt als mit Walen oder Robben.',
        'Ein Dugong frisst bis zu 40 Kilogramm Seegras am Tag.',
        'Sie können über 70 Jahre alt werden.',
      ],
      en: [
        'Sea cows are more closely related to elephants than to whales or seals.',
        'A dugong eats up to 40 kilograms of seagrass a day.',
        'They can live for more than 70 years.',
      ],
    },
    threats: {
      de: [
        'Seegraswiesen verschwinden durch Verschmutzung, Baggerarbeiten und Hitzewellen.',
        'Beifang in Netzen und Wilderei.',
        'In Ostafrika und China sind die Bestände bereits fast erloschen.',
      ],
      en: [
        'Seagrass meadows are disappearing through pollution, dredging and heatwaves.',
        'Bycatch in nets and poaching.',
        'Populations in East Africa and China have almost vanished.',
      ],
    },
    help: {
      de: [
        'Im Great-Barrier-Reef-Meerespark gibt es eigene Dugong-Schutzzonen.',
        'Projekte in Australien und Südostasien pflanzen Seegras wieder an.',
      ],
      en: [
        'The Great Barrier Reef Marine Park has dedicated dugong protection areas.',
        'Projects in Australia and Southeast Asia are replanting seagrass.',
      ],
    },
    home: [-25.8, 113.5],
    range: [
      [-15, 135, 1500],
      [-24, 152, 600],
      [25, 52, 600],
      [20, 38, 800],
      [8, 120, 1000],
    ],
    relatives: ['wollhaarmammut'],
    wiki: { de: 'Dugong', en: 'Dugong' },
  },
  {
    id: 'karibik-manati',
    sci: 'Trichechus manatus',
    name: { de: 'Karibik-Manati', en: 'West Indian manatee' },
    group: 'marine-mammal',
    realm: 'sea',
    status: 'VU',
    population: {
      de: 'rund 13.000 Tiere, davon etwa 8.000–10.000 in Florida',
      en: 'around 13,000, of which about 8,000–10,000 live in Florida',
    },
    trend: 'down',
    length: 3.5,
    weight: 500,
    teaser: {
      de: 'Die gemütliche Seekuh der Karibik pendelt zwischen Meer, Lagunen und warmen Quellen.',
      en: 'The Caribbean’s easy-going sea cow moves between the sea, lagoons and warm springs.',
    },
    facts: {
      de: [
        'Im Winter versammeln sich in Florida Hunderte Manatis an warmen Quellen und Kraftwerksausläufen.',
        'Ihre Backenzähne wachsen ständig von hinten nach – wie ein Förderband.',
      ],
      en: [
        'In winter, hundreds of manatees gather at warm springs and power-plant outflows in Florida.',
        'Their molars are constantly replaced from behind, like a conveyor belt.',
      ],
    },
    threats: {
      de: [
        'Verletzungen durch Bootsschrauben – fast jedes Tier in Florida trägt Narben.',
        'Algenblüten zerstören Seegras: 2021 verhungerten in Florida über 1.000 Manatis.',
        'Kältewellen und der Verlust warmer Rückzugsorte.',
      ],
      en: [
        'Boat-propeller injuries – almost every Florida manatee bears scars.',
        'Algal blooms wipe out seagrass: in 2021 more than 1,000 manatees starved in Florida.',
        'Cold snaps and the loss of warm-water refuges.',
      ],
    },
    help: {
      de: [
        'Langsamfahrzonen für Boote in Florida retten nachweislich Leben.',
        'Rettungsstationen pflegen verletzte und unterernährte Tiere und wildern sie wieder aus.',
        'Beim Bootfahren in Manati-Gebieten langsam fahren und Abstand halten.',
      ],
      en: [
        'Slow-speed zones for boats in Florida demonstrably save lives.',
        'Rescue centres treat injured and starving animals and release them again.',
        'When boating in manatee areas, go slowly and keep your distance.',
      ],
    },
    home: [28.9, -82.7],
    range: [
      [27.5, -81.5, 500],
      [21, -77, 1000],
      [16, -87, 600],
      [5, -55, 900],
      [-5, -38, 600],
    ],
    relatives: ['wollhaarmammut'],
    wiki: { de: 'Karibik-Manati', en: 'West Indian manatee' },
  },
  {
    id: 'mittelmeer-moenchsrobbe',
    sci: 'Monachus monachus',
    name: { de: 'Mittelmeer-Mönchsrobbe', en: 'Mediterranean monk seal' },
    group: 'marine-mammal',
    realm: 'sea',
    status: 'VU',
    population: {
      de: 'rund 700–800 Tiere, vor allem in Griechenland, der Türkei und vor Mauretanien',
      en: 'around 700–800 animals, mainly in Greece, Turkey and off Mauritania',
    },
    trend: 'up',
    length: 2.6,
    weight: 300,
    teaser: {
      de: 'Europas seltenste Robbe versteckt sich in Meereshöhlen – und kehrt langsam zurück.',
      en: 'Europe’s rarest seal hides in sea caves – and is slowly making a comeback.',
    },
    facts: {
      de: [
        'Früher lebte sie an fast allen Mittelmeerküsten; die Römer kannten sie gut.',
        'Weil sie an Stränden gestört wurde, zieht sie ihre Jungen heute meist in versteckten Höhlen auf.',
      ],
      en: [
        'It once lived on almost every Mediterranean coast; the Romans knew it well.',
        'Disturbed on open beaches, it now raises its pups mostly in hidden caves.',
      ],
    },
    threats: {
      de: [
        'Störung durch Tourismus und Bebauung an ihren letzten Rückzugsküsten.',
        'Verfangen in Fischernetzen und gezielte Tötung durch Fischer.',
      ],
      en: [
        'Disturbance from tourism and building on its last refuge coasts.',
        'Entanglement in fishing nets and deliberate killing by fishermen.',
      ],
    },
    help: {
      de: [
        'Schutzgebiete wie der Meerespark Alonissos (Griechenland) und Cabo Blanco (Mauretanien) ließen die Bestände wachsen – 2023 wurde die Art von „stark gefährdet“ auf „gefährdet“ herabgestuft.',
        'Wer im Urlaub eine Mönchsrobbe sieht, sollte Abstand halten und die Sichtung den örtlichen Schutzgruppen melden.',
      ],
      en: [
        'Protected areas such as Alonissos Marine Park (Greece) and Cabo Blanco (Mauritania) helped numbers grow – in 2023 the species was downlisted from Endangered to Vulnerable.',
        'If you see a monk seal on holiday, keep your distance and report it to local conservation groups.',
      ],
    },
    home: [39.2, 24],
    range: [
      [38, 25, 500],
      [36.5, 32, 400],
      [21, -17, 200],
      [32.7, -16.7, 100],
    ],
    wiki: { de: 'Mittelmeer-Mönchsrobbe', en: 'Mediterranean monk seal' },
  },
  {
    id: 'hawaii-moenchsrobbe',
    sci: 'Neomonachus schauinslandi',
    name: { de: 'Hawaii-Mönchsrobbe', en: 'Hawaiian monk seal' },
    group: 'marine-mammal',
    realm: 'sea',
    status: 'VU',
    population: {
      de: 'rund 1.600 Tiere',
      en: 'around 1,600 animals',
    },
    trend: 'up',
    length: 2.2,
    weight: 200,
    teaser: {
      de: 'Die einzige Robbe Hawaiis lebt nur auf den abgelegenen Inseln und Atollen des Archipels.',
      en: 'Hawaii’s only native seal lives on the islands and remote atolls of the archipelago.',
    },
    facts: {
      de: [
        'Ihre Vorfahren kamen vermutlich vor Millionen Jahren durch eine damals noch offene Meeresstraße zwischen Nord- und Südamerika in den Pazifik.',
        'Auf Hawaiianisch heißt sie „ʻīlio holo i ka uaua“ – „Hund, der durch raues Wasser läuft“.',
      ],
      en: [
        'Its ancestors probably reached the Pacific millions of years ago through a then-open seaway between North and South America.',
        'In Hawaiian it is called “ʻīlio holo i ka uaua” – “dog that runs in rough water”.',
      ],
    },
    threats: {
      de: [
        'Junge Robben verhungern, weil sie mit Haien und großen Fischen um Nahrung konkurrieren.',
        'Verfangen in Netzresten und Müll.',
        'Steigender Meeresspiegel überflutet die flachen Atolle, auf denen sie ihre Jungen bekommen.',
      ],
      en: [
        'Young seals starve because they compete with sharks and large fish for food.',
        'Entanglement in derelict nets and debris.',
        'Rising seas are flooding the low atolls where they give birth.',
      ],
    },
    help: {
      de: [
        'Das Meeresschutzgebiet Papahānaumokuākea (2006, erweitert 2016) gehört zu den größten der Welt.',
        'Ein Rettungsprogramm päppelt unterernährte Jungtiere auf; seit 2013 wächst der Bestand wieder.',
        'Robben am Strand nicht stören – 50 Meter Abstand halten.',
      ],
      en: [
        'Papahānaumokuākea Marine National Monument (2006, expanded 2016) is one of the largest protected areas on Earth.',
        'A rescue programme nurses underweight young seals back to health; numbers have been rising since 2013.',
        'Don’t disturb seals on beaches – keep 50 metres away.',
      ],
    },
    home: [23.8, -166.2],
    range: [
      [25, -170, 900],
      [21, -157.5, 300],
    ],
    wiki: { de: 'Hawaii-Mönchsrobbe', en: 'Hawaiian monk seal' },
  },
  {
    id: 'galapagos-seeloewe',
    sci: 'Zalophus wollebaeki',
    name: { de: 'Galápagos-Seelöwe', en: 'Galápagos sea lion' },
    group: 'marine-mammal',
    realm: 'sea',
    status: 'EN',
    population: {
      de: 'schwankend, etwa 20.000–50.000 Tiere',
      en: 'fluctuating, around 20,000–50,000 animals',
    },
    trend: 'down',
    length: 2,
    weight: 180,
    teaser: {
      de: 'Die verspielten Seelöwen der Galápagos-Inseln schlafen auch mal auf Parkbänken in den Hafenorten.',
      en: 'The playful sea lions of Galápagos sometimes sleep on park benches in harbour towns.',
    },
    facts: {
      de: [
        'Sie jagen manchmal in Gruppen und treiben Thunfische in Buchten, wo sie sie leichter fangen.',
        'Sie sind kaum scheu und schwimmen neugierig um Schnorchler herum.',
      ],
      en: [
        'They sometimes hunt in groups, driving tuna into coves where they are easier to catch.',
        'They show little fear and curiously circle snorkellers.',
      ],
    },
    threats: {
      de: [
        'El-Niño-Jahre lassen die Nahrung einbrechen; dann sterben viele Jungtiere.',
        'Krankheiten, die von verwilderten Hunden übertragen werden.',
        'Verfangen in Angelschnüren und Müll.',
      ],
      en: [
        'El Niño years cause food to collapse, killing many pups.',
        'Diseases spread by feral dogs.',
        'Entanglement in fishing lines and debris.',
      ],
    },
    help: {
      de: [
        'Das Galápagos-Meeresschutzgebiet wurde 2022 um die Hermandad-Reserve erweitert.',
        'Hunde auf den Inseln werden geimpft und kontrolliert, um Krankheiten zu verhindern.',
      ],
      en: [
        'The Galápagos Marine Reserve was expanded in 2022 with the Hermandad reserve.',
        'Dogs on the islands are vaccinated and controlled to prevent disease spread.',
      ],
    },
    home: [-0.9, -89.6],
    range: [[-0.6, -90.5, 250]],
    wiki: { de: 'Galápagos-Seelöwe', en: 'Galápagos sea lion' },
  },
  {
    id: 'stellerscher-seeloewe',
    sci: 'Eumetopias jubatus',
    name: { de: 'Stellerscher Seelöwe', en: 'Steller sea lion' },
    group: 'marine-mammal',
    realm: 'sea',
    status: 'NT',
    population: {
      de: 'rund 160.000 Tiere; der westliche Bestand ist seit den 1970er-Jahren um über 80 % geschrumpft',
      en: 'around 160,000; the western population has fallen by more than 80% since the 1970s',
    },
    trend: 'unknown',
    length: 3,
    weight: 1000,
    teaser: {
      de: 'Der größte Seelöwe der Welt – Bullen wiegen so viel wie ein Kleinwagen.',
      en: 'The world’s largest sea lion – bulls weigh as much as a small car.',
    },
    facts: {
      de: [
        'Männchen haben eine dichte Mähne, die an einen Löwen erinnert.',
        'Benannt ist er nach dem Naturforscher Georg Wilhelm Steller, der ihn 1741 beschrieb.',
      ],
      en: [
        'Males have a thick mane reminiscent of a lion.',
        'It is named after naturalist Georg Wilhelm Steller, who described it in 1741.',
      ],
    },
    threats: {
      de: [
        'Nahrungsmangel durch Überfischung und klimabedingte Veränderungen im Nordpazifik.',
        'Jagd durch Orcas und Verfangen in Fischereigerät.',
      ],
      en: [
        'Food shortages from overfishing and climate-driven changes in the North Pacific.',
        'Predation by orcas and entanglement in fishing gear.',
      ],
    },
    help: {
      de: [
        'Der östliche Bestand hat sich so gut erholt, dass er 2013 von der US-Liste bedrohter Arten gestrichen wurde.',
        'Fischereiverbote rund um Kolonien schützen die Nahrung des bedrohten Westbestands.',
      ],
      en: [
        'The eastern population recovered so well that it was removed from the US endangered list in 2013.',
        'Fishing closures around rookeries protect food for the endangered western population.',
      ],
    },
    home: [55, -160],
    range: [
      [53, -170, 1200],
      [57, -135, 800],
      [52, 158, 800],
      [45, -125, 600],
    ],
    wiki: { de: 'Stellerscher Seelöwe', en: 'Steller sea lion' },
  },
  {
    id: 'seeotter',
    sci: 'Enhydra lutris',
    name: { de: 'Seeotter', en: 'Sea otter' },
    group: 'marine-mammal',
    realm: 'sea',
    status: 'EN',
    population: {
      de: 'rund 125.000 Tiere – nach fast völliger Ausrottung durch die Pelzjagd',
      en: 'around 125,000 – after being nearly wiped out by the fur trade',
    },
    trend: 'down',
    length: 1.3,
    weight: 30,
    teaser: {
      de: 'Der Otter mit dem dichtesten Fell der Welt rettet ganze Tangwälder.',
      en: 'The otter with the densest fur on Earth saves entire kelp forests.',
    },
    facts: {
      de: [
        'Auf einem Quadratzentimeter Fell wachsen bis zu 150.000 Haare.',
        'Er knackt Muscheln mit Steinen, die er auf dem Bauch liegend als Amboss nutzt.',
        'Seeotter fressen Seeigel – ohne sie würden Seeigel die Tangwälder kahl fressen.',
      ],
      en: [
        'Up to 150,000 hairs grow on a single square centimetre of its fur.',
        'It cracks shellfish on a stone balanced on its belly like an anvil.',
        'Sea otters eat sea urchins – without them, urchins would strip kelp forests bare.',
      ],
    },
    threats: {
      de: [
        'Ölverschmutzung: Verklebtes Fell isoliert nicht mehr, die Tiere erfrieren.',
        'Haibisse und Jagd durch Orcas, besonders in Alaska und Kalifornien.',
        'Krankheiten und Parasiten aus verschmutztem Küstenwasser.',
      ],
      en: [
        'Oil spills: oiled fur no longer insulates and the animals freeze.',
        'Shark bites and orca predation, especially in Alaska and California.',
        'Diseases and parasites from polluted coastal water.',
      ],
    },
    help: {
      de: [
        'Das internationale Pelzrobben-Abkommen von 1911 stoppte die Jagd – nur rund 2.000 Tiere hatten überlebt.',
        'Umsiedlungen haben Seeotter an Küsten von British Columbia und Washington zurückgebracht.',
      ],
      en: [
        'The 1911 International Fur Seal Treaty ended the hunt – only about 2,000 animals had survived.',
        'Reintroductions have brought sea otters back to coasts in British Columbia and Washington.',
      ],
    },
    home: [36.6, -121.9],
    range: [
      [56, -160, 1200],
      [50, 155, 1000],
      [36, -121.5, 300],
      [50, -127, 400],
    ],
    wiki: { de: 'Seeotter', en: 'Sea otter' },
  },
  {
    id: 'eisbaer',
    sci: 'Ursus maritimus',
    name: { de: 'Eisbär', en: 'Polar bear' },
    group: 'marine-mammal',
    realm: 'sea',
    status: 'VU',
    population: {
      de: 'rund 26.000 Tiere in 19 Teilbeständen rund um die Arktis',
      en: 'around 26,000 in 19 subpopulations around the Arctic',
    },
    trend: 'unknown',
    length: 2.5,
    weight: 450,
    teaser: {
      de: 'Der größte Landraubtier-Jäger lebt eigentlich auf dem Meer – auf dem Packeis der Arktis.',
      en: 'The largest land carnivore actually lives on the sea – on the Arctic pack ice.',
    },
    facts: {
      de: [
        'Eisbären gelten als Meeressäuger, weil sie fast ihr ganzes Leben auf dem Meereis verbringen.',
        'Ihr Fell ist nicht weiß, sondern durchsichtig; darunter ist die Haut schwarz.',
        'Sie schwimmen tagelang – ein Weibchen legte einmal fast 700 Kilometer am Stück zurück.',
      ],
      en: [
        'Polar bears count as marine mammals because they spend almost their entire lives on sea ice.',
        'Their fur is not white but transparent, and their skin underneath is black.',
        'They can swim for days – one female covered almost 700 kilometres in one go.',
      ],
    },
    threats: {
      de: [
        'Der Klimawandel lässt das Meereis schrumpfen, von dem aus sie Robben jagen.',
        'Längere eisfreie Sommer zwingen sie an Land, wo sie hungern.',
        'Schadstoffe reichern sich über die Nahrungskette in ihrem Körper an.',
      ],
      en: [
        'Climate change is shrinking the sea ice they hunt seals from.',
        'Longer ice-free summers force them ashore, where they go hungry.',
        'Pollutants build up in their bodies through the food chain.',
      ],
    },
    help: {
      de: [
        'Das Eisbären-Abkommen der fünf Arktisstaaten (1973) beendete die unkontrollierte Jagd.',
        'Klimaschutz – weniger Treibhausgase – ist der einzige Weg, ihr Meereis zu erhalten.',
      ],
      en: [
        'The 1973 polar bear agreement between the five Arctic nations ended uncontrolled hunting.',
        'Climate action – cutting greenhouse gases – is the only way to save their sea ice.',
      ],
    },
    home: [74, -95],
    range: [
      [74, -95, 1500],
      [72, -155, 900],
      [78, 20, 800],
      [75, 140, 1500],
      [72, -40, 900],
    ],
    wiki: { de: 'Eisbär', en: 'Polar bear' },
  },

  // ───────────────────────── Haie und Rochen ─────────────────────────
  {
    id: 'walhai',
    sci: 'Rhincodon typus',
    name: { de: 'Walhai', en: 'Whale shark' },
    group: 'shark-ray',
    realm: 'sea',
    status: 'EN',
    population: {
      de: 'unbekannt; in den letzten 75 Jahren um mehr als die Hälfte geschrumpft',
      en: 'unknown; more than halved over the last 75 years',
    },
    trend: 'down',
    length: 12,
    weight: 20000,
    teaser: {
      de: 'Der größte Fisch der Welt ist ein sanfter Riese, der Plankton filtert.',
      en: 'The world’s largest fish is a gentle giant that filters plankton.',
    },
    facts: {
      de: [
        'Jeder Walhai hat ein einzigartiges Punktemuster – wie ein Fingerabdruck.',
        'Er filtert stündlich Tausende Liter Wasser nach Plankton und Fischlaich.',
        'Walhaie wandern über ganze Ozeane; ein Tier legte über 20.000 Kilometer zurück.',
      ],
      en: [
        'Every whale shark has a unique pattern of spots – like a fingerprint.',
        'It filters thousands of litres of water an hour for plankton and fish eggs.',
        'Whale sharks cross entire oceans; one was tracked for over 20,000 kilometres.',
      ],
    },
    threats: {
      de: [
        'Kollisionen mit Schiffen, weil sie oft knapp unter der Oberfläche fressen.',
        'Beifang in Ringwadennetzen und gezielte Jagd für Flossen und Fleisch.',
      ],
      en: [
        'Ship strikes, because they often feed just below the surface.',
        'Bycatch in purse-seine nets and targeted fishing for fins and meat.',
      ],
    },
    help: {
      de: [
        'Viele Länder, darunter die Philippinen, Taiwan und Indien, haben den Fang verboten.',
        'Verantwortungsvoller Walhai-Tourismus ohne Füttern bringt Küstengemeinden mehr ein als die Jagd.',
      ],
      en: [
        'Many countries, including the Philippines, Taiwan and India, have banned catching them.',
        'Responsible whale shark tourism without feeding earns coastal communities more than hunting.',
      ],
    },
    home: [-22, 113.8],
    range: [
      [-22, 113, 700],
      [21, -87, 600],
      [25, 52, 800],
      [10, 123, 800],
      [-0.5, -90, 600],
      [-22, 35, 800],
    ],
    relatives: ['megalodon'],
    wiki: { de: 'Walhai', en: 'Whale shark' },
  },
  {
    id: 'weisser-hai',
    sci: 'Carcharodon carcharias',
    name: { de: 'Weißer Hai', en: 'Great white shark' },
    group: 'shark-ray',
    realm: 'sea',
    status: 'VU',
    population: {
      de: 'unbekannt; vermutlich jeweils wenige Tausend Tiere in den großen Regionalbeständen',
      en: 'unknown; probably a few thousand in each major regional population',
    },
    trend: 'unknown',
    length: 5,
    weight: 1100,
    teaser: {
      de: 'Der berühmteste Hai der Welt ist ein Spitzenräuber, der viel mehr zu fürchten hat als wir.',
      en: 'The world’s most famous shark is a top predator with far more to fear from us than we from it.',
    },
    facts: {
      de: [
        'Weiße Haie halten ihren Körper wärmer als das umgebende Wasser – ein Vorteil bei der Jagd.',
        'Sie springen bei der Robbenjagd manchmal komplett aus dem Wasser.',
        'Manche Tiere pendeln zwischen Südafrika und Australien.',
      ],
      en: [
        'Great whites keep their bodies warmer than the surrounding water, which helps them hunt.',
        'When hunting seals they sometimes leap clear out of the water.',
        'Some individuals commute between South Africa and Australia.',
      ],
    },
    threats: {
      de: [
        'Beifang in Langleinen, Stellnetzen und Schleppnetzen.',
        'Hainetze an Badestränden töten viele Tiere.',
        'Wegen ihres schlechten Rufs werden sie noch immer als Trophäe gejagt.',
      ],
      en: [
        'Bycatch on longlines, in gillnets and trawls.',
        'Shark nets at swimming beaches kill many animals.',
        'Their bad reputation still makes them a target for trophy hunting.',
      ],
    },
    help: {
      de: [
        'Südafrika schützte den Weißen Hai 1991 als erstes Land der Welt; heute ist er auch im Washingtoner Artenschutzabkommen gelistet.',
        'Vor Kalifornien und Massachusetts haben sich die Bestände dank Schutz und wachsender Robbenkolonien erholt.',
        'Keine Souvenirs aus Haizähnen oder -kiefern kaufen.',
      ],
      en: [
        'South Africa was the first country to protect great whites in 1991; they are now also listed under CITES.',
        'Off California and Massachusetts, numbers have recovered thanks to protection and growing seal colonies.',
        'Don’t buy souvenirs made from shark teeth or jaws.',
      ],
    },
    home: [-34.6, 19.3],
    range: [
      [-34, 22, 800],
      [-35, 140, 1500],
      [32, -120, 1000],
      [40, -70, 800],
      [-42, 172, 700],
      [37, 15, 800],
    ],
    relatives: ['megalodon', 'cretoxyrhina'],
    wiki: { de: 'Weißer Hai', en: 'Great white shark' },
  },
  {
    id: 'grosser-hammerhai',
    sci: 'Sphyrna mokarran',
    name: { de: 'Großer Hammerhai', en: 'Great hammerhead' },
    group: 'shark-ray',
    realm: 'sea',
    status: 'CR',
    population: {
      de: 'unbekannt; in vielen Regionen um über 80 % zurückgegangen',
      en: 'unknown; declined by more than 80% in many regions',
    },
    trend: 'down',
    length: 4.5,
    weight: 300,
    teaser: {
      de: 'Der größte Hammerhai nutzt seinen breiten Kopf wie einen Metalldetektor für Rochen im Sand.',
      en: 'The largest hammerhead uses its wide head like a metal detector to find rays buried in sand.',
    },
    facts: {
      de: [
        'Der „Hammer“ ist voller Sinneszellen, die schwache elektrische Felder von Beutetieren spüren.',
        'Er frisst bevorzugt Stachelrochen und scheint gegen ihr Gift wenig empfindlich zu sein.',
      ],
      en: [
        'The “hammer” is packed with sensory cells that detect the weak electric fields of prey.',
        'It favours stingrays and seems fairly unaffected by their venom.',
      ],
    },
    threats: {
      de: [
        'Seine großen Flossen sind im Flossenhandel besonders begehrt.',
        'Er stirbt am Haken schnell an Stress – auch wenn er wieder freigelassen wird.',
      ],
      en: [
        'Its large fins are especially prized in the fin trade.',
        'It dies quickly from stress when hooked, even if released afterwards.',
      ],
    },
    help: {
      de: [
        'Seit 2014 ist der internationale Handel durch das Washingtoner Artenschutzabkommen (CITES) beschränkt.',
        'Florida verbietet seit 2012 die Entnahme von Hammerhaien in seinen Gewässern.',
        'Keine Haifischflossensuppe essen und keine Produkte aus Haiknorpel kaufen.',
      ],
      en: [
        'Since 2014, international trade has been restricted under CITES.',
        'Florida has banned taking hammerheads from its waters since 2012.',
        'Avoid shark fin soup and products made from shark cartilage.',
      ],
    },
    home: [25.7, -79.3],
    range: [
      [25, -80, 900],
      [-20, 150, 1500],
      [15, 60, 2000],
      [-5, -35, 800],
      [5, 0, 1000],
    ],
    relatives: ['megalodon'],
    wiki: { de: 'Großer Hammerhai', en: 'Great hammerhead' },
  },
  {
    id: 'bogenstirn-hammerhai',
    sci: 'Sphyrna lewini',
    name: { de: 'Bogenstirn-Hammerhai', en: 'Scalloped hammerhead' },
    group: 'shark-ray',
    realm: 'sea',
    status: 'CR',
    population: {
      de: 'unbekannt; weltweit um über 80 % zurückgegangen',
      en: 'unknown; declined by more than 80% worldwide',
    },
    trend: 'down',
    length: 3,
    weight: 150,
    teaser: {
      de: 'Diese Hammerhaie bilden an Unterwasserbergen gewaltige Schwärme mit Hunderten Tieren.',
      en: 'These hammerheads gather in huge schools of hundreds around underwater mountains.',
    },
    facts: {
      de: [
        'Tagsüber stehen sie in Schwärmen an Seebergen, nachts jagen sie allein im offenen Meer.',
        'Sie orientieren sich vermutlich am Magnetfeld der Erde.',
      ],
      en: [
        'By day they school around seamounts; at night they hunt alone in open water.',
        'They probably navigate using the Earth’s magnetic field.',
      ],
    },
    threats: {
      de: [
        'Gezielte Fischerei und Beifang für den Flossenhandel.',
        'Ihre Kinderstuben in Küstennähe werden durch Bebauung und Fischerei zerstört.',
      ],
      en: [
        'Targeted fishing and bycatch for the fin trade.',
        'Coastal nursery grounds are destroyed by development and fishing.',
      ],
    },
    help: {
      de: [
        'Meeresschutzgebiete wie Galápagos, Cocos-Insel und Malpelo schützen ihre berühmten Schwärme.',
        'Seit 2014 regelt CITES den internationalen Handel mit ihren Flossen.',
      ],
      en: [
        'Marine reserves such as Galápagos, Cocos Island and Malpelo protect their famous schools.',
        'Since 2014, CITES has regulated the international trade in their fins.',
      ],
    },
    home: [5.5, -87],
    range: [
      [3, -85, 1000],
      [24, -85, 1200],
      [20, 37, 900],
      [-25, 155, 1200],
      [5, -5, 1000],
    ],
    relatives: ['megalodon'],
    wiki: { de: 'Bogenstirn-Hammerhai', en: 'Scalloped hammerhead' },
  },
  {
    id: 'riesenhai',
    sci: 'Cetorhinus maximus',
    name: { de: 'Riesenhai', en: 'Basking shark' },
    group: 'shark-ray',
    realm: 'sea',
    status: 'EN',
    population: {
      de: 'unbekannt; durch frühere Jagd stark dezimiert',
      en: 'unknown; heavily depleted by past hunting',
    },
    trend: 'down',
    length: 8,
    weight: 4000,
    teaser: {
      de: 'Der zweitgrößte Fisch der Welt schwimmt mit weit aufgerissenem Maul durch Planktonwolken – auch vor Europas Küsten.',
      en: 'The world’s second-largest fish cruises through plankton clouds with its mouth wide open – even off Europe’s coasts.',
    },
    facts: {
      de: [
        'Er filtert pro Stunde bis zu 2.000 Tonnen Wasser.',
        'Trotz seiner Größe kann er komplett aus dem Wasser springen.',
        'Im Sommer ist er regelmäßig vor Schottland, Irland und Cornwall zu sehen.',
      ],
      en: [
        'It filters up to 2,000 tonnes of water an hour.',
        'Despite its size, it can leap completely out of the water.',
        'In summer it is regularly seen off Scotland, Ireland and Cornwall.',
      ],
    },
    threats: {
      de: [
        'Früher wurde er wegen seines öligen Lebertrans massenhaft gejagt.',
        'Beifang in Netzen und Kollisionen mit Booten.',
        'Er vermehrt sich extrem langsam: Weibchen tragen vermutlich über ein Jahr.',
      ],
      en: [
        'It was once hunted in large numbers for its oily liver.',
        'Bycatch in nets and collisions with boats.',
        'It reproduces extremely slowly: females are probably pregnant for over a year.',
      ],
    },
    help: {
      de: [
        'In der EU, Großbritannien und Neuseeland ist er streng geschützt.',
        'Schottland hat 2020 vor den Inneren Hebriden ein Schutzgebiet für Riesenhaie eingerichtet.',
      ],
      en: [
        'It is strictly protected in the EU, the UK and New Zealand.',
        'In 2020 Scotland created a protected area for basking sharks off the Inner Hebrides.',
      ],
    },
    home: [56.5, -6.5],
    range: [
      [55, -8, 800],
      [42, -68, 800],
      [40, -125, 1000],
      [-40, 160, 1500],
      [-38, -60, 1000],
    ],
    relatives: ['cretoxyrhina', 'megalodon'],
    wiki: { de: 'Riesenhai', en: 'Basking shark' },
  },
  {
    id: 'kurzflossen-mako',
    sci: 'Isurus oxyrinchus',
    name: { de: 'Kurzflossen-Mako', en: 'Shortfin mako shark' },
    group: 'shark-ray',
    realm: 'sea',
    status: 'EN',
    population: {
      de: 'unbekannt; im Nordatlantik durch Überfischung stark zurückgegangen',
      en: 'unknown; sharply reduced by overfishing in the North Atlantic',
    },
    trend: 'down',
    length: 3,
    weight: 140,
    teaser: {
      de: 'Der schnellste Hai der Welt erreicht in kurzen Sprints über 70 km/h.',
      en: 'The world’s fastest shark can sprint at more than 70 km/h.',
    },
    facts: {
      de: [
        'Winzige Schuppen auf seiner Haut verringern den Wasserwiderstand.',
        'Er springt bis zu sechs Meter hoch aus dem Wasser.',
        'Makos wandern Tausende Kilometer durch die offenen Ozeane.',
      ],
      en: [
        'Tiny scales on its skin reduce drag.',
        'It can leap up to six metres out of the water.',
        'Makos travel thousands of kilometres across the open ocean.',
      ],
    },
    threats: {
      de: [
        'Beifang auf Langleinen für Thunfisch und Schwertfisch.',
        'Fleisch und Flossen werden gehandelt; früher war er auch beliebt beim Sportangeln.',
      ],
      en: [
        'Bycatch on tuna and swordfish longlines.',
        'Its meat and fins are traded, and it was once popular with sport anglers.',
      ],
    },
    help: {
      de: [
        'Seit 2022 gilt im Nordatlantik ein Anlandeverbot für Makos (ICCAT).',
        'Seit 2019 ist der internationale Handel durch CITES geregelt.',
        'Beim Fischkauf auf zertifizierte Ware achten und keine Hai-Steaks kaufen.',
      ],
      en: [
        'Since 2022, landing makos in the North Atlantic has been banned (ICCAT).',
        'Since 2019, international trade has been regulated under CITES.',
        'Choose certified seafood and avoid buying shark steaks.',
      ],
    },
    home: [35, -45],
    range: [
      [35, -50, 2500],
      [30, -130, 2500],
      [-30, -80, 1800],
      [-35, 20, 1500],
      [-35, 150, 2000],
      [38, 15, 700],
    ],
    relatives: ['cretoxyrhina', 'megalodon'],
    wiki: { de: 'Kurzflossen-Mako', en: 'Shortfin mako shark' },
  },
  {
    id: 'weissspitzen-hochseehai',
    sci: 'Carcharhinus longimanus',
    name: { de: 'Weißspitzen-Hochseehai', en: 'Oceanic whitetip shark' },
    group: 'shark-ray',
    realm: 'sea',
    status: 'CR',
    population: {
      de: 'unbekannt; in drei Generationen um über 95 % zurückgegangen',
      en: 'unknown; declined by more than 95% over three generations',
    },
    trend: 'down',
    length: 3,
    weight: 100,
    teaser: {
      de: 'Einst einer der häufigsten Haie der Hochsee – heute aus vielen Meeresgebieten fast verschwunden.',
      en: 'Once one of the most common sharks of the open ocean – now almost gone from many areas.',
    },
    facts: {
      de: [
        'Seine langen, runden Brust- und Rückenflossen haben auffällige weiße Spitzen.',
        'Er folgt oft Grindwalen, um von deren Jagd auf Tintenfische zu profitieren.',
      ],
      en: [
        'Its long, rounded pectoral and dorsal fins have striking white tips.',
        'It often follows pilot whales to profit from their squid hunts.',
      ],
    },
    threats: {
      de: [
        'Seine großen Flossen sind im Flossenhandel sehr begehrt.',
        'Massenhafter Beifang auf Langleinen der Thunfischfischerei.',
      ],
      en: [
        'Its large fins are highly valued in the fin trade.',
        'Huge bycatch on tuna longlines.',
      ],
    },
    help: {
      de: [
        'Alle großen Thunfisch-Kommissionen verbieten seit etwa 2013, ihn an Bord zu behalten.',
        'Seit 2014 ist er in CITES gelistet, sein Handel ist also streng geregelt.',
      ],
      en: [
        'Since around 2013, all major tuna commissions have banned keeping it on board.',
        'It has been listed under CITES since 2014, so its trade is strictly regulated.',
      ],
    },
    home: [25.5, 34.5],
    range: [
      [10, -40, 2500],
      [10, -140, 3000],
      [-10, 70, 2500],
      [-15, 150, 2000],
      [25, 35, 500],
    ],
    relatives: ['megalodon'],
    wiki: { de: 'Weißspitzen-Hochseehai', en: 'Oceanic whitetip shark' },
  },
  {
    id: 'tigerhai',
    sci: 'Galeocerdo cuvier',
    name: { de: 'Tigerhai', en: 'Tiger shark' },
    group: 'shark-ray',
    realm: 'sea',
    status: 'NT',
    population: {
      de: 'unbekannt; in einigen Regionen deutlich zurückgegangen',
      en: 'unknown; markedly declined in some regions',
    },
    trend: 'down',
    length: 4,
    weight: 450,
    teaser: {
      de: 'Der „Mülleimer der Meere“ frisst fast alles – von Meeresschildkröten bis zu Seevögeln.',
      en: 'The “garbage can of the sea” eats almost anything – from sea turtles to seabirds.',
    },
    facts: {
      de: [
        'Junge Tigerhaie haben dunkle Streifen, die mit dem Alter verblassen.',
        'Mit seinen gesägten Zähnen knackt er sogar Schildkrötenpanzer.',
        'Tigerhaie halten Seegraswiesen gesund, weil Meeresschildkröten und Dugongs vor ihnen auf der Hut sind.',
      ],
      en: [
        'Young tiger sharks have dark stripes that fade with age.',
        'Its serrated teeth can even crack turtle shells.',
        'Tiger sharks keep seagrass meadows healthy because turtles and dugongs stay wary of them.',
      ],
    },
    threats: {
      de: [
        'Beifang und gezielte Fischerei für Flossen, Fleisch, Leber und Haut.',
        'Hainetze und Köderleinen an Badestränden in Australien und Südafrika.',
      ],
      en: [
        'Bycatch and targeted fishing for fins, meat, liver and skin.',
        'Shark nets and drumlines at beaches in Australia and South Africa.',
      ],
    },
    help: {
      de: [
        'Die Bahamas sind seit 2011 ein Hai-Schutzgebiet; Tauchtourismus mit Tigerhaien bringt dort viel Geld ein.',
        'Moderne Warnsysteme wie Drohnen ersetzen in einigen Regionen tödliche Hainetze.',
      ],
      en: [
        'The Bahamas have been a shark sanctuary since 2011, and tiger shark dive tourism brings in large revenue.',
        'Modern warning systems such as drones are replacing deadly shark nets in some regions.',
      ],
    },
    home: [26.9, -79],
    range: [
      [25, -78, 1500],
      [-22, 153, 1500],
      [21, -157, 1200],
      [-25, 40, 1500],
      [15, 70, 2000],
    ],
    relatives: ['megalodon'],
    wiki: { de: 'Tigerhai', en: 'Tiger shark' },
  },
  {
    id: 'groenlandhai',
    sci: 'Somniosus microcephalus',
    name: { de: 'Grönlandhai', en: 'Greenland shark' },
    group: 'shark-ray',
    realm: 'sea',
    status: 'VU',
    population: {
      de: 'unbekannt',
      en: 'unknown',
    },
    trend: 'down',
    length: 5,
    weight: 700,
    teaser: {
      de: 'Das langlebigste Wirbeltier der Welt kann vermutlich über 250 Jahre alt werden.',
      en: 'The longest-lived vertebrate on Earth may live for more than 250 years.',
    },
    facts: {
      de: [
        'Er wächst nur etwa einen Zentimeter pro Jahr und wird erst mit rund 150 Jahren geschlechtsreif.',
        'Er ist einer der langsamsten Fische der Welt – meist unter 3 km/h.',
        'In seinem Magen fand man schon Reste von Eisbären und Rentieren.',
      ],
      en: [
        'It grows only about a centimetre a year and matures at around 150 years old.',
        'It is one of the slowest fish on Earth, usually under 3 km/h.',
        'Remains of polar bears and reindeer have been found in its stomach.',
      ],
    },
    threats: {
      de: [
        'Beifang in Grundschleppnetzen und auf Langleinen in der Arktis.',
        'Weil er sich so langsam vermehrt, erholt sich der Bestand von Verlusten kaum.',
      ],
      en: [
        'Bycatch in bottom trawls and on longlines in the Arctic.',
        'Because it reproduces so slowly, the population barely recovers from losses.',
      ],
    },
    help: {
      de: [
        'Forschende befestigen Sender und messen sein Alter, um Fangregeln zu verbessern.',
        'Beifangverminderung in der arktischen Krabben- und Heilbuttfischerei ist der wichtigste Hebel.',
      ],
      en: [
        'Researchers tag sharks and estimate their ages to improve fishing rules.',
        'Reducing bycatch in Arctic shrimp and halibut fisheries is the most important lever.',
      ],
    },
    home: [70, -52],
    range: [
      [68, -50, 1200],
      [72, -20, 1000],
      [78, 15, 800],
      [55, -45, 1200],
    ],
    relatives: ['megalodon'],
    wiki: { de: 'Grönlandhai', en: 'Greenland shark' },
  },
  {
    id: 'bullenhai',
    sci: 'Carcharhinus leucas',
    name: { de: 'Bullenhai', en: 'Bull shark' },
    group: 'shark-ray',
    realm: 'sea',
    status: 'VU',
    population: {
      de: 'unbekannt; in mehreren Regionen rückläufig',
      en: 'unknown; declining in several regions',
    },
    trend: 'down',
    length: 2.5,
    weight: 130,
    teaser: {
      de: 'Dieser Hai schwimmt Tausende Kilometer flussaufwärts – bis tief in den Amazonas.',
      en: 'This shark swims thousands of kilometres upriver – deep into the Amazon.',
    },
    facts: {
      de: [
        'Er kann im Süß- und im Salzwasser leben, weil seine Nieren den Salzhaushalt anpassen.',
        'Im Mississippi wurde er schon 1.100 Kilometer landeinwärts gefunden.',
      ],
      en: [
        'It can live in both fresh and salt water because its kidneys adjust its salt balance.',
        'It has been found 1,100 kilometres up the Mississippi.',
      ],
    },
    threats: {
      de: [
        'Seine Kinderstuben in Flussmündungen und Mangroven werden verbaut oder verschmutzt.',
        'Fischerei für Flossen, Fleisch und Leberöl.',
      ],
      en: [
        'Its nurseries in estuaries and mangroves are being built over or polluted.',
        'Fishing for fins, meat and liver oil.',
      ],
    },
    help: {
      de: [
        'Der Schutz von Mangroven und Flussmündungen sichert die Aufzuchtgebiete.',
        'In Fidschi (Shark Reef Marine Reserve) sorgt Tauchtourismus seit 2004 für den Schutz der Bullenhaie.',
      ],
      en: [
        'Protecting mangroves and estuaries safeguards nursery areas.',
        'In Fiji’s Shark Reef Marine Reserve, dive tourism has protected bull sharks since 2004.',
      ],
    },
    home: [-18.2, 178],
    range: [
      [27, -88, 1200],
      [-25, 30, 1000],
      [-25, 153, 1000],
      [-3, -55, 1200],
      [-18, 178, 500],
    ],
    relatives: ['megalodon'],
    wiki: { de: 'Bullenhai', en: 'Bull shark' },
  },
  {
    id: 'riffmanta',
    sci: 'Mobula alfredi',
    name: { de: 'Riffmanta', en: 'Reef manta ray' },
    group: 'shark-ray',
    realm: 'sea',
    status: 'VU',
    population: {
      de: 'unbekannt; meist kleine, ortsgebundene Gruppen von wenigen Hundert Tieren',
      en: 'unknown; mostly small, resident groups of a few hundred animals',
    },
    trend: 'down',
    length: 3.5,
    weight: 700,
    teaser: {
      de: 'Die Riffmanta „fliegt“ mit bis zu fünf Meter Spannweite durch tropische Korallenriffe.',
      en: 'The reef manta “flies” through tropical coral reefs on wings spanning up to five metres.',
    },
    facts: {
      de: [
        'Mantas haben im Verhältnis zum Körper eines der größten Gehirne aller Fische.',
        'An „Putzerstationen“ lassen sie sich von kleinen Fischen Parasiten abknabbern.',
        'Jedes Tier hat ein einzigartiges Fleckenmuster auf dem Bauch.',
      ],
      en: [
        'Relative to body size, mantas have one of the largest brains of any fish.',
        'At “cleaning stations”, small fish nibble parasites off them.',
        'Every individual has a unique pattern of spots on its belly.',
      ],
    },
    threats: {
      de: [
        'Ihre Kiemenreusen werden für angebliche Heilmittel gehandelt.',
        'Beifang in Netzen und Verletzungen durch Bootsschrauben.',
        'Weibchen bekommen nur alle zwei bis fünf Jahre ein einziges Junges.',
      ],
      en: [
        'Their gill plates are traded for supposed remedies.',
        'Bycatch in nets and propeller injuries.',
        'Females give birth to just one pup every two to five years.',
      ],
    },
    help: {
      de: [
        'Indonesien schützt Mantas seit 2014 im ganzen Land; Manta-Tauchtourismus ist dort mehr wert als Fischerei.',
        'Beim Schnorcheln Abstand halten und Mantas nicht berühren.',
      ],
      en: [
        'Indonesia has protected mantas nationwide since 2014, and manta dive tourism is worth more than fishing.',
        'When snorkelling, keep your distance and never touch mantas.',
      ],
    },
    home: [-8.8, 115.5],
    range: [
      [-8, 120, 1200],
      [4, 73, 500],
      [-24, 35.5, 400],
      [-24, 152, 600],
      [20, 39, 600],
      [19.5, -156, 200],
    ],
    wiki: { de: 'Riffmanta', en: 'Reef manta ray' },
  },
  {
    id: 'riesenmanta',
    sci: 'Mobula birostris',
    name: { de: 'Riesenmanta', en: 'Giant oceanic manta ray' },
    group: 'shark-ray',
    realm: 'sea',
    status: 'EN',
    population: {
      de: 'unbekannt; in vielen Fanggebieten um über 70 % zurückgegangen',
      en: 'unknown; declined by more than 70% in many fishing areas',
    },
    trend: 'down',
    length: 4.5,
    weight: 2000,
    teaser: {
      de: 'Der größte Rochen der Welt hat eine Spannweite von bis zu sieben Metern.',
      en: 'The world’s largest ray has a wingspan of up to seven metres.',
    },
    facts: {
      de: [
        'Riesenmantas tauchen über 1.000 Meter tief und wandern weite Strecken über offene Ozeane.',
        'Sie bestehen den „Spiegeltest“ teilweise – ein mögliches Zeichen für Selbstwahrnehmung.',
      ],
      en: [
        'Giant mantas dive deeper than 1,000 metres and travel long distances across open oceans.',
        'They appear to partly pass the “mirror test” – a possible sign of self-awareness.',
      ],
    },
    threats: {
      de: [
        'Gezielter Fang für den Handel mit Kiemenreusen.',
        'Beifang in Ringwaden und Treibnetzen der Thunfischfischerei.',
      ],
      en: [
        'Targeted fishing for the gill-plate trade.',
        'Bycatch in tuna purse seines and drift nets.',
      ],
    },
    help: {
      de: [
        'Seit 2013 regelt CITES den internationalen Handel mit Mantas.',
        'Ecuador und Peru haben den Fang verboten; vor Isla de la Plata liegt eine der größten bekannten Gruppen.',
      ],
      en: [
        'Since 2013, CITES has regulated the international manta trade.',
        'Ecuador and Peru have banned catching them; one of the largest known groups lives off Isla de la Plata.',
      ],
    },
    home: [-1.3, -81.1],
    range: [
      [-2, -82, 800],
      [19, -112, 700],
      [27, -80, 800],
      [-10, 120, 1500],
      [-24, 35, 800],
    ],
    wiki: { de: 'Riesenmanta', en: 'Giant oceanic manta ray' },
  },
  {
    id: 'grosser-saegefisch',
    sci: 'Pristis pristis',
    name: { de: 'Großer Sägefisch (Gewöhnlicher Sägefisch)', en: 'Largetooth sawfish' },
    group: 'shark-ray',
    realm: 'sea',
    status: 'CR',
    population: {
      de: 'unbekannt; aus über der Hälfte seines früheren Verbreitungsgebiets verschwunden',
      en: 'unknown; vanished from more than half of its former range',
    },
    trend: 'down',
    length: 6,
    weight: 500,
    teaser: {
      de: 'Ein Rochen mit einer zahnbesetzten „Säge“, der aus Flussmündungen weit in Flüsse hinaufschwimmt.',
      en: 'A ray with a toothed “saw” that swims from estuaries far up into rivers.',
    },
    facts: {
      de: [
        'Mit der Säge spürt er Beute im Schlamm auf und betäubt Fische mit schnellen Seitenhieben.',
        'Jungtiere wachsen oft jahrelang in Flüssen auf, bevor sie ins Meer ziehen.',
      ],
      en: [
        'It uses its saw to detect prey in mud and stuns fish with quick side swipes.',
        'Young sawfish often spend years in rivers before moving out to sea.',
      ],
    },
    threats: {
      de: [
        'Die Säge verfängt sich leicht in jedem Netz.',
        'Sägen werden als Souvenirs und Trophäen gehandelt, Flossen für den Flossenhandel.',
        'Staudämme und zerstörte Mangroven nehmen ihm die Kinderstuben.',
      ],
      en: [
        'Its saw gets tangled in any kind of net.',
        'Saws are sold as souvenirs and trophies, and fins for the fin trade.',
        'Dams and lost mangroves destroy its nurseries.',
      ],
    },
    help: {
      de: [
        'Seit 2007 ist der internationale Handel mit Sägefischen durch CITES verboten.',
        'In Nordaustralien, einem der letzten Rückzugsgebiete, ist er geschützt und wird mit Sendern erforscht.',
        'Niemals Sägefisch-Sägen als Andenken kaufen.',
      ],
      en: [
        'International trade in sawfish has been banned under CITES since 2007.',
        'In northern Australia, one of its last strongholds, it is protected and tracked with transmitters.',
        'Never buy sawfish saws as souvenirs.',
      ],
    },
    home: [-14.5, 135.5],
    range: [
      [-15, 135, 1200],
      [5, -55, 1000],
      [10, -15, 800],
      [10, -84, 500],
    ],
    wiki: { de: 'Gewöhnlicher Sägefisch', en: 'Largetooth sawfish' },
  },
  {
    id: 'engelhai',
    sci: 'Squatina squatina',
    name: { de: 'Gewöhnlicher Engelhai (Meerengel)', en: 'Angelshark' },
    group: 'shark-ray',
    realm: 'sea',
    status: 'CR',
    population: {
      de: 'unbekannt; aus Nordsee und weiten Teilen des Mittelmeers fast verschwunden – Hochburg sind heute die Kanarischen Inseln',
      en: 'unknown; almost gone from the North Sea and much of the Mediterranean – the Canary Islands are now its stronghold',
    },
    trend: 'down',
    length: 1.6,
    weight: 70,
    teaser: {
      de: 'Ein flacher Hai, der wie ein Rochen aussieht und im Sand auf Beute lauert.',
      en: 'A flat shark that looks like a ray and lies in ambush in the sand.',
    },
    facts: {
      de: [
        'Er gräbt sich im Sand ein und schnappt blitzschnell zu, wenn ein Fisch vorbeischwimmt.',
        'Früher war er in Nordsee und Mittelmeer so häufig, dass er „Mönchsfisch“ hieß und auf Märkten verkauft wurde.',
      ],
      en: [
        'It buries itself in sand and strikes in a flash when a fish swims past.',
        'It was once so common in the North Sea and Mediterranean that it was sold at fish markets as “monkfish”.',
      ],
    },
    threats: {
      de: [
        'Beifang in Grundschleppnetzen und Stellnetzen am Meeresboden.',
        'Küstenbebauung und Tourismus stören seine flachen Sandflächen.',
      ],
      en: [
        'Bycatch in bottom trawls and gillnets.',
        'Coastal development and tourism disturb its shallow sandy habitats.',
      ],
    },
    help: {
      de: [
        'Auf den Kanaren ist er seit 2019 streng geschützt; Taucher melden Sichtungen an Forschungsprojekte.',
        'Im Vereinigten Königreich und der EU ist das Anlanden verboten.',
      ],
      en: [
        'In the Canary Islands it has been strictly protected since 2019, and divers report sightings to research projects.',
        'Landing it is banned in the UK and the EU.',
      ],
    },
    home: [28.1, -15.4],
    range: [
      [28.3, -15.5, 400],
      [38, 15, 1200],
      [52, -4, 500],
    ],
    relatives: ['megalodon'],
    wiki: { de: 'Meerengel', en: 'Angelshark' },
  },
  {
    id: 'bogenstirn-geigenrochen',
    sci: 'Rhina ancylostomus',
    name: { de: 'Bogenstirn-Geigenrochen (Rundkopf-Geigenrochen)', en: 'Bowmouth guitarfish' },
    group: 'shark-ray',
    realm: 'sea',
    status: 'CR',
    population: {
      de: 'unbekannt; in vielen Gebieten um über 80 % zurückgegangen',
      en: 'unknown; declined by more than 80% in many areas',
    },
    trend: 'down',
    length: 2.5,
    weight: 130,
    teaser: {
      de: 'Halb Hai, halb Rochen: ein Tier mit breitem Kopf, Dornenkämmen und kräftigem Haischwanz.',
      en: 'Half shark, half ray: an animal with a broad head, thorny ridges and a powerful shark-like tail.',
    },
    facts: {
      de: [
        'Dornige Kämme auf Kopf und Rücken schützen ihn vermutlich vor Angreifern.',
        'Mit seinen gewellten Kiefern zerknackt er Krebse und Muscheln.',
      ],
      en: [
        'Thorny ridges on its head and back probably protect it from predators.',
        'It crushes crabs and shellfish with its wavy jaws.',
      ],
    },
    threats: {
      de: [
        'Seine großen Flossen gehören zu den wertvollsten im Flossenhandel.',
        'Intensive Küstenfischerei mit Schleppnetzen und Stellnetzen in Südostasien.',
      ],
      en: [
        'Its large fins are among the most valuable in the fin trade.',
        'Intensive coastal trawl and gillnet fishing in Southeast Asia.',
      ],
    },
    help: {
      de: [
        'Seit 2019 regelt CITES den internationalen Handel mit Geigenrochen.',
        'Haie und Rochen aus Aquarienhaltung sollten nur aus Nachzucht stammen; einige Zoos züchten die Art erfolgreich.',
      ],
      en: [
        'Since 2019, CITES has regulated the international trade in guitarfish.',
        'Aquarium sharks and rays should only come from captive breeding; some zoos breed this species successfully.',
      ],
    },
    home: [-5, 115],
    range: [
      [0, 110, 1800],
      [-15, 135, 1200],
      [15, 70, 1500],
      [-10, 45, 1200],
    ],
    wiki: { de: 'Rundkopf-Geigenrochen', en: 'Rhina ancylostomus' },
  },
  {
    id: 'glattrochen',
    sci: 'Dipturus batis',
    name: { de: 'Gemeiner Glattrochen (Blauer Glattrochen)', en: 'Common skate (blue skate)' },
    group: 'shark-ray',
    realm: 'sea',
    status: 'CR',
    population: {
      de: 'unbekannt; aus großen Teilen der Nordsee verschwunden, Restbestände vor allem vor Schottland und in der Keltischen See',
      en: 'unknown; vanished from much of the North Sea, with remnants mainly off Scotland and in the Celtic Sea',
    },
    trend: 'unknown',
    length: 2,
    weight: 90,
    teaser: {
      de: 'Einst der häufigste große Rochen Nordeuropas – heute vom Aussterben bedroht.',
      en: 'Once the most common large skate in northern Europe – now critically endangered.',
    },
    facts: {
      de: [
        'Mit bis zu 2,5 Metern Länge ist er einer der größten Rochen Europas.',
        'Forschende stellten fest, dass „der“ Glattrochen eigentlich zwei Arten umfasst – den Blauen und den Flaschen-Glattrochen.',
        'Er legt große Eikapseln, sogenannte „Nixentäschchen“, die man manchmal am Strand findet.',
      ],
      en: [
        'At up to 2.5 metres long, it is one of Europe’s largest skates.',
        'Scientists found that the “common skate” is really two species – the blue skate and the flapper skate.',
        'It lays large egg cases, known as “mermaid’s purses”, that sometimes wash up on beaches.',
      ],
    },
    threats: {
      de: [
        'Grundschleppnetze fangen ihn als Beifang – schon junge Tiere sind groß genug, um hängen zu bleiben.',
        'Er wird erst mit über zehn Jahren geschlechtsreif und erholt sich deshalb kaum.',
      ],
      en: [
        'Bottom trawls catch it as bycatch – even young skates are big enough to get caught.',
        'It takes over ten years to mature, so it recovers very slowly.',
      ],
    },
    help: {
      de: [
        'In EU- und britischen Gewässern ist das Anlanden seit 2009 verboten.',
        'Das Schutzgebiet Loch Sunart to the Sound of Jura (Schottland, 2014) schützt eine wichtige Restpopulation.',
        'Gefundene Eikapseln kann man an Bürgerforschungsprojekte melden.',
      ],
      en: [
        'Landing it has been banned in EU and UK waters since 2009.',
        'The Loch Sunart to the Sound of Jura reserve (Scotland, 2014) protects an important remaining population.',
        'You can report egg cases you find on the beach to citizen-science projects.',
      ],
    },
    home: [56.3, -5.7],
    range: [
      [57, -6, 400],
      [50, -8, 500],
      [60, -2, 500],
    ],
    wiki: { de: 'Glattrochen', en: 'Blue skate' },
  },
];
