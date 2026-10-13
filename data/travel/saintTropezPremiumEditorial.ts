/** Saint-Tropez editorial: curated palaces only. Image reuse rights require
 * verification before production. Never imply live room inventory, pricing
 * or verified private-suite facilities from photographs of other room types.
 */
import type { BodrumHotelEditorial,BodrumPremiumPhoto } from './bodrumPremiumEditorial';
const photo=(hotel:string,key:string,fr:string,en:string,page:string,credit:string):BodrumPremiumPhoto=>({
  src:`/images/travel/saint-tropez-premium/${hotel}/${key}.webp`,fr,en,sourcePage:page,credit
});
export const saintTropezHotelEditorial:Record<string,BodrumHotelEditorial>={
  'Cheval Blanc St-Tropez':{
    photos:[
      photo('cheval-blanc','cheval-beachfront','Cheval Blanc St-Tropez sur la plage de la Bouillabaisse, entre pinède, piscine et golfe','Cheval Blanc St-Tropez beachfront maison, pool and pine trees on the Gulf','https://www.chevalblanc.com/en/maison/st-tropez/careers/careers-st-tropez/','Cheval Blanc St-Tropez · Oliver Fly'),
      photo('cheval-blanc','cheval-pool-sea','La plage et la piscine du Cheval Blanc St-Tropez face à la mer','Cheval Blanc St-Tropez pool and beach overlooking the Mediterranean','https://www.luxurytraveladvisor.com/hotels/cheval-blanc-st-tropez-now-open','Luxury Travel Advisor · Cheval Blanc St-Tropez'),
      photo('cheval-blanc','cheval-duplex-sea-suite','La chambre de la Duplex Sea Suite du Cheval Blanc St-Tropez','Duplex Sea Suite bedroom at Cheval Blanc St-Tropez','https://www.chevalblanc.com/en/maison/st-tropez/rooms-and-suites/duplex-sea-suite-st-tropez/','Cheval Blanc · V. Mati')
    ],
    credit:'Cheval Blanc St-Tropez · images officielles et presse',
    sourcePage:'https://www.chevalblanc.com/en/maison/st-tropez/',
    frBest:'Pour le calme d’une petite maison en bord de mer, le service personnalisé, les pins et la beauté discrète du golfe.',
    enBest:'For the privacy of an intimate seafront maison, highly personalised service, pine trees and the understated beauty of the Gulf.',
    frStory:"Cheval Blanc St-Tropez garde l'esprit d'une maison plutôt que celui d'un grand resort. Sa situation sur la plage de la Bouillabaisse, à l'entrée du village, permet de profiter du golfe sans sacrifier l'accès à Saint-Tropez. Le bleu Riviera, la pinède et les lignes dessinées par Jean-Michel Wilmotte incarnent une élégance lumineuse. Les suites face à la mer sont particulières : terrasse, disposition et vue doivent être comparées à la réservation. Le restaurant gastronomique, le spa et les moments de plage participent à l'expérience sans se confondre avec les prestations de chaque catégorie.",
    enStory:"Cheval Blanc St-Tropez feels more like a private maison than a grand resort. On Bouillabaisse Beach, close to the village entrance, it offers an intimate experience of the Gulf without losing access to Saint-Tropez. Signature Riviera blue, umbrella pines and Jean-Michel Wilmotte's contemporary interiors create an atmosphere of luminous restraint. Sea-facing suites are individual: compare terrace, layout and outlook before selecting a category. Gastronomy, wellness and the waterline complete the stay, but inclusions differ by accommodation and season."
  },
  'Hôtel Byblos Saint-Tropez':{
    photos:[
      photo('byblos','byblos-terrace-exterior','Hôtel Byblos Saint-Tropez : architecture méditerranéenne et terrasses au cœur du village','Hôtel Byblos Saint-Tropez Mediterranean village-style architecture and terraces','https://www.byblos.com/en/','Hôtel Byblos · Stephan Julliard'),
      photo('byblos','byblos-pool','La piscine extérieure du Byblos à Saint-Tropez au milieu des jardins','The Byblos Saint-Tropez outdoor pool amid the hotel's gardens','https://www.byblos.com/en/galerie-photos/','Hôtel Byblos · photo officielle'),
      photo('byblos','byblos-laura-gonzalez-duplex','Suite Duplex du Byblos Saint-Tropez, décorée par Laura Gonzalez','Duplex Suite at Byblos Saint-Tropez designed by Laura Gonzalez','https://www.byblos.com/en/galerie-photos/','Hôtel Byblos · Laura Gonzalez')
    ],
    credit:'Hôtel Byblos Saint-Tropez · galerie officielle',
    sourcePage:'https://www.byblos.com/en/galerie-photos/',
    frBest:'Pour l’énergie du village, les soirées animées, une institution du style tropézien et le plaisir de sortir à pied.',
    enBest:'For village energy, evenings out, an icon of Saint-Tropez style and the ease of exploring on foot.',
    frStory:"Le Byblos appartient à l'histoire de Saint-Tropez : davantage une petite place méditerranéenne qu'un hôtel traditionnel, avec une succession de maisons, de terrasses et de jardins. Ici, le séjour s'organise autour du village, de ses restaurants et de ses soirées. Le charme tient à cette proximité avec la vie tropézienne ; ce n'est pas une adresse directement installée sur le sable de Pampelonne. Choisir son hébergement pour son calme, sa configuration et ses équipements, notamment lorsque l'on voyage en famille. Les images de la suite Duplex représentent cette catégorie spécifique.",
    enStory:"Byblos is woven into Saint-Tropez's social history. Its village-like composition of terraces, gardens and Mediterranean façades creates an atmosphere unlike a conventional beach resort. Guests come as much for the village and its evenings as for time by the pool. This is not a hotel located directly on Pampelonne's sand. Choose a room for the preferred quietness and layout, especially for families; images of the decorated Duplex Suite illustrate that room category alone."
  },
  'La Réserve Ramatuelle':{
    photos:[
      photo('la-reserve','reserve-sea-entrance','L’entrée architecturale de La Réserve Ramatuelle ouverte sur l’horizon méditerranéen','Architectural entrance of La Réserve Ramatuelle framing the Mediterranean','https://www.fourhundred.com/march-2025/blog-post-title-four-7zg3y-34hjs','Four Hundred · La Réserve Ramatuelle'),
      photo('la-reserve','reserve-pool-sea','Piscine extérieure et transats de La Réserve Ramatuelle face à la Méditerranée','La Réserve Ramatuelle outdoor pool, loungers and Mediterranean panorama','https://www.the-family-project.com/reiseziele/europa/frankreich/la-reserve-ramatuelle','The Family Project · La Réserve Ramatuelle'),
      photo('la-reserve','reserve-junior-suite-terrace','Terrasse de la Junior Suite Deluxe de La Réserve Ramatuelle face à la mer','Deluxe Junior Suite terrace at La Réserve Ramatuelle facing the sea','https://www.lareserve-ramatuelle.com/en/accommodation/deluxe-junior-suite-sea-view-with-garden/','La Réserve Ramatuelle · photo officielle')
    ],
    credit:'La Réserve Ramatuelle · sources hôtelières et éditoriales documentées',
    sourcePage:'https://www.lareserve-ramatuelle.com/hotel-galerie/',
    frBest:'Pour s’éloigner de l’animation du village, contempler la mer et privilégier le spa, les terrasses et une intimité rare.',
    enBest:'For escaping village bustle and prioritising Mediterranean views, wellness, terraces and an unusually private atmosphere.',
    frStory:"La Réserve Ramatuelle occupe un monde à part, au-dessus des criques et des paysages de garrigue. Le langage architectural est volontairement épuré, laissant la lumière, les pins et l'horizon prendre toute la place. Le séjour s'adresse surtout aux voyageurs qui souhaitent une pause calme et un service discret. Il faut distinguer l'hôtel, les suites avec terrasse et les villas qui offrent d'autres volumes et équipements. Ramatuelle n'est pas le Vieux-Port : organiser ses transferts, son temps à Pampelonne et les soirées au village évite les mauvaises surprises.",
    enStory:"La Réserve Ramatuelle occupies a quieter world above the coast, where modern architecture leaves centre stage to the pines, the light and the sea horizon. The appeal is privacy, considered service and a wellness-oriented rhythm. Hotel rooms, terrace suites and separately located villas do not offer the same facilities or layouts. This is Ramatuelle rather than the harbour: plan beach outings, village dinners and transport instead of assuming every experience is a short walk away."
  },
  'Airelles Château de la Messardière':{
    photos:[
      photo('messardiere','messardiere-estate-aerial','Le domaine du Château de la Messardière et ses jardins sur les hauteurs de Saint-Tropez','Airelles Château de la Messardière hilltop estate and landscaped gardens','https://airelles.com/en/destination/chateau-de-la-messardiere-hotel','Airelles · Jetlag'),
      photo('messardiere','messardiere-garden-pool','La piscine ensoleillée sur les terrasses de jardins du Château de la Messardière','Sunlit garden pool terraces at Airelles Château de la Messardière','https://airelles.com/fr/destination/chateau-de-la-messardiere-hotel/la-plage-acces-prive-saint-tropez','Airelles · Marco Arguello'),
      photo('messardiere','messardiere-victoire-suite','La suite Victoire du Château de la Messardière, une catégorie de luxe spécifique','Victoire Suite at Château de la Messardière, a distinct high-end room category','https://airelles.com/en/destination/chateau-de-la-messardiere-hotel/suites','Airelles · galerie officielle')
    ],
    credit:'Airelles Château de la Messardière · galerie officielle',
    sourcePage:'https://airelles.com/en/destination/chateau-de-la-messardiere-hotel',
    frBest:'Pour les jardins, l’expérience d’un grand domaine provençal et des vacances familiales qui alternent plage et piscines.',
    enBest:'For a grand Provençal estate, lush gardens and a family-oriented stay balancing hotel pools and beach time.',
    frStory:"Le Château de la Messardière est une autre lecture de Saint-Tropez : celle d'un grand domaine perché entre jardins, pinède et perspectives méditerranéennes. On y séjourne pour la sensation d'espace, les piscines et l'organisation d'activités familiales, plutôt que pour l'accès immédiat à pied au Vieux-Port. L'adresse se situe sur les hauteurs, route de Tahiti. Les modalités de transfert vers Pampelonne, les restaurants, le spa et les espaces enfants doivent être vérifiées selon les dates et la catégorie. Une photo de la Suite Victoire ne représente pas l'agencement des chambres ordinaires.",
    enStory:"Château de la Messardière offers Saint-Tropez on the scale of a grand hilltop estate: landscaped gardens, pine trees and Mediterranean outlooks frame the stay. The appeal lies in space, multiple pools and organised family experiences rather than immediately walking to the Old Port. Located on Route de Tahiti, it calls for a realistic plan for the beach, transfers and dining. Confirm seasonal services, spa and children's facilities, and the actual room type: the pictured Victoire Suite is not representative of standard accommodation."
  }
};
export const saintTropezAreaVisuals:(BodrumPremiumPhoto|null)[]=[
  {src:'/images/travel/saint-tropez-premium/destination/saint-tropez-old-port.webp',
    fr:'Le Vieux-Port de Saint-Tropez et ses façades colorées vus du ciel',
    en:'Saint-Tropez old fishing harbour and colourful village facades viewed from above',
    credit:'dronepicr · CC BY 2.0 · original resized and converted to WebP',
    sourcePage:'https://commons.wikimedia.org/wiki/File:Vieux_port_de_p%C3%AAche_The_old_port_of_Saint-Tropez,_France_(52723272042).jpg'},
  {src:'/images/travel/saint-tropez-premium/destination/saint-tropez-pampelonne.webp',
    fr:'La plage de Pampelonne à Ramatuelle, sable et eau claire vus du ciel',
    en:'Pampelonne beach in Ramatuelle, seen from above with turquoise water',
    credit:'dronepicr · CC BY 2.0 · original resized and converted to WebP',
    sourcePage:'https://commons.wikimedia.org/wiki/File:Aerial_view_of_Pampelonne_Beach,_Saint-Tropez,_France_(52723263302).jpg'},
  {src:'/images/travel/saint-tropez-premium/destination/saint-tropez-coast-vineyards.webp',
    fr:'Vignobles et paysages vallonnés près de Pampelonne, sur la commune de Ramatuelle',
    en:'Vineyards and rolling hills near Pampelonne in Ramatuelle',
    credit:'dronepicr · CC BY 2.0 · original resized and converted to WebP',
    sourcePage:'https://commons.wikimedia.org/wiki/File:Aerial_view_of_vineyards_in_Pampelonne,_Saint-Tropez,_France_(52724264298).jpg'}
];
