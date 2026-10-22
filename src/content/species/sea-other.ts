import type { Species } from './types';

export const SEA_OTHER: Species[] = [
  // ───────────── Meeresschildkröten ─────────────
  {
    id: 'lederschildkroete',
    sci: 'Dermochelys coriacea',
    name: { de: 'Lederschildkröte', en: 'Leatherback sea turtle' },
    group: 'sea-other',
    realm: 'sea',
    status: 'VU',
    population: {
      de: 'geschätzt 20.000–30.000 nistende Weibchen weltweit; im Pazifik stark eingebrochen',
      en: 'an estimated 20,000–30,000 nesting females worldwide; Pacific populations have crashed',
    },
    trend: 'down',
    length: 1.8,
    weight: 500,
    teaser: {
      de: 'Die größte Schildkröte der Welt trägt statt eines harten Panzers eine ledrige Haut über ihrem Rücken.',
      en: 'The world’s largest turtle wears a leathery skin instead of a hard shell.',
    },
    facts: {
      de: [
        'Sie taucht über 1.000 m tief und wandert jedes Jahr Tausende Kilometer zwischen Nistständen und Quallengründen.',
        'Ihre Hauptnahrung sind Quallen – stachelige Hornzapfen im Schlund verhindern, dass die glitschige Beute wieder herausrutscht.',
        'Dank Körpergröße und Fettschicht hält sie ihre Körpertemperatur über der des Wassers und jagt sogar vor Kanada und Norwegen.',
      ],
      en: [
        'It dives deeper than 1,000 m and migrates thousands of kilometres every year between nesting beaches and jellyfish grounds.',
        'It feeds mainly on jellyfish – backward-pointing spines in its throat stop the slippery prey from escaping.',
        'Its size and fat layer keep its body warmer than the water, so it hunts as far north as Canada and Norway.',
      ],
    },
    threats: {
      de: [
        'Sie verfängt sich als Beifang in Langleinen und Stellnetzen.',
        'Plastiktüten im Meer werden mit Quallen verwechselt und verschluckt.',
        'Eier werden an vielen Stränden gesammelt, Niststrände verbaut.',
        'Steigende Sandtemperaturen lassen fast nur noch Weibchen schlüpfen.',
      ],
      en: [
        'It gets caught as bycatch on longlines and in gillnets.',
        'Plastic bags in the sea are mistaken for jellyfish and swallowed.',
        'Eggs are collected on many beaches and nesting sites are built over.',
        'Warmer sand means that almost only females hatch.',
      ],
    },
    help: {
      de: [
        'Geschützte Niststrände, etwa in Französisch-Guayana, Costa Rica und Gabun, mit nächtlichen Strandpatrouillen.',
        'Rundhaken und Fanggebiets-Sperren verringern den Beifang in der Langleinenfischerei.',
        'Jede/r kann helfen: Einwegplastik meiden und Luftballons nie steigen lassen.',
      ],
      en: [
        'Protected nesting beaches, e.g. in French Guiana, Costa Rica and Gabon, guarded by night patrols.',
        'Circle hooks and closed fishing areas reduce bycatch in longline fisheries.',
        'Anyone can help: avoid single-use plastic and never release balloons.',
      ],
    },
    home: [5.7, -53.9],
    range: [
      [40, -40, 2500],
      [5, -20, 2500],
      [10, -100, 2500],
      [-10, 160, 2500],
      [-30, 50, 2000],
    ],
    relatives: ['archelon'],
    wiki: { de: 'Lederschildkröte', en: 'Leatherback sea turtle' },
  },
  {
    id: 'echte-karettschildkroete',
    sci: 'Eretmochelys imbricata',
    name: { de: 'Echte Karettschildkröte', en: 'Hawksbill sea turtle' },
    group: 'sea-other',
    realm: 'sea',
    status: 'CR',
    population: {
      de: 'rund 20.000–23.000 nistende Weibchen weltweit',
      en: 'about 20,000–23,000 nesting females worldwide',
    },
    trend: 'down',
    length: 0.9,
    weight: 60,
    teaser: {
      de: 'Mit ihrem spitzen, vogelartigen Schnabel pickt diese Schildkröte Schwämme aus den Spalten von Korallenriffen.',
      en: 'With its pointed, bird-like beak, this turtle picks sponges out of the cracks in coral reefs.',
    },
    facts: {
      de: [
        'Sie frisst vor allem Schwämme, die für die meisten anderen Tiere giftig oder voller Glasnadeln sind.',
        'Indem sie Schwämme kurz hält, schafft sie Platz für Korallen – sie ist eine Riff-Gärtnerin.',
        'Ihr schön gemusterter Panzer war jahrhundertelang als „Schildpatt“ begehrt.',
      ],
      en: [
        'It mainly eats sponges that are toxic or full of glassy spicules for most other animals.',
        'By keeping sponges in check it makes room for corals – it is a reef gardener.',
        'For centuries its beautifully patterned shell was prized as “tortoiseshell”.',
      ],
    },
    threats: {
      de: [
        'Wilderei für Schildpatt-Schmuck und -Souvenirs, trotz weltweitem Handelsverbot.',
        'Absterbende Korallenriffe nehmen ihr Nahrung und Unterschlupf.',
        'Eiersammeln und Bebauung von Niststränden.',
      ],
      en: [
        'Poaching for tortoiseshell jewellery and souvenirs, despite a global trade ban.',
        'Dying coral reefs rob it of food and shelter.',
        'Egg collecting and development of nesting beaches.',
      ],
    },
    help: {
      de: [
        'Seit 1977 verbietet das Washingtoner Artenschutzabkommen (CITES) den internationalen Handel mit Schildpatt.',
        'Strandschutzprojekte, z. B. auf den Seychellen, haben die Nistzahlen dort deutlich steigen lassen.',
        'Im Urlaub nie Souvenirs aus Schildpatt kaufen – auch keine Kämme, Brillen oder Armreifen.',
      ],
      en: [
        'Since 1977 the CITES convention has banned international trade in tortoiseshell.',
        'Beach protection, for example in the Seychelles, has clearly increased nesting numbers there.',
        'On holiday, never buy tortoiseshell souvenirs – no combs, glasses frames or bracelets.',
      ],
    },
    home: [-4.6, 55.5],
    range: [
      [15, -75, 2000],
      [-5, 115, 2500],
      [-15, 150, 2000],
      [0, 60, 2500],
    ],
    relatives: ['archelon'],
    wiki: { de: 'Echte Karettschildkröte', en: 'Hawksbill sea turtle' },
  },
  {
    id: 'gruene-meeresschildkroete',
    sci: 'Chelonia mydas',
    name: { de: 'Grüne Meeresschildkröte (Suppenschildkröte)', en: 'Green sea turtle' },
    group: 'sea-other',
    realm: 'sea',
    status: 'LC',
    population: {
      de: 'Hunderttausende Tiere; die Nistzahlen steigen in vielen Regionen wieder',
      en: 'hundreds of thousands of animals; nesting numbers are rising again in many regions',
    },
    trend: 'up',
    length: 1.1,
    weight: 160,
    teaser: {
      de: 'Eine echte Erfolgsgeschichte: Dank jahrzehntelangem Schutz gilt die Suppenschildkröte seit 2025 nicht mehr als gefährdet.',
      en: 'A genuine success story: thanks to decades of protection, the green turtle has no longer been listed as threatened since 2025.',
    },
    facts: {
      de: [
        'Als einzige Meeresschildkröte ernähren sich die Erwachsenen fast nur von Seegras und Algen – davon ist ihr Fett grünlich gefärbt.',
        'Weibchen kehren zum Eierlegen an den Strand zurück, an dem sie selbst geschlüpft sind, oft nach über 25 Jahren.',
        'Durch ihr „Rasenmähen“ halten sie Seegraswiesen gesund.',
      ],
      en: [
        'It is the only sea turtle whose adults eat almost nothing but seagrass and algae – which tints their fat green.',
        'Females return to lay eggs on the very beach where they hatched, often after more than 25 years.',
        'By “mowing” seagrass meadows they keep them healthy.',
      ],
    },
    threats: {
      de: [
        'In einigen Regionen werden Tiere und Eier noch immer gegessen.',
        'Beifang in Netzen und Verletzungen durch Bootsschrauben.',
        'Steigender Meeresspiegel und Hitze bedrohen Niststrände und Geschlechterverhältnis.',
      ],
      en: [
        'In some regions the turtles and their eggs are still eaten.',
        'Bycatch in nets and injuries from boat propellers.',
        'Rising seas and heat threaten nesting beaches and the sex ratio of hatchlings.',
      ],
    },
    help: {
      de: [
        'Strandschutz auf Ascension, in Florida und Hawaii ließ die Nistzahlen seit den 1970er-Jahren stark ansteigen.',
        'Schildkröten-Ausschlussgitter (TEDs) in Garnelennetzen retten jedes Jahr Tausende Tiere.',
        'Abstand halten beim Schnorcheln und nachts keine Taschenlampen an Niststränden benutzen.',
      ],
      en: [
        'Beach protection on Ascension Island, in Florida and Hawaii has sharply increased nesting since the 1970s.',
        'Turtle excluder devices (TEDs) in shrimp nets save thousands of turtles every year.',
        'Keep your distance when snorkelling and avoid torches on nesting beaches at night.',
      ],
    },
    home: [-7.9, -14.4],
    range: [
      [20, -70, 2500],
      [-15, 150, 2500],
      [0, 60, 3000],
      [20, -160, 2000],
    ],
    relatives: ['archelon'],
    wiki: { de: 'Grüne Meeresschildkröte', en: 'Green sea turtle' },
  },
  {
    id: 'unechte-karettschildkroete',
    sci: 'Caretta caretta',
    name: { de: 'Unechte Karettschildkröte', en: 'Loggerhead sea turtle' },
    group: 'sea-other',
    realm: 'sea',
    status: 'VU',
    population: {
      de: 'geschätzt 40.000–70.000 nistende Weibchen weltweit',
      en: 'an estimated 40,000–70,000 nesting females worldwide',
    },
    trend: 'down',
    length: 0.9,
    weight: 135,
    teaser: {
      de: 'Die dickköpfige Schildkröte knackt mit ihren kräftigen Kiefern Muscheln und Krebse – und nistet sogar an Mittelmeerstränden.',
      en: 'This big-headed turtle cracks clams and crabs with its powerful jaws – and even nests on Mediterranean beaches.',
    },
    facts: {
      de: [
        'Jungtiere aus Japan durchqueren den gesamten Pazifik bis Mexiko und kehren Jahre später zurück.',
        'Sie orientieren sich am Erdmagnetfeld wie mit einem eingebauten Kompass.',
        'Sie ist die häufigste Meeresschildkröte in Griechenland, der Türkei und Zypern.',
      ],
      en: [
        'Young turtles from Japan cross the entire Pacific to Mexico and return years later.',
        'They navigate using Earth’s magnetic field like a built-in compass.',
        'It is the most common sea turtle in Greece, Turkey and Cyprus.',
      ],
    },
    threats: {
      de: [
        'Beifang in Schleppnetzen und an Langleinen.',
        'Hotels, Liegestühle und Licht an Urlaubsstränden stören die Eiablage und verwirren Schlüpflinge.',
        'Verschlucken von Plastik und Fischereigeräten.',
      ],
      en: [
        'Bycatch in trawls and on longlines.',
        'Hotels, sun loungers and lights on holiday beaches disturb nesting and confuse hatchlings.',
        'Swallowed plastic and fishing gear.',
      ],
    },
    help: {
      de: [
        'Auf Zakynthos (Griechenland) ist seit 1999 ein Meeresnationalpark für die Niststrände eingerichtet.',
        'Abgedunkelte Strandbeleuchtung in Florida hilft den Schlüpflingen, das Meer zu finden.',
        'Am Urlaubsstrand Nestmarkierungen respektieren, nachts den Strand meiden und Löcher zuschütten.',
      ],
      en: [
        'Since 1999 a national marine park has protected the nesting beaches of Zakynthos, Greece.',
        'Dimmed beach lighting in Florida helps hatchlings find the sea.',
        'On holiday, respect nest markers, stay off the beach at night and fill in holes you dig.',
      ],
    },
    home: [37.7, 20.9],
    range: [
      [30, -60, 2500],
      [35, 18, 1500],
      [25, -140, 3000],
      [-25, 40, 2000],
      [-25, 155, 2000],
    ],
    relatives: ['archelon'],
    wiki: { de: 'Unechte Karettschildkröte', en: 'Loggerhead sea turtle' },
  },
  {
    id: 'atlantik-bastardschildkroete',
    sci: 'Lepidochelys kempii',
    name: { de: 'Atlantik-Bastardschildkröte (Kemps Bastardschildkröte)', en: 'Kemp’s ridley sea turtle' },
    group: 'sea-other',
    realm: 'sea',
    status: 'CR',
    population: {
      de: 'rund 5.000–9.000 nistende Weibchen, fast alle an einem Strandabschnitt in Mexiko',
      en: 'about 5,000–9,000 nesting females, nearly all on one stretch of coast in Mexico',
    },
    trend: 'unknown',
    length: 0.65,
    weight: 40,
    teaser: {
      de: 'Die kleinste und seltenste Meeresschildkröte kommt zum Eierlegen am helllichten Tag – in großen Gruppen.',
      en: 'The smallest and rarest sea turtle comes ashore to nest in broad daylight – in large groups.',
    },
    facts: {
      de: [
        'Bei der „Arribada“ (span. Ankunft) kommen Hunderte Weibchen gleichzeitig an den Strand von Rancho Nuevo.',
        'Ein Film von 1947 zeigte rund 40.000 nistende Weibchen an einem Tag – 1985 waren es nur noch rund 700 im ganzen Jahr.',
      ],
      en: [
        'During an “arribada” (Spanish for arrival) hundreds of females come ashore together at Rancho Nuevo.',
        'A film from 1947 showed some 40,000 females nesting in a single day – by 1985 only about 700 nested all year.',
      ],
    },
    threats: {
      de: [
        'Beifang in der Garnelenfischerei im Golf von Mexiko.',
        'Ölkatastrophen wie die „Deepwater Horizon“ 2010.',
        'Kälteschocks: Bei plötzlichem Frost treiben Jungtiere erstarrt an die Küste.',
      ],
      en: [
        'Bycatch in Gulf of Mexico shrimp fisheries.',
        'Oil disasters such as Deepwater Horizon in 2010.',
        'Cold stunning: sudden cold snaps leave young turtles floating helplessly ashore.',
      ],
    },
    help: {
      de: [
        'Seit 1978 schützen Mexiko und die USA gemeinsam die Nester; Eier werden bewacht oder in geschützte Brutstätten gebracht.',
        'Pflicht zu Schildkröten-Ausschlussgittern (TEDs) in Garnelennetzen in den USA und Mexiko.',
        'Freiwillige retten bei Kälteeinbrüchen jedes Jahr Hunderte unterkühlte Jungtiere.',
      ],
      en: [
        'Since 1978 Mexico and the USA have protected the nests together, guarding eggs or moving them to safe hatcheries.',
        'Turtle excluder devices (TEDs) are mandatory in shrimp nets in the USA and Mexico.',
        'Volunteers rescue hundreds of cold-stunned young turtles every winter.',
      ],
    },
    home: [23.2, -97.6],
    range: [
      [25, -90, 900],
      [35, -73, 1000],
    ],
    relatives: ['archelon'],
    wiki: { de: 'Atlantik-Bastardschildkröte', en: 'Kemp\'s ridley sea turtle' },
  },
  {
    id: 'oliv-bastardschildkroete',
    sci: 'Lepidochelys olivacea',
    name: { de: 'Oliv-Bastardschildkröte', en: 'Olive ridley sea turtle' },
    group: 'sea-other',
    realm: 'sea',
    status: 'VU',
    population: {
      de: 'häufigste Meeresschildkröte, rund 800.000 nistende Weibchen pro Jahr',
      en: 'the most abundant sea turtle, about 800,000 nesting females a year',
    },
    trend: 'down',
    length: 0.7,
    weight: 40,
    teaser: {
      de: 'Bei ihren Massen-Eiablagen kommen manchmal Hunderttausende Weibchen in wenigen Nächten an denselben Strand.',
      en: 'In mass nestings, sometimes hundreds of thousands of females arrive on the same beach within a few nights.',
    },
    facts: {
      de: [
        'Die größten „Arribadas“ finden in Odisha (Indien), Costa Rica und Mexiko statt.',
        'Trotz ihrer großen Zahl sind viele einzelne Nistkolonien stark geschrumpft oder ganz verschwunden.',
      ],
      en: [
        'The largest arribadas take place in Odisha (India), Costa Rica and Mexico.',
        'Despite their large numbers, many individual nesting colonies have shrunk sharply or vanished.',
      ],
    },
    threats: {
      de: [
        'Beifang in Garnelen-Schleppnetzen, besonders vor Indien.',
        'Herrenlose „Geisternetze“ treiben im Meer und fangen weiter.',
        'Sammeln der Eier und Bebauung der Küsten.',
      ],
      en: [
        'Bycatch in shrimp trawls, especially off India.',
        'Abandoned “ghost nets” drift through the sea and keep catching.',
        'Egg collecting and coastal development.',
      ],
    },
    help: {
      de: [
        'In Ostional (Costa Rica) dürfen Anwohner nur die ersten, ohnehin zerstörten Eier sammeln – und schützen dafür den Strand.',
        'Indien sperrt während der Nistzeit Küstengewässer vor Odisha für die Fischerei.',
        'Projekte bergen Geisternetze und recyceln sie.',
      ],
      en: [
        'At Ostional (Costa Rica) locals may only harvest the first eggs, which would be destroyed anyway – and in return guard the beach.',
        'India closes coastal waters off Odisha to fishing during the nesting season.',
        'Projects recover ghost nets and recycle them.',
      ],
    },
    home: [19.7, 85.4],
    range: [
      [12, -95, 2500],
      [15, 85, 2000],
      [0, -10, 2000],
      [-10, 120, 2500],
    ],
    relatives: ['archelon'],
    wiki: { de: 'Oliv-Bastardschildkröte', en: 'Olive ridley sea turtle' },
  },

  // ───────────── Fische ─────────────
  {
    id: 'roter-thun',
    sci: 'Thunnus thynnus',
    name: { de: 'Roter Thun (Atlantischer Blauflossen-Thunfisch)', en: 'Atlantic bluefin tuna' },
    group: 'sea-other',
    realm: 'sea',
    status: 'LC',
    population: {
      de: 'genaue Zahl unbekannt; nach strengen Fangquoten seit 2007 deutlich erholt',
      en: 'exact numbers unknown; clearly recovered since strict catch quotas from 2007',
    },
    trend: 'up',
    length: 2.5,
    weight: 250,
    teaser: {
      de: 'Ein warmblütiger Hochgeschwindigkeits-Jäger, der den Atlantik in wenigen Wochen durchquert – und ein Beispiel dafür, dass Fischereiregeln wirken.',
      en: 'A warm-blooded speed hunter that crosses the Atlantic in a few weeks – and proof that fishing rules can work.',
    },
    facts: {
      de: [
        'Er kann seine Muskeln deutlich wärmer halten als das umgebende Wasser und erreicht Spitzengeschwindigkeiten von über 60 km/h.',
        'Einzelne Tiere werden über 3 m lang und 600 kg schwer.',
        'Er laicht vor allem im Mittelmeer und im Golf von Mexiko.',
      ],
      en: [
        'It keeps its muscles much warmer than the surrounding water and reaches top speeds of over 60 km/h.',
        'Individual fish grow over 3 m long and weigh 600 kg.',
        'It spawns mainly in the Mediterranean and the Gulf of Mexico.',
      ],
    },
    threats: {
      de: [
        'Die enorme Nachfrage nach Sushi und Sashimi macht jeden Fisch sehr wertvoll.',
        'Illegale und nicht gemeldete Fänge.',
        'Die westatlantische Teilpopulation ist noch immer klein.',
      ],
      en: [
        'Huge demand for sushi and sashimi makes every fish extremely valuable.',
        'Illegal and unreported catches.',
        'The western Atlantic stock is still small.',
      ],
    },
    help: {
      de: [
        'Ein Wiederaufbauplan der Thunfisch-Kommission ICCAT ab 2007 mit strengen Quoten führte zur Erholung – 2021 wurde der Rote Thun von „stark gefährdet“ herabgestuft.',
        'Beim Einkauf auf Thunfisch aus nachhaltig bewirtschafteten Beständen (z. B. MSC-Siegel) achten.',
      ],
      en: [
        'A recovery plan by the tuna commission ICCAT from 2007 with strict quotas led to a rebound – in 2021 the species was downgraded from Endangered.',
        'When shopping, choose tuna from sustainably managed stocks (e.g. MSC label).',
      ],
    },
    home: [38, 5],
    range: [
      [40, -50, 2500],
      [38, 10, 1500],
      [60, 0, 1000],
      [25, -90, 800],
    ],
    wiki: { de: 'Roter Thun', en: 'Atlantic bluefin tuna' },
  },
  {
    id: 'kabeljau',
    sci: 'Gadus morhua',
    name: { de: 'Kabeljau (Dorsch)', en: 'Atlantic cod' },
    group: 'sea-other',
    realm: 'sea',
    status: 'VU',
    population: {
      de: 'noch viele Millionen Tiere, doch mehrere Bestände sind zusammengebrochen (Einstufung von 1996)',
      en: 'still many millions, but several stocks have collapsed (assessment from 1996)',
    },
    trend: 'unknown',
    length: 1,
    weight: 10,
    teaser: {
      de: 'Der Fisch, der Europa ernährte – und dessen Zusammenbruch vor Neufundland zeigte, wie schnell Überfischung zuschlagen kann.',
      en: 'The fish that fed Europe – and whose collapse off Newfoundland showed how quickly overfishing can strike.',
    },
    facts: {
      de: [
        'Ein großes Weibchen kann in einer Saison mehrere Millionen Eier ablegen.',
        'Kabeljau kann über 1,5 m lang und mehr als 20 Jahre alt werden.',
        'Getrocknet als Stockfisch war er schon für die Wikinger haltbarer Reiseproviant.',
      ],
      en: [
        'A large female can release several million eggs in one season.',
        'Cod can grow over 1.5 m long and live for more than 20 years.',
        'Dried as stockfish, it was long-lasting travel food even for the Vikings.',
      ],
    },
    threats: {
      de: [
        'Überfischung: 1992 brach der Bestand vor Neufundland ein und erholt sich bis heute kaum.',
        'Die Erwärmung von Nord- und Ostsee verdrängt ihn nach Norden.',
        'Sauerstoffarme „Todeszonen“ in der Ostsee stören die Fortpflanzung.',
      ],
      en: [
        'Overfishing: the Newfoundland stock collapsed in 1992 and has barely recovered.',
        'Warming of the North Sea and Baltic is pushing it northwards.',
        'Oxygen-poor “dead zones” in the Baltic disrupt reproduction.',
      ],
    },
    help: {
      de: [
        'Der Bestand in der Barentssee (Norwegen/Russland) ist dank strenger Quoten heute der größte der Welt.',
        'Seit 2019 ist die gezielte Fischerei auf den östlichen Ostseedorsch verboten.',
        'Fisch mit MSC-Siegel kaufen und Kabeljau aus kritischen Beständen meiden.',
      ],
      en: [
        'Thanks to strict quotas, the Barents Sea stock (Norway/Russia) is now the largest in the world.',
        'Targeted fishing for eastern Baltic cod has been banned since 2019.',
        'Buy MSC-labelled fish and avoid cod from depleted stocks.',
      ],
    },
    home: [70, 20],
    range: [
      [62, -50, 1500],
      [62, 5, 1500],
      [72, 30, 900],
    ],
    wiki: { de: 'Atlantischer Kabeljau', en: 'Atlantic cod' },
  },
  {
    id: 'europaeischer-aal',
    sci: 'Anguilla anguilla',
    name: { de: 'Europäischer Aal', en: 'European eel' },
    group: 'sea-other',
    realm: 'sea',
    status: 'CR',
    population: {
      de: 'unbekannt; seit 1980 kommen nur noch wenige Prozent der früheren Glasaale an Europas Küsten an',
      en: 'unknown; since 1980 only a few percent of former glass-eel numbers reach Europe’s coasts',
    },
    trend: 'down',
    length: 0.8,
    weight: 1.5,
    teaser: {
      de: 'Ein Wanderer zwischen den Welten: Er wächst in Europas Flüssen auf und schwimmt zum Laichen 5.000 km weit bis in die Sargassosee.',
      en: 'A traveller between worlds: it grows up in Europe’s rivers and swims 5,000 km to the Sargasso Sea to spawn.',
    },
    facts: {
      de: [
        'Niemand hat je laichende Aale in freier Natur beobachtet – ihr Liebesleben ist bis heute ein Rätsel.',
        'Die durchsichtigen Larven treiben rund ein bis drei Jahre mit dem Golfstrom nach Europa.',
        'Aale können kurze Strecken über feuchtes Gras kriechen.',
      ],
      en: [
        'Nobody has ever seen eels spawning in the wild – their love life is still a mystery.',
        'The transparent larvae drift with the Gulf Stream to Europe for one to three years.',
        'Eels can wriggle short distances across wet grass.',
      ],
    },
    threats: {
      de: [
        'Wasserkraftturbinen und Wehre zerstückeln die Wanderwege und töten abwandernde Aale.',
        'Illegaler Schmuggel von Glasaalen nach Asien – eines der größten Artenschutz-Verbrechen Europas.',
        'Ein eingeschleppter Parasit schädigt die Schwimmblase.',
        'Verschmutzung und Veränderungen der Meeresströmungen.',
      ],
      en: [
        'Hydropower turbines and weirs block migration routes and kill eels heading to sea.',
        'Illegal smuggling of glass eels to Asia – one of Europe’s largest wildlife crimes.',
        'An introduced parasite damages the swim bladder.',
        'Pollution and changes in ocean currents.',
      ],
    },
    help: {
      de: [
        'Seit 2010 ist die Ausfuhr von Aalen aus der EU verboten; die EU-Aalverordnung von 2007 verlangt Bewirtschaftungspläne.',
        'Fischtreppen, Aalpässe und Turbinen-Abschaltungen während der Wanderzeit.',
        'Auf Aal verzichten – auch auf „Unagi“ im Sushi-Restaurant.',
      ],
      en: [
        'Exporting eels from the EU has been banned since 2010; the 2007 EU Eel Regulation requires management plans.',
        'Fish ladders, eel passes and turbine shutdowns during migration.',
        'Avoid eating eel – including “unagi” at sushi restaurants.',
      ],
    },
    home: [27, -60],
    range: [
      [27, -60, 1000],
      [42, -35, 1600],
      [50, 0, 1600],
      [38, 15, 1200],
    ],
    wiki: { de: 'Europäischer Aal', en: 'European eel' },
  },
  {
    id: 'napoleon-lippfisch',
    sci: 'Cheilinus undulatus',
    name: { de: 'Napoleon-Lippfisch', en: 'Humphead wrasse' },
    group: 'sea-other',
    realm: 'sea',
    status: 'EN',
    population: {
      de: 'unbekannt; selten, in befischten Riffen oft weniger als 1 Tier pro Hektar',
      en: 'unknown; rare, often fewer than 1 fish per hectare on fished reefs',
    },
    trend: 'down',
    length: 1.5,
    weight: 80,
    teaser: {
      de: 'Ein riesiger Riff-Fisch mit dicken Lippen und einem Stirnhöcker, der an Napoleons Hut erinnert.',
      en: 'A giant reef fish with thick lips and a forehead bump that recalls Napoleon’s hat.',
    },
    facts: {
      de: [
        'Er frisst giftige Tiere wie Dornenkronen-Seesterne, Kugelfische und Seehasen.',
        'Alle Tiere starten als Weibchen; einige werden später zu Männchen.',
        'Er kann über 30 Jahre alt werden und wird neugierig gegenüber Tauchern.',
      ],
      en: [
        'It eats toxic animals such as crown-of-thorns starfish, boxfish and sea hares.',
        'All fish start life as females; some later turn into males.',
        'It can live for more than 30 years and is curious about divers.',
      ],
    },
    threats: {
      de: [
        'Lebendfischhandel für Luxus-Restaurants in Asien.',
        'Fang mit Gift (Zyanid), der auch Korallen tötet.',
        'Er wird spät geschlechtsreif und vermehrt sich langsam.',
      ],
      en: [
        'The live reef fish trade for luxury restaurants in Asia.',
        'Fishing with poison (cyanide) that also kills corals.',
        'It matures late and reproduces slowly.',
      ],
    },
    help: {
      de: [
        'Seit 2004 ist der internationale Handel durch CITES geregelt.',
        'In Meeresschutzgebieten wie Palau oder dem Great Barrier Reef ist er wieder häufiger.',
        'Taucher können Sichtungen an Bürgerforschungs-Projekte melden.',
      ],
      en: [
        'Since 2004 international trade has been regulated under CITES.',
        'It is becoming more common again in marine reserves such as Palau and the Great Barrier Reef.',
        'Divers can report sightings to citizen-science projects.',
      ],
    },
    home: [-16.5, 146],
    range: [
      [0, 130, 3000],
      [-15, 45, 1500],
      [20, 38, 800],
    ],
    wiki: { de: 'Napoleon-Lippfisch', en: 'Humphead wrasse' },
  },
  {
    id: 'riesenzackenbarsch',
    sci: 'Epinephelus itajara',
    name: { de: 'Riesenzackenbarsch (Goliath-Zackenbarsch)', en: 'Atlantic goliath grouper' },
    group: 'sea-other',
    realm: 'sea',
    status: 'VU',
    population: {
      de: 'unbekannt; vor Florida nach Fangverbot deutlich erholt, anderswo weiter selten',
      en: 'unknown; clearly recovered off Florida after a fishing ban, still rare elsewhere',
    },
    trend: 'up',
    length: 2,
    weight: 200,
    teaser: {
      de: 'Ein Riesenbarsch, der bis zu 400 kg schwer wird – und Taucher mit einem dumpfen „Wumm“ begrüßt.',
      en: 'A giant grouper weighing up to 400 kg – that greets divers with a deep “boom”.',
    },
    facts: {
      de: [
        'Mit seiner Schwimmblase erzeugt er tiefe Dröhnlaute, die man unter Wasser spüren kann.',
        'Zum Laichen versammeln sich Dutzende Tiere jedes Jahr an denselben Wracks und Riffen.',
        'Jungtiere wachsen in Mangrovenwäldern auf.',
      ],
      en: [
        'It produces deep booming sounds with its swim bladder that you can feel underwater.',
        'Dozens of fish gather at the same wrecks and reefs every year to spawn.',
        'Juveniles grow up in mangrove forests.',
      ],
    },
    threats: {
      de: [
        'An Laichplätzen lassen sich viele Tiere auf einmal leicht fangen oder harpunieren.',
        'Abholzung von Mangroven zerstört die Kinderstuben.',
        'Kälteeinbrüche und giftige Algenblüten.',
      ],
      en: [
        'At spawning sites many fish can easily be caught or speared at once.',
        'Clearing of mangroves destroys their nurseries.',
        'Cold snaps and toxic algal blooms.',
      ],
    },
    help: {
      de: [
        'Seit 1990 gilt in den US-Gewässern ein vollständiges Fangverbot; die Bestände vor Florida haben sich deutlich erholt.',
        'Brasilien hat ebenfalls ein Fangverbot erlassen.',
        'Mangroven schützen und wiederaufforsten.',
      ],
      en: [
        'A complete fishing ban has applied in US waters since 1990; numbers off Florida have clearly recovered.',
        'Brazil has also banned fishing for it.',
        'Protecting and replanting mangroves.',
      ],
    },
    home: [26.8, -80],
    range: [
      [25, -85, 1200],
      [-10, -35, 1500],
      [5, -5, 1000],
    ],
    wiki: { de: 'Riesenzackenbarsch', en: 'Atlantic goliath grouper' },
  },
  {
    id: 'mondfisch',
    sci: 'Mola mola',
    name: { de: 'Mondfisch', en: 'Ocean sunfish' },
    group: 'sea-other',
    realm: 'sea',
    status: 'VU',
    population: {
      de: 'unbekannt; in manchen Regionen stark durch Beifang zurückgegangen',
      en: 'unknown; strongly reduced by bycatch in some regions',
    },
    trend: 'down',
    length: 1.8,
    weight: 1000,
    teaser: {
      de: 'Der schwerste Knochenfisch der Welt sieht aus wie ein schwimmender Kopf ohne Schwanz.',
      en: 'The heaviest bony fish in the world looks like a swimming head without a tail.',
    },
    facts: {
      de: [
        'Ein Weibchen trägt bis zu 300 Millionen Eier – mehr als jedes andere bekannte Wirbeltier.',
        'Er sonnt sich an der Oberfläche, um sich nach Tauchgängen in kaltes Tiefenwasser aufzuwärmen.',
        'Aus einer winzigen Larve wird ein Fisch, der über 60-millionenfach schwerer ist.',
      ],
      en: [
        'A female carries up to 300 million eggs – more than any other known vertebrate.',
        'It basks at the surface to warm up after dives into cold deep water.',
        'A tiny larva grows into a fish more than 60 million times heavier.',
      ],
    },
    threats: {
      de: [
        'Beifang in Treibnetzen und an Langleinen, z. B. im Mittelmeer und vor Südafrika.',
        'Plastiktüten werden mit Quallen verwechselt.',
        'Zusammenstöße mit Schiffen.',
      ],
      en: [
        'Bycatch in driftnets and on longlines, e.g. in the Mediterranean and off South Africa.',
        'Plastic bags are mistaken for jellyfish.',
        'Collisions with ships.',
      ],
    },
    help: {
      de: [
        'Das EU-weite Verbot von Treibnetzen (2002) hat Beifang im Mittelmeer verringert.',
        'Einwegplastik vermeiden, damit weniger Tüten im Meer landen.',
      ],
      en: [
        'The EU-wide driftnet ban (2002) has reduced bycatch in the Mediterranean.',
        'Avoiding single-use plastic means fewer bags in the sea.',
      ],
    },
    home: [-8.7, 115.5],
    range: [
      [35, -30, 3000],
      [35, -140, 3000],
      [-35, 150, 2500],
      [38, 15, 1200],
    ],
    wiki: { de: 'Mondfisch', en: 'Ocean sunfish' },
  },
  {
    id: 'quastenflosser',
    sci: 'Latimeria chalumnae',
    name: { de: 'Quastenflosser (Komoren-Quastenflosser)', en: 'Coelacanth (West Indian Ocean coelacanth)' },
    group: 'sea-other',
    realm: 'sea',
    status: 'CR',
    population: {
      de: 'unbekannt, vermutlich wenige Hundert Tiere vor den Komoren, dazu kleine Gruppen vor Südafrika und Tansania',
      en: 'unknown, probably a few hundred fish off the Comoros, plus small groups off South Africa and Tanzania',
    },
    trend: 'unknown',
    length: 1.8,
    weight: 90,
    teaser: {
      de: 'Ein „lebendes Fossil“: Man hielt Quastenflosser für seit 66 Millionen Jahren ausgestorben – bis 1938 einer im Netz eines Fischers lag.',
      en: 'A “living fossil”: coelacanths were thought to have died out 66 million years ago – until one turned up in a fisherman’s net in 1938.',
    },
    facts: {
      de: [
        'Seine fleischigen, beinartigen Flossen ähneln denen der Fische, aus denen die ersten Landtiere hervorgingen.',
        'Er lebt tagsüber in Höhlen in 150–250 m Tiefe und kann über 80 Jahre alt werden.',
        'Weibchen sind rund 5 Jahre trächtig und bringen lebende Junge zur Welt.',
      ],
      en: [
        'Its fleshy, leg-like fins resemble those of the fish from which the first land animals evolved.',
        'By day it rests in caves 150–250 m deep, and it can live for more than 80 years.',
        'Females are pregnant for about 5 years and give birth to live young.',
      ],
    },
    threats: {
      de: [
        'Beifang beim nächtlichen Tiefsee-Angeln auf andere Fische.',
        'Tiefgehende Stellnetze für Haie vor Tansania.',
        'Die winzige Population erholt sich nur sehr langsam.',
      ],
      en: [
        'Bycatch during night-time deep-water fishing for other species.',
        'Deep-set shark nets off Tanzania.',
        'The tiny population can only recover very slowly.',
      ],
    },
    help: {
      de: [
        'Internationaler Handel ist durch CITES verboten.',
        'Auf den Komoren lassen Fischer gefangene Quastenflosser frei und meiden bekannte Höhlen.',
        'Meeresschutzgebiete wie der Coelacanth Marine Park in Tansania (seit 2010).',
      ],
      en: [
        'International trade is banned under CITES.',
        'On the Comoros, fishers release coelacanths and avoid known caves.',
        'Marine reserves such as Tanzania’s Coelacanth Marine Park (since 2010).',
      ],
    },
    home: [-11.7, 43.2],
    range: [
      [-11.7, 43.2, 300],
      [-6, 39.5, 300],
      [-27.5, 32.7, 200],
    ],
    relatives: ['tiktaalik'],
    wiki: { de: 'Komoren-Quastenflosser', en: 'West Indian Ocean coelacanth' },
  },
  {
    id: 'europaeischer-stoer',
    sci: 'Acipenser sturio',
    name: { de: 'Europäischer Stör', en: 'European sea sturgeon' },
    group: 'sea-other',
    realm: 'sea',
    status: 'CR',
    population: {
      de: 'nur noch eine natürliche Population in der Gironde (Frankreich), wenige Hundert erwachsene Tiere',
      en: 'only one natural population left in the Gironde (France), a few hundred adults',
    },
    trend: 'down',
    length: 2,
    weight: 100,
    teaser: {
      de: 'Ein urtümlicher Riesenfisch mit Knochenschilden, der einst in Rhein, Elbe und Donau zum Laichen hinaufzog.',
      en: 'An ancient giant fish armoured with bony plates, which once swam up the Rhine, Elbe and Danube to spawn.',
    },
    facts: {
      de: [
        'Störe gibt es seit über 200 Millionen Jahren – sie haben die Dinosaurier überdauert.',
        'Er lebt im Meer und wandert nur zum Laichen in große Flüsse.',
        'Weibchen werden erst mit 13–20 Jahren geschlechtsreif.',
      ],
      en: [
        'Sturgeons have existed for more than 200 million years – they outlived the dinosaurs.',
        'It lives at sea and only swims into big rivers to spawn.',
        'Females only mature at 13–20 years of age.',
      ],
    },
    threats: {
      de: [
        'Überfischung für Kaviar und Fleisch im 19. und 20. Jahrhundert.',
        'Staudämme versperren die Laichplätze.',
        'Ausbaggern und Verschmutzung der Flüsse.',
        'Beifang auf See.',
      ],
      en: [
        'Overfishing for caviar and meat in the 19th and 20th centuries.',
        'Dams block access to spawning grounds.',
        'Dredging and pollution of rivers.',
        'Bycatch at sea.',
      ],
    },
    help: {
      de: [
        'Frankreich und Deutschland züchten Störe nach und setzen sie aus – seit 2008 auch in der Elbe.',
        'Fischer melden und befreien Störe aus dem Beifang.',
        'Frei fließende Flüsse und Fischpässe schaffen Wanderwege.',
      ],
      en: [
        'France and Germany breed sturgeons and release them – since 2008 also into the Elbe.',
        'Fishers report and release sturgeons caught as bycatch.',
        'Free-flowing rivers and fish passes reopen migration routes.',
      ],
    },
    home: [45.6, -1.2],
    range: [
      [45.6, -1.5, 400],
      [50, -3, 600],
    ],
    wiki: { de: 'Europäischer Stör', en: 'European sea sturgeon' },
  },
  {
    id: 'knysna-seepferdchen',
    sci: 'Hippocampus capensis',
    name: { de: 'Knysna-Seepferdchen', en: 'Knysna seahorse' },
    group: 'sea-other',
    realm: 'sea',
    status: 'EN',
    population: {
      de: 'nur in drei Flussmündungen an der Südküste Südafrikas; Bestand schwankt stark',
      en: 'only in three estuaries on South Africa’s south coast; numbers fluctuate strongly',
    },
    trend: 'unknown',
    length: 0.12,
    teaser: {
      de: 'Das vielleicht seltenste Seepferdchen der Welt lebt nur in drei kleinen Lagunen Südafrikas.',
      en: 'Perhaps the rarest seahorse in the world lives in just three small lagoons in South Africa.',
    },
    facts: {
      de: [
        'Wie bei allen Seepferdchen trägt das Männchen die Eier in einer Bruttasche aus und „gebärt“ die Jungen.',
        'Es hält sich mit seinem Greifschwanz an Seegras fest.',
      ],
      en: [
        'As in all seahorses, the male carries the eggs in a brood pouch and “gives birth” to the young.',
        'It clings to seagrass with its grasping tail.',
      ],
    },
    threats: {
      de: [
        'Das winzige Verbreitungsgebiet macht es sehr anfällig.',
        'Hochwasser und Süßwasserfluten können ganze Bestände töten.',
        'Bebauung, Abwässer und Bootsverkehr in den Lagunen.',
      ],
      en: [
        'Its tiny range makes it extremely vulnerable.',
        'Floods and surges of fresh water can wipe out entire populations.',
        'Building, sewage and boat traffic in the lagoons.',
      ],
    },
    help: {
      de: [
        'Die Knysna-Lagune ist Teil eines Nationalparks.',
        'Künstliche Unterschlüpfe („Seepferdchen-Hotels“) werden dort erprobt.',
        'Keine getrockneten Seepferdchen als Souvenir oder Heilmittel kaufen.',
      ],
      en: [
        'The Knysna lagoon is part of a national park.',
        'Artificial shelters (“seahorse hotels”) are being tested there.',
        'Never buy dried seahorses as souvenirs or remedies.',
      ],
    },
    home: [-34.05, 23.05],
    range: [[-34.05, 23.05, 80]],
    wiki: { de: 'Seepferdchen', en: 'Knysna seahorse' },
  },
  {
    id: 'totoaba',
    sci: 'Totoaba macdonaldi',
    name: { de: 'Totoaba', en: 'Totoaba' },
    group: 'sea-other',
    realm: 'sea',
    status: 'VU',
    population: {
      de: 'unbekannt; nach starkem Rückgang offenbar wieder etwas erholt',
      en: 'unknown; apparently recovering somewhat after a steep decline',
    },
    trend: 'unknown',
    length: 1.5,
    weight: 60,
    teaser: {
      de: 'Ein großer Fisch aus dem Golf von Kalifornien, dessen Schwimmblase auf dem Schwarzmarkt mehr kostet als Gold.',
      en: 'A big fish from the Gulf of California whose swim bladder fetches more than gold on the black market.',
    },
    facts: {
      de: [
        'Die getrocknete Schwimmblase gilt in China als Luxusgut und angebliches Heilmittel.',
        'Die illegalen Stellnetze für Totoabas sind der Hauptgrund für das Aussterben des Vaquita-Schweinswals.',
      ],
      en: [
        'Its dried swim bladder is a luxury item and supposed remedy in China.',
        'Illegal gillnets set for totoaba are the main reason the vaquita porpoise is close to extinction.',
      ],
    },
    threats: {
      de: [
        'Wilderei für den Schwarzmarkt-Handel mit Schwimmblasen.',
        'Weniger Süßwasser aus dem Colorado River verändert die Laichgebiete im Delta.',
      ],
      en: [
        'Poaching for the black-market swim bladder trade.',
        'Less fresh water from the Colorado River changes its spawning grounds in the delta.',
      ],
    },
    help: {
      de: [
        'Mexiko verbietet die Fischerei seit 1975; CITES verbietet den internationalen Handel.',
        'Kontrollen und Netzverbote im nördlichen Golf schützen zugleich den Vaquita.',
      ],
      en: [
        'Mexico has banned fishing since 1975; CITES bans international trade.',
        'Patrols and gillnet bans in the northern Gulf protect the vaquita at the same time.',
      ],
    },
    home: [31, -114.5],
    range: [[30.5, -113.5, 350]],
    wiki: { de: 'Totoaba', en: 'Totoaba' },
  },

  // ───────────── Wirbellose und Korallen ─────────────
  {
    id: 'elchgeweihkoralle',
    sci: 'Acropora palmata',
    name: { de: 'Elchgeweihkoralle', en: 'Elkhorn coral' },
    group: 'sea-other',
    realm: 'sea',
    status: 'CR',
    population: {
      de: 'seit den 1980er-Jahren in der Karibik um über 80 % zurückgegangen',
      en: 'down by more than 80 % in the Caribbean since the 1980s',
    },
    trend: 'down',
    teaser: {
      de: 'Ihre breiten Äste formen die Brandungszone karibischer Riffe und schützen Küsten vor Wellen.',
      en: 'Its broad branches build the surf zone of Caribbean reefs and protect coasts from waves.',
    },
    facts: {
      de: [
        'Sie wächst bis zu 10 cm pro Jahr – für eine Koralle sehr schnell.',
        'Ihre geweihartigen Kolonien bieten Fischen, Hummern und Langusten Verstecke.',
      ],
      en: [
        'It grows up to 10 cm a year – very fast for a coral.',
        'Its antler-like colonies shelter fish, lobsters and spiny lobsters.',
      ],
    },
    threats: {
      de: [
        'Korallenbleiche durch Meereshitze, etwa 2023 vor Florida.',
        'Die „Weißband-Krankheit“ hat ganze Bestände getötet.',
        'Wirbelstürme, Verschmutzung und Überfischung von Algenfressern.',
      ],
      en: [
        'Coral bleaching from marine heatwaves, as off Florida in 2023.',
        'White-band disease has killed entire stands.',
        'Hurricanes, pollution and overfishing of algae-grazing fish.',
      ],
    },
    help: {
      de: [
        'Korallengärten in Florida, Puerto Rico und der Karibik ziehen Fragmente nach und pflanzen sie aus.',
        'Hitzeresistente Kolonien werden gezielt vermehrt.',
        'Riff-freundliche Sonnencreme nutzen und Korallen beim Schnorcheln nicht berühren.',
      ],
      en: [
        'Coral nurseries in Florida, Puerto Rico and the Caribbean grow fragments and replant them.',
        'Heat-tolerant colonies are specially propagated.',
        'Use reef-safe sunscreen and never touch corals while snorkelling.',
      ],
    },
    home: [18.3, -64.7],
    range: [
      [18, -75, 1500],
      [24.6, -81, 300],
    ],
    wiki: { de: 'Elchgeweihkoralle', en: 'Elkhorn coral' },
  },
  {
    id: 'hirschgeweihkoralle',
    sci: 'Acropora cervicornis',
    name: { de: 'Hirschgeweihkoralle', en: 'Staghorn coral' },
    group: 'sea-other',
    realm: 'sea',
    status: 'CR',
    population: {
      de: 'seit den 1980er-Jahren in der Karibik um über 80 % zurückgegangen',
      en: 'down by more than 80 % in the Caribbean since the 1980s',
    },
    trend: 'down',
    teaser: {
      de: 'Dichte Dickichte aus fingerdicken „Geweihstangen“ waren einst typisch für die Riffe der Karibik.',
      en: 'Dense thickets of finger-thick “antlers” were once typical of Caribbean reefs.',
    },
    facts: {
      de: [
        'Abgebrochene Äste können wieder anwachsen – so vermehrt sie sich auch ungeschlechtlich.',
        'Sie gehört zu den am schnellsten wachsenden Korallen der Karibik.',
      ],
      en: [
        'Broken branches can reattach and grow – a way of reproducing without sex.',
        'It is among the fastest-growing corals in the Caribbean.',
      ],
    },
    threats: {
      de: [
        'Korallenbleiche durch immer häufigere Meereshitzewellen.',
        'Korallenkrankheiten wie die Weißband-Krankheit.',
        'Versauerung des Meerwassers schwächt das Kalkskelett.',
      ],
      en: [
        'Bleaching from ever more frequent marine heatwaves.',
        'Coral diseases such as white-band disease.',
        'Ocean acidification weakens its limestone skeleton.',
      ],
    },
    help: {
      de: [
        'Sie ist die meist ausgepflanzte Koralle der Welt: In Florida wurden schon Hunderttausende Fragmente gesetzt.',
        'Klimaschutz ist der wichtigste Schutz für alle Korallen.',
      ],
      en: [
        'It is the most widely replanted coral on Earth: hundreds of thousands of fragments have been outplanted in Florida.',
        'Fighting climate change is the most important protection for all corals.',
      ],
    },
    home: [24.6, -81.4],
    range: [
      [18, -75, 1500],
      [24.6, -81, 300],
    ],
    wiki: { de: 'Acropora', en: 'Staghorn coral' },
    gbif: 'Acropora cervicornis',
  },
  {
    id: 'saeulenkoralle',
    sci: 'Dendrogyra cylindrus',
    name: { de: 'Säulenkoralle', en: 'Pillar coral' },
    group: 'sea-other',
    realm: 'sea',
    status: 'CR',
    population: {
      de: 'vor Florida seit 2014 fast völlig verschwunden; in der Karibik stark geschrumpft',
      en: 'almost entirely gone from Florida since 2014; sharply reduced across the Caribbean',
    },
    trend: 'down',
    teaser: {
      de: 'Sie wächst wie eine Gruppe aus Orgelpfeifen bis zu 3 m in die Höhe.',
      en: 'It grows like a cluster of organ pipes up to 3 m tall.',
    },
    facts: {
      de: [
        'Anders als die meisten Korallen streckt sie ihre Polypen auch tagsüber aus – die Säulen wirken dadurch pelzig.',
        'Sie laicht nur wenige Nächte im Jahr, kurz nach dem Augustvollmond.',
      ],
      en: [
        'Unlike most corals it extends its polyps by day too, making the pillars look furry.',
        'It spawns only on a few nights a year, shortly after the August full moon.',
      ],
    },
    threats: {
      de: [
        'Die Steinkorallen-Gewebeverlust-Krankheit (SCTLD) hat seit 2014 die meisten Kolonien vor Florida getötet.',
        'Meereshitze und Korallenbleiche, besonders 2023.',
        'Kaum natürlicher Nachwuchs, weil die Kolonien weit verstreut sind.',
      ],
      en: [
        'Stony coral tissue loss disease (SCTLD) has killed most colonies off Florida since 2014.',
        'Marine heat and bleaching, especially in 2023.',
        'Hardly any natural offspring because the colonies are so scattered.',
      ],
    },
    help: {
      de: [
        'Gerettete Kolonien aus Florida werden in Aquarien als „Arche“ gehalten; 2019 gelang dort erstmals die Nachzucht.',
        'Erkrankte Kolonien werden mit Antibiotika-Paste behandelt.',
      ],
      en: [
        'Rescued Florida colonies are kept in aquariums as an “ark”; they were first bred there in 2019.',
        'Diseased colonies are treated with an antibiotic paste.',
      ],
    },
    home: [24.5, -81.6],
    range: [
      [18, -75, 1500],
      [24.6, -81, 300],
    ],
    wiki: { de: 'Dendrogyra cylindrus', en: 'Pillar coral' },
  },
  {
    id: 'riesenmuschel',
    sci: 'Tridacna gigas',
    name: { de: 'Riesenmuschel (Mördermuschel)', en: 'Giant clam' },
    group: 'sea-other',
    realm: 'sea',
    status: 'CR',
    population: {
      de: 'in vielen Ländern Südostasiens ausgerottet; größere Bestände nur noch am Great Barrier Reef und in abgelegenen Riffen',
      en: 'wiped out in many Southeast Asian countries; larger populations only on the Great Barrier Reef and remote reefs',
    },
    trend: 'down',
    length: 1.2,
    weight: 200,
    teaser: {
      de: 'Die größte Muschel der Welt wird über 1 m breit und mehr als 100 Jahre alt.',
      en: 'The world’s largest clam grows over 1 m wide and lives for more than 100 years.',
    },
    facts: {
      de: [
        'In ihrem bunten Mantel leben Algen, die ihr per Photosynthese Nahrung liefern – sie „sonnt“ sich wie eine Koralle.',
        'Der Name „Mördermuschel“ ist ein Mythos: Sie schließt sich viel zu langsam, um Taucher festzuhalten.',
        'Wenn sie einmal festgewachsen ist, bleibt sie ihr Leben lang am selben Platz.',
      ],
      en: [
        'Algae living in its colourful mantle supply food through photosynthesis – it “sunbathes” like a coral.',
        'The “killer clam” story is a myth: it closes far too slowly to trap a diver.',
        'Once settled, it stays in the same spot for the rest of its life.',
      ],
    },
    threats: {
      de: [
        'Überernte für Fleisch, vor allem den Schließmuskel als Delikatesse.',
        'Handel mit den Schalen als Deko und „Elfenbein-Ersatz“.',
        'Korallenbleiche trifft auch ihre Algen-Partner.',
      ],
      en: [
        'Overharvesting for meat, especially the adductor muscle as a delicacy.',
        'Trade in its shells for decoration and as an “ivory substitute”.',
        'Bleaching also hits its algae partners.',
      ],
    },
    help: {
      de: [
        'Zuchtstationen auf den Philippinen, Palau und den Salomonen setzen Jungmuscheln an Riffen aus.',
        'Der internationale Handel ist durch CITES geregelt.',
        'Keine Muschelschalen oder Riffprodukte als Souvenir kaufen.',
      ],
      en: [
        'Hatcheries in the Philippines, Palau and the Solomon Islands release juvenile clams onto reefs.',
        'International trade is regulated under CITES.',
        'Never buy shells or reef products as souvenirs.',
      ],
    },
    home: [-16.9, 146.1],
    range: [
      [-5, 140, 2000],
      [-18, 148, 800],
      [10, 120, 1000],
    ],
    wiki: { de: 'Riesenmuscheln', en: 'Giant clam' },
  },
  {
    id: 'perlboot',
    sci: 'Nautilus pompilius',
    name: { de: 'Gemeines Perlboot (Nautilus)', en: 'Chambered nautilus' },
    group: 'sea-other',
    realm: 'sea',
    status: 'VU',
    population: {
      de: 'unbekannt; in befischten Gebieten der Philippinen um bis zu 80 % zurückgegangen',
      en: 'unknown; down by up to 80 % in fished areas of the Philippines',
    },
    trend: 'down',
    length: 0.2,
    weight: 1,
    teaser: {
      de: 'Ein Tintenfisch-Verwandter mit Spiralschale, der fast genauso aussieht wie seine Vorfahren vor 500 Millionen Jahren.',
      en: 'A squid relative with a spiral shell that looks almost exactly like its ancestors of 500 million years ago.',
    },
    facts: {
      de: [
        'Durch Gas und Flüssigkeit in den Schalenkammern regelt es seinen Auftrieb wie ein U-Boot.',
        'Es hat bis zu 90 Fangarme ohne Saugnäpfe und Augen ohne Linse, die wie eine Lochkamera funktionieren.',
        'Nachts steigt es aus über 300 m Tiefe zur Nahrungssuche auf.',
      ],
      en: [
        'It controls its buoyancy like a submarine using gas and fluid in its shell chambers.',
        'It has up to 90 tentacles without suckers and lens-less eyes that work like a pinhole camera.',
        'At night it rises from depths of over 300 m to feed.',
      ],
    },
    threats: {
      de: [
        'Fang mit Reusen für den Handel mit Schalen als Deko und Schmuck.',
        'Es wird erst nach rund 15 Jahren geschlechtsreif und legt nur wenige Eier.',
      ],
      en: [
        'Trapping for the trade in shells as decoration and jewellery.',
        'It matures only after about 15 years and lays few eggs.',
      ],
    },
    help: {
      de: [
        'Seit 2017 regelt CITES den internationalen Handel mit allen Nautilus-Arten.',
        'Keine Nautilus-Schalen, Perlmutt-Schmuck oder Deko daraus kaufen.',
      ],
      en: [
        'Since 2017 CITES has regulated international trade in all nautilus species.',
        'Do not buy nautilus shells or mother-of-pearl jewellery and décor made from them.',
      ],
    },
    home: [-14.5, 145.5],
    range: [
      [-5, 135, 2000],
      [-18, 150, 1200],
      [10, 122, 800],
    ],
    relatives: ['cameroceras'],
    wiki: { de: 'Gemeines Perlboot', en: 'Chambered nautilus' },
  },
  {
    id: 'sonnenblumen-seestern',
    sci: 'Pycnopodia helianthoides',
    name: { de: 'Sonnenblumen-Seestern', en: 'Sunflower sea star' },
    group: 'sea-other',
    realm: 'sea',
    status: 'CR',
    population: {
      de: 'seit 2013 über 90 % verloren, schätzungsweise mehr als 5 Milliarden Tiere',
      en: 'over 90 % lost since 2013, an estimated more than 5 billion animals',
    },
    trend: 'down',
    length: 1,
    weight: 5,
    teaser: {
      de: 'Ein Seestern mit bis zu 24 Armen, so groß wie ein Autoreifen – und überraschend schnell.',
      en: 'A sea star with up to 24 arms, as big as a car tyre – and surprisingly fast.',
    },
    facts: {
      de: [
        'Mit Tausenden Saugfüßchen läuft er bis zu 1 m pro Minute.',
        'Er frisst Seeigel und schützt so die Kelpwälder vor Kahlfraß.',
      ],
      en: [
        'Using thousands of tube feet it moves up to 1 m per minute.',
        'It eats sea urchins and so protects kelp forests from being grazed bare.',
      ],
    },
    threats: {
      de: [
        'Eine Seestern-Schwundkrankheit („sea star wasting“) ließ die Tiere ab 2013 regelrecht zerfließen.',
        'Meereshitzewellen verschlimmern die Krankheit.',
      ],
      en: [
        'Sea star wasting disease made the animals literally fall apart from 2013 onwards.',
        'Marine heatwaves make the disease worse.',
      ],
    },
    help: {
      de: [
        'Forschende fanden 2025 ein Bakterium als Auslöser der Krankheit – ein wichtiger Schritt zur Rettung.',
        'Nachzuchten in Kalifornien und Washington sollen später ausgesetzt werden.',
      ],
      en: [
        'In 2025 researchers identified a bacterium behind the disease – a key step towards saving the species.',
        'Captive-bred sea stars in California and Washington are being raised for future release.',
      ],
    },
    home: [48.5, -123.5],
    range: [
      [45, -128, 1500],
      [57, -150, 1000],
    ],
    wiki: { de: 'Pycnopodia helianthoides', en: 'Sunflower sea star' },
  },
  {
    id: 'schwarzes-seeohr',
    sci: 'Haliotis cracherodii',
    name: { de: 'Schwarzes Seeohr (Schwarzer Abalone)', en: 'Black abalone' },
    group: 'sea-other',
    realm: 'sea',
    status: 'CR',
    population: {
      de: 'in Südkalifornien seit den 1980er-Jahren um über 90 % zurückgegangen',
      en: 'down by more than 90 % in southern California since the 1980s',
    },
    trend: 'down',
    length: 0.15,
    teaser: {
      de: 'Eine Meeresschnecke mit schwarzer, ohrförmiger Schale, die an felsigen Küsten Kaliforniens in der Brandung klebt.',
      en: 'A sea snail with a black, ear-shaped shell that clings to California’s rocky shores in the surf.',
    },
    facts: {
      de: [
        'Ihre Schale ist innen mit schimmerndem Perlmutt ausgekleidet.',
        'Sie raspelt Algen von den Felsen und kann über 25 Jahre alt werden.',
      ],
      en: [
        'Its shell is lined inside with shimmering mother-of-pearl.',
        'It grazes algae off the rocks and can live for more than 25 years.',
      ],
    },
    threats: {
      de: [
        'Die „Withering Syndrome“-Krankheit lässt die Tiere verhungern.',
        'Früher starke Übernutzung durch Fischerei.',
        'Wärmeres Wasser fördert die Krankheit.',
      ],
      en: [
        'Withering syndrome makes the animals starve.',
        'Heavy overharvesting in the past.',
        'Warmer water favours the disease.',
      ],
    },
    help: {
      de: [
        'Seit 1993 ist der Fang in Kalifornien verboten; seit 2009 steht sie in den USA unter Artenschutz.',
        'An einigen Küstenabschnitten zeigen sich wieder junge Tiere.',
      ],
      en: [
        'Harvesting has been banned in California since 1993, and since 2009 it has been protected under the US Endangered Species Act.',
        'Young abalone are reappearing along some stretches of coast.',
      ],
    },
    home: [34, -120],
    range: [
      [35, -121, 500],
      [29, -115, 300],
    ],
    wiki: { de: 'Seeohren', en: 'Haliotis cracherodii' },
  },
  {
    id: 'pfeilschwanzkrebs',
    sci: 'Limulus polyphemus',
    name: { de: 'Amerikanischer Pfeilschwanzkrebs', en: 'Atlantic horseshoe crab' },
    group: 'sea-other',
    realm: 'sea',
    status: 'VU',
    population: {
      de: 'mehrere Millionen Tiere; in der Delaware Bay seit den 1990er-Jahren deutlich weniger',
      en: 'several million animals; numbers in Delaware Bay have dropped sharply since the 1990s',
    },
    trend: 'down',
    length: 0.6,
    weight: 2,
    teaser: {
      de: 'Ein „lebendes Fossil“ mit blauem Blut, das mit Spinnen näher verwandt ist als mit Krebsen.',
      en: 'A “living fossil” with blue blood that is more closely related to spiders than to crabs.',
    },
    facts: {
      de: [
        'Sein blaues Blut wird für einen Test genutzt, mit dem Impfstoffe und Spritzen auf Bakteriengifte geprüft werden.',
        'Jeden Frühsommer kommen Hunderttausende zum Laichen an die Strände der Delaware Bay.',
        'Ihre Eier sind lebenswichtiges Futter für Zugvögel wie den Knutt.',
      ],
      en: [
        'Its blue blood is used in a test that checks vaccines and syringes for bacterial toxins.',
        'Every early summer hundreds of thousands come ashore to spawn in Delaware Bay.',
        'Their eggs are vital fuel for migrating shorebirds such as the red knot.',
      ],
    },
    threats: {
      de: [
        'Fang als Köder für die Aal- und Wellhornschnecken-Fischerei.',
        'Blutentnahme für die Medizin – ein Teil der Tiere überlebt sie nicht.',
        'Verbaute und erodierte Laichstrände.',
      ],
      en: [
        'Harvesting as bait for eel and whelk fisheries.',
        'Bleeding for medicine – some animals do not survive it.',
        'Developed and eroding spawning beaches.',
      ],
    },
    help: {
      de: [
        'Fangquoten in der Delaware Bay berücksichtigen seit 2012 auch den Bedarf der Zugvögel.',
        'Ein synthetischer Ersatztest (rekombinanter Faktor C) kann das Blut ersetzen.',
        'Umgedrehte Tiere am Strand vorsichtig am Panzerrand wenden – nie am Schwanz hochheben.',
      ],
      en: [
        'Since 2012, catch limits in Delaware Bay have also taken the needs of migrating birds into account.',
        'A synthetic alternative test (recombinant factor C) can replace the blood.',
        'Gently flip stranded crabs by the shell edge – never lift them by the tail.',
      ],
    },
    home: [39, -75],
    range: [
      [36, -75, 1200],
      [22, -89, 500],
    ],
    relatives: ['jaekelopterus', 'olenellus'],
    wiki: { de: 'Pfeilschwanzkrebse', en: 'Atlantic horseshoe crab' },
  },
  {
    id: 'europaeische-auster',
    sci: 'Ostrea edulis',
    name: { de: 'Europäische Auster', en: 'European flat oyster' },
    group: 'sea-other',
    realm: 'sea',
    status: 'DD',
    population: {
      de: 'von der IUCN nicht bewertet; rund 95 % der früheren Austernbänke Europas sind verschwunden',
      en: 'not assessed by the IUCN; about 95 % of Europe’s former oyster reefs have disappeared',
    },
    trend: 'down',
    length: 0.1,
    teaser: {
      de: 'Früher bedeckten ihre Austernbänke riesige Flächen der Nordsee – heute ist sie dort fast verschwunden.',
      en: 'Its oyster reefs once covered vast areas of the North Sea – today it has almost vanished there.',
    },
    facts: {
      de: [
        'Eine einzige Auster filtert bis zu 200 Liter Wasser am Tag.',
        'Austernbänke sind Riffe, die Hunderten anderen Arten Lebensraum bieten.',
        'Sie kann im Laufe ihres Lebens mehrfach das Geschlecht wechseln.',
      ],
      en: [
        'A single oyster filters up to 200 litres of water a day.',
        'Oyster beds are reefs that provide homes for hundreds of other species.',
        'It can change sex several times during its life.',
      ],
    },
    threats: {
      de: [
        'Überfischung im 19. und frühen 20. Jahrhundert zerstörte die Bänke.',
        'Die Parasiten-Krankheit Bonamiose.',
        'Grundschleppnetze und eingeschleppte Arten wie die Pazifische Auster.',
      ],
      en: [
        'Overfishing in the 19th and early 20th centuries destroyed the beds.',
        'The parasitic disease bonamiosis.',
        'Bottom trawling and introduced species such as the Pacific oyster.',
      ],
    },
    help: {
      de: [
        'Im deutschen Projekt RESTORE werden seit 2016 bei Helgoland und im Borkum-Riffgrund Austern angesiedelt.',
        'Das europäische Netzwerk NORA koordiniert die Wiederherstellung von Austernriffen.',
      ],
      en: [
        'Since 2016 the German RESTORE project has been reintroducing oysters near Heligoland and Borkum Reef Ground.',
        'The European network NORA coordinates oyster reef restoration.',
      ],
    },
    home: [54.2, 7.9],
    range: [
      [55, 2, 1000],
      [46, -3, 600],
      [40, 12, 1200],
    ],
    wiki: { de: 'Europäische Auster', en: 'Ostrea edulis' },
  },

  // ───────────── Seevögel und Meeresreptilien ─────────────
  {
    id: 'wanderalbatros',
    sci: 'Diomedea exulans',
    name: { de: 'Wanderalbatros', en: 'Wandering albatross' },
    group: 'sea-other',
    realm: 'sea',
    status: 'VU',
    population: {
      de: 'rund 20.000 erwachsene Vögel, etwa 8.000 Brutpaare pro Jahr',
      en: 'about 20,000 adult birds, roughly 8,000 breeding pairs a year',
    },
    trend: 'down',
    length: 1.2,
    weight: 9,
    teaser: {
      de: 'Der Vogel mit der größten Flügelspannweite der Welt – bis zu 3,5 m – umrundet im Segelflug die Antarktis.',
      en: 'The bird with the largest wingspan on Earth – up to 3.5 m – glides around Antarctica.',
    },
    facts: {
      de: [
        'Er nutzt die Winde über den Wellen und legt fast ohne Flügelschlag über 10.000 km auf einer Futtersuche zurück.',
        'Paare bleiben ein Leben lang zusammen und brüten nur alle zwei Jahre.',
        'Wanderalbatrosse können über 60 Jahre alt werden.',
      ],
      en: [
        'It rides the winds above the waves and covers more than 10,000 km on a single feeding trip with barely a wingbeat.',
        'Pairs stay together for life and breed only every other year.',
        'Wandering albatrosses can live for more than 60 years.',
      ],
    },
    threats: {
      de: [
        'Er schnappt nach Ködern an Langleinen, wird unter Wasser gezogen und ertrinkt.',
        'Eingeschleppte Mäuse fressen auf manchen Inseln Küken bei lebendigem Leib.',
        'Plastik, das Eltern versehentlich an die Küken verfüttern.',
      ],
      en: [
        'It grabs baited longline hooks, gets dragged under and drowns.',
        'Introduced mice eat chicks alive on some islands.',
        'Plastic that parents accidentally feed to their chicks.',
      ],
    },
    help: {
      de: [
        'Das Abkommen zum Schutz von Albatrossen (ACAP, seit 2004) fördert vogelfreundliche Fischerei.',
        'Vogelscheuchleinen, nächtliches Ausbringen und beschwerte Leinen senken den Beifang um bis zu 90 %.',
        'Auf Südgeorgien wurden Ratten und Mäuse bis 2018 ausgerottet.',
      ],
      en: [
        'The Agreement on the Conservation of Albatrosses and Petrels (ACAP, since 2004) promotes bird-safe fishing.',
        'Bird-scaring lines, night setting and weighted lines cut bycatch by up to 90 %.',
        'Rats and mice were eradicated from South Georgia by 2018.',
      ],
    },
    home: [-54.3, -36.5],
    range: [
      [-48, -20, 3500],
      [-48, 60, 3500],
      [-48, 150, 3000],
      [-45, -110, 3000],
    ],
    relatives: ['archaeopteryx'],
    wiki: { de: 'Wanderalbatros', en: 'Snowy albatross' },
  },
  {
    id: 'galapagos-pinguin',
    sci: 'Spheniscus mendiculus',
    name: { de: 'Galápagos-Pinguin', en: 'Galápagos penguin' },
    group: 'sea-other',
    realm: 'sea',
    status: 'EN',
    population: {
      de: 'rund 1.200–2.000 Tiere',
      en: 'about 1,200–2,000 birds',
    },
    trend: 'down',
    length: 0.5,
    weight: 2.5,
    teaser: {
      de: 'Der einzige Pinguin, der auch nördlich des Äquators vorkommt – mitten in den Tropen.',
      en: 'The only penguin that also lives north of the equator – right in the tropics.',
    },
    facts: {
      de: [
        'Kalte Meeresströmungen bringen genug Fisch zu den heißen Lavainseln.',
        'Gegen die Hitze hecheln die Pinguine, beschatten ihre Füße und kühlen sich im Wasser.',
      ],
      en: [
        'Cold ocean currents bring enough fish to the hot volcanic islands.',
        'To cope with the heat, the penguins pant, shade their feet and cool off in the water.',
      ],
    },
    threats: {
      de: [
        'Starke El-Niño-Jahre lassen die Fischschwärme verschwinden; 1983 starben über 75 % der Pinguine.',
        'Eingeschleppte Katzen, Ratten und Krankheiten.',
        'Beifang und Störungen durch Fischerei.',
      ],
      en: [
        'Strong El Niño years drive away the fish; in 1983 more than 75 % of the penguins died.',
        'Introduced cats, rats and diseases.',
        'Bycatch and disturbance from fishing.',
      ],
    },
    help: {
      de: [
        'Die Galápagos-Inseln sind Nationalpark und Meeresschutzgebiet.',
        'Seit 2010 werden künstliche Nisthöhlen aus Lavagestein gebaut, die von den Pinguinen angenommen werden.',
      ],
      en: [
        'The Galápagos Islands are a national park and marine reserve.',
        'Since 2010 artificial lava-rock nest burrows have been built – and the penguins use them.',
      ],
    },
    home: [-0.5, -91.4],
    range: [[-0.5, -91, 200]],
    relatives: ['archaeopteryx'],
    wiki: { de: 'Galápagos-Pinguin', en: 'Galapagos penguin' },
  },
  {
    id: 'brillenpinguin',
    sci: 'Spheniscus demersus',
    name: { de: 'Brillenpinguin (Afrikanischer Pinguin)', en: 'African penguin' },
    group: 'sea-other',
    realm: 'sea',
    status: 'CR',
    population: {
      de: 'unter 10.000 Brutpaare; seit 1990 um rund 80 % geschrumpft',
      en: 'fewer than 10,000 breeding pairs; down by about 80 % since 1990',
    },
    trend: 'down',
    length: 0.65,
    weight: 3,
    teaser: {
      de: 'Afrikas einziger Pinguin wurde 2024 als „vom Aussterben bedroht“ eingestuft – er könnte bis 2035 aus der Wildnis verschwinden.',
      en: 'Africa’s only penguin was listed as Critically Endangered in 2024 – it could vanish from the wild by 2035.',
    },
    facts: {
      de: [
        'Wegen seiner eselsartigen Rufe heißt er auf Englisch auch „Jackass Penguin“.',
        'Jedes Tier hat ein eigenes Muster aus schwarzen Punkten auf der Brust.',
        'Am Boulders Beach bei Kapstadt brütet er direkt neben Badegästen.',
      ],
      en: [
        'Its donkey-like braying earned it the nickname “jackass penguin”.',
        'Each bird has its own unique pattern of black spots on its chest.',
        'At Boulders Beach near Cape Town it breeds right next to swimmers.',
      ],
    },
    threats: {
      de: [
        'Die Fischerei auf Sardinen und Sardellen nimmt ihm die Nahrung.',
        'Ölverschmutzungen, etwa 2000 durch den Tanker „Treasure“.',
        'Früher wurden Guano und Eier abgebaut – den Vögeln fehlen Nistplätze.',
      ],
      en: [
        'Fishing for sardines and anchovies takes away its food.',
        'Oil spills, such as the Treasure tanker in 2000.',
        'Guano and egg harvesting in the past left birds without nesting sites.',
      ],
    },
    help: {
      de: [
        'Südafrika sperrt seit 2025 die Fischerei rund um sechs wichtige Brutkolonien.',
        'Künstliche Nisthöhlen schützen Küken vor Hitze und Räubern.',
        'Bei der Ölpest 2000 wurden über 20.000 Pinguine gerettet und gewaschen.',
      ],
      en: [
        'Since 2025 South Africa has closed fishing around six key breeding colonies.',
        'Artificial nest burrows protect chicks from heat and predators.',
        'During the 2000 oil spill more than 20,000 penguins were rescued and cleaned.',
      ],
    },
    home: [-34.2, 18.45],
    range: [
      [-30, 16, 700],
      [-34, 23, 500],
    ],
    relatives: ['archaeopteryx'],
    wiki: { de: 'Brillenpinguin', en: 'African penguin' },
  },
  {
    id: 'kaiserpinguin',
    sci: 'Aptenodytes forsteri',
    name: { de: 'Kaiserpinguin', en: 'Emperor penguin' },
    group: 'sea-other',
    realm: 'sea',
    status: 'NT',
    population: {
      de: 'rund 250.000 Brutpaare in etwa 60 Kolonien',
      en: 'about 250,000 breeding pairs in around 60 colonies',
    },
    trend: 'down',
    length: 1.15,
    weight: 30,
    teaser: {
      de: 'Der größte Pinguin brütet mitten im antarktischen Winter auf dem Meereis – bei minus 40 °C.',
      en: 'The largest penguin breeds on sea ice in the middle of the Antarctic winter – at minus 40 °C.',
    },
    facts: {
      de: [
        'Die Männchen wärmen das Ei rund zwei Monate lang auf ihren Füßen und fressen in dieser Zeit nichts.',
        'In dichten „Huddles“ wechseln sich die Vögel am windigen Rand ab.',
        'Er taucht über 500 m tief und bis zu 20 Minuten lang.',
      ],
      en: [
        'Males keep the egg warm on their feet for about two months and eat nothing during that time.',
        'In tight huddles the birds take turns on the windy edge.',
        'It dives deeper than 500 m and for up to 20 minutes.',
      ],
    },
    threats: {
      de: [
        'Schwindendes Meereis: 2022 brach das Eis unter mehreren Kolonien, bevor die Küken schwimmen konnten.',
        'Fischerei auf Krill, die Basis der antarktischen Nahrungskette.',
      ],
      en: [
        'Shrinking sea ice: in 2022 the ice broke up under several colonies before the chicks could swim.',
        'Fishing for krill, the base of the Antarctic food web.',
      ],
    },
    help: {
      de: [
        'Der Antarktisvertrag schützt das Festland; Meeresschutzgebiete wie im Rossmeer (seit 2017) schützen die Nahrungsgründe.',
        'Weniger Treibhausgase sind der wichtigste Schutz für das Meereis.',
      ],
      en: [
        'The Antarctic Treaty protects the continent; marine reserves such as the Ross Sea (since 2017) protect feeding grounds.',
        'Cutting greenhouse gases is the most important protection for the sea ice.',
      ],
    },
    home: [-77.6, 166.4],
    range: [
      [-70, 0, 2000],
      [-68, 90, 2000],
      [-75, 170, 1500],
      [-72, -100, 2000],
    ],
    relatives: ['archaeopteryx'],
    wiki: { de: 'Kaiserpinguin', en: 'Emperor penguin' },
  },
  {
    id: 'balearen-sturmtaucher',
    sci: 'Puffinus mauretanicus',
    name: { de: 'Balearen-Sturmtaucher', en: 'Balearic shearwater' },
    group: 'sea-other',
    realm: 'sea',
    status: 'CR',
    population: {
      de: 'rund 3.000 Brutpaare, nur auf den Balearen',
      en: 'about 3,000 breeding pairs, only on the Balearic Islands',
    },
    trend: 'down',
    length: 0.36,
    weight: 0.5,
    teaser: {
      de: 'Europas seltenster Seevogel brütet in Felshöhlen auf Mallorca, Menorca und Ibiza.',
      en: 'Europe’s rarest seabird nests in rock crevices on Mallorca, Menorca and Ibiza.',
    },
    facts: {
      de: [
        'Er gleitet dicht über den Wellen, „schert“ das Wasser mit den Flügelspitzen.',
        'Nach der Brutzeit zieht er in den Atlantik bis vor Frankreich und Großbritannien.',
      ],
      en: [
        'It glides low over the waves, “shearing” the water with its wingtips.',
        'After breeding it moves into the Atlantic as far as France and Britain.',
      ],
    },
    threats: {
      de: [
        'Beifang an Langleinen – bis zu Hunderte Vögel pro Jahr.',
        'Verwilderte Katzen und Ratten an den Brutplätzen.',
        'Weniger Fisch durch Überfischung im Mittelmeer.',
      ],
      en: [
        'Bycatch on longlines – up to hundreds of birds a year.',
        'Feral cats and rats at breeding sites.',
        'Less fish due to overfishing in the Mediterranean.',
      ],
    },
    help: {
      de: [
        'Brutkolonien auf den Balearen sind geschützt, Räuber werden dort bekämpft.',
        'Vogelscheuchleinen und nächtliches Auslegen von Leinen verringern den Beifang.',
        'Beobachtungen an Seevogel-Zählprogramme melden.',
      ],
      en: [
        'Breeding colonies on the Balearics are protected and predators are controlled there.',
        'Bird-scaring lines and setting lines at night reduce bycatch.',
        'Report sightings to seabird monitoring programmes.',
      ],
    },
    home: [39.6, 2.5],
    range: [
      [39.5, 2.5, 400],
      [45, -4, 800],
    ],
    relatives: ['archaeopteryx'],
    wiki: { de: 'Balearensturmtaucher', en: 'Balearic shearwater' },
  },
  {
    id: 'papageitaucher',
    sci: 'Fratercula arctica',
    name: { de: 'Papageitaucher', en: 'Atlantic puffin' },
    group: 'sea-other',
    realm: 'sea',
    status: 'VU',
    population: {
      de: 'rund 12–14 Millionen Vögel, über die Hälfte in Island und Norwegen',
      en: 'about 12–14 million birds, more than half in Iceland and Norway',
    },
    trend: 'down',
    length: 0.3,
    weight: 0.45,
    teaser: {
      de: 'Der „Clown der Meere“ mit dem bunten Schnabel kann ein Dutzend Fische auf einmal quer im Schnabel tragen.',
      en: 'The “clown of the sea” with its colourful bill can carry a dozen fish crosswise in its beak at once.',
    },
    facts: {
      de: [
        'Mit Stacheln am Gaumen hält er gefangene Fische fest und kann trotzdem weiterjagen.',
        'Er „fliegt“ unter Wasser mit seinen Flügeln und taucht bis 60 m tief.',
        'Der bunte Schnabel ist nur zur Brutzeit so farbig.',
      ],
      en: [
        'Spines on its palate hold caught fish in place while it keeps hunting.',
        'It “flies” underwater with its wings and dives as deep as 60 m.',
        'The colourful bill is only this bright in the breeding season.',
      ],
    },
    threats: {
      de: [
        'Wärmeres Meer verdrängt Sandaale und andere Beutefische – Küken verhungern.',
        'Überfischung von Sandaalen für Fischmehl.',
        'Ratten und Ölverschmutzung an den Brutinseln.',
      ],
      en: [
        'Warming seas drive away sand eels and other prey fish – chicks starve.',
        'Overfishing of sand eels for fishmeal.',
        'Rats and oil spills at breeding islands.',
      ],
    },
    help: {
      de: [
        'Rattenfreie Inseln: Nach der Ausrottung von Ratten auf Lundy (2006) stieg die Zahl der Papageitaucher dort stark an.',
        'Großbritannien hat 2024 die Sandaal-Fischerei in seinen Nordsee-Gewässern verboten.',
        'An Brutkolonien auf den Wegen bleiben, um die Höhlen nicht zu zertreten.',
      ],
      en: [
        'Rat-free islands: after rats were eradicated on Lundy (2006), puffin numbers there rose sharply.',
        'In 2024 the UK banned sand eel fishing in its North Sea waters.',
        'Stick to paths at breeding colonies so as not to crush the burrows.',
      ],
    },
    home: [63.4, -20.3],
    range: [
      [62, -12, 1500],
      [52, -52, 900],
      [72, 20, 1000],
    ],
    relatives: ['archaeopteryx'],
    wiki: { de: 'Papageitaucher', en: 'Atlantic puffin' },
  },
  {
    id: 'tristanalbatros',
    sci: 'Diomedea dabbenena',
    name: { de: 'Tristanalbatros', en: 'Tristan albatross' },
    group: 'sea-other',
    realm: 'sea',
    status: 'CR',
    population: {
      de: 'rund 1.100–1.700 Brutpaare, fast alle auf Gough Island',
      en: 'about 1,100–1,700 breeding pairs, nearly all on Gough Island',
    },
    trend: 'down',
    length: 1.1,
    weight: 7,
    teaser: {
      de: 'Ein riesiger Albatros, dessen Küken auf seiner einzigen Brutinsel von eingeschleppten Mäusen angegriffen werden.',
      en: 'A huge albatross whose chicks are attacked by introduced mice on its only breeding island.',
    },
    facts: {
      de: [
        'Seine Flügelspannweite beträgt rund 3 m.',
        'Ein Küken braucht fast ein Jahr, bis es flügge ist – deshalb brüten die Eltern nur alle zwei Jahre.',
      ],
      en: [
        'Its wingspan is about 3 m.',
        'A chick takes almost a year to fledge – so its parents only breed every other year.',
      ],
    },
    threats: {
      de: [
        'Hausmäuse auf Gough Island fressen die wehrlosen Küken.',
        'Beifang an Langleinen im Südatlantik.',
      ],
      en: [
        'House mice on Gough Island eat the defenceless chicks.',
        'Bycatch on longlines in the South Atlantic.',
      ],
    },
    help: {
      de: [
        '2021 wurde eine große Mäuse-Ausrottung auf Gough Island durchgeführt; seitdem überleben deutlich mehr Küken, letzte Mäuse werden noch bekämpft.',
        'Vogelfreundliche Fangmethoden im Rahmen des ACAP-Abkommens.',
      ],
      en: [
        'A major mouse eradication was carried out on Gough Island in 2021; far more chicks have survived since, and the last mice are still being tackled.',
        'Bird-safe fishing methods under the ACAP agreement.',
      ],
    },
    home: [-40.3, -9.9],
    range: [
      [-40, -10, 2500],
      [-38, 15, 2000],
    ],
    relatives: ['archaeopteryx'],
    wiki: { de: 'Tristanalbatros', en: 'Tristan albatross' },
  },
  {
    id: 'meerechse',
    sci: 'Amblyrhynchus cristatus',
    name: { de: 'Meerechse (Meeresleguan)', en: 'Marine iguana' },
    group: 'sea-other',
    realm: 'sea',
    status: 'VU',
    population: {
      de: 'geschätzt 200.000–300.000 Tiere, stark schwankend',
      en: 'an estimated 200,000–300,000 animals, fluctuating strongly',
    },
    trend: 'down',
    length: 1,
    weight: 1.5,
    teaser: {
      de: 'Die einzige Echse der Welt, die im Meer nach Nahrung taucht – sie weidet Algen von Unterwasserfelsen.',
      en: 'The only lizard in the world that dives in the sea for food – it grazes algae off underwater rocks.',
    },
    facts: {
      de: [
        'Überschüssiges Salz niest sie über Drüsen an der Nase aus – darum sind ihre Köpfe oft weiß verkrustet.',
        'In Hungerjahren schrumpfen die Tiere sogar, bis zu 20 % ihrer Körperlänge – auch ihre Knochen.',
        'Nach dem Tauchen wärmen sie sich auf schwarzem Lavagestein auf.',
      ],
      en: [
        'It sneezes out excess salt through glands near its nose – which is why their heads are often crusted white.',
        'In lean years the animals actually shrink by up to 20 % of their body length – bones included.',
        'After diving they warm up on black lava rock.',
      ],
    },
    threats: {
      de: [
        'El-Niño-Jahre lassen die Algen absterben; dann verhungern viele Tiere.',
        'Eingeschleppte Katzen, Hunde und Ratten fressen Eier und Jungtiere.',
        'Ölverschmutzungen und Plastik.',
      ],
      en: [
        'El Niño years kill off the algae and many iguanas starve.',
        'Introduced cats, dogs and rats eat eggs and young.',
        'Oil spills and plastic.',
      ],
    },
    help: {
      de: [
        'Die Galápagos-Inseln sind seit 1959 Nationalpark, seit 1998 auch Meeresschutzgebiet.',
        'Programme gegen eingeschleppte Räuber auf mehreren Inseln.',
        'Als Besucher Abstand halten und auf den Wegen bleiben.',
      ],
      en: [
        'The Galápagos have been a national park since 1959 and a marine reserve since 1998.',
        'Programmes to remove introduced predators on several islands.',
        'As a visitor, keep your distance and stay on the trails.',
      ],
    },
    home: [-0.75, -90.3],
    range: [[-0.5, -90.5, 200]],
    relatives: ['mosasaurus', 'tylosaurus'],
    wiki: { de: 'Meerechse', en: 'Marine iguana' },
  },
  {
    id: 'gelbaugenpinguin',
    sci: 'Megadyptes antipodes',
    name: { de: 'Gelbaugenpinguin', en: 'Yellow-eyed penguin' },
    group: 'sea-other',
    realm: 'sea',
    status: 'EN',
    population: {
      de: 'rund 3.000–4.000 erwachsene Tiere; auf der Südinsel Neuseelands nur noch etwa 150 Brutpaare',
      en: 'about 3,000–4,000 adults; only around 150 breeding pairs left on New Zealand’s South Island',
    },
    trend: 'down',
    length: 0.65,
    weight: 5.5,
    teaser: {
      de: 'Ein scheuer Pinguin mit gelben Augen und gelbem Kopfband, der im Küstenwald Neuseelands brütet.',
      en: 'A shy penguin with yellow eyes and a yellow headband that nests in New Zealand’s coastal forests.',
    },
    facts: {
      de: [
        'Anders als viele Pinguine brütet er nicht in dichten Kolonien, sondern versteckt und mit Sichtabstand zum Nachbarn.',
        'Die Māori nennen ihn „Hoiho“ – der Krachmacher – wegen seiner schrillen Rufe.',
      ],
      en: [
        'Unlike many penguins it does not nest in dense colonies but hidden away, out of sight of its neighbours.',
        'The Māori call it “hoiho” – noise shouter – because of its shrill calls.',
      ],
    },
    threats: {
      de: [
        'Eine Vogelmalaria-ähnliche Krankheit und Diphtherie töten viele Küken.',
        'Stellnetz-Beifang und weniger Nahrung durch wärmeres Meer.',
        'Hunde, Hermeline und Störungen durch Touristen.',
      ],
      en: [
        'Disease, including avian diphtheria, kills many chicks.',
        'Gillnet bycatch and less food due to warming seas.',
        'Dogs, stoats and disturbance by tourists.',
      ],
    },
    help: {
      de: [
        'Auf der Otago-Halbinsel werden Brutgebiete umzäunt, aufgeforstet und Räuber bekämpft.',
        'Kranke und hungernde Vögel werden im Wildtierkrankenhaus Dunedin gepflegt.',
        'Beim Beobachten Abstand halten – mindestens 10 m.',
      ],
      en: [
        'On the Otago Peninsula breeding areas are fenced, replanted and cleared of predators.',
        'Sick and starving birds are cared for at the Dunedin Wildlife Hospital.',
        'When watching them, keep your distance – at least 10 m.',
      ],
    },
    home: [-45.85, 170.7],
    range: [
      [-46.5, 169.5, 300],
      [-50.7, 166, 200],
    ],
    relatives: ['archaeopteryx'],
    wiki: { de: 'Gelbaugenpinguin', en: 'Yellow-eyed penguin' },
  },
  {
    id: 'humboldtpinguin',
    sci: 'Spheniscus humboldti',
    name: { de: 'Humboldtpinguin', en: 'Humboldt penguin' },
    group: 'sea-other',
    realm: 'sea',
    status: 'VU',
    population: {
      de: 'rund 30.000 erwachsene Tiere',
      en: 'about 30,000 adults',
    },
    trend: 'down',
    length: 0.65,
    weight: 4.5,
    teaser: {
      de: 'Er lebt an den Wüstenküsten Perus und Chiles, wo der kalte Humboldtstrom riesige Fischschwärme bringt.',
      en: 'It lives on the desert coasts of Peru and Chile, where the cold Humboldt Current brings huge shoals of fish.',
    },
    facts: {
      de: [
        'Früher grub er seine Nisthöhlen in meterdicke Guano-Schichten aus Vogelkot.',
        'Er ist einer der in Zoos am häufigsten gehaltenen Pinguine.',
      ],
      en: [
        'It used to dig its nest burrows into metres-thick layers of guano (bird droppings).',
        'It is one of the most commonly kept penguins in zoos.',
      ],
    },
    threats: {
      de: [
        'Der Guano-Abbau als Dünger zerstörte die Nistplätze.',
        'El Niño vertreibt die Sardellen, seine Hauptnahrung.',
        'Beifang in Stellnetzen.',
      ],
      en: [
        'Guano mining for fertiliser destroyed nesting sites.',
        'El Niño drives away anchovies, its main food.',
        'Bycatch in gillnets.',
      ],
    },
    help: {
      de: [
        'Peru schützt seit 2009 seine Guano-Inseln in einem Meeresschutzgebiet.',
        'Zoos in Europa betreiben ein Erhaltungszuchtprogramm.',
      ],
      en: [
        'Since 2009 Peru has protected its guano islands in a marine reserve.',
        'European zoos run a conservation breeding programme.',
      ],
    },
    home: [-15.2, -75.6],
    range: [
      [-12, -77, 700],
      [-28, -71.5, 900],
    ],
    relatives: ['archaeopteryx'],
    wiki: { de: 'Humboldt-Pinguin', en: 'Humboldt penguin' },
  },
  {
    id: 'kurzschwanzalbatros',
    sci: 'Phoebastria albatrus',
    name: { de: 'Kurzschwanzalbatros', en: 'Short-tailed albatross' },
    group: 'sea-other',
    realm: 'sea',
    status: 'VU',
    population: {
      de: 'rund 7.000 Vögel – nach nur etwa 50 Tieren im Jahr 1950',
      en: 'about 7,000 birds – up from only about 50 in 1950',
    },
    trend: 'up',
    length: 0.9,
    weight: 6,
    teaser: {
      de: 'Einst für ausgestorben gehalten, ist dieser Albatros heute eine der großen Comeback-Geschichten der Meere.',
      en: 'Once thought extinct, this albatross is now one of the great comeback stories of the oceans.',
    },
    facts: {
      de: [
        'Um 1900 wurden Millionen Vögel für Daunen und Federn getötet; 1949 galt er als ausgestorben.',
        'Wenige junge Vögel, die auf See gewesen waren, kehrten auf die Insel Torishima zurück und retteten die Art.',
        'Er hat einen leuchtend rosa Schnabel und einen goldgelben Kopf.',
      ],
      en: [
        'Around 1900 millions were killed for down and feathers; by 1949 it was considered extinct.',
        'A few young birds that had been at sea returned to Torishima Island and saved the species.',
        'It has a bright pink bill and a golden-yellow head.',
      ],
    },
    threats: {
      de: [
        'Torishima ist ein aktiver Vulkan – ein Ausbruch könnte die Hauptkolonie auslöschen.',
        'Beifang an Langleinen im Nordpazifik.',
        'Plastikmüll im Meer.',
      ],
      en: [
        'Torishima is an active volcano – an eruption could wipe out the main colony.',
        'Bycatch on longlines in the North Pacific.',
        'Plastic waste in the sea.',
      ],
    },
    help: {
      de: [
        'Japan schützt die Art seit 1958; auf Torishima wurden Hänge stabilisiert und Lockvögel aufgestellt.',
        'Ab 2008 wurden Küken auf die sichere Insel Mukojima umgesiedelt, wo inzwischen eine neue Kolonie brütet.',
      ],
      en: [
        'Japan has protected the species since 1958; on Torishima slopes were stabilised and decoys set up.',
        'From 2008 chicks were moved to the safe island of Mukojima, where a new colony now breeds.',
      ],
    },
    home: [30.5, 140.3],
    range: [
      [30.5, 140.3, 500],
      [45, 165, 2500],
      [55, -165, 1500],
    ],
    relatives: ['archaeopteryx'],
    wiki: { de: 'Kurzschwanzalbatros', en: 'Short-tailed albatross' },
  },
];
