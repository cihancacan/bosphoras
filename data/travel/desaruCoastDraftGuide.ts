/** Desaru Coast #88 — bilingual editorial and FAQ. Reviewed media and exact booking IDs supplied separately. */
import type {FeaturedCityGuideData} from './featuredCityGuides';
export const desaruCoastDraftGuide: Omit<FeaturedCityGuideData,'photos'|'slug'> & {slug:'desaru-coast'} = {
  "slug": "desaru-coast",
  "name": "Desaru Coast",
  "country": "Malaisie",
  "hero": "scene-1",
  "secondary": "scene-2",
  "eyebrowFr": "Malaisie · Johor, mer de Chine méridionale",
  "eyebrowEn": "Malaysia · Johor, South China Sea",
  "headingFr": "Desaru Coast, une parenthèse tropicale sur les rivages de Johor.",
  "headingEn": "Desaru Coast, a tropical escape on the shores of Johor.",
  "introFr": "À l'extrémité sud-est de la Malaisie, de longues plages, des jardins tropicaux et quelques grandes adresses composent un séjour à associer à Singapour ou à découvrir pour lui-même.",
  "introEn": "On Malaysia's southeastern shore, broad beaches, tropical gardens and a handful of distinctive resorts make for an escape in its own right or a natural addition to Singapore.",
  "editorialFr": "Desaru Coast n'est pas une île : ce littoral de Johor regarde la mer de Chine méridionale. Le choix de l'hôtel détermine le rythme du séjour. Les suites nichées dans la végétation privilégient l'intimité ; les domaines balnéaires proposent une vie plus ouverte sur la plage, les restaurants et les activités familiales.\n\nLes villas d'Anantara permettent de réunir plusieurs générations tout en conservant un espace privé. Le Mandarin Oriental, anciennement The Sirēya et auparavant One&Only, a changé d'enseigne le 30 janvier 2026. Il faut vérifier le nom et l'identité de l'établissement dans tout moteur de réservation pour éviter les résultats obsolètes. Le Westin convient à un séjour balnéaire centré sur la détente ; Hard Rock propose une ambiance plus animée à proximité du parc aquatique.\n\nConsacrer une journée au littoral, puis varier le programme entre parcours de golf, découverte guidée de la nature et promenade sur la plage publique. La baignade dépend des courants et de la météo, notamment pendant la mousson du nord-est. Les activités nautiques et les traversées peuvent être modifiées pour des raisons de sécurité.\n\nDepuis Singapour, comparer le ferry au transfert routier transfrontalier. Les horaires, formalités, port d'arrivée, correspondances et temps d'attente aux frontières doivent être vérifiés avant le départ. Depuis l'aéroport de Senai, un transfert routier mène vers la côte. Trois à quatre nuits constituent une base agréable pour alterner repos et découverte. Les chambres, tarifs et prestations doivent être confirmés auprès du partenaire de réservation.",
  "editorialEn": "Desaru Coast is not an island: this stretch of Johor faces the South China Sea. Your choice of hotel sets the pace of the stay. Suites nestled into vegetation favour privacy, while beach resorts lend themselves to time by the sea, dining and family activities.\n\nAnantara's villas can bring generations together while retaining private space. Mandarin Oriental, formerly The Sirēya and before that One&Only, changed its name on 30 January 2026. Confirm the property identity in any booking engine to avoid outdated listings. The Westin suits a relaxation-led beach break; Hard Rock offers a livelier setting near the waterpark.\n\nKeep a day for the shoreline, then vary your plans with golf, guided nature experiences and a walk on the public beach. Swimming depends on currents and weather, particularly during the northeast monsoon. Marine activities and ferry crossings can change for safety reasons.\n\nFrom Singapore, compare the ferry with a cross-border road transfer. Verify schedules, entry formalities, arrival port, connections and border delays before departure. A road transfer connects Senai Airport with the coast. Three to four nights is a useful starting point for balancing relaxation and discovery. Confirm room categories, prices and inclusions with the booking partner.",
  "hotelIntroFr": "Quatre adresses distinctes : retraite en forêt, villa balnéaire, séjour bien-être et escapade familiale animée.",
  "hotelIntroEn": "Four distinct addresses: a rainforest sanctuary, seaside villas, a wellness-led stay and a lively family escape.",
  "areas": [
    {
      "name": "Littoral de Desaru Coast",
      "enName": "Desaru Coast shoreline",
      "fr": "Les resorts donnent accès à différentes portions de côte. Choisir la plage et l'ambiance avant la catégorie de chambre.",
      "en": "The resorts occupy different stretches of shore. Choose the beach and atmosphere before the room category.",
      "frWatch": "Respecter les drapeaux et consignes locales de baignade.",
      "enWatch": "Observe local swimming flags and instructions."
    },
    {
      "name": "Persiaran Damai",
      "enName": "Persiaran Damai",
      "fr": "Une atmosphère plus retirée, où la forêt descend vers la mer.",
      "en": "A secluded setting where rainforest meets the sea.",
      "frWatch": "Vérifier les déplacements dans le domaine.",
      "enWatch": "Check transport within the estate."
    },
    {
      "name": "Pantai Desaru",
      "enName": "Pantai Desaru",
      "fr": "La plage publique offre un autre regard sur le littoral de Johor.",
      "en": "The public beach offers a different perspective on Johor's coastline.",
      "frWatch": "Prévoir un transport et vérifier les conditions de mer.",
      "enWatch": "Arrange transport and check sea conditions."
    },
    {
      "name": "Adventure Waterpark et Riverside",
      "enName": "Adventure Waterpark and Riverside",
      "fr": "Un secteur tourné vers les activités de loisirs, particulièrement adapté aux familles.",
      "en": "A leisure-oriented area particularly suited to families.",
      "frWatch": "Vérifier les jours d'ouverture, conditions d'accès et restrictions de taille.",
      "enWatch": "Check opening days, access terms and height restrictions."
    },
    {
      "name": "The Els Club",
      "enName": "The Els Club",
      "fr": "Les parcours Ocean et Valley offrent deux cadres différents pour jouer au golf.",
      "en": "The Ocean and Valley courses offer two different settings for golf.",
      "frWatch": "Réserver les départs et vérifier les règles de jeu.",
      "enWatch": "Reserve tee times and confirm playing requirements."
    },
    {
      "name": "Bandar Penawar et environs",
      "enName": "Bandar Penawar and surroundings",
      "fr": "Sortir du domaine pour découvrir marchés, produits locaux et paysages de Johor.",
      "en": "Leave the resort enclave to discover local markets, produce and Johor landscapes.",
      "frWatch": "Confirmer les heures d'ouverture des visites.",
      "enWatch": "Confirm opening hours for visits."
    }
  ],
  "experiences": [
    {
      "frTitle": "Une journée au bord de la mer",
      "enTitle": "A day by the sea",
      "fr": "Profiter de la plage lorsque les conditions le permettent, sans multiplier les transferts.",
      "en": "Enjoy the beach when conditions allow, without unnecessary transfers."
    },
    {
      "frTitle": "Les parcours de The Els Club",
      "enTitle": "Golf at The Els Club",
      "fr": "Choisir le parcours selon son niveau et réserver les départs à l'avance.",
      "en": "Choose a course to match your level and reserve tee times in advance."
    },
    {
      "frTitle": "Adventure Waterpark en famille",
      "enTitle": "Adventure Waterpark with children",
      "fr": "Organiser une journée en tenant compte des restrictions de taille et des horaires.",
      "en": "Plan a day around height restrictions and opening hours."
    },
    {
      "frTitle": "Découverte des mangroves",
      "enTitle": "Mangrove discovery",
      "fr": "Privilégier une sortie guidée respectueuse de la faune, selon les conditions de navigation.",
      "en": "Choose a wildlife-conscious guided outing, subject to navigation conditions."
    },
    {
      "frTitle": "Saveurs de Johor",
      "enTitle": "Flavours of Johor",
      "fr": "Explorer les fruits tropicaux et la cuisine locale lors d'une sortie hors du domaine.",
      "en": "Discover tropical fruit and local cooking on an outing beyond the resort."
    }
  ],
  "checksFr": [
    "Confirmer l'identité actuelle de l'hôtel et la catégorie exacte.",
    "Comparer les trajets depuis Singapour ou Senai.",
    "Vérifier les formalités frontalières et les horaires de ferry.",
    "Vérifier l'occupation et la sécurité des piscines avec les enfants.",
    "Contrôler les inclusions, les conditions d'annulation et les conditions de baignade."
  ],
  "checksEn": [
    "Confirm the current hotel identity and exact room category.",
    "Compare transfers from Singapore and Senai.",
    "Check border formalities and ferry timetables.",
    "Check occupancy and pool safety when travelling with children.",
    "Confirm inclusions, cancellation terms and swimming conditions."
  ],
  "hotels": [
    {
      "name": "Mandarin Oriental, Desaru Coast",
      "area": "Persiaran Damai · forêt et littoral",
      "officialUrl": "https://www.mandarinoriental.com/en/desaru-coast/kota-tinggi/stay",
      "fr": "Des suites avec bassin privé et une villa de quatre chambres dans un domaine forestier. L'ancienne adresse One&Only, devenue The Sirēya, porte son nom actuel depuis le 30 janvier 2026.",
      "en": "Suites with private plunge pools and a four-bedroom villa in a rainforest estate. The former One&Only, later The Sirēya, has carried its current name since 30 January 2026.",
      "frWatch": "Une vue mer partielle n'est pas une vue panoramique ni un accès direct à la plage.",
      "enWatch": "A partial ocean view is not a panoramic view or direct beach access."
    },
    {
      "name": "Anantara Desaru Coast Resort & Villas",
      "area": "Persiaran Pantai · plage",
      "officialUrl": "https://www.anantara.com/en/desaru-coast",
      "fr": "Chambres, villas indépendantes et résidences plus vastes autour de jardins tropicaux, pour un séjour en couple ou en famille.",
      "en": "Rooms, standalone villas and larger residences set among tropical gardens suit couples and families.",
      "frWatch": "Comparer le type de piscine, le nombre de chambres et les services inclus selon la catégorie.",
      "enWatch": "Compare pool type, bedroom count and included services by category."
    },
    {
      "name": "The Westin Desaru Coast Resort",
      "area": "Jalan Pantai · bord de mer",
      "officialUrl": "https://www.marriott.com/en-us/hotels/jhbwi-the-westin-desaru-coast-resort/rooms/",
      "fr": "Chambres et suites balnéaires, avec une approche axée sur le repos et le bien-être. Certaines catégories offrent un balcon et une vue mer.",
      "en": "Beach resort rooms and suites with an emphasis on relaxation and wellness. Selected categories offer balconies and sea views.",
      "frWatch": "Vérifier la vue, les couchages et les suppléments pour les personnes additionnelles.",
      "enWatch": "Check the outlook, bedding and additional guest charges."
    },
    {
      "name": "Hard Rock Hotel Desaru Coast",
      "area": "Jalan Pantai 3 · loisirs",
      "officialUrl": "https://hotel.hardrock.com/desaru-coast/rooms-and-suites.aspx",
      "fr": "Une adresse contemporaine à l'esprit musical, orientée vers les familles et les loisirs près du parc aquatique. Les chambres doubles et les suites duplex répondent à des besoins différents.",
      "en": "A contemporary music-themed hotel focused on families and leisure near the waterpark. Double rooms and duplex suites serve different needs.",
      "frWatch": "Confirmer les billets de parc, l'accès au club enfants et la capacité dans le tarif sélectionné.",
      "enWatch": "Confirm park tickets, kids' club access and occupancy for the selected rate."
    }
  ]
};
export const desaruCoastDraftFaq = {
  "fr": [
    {
      "q": "Où se trouve Desaru Coast ?",
      "a": "Sur la côte sud-est de Johor, en Malaisie, face à la mer de Chine méridionale."
    },
    {
      "q": "Combien de nuits prévoir ?",
      "a": "Trois à quatre nuits donnent le temps de profiter de la plage et des activités."
    },
    {
      "q": "Comment venir depuis Singapour ?",
      "a": "Comparer ferry et transfert routier transfrontalier, puis vérifier horaires et formalités."
    },
    {
      "q": "Quel aéroport choisir ?",
      "a": "Senai est une option pour rejoindre Johor par voie routière ; Singapour peut convenir à un itinéraire combiné."
    },
    {
      "q": "Quel hôtel a remplacé One&Only ?",
      "a": "L'établissement, passé par le nom The Sirēya, est devenu Mandarin Oriental, Desaru Coast le 30 janvier 2026."
    },
    {
      "q": "Tous les hôtels ont-ils des villas privées ?",
      "a": "Non. Vérifier la catégorie précise et les équipements auprès du partenaire."
    },
    {
      "q": "Le parc aquatique est-il compris ?",
      "a": "Cela dépend du tarif et des conditions d'accès. Vérifier avant de réserver."
    },
    {
      "q": "Peut-on se baigner toute l'année ?",
      "a": "La baignade dépend des conditions de mer et des consignes locales, particulièrement pendant la mousson."
    },
    {
      "q": "Peut-on jouer au golf ?",
      "a": "The Els Club propose les parcours Ocean et Valley ; vérifier les départs disponibles."
    },
    {
      "q": "Les photos garantissent-elles la chambre ?",
      "a": "Non. La catégorie, les équipements, les tarifs et les conditions de réservation sont à confirmer."
    }
  ],
  "en": [
    {
      "q": "Where is Desaru Coast?",
      "a": "On the southeastern coast of Johor, Malaysia, facing the South China Sea."
    },
    {
      "q": "How many nights should I plan?",
      "a": "Three to four nights allow time for the beach and local activities."
    },
    {
      "q": "How do I get there from Singapore?",
      "a": "Compare ferry and cross-border road transfers, then verify schedules and entry requirements."
    },
    {
      "q": "Which airport should I choose?",
      "a": "Senai is an option for road access in Johor; Singapore can suit a combined itinerary."
    },
    {
      "q": "What replaced One&Only?",
      "a": "The property, formerly also known as The Sirēya, became Mandarin Oriental, Desaru Coast on 30 January 2026."
    },
    {
      "q": "Do all hotels have private villas?",
      "a": "No. Check the exact category and facilities with the booking partner."
    },
    {
      "q": "Is waterpark entry included?",
      "a": "It depends on the rate and admission terms. Verify before booking."
    },
    {
      "q": "Can I swim throughout the year?",
      "a": "Swimming depends on sea conditions and local guidance, particularly during the monsoon."
    },
    {
      "q": "Can I play golf?",
      "a": "The Els Club offers Ocean and Valley courses; check available tee times."
    },
    {
      "q": "Do photos guarantee the booked room?",
      "a": "No. Confirm the category, facilities, rates and booking conditions."
    }
  ]
};
/** Source links for editorial verification only; do not expose as booking CTAs. */
export const desaruCoastDraftSources = [
  "https://www.desarucoast.com/stay",
  "https://www.desarucoast.com/",
  "https://press.mandarinoriental.com/desaru-coast-rebranding/?lang=eng",
  "https://www.mandarinoriental.com/en/desaru-coast/kota-tinggi/stay",
  "https://www.anantara.com/en/desaru-coast",
  "https://www.marriott.com/en-us/hotels/jhbwi-the-westin-desaru-coast-resort/rooms/",
  "https://hotel.hardrock.com/desaru-coast/rooms-and-suites.aspx",
  "https://desaruferries.com/about/",
  "https://www.elsclubmalaysia.com/stay-play-in-desaru/",
  "https://commons.wikimedia.org/wiki/Category:Desaru_Beach",
  "https://commons.wikimedia.org/wiki/File:Desaru_Beach.jpg"
];
