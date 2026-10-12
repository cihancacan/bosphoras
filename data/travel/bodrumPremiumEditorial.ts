/** Premium Bodrum editorial images. User reports permission for project use; rights NOT independently verified.
 * Sources and SHA-256 hashes tracked in data/travel/bodrumPremiumImageSources.json.
 * Individual hotel photos must not be implied to depict room views in other hotels. */
export type BodrumPremiumPhoto = {src:string;fr:string;en:string;credit:string;sourcePage:string};
export type BodrumHotelEditorial = {photos:BodrumPremiumPhoto[];credit:string;sourcePage:string;frBest:string;enBest:string;frStory:string;enStory:string};
export const bodrumHotelEditorial:Record<string,BodrumHotelEditorial> = {
  "Mandarin Oriental, Bodrum": {
    "photos": [
      {
        "src": "/images/travel/bodrum-premium/mandarin-oriental/mandarin-infinity-pool-v2.webp",
        "fr": "La piscine du Mandarin Oriental, Bodrum",
        "en": "Pool at Mandarin Oriental, Bodrum",
        "sourcePage": "https://thefamilysuite.co.uk/hotels/mandarin-oriental-bodrum/",
        "credit": "The Family Suite · Mandarin Oriental, Bodrum"
      },
      {
        "src": "/images/travel/bodrum-premium/mandarin-oriental/mandarin-resort-aerial-v2.webp",
        "fr": "Vue aérienne du resort Mandarin Oriental et de sa plage",
        "en": "Aerial view of Mandarin Oriental resort and beach",
        "sourcePage": "https://www.michelinkeyhotels.com/hotels/mandarin-oriental-bodrum",
        "credit": "Michelin Key Hotels · Mandarin Oriental, Bodrum"
      },
      {
        "src": "/images/travel/bodrum-premium/mandarin-oriental/mandarin-seaside-terrace-v2.webp",
        "fr": "Terrasse et piscine en bord de mer au Mandarin Oriental, Bodrum",
        "en": "Seaside terrace and pool at Mandarin Oriental, Bodrum",
        "sourcePage": "https://www.seasong.com/hoteldetail/30/5/mandarin-oriental-bodrum",
        "credit": "Sea Song · Mandarin Oriental, Bodrum"
      }
    ],
    "credit": "Sources hôtelières, voir les crédits individuels",
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
        "src": "/images/travel/bodrum-premium/six-senses-kaplankaya/six-senses-bays-aerial-v2.webp",
        "fr": "Le Six Senses Kaplankaya et sa baie turquoise vus du ciel",
        "en": "Six Senses Kaplankaya and its turquoise bay from above",
        "sourcePage": "https://www.easyjet.com/en/holidays/turkey/bodrum/bozbuk/six-senses-kaplankaya",
        "credit": "easyJet Holidays · Six Senses Kaplankaya"
      },
      {
        "src": "/images/travel/bodrum-premium/six-senses-kaplankaya/six-senses-sunset-terrace.webp",
        "fr": "La terrasse du Six Senses Kaplankaya au coucher du soleil",
        "en": "Six Senses Kaplankaya terrace at sunset",
        "sourcePage": "https://www.behance.net/gallery/97152533/Six-Senses-Kaplankaya-Resort-Spa-Wayfinding-Design",
        "credit": "Kemalcan Başaran / Behance · Six Senses Kaplankaya"
      },
      {
        "src": "/images/travel/bodrum-premium/six-senses-kaplankaya/six-senses-pool-suite-v2.webp",
        "fr": "Salon d’une suite avec piscine privative et vue mer à Six Senses Kaplankaya",
        "en": "Living area of a private-pool sea-view suite at Six Senses Kaplankaya",
        "sourcePage": "https://planetescape.pl/en/luxury/hotel/turcja-six-senses-kaplankaya/",
        "credit": "Planet Escape · Six Senses Kaplankaya"
      }
    ],
    "credit": "Sources hôtelières identifiées, crédits détaillés sous les images",
    "sourcePage": "https://www.sixsenses.com/en/hotels-resorts/europe/turkey/kaplankaya/gallery",
    "frBest": "Pour une retraite confidentielle avec spa et activités bien-être, plages et vues sur l’Égée, à l’écart des soirées animées de Yalıkavak.",
    "enBest": "For a secluded wellness escape with spa experiences, quiet beaches and Aegean outlooks, away from Yalıkavak’s nightlife.",
    "frStory": "Six Senses Kaplankaya privilégie l’espace et le ralentissement plutôt que la vie de marina. Installé sur les reliefs de Bozbük, dans le district de Milas, il associe plages, sentiers, architecture intégrée au paysage et un spa annoncé à 10 000 m², avec bassin intérieur chauffé, hammams et espaces hydrothermaux. C’est une adresse où l’on peut passer plusieurs journées entre la mer, une séance de yoga et une longue pause sur la terrasse. Le choix doit se faire selon la catégorie précise : certaines suites et résidences possèdent leur piscine privée, mais ce n’est pas le cas de toutes les chambres. À vérifier également : la vue réelle, les activités disponibles selon les dates et les transferts depuis l’aéroport ou Bodrum.",
    "enStory": "Six Senses Kaplankaya favours space, restoration and a slower rhythm over marina nightlife. Built into the hills of Bozbük in the Milas district, it brings together quiet beaches, walking trails, architecture that follows the landscape and a reported 10,000-square-metre spa with a heated indoor pool, hammams and hydrothermal facilities. Days here can flow between the Aegean, yoga and time on a private terrace. Room category matters: certain suites and residences have their own pools, but not every guestroom does. Check the actual outlook, seasonal activity schedule and transfers from the airport or Bodrum."
  }
};
export const bodrumAreaVisuals:BodrumPremiumPhoto[] = [
  {
    "src": "/images/travel/city-guides/bodrum/marina.webp",
    "fr": "La marina de Yalıkavak et ses yachts sur la côte de Bodrum",
    "en": "Yalıkavak Marina and its yachts on the Bodrum coast",
    "credit": "CeeGee · Wikimedia Commons · CC0 1.0",
    "sourcePage": "https://commons.wikimedia.org/wiki/File:YalıkavakMarina_(5).jpg"
  },
  {
    "src": "/images/travel/bodrum-premium/destination/bodrum-turquoise-bay-v2.webp",
    "fr": "Crique turquoise et voiliers sur la péninsule de Bodrum",
    "en": "Turquoise cove and sailing boats on the Bodrum Peninsula",
    "credit": "Luxury Tribune · photographie de destination",
    "sourcePage": "https://www.luxurytribune.com/en/bulgari-hotels-resorts-opens-a-new-address-in-turkey"
  },
  {
    "src": "/images/travel/bodrum-premium/six-senses-kaplankaya/kaplankaya-rocky-coast-v2.webp",
    "fr": "La côte rocheuse de Kaplankaya et ses eaux turquoise",
    "en": "Rocky coastline and turquoise water at Kaplankaya",
    "credit": "Room + Wild · panorama de côte",
    "sourcePage": "https://www.roomandwild.com/six-senses-kaplankaya"
  }
];
