/** Miami flagship editorial: curated bilingual owner Preview, no rates, rooms or booking contract implied. Sources: docs/travel-miami-source-review.md */
import type {FeaturedCityGuideData} from './featuredCityGuides';
export const miamiDraftGuide: Omit<FeaturedCityGuideData,'photos'> = {
  "slug": "miami",
  "name": "Miami",
  "country": "États-Unis",
  "hero": "scene-1",
  "secondary": "scene-7",
  "eyebrowFr": "Miami · l'Atlantique, le design et l'art de ralentir",
  "eyebrowEn": "Miami · Atlantic light, design and room to breathe",
  "headingFr": "Miami : le soleil ne suffit pas. Le bon quartier change tout.",
  "headingEn": "Miami: sunshine is only the beginning. The neighbourhood makes the stay.",
  "introFr": "Un matin les pieds dans le sable, une après-midi entre galeries et architecture, puis un dîner face à l'Atlantique : Miami a plusieurs visages. Bosphoras compare quatre hôtels remarquables, cinq atmosphères et les détails qui transforment une escapade en vrai séjour d'exception.",
  "introEn": "Barefoot mornings on the sand, art and architecture in the afternoon, dinner beside the Atlantic: Miami is many cities at once. Bosphoras explores four singular hotels, five contrasting areas and the choices that turn a sunny escape into an extraordinary stay.",
  "editorialFr": "Miami n'est pas un seul front de mer : South Beach et ses rues Art déco s'explorent à pied, Mid-Beach privilégie de longues promenades et l'architecture de ses hôtels, tandis que Surfside séduit les voyageurs qui veulent un bord de mer plus apaisé. Brickell, de l'autre côté de la baie, offre restaurants, grandes tours et vie urbaine sans plage immédiatement au pied de l'hôtel. Wynwood et le Design District sont des destinations de journée pour l'art et le design, pas des substituts au séjour balnéaire. Au Setai, la discrétion asiatique et les jardins de piscines contrebalancent l'énergie de South Beach ; vérifier l'aile et la catégorie de suite plutôt que de déduire la vue depuis une photo. Faena, à Mid-Beach, propose un décor spectaculaire et une programmation culturelle ; une soirée animée peut y faire partie de l'expérience, les événements et conditions d'accès se vérifient aux dates choisies. The Miami Beach EDITION allie accès à la plage, univers contemporain et lieux de vie variés : choisir entre repos et vie nocturne en fonction de sa chambre. Plus au nord, le Four Seasons Hotel at The Surf Club, situé à Surfside, cultive l'élégance des années 1930 dans un environnement différent de South Beach. Les suites résidentielles, bungalows et chambres standards n'ont ni les mêmes superficies, ni les mêmes équipements. Pour une famille, vérifier les lits autorisés, la piscine et les chambres communicantes, en gardant en tête les frais de resort, éventuelles taxes, saison des ouragans et prix variables des transferts. Le pont entre l'île-barrière de Miami Beach et le continent rend les déplacements sensibles aux embouteillages : ne promettre aucun temps de trajet fixe. Ce guide est une sélection indépendante et non un inventaire de chambres ou une offre de vente directe.",
  "editorialEn": "Miami is not one continuous beach holiday. South Beach rewards walking through its Art Deco streets and shoreline; Mid-Beach adds wide sands and architecture-led resort experiences; Surfside attracts travellers seeking a quieter oceanfront base. Across Biscayne Bay, Brickell brings towers, restaurants and city energy, not direct access to the Atlantic beach. Wynwood and the Design District are inspiring daytime visits for art and design, rather than interchangeable beachfront accommodation. The Setai combines quietly luxurious interiors and its pool gardens with the buzz of South Beach: verify which building and accommodation category you are viewing, rather than assuming every suite has the pictured outlook. Faena in Mid-Beach makes an artistic statement with bold interiors and cultural programming; performances, venue access and noise conditions must be checked for the chosen dates. The Miami Beach EDITION blends oceanfront leisure with lively hospitality spaces, making room location and guests' preferred pace important. Further north, Four Seasons Hotel at The Surf Club in Surfside embraces a restored 1930s landmark and a different pace from South Beach. Standard hotel rooms, bungalows and residential suites have different sizes and features. Families should verify permitted occupancy, extra beds, pool access and connecting room arrangements. Review resort fees, taxes, seasonal weather, hurricane-season risks and transfer logistics. Causeways between the barrier islands and mainland can be congested, so no single transfer duration is reliable. This is independent editorial guidance, not a room allotment or an authorised direct booking service.",
  "hotelIntroFr": "Quatre adresses réelles, quatre expériences opposées : sérénité contemporaine, hôtel-galerie, lifestyle balnéaire ou refuge historique. Une recommandation éditoriale ne garantit ni tarif, ni disponibilité, ni partenariat.",
  "hotelIntroEn": "Four real hotels, four very different sensibilities: contemporary calm, artistic theatre, coastal lifestyle or heritage retreat. Editorial inclusion never guarantees rates, availability or a supplier relationship.",
  "areas": [
    {
      "name": "South Beach & Collins Avenue",
      "enName": "South Beach & Collins Avenue",
      "fr": "L'Atlantique à quelques pas des façades Art déco, des promenades de plage et de la vie de quartier. Pour vivre la ville à pied tout en retrouvant le calme de son hôtel.",
      "en": "Art Deco streets, oceanfront walks and lively restaurants. A rewarding base for travellers who want the beach and urban Miami Beach on foot.",
      "frWatch": "Demander si la chambre donne sur l'océan, la ville ou une cour ; rue animée ne signifie pas chambre bruyante.",
      "enWatch": "Check if your exact room faces the sea, city or courtyard; neighbourhood energy and room quiet are not the same."
    },
    {
      "name": "Mid-Beach & Faena District",
      "enName": "Mid-Beach & Faena District",
      "fr": "Grands hôtels, sable sans fin, design et expériences culturelles. Le bon choix pour allier journées tranquilles et soirées mémorables.",
      "en": "Long sand beaches, design-minded hotels and cultural experiences. A place for both restful afternoons and memorable evenings.",
      "frWatch": "Contrôler les événements, horaires des restaurants et éventuelles nuisances dans la catégorie réservée.",
      "enWatch": "Check event programming, restaurant schedules and room-specific noise considerations."
    },
    {
      "name": "Surfside & Bal Harbour",
      "enName": "Surfside & Bal Harbour",
      "fr": "Atmosphère plus sereine, horizon océanique et élégance résidentielle au nord de Miami Beach ; idéal pour ralentir sans renoncer aux belles adresses.",
      "en": "A calmer oceanfront mood and residential sophistication north of Miami Beach, suited to unhurried days and understated elegance.",
      "frWatch": "Surfside n'est pas South Beach : anticiper les déplacements vers les restaurants ou sorties nocturnes plus au sud.",
      "enWatch": "Surfside is not South Beach: allow for additional travel to nightlife or dining farther south."
    },
    {
      "name": "Brickell & Biscayne Bay",
      "enName": "Brickell & Biscayne Bay",
      "fr": "L'autre Miami : gratte-ciel, terrasses, gastronomie et promenades près de la baie. Une escale idéale si affaires et art de vivre se mêlent.",
      "en": "Skyline, dining, rooftops and waterfront walks on the mainland, especially for business-minded or urban stays.",
      "frWatch": "La baie n'est pas la plage océanique ; vérifier le trajet jusqu'au sable avant de choisir Brickell.",
      "enWatch": "Bay views are not Atlantic beachfront access; plan trips to the sand before choosing Brickell."
    },
    {
      "name": "Wynwood & Design District",
      "enName": "Wynwood & Design District",
      "fr": "Street art, musées, architecture, mobilier, boutiques et restaurants : une matinée ou un après-midi à explorer plutôt qu'une promesse de resort.",
      "en": "Street art, galleries, fashion, architecture and creative dining make this a compelling daytime excursion rather than a beach-resort setting.",
      "frWatch": "Planifier les déplacements et vérifier les jours d'ouverture des galeries, certaines étant fermées hors événements.",
      "enWatch": "Check gallery hours and the travel time between districts; events do not run every day."
    }
  ],
  "experiences": [
    {
      "frTitle": "Le lever du jour sur South Beach",
      "enTitle": "South Beach before the crowds",
      "fr": "Marcher sur la promenade avant les grandes chaleurs, puis découvrir les façades Art déco avec une lumière qui transforme la ville.",
      "en": "Stroll the shore before the heat rises and see the Art Deco facades in the gentle morning light."
    },
    {
      "frTitle": "Une soirée créative à Mid-Beach",
      "enTitle": "Mid-Beach after dark",
      "fr": "Composer une soirée entre beaux décors, cuisine choisie et programmation artistique, après avoir vérifié les horaires et la réservation séparée.",
      "en": "Design-led dining and culture, with venues, schedules and any separate reservations checked in advance."
    },
    {
      "frTitle": "Le Design District sans précipitation",
      "enTitle": "An unhurried Design District visit",
      "fr": "Consacrer quelques heures à l'architecture et aux galeries plutôt que d'accumuler les adresses sans les regarder.",
      "en": "Spend meaningful time with architecture and galleries rather than rushing through a checklist."
    },
    {
      "frTitle": "Biscayne Bay sous une autre lumière",
      "enTitle": "Biscayne Bay in another light",
      "fr": "Découvrir la skyline depuis les quais ; pour une sortie en mer, demander les conditions météo et un opérateur autorisé.",
      "en": "Explore skyline views from the waterfront; any cruise requires suitable weather and a qualified operator."
    },
    {
      "frTitle": "Une journée paisible à Surfside",
      "enTitle": "A slower day in Surfside",
      "fr": "Réserver un vrai temps pour la plage, une promenade et un déjeuner tranquille, loin de l'agitation de South Beach.",
      "en": "Make time for the sand, an easy stroll and a long lunch away from South Beach's bustle."
    }
  ],
  "hotels": [
    {
      "name": "The Setai, Miami Beach",
      "area": "South Beach · Collins Avenue",
      "officialUrl": "https://www.thesetaihotel.com/",
      "fr": "À South Beach, The Setai oppose une atmosphère de sérénité à la vitalité du quartier. Ses intérieurs d'inspiration asiatique, ses jardins et ses trois piscines en font un refuge à quelques pas de l'océan. Les catégories de suites et les vues varient entre bâtiments ; un bassin photographié ne signifie pas l'accès à tous les soins du spa.",
      "en": "The Setai's Asian-inspired atmosphere, pool gardens and refined interiors provide a remarkably calm counterpoint to lively South Beach. Suite categories, wings and views differ; imagery of its pools or spa must not be read as a universal inclusion.",
      "frWatch": "Vérifier l'aile, les vues exactes, l'occupation enfant et les services du spa inclus ou non.",
      "enWatch": "Confirm building, exact room outlook, family occupancy and whether spa treatments cost extra."
    },
    {
      "name": "Faena Hotel Miami Beach",
      "area": "Mid-Beach · Collins Avenue",
      "officialUrl": "https://www.faena.com/miami-beach",
      "fr": "Faena assume une vision théâtrale de Miami : couleurs, art, gastronomie et rendez-vous culturels composent une expérience qui ne ressemble à aucun palace discret. Son emplacement à Mid-Beach convient au voyageur qui veut une plage généreuse et de véritables soirées ; il faut distinguer les chambres du programme d'événements.",
      "en": "Faena embraces cinematic colour, art, dining and cultural happenings. Its Mid-Beach setting is for travellers seeking a distinctive beachfront personality with memorable evenings; entertainment and access depend on schedules and booking terms.",
      "frWatch": "Demander les catégories de chambres, éventuelles manifestations bruyantes et conditions d'accès aux lieux de restauration.",
      "enWatch": "Check the room type, event schedule, potential noise and separate dining or performance bookings."
    },
    {
      "name": "The Miami Beach EDITION",
      "area": "Mid-Beach · Collins Avenue",
      "officialUrl": "https://www.editionhotels.com/miami-beach/",
      "fr": "L'EDITION marie ligne contemporaine, plage et lieux de vie variés. Plutôt qu'un resort uniforme, l'adresse laisse choisir entre l'océan et l'énergie de ses espaces communs. Les bungalows, suites et chambres n'offrent pas les mêmes configurations.",
      "en": "This design-forward oceanfront hotel mixes beachside calm with social spaces and a more vibrant hospitality style. Bungalows, suites and guestrooms offer different layouts, so choose based on the actual booking category.",
      "frWatch": "Préciser étage et catégorie, accès aux espaces, nuisances éventuelles et politique famille.",
      "enWatch": "Verify level, category, venue access, any noise and family policies."
    },
    {
      "name": "Four Seasons Hotel at The Surf Club",
      "area": "Surfside · 9011 Collins Avenue",
      "officialUrl": "https://www.fourseasons.com/surfside/",
      "fr": "Dans le club historique ouvert en 1930, l'élégance de Surfside devient une expérience calme et très raffinée. La maison distingue chambres d'hôtel, bungalows et suites résidentielles, dont certaines offrent cuisines et terrasses ; ne pas projeter ces équipements sur toute la collection.",
      "en": "Built around the historic Surf Club, this elegant Surfside retreat privileges refined seafront living and a quieter rhythm. Hotel guestrooms, bungalows and residential suites differ substantially in facilities; features pictured in one category cannot be promised for another.",
      "frWatch": "Confirmer le type d'hébergement, la vue, la capacité enfant et les équipements exacts.",
      "enWatch": "Confirm accommodation type, sea outlook, child occupancy and exact facilities."
    }
  ],
  "checksFr": [
    "Privilégier le bon quartier : South Beach animée, Mid-Beach balnéaire, Surfside tranquille ou Brickell urbain.",
    "Demander la catégorie précise, l'emplacement de la chambre, la vue réelle et les équipements garantis.",
    "Comparer taxes, resort fees, annulations, stationnement et éventuels frais supplémentaires.",
    "Pour les familles : nombre d'occupants permis, lits enfants, piscine et communication entre chambres.",
    "Préparer les trajets depuis MIA ou FLL et les traversées des causeways selon les heures.",
    "Vérifier la météo côtière et la saison des ouragans avant d'organiser les sorties en mer.",
    "Les traitements spa, événements, transferts et repas ne sont pas inclus sans confirmation écrite."
  ],
  "checksEn": [
    "Choose your area first: lively South Beach, seaside Mid-Beach, tranquil Surfside or urban Brickell.",
    "Confirm the exact booked category, room location, outlook and guaranteed in-room features.",
    "Compare taxes, resort fees, cancellation rules, parking and additional charges.",
    "Families should confirm room occupancy, children's beds, pool rules and connecting rooms.",
    "Plan actual ground travel from MIA or FLL and across causeways for the selected time of day.",
    "Check coastal weather and hurricane-season risks before planning marine activities.",
    "Spa treatments, performances, transfers and meals are not included without written confirmation."
  ]
};
