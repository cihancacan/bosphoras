/** Destination #90: bilingual editorial draft. Not registered or indexable. Media, booking IDs and remaining locales require verification before release. */
import type {FeaturedCityGuideData} from './featuredCityGuides';
export const lasVegasDraftGuide: Omit<FeaturedCityGuideData,'photos'|'slug'> & {slug:'las-vegas'} = {
  "slug": "las-vegas",
  "name": "Las Vegas",
  "country": "États-Unis",
  "hero": "scene-1",
  "secondary": "scene-2",
  "eyebrowFr": "Nevada · Resorts, spectacles et désert",
  "eyebrowEn": "Nevada · Resorts, shows and desert",
  "headingFr": "Las Vegas : les grands resorts, au-delà des lumières du Strip.",
  "headingEn": "Las Vegas: landmark resorts beyond the lights of the Strip.",
  "introFr": "Las Vegas est une destination hôtelière à part entière. Les fontaines de Bellagio, les suites du Venetian, les jardins du Wynn et l’architecture contemporaine du Fontainebleau composent des séjours différents. La localisation compte autant que le prix affiché.",
  "introEn": "Las Vegas is a hotel destination in its own right. Bellagio’s fountains, Venetian suites, Wynn’s gardens and contemporary Fontainebleau architecture offer distinct stays. Location matters as much as the displayed rate.",
  "editorialFr": "Le Strip central facilite les visites des grands hôtels et spectacles, mais les complexes sont immenses : un trajet apparemment court peut inclure de longs couloirs, des passerelles et des escalators. Le nord du Strip est plus éloigné de certaines attractions centrales. Downtown, Fremont Street et l’Arts District révèlent une autre ville, tournée vers l’histoire, les arts et les restaurants indépendants.\n\nPour deux ou trois nuits, concentrez les visites sur deux secteurs. Avec des enfants, comparez les piscines, les restrictions d’âge et les activités sans jeu. L’été peut être extrêmement chaud ; privilégiez les activités climatisées et gardez les promenades pour les périodes plus fraîches. Les excursions vers Red Rock Canyon ou Hoover Dam nécessitent un transport et une préparation adaptés à la météo.\n\nUne chambre à prix bas peut revenir plus cher après taxes, resort fees, parking et options. Comparez le montant final pour le séjour, distinguez les frais obligatoires des extras et vérifiez si le dépôt de garantie est une préautorisation remboursable. En période de congrès ou de grands événements, les tarifs varient fortement. Depuis Harry Reid International Airport, comparez taxi, navette, transport public et transfert privé selon votre hôtel.",
  "editorialEn": "The central Strip makes landmark resorts and shows easy to combine, but properties are huge: an apparently short trip may involve corridors, footbridges and escalators. The north Strip is farther from some central attractions. Downtown, Fremont Street and the Arts District reveal a different city focused on history, art and independent dining.\n\nFor two or three nights, focus on two areas. With children, compare pools, age restrictions and non-gaming activities. Summers can be extremely hot; favour air-conditioned activities and walk during cooler periods. Trips to Red Rock Canyon or Hoover Dam need suitable transport and weather planning.\n\nA low room rate can cost more after taxes, resort fees, parking and extras. Compare the final stay total, distinguish mandatory charges from optional extras and check whether a security deposit is a refundable card hold. Convention and event dates can change rates substantially. From Harry Reid International Airport, compare taxis, shuttles, public transport and private transfers according to your hotel.",
  "hotelIntroFr": "Quatre profils : Bellagio au cœur du Strip, Wynn pour un resort de luxe, The Venetian pour les suites et Fontainebleau pour le design contemporain.",
  "hotelIntroEn": "Four profiles: central Strip Bellagio, luxury resort Wynn, suite-focused Venetian and contemporary Fontainebleau.",
  "areas": [
    {
      "name": "Strip central",
      "enName": "Central Strip",
      "fr": "Fontaines de Bellagio, grands resorts, restaurants et spectacles.",
      "en": "Bellagio fountains, landmark resorts, restaurants and shows.",
      "frWatch": "Tenir compte des distances réelles dans les complexes.",
      "enWatch": "Allow for real walking distances inside resorts."
    },
    {
      "name": "Strip nord",
      "enName": "North Strip",
      "fr": "Wynn et Fontainebleau, shopping et resorts contemporains.",
      "en": "Wynn and Fontainebleau, shopping and contemporary resorts.",
      "frWatch": "Prévoir un transport vers les attractions éloignées.",
      "enWatch": "Plan transport to more distant sights."
    },
    {
      "name": "Strip sud",
      "enName": "South Strip",
      "fr": "Grands complexes et accès au secteur de l’aéroport.",
      "en": "Major resorts and access to the airport area.",
      "frWatch": "Vérifier l’adresse et la distance à pied vers le centre.",
      "enWatch": "Check address and walking distance to the centre."
    },
    {
      "name": "Downtown et Fremont Street",
      "enName": "Downtown and Fremont Street",
      "fr": "Ambiance historique, spectacles de rue et restaurants.",
      "en": "Historic atmosphere, street entertainment and restaurants.",
      "frWatch": "Le bruit du soir varie fortement selon la rue.",
      "enWatch": "Evening noise varies substantially by street."
    },
    {
      "name": "Arts District",
      "enName": "Arts District",
      "fr": "Galeries, cafés et commerces indépendants.",
      "en": "Galleries, cafés and independent shops.",
      "frWatch": "Organiser le retour après les sorties.",
      "enWatch": "Plan the journey back after evenings out."
    }
  ],
  "experiences": [
    {
      "frTitle": "Fontaines et jardins",
      "enTitle": "Fountains and gardens",
      "fr": "Associer les fontaines de Bellagio aux espaces publics du resort.",
      "en": "Combine Bellagio fountains with the resort’s public spaces."
    },
    {
      "frTitle": "Une soirée de spectacle",
      "enTitle": "A show evening",
      "fr": "Choisir la salle avant l’hôtel pour limiter les trajets de nuit.",
      "en": "Choose the venue before the hotel to limit late-night travel."
    },
    {
      "frTitle": "Arts District et Downtown",
      "enTitle": "Arts District and Downtown",
      "fr": "Explorer les galeries et restaurants indépendants.",
      "en": "Explore galleries and independent restaurants."
    },
    {
      "frTitle": "Une escapade dans le désert",
      "enTitle": "A desert escape",
      "fr": "Prévoir eau, horaires et transport pour une excursion adaptée à la chaleur.",
      "en": "Plan water, timing and transport for a heat-appropriate trip."
    }
  ],
  "checksFr": [
    "Comparer le prix final, taxes et frais obligatoires inclus.",
    "Vérifier les politiques de dépôt et de parking.",
    "Choisir une chambre selon vue, étage et calme.",
    "Confirmer les règles d’âge des piscines et l’occupation familiale.",
    "Comparer dates de congrès et événements avec des dates flexibles."
  ],
  "checksEn": [
    "Compare final totals including taxes and mandatory fees.",
    "Check deposit and parking policies.",
    "Choose the room for view, floor and quiet.",
    "Confirm pool age rules and family occupancy.",
    "Compare convention and event dates with flexible alternatives."
  ],
  "hotels": [
    {
      "name": "Bellagio",
      "area": "Strip central",
      "officialUrl": "https://bellagio.mgmresorts.com/en/hotel.html",
      "fr": "Le resort emblématique du Strip permet de combiner spectacles, jardins et fontaines. Les chambres Fountain View constituent une catégorie particulière ; toutes les chambres ne donnent pas sur le lac.",
      "en": "The landmark Strip resort combines shows, gardens and fountains. Fountain View rooms are a distinct category; not every room overlooks the lake.",
      "frWatch": "Confirmer la catégorie et le montant total avec frais obligatoires.",
      "enWatch": "Confirm the category and total with mandatory fees."
    },
    {
      "name": "Wynn Las Vegas",
      "area": "Strip nord",
      "officialUrl": "https://www.wynnlasvegas.com/rooms-and-suites",
      "fr": "Le Wynn privilégie l’élégance contemporaine, les restaurants et les espaces paysagers. Les chambres Wynn et les suites Encore constituent des offres distinctes au sein du complexe.",
      "en": "Wynn emphasises contemporary elegance, dining and landscaped spaces. Wynn rooms and Encore suites are distinct offers within the resort complex.",
      "frWatch": "Vérifier le bâtiment exact, le type de chambre et les règles de piscine.",
      "enWatch": "Check the exact building, room type and pool rules."
    },
    {
      "name": "The Venetian Resort Las Vegas",
      "area": "Strip central-nord",
      "officialUrl": "https://www.venetianlasvegas.com/hotel/suites.html",
      "fr": "Les suites spacieuses et le décor inspiré de Venise donnent une forte identité au séjour. Les tours Venetian et Palazzo proposent des configurations différentes ; la localisation de la suite peut modifier les parcours internes.",
      "en": "Spacious suites and Venetian-inspired decor give the stay a strong identity. Venetian and Palazzo towers have different layouts; suite location can affect internal walking distances.",
      "frWatch": "Comparer tour, couchages, vue et occupation autorisée.",
      "enWatch": "Compare tower, bedding, view and permitted occupancy."
    },
    {
      "name": "Fontainebleau Las Vegas",
      "area": "Strip nord",
      "officialUrl": "https://www.fontainebleaulasvegas.com/rooms-and-suites/all-accommodations/",
      "fr": "Une adresse contemporaine en hauteur, avec chambres et suites de différentes tailles et orientations. Elle convient aux voyageurs attirés par une architecture récente et un séjour centré sur le resort.",
      "en": "A contemporary high-rise address with rooms and suites of varying sizes and outlooks. It suits travellers drawn to modern architecture and a resort-led stay.",
      "frWatch": "Confirmer les vues Strip ou montagne et les trajets vers le centre.",
      "enWatch": "Confirm Strip or mountain views and journeys towards the centre."
    }
  ]
};
export const lasVegasDraftFaq = {
  "fr": [
    {
      "q": "Où dormir à Las Vegas la première fois ?",
      "a": "Le Strip central est pratique pour les fontaines et grands spectacles ; le nord convient à un séjour centré sur Wynn ou Fontainebleau."
    },
    {
      "q": "Quel hôtel offre la vue sur les fontaines ?",
      "a": "Certaines chambres Bellagio sont vendues comme Fountain View ; vérifier la catégorie exacte."
    },
    {
      "q": "Qu’est-ce qu’un resort fee ?",
      "a": "Un supplément d’hébergement obligatoire lorsqu’il s’applique ; comparez le total taxes et frais inclus."
    },
    {
      "q": "Las Vegas convient-elle aux familles ?",
      "a": "Oui pour les activités hors jeu ; vérifier piscines, couchages, règles d’âge et accès des enfants."
    },
    {
      "q": "Combien de nuits prévoir ?",
      "a": "Deux à trois nuits pour une découverte du Strip, davantage avec Downtown et excursions."
    },
    {
      "q": "Faut-il louer une voiture ?",
      "a": "Pas nécessaire pour un séjour centré sur le Strip ; utile pour certaines excursions si adaptée au programme."
    },
    {
      "q": "Comment trouver le meilleur tarif ?",
      "a": "Comparer le prix final aux mêmes dates, avec les mêmes conditions et l’occupation réelle."
    }
  ],
  "en": [
    {
      "q": "Where should first-time visitors stay?",
      "a": "The central Strip suits fountains and major shows; the north suits a Wynn or Fontainebleau-focused stay."
    },
    {
      "q": "Which hotel overlooks the fountains?",
      "a": "Some Bellagio rooms are sold as Fountain View; check the exact category."
    },
    {
      "q": "What is a resort fee?",
      "a": "A mandatory accommodation charge where applicable; compare totals including taxes and fees."
    },
    {
      "q": "Does Las Vegas suit families?",
      "a": "Yes for non-gaming activities; check pools, bedding, age rules and child access."
    },
    {
      "q": "How many nights should I plan?",
      "a": "Two or three nights for the Strip, longer with Downtown and excursions."
    },
    {
      "q": "Do I need to rent a car?",
      "a": "Not necessary for a Strip-focused stay; useful for some excursions if it suits the itinerary."
    },
    {
      "q": "How can I find the best rate?",
      "a": "Compare final totals for matching dates, terms and actual occupancy."
    }
  ]
};
export const lasVegasDraftSeo = {
  "fr": {
    "title": "Où dormir à Las Vegas ? Strip, quartiers et meilleurs hôtels",
    "hotelTitle": "Hôtels de Las Vegas : Bellagio, Wynn, Venetian et Fontainebleau",
    "description": "Comparez les hôtels de Las Vegas, les quartiers du Strip, les suites et les prix totaux avec taxes et frais de resort."
  },
  "en": {
    "title": "Where to Stay in Las Vegas: Strip Areas & Best Hotels",
    "hotelTitle": "Las Vegas Hotels: Bellagio, Wynn, Venetian & Fontainebleau",
    "description": "Compare Las Vegas hotels, Strip locations, suites and total stay prices including mandatory resort fees and taxes."
  }
};
export const lasVegasDraftSources = [
  "https://www.visitlasvegas.com/plan/getting-here-and-around/maps/",
  "https://www.lasvegasnevada.gov/Visitors/Downtown",
  "https://bellagio.mgmresorts.com/en/hotel.html",
  "https://www.wynnlasvegas.com/rooms-and-suites",
  "https://www.venetianlasvegas.com/hotel/suites.html",
  "https://www.fontainebleaulasvegas.com/rooms-and-suites/all-accommodations/"
];
