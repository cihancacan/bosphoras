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
    photo('four-seasons-bosphorus-01-hero.jpg','https://media.cntraveler.com/photos/69de69a9de6c259b76d3c400/16%3A9/w_2560%2Cc_limit/Four-Seasons-Hotel-Istanbul-at-the-Bosphorus-triple-crown-april2026-PR-Global-09.jpg','Palais Four Seasons et piscine sur le Bosphore','Four Seasons waterfront and pool','https://www.cntraveler.com/hotels/turkey/beylerbeyi/four-seasons-hotel-istanbul-at-the-bosphorus'),
    photo('four-seasons-bosphorus-02-waterfront.jpg','https://media.cntraveler.com/photos/69de69ef221fdcedfa5f0f20/16%3A9/w_2560%2Cc_limit/Four-Seasons-Hotel-Istanbul-at-the-Bosphorus-triple-crown-april2026-PR-Global-74-bcaphoto-fs-25-05b-%281278%29.jpg','Espace restauration du Four Seasons','Dining at Four Seasons Bosphorus','https://www.cntraveler.com/hotels/turkey/beylerbeyi/four-seasons-hotel-istanbul-at-the-bosphorus'),
    photo('four-seasons-bosphorus-03-yali.jpg','https://media.cntraveler.com/photos/69de6987221fdcedfa5f0f14/16%3A9/w_2560%2Cc_limit/Breakfast-Four-Seasons-Hotel-Istanbul-at-the-Bosphorus-triple-crown-april2026-PR-Global-9.jpg','Petit déjeuner au Four Seasons','Breakfast at Four Seasons Bosphorus','https://www.cntraveler.com/hotels/turkey/beylerbeyi/four-seasons-hotel-istanbul-at-the-bosphorus'),
    photo('four-seasons-bosphorus-04-room.jpg','https://media.cntraveler.com/photos/69de6a1ee591ddd951d7f291/16%3A9/w_2560%2Cc_limit/Pool-Four-Seasons-Hotel-Istanbul-at-the-Bosphorus-triple-crown-april2026-PR-Global-1.jpg','Piscine du Four Seasons Bosphorus','Four Seasons Bosphorus swimming pool','https://www.cntraveler.com/hotels/turkey/beylerbeyi/four-seasons-hotel-istanbul-at-the-bosphorus'),
    photo('four-seasons-bosphorus-05-pool.jpg','https://media.cntraveler.com/photos/69de6a13de6c259b76d3c42d/16%3A9/w_2560%2Cc_limit/Front-Side-Courtyard-Four-Seasons-Hotel-Istanbul-at-the-Bosphorus-triple-crown-april2026-PR-Global-1.jpg','Cour et jardins de l'hôtel','Four Seasons palace courtyard','https://www.cntraveler.com/hotels/turkey/beylerbeyi/four-seasons-hotel-istanbul-at-the-bosphorus'),
  ],
  'mandarin-oriental': [
    photo('mandarin-oriental-01-hero.jpg','/images/travel/istanbul/mandarin-oriental/mandarin-oriental-01-hero.webp','Mandarin Oriental sur la rive du Bosphore','Mandarin Oriental Bosphorus waterfront exterior','https://www.pasifika.es/hoteles-de-lujo/turquia/estambul/Mandarin-Oriental-Bosphorus'),
    photo('mandarin-oriental-02-suite.jpg','/images/travel/istanbul/mandarin-oriental/mandarin-oriental-02-suite.webp','Salon d’une suite avec vue sur le Bosphore','Bosphorus suite living room','https://gulfnews.com/friday/friday-partner/mandarin-oriental-bosphorus-istanbul-embodies-design-as-exquisite-synergy-1.1717161494187'),
    photo('mandarin-oriental-03-bedroom.jpg','/images/travel/istanbul/mandarin-oriental/mandarin-oriental-03-bedroom.webp','Chambre d’une suite du Mandarin Oriental','One-bedroom suite at Mandarin Oriental','https://www.meetings-conventions-asia.com/news/hotels-and-resorts/new-mandarin-oriental-opens-in-istanbul'),
    photo('mandarin-oriental-04-spa.jpg','https://istanbulhammam.com/wp-content/uploads/2024/11/the-spa-at-mandarin-oriental-bosphorus-istanbul-6.jpg','Piscine du spa Mandarin Oriental','Mandarin Oriental indoor spa pool','https://istanbulhammam.com/discover-hamams/the-spa-at-mandarin-oriental-bosphorus/'),
  ],
  'four-seasons-sultanahmet': [
    photo('four-seasons-sultanahmet-01-hero.jpg','https://media.cntraveler.com/photos/69de63e3db67fc16233f36c8/16%3A9/w_2560%2Cc_limit/Four-Seasons-Hotel-Istanbul-at-Sultanahmet-triple-crown-april2026-PR-Global-DJI_20250914222231_0056_D.jpg','Vue aérienne de Sultanahmet et de l'hôtel','Aerial view of the Sultanahmet area','https://www.cntraveler.com/hotels/istanbul/four-seasons-hotel-istanbul-at-sultanahmet'),
    photo('four-seasons-sultanahmet-02-dining.jpg','https://media.cntraveler.com/photos/69de63af98d5afd348088233/16%3A9/w_2560%2Cc_limit/Four-Seasons-Hotel-Istanbul-at-Sultanahmet-triple-crown-april2026-PR-Global-_22_45564_A1.jpg','Salle à manger du Four Seasons Sultanahmet','Four Seasons Sultanahmet dining room','https://www.cntraveler.com/hotels/istanbul/four-seasons-hotel-istanbul-at-sultanahmet'),
    photo('four-seasons-sultanahmet-03-room.jpg','https://media.cntraveler.com/photos/69de63d198d5afd348088245/16%3A9/w_2560%2Cc_limit/Four-Seasons-Hotel-Istanbul-at-Sultanahmet-triple-crown-april2026-PR-Global-26478_A1.jpg','Salon du Four Seasons Sultanahmet','Four Seasons Sultanahmet lounge','https://www.cntraveler.com/hotels/istanbul/four-seasons-hotel-istanbul-at-sultanahmet'),
    photo('four-seasons-sultanahmet-04-gardens.jpg','https://media.cntraveler.com/photos/69de63fdd38aeb00771a576b/16%3A9/w_2560%2Cc_limit/Four-Seasons-Hotel-Istanbul-at-Sultanahmet-triple-crown-april2026-PR-Global-OCT_22_45451_A1.jpg','Entrée et espaces intérieurs de l'hôtel','Hotel entrance and lobby','https://www.cntraveler.com/hotels/istanbul/four-seasons-hotel-istanbul-at-sultanahmet'),
    photo('four-seasons-sultanahmet-05-rooftop.jpg','https://media.cntraveler.com/photos/69de63db98d5afd348088250/16%3A9/w_2560%2Cc_limit/Four-Seasons-Hotel-Istanbul-at-Sultanahmet-triple-crown-april2026-PR-Global-DJI_20250914221538_0036_D.jpg','Vue sur Sainte-Sophie et Sultanahmet','Hagia Sophia and Sultanahmet view','https://www.cntraveler.com/hotels/istanbul/four-seasons-hotel-istanbul-at-sultanahmet'),
  ],
  'shangri-la': [
    photo('shangri-la-01-hero.jpg','/images/travel/istanbul/shangri-la/shangri-la-01-hero.webp','Entrée du Shangri-La Bosphorus en soirée','Evening entrance at Shangri-La Bosphorus','https://www.turizmajansi.com/haber/shangri-la-bosphorus-istanbul-dunyanin-en-iyi-5-otelinden-biri-secildi-h70417'),
    photo('shangri-la-02-suite.jpg','https://byconnoisseur.com/wp-content/uploads/2023/06/Shangri-La-Istanbul-5.jpg','Chambre avec vue sur le Bosphore','Bosphorus-view guest room','https://byconnoisseur.com/hotel/shangri-la-istanbul/'),
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
