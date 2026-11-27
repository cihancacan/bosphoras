/** Destination #98: bilingual editorial draft. Not indexable until media and localization QA. */
import type {FeaturedCityGuideData} from './featuredCityGuides';
export const seoulDraftGuide: Omit<FeaturedCityGuideData,'photos'|'slug'> & {slug:'seoul'} = {
  "slug": "seoul",
  "name": "Séoul",
  "country": "Corée du Sud",
  "hero": "scene-1",
  "secondary": "scene-2",
  "eyebrowFr": "Corée du Sud · Palais, quartiers créatifs et hôtels urbains",
  "eyebrowEn": "South Korea · Palaces, creative neighbourhoods and city hotels",
  "headingFr": "Séoul : choisir son quartier entre palais, gastronomie et panoramas.",
  "headingEn": "Seoul: choose your neighbourhood for palaces, food and skyline views.",
  "introFr": "Séoul associe les palais de Jongno, les commerces de Myeongdong, les rues créatives de Hongdae et les tours de Gangnam et Jamsil. Choisissez votre hôtel selon vos visites et les lignes de métro utiles plutôt que sur la seule distance à vol d'oiseau.",
  "introEn": "Seoul combines Jongno's palaces, Myeongdong's shopping, Hongdae's creative streets and the towers of Gangnam and Jamsil. Choose your hotel around sightseeing and useful subway lines rather than straight-line distance alone.",
  "editorialFr": "Jongno et Gwanghwamun offrent un accès pratique aux palais, aux musées et aux ruelles historiques. Myeongdong et Chungmuro sont adaptés aux commerces, aux restaurants et aux promenades vers Namsan. Dongdaemun associe design, marchés et vie urbaine. Hongdae et Yeonnam conviennent aux cafés, à la musique et aux adresses indépendantes. Au sud du fleuve Han, Gangnam et COEX privilégient les affaires, le shopping et les équipements modernes ; Jamsil est un choix intéressant pour les familles et les amateurs de panoramas.\n\nQuatre à cinq nuits constituent une bonne base pour répartir les visites de part et d'autre du fleuve. Regroupez les attractions proches et évitez de multiplier les traversées aux heures chargées. Le métro est utile, mais vérifiez la sortie de station, les correspondances et la marche jusqu'à l'hôtel. Dans les quartiers résidentiels traditionnels, respectez la tranquillité des habitants et les restrictions de visite affichées.\n\nDepuis Incheon (ICN), comparez AREX jusqu'à Seoul Station, les bus d'aéroport et les transferts privés selon votre hôtel. Gimpo (GMP) peut être plus pratique pour certains itinéraires régionaux. Vérifiez les formalités d'entrée selon votre passeport. Pour les chambres, comparez la superficie, les couchages, l'occupation maximale, la vue et le prix total avec taxes et annulation. Vérifiez séparément l'accès des enfants aux piscines et salons.",
  "editorialEn": "Jongno and Gwanghwamun offer convenient access to palaces, museums and heritage lanes. Myeongdong and Chungmuro suit shopping, dining and walks towards Namsan. Dongdaemun combines design, markets and city life. Hongdae and Yeonnam offer cafés, music and independent businesses. South of the Han River, Gangnam and COEX suit business, shopping and modern facilities; Jamsil is an interesting choice for families and skyline lovers.\n\nFour to five nights are a good starting point for sightseeing on both sides of the river. Group nearby attractions and avoid unnecessary river crossings at busy times. The subway is useful, but check station exits, transfers and the walk to your hotel. In traditional residential neighbourhoods, respect residents and posted visiting restrictions.\n\nFrom Incheon (ICN), compare AREX to Seoul Station, airport buses and private transfers for your hotel. Gimpo (GMP) may suit some regional itineraries. Check passport-specific entry requirements. Compare room size, bedding, maximum occupancy, view and total price including taxes and cancellation. Check children's access to pools and lounges separately.",
  "hotelIntroFr": "Quatre styles : Four Seasons pour Gwanghwamun et les palais, SIGNIEL pour les panoramas de Jamsil, Josun Palace pour Gangnam et The Shilla pour une adresse classique à Jangchung.",
  "hotelIntroEn": "Four styles: Four Seasons for Gwanghwamun and the palaces, SIGNIEL for Jamsil's skyline, Josun Palace for Gangnam and The Shilla for a classic Jangchung address.",
  "areas": [
    {
      "name": "Jongno et Gwanghwamun",
      "enName": "Jongno and Gwanghwamun",
      "fr": "Palais de Gyeongbokgung, Bukchon, musées et rues traditionnelles.",
      "en": "Gyeongbokgung Palace, Bukchon, museums and traditional streets.",
      "frWatch": "Respecter les horaires de visite des palais et les zones résidentielles.",
      "enWatch": "Respect palace opening times and residential areas."
    },
    {
      "name": "Myeongdong et Chungmuro",
      "enName": "Myeongdong and Chungmuro",
      "fr": "Commerces, restaurants, accès à Namsan et au centre.",
      "en": "Shopping, dining and access to Namsan and the city centre.",
      "frWatch": "Vérifier les rues piétonnes et l'accès avec les bagages.",
      "enWatch": "Check pedestrian streets and luggage access."
    },
    {
      "name": "Dongdaemun et Jangchung",
      "enName": "Dongdaemun and Jangchung",
      "fr": "Design Plaza, marchés, Cheonggyecheon et collines.",
      "en": "Design Plaza, markets, Cheonggyecheon and hills.",
      "frWatch": "Comparer les correspondances et les dénivelés à pied.",
      "enWatch": "Compare connections and walking gradients."
    },
    {
      "name": "Hongdae et Yeonnam",
      "enName": "Hongdae and Yeonnam",
      "fr": "Cafés, boutiques, musique et rues créatives.",
      "en": "Cafés, shops, music and creative streets.",
      "frWatch": "Tenir compte du bruit nocturne et des sorties de station.",
      "enWatch": "Consider nightlife noise and station exits."
    },
    {
      "name": "Gangnam et COEX",
      "enName": "Gangnam and COEX",
      "fr": "Quartier d'affaires, commerces, Bongeunsa et centre COEX.",
      "en": "Business district, shopping, Bongeunsa and COEX.",
      "frWatch": "Prévoir les trajets vers les palais au nord du fleuve.",
      "enWatch": "Allow travel time to palaces north of the river."
    },
    {
      "name": "Jamsil et Songpa",
      "enName": "Jamsil and Songpa",
      "fr": "Lotte World Tower, lac Seokchon et loisirs.",
      "en": "Lotte World Tower, Seokchon Lake and leisure attractions.",
      "frWatch": "Vérifier les billets, les trajets et les conditions familiales.",
      "enWatch": "Check tickets, travel routes and family policies."
    }
  ],
  "experiences": [
    {
      "frTitle": "Découvrir les palais",
      "enTitle": "Discover the palaces",
      "fr": "Associer Gyeongbokgung et les rues traditionnelles de Jongno ; respecter les horaires affichés.",
      "en": "Pair Gyeongbokgung with Jongno's heritage streets; respect posted hours."
    },
    {
      "frTitle": "Explorer les marchés et la gastronomie",
      "enTitle": "Explore markets and food",
      "fr": "Combiner Myeongdong, Gwangjang Market et Cheonggyecheon selon le trajet.",
      "en": "Combine Myeongdong, Gwangjang Market and Cheonggyecheon around your route."
    },
    {
      "frTitle": "Admirer les panoramas",
      "enTitle": "Enjoy the skyline",
      "fr": "Choisir Namsan ou Lotte World Tower selon la météo et le quartier.",
      "en": "Choose Namsan or Lotte World Tower around weather and location."
    },
    {
      "frTitle": "Découvrir le design et la culture contemporaine",
      "enTitle": "Explore design and contemporary culture",
      "fr": "Associer Dongdaemun Design Plaza, Hongdae ou Gangnam selon vos intérêts.",
      "en": "Pair Dongdaemun Design Plaza, Hongdae or Gangnam according to your interests."
    }
  ],
  "checksFr": [
    "Regrouper les visites selon le côté du fleuve Han.",
    "Confirmer la vue, les couchages et l'occupation maximale.",
    "Vérifier les formalités d'entrée selon le passeport.",
    "Comparer les prix totaux, taxes, petit-déjeuner et annulation.",
    "Vérifier l'accès aux piscines et salons pour les enfants."
  ],
  "checksEn": [
    "Group visits by side of the Han River.",
    "Confirm outlook, bedding and maximum occupancy.",
    "Check passport-specific entry requirements.",
    "Compare totals including taxes, breakfast and cancellation.",
    "Check children's access to pools and lounges."
  ],
  "hotels": [
    {
      "name": "Four Seasons Hotel Seoul",
      "area": "Gwanghwamun · Jongno",
      "officialUrl": "https://www.fourseasons.com/seoul/",
      "fr": "Hôtel contemporain au cœur de Gwanghwamun, avec chambres, suites, piscine intérieure, spa et plusieurs restaurants. Il constitue une base pratique pour les palais et le centre historique.",
      "en": "A contemporary hotel in Gwanghwamun with rooms, suites, an indoor pool, spa and several restaurants. It is a convenient base for the palaces and historic centre.",
      "frWatch": "Confirmer la catégorie, la vue éventuelle sur les palais et les conditions familiales.",
      "enWatch": "Confirm room category, potential palace views and family policies."
    },
    {
      "name": "SIGNIEL Seoul",
      "area": "Jamsil · Lotte World Tower",
      "officialUrl": "https://app.lottehotel.com/seoul-signiel/en",
      "fr": "Hôtel situé dans les étages supérieurs de la Lotte World Tower, avec chambres panoramiques, restauration et piscine intérieure. Une adresse pour les vues et les loisirs de Jamsil.",
      "en": "A hotel on the upper floors of Lotte World Tower with panoramic rooms, dining and an indoor pool. A choice for views and Jamsil's attractions.",
      "frWatch": "Vérifier l'orientation de la chambre et les conditions d'accès au salon.",
      "enWatch": "Check room orientation and lounge access conditions."
    },
    {
      "name": "Josun Palace, a Luxury Collection Hotel, Seoul Gangnam",
      "area": "Gangnam · Teheran-ro",
      "officialUrl": "https://www.marriott.com/en-us/hotels/sellc-josun-palace-a-luxury-collection-hotel-seoul-gangnam/overview/",
      "fr": "Adresse contemporaine de Gangnam avec chambres et suites en hauteur, restauration, piscine intérieure chauffée et centre de fitness. Elle convient aux séjours d'affaires et aux visites au sud du fleuve.",
      "en": "A contemporary Gangnam address with high-rise rooms and suites, dining, a heated indoor pool and fitness facilities. It suits business stays and visits south of the river.",
      "frWatch": "Comparer les catégories, les services inclus et les trajets vers le centre historique.",
      "enWatch": "Compare categories, included services and travel to the historic centre."
    },
    {
      "name": "The Shilla Seoul",
      "area": "Jangchung · Jung-gu",
      "officialUrl": "https://www.shilla.net/seoul/index.do?lang=en",
      "fr": "Hôtel classique à Jangchung, avec hébergements élégants, restauration et espaces de bien-être. Son environnement en retrait des axes commerçants permet de combiner visites et détente.",
      "en": "A classic Jangchung hotel with elegant accommodation, dining and wellness facilities. Its setting away from the main shopping streets combines sightseeing and relaxation.",
      "frWatch": "Vérifier les conditions saisonnières des espaces de baignade et l'accès aux transports.",
      "enWatch": "Check seasonal swimming facility policies and transport access."
    }
  ]
};
export const seoulDraftFaq = {
  "fr": [
    {
      "q": "Où dormir à Séoul pour une première visite ?",
      "a": "Jongno ou Myeongdong sont des bases pratiques pour les palais et le centre, selon vos déplacements."
    },
    {
      "q": "Gangnam ou Myeongdong ?",
      "a": "Gangnam convient aux visites au sud du fleuve et aux affaires ; Myeongdong est plus proche des sites historiques du centre."
    },
    {
      "q": "Combien de nuits prévoir ?",
      "a": "Quatre à cinq nuits pour les principaux quartiers, davantage pour les excursions."
    },
    {
      "q": "Quel quartier choisir avec des enfants ?",
      "a": "Jamsil pour les loisirs et le lac, ou Jongno pour un programme culturel ; comparez les couchages et les trajets."
    },
    {
      "q": "Comment rejoindre Séoul depuis Incheon ?",
      "a": "Comparez AREX vers Seoul Station, les bus d'aéroport et les transferts selon l'adresse de votre hôtel."
    },
    {
      "q": "Faut-il louer une voiture ?",
      "a": "Non pour la plupart des visites : métro, marche et taxis ponctuels sont pratiques."
    },
    {
      "q": "Comment comparer les hôtels ?",
      "a": "Comparez les mêmes dates, voyageurs, catégories, vues, taxes, prestations et annulation."
    }
  ],
  "en": [
    {
      "q": "Where should first-time visitors stay in Seoul?",
      "a": "Jongno or Myeongdong are convenient bases for the palaces and centre, depending on your routes."
    },
    {
      "q": "Gangnam or Myeongdong?",
      "a": "Gangnam suits visits south of the river and business; Myeongdong is closer to central heritage sights."
    },
    {
      "q": "How many nights should I plan?",
      "a": "Four to five nights for the main neighbourhoods, longer for day trips."
    },
    {
      "q": "Which area suits families?",
      "a": "Jamsil for attractions and the lake, or Jongno for culture; compare bedding and travel routes."
    },
    {
      "q": "How do I reach Seoul from Incheon?",
      "a": "Compare AREX to Seoul Station, airport buses and transfers around your hotel address."
    },
    {
      "q": "Do I need a rental car?",
      "a": "Not for most visits: subway, walking and occasional taxis are practical."
    },
    {
      "q": "How should I compare hotels?",
      "a": "Compare matching dates, guests, categories, views, taxes, facilities and cancellation terms."
    }
  ]
};
export const seoulDraftSeo = {
  "fr": {
    "title": "Où dormir à Séoul ? Jongno, Myeongdong, Gangnam et quartiers",
    "hotelTitle": "Hôtels de luxe à Séoul : Four Seasons, SIGNIEL, Josun et Shilla",
    "description": "Comparez les quartiers et hôtels de Séoul : Jongno, Myeongdong, Gangnam, Jamsil, transports et conseils de séjour."
  },
  "en": {
    "title": "Where to Stay in Seoul: Jongno, Myeongdong & Gangnam",
    "hotelTitle": "Luxury Hotels in Seoul: Four Seasons, SIGNIEL, Josun & Shilla",
    "description": "Compare Seoul neighbourhoods and hotels: Jongno, Myeongdong, Gangnam, Jamsil, transport and practical stay tips."
  }
};
export const seoulDraftSources = [
  "https://english.visitseoul.net/AboutSeoul",
  "https://english.visitseoul.net/mvp/IfyouvisitSeoulforthefirsttime_/43817",
  "https://english.visitseoul.net/getting-around-seoul/1184",
  "https://www.fourseasons.com/seoul/",
  "https://app.lottehotel.com/seoul-signiel/en",
  "https://www.marriott.com/en-us/hotels/sellc-josun-palace-a-luxury-collection-hotel-seoul-gangnam/overview/",
  "https://www.shilla.net/seoul/index.do?lang=en"
];
