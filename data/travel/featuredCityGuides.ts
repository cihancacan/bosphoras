/** Curated Travel destination guides. Editorial selections only: no supplier inventory, booking, rates or claim of first-hand inspection. */
export type FeaturedCitySlug = 'bodrum' | 'antalya' | 'dubai';
export type FeaturedCityPhoto = {src:string;fr:string;en:string;author:string;license:string;licenseUrl:string;sourcePage:string};
export type FeaturedCityArea = {name:string;enName:string;fr:string;en:string;frWatch:string;enWatch:string};
export type FeaturedCityExperience = {frTitle:string;enTitle:string;fr:string;en:string};
export type FeaturedCityHotel = {name:string;area:string;fr:string;en:string;frWatch:string;enWatch:string;officialUrl:string};
export type FeaturedCityGuideData = {slug:FeaturedCitySlug;name:string;country:string;hero:string;secondary:string;eyebrowFr:string;eyebrowEn:string;headingFr:string;headingEn:string;introFr:string;introEn:string;editorialFr:string;editorialEn:string;hotelIntroFr:string;hotelIntroEn:string;areas:FeaturedCityArea[];experiences:FeaturedCityExperience[];hotels:FeaturedCityHotel[];checksFr:string[];checksEn:string[];photos:Record<string,FeaturedCityPhoto>};
export const featuredCityGuides: Record<FeaturedCitySlug, FeaturedCityGuideData> = {
  "bodrum": {
    "slug": "bodrum",
    "name": "Bodrum",
    "country": "Turquie",
    "hero": "bodrum-coast",
    "secondary": "harbour",
    "eyebrowFr": "La Riviera égéenne",
    "eyebrowEn": "The Aegean Riviera",
    "headingFr": "Bodrum, le luxe a le goût de la mer.",
    "headingEn": "Bodrum: luxury at the pace of the Aegean.",
    "introFr": "À Bodrum, il faut d’abord choisir sa baie. Marina animée à Yalıkavak, retraite sur une côte discrète ou grand resort familial : les distances paraissent courtes, mais chaque rivage change l’expérience du séjour.",
    "introEn": "In Bodrum, the bay matters more than a star rating. From lively Yalıkavak Marina to private northern shores and spacious family resorts, every coastline shapes a different stay.",
    "editorialFr": "Notre sélection distingue les criques paisibles des adresses tournées vers la marina. Une plage privée, une villa avec piscine et une chambre vue mer sont trois promesses différentes — chacune doit être vérifiée avant tout engagement.",
    "editorialEn": "Our selection separates secluded coves from marina-oriented addresses. Private beach access, a pool villa and a sea-view room are different propositions; each must be checked before booking.",
    "hotelIntroFr": "Quatre établissements à comparer selon leur emplacement et leur style. Ce sont des références éditoriales, non des chambres proposées à la vente par Bosphoras.",
    "hotelIntroEn": "Four properties to compare by shoreline and style. These are editorial references, not rooms currently offered for sale through Bosphoras.",
    "areas": [
      {
        "name": "Yalıkavak & la marina",
        "enName": "Yalıkavak & the marina",
        "fr": "Yachts, restaurants, boutiques et rythme estival ; privilégier la proximité de la marina si la vie à pied en soirée est prioritaire.",
        "en": "Yachts, dining, shopping and summer energy; choose genuine marina proximity if evening strolls matter.",
        "frWatch": "Une adresse dite « Yalıkavak » n’est pas forcément accessible à pied depuis les pontons.",
        "enWatch": "A Yalıkavak address is not necessarily within walking distance of the berths."
      },
      {
        "name": "Göltürkbükü & Paradise Bay",
        "enName": "Göltürkbükü & Paradise Bay",
        "fr": "Paysage de pinèdes, plages et resorts orientés vers le repos ; idéal pour rester plusieurs jours à l’hôtel ou dans une villa.",
        "en": "Pine-covered slopes, beaches and resort-led stays; well suited to lingering at a hotel or private villa.",
        "frWatch": "Comparer accès plage, pente, navettes et exposition de la chambre.",
        "enWatch": "Compare beach access, gradients, transport and the exact room aspect."
      },
      {
        "name": "Kaplankaya & côte nord",
        "enName": "Kaplankaya & the northern coast",
        "fr": "Une expérience plus isolée tournée vers le bien-être et l’espace, du côté de Milas. Ce n’est pas le centre de Bodrum.",
        "en": "A more secluded wellness-focused landscape towards Milas, rather than Bodrum town itself.",
        "frWatch": "Temps de route et transferts à anticiper avant de réserver.",
        "enWatch": "Confirm transfer routes and journey logistics before committing."
      }
    ],
    "experiences": [
      {
        "frTitle": "Le matin au bord de l’eau",
        "enTitle": "A morning on the water",
        "fr": "Petit déjeuner face aux criques, baignade tranquille puis sortie en bateau selon les conditions météo.",
        "en": "Breakfast overlooking a cove, a quiet swim and an optional boat outing when conditions permit."
      },
      {
        "frTitle": "L’art de vivre de Yalıkavak",
        "enTitle": "The Yalıkavak rhythm",
        "fr": "Un déjeuner long, la marina en fin d’après-midi et un restaurant choisi pour son atmosphère.",
        "en": "A long lunch, an afternoon around the marina and a restaurant picked for its atmosphere."
      },
      {
        "frTitle": "La villa sans compromis",
        "enTitle": "The considered villa stay",
        "fr": "Choisir la vue, mais contrôler surtout l’accès à la mer, le personnel, la piscine et l’intimité réelle.",
        "en": "Choose the outlook, but verify swimming access, staffing, pool privacy and actual seclusion."
      }
    ],
    "hotels": [
      {
        "name": "Mandarin Oriental, Bodrum",
        "area": "Paradise Bay · Göltürkbükü",
        "fr": "Une grande adresse sur la baie de Paradise Bay, avec chambres, suites et villas à comparer selon la vue et l'accès extérieur.",
        "en": "An expansive Paradise Bay resort with rooms, suites and villas to compare by outlook and outdoor access.",
        "frWatch": "Ne pas confondre catégorie « Garden View » et véritable « Sea View ».",
        "enWatch": "Garden View and Sea View rooms are not interchangeable.",
        "officialUrl": "https://www.mandarinoriental.com/en/bodrum/paradise-bay"
      },
      {
        "name": "The Bodrum EDITION",
        "area": "Yalıkavak",
        "fr": "Adresse contemporaine avec plage, restauration et esprit social sur la péninsule, à distinguer d'un hôtel situé dans la marina même.",
        "en": "A contemporary beachfront base with a social, design-led mood; not the same as staying inside the marina.",
        "frWatch": "Vérifier catégorie de chambre, accès plage et transferts.",
        "enWatch": "Confirm room category, beach arrangements and transfers.",
        "officialUrl": "https://www.marriott.com/en-us/hotels/bjveb-the-bodrum-edition/overview/"
      },
      {
        "name": "Maxx Royal Bodrum",
        "area": "Gölköy · côte nord",
        "fr": "Resort de suites et villas où service, restauration et accès à la baie composent l'essentiel du séjour.",
        "en": "A suites-and-villas resort where service, dining and time by the bay shape the stay.",
        "frWatch": "Vérifier l'emplacement exact de la suite ou de la villa au sein du complexe.",
        "enWatch": "Verify the suite or villa's exact position within the resort.",
        "officialUrl": "https://www.maxxroyal.com/maxx-royal-bodrum"
      },
      {
        "name": "Six Senses Kaplankaya",
        "area": "Bozbük · Milas",
        "fr": "Destination de bien-être sur une partie isolée de la côte, avec spa et résidences ; loin des soirées de la marina.",
        "en": "A secluded wellness-led coastal retreat with residences, well away from the marina nightlife.",
        "frWatch": "Prévoir les transferts : l'adresse se trouve à Milas, pas au centre de Bodrum.",
        "enWatch": "Plan the transfer: the resort is in Milas, not Bodrum town.",
        "officialUrl": "https://www.sixsenses.com/en/hotels-resorts/europe/turkey/kaplankaya/"
      }
    ],
    "checksFr": [
      "La saison d'ouverture effective et les installations disponibles à vos dates.",
      "La catégorie exacte de vue, les équipements privatifs et l'accès à la plage.",
      "Les inclusions de la villa, du personnel, des transferts et des activités nautiques.",
      "Le port d'embarquement et les conditions de carburant si un yacht est envisagé."
    ],
    "checksEn": [
      "Actual seasonal operation and facilities available on your dates.",
      "Exact room view, private amenities and genuine beach access.",
      "Villa staffing, transfers, inclusions and watersport terms.",
      "Yacht departure harbour and fuel policy if planning a day on the water."
    ],
    "photos": {
      "bodrum-coast": {
        "src": "/images/travel/bodrum-premium/destination/bodrum-turquoise-bay-v2.webp",
        "fr": "Crique turquoise et voiliers sur la côte de Bodrum",
        "en": "Turquoise Bodrum bay with sailing boats",
        "author": "Luxury Tribune · photographie de destination",
        "license": "Crédit éditorial",
        "licenseUrl": "https://www.luxurytribune.com/en/bulgari-hotels-resorts-opens-a-new-address-in-turkey",
        "sourcePage": "https://www.luxurytribune.com/en/bulgari-hotels-resorts-opens-a-new-address-in-turkey"
      },
      "edition-pool": {
        "src": "/images/travel/bodrum-premium/the-bodrum-edition/edition-infinity-pool.webp",
        "fr": "La piscine à débordement du Bodrum EDITION",
        "en": "The infinity pool at The Bodrum EDITION",
        "author": "The Bodrum EDITION / Marriott",
        "license": "Galerie officielle",
        "licenseUrl": "https://www.marriott.com/en-us/hotels/bjveb-the-bodrum-edition/photos/",
        "sourcePage": "https://www.marriott.com/en-us/hotels/bjveb-the-bodrum-edition/photos/"
      },
      "marina": {
        "src": "/images/travel/city-guides/bodrum/marina.webp",
        "fr": "La marina de Yalıkavak photographiée en journée",
        "en": "Yalıkavak Marina in daylight",
        "author": "CeeGee",
        "license": "CC0 1.0",
        "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
        "sourcePage": "https://commons.wikimedia.org/wiki/File:YalıkavakMarina_(5).jpg"
      },
      "harbour": {
        "src": "/images/travel/city-guides/bodrum/harbour.webp",
        "fr": "Le port historique de Bodrum vu depuis le château",
        "en": "Bodrum's historic harbour seen from the castle",
        "author": "Mansevikobora",
        "license": "CC BY-SA 3.0",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
        "sourcePage": "https://commons.wikimedia.org/wiki/File:Port_de_bodrum.jpg"
      }
    }
  },
  "antalya": {
    "slug": "antalya",
    "name": "Antalya",
    "country": "Turquie",
    "hero": "golden-hour",
    "secondary": "harbour",
    "eyebrowFr": "La Méditerranée turque",
    "eyebrowEn": "The Turkish Mediterranean",
    "headingFr": "Antalya, entre Méditerranée et art de vivre.",
    "headingEn": "Antalya: the Mediterranean, considered.",
    "introFr": "Luxe balnéaire, grands resorts familiaux, parcours de golf et vieilles ruelles : Antalya n'est pas une seule destination. Belek, Kemer et le centre historique répondent à des envies très différentes.",
    "introEn": "Beachfront resort luxury, spacious family stays, championship golf and historic streets: Antalya is not one destination. Belek, Kemer and the old town create very different experiences.",
    "editorialFr": "Avant le nom d'un hôtel, choisissez votre rythme : tout-compris haut de gamme, crique au pied des montagnes ou boutique-hôtel pour découvrir la ville. Les trajets changent fortement selon la zone.",
    "editorialEn": "Choose your pace before your hotel: considered all-inclusive luxury, a bay below the mountains or a small city base. Transfer times vary significantly by area.",
    "hotelIntroFr": "Quatre références hôtelières pour illustrer des expériences distinctes sur la Riviera d’Antalya ; disponibilité et ouverture des services à contrôler auprès des établissements.",
    "hotelIntroEn": "Four hotel references reflecting different Antalya-coast experiences. Verify dates and operating facilities directly with each property.",
    "areas": [
      {
        "name": "Belek & Kadriye",
        "enName": "Belek & Kadriye",
        "fr": "Grandes plages, parcours de golf, clubs et resorts proposant de nombreuses activités sur place.",
        "en": "Sandy beaches, golf courses and full-service resorts with plenty to do on the grounds.",
        "frWatch": "L'expérience est principalement celle du resort, et non d'une promenade en ville.",
        "enWatch": "Expect a resort-led holiday, not necessarily a walkable city neighbourhood."
      },
      {
        "name": "Kemer & la côte montagneuse",
        "enName": "Kemer & the mountain coast",
        "fr": "Criques et montagnes au-dessus de l'eau, avec une atmosphère plus tournée vers le paysage.",
        "en": "Coves below green mountains, with a landscape-first atmosphere.",
        "frWatch": "Vérifier la nature de la plage et la distance des activités hors hôtel.",
        "enWatch": "Check beach type and distances to activities beyond the property."
      },
      {
        "name": "Kaleiçi & Konyaaltı",
        "enName": "Kaleiçi & Konyaaltı",
        "fr": "Patrimoine, restaurants, vieux port ou plage citadine : à choisir pour sortir et découvrir Antalya.",
        "en": "Historic lanes, dining, an old harbour and city beaches for visitors who want to explore Antalya.",
        "frWatch": "Ce ne sont pas les mêmes environnements que les grands resorts de Belek.",
        "enWatch": "This is a different experience from the large Belek resorts."
      }
    ],
    "experiences": [
      {
        "frTitle": "Le resort familial élégant",
        "enTitle": "The refined family resort",
        "fr": "Comparer l'espace des suites, la restauration, les équipements enfants et les piscines réellement chauffées selon la saison.",
        "en": "Compare suite layouts, restaurants, child facilities and pools actually heated in your season."
      },
      {
        "frTitle": "Le golf et la Méditerranée",
        "enTitle": "Golf by the Mediterranean",
        "fr": "Séjour dédié aux fairways de Belek, avec vérification des parcours, créneaux et éventuelles fermetures d'entretien.",
        "en": "A Belek golf stay with tee times and course maintenance schedules checked in advance."
      },
      {
        "frTitle": "Un détour par la vieille ville",
        "enTitle": "Time in the old town",
        "fr": "Explorer Kaleiçi et le port historique avant de retrouver la tranquillité de son hôtel.",
        "en": "Explore Kaleiçi and its harbour, then return to the relative calm of your accommodation."
      }
    ],
    "hotels": [
      {
        "name": "Regnum Carya",
        "area": "Kadriye · Belek",
        "fr": "Adresse combinant suites, villas, golf et vie de resort haut de gamme.",
        "en": "A high-end resort base combining suites, villas and golf-focused experiences.",
        "frWatch": "Contrôler accès golf, programmes enfants et services selon dates.",
        "enWatch": "Confirm golf access, family facilities and seasonal services.",
        "officialUrl": "https://www.regnumhotels.com/en/hotels/regnum-carya/"
      },
      {
        "name": "Cullinan Belek",
        "area": "Kadriye · Belek",
        "fr": "Resort contemporain en bord de plage à envisager pour un séjour concentré sur les services du complexe.",
        "en": "A contemporary beachfront resort for stays focused on on-property amenities.",
        "frWatch": "Distinguer chambre, suite et offre réellement incluse dans le forfait.",
        "enWatch": "Check room type and the exact plan or services included.",
        "officialUrl": "https://www.cullinanhotels.com/"
      },
      {
        "name": "Rixos Premium Belek",
        "area": "Belek",
        "fr": "Adresse balnéaire à grande capacité avec offre familiale, plage et loisirs.",
        "en": "A substantial beach resort with family-oriented entertainment and activities.",
        "frWatch": "Comparer chambres communicantes et niveau d'accès à certaines activités.",
        "enWatch": "Confirm connecting rooms and whether specific activities are included.",
        "officialUrl": "https://www.rixos.com/fr/hotel-resort/rixos-premium-belek"
      },
      {
        "name": "Maxx Royal Kemer",
        "area": "Kemer · côte ouest",
        "fr": "Une alternative de luxe plus tournée vers la nature et les reliefs méditerranéens que Belek.",
        "en": "An alternative with a dramatic mountain-and-Mediterranean setting rather than the Belek golf coastline.",
        "frWatch": "Trajet depuis l'aéroport et configuration exacte de l'hébergement.",
        "enWatch": "Check airport transfer logistics and your actual room category.",
        "officialUrl": "https://www.maxxroyal.com/Maxx-Royal-Kemer"
      }
    ],
    "checksFr": [
      "La zone réelle : Belek, Kemer ou centre d'Antalya ne sont pas interchangeables.",
      "Le détail du tout-compris, des restaurants à réservation et des prestations premium.",
      "Les piscines chauffées et l'ouverture saisonnière des installations enfants.",
      "Les transferts aéroport et les conditions d'accès aux parcours de golf."
    ],
    "checksEn": [
      "Real location: Belek, Kemer and Antalya's centre are not interchangeable.",
      "The actual all-inclusive scope, restaurant bookings and premium inclusions.",
      "Heated pools and seasonal operation of family facilities.",
      "Airport transfers, golf access and any course maintenance."
    ],
    "photos": {
      "golden-hour": {
        "src": "/images/travel/city-guides/antalya/antalya-golden-hour-hero.webp",
        "fr": "Illustration éditoriale au soleil couchant inspirée de la côte d’Antalya, générée par IA",
        "en": "AI-generated warm sunset editorial illustration inspired by the Antalya coastline",
        "author": "Bosphoras Luxury Stays · création assistée par IA",
        "license": "Illustration artistique, non une photographie réelle",
        "licenseUrl": "https://openai.com/policies/terms-of-use/",
        "sourcePage": "https://openai.com/index/image-generation/"
      },
      "beach": {
        "src": "/images/travel/city-guides/antalya/beach.webp",
        "fr": "La plage de Konyaaltı à Antalya",
        "en": "Konyaaltı Beach in Antalya",
        "author": "MrEfeS",
        "license": "CC BY-SA 4.0",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
        "sourcePage": "https://commons.wikimedia.org/wiki/File:Konyaaltı_Beach.jpg"
      },
      "harbour": {
        "src": "/images/travel/city-guides/antalya/harbour.webp",
        "fr": "Le port historique d'Antalya à Kaleiçi",
        "en": "Antalya's historic Kaleiçi harbour",
        "author": "Maksym Kozlenko",
        "license": "CC BY-SA 4.0",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
        "sourcePage": "https://commons.wikimedia.org/wiki/File:2023-01-17_Antalya_Harbour.jpg"
      }
    }
  },
  "dubai": {
    "slug": "dubai",
    "name": "Dubaï",
    "country": "Émirats arabes unis",
    "hero": "west-beach-hero",
    "secondary": "marina-yachts-bright",
    "eyebrowFr": "Luxe urbain & bord de mer",
    "eyebrowEn": "City glamour & coastline",
    "headingFr": "Dubaï, choisir son horizon.",
    "headingEn": "Dubai: choose your horizon.",
    "introFr": "Palm Jumeirah pour la vie balnéaire, Business Bay pour un hôtel urbain raffiné, Downtown pour les monuments et Dubai Marina pour les promenades : à Dubaï, le quartier fait toute la différence.",
    "introEn": "Palm Jumeirah for the beach, Business Bay for refined city living, Downtown for landmark views and Dubai Marina for waterfront walks: in Dubai, location changes everything.",
    "editorialFr": "Nous distinguons l'hôtel spectaculaire du séjour réellement agréable : accès plage, catégorie de vue, circulation et proximité des restaurants comptent davantage qu'un seul cliché de skyline.",
    "editorialEn": "We separate architectural spectacle from the actual experience: beach access, confirmed room view, traffic and nearby dining matter more than a skyline photograph.",
    "hotelIntroFr": "Quatre adresses fortes, de l'hôtel urbain au grand resort de Palm Jumeirah. Sélection éditoriale indépendante, sans prix ou disponibilité affichés.",
    "hotelIntroEn": "Four distinctive addresses, from a polished urban hotel to a statement Palm Jumeirah resort. An independent shortlist without live rates or availability.",
    "areas": [
      {
        "name": "Palm Jumeirah",
        "enName": "Palm Jumeirah",
        "fr": "Resorts en bord de mer, longues plages et restaurants de destination ; temps de trajet parfois importants hors de la Palm.",
        "en": "Beach resorts, destination dining and a slower shoreline rhythm; allow for travel away from the Palm.",
        "frWatch": "La plage peut être privée au complexe et la vue Burj Al Arab n'est pas garantie.",
        "enWatch": "Check private beach access and never assume landmark views from every room."
      },
      {
        "name": "Business Bay & Downtown",
        "enName": "Business Bay & Downtown",
        "fr": "Hôtels contemporains, skyline, musées, shopping et gastronomie urbaine.",
        "en": "Contemporary hotels, skyline architecture, shopping and urban dining.",
        "frWatch": "Une chambre « skyline » n'offre pas nécessairement la vue directe sur Burj Khalifa.",
        "enWatch": "A 'skyline' room does not automatically face Burj Khalifa."
      },
      {
        "name": "Dubai Marina & Jumeirah",
        "enName": "Dubai Marina & Jumeirah",
        "fr": "Promenades, restaurants, plages urbaines et atmosphère de vacances active.",
        "en": "Promenades, city beaches, dining and an active coastal holiday mood.",
        "frWatch": "Bien distinguer Marina, JBR et Jumeirah : ce ne sont pas les mêmes quartiers.",
        "enWatch": "Distinguish Marina, JBR and Jumeirah: they are separate areas."
      }
    ],
    "experiences": [
      {
        "frTitle": "La terrasse au-dessus de la ville",
        "enTitle": "A terrace above the city",
        "fr": "Une suite bien orientée, le panorama au coucher du soleil et une table choisie pour la vue.",
        "en": "A well-oriented suite, a sunset panorama and a dining table chosen for its outlook."
      },
      {
        "frTitle": "L'échappée balnéaire",
        "enTitle": "The beachfront escape",
        "fr": "Plage privée, piscine, spa et temps laissé libre plutôt qu'un programme trop chargé.",
        "en": "Private beach, pool, spa and unhurried time instead of a packed itinerary."
      },
      {
        "frTitle": "Dubaï en famille",
        "enTitle": "Dubai with the family",
        "fr": "Privilégier la configuration des suites, les activités adaptées et les trajets raisonnables.",
        "en": "Choose practical suite layouts, age-appropriate facilities and realistic transfer routes."
      }
    ],
    "hotels": [
      {
        "name": "The Lana · Dorchester Collection",
        "area": "Marasi Bay · Business Bay",
        "fr": "Une adresse urbaine raffinée pour ceux qui privilégient design, restauration et vue sur Downtown selon catégorie.",
        "en": "An elegant city address combining design, dining and Downtown outlooks by room category.",
        "frWatch": "Vérifier précisément la catégorie de vue, les balcons et le petit déjeuner.",
        "enWatch": "Confirm exact outlook, balcony and breakfast terms.",
        "officialUrl": "https://www.dorchestercollection.com/dubai/the-lana"
      },
      {
        "name": "One&Only One Za'abeel",
        "area": "Za'abeel · central Dubai",
        "fr": "Un hôtel urbain spectaculaire, davantage centré sur l'architecture et la vie de la ville que sur la plage.",
        "en": "An architectural urban stay focused on city experiences rather than beach life.",
        "frWatch": "Vérifier l'accès et la catégorie de chambre ; ne pas le présenter comme un resort de plage.",
        "enWatch": "Confirm access and room type; this is not a beachfront resort.",
        "officialUrl": "https://www.onezaabeel.com/one-and-only/"
      },
      {
        "name": "Atlantis The Royal",
        "area": "Palm Jumeirah",
        "fr": "Grand resort face à la mer, tourné vers les piscines, les restaurants et l'expérience Palm.",
        "en": "A statement beachfront resort centred on pools, dining and Palm Jumeirah living.",
        "frWatch": "Différencier vue, suite, prestations et éventuels accès inclus.",
        "enWatch": "Differentiate room view, suite benefits and actual inclusions.",
        "officialUrl": "https://www.atlantis.com/dubai/atlantis-the-royal"
      },
      {
        "name": "Jumeirah Al Naseem",
        "area": "Umm Suqeim · Jumeirah",
        "fr": "Hôtel contemporain sur le littoral de Jumeirah pour ceux qui recherchent plage, jardins et style de resort.",
        "en": "A contemporary Jumeirah coastal hotel for those seeking beach life and a refined resort rhythm.",
        "frWatch": "Comparer les orientations jardin, océan ou Burj Al Arab selon les catégories.",
        "enWatch": "Check garden, Gulf and Burj Al Arab view categories carefully.",
        "officialUrl": "https://www.jumeirah.com/en/stay/dubai/jumeirah-al-naseem"
      }
    ],
    "checksFr": [
      "Ne pas confondre Palm Jumeirah, Downtown, Business Bay, Marina et Jumeirah Beach.",
      "Confirmer l'accès plage ou piscine et les espaces véritablement réservés à votre catégorie.",
      "Vérifier taxes, frais, restauration, transferts et annulation avant de payer.",
      "Comparer la vue réelle depuis la chambre et les trajets aux heures de circulation."
    ],
    "checksEn": [
      "Do not confuse Palm Jumeirah, Downtown, Business Bay, Marina and Jumeirah Beach.",
      "Confirm beach/pool access and facilities actually included with your room.",
      "Check taxes, fees, dining, transfers and cancellation terms before paying.",
      "Verify real room views and allow for peak-hour traffic."
    ],
    "photos": {
      "west-beach-hero": {
        "src": "/images/travel/dubai-premium/destination/west-beach-hero.webp",
        "fr": "Palm West Beach, sa plage animée et la skyline de Dubaï dans la lumière dorée du soir",
        "en": "Palm West Beach, a lively luxury beachfront against Dubai's warm sunset skyline",
        "author": "Condé Nast Traveller Middle East",
        "license": "Droits commerciaux déclarés par le client · restrictions à confirmer avant production",
        "licenseUrl": "https://www.cntravellerme.com/story/dubai-sunset-spots-best-places-with-a-view",
        "sourcePage": "https://www.cntravellerme.com/story/dubai-sunset-spots-best-places-with-a-view"
      },
      "palm-aerial-bright": {
        "src": "/images/travel/dubai-premium/destination/palm-aerial-bright.webp",
        "fr": "Palm Jumeirah vue du ciel, ses îles en forme de palme et ses eaux bleues",
        "en": "Sunny aerial view of Palm Jumeirah's fronds and surrounding blue Gulf waters",
        "author": "Abid Ali · Pexels",
        "license": "Pexels License",
        "licenseUrl": "https://www.pexels.com/license/",
        "sourcePage": "https://www.pexels.com/photo/aerial-view-of-palm-jumeirah-10593605/"
      },
      "downtown-fountain-day": {
        "src": "/images/travel/dubai-premium/destination/downtown-fountain-day.webp",
        "fr": "Burj Khalifa et le bassin turquoise des fontaines de Downtown Dubaï, en plein jour",
        "en": "Burj Khalifa above Downtown Dubai's turquoise fountain lake in daylight",
        "author": "The Wandering Quinn",
        "license": "Droits commerciaux déclarés par le client · restrictions à confirmer avant production",
        "licenseUrl": "https://thewanderingquinn.com/5-day-dubai-itinerary/",
        "sourcePage": "https://thewanderingquinn.com/5-day-dubai-itinerary/"
      },
      "marina-yachts-bright": {
        "src": "/images/travel/dubai-premium/destination/marina-yachts-bright.webp",
        "fr": "Yachts de Dubai Marina et gratte-ciel lumineux se reflétant dans l'eau",
        "en": "Luxury yachts at Dubai Marina reflected in the bright waterfront skyline",
        "author": "Dubai Celebrations",
        "license": "Droits commerciaux déclarés par le client · restrictions à confirmer avant production",
        "licenseUrl": "https://www.dubaicelebrations.com/blogs/dubai-marina-hidden-gems",
        "sourcePage": "https://www.dubaicelebrations.com/blogs/dubai-marina-hidden-gems"
      },
      "marina": {
        "src": "/images/travel/city-guides/dubai/marina.webp",
        "fr": "Dubai Marina photographiée de jour",
        "en": "Dubai Marina photographed in daylight",
        "author": "Gfilip",
        "license": "CC BY-SA 4.0",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
        "sourcePage": "https://commons.wikimedia.org/wiki/File:Dubai_Marina_by_day.jpg"
      },
      "panorama": {
        "src": "/images/travel/city-guides/dubai/panorama.webp",
        "fr": "Panorama de Dubai Marina et de ses tours",
        "en": "A panoramic view across Dubai Marina",
        "author": "@ferd1graphy",
        "license": "CC BY-SA 3.0",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
        "sourcePage": "https://commons.wikimedia.org/wiki/File:DubaiMarinaPanorama.jpg"
      }
    }
  }
};
export function featuredCityGuide(slug:string | undefined):FeaturedCityGuideData | undefined {
 if (!slug || !(slug in featuredCityGuides)) return undefined;
 return featuredCityGuides[slug as FeaturedCitySlug];
}
