/** Antalya hotel imagery and editorial, separately curated from destination landscapes.
 * Gallery src paths become active only after matching local WebP files are imported.
 * User reports permission for project photography; third-party rights remain subject to review.
 * This editorial list is not evidence of distribution rights or bookable inventory.
 */
import type { BodrumHotelEditorial, BodrumPremiumPhoto } from './bodrumPremiumEditorial';

const photo=(slug:string,file:string,fr:string,en:string,sourcePage:string,credit:string):BodrumPremiumPhoto=>({
  src:`/images/travel/antalya-premium/${slug}/${file}.webp`,fr,en,credit,sourcePage
});

export const antalyaHotelEditorial:Record<string,BodrumHotelEditorial>={
  'Regnum Carya':{
    photos:[
      photo('regnum-carya','regnum-resort','Vue d’ensemble du Regnum Carya à Belek','Regnum Carya resort in Belek','https://www.regnumhotels.com/en/hotels/regnum-carya/','Regnum Carya · site officiel'),
      photo('regnum-carya','regnum-main-pool','Piscine attenante à une Pearl Pool Suite du Regnum Carya','Pearl Pool Suite pool at Regnum Carya','https://www.regnumhotels.com/en/hotels/regnum-carya/','Regnum Carya · site officiel'),
      photo('regnum-carya','regnum-pool-suite','La Jade Suite du Regnum Carya','The Jade Suite at Regnum Carya','https://www.regnumcarya.co.uk/accommodation/main-building-rooms/jade-suite/','Regnum Carya · Jade Suite officielle')
    ],
    credit:'Regnum Carya · galerie officielle',
    sourcePage:'https://www.regnumhotels.com/en/hotels/regnum-carya/',
    frBest:'Pour un séjour très complet à Belek mêlant golf, clubs enfants, piscines et villas, avec un programme principalement au sein du resort.',
    enBest:'For a full-service Belek escape combining golf, family facilities, pools and villas, with much of the stay taking place on the resort.',
    frStory:'Regnum Carya se choisit pour l’ampleur de ses installations et son lien avec l’univers du golf à Belek. C’est une adresse conçue pour vivre plusieurs jours sans quitter le domaine : plages, espaces aquatiques et catégories de chambres très variées. La promesse d’une suite avec piscine ne doit jamais être étendue aux chambres classiques. Avant de choisir, vérifier le plan exact, les conditions d’accès aux golfs, les équipements saisonniers et l’emplacement de la chambre par rapport aux espaces les plus animés.',
    enStory:'Regnum Carya stands out for the breadth of its facilities and its strong connection with the golf scene in Belek. It is a resort in which guests may comfortably spend entire days, moving between beach, pools and varied accommodation. A pool-suite feature must never be assumed to apply to standard rooms. Before choosing, check the precise board plan, golf arrangements, seasonal facilities and a room’s position relative to busy resort zones.'
  },
  'Cullinan Belek':{
    photos:[
      photo('cullinan-belek','cullinan-resort','Vue du resort Cullinan Belek et de ses piscines','Cullinan Belek resort and pool scene','https://www.cullinanhotels.com/gallery','Cullinan Belek · galerie officielle'),
      photo('cullinan-belek','cullinan-pools','Piscines et aménagements extérieurs du Cullinan Belek','Pools and outdoor terraces at Cullinan Belek','https://www.dertour.de/hotel/cullinan-belek-12mGQx','DERTOUR · Cullinan Belek'),
      photo('cullinan-belek','cullinan-suite','Suite duplex avec accès piscine au Cullinan Belek','Swim-up duplex suite at Cullinan Belek','https://www.cullinanhotels.com/accommodation/superior-duplex-swim-up','Cullinan Belek · hébergement officiel')
    ],
    credit:'Cullinan Belek · galerie officielle',
    sourcePage:'https://www.cullinanhotels.com/gallery',
    frBest:'Pour une expérience balnéaire contemporaine avec suites, piscines et choix de restauration, en restant proche des parcours de golf de Belek.',
    enBest:'For contemporary Mediterranean resort living, with suites, pools and dining options near the Belek golf coast.',
    frStory:'Cullinan Belek adopte une esthétique moderne et ample, tournée vers les espaces extérieurs et les séjours où l’hôtel constitue une destination en soi. Les catégories lagoon, swim-up et vue mer correspondent à des expériences différentes : vérifier la profondeur d’intimité, la situation de la terrasse et l’accès réel à une piscine. Le nom d’une catégorie ne garantit pas à lui seul une piscine privative. Les restaurants à réservation, l’animation et les équipements familiaux doivent aussi être confirmés aux dates du séjour.',
    enStory:'Cullinan Belek offers contemporary resort architecture and substantial outdoor space: it is a place to settle in rather than use simply as a city base. Lagoon, swim-up and sea-view categories describe different experiences; compare terrace privacy, room orientation and actual pool access. A category name alone does not guarantee a private pool. Confirm bookable dining, entertainment and family facilities for the actual travel dates.'
  },
  'Rixos Premium Belek':{
    photos:[
      photo('rixos-premium-belek','rixos-resort','Vue générale du Rixos Premium Belek face à la Méditerranée','Rixos Premium Belek Mediterranean resort view','https://lastradar.pl/hotele/rixos-premium-belek-the-land-of-legends-theme-park-free-access/','LastRadar · Rixos Premium Belek'),
      photo('rixos-premium-belek','rixos-beach-pool','Plage et espaces aquatiques du Rixos Premium Belek','Beach and pool facilities at Rixos Premium Belek','https://www.kelioniulaikas.lt/kelione/turkija-rixos-premium-belek-5','Kelionių Laikas · Rixos Premium Belek'),
      photo('rixos-premium-belek','rixos-room','Chambre Deluxe du Rixos Premium Belek','Deluxe guestroom at Rixos Premium Belek','https://all.accor.com/hotel/B1J5/index.en.shtml','Accor / Rixos Premium Belek')
    ],
    credit:'Rixos Premium Belek · site officiel',
    sourcePage:'https://www.rixos.com/hotel-resort/rixos-premium-belek-land-legends-access',
    frBest:'Pour des vacances actives au bord de la mer, en famille ou entre amis, avec une large palette d’activités au sein d’un grand établissement.',
    enBest:'For an active beach holiday with family or friends, and a wide choice of facilities at a large full-service resort.',
    frStory:'Rixos Premium Belek privilégie l’énergie d’un grand resort : plage, activités, restauration et catégories pensées pour différents profils de voyageurs. Il conviendra davantage à ceux qui veulent disposer de nombreux services qu’aux amateurs de petite adresse confidentielle. Vérifier précisément les services inclus, les accès éventuels à des partenaires ou parcs de loisirs, ainsi que les distances internes et l’exposition des chambres. Pour une famille, la disposition réelle des couchages compte plus qu’une simple surface annoncée.',
    enStory:'Rixos Premium Belek is the energetic end of the luxury-resort spectrum: beach, activities, dining and accommodation built around several travel styles. It better suits guests who value choice than those seeking a tiny secluded hideaway. Confirm precisely what is included, any access to partner leisure facilities, internal walking distances and room orientation. Families should compare actual sleeping layouts rather than square metres alone.'
  },
  'Maxx Royal Kemer':{
    photos:[
      photo('maxx-royal-kemer','maxx-kemer-coast','Vue aérienne du Maxx Royal Kemer entre forêt et mer','Aerial view of Maxx Royal Kemer between pine forest and sea','https://www.novatours.ee/ru/search/TRAMAXROYK','Novatours · Maxx Royal Kemer'),
      photo('maxx-royal-kemer','maxx-kemer-pools','Piscines et villas du Maxx Royal Kemer entre mer et montagne','Pools and villas at Maxx Royal Kemer','https://www.maxxroyal.com/Gallery','Maxx Royal Kemer · galerie officielle'),
      photo('maxx-royal-kemer','maxx-kemer-villa','Intérieur et terrasse d’une villa du Maxx Royal Kemer','Villa interior and terrace at Maxx Royal Kemer','https://www.maxxroyal.com/maxx-royal-kemer/stay/villas/beach-villa-3-bedroom','Maxx Royal Kemer · site officiel')
    ],
    credit:'Maxx Royal Kemer · galerie officielle',
    sourcePage:'https://www.maxxroyal.com/Gallery',
    frBest:'Pour un séjour intimiste tourné vers les montagnes, les criques, les grandes suites et les villas en bord de mer plutôt que vers les parcours de golf.',
    enBest:'For a landscape-driven escape among mountains, coves, spacious suites and seaside villas rather than the golf-led Belek resorts.',
    frStory:'Maxx Royal Kemer possède une personnalité très différente des grands complexes de Belek : la côte de Kemer, la végétation et les reliefs composent le décor. Certaines catégories permettent de vivre dehors toute la journée, entre piscine et terrasse, mais les différences de vue, de disposition et d’accès à la mer doivent être étudiées individuellement. Pour une villa, confirmer la configuration des chambres, la confidentialité, le service associé et les transferts. Les photos d’une Beach Villa ne représentent pas nécessairement une suite classique.',
    enStory:'Maxx Royal Kemer has a very different personality from the large Belek resorts: cliffs, green hillsides and the Kemer coast define the setting. Some categories are designed for entire days between private outdoor space and the sea, but views, layouts and beach access vary. For villas, confirm bedroom configuration, privacy, associated services and transfers. A Beach Villa photograph must not be treated as representative of a regular suite.'
  }
};

// Area photographs must be independent of the hotel galleries and accurately depict the named area.
// The currently available city images depict Kemer/Konyaaltı/Kaleiçi, not Belek.
export const antalyaAreaVisuals:(BodrumPremiumPhoto|null)[]=[
  null,
  {src:'/images/travel/antalya-premium/destination/kemer-panorama.webp',fr:'Panorama du littoral montagneux de Kemer',en:'Mountain-framed Kemer coastline panorama',sourcePage:'https://commons.wikimedia.org/wiki/File:Kemer_-_Panorama.jpg',credit:'ViseMoD · Wikimedia Commons · CC BY-SA 4.0'},
  {src:'/images/travel/city-guides/antalya/harbour.webp',fr:'Le vieux port d’Antalya au pied du quartier de Kaleiçi',en:'Antalya old harbour beneath Kaleiçi',sourcePage:'https://commons.wikimedia.org/wiki/File:2023-01-17_Antalya_Harbour.jpg',credit:'Maksym Kozlenko · Wikimedia Commons · CC BY-SA 4.0'}
];
