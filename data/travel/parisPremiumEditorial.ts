/** Paris Luxury Stays editorial — not a booking catalogue.
 * Hotel photographs depict the named property; credits and reuse caveats are recorded
 * in parisPremiumImageSources.json. Destination photos are separate and CC-sourced.
 */
import type { BodrumHotelEditorial, BodrumPremiumPhoto } from './bodrumPremiumEditorial';
const photo=(hotel:string,key:string,fr:string,en:string,sourcePage:string,credit:string):BodrumPremiumPhoto=>({
  src:`/images/travel/paris-premium/${hotel}/${key}.webp`,fr,en,sourcePage,credit
});
export const parisHotelEditorial:Record<string,BodrumHotelEditorial>={
  'Cheval Blanc Paris':{
    photos:[
      photo('cheval-blanc','seine-exterior','Le Cheval Blanc Paris dans le bâtiment de la Samaritaine, au bord de la Seine','Cheval Blanc Paris above the Seine in the historic Samaritaine building','https://www.theworlds50best.com/hotels/the-list/cheval-blanc.html',"The World's 50 Best Hotels · Cheval Blanc Paris"),
      photo('cheval-blanc','dior-spa-pool','Les espaces piscine et relaxation du Dior Spa Cheval Blanc Paris','Pool and relaxation area at the Dior Spa, Cheval Blanc Paris','https://www.chevalblanc.com/fr/maison/paris/bien-etre/','Cheval Blanc Paris · Oliver Fly / Dior Spa'),
      photo('cheval-blanc','seine-suite','Salon d’une suite du Cheval Blanc Paris avec vue sur les toits et monuments','Cheval Blanc Paris suite living room with a view over Paris rooftops and landmarks','https://travel.yahoo.com/hotels/articles/butler-dior-spa-cheval-blanc-130000465.html','ELLE · Cheval Blanc Paris')
    ],
    credit:'Cheval Blanc Paris · images éditoriales documentées',
    sourcePage:'https://www.chevalblanc.com/en/maison/paris/',
    frBest:'Pour un séjour contemporain et très confidentiel au cœur du Paris historique, des instants au bord de la Seine et un service discret.',
    enBest:'For a discreet contemporary stay in historic central Paris, with the Seine at your doorstep and an intensely personal sense of place.',
    frStory:"Cheval Blanc Paris apporte un regard contemporain sur le palace parisien. Son adresse au sein de la Samaritaine met littéralement le fleuve au centre du séjour : sorties à pied vers le Louvre et Pont-Neuf, perspectives changeantes sur les monuments, attention portée aux volumes et à la matière. La piscine et les espaces Dior Spa invitent à retrouver un rythme plus lent après une journée en ville. La vraie décision réside dans la catégorie de chambre : toutes les suites ne possèdent ni la même vue, ni le même balcon, ni les mêmes espaces. Les photographies de suites décrivent des catégories précises, jamais une vue garantie.",
    enStory:"Cheval Blanc Paris gives the traditional palace a contemporary and discreet personality. Occupying part of La Samaritaine on the Seine, it makes the river central to the stay: strolls to the Louvre and Pont-Neuf, changing monument views, and a carefully designed world of texture and light. The spa and pool introduce a slower pace after the city. The crucial decision is the actual accommodation category: suites do not all have the same view, balcony or layout. Editorial suite imagery never guarantees the room or vista assigned."
  },
  'Four Seasons Hotel George V, Paris':{
    photos:[
      photo('george-v','paris-entrance','L’entrée classique du Four Seasons Hotel George V sur l’avenue George V','Classic entrance of Four Seasons Hotel George V on Avenue George V','https://www.fourseasons.com/paris/','Four Seasons Hotel George V, Paris'),
      photo('george-v','flowers-lobby','Le lobby en marbre et les installations florales du Four Seasons George V','Marble lobby and signature floral display at the Four Seasons George V','https://joinup.ro/en/hotel/29232','Join UP! · Four Seasons Hotel George V'),
      photo('george-v','spa-pool','La piscine intérieure du spa Four Seasons Hotel George V à Paris','Indoor spa swimming pool at Four Seasons Hotel George V, Paris','https://www.fourseasons.com/paris/spa/','Four Seasons · Le Spa George V')
    ],
    credit:'Four Seasons George V · images et médias hôteliers',
    sourcePage:'https://www.fourseasons.com/paris/photos-and-videos/',
    frBest:'Pour le cérémonial du grand palace, les compositions florales, la gastronomie et une adresse emblématique du Triangle d’Or.',
    enBest:'For grand-hotel ceremony, spectacular flowers, considered dining and a celebrated Golden Triangle address.',
    frStory:"Le George V incarne le Paris du palace dans son expression la plus généreuse : vaste hall de marbre, créations florales, cours intérieures et art de recevoir. Le plaisir vient autant des espaces communs que du confort de la chambre, particulièrement pour ceux qui aiment les restaurants de destination. Il faut pourtant distinguer le spectacle des salons de la réalité de chaque catégorie : vue sur avenue, cour ou toits n’ont pas le même charme et les panoramas Tour Eiffel appartiennent à certains hébergements seulement. Un séjour réussi commence par la catégorie exacte et par des réservations de restaurant anticipées.",
    enStory:"George V is Paris palace hospitality at full scale: a marble lobby, extraordinary floral installations, interior courtyards and a gracious service culture. Public spaces and the dining scene are part of the experience, not merely the accommodation. Yet the hotel's theatre should not obscure room-specific facts: avenue, courtyard and skyline views differ greatly, and Eiffel Tower outlooks belong to certain categories only. Confirm the exact room and make restaurant plans well ahead."
  },
  'Le Bristol Paris':{
    photos:[
      photo('le-bristol','garden-terrace','Les tables ombragées et le jardin intérieur du Bristol Paris','Le Bristol Paris shaded tables and private garden terrace','https://www.oetkerhotels.com/hotels/le-bristol-paris/gallery/','Le Bristol Paris · Vincent Leroux'),
      photo('le-bristol','deluxe-suite','La chambre claire d’une suite Deluxe du Bristol Paris','Light-filled bedroom of a Deluxe Suite at Le Bristol Paris','https://www.oetkerhotels.com/hotels/le-bristol-paris/accommodations/rooms-suites/deluxe-suite/','Le Bristol Paris · galerie officielle'),
      photo('le-bristol','suite-eden-spa','L’espace bien-être privatif de la Suite Eden au Bristol Paris','Private terrace spa area of Suite Eden at Le Bristol Paris','https://www.oetkerhotels.com/hotels/le-bristol-paris/accommodations/rooms-suites/suite-eden/gallery/','Le Bristol Paris · Franck Bohbot')
    ],
    credit:'Le Bristol Paris · photographies de la collection',
    sourcePage:'https://www.oetkerhotels.com/hotels/le-bristol-paris/gallery/',
    frBest:'Pour une douceur parisienne plus résidentielle, un jardin intérieur rare dans le quartier et une adresse gastronomique.',
    enBest:'For refined residential Paris, a rare secret garden in the city and an important dining address.',
    frStory:"Au Bristol, le luxe prend volontiers les airs d’une maison de famille : pièces généreuses, matières douces, service attentif et respiration offerte par le jardin intérieur. Le Faubourg Saint-Honoré permet d’alterner couture, culture et restaurants sans remplir la journée d’itinéraires compliqués. Pour séjourner au plus près de cet esprit, la chambre mérite d’être choisie pour son volume, son calme et son orientation sur le jardin ou la rue. La photographie de la Suite Eden montre son espace exceptionnel ; elle ne représente pas une prestation incluse avec une chambre standard.",
    enStory:"Le Bristol feels more like an exceptionally gracious Parisian residence than a showpiece hotel: generous rooms, considered service and the unusual luxury of a secluded garden. From Faubourg Saint-Honoré, boutiques, galleries and restaurants are within reach. Choose accommodation for its space, tranquillity and garden or street aspect. The distinctive Suite Eden image illustrates that specific suite; its private facilities are not standard hotel-room amenities."
  },
  'Mandarin Oriental Lutetia, Paris':{
    photos:[
      photo('lutetia','hotel-facade','La façade Art nouveau et Art déco du Mandarin Oriental Lutetia au crépuscule','Illuminated Art Nouveau and Art Deco facade of Mandarin Oriental Lutetia at dusk','https://www.glamour.de/artikel/hotel-lutetia-paris-1','GLAMOUR · Lutetia Paris'),
      photo('lutetia','indoor-pool','La piscine intérieure du spa de l’hôtel Lutetia à Saint-Germain','Indoor spa swimming pool at the Lutetia in Saint-Germain','https://designandcontract.com/it/realizzazioni/hotel-lutetia','Design & Contract · Hotel Lutetia'),
      photo('lutetia','eiffel-suite','Une suite du Lutetia ouvrant sur une terrasse et la vue de la tour Eiffel','Lutetia suite with balcony and selected Eiffel Tower view','https://casavogue.globo.com/lazer-e-cultura/hoteis/noticia/2025/06/mandarin-oriental-lutetia.ghtml','Casa Vogue · Mandarin Oriental Lutetia')
    ],
    credit:'Mandarin Oriental Lutetia · presse et galerie',
    sourcePage:'https://www.mandarinoriental.com/en/paris/lutetia/gallery',
    frBest:'Pour la rive gauche, l’élégance littéraire de Saint-Germain et un palace Art déco à explorer à pied.',
    enBest:'For literary Left Bank Paris, Saint-Germain's café culture and an Art Deco landmark to explore on foot.',
    frStory:"Lutetia raconte un Paris différent de celui des grands palaces de la rive droite : histoire culturelle, façades emblématiques, atmosphère de Saint-Germain et une façon plus libre d’habiter la ville. À quelques pas des librairies et galeries, on peut commencer la journée en terrasse avant de rejoindre le spa en fin d’après-midi. Certaines suites disposent de perspectives extraordinaires sur la tour Eiffel ; ce sont des catégories identifiées, non une promesse attachée au nom de l’hôtel. Vérifier l’orientation, le balcon et le plan de chaque suite.",
    enStory:"Lutetia expresses a different Paris from the grand right-bank palaces: cultural heritage, an instantly recognizable facade and the intellectual, café-lined atmosphere of Saint-Germain. Bookshops and galleries invite unhurried mornings, followed by an afternoon at the spa. Certain exceptional suites frame the Eiffel Tower, but those views are specific room categories, not a general hotel entitlement. Check each suite's outlook, balcony and floor plan."
  }
};
export const parisAreaVisuals:(BodrumPremiumPhoto|null)[]=[
  {src:'/images/travel/paris-premium/destination/paris-pont-des-arts.webp',fr:'Le Louvre et le pont des Arts photographiés depuis un bateau sur la Seine',en:'The Louvre and Pont des Arts seen from a boat on the Seine',credit:'Tangopaso · domaine public · orientation et WebP optimisés',sourcePage:'https://commons.wikimedia.org/wiki/File:Louvre_%26_pont_des_Arts.jpg'},
  {src:'/images/travel/paris-premium/destination/paris-champs-elysees.webp',fr:'Champs-Élysées depuis l’Arc de Triomphe au crépuscule',en:'Champs-Élysées looking out from the Arc de Triomphe at dusk',credit:'ASaber91 · CC BY-SA 4.0 · photographie optimisée en WebP',sourcePage:'https://commons.wikimedia.org/wiki/File:Champs_Elysees_from_the_Arch.jpg'},
  {src:'/images/travel/paris-premium/destination/paris-saint-germain.webp',fr:'L’église et les cafés historiques de Saint-Germain-des-Prés',en:'Historic church and classic cafés in Saint-Germain-des-Prés',credit:'Serge Melki · CC BY 2.0 · photographie optimisée en WebP',sourcePage:'https://commons.wikimedia.org/wiki/File:Saint-Germain_des_Pr%C3%A9s_(3363718209).jpg'}
];
