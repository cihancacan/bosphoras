/**
 * Editorial photography — Bosphoras Luxury Stays (Istanbul pilot, Oct 2026).
 * Photographer/hotel source URLs are recorded for each asset.
 * User stated they hold rights to use project hotel photos; do not infer any hotel endorsement.
 * External image delivery is provisional. Migrate verified originals to /public/images/travel
 * once source files are available. No hotel booking/availability is implied.
 */
export type HotelPhoto = {
  filename: string;
  src: string;
  fr: string;
  en: string;
  sourcePage: string;
};
const photo = (filename: string, src: string, fr: string, en: string, sourcePage: string): HotelPhoto => ({ filename, src, fr, en, sourcePage });
const kempinskiGallery = 'https://www.kempinski.com/en/ciragan-palace/image-gallery';
const fourSeasonsBosphorusGallery = 'https://www.fourseasons.com/bosphorus/photos-and-videos/';
const fourSeasonsSultanahmetGallery = 'https://www.fourseasons.com/istanbul/photos-and-videos/';
const stRegisGallery = 'https://www.marriott.com/en-us/hotels/istxr-the-st-regis-istanbul/photos/';
const ritzGallery = 'https://www.ritzcarlton.com/en/hotels/istrz-the-ritz-carlton-istanbul/photos/';

