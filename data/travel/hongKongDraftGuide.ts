/** Destination #95: bilingual editorial draft. Not registered or indexable until media and localization QA. */
import type {FeaturedCityGuideData} from './featuredCityGuides';
export const hongKongDraftGuide: Omit<FeaturedCityGuideData,'photos'|'slug'> & {slug:'hong-kong'} = {
  "slug": "hong-kong",
  "name": "Hong Kong",
  "country": "Hong Kong",
  "hero": "scene-1",
  "secondary": "scene-2",
  "eyebrowFr": "Hong Kong · Victoria Harbour, quartiers et palaces",
  "eyebrowEn": "Hong Kong · Victoria Harbour, neighbourhoods and grand hotels",
  "headingFr": "Hong Kong : choisir le bon quartier entre l'île, Kowloon et les collines.",
  "headingEn": "Hong Kong: choose your neighbourhood between the island, Kowloon and the hills.",
  "introFr": "La baie de Victoria relie deux expériences : les tours et les rues historiques de Hong Kong Island, et les promenades de Kowloon face à la skyline. Choisissez votre hôtel selon les visites prioritaires, les transports et la vue réellement recherchée.",
  "introEn": "Victoria Harbour connects two distinct experiences: Hong Kong Island's towers and historic streets, and Kowloon's waterfront promenades facing the skyline. Choose your hotel according to your priority sights, transport and the outlook you actually want.",
  "editorialFr": "Pour une première visite, Central et Sheung Wan offrent un accès pratique aux galeries, aux restaurants, à Tai Kwun et aux ferries. Tsim Sha Tsui permet de profiter des quais de Kowloon et des vues sur l'île. West Kowloon convient aux amateurs de musées et de culture. Wan Chai et Causeway Bay mêlent commerces, restaurants et vie locale. Mong Kok et Yau Ma Tei sont des secteurs animés, avec marchés et bonnes connexions en métro. Lantau est une alternative pour une étape proche de l'aéroport, Disneyland ou Ngong Ping, plutôt qu'une base quotidienne pour explorer le centre.\n\nTrois à quatre nuits permettent de répartir les visites entre les deux rives et le Peak. Pour un séjour plus long, prévoyez une journée à Lantau ou dans les quartiers moins centraux. Le Star Ferry, le MTR et les tramways de l'île se complètent ; choisissez les correspondances en fonction de l'hôtel, pas seulement de la distance sur une carte. Les fortes chaleurs, les pluies et les alertes cycloniques peuvent modifier le programme. Vérifiez les horaires et alertes auprès des opérateurs.\n\nDepuis Hong Kong International Airport (HKG), comparez Airport Express, bus et transfert privé en tenant compte du dernier trajet jusqu'à l'hôtel. Vérifiez les formalités d'entrée selon votre passeport, la capacité réelle des chambres, les lits supplémentaires et le prix total avec taxes et frais. Une mention vue sur la baie peut désigner différentes orientations : confirmez la catégorie précise, l'étage si disponible et les conditions d'annulation.",
  "editorialEn": "For a first visit, Central and Sheung Wan provide convenient access to galleries, restaurants, Tai Kwun and ferries. Tsim Sha Tsui is ideal for Kowloon's waterfront and island views. West Kowloon suits museum and culture lovers. Wan Chai and Causeway Bay combine shopping, restaurants and local life. Mong Kok and Yau Ma Tei are lively areas with markets and good metro connections. Lantau is an alternative for an airport stop, Disneyland or Ngong Ping rather than a daily base for central sightseeing.\n\nThree or four nights allow you to explore both shores and the Peak. For a longer stay, set aside a day for Lantau or less central neighbourhoods. The Star Ferry, MTR and island trams complement one another; choose connections around your hotel rather than distance on a map alone. Heat, heavy rain and tropical cyclone alerts can change your itinerary. Check operators' timetables and alerts.\n\nFrom Hong Kong International Airport (HKG), compare Airport Express, buses and private transfers, including the last leg to your hotel. Check passport-specific entry requirements, actual room capacity, extra beds and the total price including taxes and fees. A harbour-view label may cover different orientations: confirm the precise category, floor when available and cancellation conditions.",
  "hotelIntroFr": "Quatre styles de séjour : Rosewood pour la baie côté Kowloon, Four Seasons pour Central et la gastronomie, Peninsula pour l'élégance historique, Mandarin Oriental pour une expérience classique au cœur des affaires.",
  "hotelIntroEn": "Four styles of stay: Rosewood for the Kowloon waterfront, Four Seasons for Central and dining, Peninsula for historic elegance and Mandarin Oriental for classic hospitality in the business district.",
  "areas": [
    {
      "name": "Central et Sheung Wan",
      "enName": "Central and Sheung Wan",
      "fr": "Tai Kwun, galeries, restaurants, ferries et ruelles historiques.",
      "en": "Tai Kwun, galleries, dining, ferries and historic streets.",
      "frWatch": "Certaines rues sont pentues ; vérifiez le trajet à pied.",
      "enWatch": "Some streets are steep; check the walking route."
    },
    {
      "name": "Tsim Sha Tsui",
      "enName": "Tsim Sha Tsui",
      "fr": "Promenade sur la baie, Avenue of Stars, musées et hôtels avec vue sur l'île.",
      "en": "Harbour promenade, Avenue of Stars, museums and hotels facing the island.",
      "frWatch": "Confirmer le type de vue de la chambre et les trajets en ferry ou MTR.",
      "enWatch": "Confirm room outlook and ferry or MTR connections."
    },
    {
      "name": "West Kowloon",
      "enName": "West Kowloon",
      "fr": "M+, Hong Kong Palace Museum, espaces culturels et promenades.",
      "en": "M+, Hong Kong Palace Museum, cultural spaces and waterfront walks.",
      "frWatch": "Vérifier les horaires des musées et le dernier trajet vers l'hôtel.",
      "enWatch": "Check museum hours and the last leg to the hotel."
    },
    {
      "name": "Wan Chai et Causeway Bay",
      "enName": "Wan Chai and Causeway Bay",
      "fr": "Tramways, rues commerçantes, Victoria Park et restaurants.",
      "en": "Trams, shopping streets, Victoria Park and restaurants.",
      "frWatch": "Tenir compte de l'animation et du bruit de la rue.",
      "enWatch": "Consider street activity and noise."
    },
    {
      "name": "Mong Kok et Yau Ma Tei",
      "enName": "Mong Kok and Yau Ma Tei",
      "fr": "Marchés, petites adresses, rues commerçantes et MTR.",
      "en": "Markets, small eateries, shopping streets and MTR.",
      "frWatch": "Vérifier la superficie des chambres et les temps de trajet.",
      "enWatch": "Check room size and travel times."
    },
    {
      "name": "Lantau et Tung Chung",
      "enName": "Lantau and Tung Chung",
      "fr": "Ngong Ping, Big Buddha, Disneyland et accès à l'aéroport.",
      "en": "Ngong Ping, Big Buddha, Disneyland and airport access.",
      "frWatch": "Moins pratique pour les sorties quotidiennes à Central ou Kowloon.",
      "enWatch": "Less convenient for daily outings to Central or Kowloon."
    }
  ],
  "experiences": [
    {
      "frTitle": "Traverser Victoria Harbour",
      "enTitle": "Cross Victoria Harbour",
      "fr": "Associer le Star Ferry à la promenade de Tsim Sha Tsui et aux quais de Central.",
      "en": "Pair the Star Ferry with Tsim Sha Tsui promenade and Central's waterfront."
    },
    {
      "frTitle": "Monter au Peak",
      "enTitle": "Go up to the Peak",
      "fr": "Choisir une journée dégagée et vérifier les transports et les files d'attente.",
      "en": "Choose a clear day and check transport and queues."
    },
    {
      "frTitle": "Découvrir le patrimoine et l'art",
      "enTitle": "Explore heritage and art",
      "fr": "Prévoir Tai Kwun à Central et les musées de West Kowloon sur des demi-journées distinctes.",
      "en": "Allow separate half-days for Tai Kwun in Central and the museums of West Kowloon."
    },
    {
      "frTitle": "Explorer Lantau",
      "enTitle": "Explore Lantau",
      "fr": "Prévoir Ngong Ping et le monastère de Po Lin ou une journée Disney selon le séjour.",
      "en": "Plan Ngong Ping and Po Lin Monastery or a Disney day, depending on your trip."
    }
  ],
  "checksFr": [
    "Comparer les orientations et catégories de chambre pour la vue sur la baie.",
    "Choisir la rive selon les visites prioritaires et les correspondances.",
    "Vérifier les formalités d'entrée selon votre passeport.",
    "Comparer le total avec taxes, petits-déjeuners, lits supplémentaires et annulation.",
    "Vérifier les alertes météo et les horaires de transport."
  ],
  "checksEn": [
    "Compare room orientations and categories for harbour views.",
    "Choose a shore around priority sights and connections.",
    "Check passport-specific entry requirements.",
    "Compare totals including taxes, breakfast, extra beds and cancellation.",
    "Check weather alerts and transport schedules."
  ],
  "hotels": [
    {
      "name": "Rosewood Hong Kong",
      "area": "Tsim Sha Tsui · Victoria Dockside",
      "officialUrl": "https://www.rosewoodhotels.com/en/hong-kong/overview/gallery",
      "fr": "Au bord de Victoria Harbour, Rosewood Hong Kong privilégie un luxe contemporain et résidentiel. Les chambres et suites, la piscine et les restaurants constituent une base pour profiter du front de mer de Kowloon.",
      "en": "On Victoria Harbour, Rosewood Hong Kong offers contemporary residential-style luxury. Rooms, suites, the pool and restaurants provide a base for exploring Kowloon's waterfront.",
      "frWatch": "Comparer les catégories donnant sur le port et les configurations familiales.",
      "enWatch": "Compare harbour-facing categories and family configurations."
    },
    {
      "name": "Four Seasons Hotel Hong Kong",
      "area": "Central · International Finance Centre",
      "officialUrl": "https://www.fourseasons.com/hongkong/photos-and-videos/",
      "fr": "Relié au quartier de l'IFC, le Four Seasons propose des chambres avec différentes orientations, une piscine extérieure, un spa et une offre gastronomique. Il convient aux séjours mêlant affaires, visites et détente.",
      "en": "Connected to the IFC district, Four Seasons offers rooms with different outlooks, an outdoor pool, a spa and dining. It suits stays combining business, sightseeing and relaxation.",
      "frWatch": "Confirmer les vues, les couchages et les réservations souhaitées aux restaurants.",
      "enWatch": "Confirm outlook, bedding and desired restaurant reservations."
    },
    {
      "name": "The Peninsula Hong Kong",
      "area": "Tsim Sha Tsui · Salisbury Road",
      "officialUrl": "https://www.peninsula.com/en/hong-kong/photos-and-videos",
      "fr": "Ce palace historique associe l'architecture classique de son bâtiment d'origine et des chambres dans une tour plus récente. Le hall, les salons et la piscine intérieure offrent un séjour de caractère proche des promenades.",
      "en": "This historic grand hotel combines the classic architecture of its original building with rooms in a more recent tower. Its lobby, lounges and indoor pool offer a distinctive stay near the waterfront.",
      "frWatch": "Comparer les chambres de l'aile historique et de la tour, ainsi que la vue exacte.",
      "enWatch": "Compare original-wing and tower rooms, as well as the exact outlook."
    },
    {
      "name": "Mandarin Oriental, Hong Kong",
      "area": "Central · Connaught Road",
      "officialUrl": "https://www.mandarinoriental.com/en/hong-kong/victoria-harbour",
      "fr": "L'adresse historique de Central associe un emplacement de premier plan, des chambres et suites au style raffiné, des restaurants et un spa. Elle se prête aux séjours urbains et aux rendez-vous d'affaires.",
      "en": "This historic Central address combines a prime location, refined rooms and suites, dining and a spa. It is suited to city breaks and business trips.",
      "frWatch": "Ne pas confondre avec le Mandarin Oriental The Landmark ; confirmer la catégorie et la vue.",
      "enWatch": "Do not confuse it with Mandarin Oriental The Landmark; confirm category and outlook."
    }
  ]
};
export const hongKongDraftFaq = {
  "fr": [
    {
      "q": "Où dormir à Hong Kong pour une première visite ?",
      "a": "Central, Sheung Wan et Tsim Sha Tsui constituent de bonnes bases selon la rive que vous souhaitez privilégier."
    },
    {
      "q": "Quelle rive choisir pour la vue sur la skyline ?",
      "a": "Tsim Sha Tsui offre des vues vers Hong Kong Island ; les hôtels de Central peuvent donner sur Kowloon. Vérifiez la catégorie."
    },
    {
      "q": "Combien de nuits prévoir ?",
      "a": "Trois à quatre nuits permettent de découvrir les deux rives et le Peak ; prolongez pour Lantau."
    },
    {
      "q": "Quel secteur choisir avec des enfants ?",
      "a": "Tsim Sha Tsui ou Central pour des visites variées ; Lantau peut convenir à un séjour centré sur Disney."
    },
    {
      "q": "Comment rejoindre le centre depuis HKG ?",
      "a": "Airport Express, bus ou transfert privé selon votre hôtel et vos bagages."
    },
    {
      "q": "Faut-il louer une voiture ?",
      "a": "Non pour la plupart des visites urbaines : le MTR, les ferries, les tramways et la marche sont pratiques."
    },
    {
      "q": "Comment comparer les hôtels de Hong Kong ?",
      "a": "Comparez dates, voyageurs, vue, catégorie, taxes et conditions d'annulation identiques."
    }
  ],
  "en": [
    {
      "q": "Where should first-time visitors stay in Hong Kong?",
      "a": "Central, Sheung Wan and Tsim Sha Tsui are useful bases depending on your preferred shore."
    },
    {
      "q": "Which shore is best for skyline views?",
      "a": "Tsim Sha Tsui faces Hong Kong Island; Central hotels can face Kowloon. Confirm the room category."
    },
    {
      "q": "How many nights should I plan?",
      "a": "Three to four nights allow both shores and the Peak; extend your stay for Lantau."
    },
    {
      "q": "Which area suits families?",
      "a": "Tsim Sha Tsui or Central for varied sightseeing; Lantau may suit a Disney-focused stay."
    },
    {
      "q": "How do I reach the centre from HKG?",
      "a": "Airport Express, bus or private transfer depending on your hotel and luggage."
    },
    {
      "q": "Do I need a rental car?",
      "a": "Not for most city visits: MTR, ferries, trams and walking are practical."
    },
    {
      "q": "How should I compare Hong Kong hotels?",
      "a": "Compare matching dates, guests, outlook, room category, taxes and cancellation terms."
    }
  ]
};
export const hongKongDraftSeo = {
  "fr": {
    "title": "Où dormir à Hong Kong ? Central, Kowloon et meilleurs quartiers",
    "hotelTitle": "Hôtels de luxe à Hong Kong : Rosewood, Four Seasons et palaces",
    "description": "Comparez les quartiers et hôtels de Hong Kong : Central, Tsim Sha Tsui, Victoria Harbour, transports et conseils pour votre séjour."
  },
  "en": {
    "title": "Where to Stay in Hong Kong: Central, Kowloon & Best Areas",
    "hotelTitle": "Luxury Hotels in Hong Kong: Rosewood, Four Seasons & Grand Hotels",
    "description": "Compare Hong Kong neighbourhoods and hotels: Central, Tsim Sha Tsui, Victoria Harbour, transport and practical stay tips."
  }
};
export const hongKongDraftSources = [
  "https://www.discoverhongkong.com/eng/neighbourhoods.html",
  "https://www.discoverhongkong.com/eng/neighbourhoods/central-and-western-district.html",
  "https://www.discoverhongkong.com/eng/neighbourhoods/wan-chai.html",
  "https://www.discoverhongkong.com/eng/attractions/your-guide-to-experiencing-hong-kong.html",
  "https://www.rosewoodhotels.com/en/hong-kong/overview/gallery",
  "https://www.fourseasons.com/hongkong/photos-and-videos/",
  "https://www.peninsula.com/en/hong-kong/photos-and-videos",
  "https://www.mandarinoriental.com/en/hong-kong/victoria-harbour"
];
