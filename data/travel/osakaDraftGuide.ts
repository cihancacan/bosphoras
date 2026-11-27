/** Destination #97: bilingual editorial draft. Not indexable until media and localization QA. */
import type {FeaturedCityGuideData} from './featuredCityGuides';
export const osakaDraftGuide: Omit<FeaturedCityGuideData,'photos'|'slug'> & {slug:'osaka'} = {
  "slug": "osaka",
  "name": "Osaka",
  "country": "Japon",
  "hero": "scene-1",
  "secondary": "scene-2",
  "eyebrowFr": "Japon · Kansai, gastronomie et hôtels urbains",
  "eyebrowEn": "Japan · Kansai, food and city hotels",
  "headingFr": "Osaka : choisir son quartier entre gastronomie, patrimoine et panoramas.",
  "headingEn": "Osaka: choose your neighbourhood for food, heritage and skyline views.",
  "introFr": "Osaka réunit les rues animées de Namba, les connexions ferroviaires d'Umeda et les quais de Nakanoshima. Choisissez votre hôtel selon les visites, les excursions dans le Kansai et le rythme de votre séjour.",
  "introEn": "Osaka brings together Namba's lively streets, Umeda's rail connections and Nakanoshima's waterfront. Choose your hotel around sightseeing, Kansai day trips and the pace of your stay.",
  "editorialFr": "Umeda et Kita sont pratiques pour les trains régionaux et les commerces. Dojima et Nakanoshima offrent un environnement plus calme près des musées et des rivières. Namba, Dotonbori et Shinsaibashi conviennent aux sorties gastronomiques et au shopping. Le secteur du château d'Osaka privilégie les promenades et le patrimoine. Tennoji, Abeno et Shinsekai combinent temples, vues et rues populaires. Osaka Bay constitue une base adaptée aux familles qui privilégient Universal Studios Japan et l'aquarium, mais elle est moins centrale pour les visites quotidiennes.\n\nTrois à quatre nuits permettent de découvrir la ville et de prévoir une journée de loisirs ou une excursion. Si Kyoto, Nara ou Kobe font partie du programme, choisissez une gare en fonction des lignes réellement utilisées. Le métro et les trains urbains sont pratiques, et les trajets à pied entre stations peuvent être longs dans les grands pôles. Vérifiez les horaires des dernières correspondances.\n\nDepuis Kansai International Airport (KIX), comparez les trains Nankai vers Namba, les trains JR et les bus selon votre hôtel. Vérifiez les formalités d'entrée selon votre passeport. Pour les chambres, comparez la superficie, les lits, la capacité, les vues et le prix total avec taxes et annulation. Une chambre avec vue sur la ville ne garantit pas un panorama sur une rivière ou le château.",
  "editorialEn": "Umeda and Kita are convenient for regional trains and shopping. Dojima and Nakanoshima offer a quieter setting near museums and rivers. Namba, Dotonbori and Shinsaibashi suit dining and shopping. The Osaka Castle area favours walks and heritage. Tennoji, Abeno and Shinsekai combine temples, views and local streets. Osaka Bay is useful for families prioritising Universal Studios Japan and the aquarium, but less central for daily sightseeing.\n\nThree to four nights allow city exploration and a leisure day or day trip. If Kyoto, Nara or Kobe are part of the itinerary, choose a station based on the lines you will actually use. The subway and urban rail are practical, and walking between stations in major hubs can be lengthy. Check last connections.\n\nFrom Kansai International Airport (KIX), compare Nankai trains to Namba, JR trains and buses around your hotel. Check passport-specific entry requirements. Compare room size, bedding, occupancy, views and total price including taxes and cancellation. A city-view room does not guarantee a river or castle view.",
  "hotelIntroFr": "Quatre styles : Conrad pour les panoramas de Nakanoshima, Four Seasons pour le design contemporain et l'inspiration japonaise, Ritz-Carlton pour le luxe classique d'Umeda et W Osaka pour une adresse design sur Midosuji.",
  "hotelIntroEn": "Four styles: Conrad for Nakanoshima views, Four Seasons for contemporary Japanese-inspired design, Ritz-Carlton for classic Umeda luxury and W Osaka for design on Midosuji.",
  "areas": [
    {
      "name": "Umeda et Kita",
      "enName": "Umeda and Kita",
      "fr": "Osaka Station, grands magasins, Umeda Sky Building et trains régionaux.",
      "en": "Osaka Station, department stores, Umeda Sky Building and regional trains.",
      "frWatch": "Identifier précisément la gare et la ligne de chaque excursion.",
      "enWatch": "Identify the exact station and line for each day trip."
    },
    {
      "name": "Dojima et Nakanoshima",
      "enName": "Dojima and Nakanoshima",
      "fr": "Quais, musées, architecture et hôtels panoramiques.",
      "en": "Riverfronts, museums, architecture and panoramic hotels.",
      "frWatch": "Vérifier les accès aux stations et l'orientation des chambres.",
      "enWatch": "Check station access and room orientation."
    },
    {
      "name": "Namba, Dotonbori et Shinsaibashi",
      "enName": "Namba, Dotonbori and Shinsaibashi",
      "fr": "Restaurants, enseignes lumineuses, canal et commerces.",
      "en": "Restaurants, illuminated signs, canal and shopping.",
      "frWatch": "Anticiper l'animation nocturne et les trajets avec les bagages.",
      "enWatch": "Consider nightlife noise and luggage routes."
    },
    {
      "name": "Château d'Osaka",
      "enName": "Osaka Castle area",
      "fr": "Parc du château, patrimoine et promenades.",
      "en": "Castle park, heritage and walks.",
      "frWatch": "Vérifier les distances entre le parc et les stations.",
      "enWatch": "Check distances between the park and stations."
    },
    {
      "name": "Tennoji, Abeno et Shinsekai",
      "enName": "Tennoji, Abeno and Shinsekai",
      "fr": "Shitennoji, Tsutenkaku, Abeno Harukas et rues historiques.",
      "en": "Shitennoji, Tsutenkaku, Abeno Harukas and historic streets.",
      "frWatch": "Comparer les correspondances pour les autres quartiers.",
      "enWatch": "Compare connections to other neighbourhoods."
    },
    {
      "name": "Osaka Bay et Universal City",
      "enName": "Osaka Bay and Universal City",
      "fr": "Universal Studios Japan, aquarium Kaiyukan et Tempozan.",
      "en": "Universal Studios Japan, Kaiyukan aquarium and Tempozan.",
      "frWatch": "Vérifier les billets et le temps de trajet vers le centre.",
      "enWatch": "Check tickets and travel time to the centre."
    }
  ],
  "experiences": [
    {
      "frTitle": "Découvrir le château et son parc",
      "enTitle": "Discover Osaka Castle and its park",
      "fr": "Associer la visite du patrimoine à une promenade dans le parc.",
      "en": "Pair the heritage visit with a walk in the park."
    },
    {
      "frTitle": "Explorer la gastronomie de Minami",
      "enTitle": "Explore Minami's food scene",
      "fr": "Combiner le marché de Kuromon, Dotonbori et Shinsaibashi.",
      "en": "Combine Kuromon Market, Dotonbori and Shinsaibashi."
    },
    {
      "frTitle": "Admirer la ville en hauteur",
      "enTitle": "See the city from above",
      "fr": "Choisir Umeda Sky Building ou Abeno Harukas selon le trajet et la météo.",
      "en": "Choose Umeda Sky Building or Abeno Harukas around your route and weather."
    },
    {
      "frTitle": "Prévoir une journée dans la baie",
      "enTitle": "Plan a day by the bay",
      "fr": "Choisir Universal Studios Japan ou Kaiyukan et Tempozan selon vos envies.",
      "en": "Choose Universal Studios Japan or Kaiyukan and Tempozan according to your interests."
    }
  ],
  "checksFr": [
    "Choisir la gare selon les excursions prévues.",
    "Confirmer les couchages, la superficie et la vue exacte de la chambre.",
    "Vérifier les conditions d'entrée selon le passeport.",
    "Comparer les prix totaux avec taxes, petit-déjeuner et annulation.",
    "Vérifier les billets d'attractions et les horaires de transport."
  ],
  "checksEn": [
    "Choose a station around planned day trips.",
    "Confirm bedding, room size and exact outlook.",
    "Check passport-specific entry requirements.",
    "Compare total prices including taxes, breakfast and cancellation.",
    "Check attraction tickets and transport schedules."
  ],
  "hotels": [
    {
      "name": "Conrad Osaka",
      "area": "Nakanoshima · Festival Tower West",
      "officialUrl": "https://www.hilton.com/en/hotels/osacici-conrad-osaka/",
      "fr": "Hôtel en hauteur dans Festival Tower West, avec grandes baies vitrées, chambres et suites, restauration, spa et piscine intérieure. Une adresse adaptée aux séjours panoramiques.",
      "en": "A high-rise hotel in Festival Tower West with large windows, rooms and suites, dining, spa and an indoor pool. A good choice for skyline-focused stays.",
      "frWatch": "Confirmer l'orientation et la catégorie de chambre.",
      "enWatch": "Confirm the room orientation and category."
    },
    {
      "name": "Four Seasons Hotel Osaka",
      "area": "Dojima · Kita",
      "officialUrl": "https://www.fourseasons.com/osaka/",
      "fr": "Hôtel contemporain avec des chambres et suites aux finitions raffinées, dont des hébergements d'inspiration ryokan. Le spa, la piscine et les restaurants permettent une pause en ville.",
      "en": "A contemporary hotel with refined rooms and suites, including ryokan-inspired accommodation. The spa, pool and restaurants offer a city retreat.",
      "frWatch": "Vérifier le type de couchage et les conditions des différentes catégories.",
      "enWatch": "Check bedding and conditions for different categories."
    },
    {
      "name": "The Ritz-Carlton, Osaka",
      "area": "Umeda · Kita",
      "officialUrl": "https://www.ritzcarlton.com/en/hotels/osarz-the-ritz-carlton-osaka/overview/",
      "fr": "Adresse classique d'Umeda, avec chambres et suites, salons, restaurants et spa. Elle convient aux séjours associant luxe traditionnel, commerces et déplacements ferroviaires.",
      "en": "A classic Umeda address with rooms and suites, lounges, restaurants and spa. It suits stays combining traditional luxury, shopping and rail connections.",
      "frWatch": "Comparer les catégories, l'accès aux salons et les trajets depuis Osaka Station.",
      "enWatch": "Compare categories, lounge access and routes from Osaka Station."
    },
    {
      "name": "W Osaka",
      "area": "Shinsaibashi · Midosuji",
      "officialUrl": "https://www.marriott.com/en-us/hotels/osaow-w-osaka/overview/",
      "fr": "Hôtel au design contemporain sur l'avenue Midosuji, proche des commerces et des sorties de Shinsaibashi. Les espaces de restauration et de détente prolongent cette ambiance urbaine.",
      "en": "A contemporary design hotel on Midosuji Avenue near Shinsaibashi shopping and nightlife. Its dining and leisure spaces extend the urban atmosphere.",
      "frWatch": "Vérifier l'ambiance, les couchages et les conditions d'accès aux équipements.",
      "enWatch": "Check the atmosphere, bedding and facility access conditions."
    }
  ]
};
export const osakaDraftFaq = {
  "fr": [
    {
      "q": "Où dormir à Osaka pour une première visite ?",
      "a": "Umeda et Namba constituent des bases pratiques selon les excursions et les sorties souhaitées."
    },
    {
      "q": "Quel quartier choisir pour Kyoto et Nara ?",
      "a": "Comparez les gares et lignes nécessaires : Umeda est pratique pour plusieurs liaisons régionales, Namba pour certaines lignes vers Nara."
    },
    {
      "q": "Combien de nuits prévoir ?",
      "a": "Trois à quatre nuits pour la ville ; ajoutez des nuits pour les excursions."
    },
    {
      "q": "Quel quartier choisir avec des enfants ?",
      "a": "Osaka Bay pour un séjour centré sur les attractions, ou Umeda et Namba pour des visites variées."
    },
    {
      "q": "Comment rejoindre Osaka depuis KIX ?",
      "a": "Comparez les trains Nankai, JR et les bus selon la gare proche de votre hôtel."
    },
    {
      "q": "Faut-il louer une voiture ?",
      "a": "Non pour la plupart des visites urbaines : métro, trains et marche sont pratiques."
    },
    {
      "q": "Comment comparer les hôtels ?",
      "a": "Comparez les mêmes dates, voyageurs, catégories, couchages, taxes et conditions d'annulation."
    }
  ],
  "en": [
    {
      "q": "Where should first-time visitors stay in Osaka?",
      "a": "Umeda and Namba are practical bases depending on day trips and nightlife."
    },
    {
      "q": "Which area is best for Kyoto and Nara day trips?",
      "a": "Compare the stations and lines you need: Umeda is convenient for several regional routes, Namba for some Nara services."
    },
    {
      "q": "How many nights should I plan?",
      "a": "Three to four nights for the city; add nights for day trips."
    },
    {
      "q": "Which area suits families?",
      "a": "Osaka Bay for attraction-focused stays, or Umeda and Namba for varied sightseeing."
    },
    {
      "q": "How do I reach Osaka from KIX?",
      "a": "Compare Nankai trains, JR trains and buses around the station nearest your hotel."
    },
    {
      "q": "Do I need a rental car?",
      "a": "Not for most city visits: subway, trains and walking are practical."
    },
    {
      "q": "How should I compare hotels?",
      "a": "Compare matching dates, guests, categories, bedding, taxes and cancellation terms."
    }
  ]
};
export const osakaDraftSeo = {
  "fr": {
    "title": "Où dormir à Osaka ? Umeda, Namba et meilleurs quartiers",
    "hotelTitle": "Hôtels de luxe à Osaka : Conrad, Four Seasons, Ritz-Carlton et W",
    "description": "Comparez les quartiers et hôtels d'Osaka : Umeda, Namba, Nakanoshima, transports et conseils pour votre séjour au Japon."
  },
  "en": {
    "title": "Where to Stay in Osaka: Umeda, Namba & Best Areas",
    "hotelTitle": "Luxury Hotels in Osaka: Conrad, Four Seasons, Ritz-Carlton & W",
    "description": "Compare Osaka neighbourhoods and hotels: Umeda, Namba, Nakanoshima, transport and practical tips for your Japan trip."
  }
};
export const osakaDraftSources = [
  "https://www.japan.travel/en/destinations/kansai/osaka/",
  "https://osaka-info.jp/en/osaka/basic/popular-spot/",
  "https://www.japan.travel/en/au/guide/ultimate-must-see-guide-to-osaka/",
  "https://osaka-info.jp/en/special/universal/course03/",
  "https://www.hilton.com/en/hotels/osacici-conrad-osaka/",
  "https://www.fourseasons.com/osaka/",
  "https://www.ritzcarlton.com/en/hotels/osarz-the-ritz-carlton-osaka/overview/",
  "https://www.marriott.com/en-us/hotels/osaow-w-osaka/overview/"
];
