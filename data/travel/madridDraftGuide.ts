/** Destination #99: bilingual editorial draft. Not indexable until media and localization QA. */
import type {FeaturedCityGuideData} from './featuredCityGuides';
export const madridDraftGuide: Omit<FeaturedCityGuideData,'photos'|'slug'> & {slug:'madrid'} = {
  "slug": "madrid",
  "name": "Madrid",
  "country": "Espagne",
  "hero": "scene-1",
  "secondary": "scene-2",
  "eyebrowFr": "Espagne · Palais, art et hôtels de ville",
  "eyebrowEn": "Spain · Palaces, art and city hotels",
  "headingFr": "Madrid : choisir son quartier entre patrimoine, musées et art de vivre.",
  "headingEn": "Madrid: choose your neighbourhood for heritage, museums and city life.",
  "introFr": "Madrid se découvre à pied entre les places du vieux centre, les musées du Paseo del Prado, les jardins du Retiro et les boutiques de Salamanca. Choisissez votre hôtel selon vos visites, vos soirées et le niveau de tranquillité recherché.",
  "introEn": "Madrid unfolds on foot between the old town squares, the museums of Paseo del Prado, Retiro's gardens and Salamanca's boutiques. Choose your hotel around sightseeing, evening plans and your preferred level of quiet.",
  "editorialFr": "Sol et le Madrid des Habsbourg constituent une base centrale pour le Palais royal, Plaza Mayor et les rues historiques. Gran Vía et les environs de Callao offrent un accès aux spectacles, aux magasins et aux quartiers animés. Prado, Jerónimos et Retiro conviennent aux amateurs d'art et de promenades : le paysage culturel du Paseo del Prado et du Buen Retiro est inscrit au patrimoine mondial de l'UNESCO. Salamanca privilégie les boutiques haut de gamme, les restaurants et un cadre résidentiel élégant. Chamberí offre une vie de quartier, des places et des adresses gastronomiques. La Latina est appréciée pour ses ruelles et ses tavernes ; son animation augmente notamment le week-end.\n\nTrois à quatre nuits constituent une bonne base pour les principaux musées, le centre historique et un après-midi dans le Retiro. Pour Tolède ou Ségovie, ajoutez une journée et vérifiez la gare de départ. Le métro et la marche sont pratiques ; comparez les accès avec bagages et les horaires de fin de service. En été, prévoyez des visites matinales et des pauses aux heures les plus chaudes.\n\nDepuis Madrid-Barajas (MAD), comparez métro, trains de banlieue depuis le terminal T4, bus express et transferts selon votre hébergement. Vérifiez les formalités selon votre passeport. Comparez les hôtels à dates et occupation identiques, en tenant compte du petit-déjeuner, des taxes, de la climatisation, de l'insonorisation, de l'annulation et de l'accès saisonnier aux terrasses et piscines.",
  "editorialEn": "Sol and Habsburg Madrid are a central base for the Royal Palace, Plaza Mayor and historic streets. Gran Vía and Callao provide access to shows, shops and lively neighbourhoods. Prado, Jerónimos and Retiro suit art lovers and walks: the Paseo del Prado and Buen Retiro cultural landscape is a UNESCO World Heritage site. Salamanca offers luxury boutiques, dining and elegant residential streets. Chamberí has local squares and food addresses. La Latina is known for its lanes and taverns, especially lively at weekends.\n\nThree to four nights are a good base for major museums, the historic centre and an afternoon in Retiro. For Toledo or Segovia, add a day and check the departure station. The metro and walking are practical; compare luggage access and last services. In summer, plan morning visits and breaks during the hottest hours.\n\nFrom Madrid-Barajas (MAD), compare the metro, suburban trains from terminal T4, express buses and transfers around your hotel. Check passport-specific entry requirements. Compare hotels for matching dates and occupancy, accounting for breakfast, taxes, air conditioning, soundproofing, cancellation and seasonal terrace and pool access.",
  "hotelIntroFr": "Quatre styles : Mandarin Oriental Ritz pour le patrimoine et le Prado, Four Seasons pour le luxe central de Canalejas, Rosewood Villa Magna pour Salamanca et The Madrid EDITION pour une expérience contemporaine près de Sol.",
  "hotelIntroEn": "Four styles: Mandarin Oriental Ritz for heritage and the Prado, Four Seasons for central Canalejas luxury, Rosewood Villa Magna for Salamanca and The Madrid EDITION for contemporary design near Sol.",
  "areas": [
    {
      "name": "Sol et Madrid des Habsbourg",
      "enName": "Sol and Habsburg Madrid",
      "fr": "Plaza Mayor, Palais royal, Puerta del Sol et ruelles historiques.",
      "en": "Plaza Mayor, the Royal Palace, Puerta del Sol and historic lanes.",
      "frWatch": "Vérifier les rues piétonnes et le bruit en soirée.",
      "enWatch": "Check pedestrian streets and evening noise."
    },
    {
      "name": "Gran Vía et Callao",
      "enName": "Gran Vía and Callao",
      "fr": "Théâtres, commerces, terrasses et accès à Chueca et Malasaña.",
      "en": "Theatres, shops, terraces and access to Chueca and Malasaña.",
      "frWatch": "Comparer l'insonorisation et la vue des chambres.",
      "enWatch": "Compare soundproofing and room views."
    },
    {
      "name": "Prado, Jerónimos et Retiro",
      "enName": "Prado, Jerónimos and Retiro",
      "fr": "Musées, jardins, Cibeles et patrimoine culturel.",
      "en": "Museums, gardens, Cibeles and cultural heritage.",
      "frWatch": "Réserver les visites et contrôler les distances à pied.",
      "enWatch": "Plan museum tickets and walking distances."
    },
    {
      "name": "Salamanca",
      "enName": "Salamanca",
      "fr": "Boutiques de Serrano, galeries, restaurants et avenues élégantes.",
      "en": "Serrano boutiques, galleries, dining and elegant avenues.",
      "frWatch": "Vérifier la proximité des stations selon le programme.",
      "enWatch": "Check station access around your itinerary."
    },
    {
      "name": "Chamberí",
      "enName": "Chamberí",
      "fr": "Places résidentielles, cafés, architecture et restaurants locaux.",
      "en": "Residential squares, cafés, architecture and local dining.",
      "frWatch": "Anticiper les trajets vers les grands musées.",
      "enWatch": "Allow time for travel to the main museums."
    },
    {
      "name": "La Latina",
      "enName": "La Latina",
      "fr": "Ruelles, places historiques, tapas et proximité d'El Rastro.",
      "en": "Lanes, historic squares, tapas and proximity to El Rastro.",
      "frWatch": "Tenir compte de l'animation du week-end.",
      "enWatch": "Consider weekend activity and noise."
    }
  ],
  "experiences": [
    {
      "frTitle": "Explorer le Madrid historique",
      "enTitle": "Explore historic Madrid",
      "fr": "Associer le Palais royal, Plaza de Oriente et Plaza Mayor selon les horaires.",
      "en": "Pair the Royal Palace, Plaza de Oriente and Plaza Mayor around opening hours."
    },
    {
      "frTitle": "Découvrir le Paseo del Arte",
      "enTitle": "Discover the Art Walk",
      "fr": "Choisir le Prado, le Thyssen-Bornemisza ou le Reina Sofía selon vos intérêts.",
      "en": "Choose the Prado, Thyssen-Bornemisza or Reina Sofía according to your interests."
    },
    {
      "frTitle": "Profiter des jardins et des promenades",
      "enTitle": "Enjoy gardens and walks",
      "fr": "Prévoir le Retiro et, selon le temps disponible, Madrid Río.",
      "en": "Plan time for Retiro and, if time permits, Madrid Río."
    },
    {
      "frTitle": "Explorer les quartiers et la gastronomie",
      "enTitle": "Explore neighbourhoods and food",
      "fr": "Associer Salamanca, Chamberí ou La Latina selon vos envies de shopping et de cuisine.",
      "en": "Combine Salamanca, Chamberí or La Latina according to your shopping and dining interests."
    }
  ],
  "checksFr": [
    "Choisir un quartier adapté aux visites et aux soirées.",
    "Confirmer couchages, insonorisation et climatisation.",
    "Vérifier les formalités selon le passeport.",
    "Comparer le total avec taxes, petit-déjeuner et annulation.",
    "Vérifier les billets de musée et les accès saisonniers aux piscines."
  ],
  "checksEn": [
    "Choose a neighbourhood for sightseeing and evenings.",
    "Confirm bedding, soundproofing and air conditioning.",
    "Check passport-specific entry requirements.",
    "Compare totals including taxes, breakfast and cancellation.",
    "Check museum tickets and seasonal pool access."
  ],
  "hotels": [
    {
      "name": "Mandarin Oriental Ritz, Madrid",
      "area": "Prado · Jerónimos",
      "officialUrl": "https://www.mandarinoriental.com/en/madrid/hotel-ritz",
      "fr": "Palace historique près du Prado, rénové avec des chambres et suites raffinées, des restaurants, un jardin et des espaces de bien-être. Une adresse pour combiner patrimoine, art et service haut de gamme.",
      "en": "Historic palace hotel near the Prado with refined rooms and suites, dining, a garden and wellness facilities. A choice for heritage, art and high-end service.",
      "frWatch": "Confirmer l'orientation de la chambre et les prestations incluses.",
      "enWatch": "Confirm room orientation and included amenities."
    },
    {
      "name": "Four Seasons Hotel Madrid",
      "area": "Canalejas · Centro",
      "officialUrl": "https://www.fourseasons.com/madrid/",
      "fr": "Hôtel au sein du complexe historique Canalejas, près de Puerta del Sol, avec chambres, suites, spa, piscine intérieure et restauration en hauteur. Une base centrale pour les visites à pied.",
      "en": "Hotel within the historic Canalejas complex near Puerta del Sol, with rooms, suites, spa, indoor pool and elevated dining. A central base for sightseeing on foot.",
      "frWatch": "Comparer les catégories, les vues et l'accès au spa.",
      "enWatch": "Compare categories, views and spa access."
    },
    {
      "name": "Rosewood Villa Magna",
      "area": "Salamanca · Paseo de la Castellana",
      "officialUrl": "https://www.rosewoodhotels.com/en/villa-magna",
      "fr": "Adresse de style résidentiel à proximité des boutiques de Salamanca, avec chambres et suites élégantes, restaurants, jardin et spa. Elle convient aux séjours axés sur le shopping et la détente.",
      "en": "Residential-style address near Salamanca's boutiques with elegant rooms and suites, dining, a garden and spa. It suits shopping and relaxation-focused stays.",
      "frWatch": "Vérifier les catégories, les vues et les temps de trajet vers le centre ancien.",
      "enWatch": "Check categories, outlook and travel times to the old town."
    },
    {
      "name": "The Madrid EDITION",
      "area": "Centro · Plaza de Celenque",
      "officialUrl": "https://www.marriott.com/en-us/hotels/madeb-the-madrid-edition/overview/",
      "fr": "Hôtel de design contemporain près de Sol, avec chambres, suites, espaces de restauration, spa et terrasse avec piscine. Une adresse pour les voyageurs qui privilégient le design et la vie urbaine.",
      "en": "Contemporary design hotel near Sol with rooms, suites, dining, spa and a rooftop pool. A choice for travellers who prioritise design and urban life.",
      "frWatch": "Vérifier la disponibilité saisonnière de la piscine et l'ambiance nocturne.",
      "enWatch": "Check seasonal pool availability and evening atmosphere."
    }
  ]
};
export const madridDraftFaq = {
  "fr": [
    {
      "q": "Où dormir à Madrid pour une première visite ?",
      "a": "Sol ou Prado sont pratiques pour les monuments et musées ; Salamanca convient à un séjour axé sur le shopping."
    },
    {
      "q": "Salamanca ou Gran Vía ?",
      "a": "Salamanca privilégie les boutiques et les rues résidentielles ; Gran Vía les spectacles et l'animation centrale."
    },
    {
      "q": "Combien de nuits prévoir ?",
      "a": "Trois à quatre nuits pour la ville, davantage pour Tolède ou Ségovie."
    },
    {
      "q": "Quel quartier choisir avec des enfants ?",
      "a": "Retiro offre un cadre propice aux promenades ; vérifiez les couchages et distances à pied."
    },
    {
      "q": "Comment rejoindre Madrid depuis Barajas ?",
      "a": "Comparez métro, train depuis T4, bus express et transferts selon votre hôtel."
    },
    {
      "q": "Faut-il louer une voiture ?",
      "a": "Non pour les visites centrales : métro, marche et taxis ponctuels sont pratiques."
    },
    {
      "q": "Comment comparer les hôtels ?",
      "a": "Comparez dates, voyageurs, catégories, taxes, petit-déjeuner, annulation et accès aux équipements."
    }
  ],
  "en": [
    {
      "q": "Where should first-time visitors stay in Madrid?",
      "a": "Sol or Prado are convenient for monuments and museums; Salamanca suits shopping-focused stays."
    },
    {
      "q": "Salamanca or Gran Vía?",
      "a": "Salamanca suits boutiques and residential streets; Gran Vía suits shows and a lively central setting."
    },
    {
      "q": "How many nights should I plan?",
      "a": "Three to four nights for Madrid, longer for Toledo or Segovia."
    },
    {
      "q": "Which area suits families?",
      "a": "Retiro is convenient for walks; check bedding and walking distances."
    },
    {
      "q": "How do I reach Madrid from Barajas?",
      "a": "Compare metro, trains from T4, express buses and transfers around your hotel."
    },
    {
      "q": "Do I need a rental car?",
      "a": "Not for central sightseeing: metro, walking and occasional taxis are practical."
    },
    {
      "q": "How should I compare hotels?",
      "a": "Compare matching dates, guests, room categories, taxes, breakfast, cancellation and facility access."
    }
  ]
};
export const madridDraftSeo = {
  "fr": {
    "title": "Où dormir à Madrid ? Sol, Retiro, Salamanca et quartiers",
    "hotelTitle": "Hôtels de luxe à Madrid : Ritz, Four Seasons, Rosewood et EDITION",
    "description": "Comparez les quartiers et hôtels de Madrid : Sol, Gran Vía, Prado, Retiro, Salamanca, transports et conseils pour votre séjour."
  },
  "en": {
    "title": "Where to Stay in Madrid: Sol, Retiro & Salamanca",
    "hotelTitle": "Luxury Hotels in Madrid: Ritz, Four Seasons, Rosewood & EDITION",
    "description": "Compare Madrid neighbourhoods and hotels: Sol, Gran Vía, Prado, Retiro, Salamanca, transport and practical stay tips."
  }
};
export const madridDraftSources = [
  "https://www.esmadrid.com/en/madrid-neighbourhoods",
  "https://www.esmadrid.com/en/72-hours-madrid",
  "https://www.esmadrid.com/en/madrid-neighbourhoods/retiro",
  "https://www.visitmadrid.es/en/route/madrid-essentials",
  "https://www.esmadrid.com/en/michelin-key-hotels",
  "https://www.mandarinoriental.com/en/madrid/hotel-ritz",
  "https://www.fourseasons.com/madrid/",
  "https://www.rosewoodhotels.com/en/villa-magna",
  "https://www.marriott.com/en-us/hotels/madeb-the-madrid-edition/overview/"
];
