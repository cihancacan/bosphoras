/** Destination #91: bilingual editorial draft. Not registered or indexable. Media, booking IDs and remaining locales require verification before release. */
import type {FeaturedCityGuideData} from './featuredCityGuides';
export const romeDraftGuide: Omit<FeaturedCityGuideData,'photos'|'slug'> & {slug:'rome'} = {
  "slug": "rome",
  "name": "Rome",
  "country": "Italie",
  "hero": "scene-1",
  "secondary": "scene-2",
  "eyebrowFr": "Italie · Patrimoine, places et palaces",
  "eyebrowEn": "Italy · Heritage, piazzas and grand hotels",
  "headingFr": "Rome : vivre la ville éternelle depuis le bon quartier.",
  "headingEn": "Rome: experience the Eternal City from the right neighbourhood.",
  "introFr": "Les places du centre historique, les jardins du Pincio et les ruelles de Trastevere composent une capitale à découvrir à pied. Un hôtel au pied de la Piazza di Spagna n’offre pas la même expérience qu’une adresse sur une colline ou près du Vatican.",
  "introEn": "Historic piazzas, Pincian gardens and Trastevere lanes make Rome a city to explore on foot. A hotel near Piazza di Spagna offers a different stay from a hilltop address or one near the Vatican.",
  "editorialFr": "Le centre historique permet de relier le Panthéon, Piazza Navona et la fontaine de Trevi. Campo Marzio et les environs de la Piazza di Spagna accueillent les grandes adresses et les boutiques. Prati facilite les visites du Vatican, Monti celles du Colisée et des forums, tandis que Trastevere est particulièrement agréable pour les soirées et les trattorias.\n\nQuatre nuits donnent le temps de consacrer une journée au patrimoine antique, une au Vatican, une au centre et une aux jardins ou aux quartiers résidentiels. Réservez les billets officiels des sites à accès limité et évitez les allers-retours inutiles. L’été, privilégiez les visites tôt le matin et les pauses à l’ombre.\n\nDepuis Fiumicino, comparez train vers Termini, taxi officiel et transfert privé ; Ciampino nécessite une organisation différente. Dans le centre, les pavés, les pentes et les zones de circulation limitée rendent certains trajets moins faciles avec bagages ou poussette. Comparez le prix final, la taxe de séjour et les prestations de la catégorie retenue.",
  "editorialEn": "The historic centre links the Pantheon, Piazza Navona and Trevi Fountain. Campo Marzio and Piazza di Spagna host landmark hotels and boutiques. Prati is convenient for the Vatican, Monti for the Colosseum and forums, and Trastevere for evenings and trattorias.\n\nFour nights allow a day each for ancient Rome, the Vatican, the centre and gardens or residential areas. Reserve official timed tickets for restricted-capacity sites and avoid unnecessary cross-city journeys. In summer, visit early and pause in the shade.\n\nFrom Fiumicino, compare rail to Termini, official taxis and private transfers; Ciampino requires different arrangements. Cobblestones, slopes and restricted traffic zones can complicate journeys with luggage or strollers. Compare final prices, visitor tax and inclusions for the chosen room category.",
  "hotelIntroFr": "Quatre adresses historiques ou contemporaines : Bvlgari Hotel Roma, Hotel de Russie, Hassler Roma et Hotel Eden.",
  "hotelIntroEn": "Four historic or contemporary addresses: Bvlgari Hotel Roma, Hotel de Russie, Hassler Roma and Hotel Eden.",
  "areas": [
    {
      "name": "Centro Storico",
      "enName": "Historic centre",
      "fr": "Panthéon, Piazza Navona, Trevi et promenades entre les places.",
      "en": "Pantheon, Piazza Navona, Trevi and piazza-to-piazza walks.",
      "frWatch": "Les pavés et la circulation limitée compliquent certains transferts.",
      "enWatch": "Cobblestones and traffic restrictions complicate some transfers."
    },
    {
      "name": "Campo Marzio et Piazza di Spagna",
      "enName": "Campo Marzio and Piazza di Spagna",
      "fr": "Boutiques, palais, grandes adresses et accès au Pincio.",
      "en": "Boutiques, palaces, landmark hotels and Pincian Hill access.",
      "frWatch": "Vérifier les escaliers et la pente depuis l’hôtel.",
      "enWatch": "Check stairs and slopes from the hotel."
    },
    {
      "name": "Monti et Colisée",
      "enName": "Monti and Colosseum",
      "fr": "Patrimoine antique, cafés et petites rues.",
      "en": "Ancient heritage, cafés and small streets.",
      "frWatch": "Réserver les visites à horaires limités.",
      "enWatch": "Reserve timed visits."
    },
    {
      "name": "Prati et Vatican",
      "enName": "Prati and Vatican",
      "fr": "Avenues, commerces et proximité des musées du Vatican.",
      "en": "Avenues, shops and proximity to the Vatican Museums.",
      "frWatch": "Ne pas confondre proximité du Vatican et du Colisée.",
      "enWatch": "Vatican proximity is not Colosseum proximity."
    },
    {
      "name": "Trastevere",
      "enName": "Trastevere",
      "fr": "Ruelles, restaurants et ambiance du soir.",
      "en": "Lanes, restaurants and evening atmosphere.",
      "frWatch": "Le bruit et les pavés varient selon la rue.",
      "enWatch": "Noise and cobblestones vary by street."
    }
  ],
  "experiences": [
    {
      "frTitle": "Rome antique",
      "enTitle": "Ancient Rome",
      "fr": "Consacrer une demi-journée ou davantage au Colisée et au Forum selon les billets disponibles.",
      "en": "Allow at least half a day for the Colosseum and Forum according to ticket availability."
    },
    {
      "frTitle": "Les places du centre",
      "enTitle": "Central piazzas",
      "fr": "Relier le Panthéon, Trevi et Piazza Navona sans multiplier les transports.",
      "en": "Link the Pantheon, Trevi and Piazza Navona without extra transfers."
    },
    {
      "frTitle": "Villa Borghese",
      "enTitle": "Villa Borghese",
      "fr": "Alterner jardins et visite de galerie si réservation disponible.",
      "en": "Combine gardens with a gallery visit if tickets are available."
    },
    {
      "frTitle": "Une soirée à Trastevere",
      "enTitle": "An evening in Trastevere",
      "fr": "Choisir une trattoria et se promener sur la rive du Tibre.",
      "en": "Choose a trattoria and walk by the Tiber."
    }
  ],
  "checksFr": [
    "Comparer la pente et l’accessibilité de l’adresse.",
    "Réserver les visites à capacité limitée.",
    "Vérifier les couchages et chambres communicantes.",
    "Comparer le prix final, taxe de séjour et inclusions.",
    "Organiser l’aéroport et l’arrivée dans le centre historique."
  ],
  "checksEn": [
    "Compare slopes and property accessibility.",
    "Book limited-capacity attractions.",
    "Check bedding and connecting rooms.",
    "Compare final price, visitor tax and inclusions.",
    "Plan airport transfer and historic-centre arrival."
  ],
  "hotels": [
    {
      "name": "Bvlgari Hotel Roma",
      "area": "Campo Marzio · Piazza Augusto Imperatore",
      "officialUrl": "https://www.bulgarihotels.com/en-US/rome/the-hotel",
      "fr": "L’adresse contemporaine sur la Piazza Augusto Imperatore met en avant les matériaux italiens, les chambres et suites de styles variés et la gastronomie. Via del Corso et les boutiques sont proches.",
      "en": "This contemporary Piazza Augusto Imperatore address emphasises Italian materials, varied rooms and suites and dining. Via del Corso and boutiques are nearby.",
      "frWatch": "Comparer les vues sur la place et les rues adjacentes.",
      "enWatch": "Compare square-facing and adjacent-street views."
    },
    {
      "name": "Hotel de Russie",
      "area": "Via del Babuino · Piazza del Popolo",
      "officialUrl": "https://www.roccofortehotels.com/hotels-and-resorts/hotel-de-russie/",
      "fr": "Le jardin intérieur crée une parenthèse à proximité de Piazza del Popolo. Les chambres, suites et espaces de restauration conviennent à une découverte de Campo Marzio et du Pincio.",
      "en": "The inner garden offers a retreat near Piazza del Popolo. Rooms, suites and dining provide a base for Campo Marzio and the Pincian Hill.",
      "frWatch": "Confirmer la vue jardin et la configuration familiale.",
      "enWatch": "Confirm garden view and family layout."
    },
    {
      "name": "Hassler Roma",
      "area": "Trinità dei Monti · Piazza di Spagna",
      "officialUrl": "https://www.hotelhasslerroma.com/stay/",
      "fr": "Au sommet de l’escalier de la Trinité-des-Monts, le Hassler associe tradition et chambres à la décoration individuelle. Certaines catégories offrent des terrasses ou de larges vues.",
      "en": "Above the Spanish Steps, Hassler combines tradition with individually designed rooms. Some categories offer terraces or extensive views.",
      "frWatch": "Vérifier les escaliers, les accès et la catégorie exacte.",
      "enWatch": "Check steps, access routes and exact category."
    },
    {
      "name": "Hotel Eden",
      "area": "Via Ludovisi · Villa Borghese",
      "officialUrl": "https://www.dorchestercollection.com/rome/hotel-eden",
      "fr": "L’Hotel Eden privilégie une atmosphère classique, le spa et une perspective sur les toits romains. Sa position près de Villa Borghese est différente d’une adresse directement sur une place du centre.",
      "en": "Hotel Eden favours a classic atmosphere, spa and a rooftop perspective. Its location near Villa Borghese differs from a hotel directly on a central piazza.",
      "frWatch": "Comparer orientation, terrasse, accès à pied et services inclus.",
      "enWatch": "Compare outlook, terrace, walking access and inclusions."
    }
  ]
};
export const romeDraftFaq = {
  "fr": [
    {
      "q": "Où dormir à Rome pour une première visite ?",
      "a": "Centro Storico et Campo Marzio offrent une base centrale ; Monti convient aux visites antiques."
    },
    {
      "q": "Quel quartier choisir près du Vatican ?",
      "a": "Prati permet de limiter les trajets vers les musées du Vatican."
    },
    {
      "q": "Combien de nuits prévoir ?",
      "a": "Quatre nuits constituent une bonne base, avec davantage de temps pour les musées et quartiers."
    },
    {
      "q": "Quel hôtel choisir pour une vue panoramique ?",
      "a": "Comparer les catégories du Hassler et de l’Hotel Eden ; une vue précise n’est pas garantie dans toutes les chambres."
    },
    {
      "q": "Faut-il une voiture ?",
      "a": "Dans le centre, la marche et les transports sont souvent préférables à la voiture en raison des restrictions de circulation."
    },
    {
      "q": "Comment venir de Fiumicino ?",
      "a": "Comparer le train vers Termini, le taxi officiel et le transfert privé."
    },
    {
      "q": "Comment comparer les hôtels ?",
      "a": "Comparer catégories, vues, couchages, taxe de séjour et conditions pour les mêmes dates."
    }
  ],
  "en": [
    {
      "q": "Where to stay on a first visit to Rome?",
      "a": "Centro Storico and Campo Marzio are central; Monti suits ancient sights."
    },
    {
      "q": "Which neighbourhood is near the Vatican?",
      "a": "Prati limits journeys to the Vatican Museums."
    },
    {
      "q": "How many nights should I plan?",
      "a": "Four nights are a useful base, with extra time for museums and neighbourhoods."
    },
    {
      "q": "Which hotel offers panoramic views?",
      "a": "Compare Hassler and Hotel Eden categories; a particular view is not guaranteed in every room."
    },
    {
      "q": "Do I need a car?",
      "a": "Walking and public transport are often preferable in the historic centre because of traffic restrictions."
    },
    {
      "q": "How do I get from Fiumicino?",
      "a": "Compare rail to Termini, official taxis and private transfers."
    },
    {
      "q": "How should I compare hotels?",
      "a": "Compare categories, views, bedding, visitor tax and terms for the same dates."
    }
  ]
};
export const romeDraftSeo = {
  "fr": {
    "title": "Où dormir à Rome ? Meilleurs quartiers et hôtels de luxe",
    "hotelTitle": "Hôtels de luxe à Rome : Bvlgari, de Russie, Hassler et Eden",
    "description": "Comparez les quartiers de Rome et quatre hôtels de luxe : centre historique, Piazza di Spagna, Vatican, vues et transferts."
  },
  "en": {
    "title": "Where to Stay in Rome: Best Areas & Luxury Hotels",
    "hotelTitle": "Luxury Hotels in Rome: Bvlgari, de Russie, Hassler & Eden",
    "description": "Compare Rome neighbourhoods and four luxury hotels: historic centre, Spanish Steps, Vatican, room views and airport transfers."
  }
};
export const romeDraftSources = [
  "https://www.turismoroma.it/en/page/districts",
  "https://www.bulgarihotels.com/en-US/rome/the-hotel",
  "https://www.roccofortehotels.com/hotels-and-resorts/hotel-de-russie/",
  "https://www.hotelhasslerroma.com/stay/",
  "https://www.dorchestercollection.com/rome/hotel-eden"
];
