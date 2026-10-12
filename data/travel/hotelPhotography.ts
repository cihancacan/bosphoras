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
    photo('ciragan-01-hero.jpg','https://storage.kempinski.com/cdn-cgi/image/w%3D1920%2Cf%3Dauto%2Cg%3Dauto%2Cfit%3Dscale-down/ki-cms-prod/images/9/0/0/5/2025009-1-eng-GB/1615764249be-Ciragan-Palace-Kempinski-Istanbul-copyright-Kempinski-Hotels.jpg','Piscine du Çırağan Palace au bord du Bosphore','Çırağan Palace waterfront pool',kempinskiGallery),
    photo('ciragan-02-palace.jpg','https://storage.kempinski.com/cdn-cgi/image/w%3D1920%2Cf%3Dauto%2Cfit%3Dscale-down%2Cg%3Dauto/ki-cms-prod/images/7/9/9/1/16421997-1-eng-GB/e0755ba91296-80352851_4K.jpg','Vue de la galerie officielle du Çırağan Palace','Çırağan Palace official gallery view',kempinskiGallery),
    photo('ciragan-03-hotel.jpg','https://storage.kempinski.com/cdn-cgi/image/w%3D1920%2Cf%3Dauto%2Cfit%3Dscale-down%2Cg%3Dauto/ki-cms-prod/images/8/7/4/9/179478-1-eng-GB/af84e187d7a6-73657607_4K.jpg','Photographie de l’établissement','Hotel property photograph',kempinskiGallery),
    photo('ciragan-04-interior.jpg','https://storage.kempinski.com/cdn-cgi/image/w%3D1920%2Cf%3Dauto%2Cfit%3Dscale-down%2Cg%3Dauto/ki-cms-prod/images/7/3/0/2/16422037-1-eng-GB/239975ddf049-80352843_4K.jpg','Photographie de la galerie officielle','Official hotel gallery photograph',kempinskiGallery),
    photo('ciragan-05-details.jpg','https://storage.kempinski.com/cdn-cgi/image/w%3D1920%2Cf%3Dauto%2Cfit%3Dscale-down%2Cg%3Dauto/ki-cms-prod/images/8/1/1/9/179118-1-eng-GB/8be20947a472-73657673_4K.jpg','Détail du Çırağan Palace','Çırağan Palace detail',kempinskiGallery),
  ],
  'four-seasons-bosphorus': [
    photo('four-seasons-bosphorus-01-hero.jpg','https://www.fourseasons.com/alt/img-opt/~70.1530.0%2C0000-38%2C7500-3000%2C0000-1687%2C5000/publish/content/dam/fourseasons/images/web/BOP/BOP_266_original.jpg','Palais Four Seasons au crépuscule','Four Seasons Bosphorus palace at dusk',fourSeasonsBosphorusGallery),
    photo('four-seasons-bosphorus-02-waterfront.jpg','https://www.fourseasons.com/alt/img-opt/~70.1530.0%2C0000-0%2C0000-1674%2C6667-942%2C0000/publish/content/dam/fourseasons/images/web/BOP/BOP_269_original.jpg','Terrasse du Four Seasons au bord du Bosphore','Four Seasons waterfront terrace',fourSeasonsBosphorusGallery),
    photo('four-seasons-bosphorus-03-yali.jpg','https://www.fourseasons.com/alt/img-opt/~70.1530.0%2C0000-156%2C2500-3000%2C0000-1687%2C5000/publish/content/dam/fourseasons/images/web/BOP/BOP_1455_original.jpg','Terrasse du restaurant Yalı','Yalı restaurant terrace',fourSeasonsBosphorusGallery),
    photo('four-seasons-bosphorus-04-room.jpg','https://www.fourseasons.com/alt/img-opt/~70.1530.0%2C0000-156%2C2500-3000%2C0000-1687%2C5000/publish/content/dam/fourseasons/images/web/BOP/BOP_002_original.jpg','Chambre Palace Bosphorus','Palace Bosphorus room',fourSeasonsBosphorusGallery),
    photo('four-seasons-bosphorus-05-pool.jpg','https://www.fourseasons.com/alt/img-opt/~70.1530.0%2C0000-156%2C2500-3000%2C0000-1687%2C5000/publish/content/dam/fourseasons/images/web/BOP/BOP_1025_original.jpg','Piscine intérieure','Indoor pool',fourSeasonsBosphorusGallery),
  ],
  'mandarin-oriental': [
    photo('mandarin-oriental-01-hero.jpg','https://www.pasifika.es/Content/images/foto/%E2%80%8BMandarin-Oriental-Bosphorus-h1.jpg','Mandarin Oriental sur la rive du Bosphore','Mandarin Oriental Bosphorus waterfront exterior','https://www.pasifika.es/hoteles-de-lujo/turquia/estambul/Mandarin-Oriental-Bosphorus'),
    photo('mandarin-oriental-02-suite.jpg','https://media.assettype.com/gulfnews%2Fimport%2F2024%2F05%2F31%2FMandarin-Bosphorus-Suite-Living-Room-FOR-WEB_18fcec901bd_large.jpg','Salon d’une suite avec vue sur le Bosphore','Bosphorus suite living room','https://gulfnews.com/friday/friday-partner/mandarin-oriental-bosphorus-istanbul-embodies-design-as-exquisite-synergy-1.1717161494187'),
    photo('mandarin-oriental-03-bedroom.jpg','https://ik.imgkit.net/3vlqs5axxjf/MC-Asia/uploadedImages/Articles/News/Event_Technology/Mandarin-Oriental-Bosphorus-Istanbul-One-Bedroom-Suite-resize.jpg?Anchor=MiddleCenter&height=700&mode=crop&tr=w-920%2Cfo-auto&width=1366','Chambre d’une suite du Mandarin Oriental','One-bedroom suite at Mandarin Oriental','https://www.meetings-conventions-asia.com/news/hotels-and-resorts/new-mandarin-oriental-opens-in-istanbul'),
    photo('mandarin-oriental-04-spa.jpg','https://istanbulhammam.com/wp-content/uploads/2024/11/the-spa-at-mandarin-oriental-bosphorus-istanbul-6.jpg','Piscine du spa Mandarin Oriental','Mandarin Oriental indoor spa pool','https://istanbulhammam.com/discover-hamams/the-spa-at-mandarin-oriental-bosphorus/'),
  ],
  'four-seasons-sultanahmet': [
    photo('four-seasons-sultanahmet-01-hero.jpg','https://www.fourseasons.com/alt/img-opt/~75.701.270%2C5849-0%2C0000-2666%2C6667-2000%2C0000/publish/content/dam/fourseasons/images/web/IST/IST_894_original.jpg','Cour historique du Four Seasons Sultanahmet','Four Seasons Sultanahmet historic courtyard',fourSeasonsSultanahmetGallery),
    photo('four-seasons-sultanahmet-02-dining.jpg','https://www.fourseasons.com/alt/img-opt/~70.1530.0%2C0000-312%2C5000-3000%2C0000-1687%2C5000/publish/content/dam/fourseasons/images/web/IST/IST_794_original.jpg','Salon restaurant','Hotel dining room',fourSeasonsSultanahmetGallery),
    photo('four-seasons-sultanahmet-03-room.jpg','https://www.fourseasons.com/alt/img-opt/~70.1530.0%2C0000-311%2C4004-3000%2C0000-1687%2C5000/publish/content/dam/fourseasons/images/web/IST/IST_799_original.jpg','Chambre du Four Seasons Sultanahmet','Four Seasons Sultanahmet guest room',fourSeasonsSultanahmetGallery),
    photo('four-seasons-sultanahmet-04-gardens.jpg','https://www.fourseasons.com/alt/img-opt/~70.1530.0%2C0000-247%2C5000-3000%2C0000-1687%2C5000/publish/content/dam/fourseasons/images/web/IST/IST_811_original.jpg','Bâtiment et jardins','Historic property and gardens',fourSeasonsSultanahmetGallery),
    photo('four-seasons-sultanahmet-05-rooftop.jpg','https://www.fourseasons.com/alt/img-opt/~70.1530.0%2C0000-164%2C2504-3000%2C0000-1687%2C5000/publish/content/dam/fourseasons/images/web/IST/IST_817_original.jpg','Terrasse avec vue sur Sainte-Sophie','Terrace overlooking Hagia Sophia',fourSeasonsSultanahmetGallery),
  ],
  'shangri-la': [
    photo('shangri-la-01-hero.jpg','https://www.turizmajansi.com/images/haber/shangri-la-bosphorus_30562.jpg','Entrée du Shangri-La Bosphorus en soirée','Evening entrance at Shangri-La Bosphorus','https://www.turizmajansi.com/haber/shangri-la-bosphorus-istanbul-dunyanin-en-iyi-5-otelinden-biri-secildi-h70417'),
    photo('shangri-la-02-suite.jpg','https://byconnoisseur.com/wp-content/uploads/2023/06/Shangri-La-Istanbul-5.jpg','Chambre avec vue sur le Bosphore','Bosphorus-view guest room','https://byconnoisseur.com/hotel/shangri-la-istanbul/'),
    photo('shangri-la-03-lobby.jpg','https://bynder.onthebeach.co.uk/cdn-cgi/image/width%3D1400%2Cquality%3D70%2Cfit%3Dcover%2Cformat%3Dauto/m/59eb1c07f036f6e3/original/Shangri-La-Bosphorus-Istanbul-Lobby-13.jpg','Hall du Shangri-La Bosphorus','Shangri-La Bosphorus lobby','https://www.onthebeach.ie/hotels/turkey/istanbul/shangri-la-bosphorus-istanbul'),
    photo('shangri-la-04-waterfront.jpg','https://sitecore-cd.shangri-la.com/-/media/Shangri-La/Corporate/dlp/hsbc-me-cardholder-exclusive/202407_HSBC-DLP_CB_SLIB.jpg?h=900&hash=1AE4FF376DBCB9C743D2E162A7DA8BFB&iar=0&w=1640','Vue sur le quai et les ferries au Bosphore','Bosphorus ferry and waterfront','https://www.shangri-la.com/en/landing/stay-and-save-with-shangrila/'),
  ],
  raffles: [
    photo('raffles-01-hero.jpg','https://m.ahstatic.com/is/image/accorhotels/HCM_P_0004110?dpr=off&qlt=82&ts=1768892155290','Panorama du Bosphore depuis Raffles','Bosphorus panorama from Raffles','https://www.raffles.com/istanbul/gallery/'),
    photo('raffles-02-art.jpg','https://m.ahstatic.com/is/image/accorhotels/aja_p_6620-03?dpr=on%2C2.625&qlt=82&ts=1760836887393&wid=575','Sculpture dans les espaces de Raffles','Art installation at Raffles Istanbul','https://www.raffles.com/istanbul/arcade/'),
    photo('raffles-03-suite.jpg','https://media.cntraveler.com/photos/669143303bd402141027459b/16%3A9/w_2560%2Cc_limit/Raffles%20Istanbul_Bosphorus%20Suite.jpg','Suite du Raffles avec vue sur le Bosphore','Raffles Bosphorus suite panorama','https://www.cntraveler.com/hotels/istanbul/raffles-istanbul'),
    photo('raffles-04-spa.jpg','https://img.skininc.com/files/base/allured/all/image/2025/03/Raffles_Spa_at_Raffles_Istanbul___Credit_Raffles_Spa_at_Raffles_Istanbul.67d454b06a2c6.png?auto=format%2Ccompress&dpr=2&q=70&w=700','Piscine intérieure du spa Raffles','Raffles indoor spa pool','https://www.skininc.com/business/industry-news/news/22936074/forbes-travel-guide-unveils-2025-star-award-winners'),
  ],
  'st-regis': [
    photo('st-regis-01-hero.jpg','https://cache.marriott.com/is/image/marriotts7prod/xr-istxr-hotel-exterior--22584-77790%3AWide-Hor?fit=constrain&wid=375','Façade de l’hôtel St. Regis Istanbul','The St. Regis Istanbul exterior',stRegisGallery),
    photo('st-regis-02-atrium.jpg','https://cache.marriott.com/content/dam/marriott-renditions/ISTXR/istxr-atrium-6516-hor-wide.jpg?downsize=375px%3A%2A&interpolation=progressive-bilinear&output-quality=70','Atrium de l’hôtel','Hotel atrium',stRegisGallery),
    photo('st-regis-03-suite.jpg','https://cache.marriott.com/content/dam/marriott-renditions/ISTXR/istxr-regis-suite-6544-hor-wide.jpg?downsize=375px%3A%2A&interpolation=progressive-bilinear&output-quality=70','Suite St. Regis','St. Regis suite',stRegisGallery),
    photo('st-regis-04-balcony.jpg','https://cache.marriott.com/content/dam/marriott-renditions/ISTXR/istxr-suite-balcony-3012-hor-wide.jpg?downsize=375px%3A%2A&interpolation=progressive-bilinear&output-quality=70','Balcon d’une suite','Suite balcony',stRegisGallery),
    photo('st-regis-05-pool.jpg','https://cache.marriott.com/is/image/marriotts7prod/istxr-indoor-pool-3820%3AWide-Hor?fit=constrain&wid=750','Piscine intérieure Iridium Spa','Iridium Spa indoor pool',stRegisGallery),
  ],
  'ritz-carlton': [
    photo('ritz-carlton-01-hero.jpg','https://cache.marriott.com/content/dam/marriott-renditions/ISTRZ/istrz-tub-8161-hor-wide.jpg?downsize=750px%3A%2A&interpolation=progressive-bilinear&output-quality=70','Baignoire avec vue sur le Bosphore au Ritz-Carlton','Ritz-Carlton bathtub with Bosphorus view',ritzGallery),
    photo('ritz-carlton-02-room.jpg','https://cache.marriott.com/is/image/marriotts7prod/rz-istrz-trci-park-king-room-34217%3AWide-Hor?fit=constrain&wid=375','Chambre de l’hôtel Ritz-Carlton','Ritz-Carlton guest room',ritzGallery),
    photo('ritz-carlton-03-balcony.jpg','https://cache.marriott.com/content/dam/marriott-renditions/ISTRZ/istrz-balcony-2024-hor-wide.jpg?downsize=375px%3A%2A&interpolation=progressive-bilinear&output-quality=70','Balcon avec vue sur le Bosphore','Bosphorus view balcony',ritzGallery),
    photo('ritz-carlton-04-suite.jpg','https://cache.marriott.com/content/dam/marriott-renditions/ISTRZ/istrz-suite-2183-hor-wide.jpg?downsize=375px%3A%2A&interpolation=progressive-bilinear&output-quality=70','Suite avec vue sur le Bosphore','Bosphorus view suite',ritzGallery),
    photo('ritz-carlton-05-view.jpg','https://cache.marriott.com/content/dam/marriott-renditions/ISTRZ/istrz-view-2016-hor-wide.jpg?downsize=375px%3A%2A&interpolation=progressive-bilinear&output-quality=70','Panorama sur Istanbul et le Bosphore','Istanbul and Bosphorus panorama',ritzGallery),
  ],
};
export const hotelHeroPhoto = (id: string): HotelPhoto | undefined => istanbulHotelPhotos[id]?.[0];
