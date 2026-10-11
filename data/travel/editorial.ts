/** Destination-specific editorial briefs for review; do not imply a first-hand visit or supplier contract. */
export type TravelEditorial = { enIntro: string; frIntro: string; enDetail: string; frDetail: string };
export const travelEditorial: Record<string, TravelEditorial> = {
  "istanbul": {
    "enIntro": "Choose Bosphorus-facing addresses carefully: a panoramic room in a waterfront palace and a city-view room a few streets inland provide very different stays. Compare Karaköy, Beşiktaş and the historic peninsula based on whether your priority is culture, water access or a calm suite.",
    "frIntro": "À Istanbul, une suite réellement ouverte sur le Bosphore n’offre pas la même expérience qu’une chambre avec vue partielle à plusieurs rues de l’eau. Comparez Karaköy, Beşiktaş et la péninsule historique selon votre priorité : patrimoine, front de mer ou calme.",
    "enDetail": "Check the exact room-view category, traffic access, airport transfer options and whether breakfast, spa and private transfers are included. A hotel’s name alone never guarantees a Bosphorus-facing room.",
    "frDetail": "Vérifiez la catégorie exacte de la vue, les accès aux différents quartiers et les transferts depuis l’aéroport. Le nom d’un palace ne garantit pas une chambre face au Bosphore."
  },
  "bodrum": {
    "enIntro": "Yalıkavak suits marina-oriented stays, while secluded peninsulas and small bays can offer more privacy. For villas, shortlist the coast and access to the water before comparing furnishings or photographs.",
    "frIntro": "Yalıkavak convient aux séjours proches de la marina ; des péninsules et criques plus isolées privilégient l’intimité. Pour une villa, choisissez d’abord la côte et l’accès à la mer avant de comparer le mobilier.",
    "enDetail": "Ask whether the villa has private beach access, usable swimming access, on-site staff and reliable road access. For yacht days, check the departure harbour and fuel policy.",
    "frDetail": "Examinez l’accès réel à la plage, la baignade, le personnel inclus et la route d’accès. Pour les yachts, vérifiez le port de départ et les frais de carburant."
  },
  "paris": {
    "enIntro": "Parisian luxury takes several forms: a landmark palace close to the Seine, an intimate Left Bank hotel or a grand suite near the city's principal shopping avenues. Match neighbourhood and room style to your purpose.",
    "frIntro": "À Paris, le luxe prend plusieurs formes : palace près de la Seine, adresse confidentielle rive gauche ou grande suite à proximité des avenues prestigieuses. Le bon quartier dépend autant du séjour que de l’hôtel.",
    "enDetail": "For landmark views, confirm the precise room category and orientation; attractive hotel photographs do not mean each booking includes an Eiffel Tower view. Check connecting rooms for families.",
    "frDetail": "Pour une vue emblématique, confirmez la catégorie et l’orientation exactes de la chambre. Toutes les réservations d’un hôtel illustré avec la tour Eiffel ne donnent pas cette vue. Vérifiez les chambres communicantes en famille."
  },
  "saint-tropez": {
    "enIntro": "A village hotel offers proximity to the port and restaurants; a villa near Pampelonne favours space, privacy and beach life. Luxury here is as much about location and transport as property design.",
    "frIntro": "Un hôtel dans le village permet de rejoindre le port et les restaurants ; une villa proche de Pampelonne privilégie l’espace, l’intimité et la plage. L’emplacement et les déplacements comptent autant que le design.",
    "enDetail": "Check private access, pool safety for children, staffing, drive times in peak summer and any yacht embarkation point. Road journeys can matter more than distances suggest.",
    "frDetail": "Vérifiez les accès privés, la sécurité de la piscine pour les enfants, le personnel, les déplacements en haute saison et le point d’embarquement d’un yacht. Les kilomètres ne disent pas tout."
  },
  "dubai": {
    "enIntro": "Dubai offers very different stays: private beach resorts, skyline suites and villas around quieter waterfront districts. Choose according to beach, family facilities, business meetings or late-night access.",
    "frIntro": "Dubaï offre des expériences différentes : resorts avec plage privée, suites sur la skyline ou villas dans des quartiers résidentiels au bord de l’eau. Le choix dépend de la plage, de la famille ou des déplacements professionnels.",
    "enDetail": "Verify beach access, pool privacy, resort fees, room size and whether transfer times are comfortable. A dramatic skyline view is not a substitute for practical access to your preferred activities.",
    "frDetail": "Vérifiez l’accès à la plage, l’intimité de la piscine, les frais du resort, la superficie et les transferts. Une vue spectaculaire ne remplace pas une localisation adaptée à vos activités."
  },
  "bali": {
    "enIntro": "Ubud's green valleys, the dramatic coast around Uluwatu and the softer beach rhythm of southern Bali serve different travellers. Design villas, wellness and privacy are stronger filters than star ratings alone.",
    "frIntro": "Les vallées verdoyantes d’Ubud, les falaises d’Uluwatu et les plages du sud de Bali correspondent à des séjours différents. L’architecture, le bien-être et l’intimité comptent davantage qu’une simple catégorie d’étoiles.",
    "enDetail": "Check villa access, whether pools are truly private, staffing, insects and open-plan features, and travel times between attractions. A property can be striking in images yet impractical for a young family.",
    "frDetail": "Vérifiez l’accès à la villa, l’intimité réelle de la piscine, le personnel, les espaces ouverts et les trajets. Une villa spectaculaire en photo n’est pas toujours pratique avec de jeunes enfants."
  },
  "phuket": {
    "enIntro": "For a private-villa experience, look beyond Patong and compare quieter headlands around Kamala, Layan and Cape Yamu. Beach resorts and hillside villas are distinct products with different accessibility.",
    "frIntro": "Pour des villas privées, comparez les promontoires plus calmes de Kamala, Layan et Cape Yamu au lieu de limiter la recherche aux plages très fréquentées. Resort en bord de mer et villa sur colline n’offrent pas les mêmes accès.",
    "enDetail": "Confirm whether the sea is walkable from the property, whether the beach is swimmable in your season, and if the quoted villa price includes a cook, driver and housekeeping.",
    "frDetail": "Confirmez l’accès réel à la mer, les conditions de baignade selon la saison et les services inclus : cuisinier, chauffeur et entretien."
  },
  "koh-samui": {
    "enIntro": "Koh Samui is particularly suited to multi-bedroom hillside villas and resorts with panoramic Gulf views. Travellers seeking quiet should distinguish beach access from a high villa viewpoint.",
    "frIntro": "Koh Samui convient particulièrement aux villas de plusieurs chambres sur les hauteurs et aux resorts avec vue sur le golfe. Il faut distinguer un panorama exceptionnel d’un accès direct à la plage.",
    "enDetail": "Check steep-drive access, pool safety, airport transfer time and the seasonal pattern of conditions in the Gulf, which differs from the Andaman coast around Phuket.",
    "frDetail": "Vérifiez la pente de la route d’accès, la sécurité des piscines, les transferts et la saisonnalité du golfe, différente de la côte d’Andaman autour de Phuket."
  },
  "maldives": {
    "enIntro": "Overwater villas, beachfront residences and full island buyouts can deliver very different experiences. Compare the reef and lagoon, privacy and transfer arrangements before relying on villa size alone.",
    "frIntro": "Aux Maldives, une villa sur pilotis, une résidence sur la plage ou la privatisation d’une île représentent trois expériences distinctes. Comparez le récif, le lagon, l’intimité et les transferts avant la superficie.",
    "enDetail": "Seaplane schedules, domestic flights, speedboats, meal plans and weather can materially change the final trip. Always confirm child policies for overwater accommodation.",
    "frDetail": "Les horaires d’hydravion, vols intérieurs, bateaux, pensions et conditions météo changent le voyage. Vérifiez les restrictions concernant les enfants pour les villas sur pilotis."
  },
  "los-cabos": {
    "enIntro": "The luxury corridor between Cabo San Lucas and San José del Cabo offers dramatic desert-meets-ocean resorts and private estates. Decide first whether you prefer a sheltered hotel setting, golf access or marina proximity.",
    "frIntro": "Le corridor entre Cabo San Lucas et San José del Cabo propose des resorts spectaculaires entre désert et océan ainsi que des propriétés privées. Déterminez d’abord si vous privilégiez le calme, le golf ou la marina.",
    "enDetail": "Many oceanfront beaches have strong currents and are not suitable for swimming. Check swimmability, precise location, private pool arrangements and the total cost of villa services.",
    "frDetail": "De nombreuses plages exposées aux courants ne sont pas adaptées à la baignade. Vérifiez les plages accessibles, la localisation et le coût total des services d’une villa."
  },
  "punta-mita": {
    "enIntro": "Punta Mita combines a gated peninsula setting, resort hospitality and spacious private villas. For a family or group, compare the staff package and access rights to amenities rather than only bedroom counts.",
    "frIntro": "Punta Mita réunit péninsule résidentielle, resorts et grandes villas privées. Pour une famille, comparez le personnel et les droits d’accès aux équipements plutôt que le seul nombre de chambres.",
    "enDetail": "Clarify gated-community access, club fees, beach access and whether villa staff and cooking are included. Not every property offers identical use of resort facilities.",
    "frDetail": "Clarifiez l’accès aux résidences privées, aux clubs, à la plage et aux services du personnel. Toutes les villas ne donnent pas accès aux mêmes équipements."
  },
  "costa-careyes": {
    "enIntro": "Costa Careyes is about architect-led villas and Pacific coastal privacy rather than a large hotel catalogue. It suits travellers prioritising space, design and an unusual group stay.",
    "frIntro": "Costa Careyes privilégie les villas d’architecture et l’intimité de la côte Pacifique plutôt qu’un immense catalogue hôtelier. Cette destination convient aux séjours en groupe où le lieu lui-même fait partie du voyage.",
    "enDetail": "Verify property access, transport, full staffing, guest limits and the terms for events. Extremely exclusive houses often require direct confirmation rather than instant booking.",
    "frDetail": "Vérifiez les conditions d’accès, le transport, le personnel, la capacité et les éventuels événements. Les maisons les plus exclusives nécessitent souvent une validation plutôt qu’une réservation instantanée."
  },
  "mayakoba": {
    "enIntro": "Mayakoba's lagoon and beach environments offer a more contained resort experience on the Riviera Maya. For longer stays, villa layouts and family services can matter more than an individual suite's headline category.",
    "frIntro": "À Mayakoba, les lagunes et plages offrent un séjour en resort plus protégé que dans les zones touristiques alentour. Pour une famille, les espaces de vie et les services comptent autant que le prestige de la suite.",
    "enDetail": "Compare lagoon-side and beachfront settings, transport within the resort, dining plans and how different properties handle private-pool access.",
    "frDetail": "Comparez les chambres sur lagune ou sur plage, les déplacements dans le resort, la restauration et les conditions d’accès aux piscines privées."
  },
  "saint-barthelemy": {
    "enIntro": "Saint-Barth pairs discreet villas overlooking coves with the social life of Gustavia and the island's beach restaurants. A hillside residence can offer a different rhythm from a beachfront hotel.",
    "frIntro": "Saint-Barth associe des villas discrètes sur les hauteurs, les criques et la vie de Gustavia. Une maison panoramique en colline offre une expérience très différente d’un hôtel en bord de plage.",
    "enDetail": "Check hill-road access, parking, villa staffing, beach proximity and festive-season minimum stays. Private villa rentals often require detailed confirmation.",
    "frDetail": "Vérifiez les routes en pente, le stationnement, le personnel, la proximité de la plage et les durées minimales pendant les fêtes. Les villas nécessitent souvent une confirmation détaillée."
  },
  "porto-cervo": {
    "enIntro": "Porto Cervo is a gateway to Costa Smeralda villas, sheltered beaches and yacht days. Marina proximity appeals to boating guests, while quieter coastal properties prioritise privacy.",
    "frIntro": "Porto Cervo permet d’explorer la Costa Smeralda, ses villas, ses plages et les sorties en yacht. La marina intéresse les plaisanciers, tandis que les maisons plus éloignées privilégient la confidentialité.",
    "enDetail": "Distinguish walking distance to the marina from a secluded villa setting. Ask about transport, yacht departure points and what is included during high summer.",
    "frDetail": "Distinguez la proximité de la marina de l’isolement d’une villa. Vérifiez les transferts, départs de yachts et les prestations incluses en été."
  },
  "mustique": {
    "enIntro": "Mustique's appeal is the limited scale of the island and private residential stays rather than a wide choice of hotels. It is particularly suited to groups comfortable booking well ahead.",
    "frIntro": "Mustique attire par sa petite taille et ses villas privées plutôt que par une offre hôtelière étendue. Elle correspond aux groupes qui préparent un séjour longtemps à l’avance.",
    "enDetail": "Confirm staff arrangements, guest capacities, airport connections and the island's booking terms. A villa listing is not necessarily an instantly confirmed reservation.",
    "frDetail": "Confirmez le personnel, la capacité, les vols de correspondance et les conditions de séjour sur l’île. Une villa proposée n’est pas nécessairement réservable instantanément."
  },
  "courchevel-1850": {
    "enIntro": "A chalet's advertised proximity to the slopes needs examination: ski-in ski-out access varies with snow conditions and exact position. A centrally located hotel may serve a shorter trip better than a large isolated chalet.",
    "frIntro": "La mention ski-in ski-out mérite d’être vérifiée : elle dépend de l’emplacement exact et parfois de l’enneigement. Un hôtel central peut être plus pratique pour un court séjour qu’un grand chalet isolé.",
    "enDetail": "Check piste access, boot room, private chef, heated pool, chalet staffing and airport or heliport transfer arrangements. Compare the fully inclusive winter price.",
    "frDetail": "Vérifiez l’accès aux pistes, les locaux à skis, le chef privé, la piscine chauffée, le personnel et les transferts. Comparez le prix final et les prestations."
  },
  "st-moritz": {
    "enIntro": "St. Moritz combines historic grand hotels and private alpine retreats with a strongly seasonal winter calendar. Guests should decide between being close to town and prioritising solitude.",
    "frIntro": "Saint-Moritz mêle grands hôtels historiques et chalets privés avec une saison hivernale intense. Il faut choisir entre proximité du village et isolement.",
    "enDetail": "Confirm transport between neighbourhoods and ski areas, the actual room or chalet view, and winter event dates that may affect travel and availability.",
    "frDetail": "Vérifiez les transferts entre quartiers et domaines skiables, la vue précise et le calendrier hivernal qui influence l’affluence."
  },
  "aspen": {
    "enIntro": "Aspen offers hotel stays in town and large mountain homes with a different level of independence. For a ski week, a practical lift connection can outweigh a more remote property's size.",
    "frIntro": "Aspen propose des hôtels en centre-ville et de vastes résidences montagnardes. Pour une semaine de ski, l’accès aux remontées peut primer sur la taille d’une propriété plus éloignée.",
    "enDetail": "Check ski access, staffing, winter-road arrangements, transport from the airport and the full rental contract for private homes.",
    "frDetail": "Vérifiez l’accès au ski, le personnel, les routes hivernales, l’arrivée depuis l’aéroport et le contrat complet pour une résidence privée."
  },
  "niseko": {
    "enIntro": "Niseko is a strong fit for luxury ski chalets and modern residences with Japanese onsen-inspired features. Distinguish the different bases around the resort before selecting a property.",
    "frIntro": "Niseko est adaptée aux chalets de luxe et résidences contemporaines inspirées de l’onsen japonais. Les différents secteurs de la station doivent être comparés avant de choisir.",
    "enDetail": "Confirm shuttle service, precise lift access, ski storage and whether a private onsen or heated pool belongs to your booked unit.",
    "frDetail": "Vérifiez les navettes, l’accès précis aux pistes, les équipements pour les skis et le caractère réellement privatif des bains ou piscines."
  },
  "sumba": {
    "enIntro": "Sumba offers a remote-island experience with architect-designed villas and an emphasis on landscape rather than nightlife. Travel logistics are part of the choice.",
    "frIntro": "Sumba propose une expérience insulaire confidentielle autour de villas d’architecture et de paysages préservés. Les transferts font pleinement partie du voyage.",
    "enDetail": "Check domestic flight connections, transfer duration, medical access and the exact board and activities included at a remote resort.",
    "frDetail": "Vérifiez les correspondances aériennes, le temps de transfert, l’accès aux soins et les prestations incluses dans un resort isolé."
  }
};
