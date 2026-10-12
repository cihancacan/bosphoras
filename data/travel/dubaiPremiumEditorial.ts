/** Dubai premium editorial (preview): hotel-specific imagery, explicitly not live inventory.
 * Image paths are enabled once downloaded and verified. Source and rights are audited separately.
 * Hotel, pool and suite shots never stand in for generic district photographs.
 */
import type { BodrumHotelEditorial, BodrumPremiumPhoto } from './bodrumPremiumEditorial';

const hotelPhoto=(folder:string,name:string,fr:string,en:string,sourcePage:string,credit:string):BodrumPremiumPhoto=>({
  src:`/images/travel/dubai-premium/${folder}/${name}.webp`,fr,en,sourcePage,credit
});

export const dubaiHotelEditorial:Record<string,BodrumHotelEditorial>={
  'The Lana · Dorchester Collection':{
    photos:[
      hotelPhoto('the-lana','lana-marasi-exterior','L’architecture du Lana au bord de Marasi Bay, Dubaï','The Lana architecture on Dubai’s Marasi Bay waterfront','https://www.dorchestercollection.com/dubai','The Lana · Dorchester Collection'),
      hotelPhoto('the-lana','lana-rooftop-pool','La piscine panoramique de High Society au Lana','The Lana’s High Society rooftop infinity pool','https://theroomscollection.com/news/openings/dorchester-collection-opens-first-hotel-in-the-middle-east/','The Rooms Collection · The Lana'),
      hotelPhoto('the-lana','lana-marina-suite','Salon de la Marina Royal Suite au Lana','Marina Royal Suite living room at The Lana','https://www.dorchestercollection.com/dubai/the-lana/rooms-suites/the-marina-royal-suite','The Lana · Dorchester Collection')
    ],
    credit:'The Lana · Dorchester Collection',
    sourcePage:'https://www.dorchestercollection.com/dubai/the-lana/gallery',
    frBest:'Pour les voyageurs qui préfèrent la vie urbaine élégante, le design, une piscine panoramique et des restaurants en ville à un grand resort de plage.',
    enBest:'For guests drawn to sophisticated urban living, design, skyline swimming and city dining rather than a vast beachfront resort.',
    frStory:'The Lana revendique un luxe plus discret que les immenses resorts : ses volumes contemporains s’ouvrent sur Marasi Bay, avec Downtown en arrière-plan selon l’orientation. Le vrai plaisir est de passer d’une suite lumineuse à la piscine de High Society, puis aux tables du quartier. Pour ne pas décevoir, il faut distinguer une vue sur la marina d’une vue directe sur Burj Khalifa, comparer la catégorie et les horaires des espaces de restauration, et ne pas confondre piscine sur le toit et piscine privée de chambre.',
    enStory:'The Lana favours composed city glamour over the scale of a beach resort. Contemporary spaces look across Marasi Bay, with Downtown views varying by room orientation. Its appeal lies in moving between an airy suite, the High Society rooftop pool and a thoughtful dining scene. Check the difference between marina and direct Burj Khalifa views, the precise suite category and restaurant access. A rooftop hotel pool is not a private in-room pool.'
  },
  'One&Only One Za\'abeel':{
    photos:[
      hotelPhoto('one-only-zaabeel','zaabeel-exterior','Les tours One Za’abeel et leur passerelle suspendue à Dubaï','One Za’abeel towers and suspended Link above Dubai','https://www.admagazine.fr/galerie/piscines-rooftop-plus-hautes-monde','AD Magazine · One Za’abeel'),
      hotelPhoto('one-only-zaabeel','zaabeel-infinity-pool','Piscine suspendue au niveau de The Link entre les tours One Za’abeel','Suspended Link infinity pool between the One Za’abeel towers','https://www.architecturaldigest.com/story/the-dubai-skyline-sets-a-new-record','One&Only One Za’abeel · site officiel'),
      hotelPhoto('one-only-zaabeel','zaabeel-suite','Une suite contemporaine du One&Only One Za’abeel','Contemporary suite at One&Only One Za’abeel','https://www.oneandonlyresorts.com/one-zaabeel/accommodation','One&Only One Za’abeel · site officiel')
    ],
    credit:'One&Only One Za’abeel · galerie officielle',
    sourcePage:'https://oneandonlybrand.com/resort/oneonly-one-zaabeel-resort-dubai/images-oneonly-one-zaabeel-resort-dubai/',
    frBest:'Pour une immersion architecturale dans le Dubaï contemporain, avec piscines perchées, gastronomie et accès pratique aux grands quartiers.',
    enBest:'For architecture-led urban Dubai, elevated pools, destination dining and convenient access to the city’s major districts.',
    frStory:'One&Only One Za’abeel propose une expérience presque verticale de Dubaï, construite autour des deux tours et de leur spectaculaire passerelle The Link. Le séjour vaut autant pour l’architecture et les espaces en hauteur que pour la chambre. Ce n’est pas un hôtel posé sur la plage. Vérifier quelle piscine est accessible aux enfants, les conditions d’accès aux restaurants ou aux espaces en hauteur, ainsi que la direction de vue de la chambre — le panorama dépend fortement de son orientation.',
    enStory:'One&Only One Za’abeel offers a distinctly vertical experience of Dubai, shaped by twin towers and the remarkable Link suspended between them. The architecture, elevated outdoor spaces and destination dining are part of the appeal. This is not a beachfront retreat. Confirm age restrictions and access to individual pools, restaurant reservations and the precise room outlook; skyline views change considerably by orientation.'
  },
  'Atlantis The Royal':{
    photos:[
      hotelPhoto('atlantis-the-royal','atlantis-architecture','Façade monumentale et jardins du resort Atlantis The Royal à Palm Jumeirah','Atlantis The Royal landmark resort architecture on Palm Jumeirah','https://www.ssyenc.com/en/business/overseas/view/759','Ssangyong Engineering & Construction · Atlantis The Royal'),
      hotelPhoto('atlantis-the-royal','atlantis-cloud22-pool','Piscine suspendue Cloud 22 à Atlantis The Royal','Elevated Cloud 22 pool at Atlantis The Royal','https://www.squaremeal.ae/restaurants/best-for/restaurants-atlantis-the-royal-hotel-dubai-guide_62','SquareMeal · Cloud 22 Atlantis The Royal'),
      hotelPhoto('atlantis-the-royal','atlantis-sky-pool-villa','Salon d’une Sky Pool Villa avec vue sur la mer à Atlantis The Royal','Sea-facing Sky Pool Villa living room at Atlantis The Royal','https://tjctravel.vn/products/atlantis-the-royal-dubai','Atlantis The Royal · site officiel')
    ],
    credit:'Atlantis The Royal · site officiel',
    sourcePage:'https://www.atlantis.com/dubai/atlantis-the-royal',
    frBest:'Pour une expérience spectaculaire de Palm Jumeirah : architecture iconique, gastronomie, accès mer et prestations de grand resort.',
    enBest:'For the theatrical side of Palm Jumeirah, with landmark architecture, destination dining, sea access and expansive resort facilities.',
    frStory:'À Atlantis The Royal, le bâtiment lui-même est une partie du voyage. Les volumes ouverts sur la mer, les bassins et les restaurants créent une destination très animée, différente d’une petite adresse confidentielle. Les photographies de Sky Pool Villa montrent une catégorie bien particulière et ne doivent jamais être associées à une chambre d’entrée de gamme. Comparer vue mer ou Palm, accès aux piscines selon les âges et les horaires, services inclus, politiques d’annulation et le temps nécessaire pour rejoindre Downtown.',
    enStory:'At Atlantis The Royal, architecture is inseparable from the stay. Sea-facing terraces, dramatic pools and dining experiences make it an animated destination rather than a small hideaway. Images of a Sky Pool Villa describe a specific category, not a standard guestroom. Compare Palm versus sea outlooks, pool access by age and opening hours, included services, cancellation terms and the journey into Downtown.'
  },
  'Jumeirah Al Naseem':{
    photos:[
      hotelPhoto('jumeirah-al-naseem','al-naseem-resort','Les jardins, piscines et la plage du Jumeirah Al Naseem','Jumeirah Al Naseem resort gardens, pools and beach','https://www.jumeirah.com/en/stay/dubai/jumeirah-al-naseem/experiences/pool-and-beach','Jumeirah · galerie officielle'),
      hotelPhoto('jumeirah-al-naseem','al-naseem-beach','Piscine du Jumeirah Al Naseem face au Burj Al Arab','Jumeirah Al Naseem pool with a Burj Al Arab outlook','https://www.etihadholidays.de/hotel/jumeirah/jumeirah-al-naseem/','Jumeirah · galerie officielle'),
      hotelPhoto('jumeirah-al-naseem','al-naseem-ocean-suite','Chambre de la Gulf Ocean Suite au Jumeirah Al Naseem','Bedroom of the Gulf Ocean Suite at Jumeirah Al Naseem','https://www.jumeirah.com/en/stay/dubai/jumeirah-al-naseem/accommodation/gulf-ocean-suite','Jumeirah · galerie officielle')
    ],
    credit:'Jumeirah Al Naseem · galerie officielle',
    sourcePage:'https://www.jumeirah.com/en/stay/dubai/jumeirah-al-naseem',
    frBest:'Pour la plage, les jardins, l’atmosphère balnéaire et un séjour agréable à deux ou en famille, loin de l’agitation de la skyline.',
    enBest:'For beach life, lush gardens and a relaxed seaside stay for couples or families, away from the intensity of the skyline.',
    frStory:'Jumeirah Al Naseem cultive une autre image du luxe à Dubaï : végétation, lumière, sable clair et une expérience plus douce que celle des grandes tours. Sa force est sa situation sur le littoral de Jumeirah, avec Burj Al Arab comme repère emblématique depuis certains espaces et catégories. Il faut toutefois distinguer vue sur le resort, sur la mer ou vers le monument, vérifier les accès aux installations de Madinat Jumeirah et identifier les suites réellement adaptées aux enfants. Un hôtel proche de Burj Al Arab ne garantit pas une vue directe depuis chaque chambre.',
    enStory:'Jumeirah Al Naseem offers a gentler interpretation of Dubai luxury: greenery, pale sand, sea light and an easy coastal rhythm rather than skyscraper drama. Its Jumeirah shoreline setting places Burj Al Arab within the wider scene, although the landmark is not visible from every room. Distinguish resort, Gulf and landmark-facing categories; check which Madinat Jumeirah facilities are included and compare sleeping arrangements for families.'
  }
};

