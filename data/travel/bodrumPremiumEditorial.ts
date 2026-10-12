/** Premium Bodrum editorial images. User reports permission for project use; rights NOT independently verified.
 * Sources and SHA-256 hashes tracked in data/travel/bodrumPremiumImageSources.json.
 * Individual hotel photos must not be implied to depict room views in other hotels. */
export type BodrumPremiumPhoto = {src:string;fr:string;en:string;credit:string;sourcePage:string};
export type BodrumHotelEditorial = {photos:BodrumPremiumPhoto[];credit:string;sourcePage:string;frBest:string;enBest:string;frStory:string;enStory:string};
export const bodrumHotelEditorial:Record<string,BodrumHotelEditorial> = {
  "Mandarin Oriental, Bodrum": {
    "photos": [
      {
        "src": "/images/travel/bodrum-premium/mandarin-oriental/mandarin-paradise-bay-terrace.webp",
        "fr": "Terrasse et panorama sur la baie à Mandarin Oriental, Bodrum",
        "en": "The waterfront terrace at Mandarin Oriental, Bodrum",
        "sourcePage": "https://www.mandarinoriental.com/en/bodrum/paradise-bay/gallery",
        "credit": "Mandarin Oriental, Bodrum · galerie officielle"
      },
      {
        "src": "/images/travel/bodrum-premium/mandarin-oriental/mandarin-bodrum-resort.webp",
        "fr": "Ambiance et architecture de Mandarin Oriental, Bodrum",
        "en": "Resort design at Mandarin Oriental, Bodrum",
        "sourcePage": "https://www.mandarinoriental.com/en/bodrum/paradise-bay/gallery",
        "credit": "Mandarin Oriental, Bodrum · galerie officielle"
      }
    ],
    "credit": "Mandarin Oriental, Bodrum · galerie officielle",
    "sourcePage": "https://www.mandarinoriental.com/en/bodrum/paradise-bay/gallery",
    "frBest": "Pour un séjour où la baie, les terrasses privées et le temps passé à l’hôtel comptent autant que les sorties.",
    "enBest": "For a stay shaped by the bay, private outdoor spaces and unhurried time on the property.",
    "frStory": "Sur les terrasses arborées de Paradise Bay, le paysage mêle pinèdes, oliviers et eau claire. Cette adresse se choisit pour son cadre : on vient y passer de vraies journées, et non seulement y dormir. La sélection des chambres, suites ou villas doit partir de la présence d’un espace extérieur et de la vue réellement annoncée, plutôt que de la seule catégorie de standing.",
    "enStory": "Terraces step through a green landscape towards Paradise Bay, with pine trees and the Aegean setting the pace. This is a place to spend whole days, not simply a base for nights out. Compare rooms, suites and villas by their genuine outdoor space and documented outlook rather than by status alone."
  },
  "The Bodrum EDITION": {
    "photos": [
      {
        "src": "/images/travel/bodrum-premium/the-bodrum-edition/edition-infinity-pool.webp",
        "fr": "La piscine à débordement du Bodrum EDITION",
        "en": "The Bodrum EDITION infinity pool",
        "sourcePage": "https://www.marriott.com/en-us/hotels/bjveb-the-bodrum-edition/photos/",
        "credit": "The Bodrum EDITION · galerie officielle Marriott"
      },
      {
        "src": "/images/travel/bodrum-premium/the-bodrum-edition/edition-beach-club.webp",
        "fr": "Plage et beach club du Bodrum EDITION",
        "en": "Beach club at The Bodrum EDITION",
        "sourcePage": "https://www.marriott.com/en-us/hotels/bjveb-the-bodrum-edition/photos/",
        "credit": "The Bodrum EDITION · galerie officielle Marriott"
      },
      {
        "src": "/images/travel/bodrum-premium/the-bodrum-edition/edition-yalikavak-terrace.webp",
        "fr": "Terrasse de suite au Bodrum EDITION",
        "en": "Suite terrace at The Bodrum EDITION",
        "sourcePage": "https://www.marriott.com/en-us/hotels/bjveb-the-bodrum-edition/photos/",
        "credit": "The Bodrum EDITION · galerie officielle Marriott"
      }
    ],
    "credit": "The Bodrum EDITION · galerie officielle Marriott",
    "sourcePage": "https://www.marriott.com/en-us/hotels/bjveb-the-bodrum-edition/photos/",
    "frBest": "Pour un équilibre entre plage chic, design contemporain et soirées tournées vers Yalıkavak.",
    "enBest": "For a balance of contemporary design, stylish beach days and Yalıkavak evenings.",
    "frStory": "The Bodrum EDITION propose une lecture plus sociale de la péninsule : plage soignée, piscine à débordement et restaurants où l’on reste volontiers après le coucher du soleil. Son identité n’est pas celle d’un refuge totalement isolé. Il est important de choisir entre une chambre tournée vers le jardin, une vue mer et une catégorie disposant réellement d’une piscine privative.",
    "enStory": "The Bodrum EDITION leans towards a sociable take on the peninsula: a beautifully conceived beach setting, an infinity pool and dining that carries well into the evening. It is not intended as a completely isolated sanctuary. Distinguish garden-facing rooms from sea-facing suites and genuinely private-pool accommodation."
  },
  "Maxx Royal Bodrum": {
    "photos": [
      {
        "src": "/images/travel/bodrum-premium/maxx-royal-bodrum/maxx-royal-pool.webp",
        "fr": "Les piscines du Maxx Royal Bodrum",
        "en": "Pool terraces at Maxx Royal Bodrum",
        "sourcePage": "https://www.maxxroyal.com/maxx-royal-bodrum/gallery",
        "credit": "Maxx Royal Bodrum Resort · galerie officielle"
      },
      {
        "src": "/images/travel/bodrum-premium/maxx-royal-bodrum/maxx-royal-island-villa.webp",
        "fr": "Villa du Maxx Royal Bodrum",
        "en": "Villa at Maxx Royal Bodrum",
        "sourcePage": "https://www.maxxroyal.com/maxx-royal-bodrum/gallery",
        "credit": "Maxx Royal Bodrum Resort · galerie officielle"
      },
      {
        "src": "/images/travel/bodrum-premium/maxx-royal-bodrum/maxx-royal-suites.webp",
        "fr": "Suite et espaces de séjour du Maxx Royal Bodrum",
        "en": "Suites and living spaces at Maxx Royal Bodrum",
        "sourcePage": "https://www.maxxroyal.com/maxx-royal-bodrum/gallery",
        "credit": "Maxx Royal Bodrum Resort · galerie officielle"
      }
    ],
    "credit": "Maxx Royal Bodrum Resort · galerie officielle",
    "sourcePage": "https://www.maxxroyal.com/maxx-royal-bodrum/gallery",
    "frBest": "Pour profiter du complexe, de ses piscines et de son confort, avec un véritable programme de séjour sur place.",
    "enBest": "For a resort-led escape centred on pools, comfort and leisurely days in the property.",
    "frStory": "Cette adresse se distingue par l’architecture des terrasses, les grands espaces et un rythme balnéaire où les restaurants, les piscines et la suite deviennent la destination. Avant de choisir une villa, il faut regarder sa situation dans le domaine, la confidentialité de sa piscine et les services effectivement compris. Le bon produit n’est pas nécessairement celui dont la photo semble la plus spectaculaire.",
    "enStory": "Terraced architecture, landscaped spaces and a resort-led rhythm place the pools, restaurants and suites at the centre of the stay. Before choosing a villa, verify its position within the property, the privacy of its pool and exactly which services are included. The most spectacular photograph is not always the right category for your trip."
  },
  "Six Senses Kaplankaya": {
    "photos": [
      {
        "src": "/images/travel/bodrum-premium/six-senses-kaplankaya/six-senses-sunset-terrace.webp",
        "fr": "Terrasse et bassin au coucher du soleil à Six Senses Kaplankaya",
        "en": "Sunset terrace and pool at Six Senses Kaplankaya",
        "sourcePage": "https://www.behance.net/gallery/97152533/Six-Senses-Kaplankaya-Resort-Spa-Wayfinding-Design",
        "credit": "Projet Six Senses Kaplankaya · Kemalcan Başaran / Behance"
      }
    ],
    "credit": "Projet Six Senses Kaplankaya · Kemalcan Başaran / Behance",
    "sourcePage": "https://www.behance.net/gallery/97152533/Six-Senses-Kaplankaya-Resort-Spa-Wayfinding-Design",
    "frBest": "Pour se retirer quelques jours, privilégier le bien-être et le paysage, loin de la marina et des soirées de Bodrum.",
    "enBest": "For a few days of seclusion, wellness and landscape, away from Bodrum’s marina nightlife.",
    "frStory": "Kaplankaya est une autre façon de vivre l’Égée : côte moins urbanisée, architecture intégrée au relief et temps réservé au spa, à la baignade et au repos. Le site se trouve dans le secteur de Milas ; les voyageurs qui souhaitent sortir chaque soir à Yalıkavak doivent compter les déplacements dans leur décision. Une suite avec piscine privée doit être distinguée d’une chambre disposant simplement d’un balcon.",
    "enStory": "Kaplankaya presents another side of the Aegean: a less developed shoreline, architecture integrated into the landscape and time set aside for wellness, swimming and rest. The resort is in the Milas area, so regular evenings in Yalıkavak would involve travel. A private-pool suite is a different booking proposition from a room with a balcony."
  }
};
export const bodrumAreaVisuals:BodrumPremiumPhoto[] = [
  {
    "src": "/images/travel/bodrum-premium/the-bodrum-edition/edition-beach-club.webp",
    "fr": "Beach club de The Bodrum EDITION, secteur de Yalıkavak",
    "en": "The Bodrum EDITION beach club in the Yalıkavak area",
    "credit": "The Bodrum EDITION",
    "sourcePage": "https://www.marriott.com/en-us/hotels/bjveb-the-bodrum-edition/photos/"
  },
  {
    "src": "/images/travel/bodrum-premium/mandarin-oriental/mandarin-paradise-bay-terrace.webp",
    "fr": "Terrasse de Mandarin Oriental, sur Paradise Bay",
    "en": "Mandarin Oriental terrace overlooking Paradise Bay",
    "credit": "Mandarin Oriental, Bodrum",
    "sourcePage": "https://www.mandarinoriental.com/en/bodrum/paradise-bay/gallery"
  },
  {
    "src": "/images/travel/bodrum-premium/six-senses-kaplankaya/six-senses-sunset-terrace.webp",
    "fr": "Six Senses Kaplankaya, terrasse au soleil couchant",
    "en": "Six Senses Kaplankaya sunset terrace",
    "credit": "Kemalcan Başaran / Behance",
    "sourcePage": "https://www.behance.net/gallery/97152533/Six-Senses-Kaplankaya-Resort-Spa-Wayfinding-Design"
  }
];
