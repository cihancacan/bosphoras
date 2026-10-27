
/** Istanbul destination guide complements the pre-existing nine-hotel IstanbulFlagship.
 * The owner Preview is noindex; hotel photo distribution and booking rights are unverified. */
import type {FeaturedCityGuideData,FeaturedCityPhoto} from './featuredCityGuides';
import {istanbulHotels,istanbulDistricts,istanbulJourneys} from './istanbulFlagship';
import {istanbulCityScenes} from './istanbulCityScenes';
const photos:Record<string,FeaturedCityPhoto>={};
for(const [key,item] of Object.entries(istanbulCityScenes)) photos[key]={
 src:item.src,fr:item.fr,en:item.en,author:item.author,license:item.license,licenseUrl:item.licenseUrl,sourcePage:item.sourcePage
};
export const istanbulGuide:FeaturedCityGuideData={
 slug:'istanbul',name:'Istanbul',country:'Turquie',hero:'ciragan',secondary:'karakoy',
 eyebrowFr:'Istanbul · Palais ottomans, quartiers vivants et deux continents',
 eyebrowEn:'Istanbul · Ottoman palaces, vivid neighbourhoods and two continents',
 headingFr:'Istanbul, là où le Bosphore devient une façon de voyager.',
 headingEn:'Istanbul: luxury between the Bosphorus, palaces and living city.',
 introFr:'Des palais sur le Bosphore aux ruelles de Sultanahmet, Istanbul offre plusieurs manières de séjourner. Découvrez neuf hôtels soigneusement documentés, cinq quartiers et les bonnes questions à poser avant de choisir.',
 introEn:'From palace hotels on the Bosphorus to heritage-rich Sultanahmet, Istanbul offers very different ways to stay. Explore nine researched hotels, five neighbourhoods and what matters before booking.',
 editorialFr:"Istanbul se découvre d’abord par ses quartiers. À Karaköy, The Peninsula Istanbul occupe quatre bâtiments sur Galataport, dont trois édifices historiques restaurés : l'adresse associe promenades sur le quai, galeries et proximité d’Istanbul Modern. Plus au nord sur la rive européenne, Çırağan Palace Kempinski et Four Seasons Bosphorus invitent à ralentir dans les jardins de palais, face aux ferries et aux yalıs. Une chambre Grand Deluxe Bosphorus au Çırağan, donnée par l’établissement pour 50 m², ne se confond pas avec une suite de l’aile historique : vues, terrasse, espace et conditions varient. À Kuruçeşme, Mandarin Oriental Bosphorus propose un luxe plus contemporain et résidentiel ; seules certaines chambres disposent de véritables vues sur le détroit ou de configurations communicantes. À Sultanahmet, Four Seasons permet de découvrir tôt Sainte-Sophie, Topkapı et la Mosquée bleue à pied, mais il ne se trouve pas directement au bord du Bosphore. Shangri-La convient aux voyageurs qui apprécient les quais de Beşiktaş ; Raffles est perché au-dessus de Zorlu Center ; St. Regis Nişantaşı se choisit pour les rues élégantes et les galeries ; Ritz-Carlton domine la ville près de Dolmabahçe. Une appellation « vue Bosphore » doit toujours être confirmée avec la catégorie précise, l’étage, le balcon éventuel et l’orientation réelle. Pour les familles, chambres communicantes, ascenseurs, couchages et règles des piscines comptent plus qu’un hall prestigieux. Istanbul Airport (IST) et Sabiha Gökçen (SAW) sont deux aéroports distincts : la route et les transferts changent sensiblement. Les ferries publics offrent une merveilleuse lecture des deux rives ; un yacht privé ne doit pas être annoncé comme compris dans un séjour hôtelier. Printemps et automne conviennent souvent aux promenades, mais les conditions météo, horaires de visite et accès aux terrasses doivent être vérifiés. Cette comparaison est strictement éditoriale : Bosphoras ne revendique ni contrat hôtelier, ni disponibilités en temps réel, ni prix fermes.",
 editorialEn:"Istanbul should be explored as a collection of distinct neighbourhoods. In Karaköy, The Peninsula Istanbul occupies four Galataport waterfront buildings, three of them restored historic structures. Guests can combine Bosphorus walks, galleries and Istanbul Modern. Further north, Çırağan Palace Kempinski and Four Seasons Bosphorus draw on Ottoman palace heritage, waterfront terraces and gardens. The Kempinski's 50-square-metre Grand Deluxe Bosphorus Room is not the same experience as a historic palace suite: the room wing, outlook, balcony and inclusions must be checked. Mandarin Oriental in Kuruçeşme brings contemporary luxury to a more residential shoreline, with strait-view and connecting-room categories that are not universal. At Sultanahmet, Four Seasons is a base for Hagia Sophia, the Blue Mosque and Topkapı on foot, not a waterside hotel. Shangri-La brings the Beşiktaş ferry district into reach; Raffles towers above Zorlu Center; St. Regis Nişantaşı favours galleries and elegant city life; Ritz-Carlton overlooks the city near Dolmabahçe. A Bosphorus-view label must be checked against the actual room category, floor, outdoor area and direction. Families should prioritise room connections, extra beds, accessibility and pool policies over dramatic marketing photographs. Istanbul Airport (IST) and Sabiha Gökçen (SAW) are different gateways with different road access and traffic patterns. Public ferries offer a superb view of both continents, but no private yacht should be implied as a hotel inclusion. Spring and autumn can be beautiful for city walks, subject to winds, weather and attraction rules. This is an editorial comparison: no live rate, supplier contract or bookable allotment is claimed by Bosphoras.",
 hotelIntroFr:'Neuf hôtels existants, déjà étudiés sur la page hôtelière Istanbul : palais, adresses à pied, refuges contemporains. Comparer surtout la vue réellement réservée et le quartier.',
 hotelIntroEn:'Nine real hotels, already reviewed in our Istanbul hotel flagship: palaces, walkable historic bases and contemporary escapes. Compare the exact booked room and neighbourhood.',
 areas:istanbulDistricts.map(d=>({name:d.name,enName:d.name,fr:d.fr,en:d.en,frWatch:d.frTip,enWatch:d.enTip})),
 experiences:[
 ...istanbulJourneys.map(j=>({frTitle:j.frTitle,enTitle:j.enTitle,fr:j.fr,en:j.en})),
 {frTitle:'Passer d’Europe en Asie en ferry',enTitle:'Cross from Europe to Asia by public ferry',fr:'Les ferries réguliers offrent de magnifiques vues de palais, mosquées et navires sans prétendre inclure une croisière privée.',en:'Scheduled ferries offer memorable views of waterfront palaces, mosques and passing boats without promising a private charter.'},
 {frTitle:'Sultanahmet dès le matin',enTitle:'Early-morning Sultanahmet',fr:'Profiter de Sainte-Sophie, de la Mosquée bleue et du quartier de Topkapı en vérifiant les horaires d’accès et de prière.',en:'Explore Hagia Sophia, the Blue Mosque and Topkapı neighbourhood, checking admission and prayer times.'},
 {frTitle:'Coucher de soleil au bord du détroit',enTitle:'Bosphorus sunset',fr:'Sélectionner une terrasse ou une promenade accessible et distinguer la vue d’un restaurant de celle réellement associée à la chambre.',en:'Choose a publicly accessible waterfront or a confirmed hotel terrace; distinguish restaurant views from room-category views.'}
 ],
 hotels:istanbulHotels.map(h=>({name:h.name,area:h.zone,fr:h.fr,en:h.en,frWatch:h.frWatch,enWatch:h.enWatch,officialUrl:h.officialUrl})),
 checksFr:[
 'The Peninsula : catégories ville, jardin ou Bosphore distinctes.',
 'Çırağan et Four Seasons Bosphorus : salle, aile historique et vue à confirmer.',
 'Mandarin Oriental : chambres communicantes et panorama selon catégorie.',
 'Four Seasons Sultanahmet : monuments à pied, pas d’accès direct au Bosphore.',
 'Raffles et St. Regis : hôtels urbains, non directement sur le détroit.',
 'IST et SAW sont deux aéroports différents ; prévoir les temps de transfert.',
 'Famille : configurations, baignade, lits enfants et transferts à vérifier.',
 'Pas de tarif ni de réservation API Bosphoras confirmés.'
 ],
 checksEn:[
 'Peninsula has different city, garden and Bosphorus-facing rooms.',
 'Çırağan and Four Seasons Bosphorus palace wings, views and inclusions vary.',
 'Mandarin Oriental connecting rooms and Bosphorus outlook are category-specific.',
 'Four Seasons Sultanahmet is walkable heritage, not a waterfront hotel.',
 'Raffles and St. Regis are urban properties, not on the strait.',
 'IST and SAW are separate airports with different transfer routes.',
 'Families should confirm room connections, pools, cots and transfers.',
 'No confirmed Bosphoras live rates, supplier agreements or API booking.'
 ],
 photos
};