export const istanbulHotelPhotos: Record<string, readonly HotelPhoto[]> = {
  peninsula: [
    photo('peninsula-01-hero.jpg','/images/Peninsula.pool.andwiew.jpg','Piscine extérieure du Peninsula et Bosphore','The Peninsula outdoor pool beside the Bosphorus','https://www.peninsula.com/en/istanbul/photos-and-videos'),
    photo('peninsula-02-waterfront.jpg','/images/peninsula.pool.and.saint-sophie.jpg','Piscine et silhouette de Sainte-Sophie','Pool and the Hagia Sophia skyline','https://www.peninsula.com/en/istanbul/photos-and-videos'),
    photo('peninsula-03-indoor-pool.jpg','/images/peninsula.interior.pool.jpg','Piscine intérieure','Indoor pool','https://www.peninsula.com/en/istanbul/photos-and-videos'),
    photo('peninsula-04-lobby.jpg','/images/peninsula.lobby.jpg','Espaces intérieurs','Hotel interiors','https://www.peninsula.com/en/istanbul/photos-and-videos'),
    photo('peninsula-05-hammam.jpg','/images/peninsula.hammam.jpg','Hammam','Hammam','https://www.peninsula.com/en/istanbul/photos-and-videos'),
    photo('peninsula-06-fitness.jpg','/images/peninsula.fitness.jpg','Salle de fitness','Fitness centre','https://www.peninsula.com/en/istanbul/photos-and-videos'),
  ],
  ciragan: [
    photo('ciragan-01-hero.jpg','/images/travel/istanbul/ciragan/ciragan-01-hero.webp','Piscine du Çırağan Palace au bord du Bosphore','Çırağan Palace waterfront pool',kempinskiGallery),
    photo('ciragan-02-palace.jpg','/images/travel/istanbul/ciragan/ciragan-02-palace.webp','Vue de la galerie officielle du Çırağan Palace','Çırağan Palace official gallery view',kempinskiGallery),
    photo('ciragan-03-hotel.jpg','/images/travel/istanbul/ciragan/ciragan-03-hotel.webp','Photographie de l’établissement','Hotel property photograph',kempinskiGallery),
    photo('ciragan-04-interior.jpg','/images/travel/istanbul/ciragan/ciragan-04-interior.webp','Photographie de la galerie officielle','Official hotel gallery photograph',kempinskiGallery),
    photo('ciragan-05-details.jpg','/images/travel/istanbul/ciragan/ciragan-05-details.webp','Détail du Çırağan Palace','Çırağan Palace detail',kempinskiGallery),
  ],
  'four-seasons-bosphorus': [
    photo('four-seasons-bosphorus-01-hero.jpg','/images/travel/istanbul/four-seasons-bosphorus/four-seasons-bosphorus-01-hero.webp','Palais Four Seasons et piscine sur le Bosphore','Four Seasons waterfront and pool','https://www.cntraveler.com/hotels/turkey/beylerbeyi/four-seasons-hotel-istanbul-at-the-bosphorus'),
    photo('four-seasons-bosphorus-02-waterfront.jpg','/images/travel/istanbul/four-seasons-bosphorus/four-seasons-bosphorus-02-waterfront.webp','Espace restauration du Four Seasons','Dining at Four Seasons Bosphorus','https://www.cntraveler.com/hotels/turkey/beylerbeyi/four-seasons-hotel-istanbul-at-the-bosphorus'),
    photo('four-seasons-bosphorus-03-yali.jpg','/images/travel/istanbul/four-seasons-bosphorus/four-seasons-bosphorus-03-yali.webp','Petit déjeuner au Four Seasons','Breakfast at Four Seasons Bosphorus','https://www.cntraveler.com/hotels/turkey/beylerbeyi/four-seasons-hotel-istanbul-at-the-bosphorus'),
    photo('four-seasons-bosphorus-04-room.jpg','/images/travel/istanbul/four-seasons-bosphorus/four-seasons-bosphorus-04-room.webp','Piscine du Four Seasons Bosphorus','Four Seasons Bosphorus swimming pool','https://www.cntraveler.com/hotels/turkey/beylerbeyi/four-seasons-hotel-istanbul-at-the-bosphorus'),
    photo('four-seasons-bosphorus-05-pool.jpg','/images/travel/istanbul/four-seasons-bosphorus/four-seasons-bosphorus-05-pool.webp','Cour et jardins de l’hôtel','Four Seasons palace courtyard','https://www.cntraveler.com/hotels/turkey/beylerbeyi/four-seasons-hotel-istanbul-at-the-bosphorus'),
  ],
  'mandarin-oriental': [
    photo('mandarin-oriental-01-hero.jpg','/images/travel/istanbul/mandarin-oriental/mandarin-oriental-01-hero.webp','Mandarin Oriental sur la rive du Bosphore','Mandarin Oriental Bosphorus waterfront exterior','https://www.pasifika.es/hoteles-de-lujo/turquia/estambul/Mandarin-Oriental-Bosphorus'),
    photo('mandarin-oriental-02-suite.jpg','/images/travel/istanbul/mandarin-oriental/mandarin-oriental-02-suite.webp','Salon d’une suite avec vue sur le Bosphore','Bosphorus suite living room','https://gulfnews.com/friday/friday-partner/mandarin-oriental-bosphorus-istanbul-embodies-design-as-exquisite-synergy-1.1717161494187'),
    photo('mandarin-oriental-03-bedroom.jpg','/images/travel/istanbul/mandarin-oriental/mandarin-oriental-03-bedroom.webp','Chambre d’une suite du Mandarin Oriental','One-bedroom suite at Mandarin Oriental','https://www.meetings-conventions-asia.com/news/hotels-and-resorts/new-mandarin-oriental-opens-in-istanbul'),
    photo('mandarin-oriental-04-royal-suite.jpg','/images/travel/istanbul/mandarin-oriental/mandarin-oriental-04-royal-suite.webp','Suite royale avec vue sur le Bosphore au Mandarin Oriental','Royal Bosphorus Suite at Mandarin Oriental','https://www.cntraveler.com/hotels/istanbul/mandarin-oriental-bosphorus-istanbul'),
  ],
  'four-seasons-sultanahmet': [
    photo('four-seasons-sultanahmet-01-hero.jpg','/images/travel/istanbul/four-seasons-sultanahmet/four-seasons-sultanahmet-01-hero.webp','Vue aérienne de Sultanahmet et de l’hôtel','Aerial view of the Sultanahmet area','https://www.cntraveler.com/hotels/istanbul/four-seasons-hotel-istanbul-at-sultanahmet'),
    photo('four-seasons-sultanahmet-02-dining.jpg','/images/travel/istanbul/four-seasons-sultanahmet/four-seasons-sultanahmet-02-dining.webp','Salle à manger du Four Seasons Sultanahmet','Four Seasons Sultanahmet dining room','https://www.cntraveler.com/hotels/istanbul/four-seasons-hotel-istanbul-at-sultanahmet'),
    photo('four-seasons-sultanahmet-03-room.jpg','/images/travel/istanbul/four-seasons-sultanahmet/four-seasons-sultanahmet-03-room.webp','Salon du Four Seasons Sultanahmet','Four Seasons Sultanahmet lounge','https://www.cntraveler.com/hotels/istanbul/four-seasons-hotel-istanbul-at-sultanahmet'),
    photo('four-seasons-sultanahmet-04-gardens.jpg','/images/travel/istanbul/four-seasons-sultanahmet/four-seasons-sultanahmet-04-gardens.webp','Entrée et espaces intérieurs de l’hôtel','Hotel entrance and lobby','https://www.cntraveler.com/hotels/istanbul/four-seasons-hotel-istanbul-at-sultanahmet'),
    photo('four-seasons-sultanahmet-05-rooftop.jpg','/images/travel/istanbul/four-seasons-sultanahmet/four-seasons-sultanahmet-05-rooftop.webp','Vue sur Sainte-Sophie et Sultanahmet','Hagia Sophia and Sultanahmet view','https://www.cntraveler.com/hotels/istanbul/four-seasons-hotel-istanbul-at-sultanahmet'),
  ],
  'shangri-la': [
    photo('shangri-la-01-hero.jpg','/images/travel/istanbul/shangri-la/shangri-la-01-hero.webp','Entrée du Shangri-La Bosphorus en soirée','Evening entrance at Shangri-La Bosphorus','https://www.turizmajansi.com/haber/shangri-la-bosphorus-istanbul-dunyanin-en-iyi-5-otelinden-biri-secildi-h70417'),
    photo('shangri-la-02-waterfront.jpg','/images/travel/istanbul/shangri-la/shangri-la-02-waterfront.webp','Vue du Shangri-La sur le Bosphore','Shangri-La Bosphorus waterfront view','https://www.cntraveler.com/hotels/istanbul/shangri-la-bosphorus-istanbul'),
    photo('shangri-la-03-lobby.jpg','/images/travel/istanbul/shangri-la/shangri-la-03-lobby.webp','Hall du Shangri-La Bosphorus','Shangri-La Bosphorus lobby','https://www.onthebeach.ie/hotels/turkey/istanbul/shangri-la-bosphorus-istanbul'),
    photo('shangri-la-04-waterfront.jpg','/images/travel/istanbul/shangri-la/shangri-la-04-waterfront.webp','Vue sur le quai et les ferries au Bosphore','Bosphorus ferry and waterfront','https://www.shangri-la.com/en/landing/stay-and-save-with-shangrila/'),
  ],
  raffles: [
    photo('raffles-01-hero.jpg','/images/travel/istanbul/raffles/raffles-01-hero.webp','Panorama du Bosphore depuis Raffles','Bosphorus panorama from Raffles','https://www.raffles.com/istanbul/gallery/'),
    photo('raffles-02-art.jpg','/images/travel/istanbul/raffles/raffles-02-art.webp','Sculpture dans les espaces de Raffles','Art installation at Raffles Istanbul','https://www.raffles.com/istanbul/arcade/'),
    photo('raffles-03-suite.jpg','/images/travel/istanbul/raffles/raffles-03-suite.webp','Suite du Raffles avec vue sur le Bosphore','Raffles Bosphorus suite panorama','https://www.cntraveler.com/hotels/istanbul/raffles-istanbul'),
    photo('raffles-04-spa.jpg','/images/travel/istanbul/raffles/raffles-04-spa.webp','Piscine intérieure du spa Raffles','Raffles indoor spa pool','https://www.skininc.com/business/industry-news/news/22936074/forbes-travel-guide-unveils-2025-star-award-winners'),
  ],
  'st-regis': [
    photo('st-regis-01-hero.jpg','/images/travel/istanbul/st-regis/st-regis-01-hero.webp','Façade de l’hôtel St. Regis Istanbul','The St. Regis Istanbul exterior',stRegisGallery),
    photo('st-regis-02-atrium.jpg','/images/travel/istanbul/st-regis/st-regis-02-atrium.webp','Atrium de l’hôtel','Hotel atrium',stRegisGallery),
    photo('st-regis-03-suite.jpg','/images/travel/istanbul/st-regis/st-regis-03-suite.webp','Suite St. Regis','St. Regis suite',stRegisGallery),
    photo('st-regis-04-balcony.jpg','/images/travel/istanbul/st-regis/st-regis-04-balcony.webp','Balcon d’une suite','Suite balcony',stRegisGallery),
    photo('st-regis-05-pool.jpg','/images/travel/istanbul/st-regis/st-regis-05-pool.webp','Piscine intérieure Iridium Spa','Iridium Spa indoor pool',stRegisGallery),
  ],
  'ritz-carlton': [
    photo('ritz-carlton-01-hero.jpg','/images/travel/istanbul/ritz-carlton/ritz-carlton-01-hero.webp','Baignoire avec vue sur le Bosphore au Ritz-Carlton','Ritz-Carlton bathtub with Bosphorus view',ritzGallery),
    photo('ritz-carlton-02-room.jpg','/images/travel/istanbul/ritz-carlton/ritz-carlton-02-room.webp','Chambre de l’hôtel Ritz-Carlton','Ritz-Carlton guest room',ritzGallery),
    photo('ritz-carlton-03-balcony.jpg','/images/travel/istanbul/ritz-carlton/ritz-carlton-03-balcony.webp','Balcon avec vue sur le Bosphore','Bosphorus view balcony',ritzGallery),
    photo('ritz-carlton-04-suite.jpg','/images/travel/istanbul/ritz-carlton/ritz-carlton-04-suite.webp','Suite avec vue sur le Bosphore','Bosphorus view suite',ritzGallery),
    photo('ritz-carlton-05-view.jpg','/images/travel/istanbul/ritz-carlton/ritz-carlton-05-view.webp','Panorama sur Istanbul et le Bosphore','Istanbul and Bosphorus panorama',ritzGallery),
  ],
};
export const hotelHeroPhoto = (id: string): HotelPhoto | undefined => istanbulHotelPhotos[id]?.[0];