/** Area imagery is independent from hotel galleries. A null item never claims a mismatched scene. */
export const dubaiAreaVisuals:(BodrumPremiumPhoto|null)[]=[
  {src:'/images/travel/dubai-premium/destination/palm-jumeirah.webp',fr:'Vue aérienne du secteur de Palm Jumeirah à Dubaï',en:'Aerial view of the Palm Jumeirah area in Dubai',credit:'Domenico Convertini · CC BY-SA 2.0 · paysage local',sourcePage:'https://commons.wikimedia.org/wiki/File:Palm_Jumeirah,_Dubai_(53384749864).jpg'},
  {src:'/images/travel/dubai-premium/destination/downtown-creek-sunset.webp',fr:'La silhouette de Downtown Dubai au coucher du soleil depuis Dubai Creek Harbour',en:'Downtown Dubai skyline at sunset from Dubai Creek Harbour',credit:'Vamos John · CC BY-SA 4.0 · paysage local',sourcePage:'https://commons.wikimedia.org/wiki/File:Sunset_Burj_Khalifa_Horizon_View(Down_Town_Dubai),_Dubai_Creek_Harbour.png'},
  {
    src:'/images/travel/city-guides/dubai/marina.webp',
    fr:'Dubai Marina, sa promenade et ses tours sur le front d’eau',
    en:'Dubai Marina waterfront promenade and skyline',
    credit:'Gfilip · Wikimedia Commons · CC BY-SA 4.0',
    sourcePage:'https://commons.wikimedia.org/wiki/File:Dubai_Marina_by_day.jpg'
  }
];
