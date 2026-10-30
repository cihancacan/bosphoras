import {chiangMaiGuide} from './chiangMaiGuide';
import {bangkokGuide} from './bangkokGuide';
import {kohYaoNoiGuide} from './kohYaoNoiGuide';
import {krabiGuide} from './krabiGuide';
import {sanMiguelDeAllendeGuide} from './sanMiguelDeAllendeGuide';
import { megeveGuide } from './megeveGuide';
import { jacksonHoleGuide } from './jacksonHoleGuide';
import { bigSkyGuide } from './bigSkyGuide';
import { valDisereGuide } from './valDisereGuide';
import { verbierGuide } from './verbierGuide';
import { gstaadGuide } from './gstaadGuide';
import { zermattGuide } from './zermattGuide';
import { monacoGuide } from './monacoGuide';
import { saintJeanCapFerratGuide } from './saintJeanCapFerratGuide';
import { capDAntibesGuide } from './capDAntibesGuide';
import { lakeComoGuide } from './lakeComoGuide';
import { capriGuide } from './capriGuide';
import { positanoGuide } from './positanoGuide';
import { ravelloGuide } from './ravelloGuide';
import { mykonosGuide } from './mykonosGuide';
import { antiparosGuide } from './antiparosGuide';
import { ibizaGuide } from './ibizaGuide';
import { formenteraGuide } from './formenteraGuide';
import { deiaGuide } from './deiaGuide';
import { portAndratxGuide } from './portAndratxGuide';
import { comportaGuide } from './comportaGuide';
import { melidesGuide } from './melidesGuide';
import { tivatGuide } from './tivatGuide';
import { theHamptonsGuide } from './theHamptonsGuide';
import { palmBeachGuide } from './palmBeachGuide';
import { nantucketGuide } from './nantucketGuide';
import { harbourIslandGuide } from './harbourIslandGuide';
import { turksAndCaicosGuide } from './turksAndCaicosGuide';
import { canouanGuide } from './canouanGuide';
import { neckerIslandGuide } from './neckerIslandGuide';
import { northIslandSeychellesGuide } from './northIslandSeychellesGuide';
import { pamalicanIslandGuide } from './pamalicanIslandGuide';
import { laucalaIslandGuide } from './laucalaIslandGuide';
import { jumbyBayGuide } from './jumbyBayGuide';
import { okavangoDeltaGuide } from './okavangoDeltaGuide';
import { puntaMitaGuide } from './puntaMitaGuide';
import { costaCareyesGuide } from './costaCareyesGuide';
import { istanbulGuide } from './istanbulGuide';
import { newYorkGuide } from './newYorkGuide';
import { miamiGuide } from './miamiGuide';
import { losAngelesGuide } from './losAngelesGuide';
import { mayakobaGuide } from './mayakobaGuide';
import { stMoritzGuide } from './stMoritzGuide';
import { aspenGuide } from './aspenGuide';
import { nisekoGuide } from './nisekoGuide';
import { courchevel1850Guide } from './courchevel1850Guide';
import { mustiqueGuide } from './mustiqueGuide';
import { portoCervoGuide } from './portoCervoGuide';
import { saintBarthelemyGuide } from './saintBarthelemyGuide';
import { losCabosGuide } from './losCabosGuide';
import { maldivesGuide } from './maldivesGuide';
import { kohSamuiGuide } from './kohSamuiGuide';
/** Curated Travel destination guides. Editorial selections only: no supplier inventory, booking, rates or claim of first-hand inspection. */
export type FeaturedCitySlug = 'chiang-mai' | 'bangkok' | 'koh-yao-noi' | 'krabi' | 'san-miguel-de-allende' | 'mayakoba' | 'los-angeles' | 'miami' | 'new-york' | 'istanbul' | 'bodrum' | 'antalya' | 'dubai' | 'paris' | 'saint-tropez' | 'bali' | 'phuket' | 'koh-samui' | 'maldives' | 'los-cabos' | 'saint-barthelemy' | 'porto-cervo' | 'mustique' | 'courchevel-1850' | 'st-moritz' | 'aspen' | 'niseko' | 'megeve' | 'jackson-hole' | 'big-sky' | 'val-disere' | 'verbier' | 'gstaad' | 'zermatt' | 'monaco' | 'saint-jean-cap-ferrat' | 'cap-dantibes' | 'lake-como' | 'capri' | 'positano' | 'ravello' | 'mykonos' | 'antiparos' | 'ibiza' | 'formentera' | 'deia' | 'port-andratx' | 'comporta' | 'melides' | 'tivat' | 'the-hamptons' | 'palm-beach' | 'nantucket' | 'harbour-island' | 'turks-and-caicos' | 'canouan' | 'necker-island' | 'north-island-seychelles' | 'pamalican-island' | 'laucala-island' | 'jumby-bay' | 'okavango-delta' | 'punta-mita' | 'costa-careyes';
export type FeaturedCityPhoto = {src:string;fr:string;en:string;author:string;license:string;licenseUrl:string;sourcePage:string};
export type FeaturedCityArea = {name:string;enName:string;fr:string;en:string;frWatch:string;enWatch:string};
export type FeaturedCityExperience = {frTitle:string;enTitle:string;fr:string;en:string};
export type FeaturedCityHotel = {name:string;area:string;fr:string;en:string;frWatch:string;enWatch:string;officialUrl:string};
export type FeaturedCityGuideData = {slug:FeaturedCitySlug;name:string;country:string;hero:string;secondary:string;eyebrowFr:string;eyebrowEn:string;headingFr:string;headingEn:string;introFr:string;introEn:string;editorialFr:string;editorialEn:string;hotelIntroFr:string;hotelIntroEn:string;areas:FeaturedCityArea[];experiences:FeaturedCityExperience[];hotels:FeaturedCityHotel[];checksFr:string[];checksEn:string[];photos:Record<string,FeaturedCityPhoto>};
export const featuredCityGuides: Record<FeaturedCitySlug, FeaturedCityGuideData> = {
  istanbul: istanbulGuide,
  'new-york': newYorkGuide,
  'miami': miamiGuide,
  'los-angeles': losAngelesGuide,
  'chiang-mai': chiangMaiGuide,
  'bangkok': bangkokGuide,
  'koh-yao-noi': kohYaoNoiGuide,
  'krabi': krabiGuide,
  'san-miguel-de-allende': sanMiguelDeAllendeGuide,
  'mayakoba': mayakobaGuide,
  "bodrum": {
    "slug": "bodrum",
    "name": "Bodrum",
    "country": "Turquie",
    "hero": "bodrum-coast",
    "secondary": "harbour",
    "eyebrowFr": "La Riviera égéenne",
    "eyebrowEn": "The Aegean Riviera",
    "headingFr": "Bodrum, le luxe a le goût de la mer.",
    "headingEn": "Bodrum: luxury at the pace of the Aegean.",
    "introFr": "À Bodrum, il faut d’abord choisir sa baie. Marina animée à Yalıkavak, retraite sur une côte discrète ou grand resort familial : les distances paraissent courtes, mais chaque rivage change l’expérience du séjour.",
    "introEn": "In Bodrum, the bay matters more than a star rating. From lively Yalıkavak Marina to private northern shores and spacious family resorts, every coastline shapes a different stay.",
    "editorialFr": "Notre sélection distingue les criques paisibles des adresses tournées vers la marina. Une plage privée, une villa avec piscine et une chambre vue mer sont trois promesses différentes — chacune doit être vérifiée avant tout engagement.",
    "editorialEn": "Our selection separates secluded coves from marina-oriented addresses. Private beach access, a pool villa and a sea-view room are different propositions; each must be checked before booking.",
    "hotelIntroFr": "Quatre établissements à comparer selon leur emplacement et leur style. Ce sont des références éditoriales, non des chambres proposées à la vente par Bosphoras.",
    "hotelIntroEn": "Four properties to compare by shoreline and style. These are editorial references, not rooms currently offered for sale through Bosphoras.",
    "areas": [
      {
        "name": "Yalıkavak & la marina",
        "enName": "Yalıkavak & the marina",
        "fr": "Yachts, restaurants, boutiques et rythme estival ; privilégier la proximité de la marina si la vie à pied en soirée est prioritaire.",
        "en": "Yachts, dining, shopping and summer energy; choose genuine marina proximity if evening strolls matter.",
        "frWatch": "Une adresse dite « Yalıkavak » n’est pas forcément accessible à pied depuis les pontons.",
        "enWatch": "A Yalıkavak address is not necessarily within walking distance of the berths."
      },
      {
        "name": "Göltürkbükü & Paradise Bay",
        "enName": "Göltürkbükü & Paradise Bay",
        "fr": "Paysage de pinèdes, plages et resorts orientés vers le repos ; idéal pour rester plusieurs jours à l’hôtel ou dans une villa.",
        "en": "Pine-covered slopes, beaches and resort-led stays; well suited to lingering at a hotel or private villa.",
        "frWatch": "Comparer accès plage, pente, navettes et exposition de la chambre.",
        "enWatch": "Compare beach access, gradients, transport and the exact room aspect."
      },
      {
        "name": "Kaplankaya & côte nord",
        "enName": "Kaplankaya & the northern coast",
        "fr": "Une expérience plus isolée tournée vers le bien-être et l’espace, du côté de Milas. Ce n’est pas le centre de Bodrum.",
        "en": "A more secluded wellness-focused landscape towards Milas, rather than Bodrum town itself.",
        "frWatch": "Temps de route et transferts à anticiper avant de réserver.",
        "enWatch": "Confirm transfer routes and journey logistics before committing."
      }
    ],
    "experiences": [
      {
        "frTitle": "Le matin au bord de l’eau",
        "enTitle": "A morning on the water",
        "fr": "Petit déjeuner face aux criques, baignade tranquille puis sortie en bateau selon les conditions météo.",
        "en": "Breakfast overlooking a cove, a quiet swim and an optional boat outing when conditions permit."
      },
      {
        "frTitle": "L’art de vivre de Yalıkavak",
        "enTitle": "The Yalıkavak rhythm",
        "fr": "Un déjeuner long, la marina en fin d’après-midi et un restaurant choisi pour son atmosphère.",
        "en": "A long lunch, an afternoon around the marina and a restaurant picked for its atmosphere."
      },
      {
        "frTitle": "La villa sans compromis",
        "enTitle": "The considered villa stay",
        "fr": "Choisir la vue, mais contrôler surtout l’accès à la mer, le personnel, la piscine et l’intimité réelle.",
        "en": "Choose the outlook, but verify swimming access, staffing, pool privacy and actual seclusion."
      }
    ],
    "hotels": [
      {
        "name": "Mandarin Oriental, Bodrum",
        "area": "Paradise Bay · Göltürkbükü",
        "fr": "Une grande adresse sur la baie de Paradise Bay, avec chambres, suites et villas à comparer selon la vue et l'accès extérieur.",
        "en": "An expansive Paradise Bay resort with rooms, suites and villas to compare by outlook and outdoor access.",
        "frWatch": "Ne pas confondre catégorie « Garden View » et véritable « Sea View ».",
        "enWatch": "Garden View and Sea View rooms are not interchangeable.",
        "officialUrl": "https://www.mandarinoriental.com/en/bodrum/paradise-bay"
      },
      {
        "name": "The Bodrum EDITION",
        "area": "Yalıkavak",
        "fr": "Adresse contemporaine avec plage, restauration et esprit social sur la péninsule, à distinguer d'un hôtel situé dans la marina même.",
        "en": "A contemporary beachfront base with a social, design-led mood; not the same as staying inside the marina.",
        "frWatch": "Vérifier catégorie de chambre, accès plage et transferts.",
        "enWatch": "Confirm room category, beach arrangements and transfers.",
        "officialUrl": "https://www.marriott.com/en-us/hotels/bjveb-the-bodrum-edition/overview/"
      },
      {
        "name": "Maxx Royal Bodrum",
        "area": "Gölköy · côte nord",
        "fr": "Resort de suites et villas où service, restauration et accès à la baie composent l'essentiel du séjour.",
        "en": "A suites-and-villas resort where service, dining and time by the bay shape the stay.",
        "frWatch": "Vérifier l'emplacement exact de la suite ou de la villa au sein du complexe.",
        "enWatch": "Verify the suite or villa's exact position within the resort.",
        "officialUrl": "https://www.maxxroyal.com/maxx-royal-bodrum"
      },
      {
        "name": "Six Senses Kaplankaya",
        "area": "Bozbük · Milas",
        "fr": "Destination de bien-être sur une partie isolée de la côte, avec spa et résidences ; loin des soirées de la marina.",
        "en": "A secluded wellness-led coastal retreat with residences, well away from the marina nightlife.",
        "frWatch": "Prévoir les transferts : l'adresse se trouve à Milas, pas au centre de Bodrum.",
        "enWatch": "Plan the transfer: the resort is in Milas, not Bodrum town.",
        "officialUrl": "https://www.sixsenses.com/en/hotels-resorts/europe/turkey/kaplankaya/"
      }
    ],
    "checksFr": [
      "La saison d'ouverture effective et les installations disponibles à vos dates.",
      "La catégorie exacte de vue, les équipements privatifs et l'accès à la plage.",
      "Les inclusions de la villa, du personnel, des transferts et des activités nautiques.",
      "Le port d'embarquement et les conditions de carburant si un yacht est envisagé."
    ],
    "checksEn": [
      "Actual seasonal operation and facilities available on your dates.",
      "Exact room view, private amenities and genuine beach access.",
      "Villa staffing, transfers, inclusions and watersport terms.",
      "Yacht departure harbour and fuel policy if planning a day on the water."
    ],
    "photos": {
      "bodrum-coast": {
        "src": "/images/travel/bodrum-premium/destination/bodrum-turquoise-bay-v2.webp",
        "fr": "Crique turquoise et voiliers sur la côte de Bodrum",
        "en": "Turquoise Bodrum bay with sailing boats",
        "author": "Luxury Tribune · photographie de destination",
        "license": "Crédit éditorial",
        "licenseUrl": "https://www.luxurytribune.com/en/bulgari-hotels-resorts-opens-a-new-address-in-turkey",
        "sourcePage": "https://www.luxurytribune.com/en/bulgari-hotels-resorts-opens-a-new-address-in-turkey"
      },
      "edition-pool": {
        "src": "/images/travel/bodrum-premium/the-bodrum-edition/edition-infinity-pool.webp",
        "fr": "La piscine à débordement du Bodrum EDITION",
        "en": "The infinity pool at The Bodrum EDITION",
        "author": "The Bodrum EDITION / Marriott",
        "license": "Galerie officielle",
        "licenseUrl": "https://www.marriott.com/en-us/hotels/bjveb-the-bodrum-edition/photos/",
        "sourcePage": "https://www.marriott.com/en-us/hotels/bjveb-the-bodrum-edition/photos/"
      },
      "marina": {
        "src": "/images/travel/city-guides/bodrum/marina.webp",
        "fr": "La marina de Yalıkavak photographiée en journée",
        "en": "Yalıkavak Marina in daylight",
        "author": "CeeGee",
        "license": "CC0 1.0",
        "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
        "sourcePage": "https://commons.wikimedia.org/wiki/File:YalıkavakMarina_(5).jpg"
      },
      "harbour": {
        "src": "/images/travel/city-guides/bodrum/harbour.webp",
        "fr": "Le port historique de Bodrum vu depuis le château",
        "en": "Bodrum's historic harbour seen from the castle",
        "author": "Mansevikobora",
        "license": "CC BY-SA 3.0",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
        "sourcePage": "https://commons.wikimedia.org/wiki/File:Port_de_bodrum.jpg"
      }
    }
  },
  "antalya": {
    "slug": "antalya",
    "name": "Antalya",
    "country": "Turquie",
    "hero": "golden-hour",
    "secondary": "harbour",
    "eyebrowFr": "La Méditerranée turque",
    "eyebrowEn": "The Turkish Mediterranean",
    "headingFr": "Antalya, entre Méditerranée et art de vivre.",
    "headingEn": "Antalya: the Mediterranean, considered.",
    "introFr": "Luxe balnéaire, grands resorts familiaux, parcours de golf et vieilles ruelles : Antalya n'est pas une seule destination. Belek, Kemer et le centre historique répondent à des envies très différentes.",
    "introEn": "Beachfront resort luxury, spacious family stays, championship golf and historic streets: Antalya is not one destination. Belek, Kemer and the old town create very different experiences.",
    "editorialFr": "Avant le nom d'un hôtel, choisissez votre rythme : tout-compris haut de gamme, crique au pied des montagnes ou boutique-hôtel pour découvrir la ville. Les trajets changent fortement selon la zone.",
    "editorialEn": "Choose your pace before your hotel: considered all-inclusive luxury, a bay below the mountains or a small city base. Transfer times vary significantly by area.",
    "hotelIntroFr": "Quatre références hôtelières pour illustrer des expériences distinctes sur la Riviera d’Antalya ; disponibilité et ouverture des services à contrôler auprès des établissements.",
    "hotelIntroEn": "Four hotel references reflecting different Antalya-coast experiences. Verify dates and operating facilities directly with each property.",
    "areas": [
      {
        "name": "Belek & Kadriye",
        "enName": "Belek & Kadriye",
        "fr": "Grandes plages, parcours de golf, clubs et resorts proposant de nombreuses activités sur place.",
        "en": "Sandy beaches, golf courses and full-service resorts with plenty to do on the grounds.",
        "frWatch": "L'expérience est principalement celle du resort, et non d'une promenade en ville.",
        "enWatch": "Expect a resort-led holiday, not necessarily a walkable city neighbourhood."
      },
      {
        "name": "Kemer & la côte montagneuse",
        "enName": "Kemer & the mountain coast",
        "fr": "Criques et montagnes au-dessus de l'eau, avec une atmosphère plus tournée vers le paysage.",
        "en": "Coves below green mountains, with a landscape-first atmosphere.",
        "frWatch": "Vérifier la nature de la plage et la distance des activités hors hôtel.",
        "enWatch": "Check beach type and distances to activities beyond the property."
      },
      {
        "name": "Kaleiçi & Konyaaltı",
        "enName": "Kaleiçi & Konyaaltı",
        "fr": "Patrimoine, restaurants, vieux port ou plage citadine : à choisir pour sortir et découvrir Antalya.",
        "en": "Historic lanes, dining, an old harbour and city beaches for visitors who want to explore Antalya.",
        "frWatch": "Ce ne sont pas les mêmes environnements que les grands resorts de Belek.",
        "enWatch": "This is a different experience from the large Belek resorts."
      }
    ],
    "experiences": [
      {
        "frTitle": "Le resort familial élégant",
        "enTitle": "The refined family resort",
        "fr": "Comparer l'espace des suites, la restauration, les équipements enfants et les piscines réellement chauffées selon la saison.",
        "en": "Compare suite layouts, restaurants, child facilities and pools actually heated in your season."
      },
      {
        "frTitle": "Le golf et la Méditerranée",
        "enTitle": "Golf by the Mediterranean",
        "fr": "Séjour dédié aux fairways de Belek, avec vérification des parcours, créneaux et éventuelles fermetures d'entretien.",
        "en": "A Belek golf stay with tee times and course maintenance schedules checked in advance."
      },
      {
        "frTitle": "Un détour par la vieille ville",
        "enTitle": "Time in the old town",
        "fr": "Explorer Kaleiçi et le port historique avant de retrouver la tranquillité de son hôtel.",
        "en": "Explore Kaleiçi and its harbour, then return to the relative calm of your accommodation."
      }
    ],
    "hotels": [
      {
        "name": "Regnum Carya",
        "area": "Kadriye · Belek",
        "fr": "Adresse combinant suites, villas, golf et vie de resort haut de gamme.",
        "en": "A high-end resort base combining suites, villas and golf-focused experiences.",
        "frWatch": "Contrôler accès golf, programmes enfants et services selon dates.",
        "enWatch": "Confirm golf access, family facilities and seasonal services.",
        "officialUrl": "https://www.regnumhotels.com/en/hotels/regnum-carya/"
      },
      {
        "name": "Cullinan Belek",
        "area": "Kadriye · Belek",
        "fr": "Resort contemporain en bord de plage à envisager pour un séjour concentré sur les services du complexe.",
        "en": "A contemporary beachfront resort for stays focused on on-property amenities.",
        "frWatch": "Distinguer chambre, suite et offre réellement incluse dans le forfait.",
        "enWatch": "Check room type and the exact plan or services included.",
        "officialUrl": "https://www.cullinanhotels.com/"
      },
      {
        "name": "Rixos Premium Belek",
        "area": "Belek",
        "fr": "Adresse balnéaire à grande capacité avec offre familiale, plage et loisirs.",
        "en": "A substantial beach resort with family-oriented entertainment and activities.",
        "frWatch": "Comparer chambres communicantes et niveau d'accès à certaines activités.",
        "enWatch": "Confirm connecting rooms and whether specific activities are included.",
        "officialUrl": "https://www.rixos.com/fr/hotel-resort/rixos-premium-belek"
      },
      {
        "name": "Maxx Royal Kemer",
        "area": "Kemer · côte ouest",
        "fr": "Une alternative de luxe plus tournée vers la nature et les reliefs méditerranéens que Belek.",
        "en": "An alternative with a dramatic mountain-and-Mediterranean setting rather than the Belek golf coastline.",
        "frWatch": "Trajet depuis l'aéroport et configuration exacte de l'hébergement.",
        "enWatch": "Check airport transfer logistics and your actual room category.",
        "officialUrl": "https://www.maxxroyal.com/Maxx-Royal-Kemer"
      }
    ],
    "checksFr": [
      "La zone réelle : Belek, Kemer ou centre d'Antalya ne sont pas interchangeables.",
      "Le détail du tout-compris, des restaurants à réservation et des prestations premium.",
      "Les piscines chauffées et l'ouverture saisonnière des installations enfants.",
      "Les transferts aéroport et les conditions d'accès aux parcours de golf."
    ],
    "checksEn": [
      "Real location: Belek, Kemer and Antalya's centre are not interchangeable.",
      "The actual all-inclusive scope, restaurant bookings and premium inclusions.",
      "Heated pools and seasonal operation of family facilities.",
      "Airport transfers, golf access and any course maintenance."
    ],
    "photos": {
      "golden-hour": {
        "src": "/images/travel/city-guides/antalya/antalya-golden-hour-hero.webp",
        "fr": "Illustration éditoriale au soleil couchant inspirée de la côte d’Antalya, générée par IA",
        "en": "AI-generated warm sunset editorial illustration inspired by the Antalya coastline",
        "author": "Bosphoras Luxury Stays · création assistée par IA",
        "license": "Illustration artistique, non une photographie réelle",
        "licenseUrl": "https://openai.com/policies/terms-of-use/",
        "sourcePage": "https://openai.com/index/image-generation/"
      },
      "beach": {
        "src": "/images/travel/city-guides/antalya/beach.webp",
        "fr": "La plage de Konyaaltı à Antalya",
        "en": "Konyaaltı Beach in Antalya",
        "author": "MrEfeS",
        "license": "CC BY-SA 4.0",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
        "sourcePage": "https://commons.wikimedia.org/wiki/File:Konyaaltı_Beach.jpg"
      },
      "harbour": {
        "src": "/images/travel/city-guides/antalya/harbour.webp",
        "fr": "Le port historique d'Antalya à Kaleiçi",
        "en": "Antalya's historic Kaleiçi harbour",
        "author": "Maksym Kozlenko",
        "license": "CC BY-SA 4.0",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
        "sourcePage": "https://commons.wikimedia.org/wiki/File:2023-01-17_Antalya_Harbour.jpg"
      }
    }
  },
  "dubai": {
    "slug": "dubai",
    "name": "Dubaï",
    "country": "Émirats arabes unis",
    "hero": "west-beach-hero",
    "secondary": "marina-yachts-bright",
    "eyebrowFr": "Luxe urbain & bord de mer",
    "eyebrowEn": "City glamour & coastline",
    "headingFr": "Dubaï, choisir son horizon.",
    "headingEn": "Dubai: choose your horizon.",
    "introFr": "Palm Jumeirah pour la vie balnéaire, Business Bay pour un hôtel urbain raffiné, Downtown pour les monuments et Dubai Marina pour les promenades : à Dubaï, le quartier fait toute la différence.",
    "introEn": "Palm Jumeirah for the beach, Business Bay for refined city living, Downtown for landmark views and Dubai Marina for waterfront walks: in Dubai, location changes everything.",
    "editorialFr": "Nous distinguons l'hôtel spectaculaire du séjour réellement agréable : accès plage, catégorie de vue, circulation et proximité des restaurants comptent davantage qu'un seul cliché de skyline.",
    "editorialEn": "We separate architectural spectacle from the actual experience: beach access, confirmed room view, traffic and nearby dining matter more than a skyline photograph.",
    "hotelIntroFr": "Quatre adresses fortes, de l'hôtel urbain au grand resort de Palm Jumeirah. Sélection éditoriale indépendante, sans prix ou disponibilité affichés.",
    "hotelIntroEn": "Four distinctive addresses, from a polished urban hotel to a statement Palm Jumeirah resort. An independent shortlist without live rates or availability.",
    "areas": [
      {
        "name": "Palm Jumeirah",
        "enName": "Palm Jumeirah",
        "fr": "Resorts en bord de mer, longues plages et restaurants de destination ; temps de trajet parfois importants hors de la Palm.",
        "en": "Beach resorts, destination dining and a slower shoreline rhythm; allow for travel away from the Palm.",
        "frWatch": "La plage peut être privée au complexe et la vue Burj Al Arab n'est pas garantie.",
        "enWatch": "Check private beach access and never assume landmark views from every room."
      },
      {
        "name": "Business Bay & Downtown",
        "enName": "Business Bay & Downtown",
        "fr": "Hôtels contemporains, skyline, musées, shopping et gastronomie urbaine.",
        "en": "Contemporary hotels, skyline architecture, shopping and urban dining.",
        "frWatch": "Une chambre « skyline » n'offre pas nécessairement la vue directe sur Burj Khalifa.",
        "enWatch": "A 'skyline' room does not automatically face Burj Khalifa."
      },
      {
        "name": "Dubai Marina & Jumeirah",
        "enName": "Dubai Marina & Jumeirah",
        "fr": "Promenades, restaurants, plages urbaines et atmosphère de vacances active.",
        "en": "Promenades, city beaches, dining and an active coastal holiday mood.",
        "frWatch": "Bien distinguer Marina, JBR et Jumeirah : ce ne sont pas les mêmes quartiers.",
        "enWatch": "Distinguish Marina, JBR and Jumeirah: they are separate areas."
      }
    ],
    "experiences": [
      {
        "frTitle": "La terrasse au-dessus de la ville",
        "enTitle": "A terrace above the city",
        "fr": "Une suite bien orientée, le panorama au coucher du soleil et une table choisie pour la vue.",
        "en": "A well-oriented suite, a sunset panorama and a dining table chosen for its outlook."
      },
      {
        "frTitle": "L'échappée balnéaire",
        "enTitle": "The beachfront escape",
        "fr": "Plage privée, piscine, spa et temps laissé libre plutôt qu'un programme trop chargé.",
        "en": "Private beach, pool, spa and unhurried time instead of a packed itinerary."
      },
      {
        "frTitle": "Dubaï en famille",
        "enTitle": "Dubai with the family",
        "fr": "Privilégier la configuration des suites, les activités adaptées et les trajets raisonnables.",
        "en": "Choose practical suite layouts, age-appropriate facilities and realistic transfer routes."
      }
    ],
    "hotels": [
      {
        "name": "The Lana · Dorchester Collection",
        "area": "Marasi Bay · Business Bay",
        "fr": "Une adresse urbaine raffinée pour ceux qui privilégient design, restauration et vue sur Downtown selon catégorie.",
        "en": "An elegant city address combining design, dining and Downtown outlooks by room category.",
        "frWatch": "Vérifier précisément la catégorie de vue, les balcons et le petit déjeuner.",
        "enWatch": "Confirm exact outlook, balcony and breakfast terms.",
        "officialUrl": "https://www.dorchestercollection.com/dubai/the-lana"
      },
      {
        "name": "One&Only One Za'abeel",
        "area": "Za'abeel · central Dubai",
        "fr": "Un hôtel urbain spectaculaire, davantage centré sur l'architecture et la vie de la ville que sur la plage.",
        "en": "An architectural urban stay focused on city experiences rather than beach life.",
        "frWatch": "Vérifier l'accès et la catégorie de chambre ; ne pas le présenter comme un resort de plage.",
        "enWatch": "Confirm access and room type; this is not a beachfront resort.",
        "officialUrl": "https://www.onezaabeel.com/one-and-only/"
      },
      {
        "name": "Atlantis The Royal",
        "area": "Palm Jumeirah",
        "fr": "Grand resort face à la mer, tourné vers les piscines, les restaurants et l'expérience Palm.",
        "en": "A statement beachfront resort centred on pools, dining and Palm Jumeirah living.",
        "frWatch": "Différencier vue, suite, prestations et éventuels accès inclus.",
        "enWatch": "Differentiate room view, suite benefits and actual inclusions.",
        "officialUrl": "https://www.atlantis.com/dubai/atlantis-the-royal"
      },
      {
        "name": "Jumeirah Al Naseem",
        "area": "Umm Suqeim · Jumeirah",
        "fr": "Hôtel contemporain sur le littoral de Jumeirah pour ceux qui recherchent plage, jardins et style de resort.",
        "en": "A contemporary Jumeirah coastal hotel for those seeking beach life and a refined resort rhythm.",
        "frWatch": "Comparer les orientations jardin, océan ou Burj Al Arab selon les catégories.",
        "enWatch": "Check garden, Gulf and Burj Al Arab view categories carefully.",
        "officialUrl": "https://www.jumeirah.com/en/stay/dubai/jumeirah-al-naseem"
      }
    ],
    "checksFr": [
      "Ne pas confondre Palm Jumeirah, Downtown, Business Bay, Marina et Jumeirah Beach.",
      "Confirmer l'accès plage ou piscine et les espaces véritablement réservés à votre catégorie.",
      "Vérifier taxes, frais, restauration, transferts et annulation avant de payer.",
      "Comparer la vue réelle depuis la chambre et les trajets aux heures de circulation."
    ],
    "checksEn": [
      "Do not confuse Palm Jumeirah, Downtown, Business Bay, Marina and Jumeirah Beach.",
      "Confirm beach/pool access and facilities actually included with your room.",
      "Check taxes, fees, dining, transfers and cancellation terms before paying.",
      "Verify real room views and allow for peak-hour traffic."
    ],
    "photos": {
      "west-beach-hero": {
        "src": "/images/travel/dubai-premium/destination/west-beach-hero.webp",
        "fr": "Palm West Beach, sa plage animée et la skyline de Dubaï dans la lumière dorée du soir",
        "en": "Palm West Beach, a lively luxury beachfront against Dubai's warm sunset skyline",
        "author": "Condé Nast Traveller Middle East",
        "license": "Droits commerciaux déclarés par le client · restrictions à confirmer avant production",
        "licenseUrl": "https://www.cntravellerme.com/story/dubai-sunset-spots-best-places-with-a-view",
        "sourcePage": "https://www.cntravellerme.com/story/dubai-sunset-spots-best-places-with-a-view"
      },
      "palm-aerial-bright": {
        "src": "/images/travel/dubai-premium/destination/palm-aerial-bright.webp",
        "fr": "Palm Jumeirah vue du ciel, ses îles en forme de palme et ses eaux bleues",
        "en": "Sunny aerial view of Palm Jumeirah's fronds and surrounding blue Gulf waters",
        "author": "Abid Ali · Pexels",
        "license": "Pexels License",
        "licenseUrl": "https://www.pexels.com/license/",
        "sourcePage": "https://www.pexels.com/photo/aerial-view-of-palm-jumeirah-10593605/"
      },
      "downtown-fountain-day": {
        "src": "/images/travel/dubai-premium/destination/downtown-fountain-day.webp",
        "fr": "Burj Khalifa et le bassin turquoise des fontaines de Downtown Dubaï, en plein jour",
        "en": "Burj Khalifa above Downtown Dubai's turquoise fountain lake in daylight",
        "author": "The Wandering Quinn",
        "license": "Droits commerciaux déclarés par le client · restrictions à confirmer avant production",
        "licenseUrl": "https://thewanderingquinn.com/5-day-dubai-itinerary/",
        "sourcePage": "https://thewanderingquinn.com/5-day-dubai-itinerary/"
      },
      "marina-yachts-bright": {
        "src": "/images/travel/dubai-premium/destination/marina-yachts-bright.webp",
        "fr": "Yachts de Dubai Marina et gratte-ciel lumineux se reflétant dans l'eau",
        "en": "Luxury yachts at Dubai Marina reflected in the bright waterfront skyline",
        "author": "Dubai Celebrations",
        "license": "Droits commerciaux déclarés par le client · restrictions à confirmer avant production",
        "licenseUrl": "https://www.dubaicelebrations.com/blogs/dubai-marina-hidden-gems",
        "sourcePage": "https://www.dubaicelebrations.com/blogs/dubai-marina-hidden-gems"
      },
      "marina": {
        "src": "/images/travel/city-guides/dubai/marina.webp",
        "fr": "Dubai Marina photographiée de jour",
        "en": "Dubai Marina photographed in daylight",
        "author": "Gfilip",
        "license": "CC BY-SA 4.0",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
        "sourcePage": "https://commons.wikimedia.org/wiki/File:Dubai_Marina_by_day.jpg"
      },
      "panorama": {
        "src": "/images/travel/city-guides/dubai/panorama.webp",
        "fr": "Panorama de Dubai Marina et de ses tours",
        "en": "A panoramic view across Dubai Marina",
        "author": "@ferd1graphy",
        "license": "CC BY-SA 3.0",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
        "sourcePage": "https://commons.wikimedia.org/wiki/File:DubaiMarinaPanorama.jpg"
      }
    }
  },
  "paris": {
  "slug": "paris",
  "name": "Paris",
  "country": "France",
  "hero": "paris-seine-hero",
  "secondary": "paris-eiffel-seine-wide",
  "eyebrowFr": "La Ville Lumière, autrement",
  "eyebrowEn": "An intimate City of Light",
  "headingFr": "Paris, la beauté d’un séjour à part.",
  "headingEn": "Paris: an exceptional way to stay.",
  "introFr": "La Seine au lever du jour, les salons d’un palace, l’art de flâner sur la rive gauche : Paris se découvre aussi par les adresses que l’on choisit. L'emplacement, la qualité d'une suite et le plaisir de sortir à pied façonnent l’expérience.",
  "introEn": "The Seine at daybreak, a palace hotel's salons and the joy of wandering the Left Bank: a Paris stay is defined by the address you choose. Location, the right suite and being able to walk out into the city matter.",
  "editorialFr": "Notre sélection privilégie la personnalité de quatre maisons différentes, non une compétition d’étoiles. Vue sur la Seine ou sur une cour intérieure, esprit contemporain ou charme historique, jardin caché ou Saint-Germain : ce sont les détails à choisir avant même la catégorie de chambre.",
  "editorialEn": "Our shortlist is about four distinct personalities, not a contest of stars. Seine view or private courtyard, contemporary craft or classic grandeur, a hidden garden or Saint-Germain: these decisions matter long before room-category marketing.",
  "hotelIntroFr": "Quatre palaces et maisons d’exception, chacun avec sa propre raison d’être : Cheval Blanc Paris au-dessus de la Seine, George V dans le Triangle d’Or, Le Bristol au Faubourg et Mandarin Oriental Lutetia sur la rive gauche. Aucun tarif ou inventaire n’est présenté comme disponible.",
  "hotelIntroEn": "Four exceptional Paris addresses with distinct identities: Cheval Blanc above the Seine, George V in the Golden Triangle, Le Bristol on the Faubourg and Mandarin Oriental Lutetia on the Left Bank. No rates or inventory are presented as available.",
  "areas": [
    {
      "name": "Le Louvre, la Seine & la Samaritaine",
      "enName": "Louvre, the Seine & Samaritaine",
      "fr": "Le cœur monumental de Paris, pour rejoindre à pied le Louvre, le Pont-Neuf, les quais et la rive gauche. Une adresse ici transforme la promenade en rituel quotidien.",
      "en": "Historic central Paris, ideal for walking to the Louvre, Pont-Neuf, the riverbanks and across to the Left Bank. Staying here turns the daily walk into an event.",
      "frWatch": "Une « vue Seine » dépend de l'étage, de l'orientation et de la catégorie exacte.",
      "enWatch": "A ‘Seine view’ depends on floor, orientation and the exact room type."
    },
    {
      "name": "Triangle d’Or & Faubourg Saint-Honoré",
      "enName": "Golden Triangle & Faubourg Saint-Honoré",
      "fr": "L’adresse du Paris des palaces, de la couture et de la gastronomie. Avenue George V et Faubourg Saint-Honoré offrent des ambiances différentes mais un service d’exception.",
      "en": "The Paris of landmark palace hotels, couture and destination dining. Avenue George V and Faubourg Saint-Honoré have distinct rhythms and walking distances.",
      "frWatch": "Vérifier le calme de la chambre : cour intérieure et grande avenue ne procurent pas la même expérience.",
      "enWatch": "Confirm room outlook and noise levels: an inner courtyard and a grand avenue feel very different."
    },
    {
      "name": "Saint-Germain-des-Prés & rive gauche",
      "enName": "Saint-Germain-des-Prés & the Left Bank",
      "fr": "Librairies, galeries, terrasses, adresses de quartier et une élégance plus résidentielle. Le Paris idéal pour ceux qui aiment prendre leur temps et sortir à pied.",
      "en": "Bookshops, art galleries, cafés and an elegant residential pace. The Paris for guests who want to linger and explore on foot.",
      "frWatch": "Les vues Tour Eiffel de certaines suites sont rares : ne pas les supposer incluses dans toutes les catégories.",
      "enWatch": "Some Eiffel Tower suite views are rare; never assume they come with every room category."
    }
  ],
  "experiences": [
    {
      "frTitle": "Paris par la Seine",
      "enTitle": "Paris from the Seine",
      "fr": "Un bateau privé à la bonne heure, le Louvre au détour des quais et la lumière qui change sur les ponts. Un privilège simple lorsque l’itinéraire est bien pensé.",
      "en": "A private boat at the right hour, the Louvre glimpsed from the quays and light moving across historic bridges. A simple luxury when timing is considered."
    },
    {
      "frTitle": "Un dîner qui devient un souvenir",
      "enTitle": "Dining worth remembering",
      "fr": "Choisir une grande table pour son atmosphère et son service, pas seulement pour sa réputation. Réservation et tenue éventuelle à confirmer en amont.",
      "en": "Choose a great dining room for atmosphere and service, not reputation alone. Reservations and any dress code need confirmation."
    },
    {
      "frTitle": "La rive gauche à son rythme",
      "enTitle": "The Left Bank at your pace",
      "fr": "Un café à Saint-Germain, une librairie, une galerie confidentielle et une promenade sans chronomètre jusqu’au jardin du Luxembourg.",
      "en": "Coffee in Saint-Germain, a bookshop, a quiet gallery and an unhurried walk towards the Luxembourg Gardens."
    }
  ],
  "hotels": [
    {
      "name": "Cheval Blanc Paris",
      "area": "La Seine · Samaritaine · 1er",
      "fr": "Une maison contemporaine et confidentielle au-dessus de la Seine, avec les vues emblématiques de Paris selon la suite, un esprit d’art et de grands espaces bien-être.",
      "en": "A discreet contemporary maison above the Seine, combining artful interiors, exceptional wellness and iconic city views in selected suites.",
      "frWatch": "Confirmer précisément la vue, l’étage, la configuration des espaces et la catégorie de suite ; les photos illustrent des catégories spécifiques.",
      "enWatch": "Verify view, floor, layout and the exact suite category; photographs depict particular room types.",
      "officialUrl": "https://www.chevalblanc.com/en/maison/paris/"
    },
    {
      "name": "Four Seasons Hotel George V, Paris",
      "area": "Avenue George V · 8e",
      "fr": "Le grand art du palace parisien : compositions florales spectaculaires, restauration de destination, cour intérieure et suites classiques dans le Triangle d’Or.",
      "en": "Classic Paris palace theatre: extraordinary flowers, destination dining, a marble courtyard and elegant suites in the Golden Triangle.",
      "frWatch": "Bien distinguer les chambres sur avenue, les vues sur cour et les suites avec panorama : la tour Eiffel n’est pas visible de toutes les chambres.",
      "enWatch": "Distinguish avenue, courtyard and skyline categories; not every room overlooks the Eiffel Tower.",
      "officialUrl": "https://www.fourseasons.com/paris/"
    },
    {
      "name": "Le Bristol Paris",
      "area": "Faubourg Saint-Honoré · 8e",
      "fr": "Une maison qui conjugue le classicisme parisien à la douceur d’un jardin intérieur et à une gastronomie ambitieuse, dans une adresse historique du Faubourg.",
      "en": "A Parisian institution marrying classic residential elegance, a secluded garden and destination dining on the Faubourg Saint-Honoré.",
      "frWatch": "Comparer les catégories rénovées, les orientations sur rue ou jardin et l’accès aux équipements : toutes les chambres n’ont pas la même perspective.",
      "enWatch": "Compare refurbished room types, street or garden outlooks and facility access; rooms do not all have the same view.",
      "officialUrl": "https://www.oetkerhotels.com/hotels/le-bristol-paris/"
    },
    {
      "name": "Mandarin Oriental Lutetia, Paris",
      "area": "Boulevard Raspail · Saint-Germain · 6e",
      "fr": "L’Art déco de la rive gauche, entre héritage culturel, design contemporain, spa et vues privilégiées sur les toits de Paris pour certaines suites.",
      "en": "A Left Bank Art Deco landmark blending cultural heritage, contemporary design, wellness and special rooftop outlooks in selected suites.",
      "frWatch": "Vérifier la catégorie de suite, le balcon et la vue éventuelle sur la tour Eiffel : ce ne sont pas des prestations universelles.",
      "enWatch": "Confirm the suite category, balcony and any Eiffel Tower view; these are not standard room features.",
      "officialUrl": "https://www.mandarinoriental.com/en/paris/lutetia"
    }
  ],
  "checksFr": [
    "Choisir son Paris avant son hôtel : rive gauche, Louvre ou Triangle d’Or impliquent des rythmes très différents.",
    "Vérifier la chambre réellement réservée : vue, étage, balcon, accès spa et possibilité de chambres communicantes.",
    "Anticiper restaurant, transfert et horaires d’arrivée ; les grandes tables ne garantissent pas de disponibilité.",
    "Comparer conditions d’annulation, taxes, petit déjeuner et éventuels avantages propres à la catégorie."
  ],
  "checksEn": [
    "Choose the Paris you want first: Left Bank, Louvre and Golden Triangle produce very different stays.",
    "Confirm the actual room category, view, floor, balcony, spa access and any connecting rooms.",
    "Plan restaurant reservations, transfers and arrival times; even celebrated hotel restaurants may be fully booked.",
    "Compare cancellation rules, taxes, breakfast and category-specific inclusions."
  ],
  "photos": {
    "paris-seine-hero": {
      "src": "/images/travel/paris-premium/destination/paris-seine-hero.webp",
      "fr": "Le Louvre et le pont des Arts photographiés depuis les quais de Seine à Paris",
      "en": "The Louvre and Pont des Arts on Paris's Seine riverbank",
      "author": "Jebulon",
      "license": "CC0 1.0",
      "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
      "sourcePage": "https://commons.wikimedia.org/wiki/File:Louvre_Pont_des_Arts.jpg"
    },
    "paris-eiffel-seine-wide": {
      "src": "/images/travel/paris-premium/destination/paris-eiffel-seine-wide.webp",
      "fr": "La tour Eiffel vue depuis la Seine, dans un cadrage panoramique lumineux",
      "en": "A wide bright panorama of the Eiffel Tower seen from the Seine",
      "author": "Udit Kapoor",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "sourcePage": "https://commons.wikimedia.org/wiki/File:Eiffel_Tower_from_Seine_river.jpg"
    },
    "paris-pont-alexandre": {
      "src": "/images/travel/paris-premium/destination/paris-pont-alexandre.webp",
      "fr": "Vue sur la tour Eiffel et le pont Alexandre III depuis la Seine",
      "en": "View of Eiffel Tower and Pont Alexandre III from the Seine",
      "author": "Philippe Alès",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "sourcePage": "https://commons.wikimedia.org/wiki/File:Eiffel_Tower_and_Pont_Alexandre_III_from_Seine.jpg"
    },
    "paris-pont-des-arts": {
      "src": "/images/travel/paris-premium/destination/paris-pont-des-arts.webp",
      "fr": "Le Louvre et le pont des Arts depuis un bateau sur la Seine",
      "en": "Louvre and Pont des Arts seen from a boat on the Seine",
      "author": "Tangopaso",
      "license": "Public domain",
      "licenseUrl": "https://creativecommons.org/publicdomain/mark/1.0/",
      "sourcePage": "https://commons.wikimedia.org/wiki/File:Louvre_%26_pont_des_Arts.jpg"
    },
    "paris-champs-elysees": {
      "src": "/images/travel/paris-premium/destination/paris-champs-elysees.webp",
      "fr": "Les Champs-Élysées au crépuscule depuis l’Arc de Triomphe",
      "en": "Champs-Élysées at dusk seen from the Arc de Triomphe",
      "author": "ASaber91",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "sourcePage": "https://commons.wikimedia.org/wiki/File:Champs_Elysees_from_the_Arch.jpg"
    },
    "paris-saint-germain": {
      "src": "/images/travel/paris-premium/destination/paris-saint-germain.webp",
      "fr": "Saint-Germain-des-Prés, l’église et les cafés voisins",
      "en": "Saint-Germain-des-Prés church and nearby classic Paris cafés",
      "author": "Serge Melki",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0/",
      "sourcePage": "https://commons.wikimedia.org/wiki/File:Saint-Germain_des_Pr%C3%A9s_(3363718209).jpg"
    }
  }
},
  "saint-tropez": {
  "slug": "saint-tropez",
  "name": "Saint-Tropez",
  "country": "France",
  "hero": "saint-tropez-harbour-hero",
  "secondary": "saint-tropez-yachts-bay",
  "eyebrowFr": "L’art de vivre sur la Côte d’Azur",
  "eyebrowEn": "The art of the French Riviera",
  "headingFr": "Saint-Tropez, la Riviera à votre rythme.",
  "headingEn": "Saint-Tropez: the Riviera at your own pace.",
  "introFr": "Un matin au Vieux-Port, la lumière sur les voiles, une table discrète à l’ombre des pins et le bleu de Pampelonne : Saint-Tropez conjugue l’énergie d’un village mythique avec le calme de la mer. L’adresse et la saison changent toute l’expérience.",
  "introEn": "Morning at the old harbour, sunlight on yacht sails, lunch beneath the pines and the blue waters of Pampelonne: Saint-Tropez blends legendary village life with the calm of the sea. Your address and the season define the stay.",
  "editorialFr": "Nous préférons quatre maisons aux caractères opposés : une retraite les pieds dans l’eau, une institution au village, un refuge sur les hauteurs de Ramatuelle et un domaine-château. Ce sont quatre façons de vivre Saint-Tropez, pas quatre hôtels interchangeables.",
  "editorialEn": "Our shortlist celebrates four distinct ways of living Saint-Tropez: an intimate seafront retreat, a village institution, a hillside sanctuary in Ramatuelle and a grand château estate. They are not interchangeable, and the real location matters.",
  "hotelIntroFr": "Quatre adresses choisies pour leur identité, leur situation et la qualité de l’expérience. Sélection éditoriale indépendante : aucun tarif, disponibilité ou partenariat fournisseur non confirmé.",
  "hotelIntroEn": "Four distinctive properties chosen for setting, personality and guest experience. Independent editorial shortlist: no live rates, unverified availability or supplier partnership is claimed.",
  "areas": [
    {
      "name": "Vieux-Port & Place des Lices",
      "enName": "Old Port & Place des Lices",
      "fr": "Les yachts, les terrasses, les façades provençales et le marché constituent le cœur vivant de Saint-Tropez. Pour ceux qui aiment sortir à pied et rentrer tard.",
      "en": "Yachts, harbour terraces, pastel houses and the market define the lively village heart. Ideal for guests who enjoy walking to dinner and returning on foot.",
      "frWatch": "La proximité du port apporte animation et circulation : vérifier le calme de la chambre et l’accès voiture.",
      "enWatch": "The harbour is lively and traffic is seasonal: confirm room quietness and car access."
    },
    {
      "name": "Pampelonne & Ramatuelle",
      "enName": "Pampelonne & Ramatuelle",
      "fr": "Longue plage de sable, clubs de plage et paysages de vignes et de pins, distincts du village. L’endroit idéal pour donner priorité à la mer.",
      "en": "A long sandy beach, beach clubs, vineyards and pine-covered landscape, separate from the village. Best when the shoreline is the priority.",
      "frWatch": "Pampelonne est à Ramatuelle, pas au Vieux-Port : prévoir un trajet et vérifier l’accès au club de plage choisi.",
      "enWatch": "Pampelonne is in Ramatuelle, not the village: plan transfers and check beach club access."
    },
    {
      "name": "La Bouillabaisse & collines tropéziennes",
      "enName": "Bouillabaisse Beach & the Saint-Tropez hills",
      "fr": "Les maisons face au golfe et les domaines dans les collines offrent la respiration provençale, avec davantage d’intimité qu’au port.",
      "en": "Bay-facing seaside maisons and hilltop estates offer a quieter Provençal rhythm, with more space and privacy than the harbour.",
      "frWatch": "Plage directe ou domaine avec navette : la relation à la mer diffère fortement selon l’hôtel et la catégorie.",
      "enWatch": "Direct beach access and a hilltop property with transfers are very different experiences."
    }
  ],
  "experiences": [
    {
      "frTitle": "Un matin sur le port",
      "enTitle": "An early morning by the harbour",
      "fr": "Marcher avant la foule, prendre un café face aux bateaux et découvrir la place des Lices au rythme du village.",
      "en": "Walk before the crowds, enjoy coffee overlooking the yachts and discover Place des Lices at the village's pace."
    },
    {
      "frTitle": "Une journée à Pampelonne",
      "enTitle": "A day on Pampelonne",
      "fr": "Sable doré, eaux claires et déjeuner les pieds dans le sable. Choisir son club pour le service et l’ambiance, pas pour une réputation seule.",
      "en": "Golden sand, clear water and lunch by the beach. Choose a beach club for service and atmosphere, not reputation alone."
    },
    {
      "frTitle": "La Riviera depuis la mer",
      "enTitle": "The Riviera from the sea",
      "fr": "Prendre le large en bateau privé, découvrir criques et plages, et revenir au port lorsque la lumière s’adoucit.",
      "en": "Head out on a private boat, discover bays and coves and return to harbour as the light turns golden."
    }
  ],
  "hotels": [
    {
      "name": "Cheval Blanc St-Tropez",
      "area": "Plage de la Bouillabaisse · Saint-Tropez",
      "fr": "Petite maison en bord de mer, pinède et bleu Riviera signature : l’intimité d’un palace directement sur le golfe de Saint-Tropez.",
      "en": "An intimate seafront maison, pine grove and signature Riviera blue: palace-level attention directly by the Gulf of Saint-Tropez.",
      "frWatch": "Vérifier l’orientation mer, pinède ou village et la catégorie de suite. L’accès à certaines expériences dépend de la saison.",
      "enWatch": "Confirm sea, pine grove or village outlook and the exact suite type. Seasonal experiences may vary.",
      "officialUrl": "https://www.chevalblanc.com/en/maison/st-tropez/"
    },
    {
      "name": "Hôtel Byblos Saint-Tropez",
      "area": "Village · Place des Lices",
      "fr": "Institution tropézienne au cœur du village, avec un esprit de maison méditerranéenne, terrasses et vie sociale.",
      "en": "A village institution with the feel of a Mediterranean house, terraces, distinctive design and a lively social atmosphere.",
      "frWatch": "Un hôtel de village, non un resort directement sur Pampelonne : confirmer l’accès plage et le calme souhaité.",
      "enWatch": "A village hotel rather than a resort directly on Pampelonne: confirm beach arrangements and the level of quiet you want.",
      "officialUrl": "https://www.byblos.com/"
    },
    {
      "name": "La Réserve Ramatuelle",
      "area": "Collines de Ramatuelle · vue Méditerranée",
      "fr": "Retraite architecturale dans les hauteurs, tournée vers la mer, la confidentialité, le spa et les vastes terrasses.",
      "en": "A secluded hilltop retreat oriented around Mediterranean views, privacy, wellness and expansive terraces.",
      "frWatch": "La Réserve se trouve à Ramatuelle, pas au port. Ne pas confondre l’hôtel, les villas et leurs prestations.",
      "enWatch": "La Réserve is in Ramatuelle, not at the harbour. Hotel and villa facilities and policies can differ.",
      "officialUrl": "https://www.lareserve-ramatuelle.com/"
    },
    {
      "name": "Airelles Château de la Messardière",
      "area": "Route de Tahiti · collines de Saint-Tropez",
      "fr": "Domaine-château dominant les jardins et les paysages tropéziens, entre piscines, expériences familiales et accès à Pampelonne selon conditions.",
      "en": "A château estate above Saint-Tropez with landscaped gardens, pools, family experiences and access to Pampelonne subject to the property's terms.",
      "frWatch": "Vérifier catégorie, accès aux piscines et plages, conditions de transferts et équipements famille avant de réserver.",
      "enWatch": "Confirm room category, pool and beach access, transfers and family amenities before booking.",
      "officialUrl": "https://airelles.com/en/destination/chateau-de-la-messardiere-hotel"
    }
  ],
  "checksFr": [
    "Choisir entre village, Bouillabaisse, collines de Saint-Tropez et Ramatuelle : les distances changent les journées.",
    "Vérifier les périodes d’ouverture, notamment hors saison, et les conditions réelles de la plage.",
    "Comparer la catégorie exacte de chambre, vue et terrasse ; les photos de villas ne représentent pas les chambres standards.",
    "Anticiper les transferts et la circulation estivale ; ne pas supposer qu’un trajet court en kilomètres sera rapide."
  ],
  "checksEn": [
    "Choose village life, Bouillabaisse beachfront, the Saint-Tropez hills or Ramatuelle: distance changes the daily rhythm.",
    "Check seasonal opening dates and the real terms of beach access.",
    "Verify the exact room type, view and terrace; villa imagery does not describe standard rooms.",
    "Allow for summer traffic and transfers; short driving distances do not guarantee quick journeys."
  ],
  "photos": {
    "saint-tropez-harbour-hero": {
      "src": "/images/travel/saint-tropez-premium/destination/saint-tropez-harbour-hero.webp",
      "fr": "Saint-Tropez et son Vieux-Port vus du ciel, dans la lumière de la Méditerranée",
      "en": "Saint-Tropez old town and harbour viewed from above in Mediterranean light",
      "author": "dronepicr",
      "license": "CC BY 2.0 · resized and WebP optimized",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0/",
      "sourcePage": "https://commons.wikimedia.org/wiki/File:Aerial_view_of_the_old_town_and_the_old_port_of_Saint-Tropez,_France_(52724205855).jpg"
    },
    "saint-tropez-yachts-bay": {
      "src": "/images/travel/saint-tropez-premium/destination/saint-tropez-yachts-bay.webp",
      "fr": "Yachts dans la baie bleue de Saint-Tropez",
      "en": "Yachts in Saint-Tropez's deep blue Mediterranean bay",
      "author": "dronepicr",
      "license": "CC BY 2.0 · resized and WebP optimized",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0/",
      "sourcePage": "https://commons.wikimedia.org/wiki/File:Aerial_view_of_yachts_near_Saint-Tropez,_France_(52723269222).jpg"
    },
    "saint-tropez-old-port": {
      "src": "/images/travel/saint-tropez-premium/destination/saint-tropez-old-port.webp",
      "fr": "Façades du Vieux-Port de pêche de Saint-Tropez",
      "en": "Pastel houses and traditional boats at Saint-Tropez's old fishing harbour",
      "author": "dronepicr",
      "license": "CC BY 2.0 · resized and WebP optimized",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0/",
      "sourcePage": "https://commons.wikimedia.org/wiki/File:Vieux_port_de_pêche_The_old_port_of_Saint-Tropez,_France_(52723272042).jpg"
    },
    "saint-tropez-pampelonne": {
      "src": "/images/travel/saint-tropez-premium/destination/saint-tropez-pampelonne.webp",
      "fr": "Plage de Pampelonne et eau turquoise à Ramatuelle",
      "en": "Pampelonne sandy beach and turquoise water in Ramatuelle",
      "author": "dronepicr",
      "license": "CC BY 2.0 · resized and WebP optimized",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0/",
      "sourcePage": "https://commons.wikimedia.org/wiki/File:Aerial_view_of_Pampelonne_Beach,_Saint-Tropez,_France_(52723263302).jpg"
    },
    "saint-tropez-coast-vineyards": {
      "src": "/images/travel/saint-tropez-premium/destination/saint-tropez-coast-vineyards.webp",
      "fr": "Vignobles autour de Pampelonne, sur les collines de Ramatuelle",
      "en": "Vineyards surrounding Pampelonne in the Ramatuelle hills",
      "author": "dronepicr",
      "license": "CC BY 2.0 · resized and WebP optimized",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0/",
      "sourcePage": "https://commons.wikimedia.org/wiki/File:Aerial_view_of_vineyards_in_Pampelonne,_Saint-Tropez,_France_(52724264298).jpg"
    },
    "saint-tropez-pampelonne-bay": {
      "src": "/images/travel/saint-tropez-premium/destination/saint-tropez-pampelonne-bay.webp",
      "fr": "Baie de Pampelonne et plage vue du ciel",
      "en": "Pampelonne bay, beach and blue water seen from above",
      "author": "dronepicr",
      "license": "CC BY 2.0 · resized and WebP optimized",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0/",
      "sourcePage": "https://commons.wikimedia.org/wiki/File:Aerial_view_of_the_Bay_of_Pampelonne,_Saint-Tropez,_France_(52724196595).jpg"
    }
  }
},
  "bali": {
  "slug": "bali",
  "name": "Bali",
  "country": "Indonésie",
  "hero": "uluwatu-coast",
  "secondary": "ubud-rice-terraces",
  "eyebrowFr": "L’île des contrastes",
  "eyebrowEn": "The island of contrasts",
  "headingFr": "Bali, entre jungle et océan.",
  "headingEn": "Bali: from rainforest to ocean.",
  "introFr": "Bali n’a pas un seul visage : la vallée d’Ubud enveloppée de jungle, les falaises d’Uluwatu dominant l’océan Indien, les soirées paisibles de Jimbaran et les plages animées de Seminyak dessinent quatre voyages différents. Le luxe commence par le bon emplacement.",
  "introEn": "Bali has many faces: Ubud’s forested river valleys, Uluwatu’s cliffs above the Indian Ocean, Jimbaran’s gentle sunsets and Seminyak’s lively beachfront offer four very different journeys. Exceptional stays begin with choosing the right place.",
  "editorialFr": "Nous retenons quatre maisons qui ne se ressemblent pas : un sanctuaire suspendu sur la vallée de Sayan, un resort très privé sur les falaises du Bukit, une collection de villas tournées vers la baie de Jimbaran et une adresse élégante face aux vagues de Seminyak. Pas un catalogue infini de villas interchangeables.",
  "editorialEn": "Our four addresses each offer a distinct Bali: a rainforest sanctuary above the Ayung River, an exclusive resort on Bukit’s cliffs, a secluded collection of Jimbaran villas and a graceful Seminyak beachfront retreat. This is an edited shortlist, not an endless inventory of look-alike villas.",
  "hotelIntroFr": "Quatre adresses de caractère, choisies pour la relation entre paysage, service et confort : Four Seasons Sayan, Bvlgari Bali, Raffles Bali et The Legian Seminyak. Sélection éditoriale indépendante, sans inventaire, tarif ni disponibilité non confirmés.",
  "hotelIntroEn": "Four distinctive stays chosen for their setting, service and atmosphere: Four Seasons Sayan, Bvlgari Bali, Raffles Bali and The Legian Seminyak. Independent editorial recommendations, with no implied live inventory, rates or availability.",
  "areas": [
    {
      "name": "Ubud & vallée de Sayan",
      "enName": "Ubud & the Sayan Valley",
      "fr": "Rizières, forêts, rivière Ayung, arts traditionnels et temples. Une expérience introspective, loin de la plage, au rythme des matinées dans la nature.",
      "en": "Rice terraces, lush forest, the Ayung River, traditional arts and temples. A more introspective journey, away from the beach and shaped by the morning light.",
      "frWatch": "Ubud n’est pas en bord de mer : prévoir les transferts et les déplacements entre rizières et centres culturels.",
      "enWatch": "Ubud is inland, not beachfront; plan transport between rice terraces, resorts and cultural sights."
    },
    {
      "name": "Uluwatu & péninsule de Bukit",
      "enName": "Uluwatu & the Bukit Peninsula",
      "fr": "Falaises calcaires, horizon ouvert sur l’océan Indien et villas avec piscines privées. C’est un Bali spectaculaire, avec parfois de longues routes jusqu’aux criques.",
      "en": "Limestone cliffs, an uninterrupted Indian Ocean horizon and private-pool villas. Spectacular scenery, with some coves reached by lengthy walks or drives.",
      "frWatch": "Un hôtel sur une falaise n’a pas nécessairement un accès direct, facile ou quotidien à la plage.",
      "enWatch": "A cliffside hotel does not automatically offer direct, easy or unrestricted beach access."
    },
    {
      "name": "Jimbaran & baie du sud",
      "enName": "Jimbaran & the southern bay",
      "fr": "Couchers de soleil, longues plages, restaurants les pieds dans le sable et villas à l’abri des regards. Un équilibre entre calme et proximité du sud de l’île.",
      "en": "Golden sunsets, sweeping beach scenes, casual beachfront dining and quietly secluded villas. A balance between relaxed coastal life and access to southern Bali.",
      "frWatch": "Toutes les villas dominant la baie ne sont pas sur le sable ; vérifier les transferts vers la plage et la vue réelle.",
      "enWatch": "Bay-facing hillside villas are not necessarily on the beach; confirm beach transfers and the exact view."
    },
    {
      "name": "Seminyak & plages de l’ouest",
      "enName": "Seminyak & the west-coast beaches",
      "fr": "Boutiques, restaurants, clubs de plage et hôtels face à l’océan. Pour mêler les journées au bord de l’eau et la vie sociale sans renoncer au confort.",
      "en": "Boutiques, restaurants, beach clubs and hotels along the ocean. Ideal for combining shoreline time with dining and social life.",
      "frWatch": "Le front de mer peut être animé et les courants puissants ; choisir un hôtel et une plage en connaissance de cause.",
      "enWatch": "The shore can be lively and the currents strong; compare room quietness and safe swimming conditions."
    }
  ],
  "experiences": [
    {
      "frTitle": "Le jour se lève sur les rizières",
      "enTitle": "Sunrise over the terraces",
      "fr": "Quitter sa villa tôt pour les rizières de Tegallalang, découvrir le paysage avant la foule et consacrer le reste de la journée à la vallée d’Ubud.",
      "en": "Set out early for Tegallalang’s rice terraces before the crowds, then allow the rest of the day for the Ubud valley."
    },
    {
      "frTitle": "L’océan depuis une falaise",
      "enTitle": "A cliff above the ocean",
      "fr": "Contempler la côte d’Uluwatu, parcourir les petits temples et terminer la journée face aux dernières lumières sur l’océan.",
      "en": "Follow Uluwatu’s dramatic coastline, explore temple heritage respectfully and linger over the last light above the ocean."
    },
    {
      "frTitle": "Le dîner pieds dans le sable",
      "enTitle": "Dinner with your feet in the sand",
      "fr": "S’arrêter à Jimbaran à l’heure dorée, choisir une table près de l’eau et laisser le soir ralentir la journée.",
      "en": "Arrive in Jimbaran at golden hour, find a beachfront table and let the evening slow down naturally."
    },
    {
      "frTitle": "Une soirée élégante à Seminyak",
      "enTitle": "An elegant Seminyak evening",
      "fr": "Profiter des boutiques et des bonnes tables avant de retrouver une terrasse privée et le bruit de l’océan.",
      "en": "Enjoy boutiques and thoughtful dining before retreating to a private terrace and the sound of the sea."
    }
  ],
  "hotels": [
    {
      "name": "Four Seasons Resort Bali at Sayan",
      "area": "Sayan · Ubud · vallée de la rivière Ayung",
      "fr": "Un sanctuaire architectural en pleine jungle, célèbre pour son pont d’arrivée et son bassin aux lotus suspendu au-dessus de la vallée.",
      "en": "An architectural rainforest sanctuary above the Ayung River, celebrated for its dramatic bridge arrival and rooftop lotus pond.",
      "frWatch": "Vérifier catégorie villa ou suite, présence d’une piscine privée et accès à la rivière : toutes les unités ne sont pas identiques.",
      "enWatch": "Confirm villa versus suite category, private pool and river access: layouts and inclusions differ.",
      "officialUrl": "https://www.fourseasons.com/sayan/"
    },
    {
      "name": "Bvlgari Resort Bali",
      "area": "Pecatu · falaises d’Uluwatu",
      "fr": "Élégance italo-balinaise au bord des falaises du Bukit, villas intimes, jardins et vues panoramiques sur l’océan Indien.",
      "en": "Italian-Balinese design above the Bukit cliffs, with private villas, lush gardens and far-reaching Indian Ocean panoramas.",
      "frWatch": "Confirmer la villa précise et son type de vue ; ne pas confondre accès plage et présence au niveau de la plage.",
      "enWatch": "Verify the exact villa and view category, and distinguish clifftop beach access from a directly beachfront property.",
      "officialUrl": "https://www.bulgarihotels.com/bali/the-resort/overview"
    },
    {
      "name": "Raffles Bali",
      "area": "Jimbaran · colline face à la baie",
      "fr": "Un refuge composé de villas privées, chacune avec piscine, jardin et atmosphère feutrée au-dessus de la baie de Jimbaran.",
      "en": "An intimate all-villa retreat, each villa featuring its own pool and garden amid the hillside overlooking Jimbaran Bay.",
      "frWatch": "Comparer les différentes orientations océaniques, la taille des villas et l’organisation des transferts vers la plage.",
      "enWatch": "Compare actual ocean outlooks, villa size and arrangements for reaching the beachfront.",
      "officialUrl": "https://www.raffles.com/bali/"
    },
    {
      "name": "The Legian Seminyak, Bali",
      "area": "Seminyak · front de mer",
      "fr": "Une adresse contemporaine face à l’océan, avec piscine à débordement, grandes perspectives marines et accès aux restaurants de Seminyak.",
      "en": "An elegant beachfront retreat with striking infinity pools, open ocean views and easy access to Seminyak’s dining scene.",
      "frWatch": "Vérifier l’orientation de la suite, l’intimité de la terrasse et la distinction entre hôtel principal et Club villas.",
      "enWatch": "Confirm the exact suite outlook, terrace privacy and differences between the hotel and the separately located Club villas.",
      "officialUrl": "https://lhm-hotels.com/legian-seminyak/"
    }
  ],
  "checksFr": [
    "Choisir d’abord entre Ubud, Uluwatu, Jimbaran et Seminyak : le temps de trajet peut être important.",
    "Confirmer la villa ou suite exacte, les vues garanties, piscine privée et conditions du service personnalisé.",
    "Vérifier l’accès réel à la plage, la baignade, les courants et les transferts, surtout dans les resorts sur falaises.",
    "Tenir compte de la saison des pluies, des conditions de la mer, des politiques d’annulation et des prestations incluses."
  ],
  "checksEn": [
    "Choose between Ubud, Uluwatu, Jimbaran and Seminyak before deciding on the hotel; transfers can be substantial.",
    "Verify the exact villa or suite, guaranteed room view, private pool and personalised-service terms.",
    "Confirm true beach access, swimming conditions and transport, especially from clifftop resorts.",
    "Consider rainy-season conditions, sea state, cancellation policies and included services."
  ],
  "photos": {
    "uluwatu-coast": {
      "src": "/images/travel/bali-premium/destination/bali-uluwatu-ocean-hero.webp",
      "fr": "Falaises d’Uluwatu et eaux bleues de l’océan Indien, au sud de Bali",
      "en": "Uluwatu limestone cliffs above the blue Indian Ocean",
      "author": "Tiya20",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "sourcePage": "https://commons.wikimedia.org/wiki/File:Uluwatu_Cliffs,_Bali.jpg"
    },
    "ubud-rice-terraces": {
      "src": "/images/travel/bali-premium/destination/bali-ubud-tegallalang.webp",
      "fr": "Rizières en terrasse de Tegallalang près d’Ubud",
      "en": "Tegallalang rice terraces in Bali’s lush Ubud countryside",
      "author": "Philip Nalangan",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0/",
      "sourcePage": "https://commons.wikimedia.org/wiki/File:Tegallalang_Rice_Terraces_Bali.jpg"
    },
    "jimbaran-sunset": {
      "src": "/images/travel/bali-premium/destination/bali-jimbaran-sunset.webp",
      "fr": "Plage de Jimbaran et terrasses au coucher du soleil",
      "en": "Jimbaran beach and waterfront dining at sunset",
      "author": "Akmaie Ajam",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "sourcePage": "https://commons.wikimedia.org/wiki/File:Jimbaran_beach_at_sunset.jpg"
    },
    "seminyak-beach": {
      "src": "/images/travel/bali-premium/destination/bali-seminyak-sunset.webp",
      "fr": "Plage de Seminyak à la lumière du couchant",
      "en": "Seminyak beach in Bali under warm sunset light",
      "author": "Christophe95",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "sourcePage": "https://commons.wikimedia.org/wiki/File:Seminyak_Beach_at_sunset.jpg"
    },
    "padang-padang": {
      "src": "/images/travel/bali-premium/destination/bali-padang-padang.webp",
      "fr": "La crique de Padang Padang sur la côte sud de Bali",
      "en": "Padang Padang sandy cove on Bali’s south coast",
      "author": "TMFalkner",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "sourcePage": "https://commons.wikimedia.org/wiki/File:Padang_Padang_Beach.jpg"
    },
    "ubud-tegallalang-secondary": {
      "src": "/images/travel/bali-premium/destination/bali-tegallalang-secondary.webp",
      "fr": "Rizières en escalier vertes de Tegallalang près d’Ubud",
      "en": "Green terraced rice fields at Tegallalang near Ubud",
      "author": "Freddy eduardo",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "sourcePage": "https://commons.wikimedia.org/wiki/File:Tegalalang_Rice_Terraces.jpg"
    }
  }
},
  "phuket": {
  "slug": "phuket",
  "name": "Phuket",
  "country": "Thaïlande",
  "hero": "kata-noi-seaside",
  "secondary": "nai-harn-sunset",
  "eyebrowFr": "La mer d’Andaman, plus intimement",
  "eyebrowEn": "A quieter side of the Andaman",
  "headingFr": "Phuket, des criques et des refuges.",
  "headingEn": "Phuket: hidden bays and exceptional stays.",
  "introFr": "Des plages entourées de collines, des maisons en bois précieux et des villas qui contemplent la mer d’Andaman : Phuket ne se résume pas à ses stations balnéaires les plus animées. Le luxe commence par le choix d’une baie, d’un promontoire ou d’un jardin privé.",
  "introEn": "Forest-framed beaches, teak pavilions and private villas overlooking the Andaman Sea: Phuket offers far more than lively resort strips. A truly luxurious stay begins with choosing the right beach, headland or secluded garden.",
  "editorialFr": "Quatre adresses, quatre atmosphères sans les confondre : Amanpuri et la plage de Pansea, Trisara et ses villas très privées, Rosewood Phuket dans l’écrin d’Emerald Bay, et Keemala, retraite insolite sur les hauteurs de Kamala. Notre sélection ne promet ni tarif ni disponibilité non vérifiés.",
  "editorialEn": "Four distinct retreats, without treating them as interchangeable: Amanpuri on Pansea Beach, Trisara and its secluded private villas, Rosewood Phuket beside Emerald Bay and the imaginative hillside sanctuary of Keemala above Kamala. This editorial shortlist makes no unsupported price or availability claims.",
  "hotelIntroFr": "Une sélection resserrée de quatre établissements qui incarnent des façons différentes d’habiter Phuket : pieds dans le sable, villa sur promontoire, baie tropicale ou forêt au-dessus de Kamala. Les vues, catégories et accès plage doivent être confirmés au moment de réserver.",
  "hotelIntroEn": "Four carefully selected places to experience Phuket differently: beachfront tranquility, headland villas, a secluded bay or a forest retreat above Kamala. Confirm exact accommodation type, outlook and beach arrangements when booking.",
  "areas": [
    {
      "name": "Pansea & Surin",
      "enName": "Pansea & Surin",
      "fr": "La côte nord-ouest se fait plus discrète entre la crique de Pansea et Surin. Amanpuri occupe Pansea, tandis que Surin offre une plage voisine au caractère différent.",
      "en": "Phuket’s northwest coast feels more private around Pansea and neighbouring Surin. Amanpuri occupies Pansea Beach; nearby Surin offers a different and more public beach experience.",
      "frWatch": "Pansea et Surin sont deux plages distinctes. Ne pas présenter l’accès privé d’un hôtel comme un accès libre à toute la baie.",
      "enWatch": "Pansea and Surin are distinct beaches; resort beach privileges do not imply unrestricted public access."
    },
    {
      "name": "Layan & Bang Tao",
      "enName": "Layan & Bang Tao",
      "fr": "Les longues plages du nord-ouest alternent avec des promontoires boisés et des villas très confidentielles. Trisara est situé sur une côte retirée au nord de Bang Tao.",
      "en": "Long northwest beaches give way to forested headlands and unusually secluded villas. Trisara sits on a quiet stretch of coastline north of Bang Tao.",
      "frWatch": "Trisara est sur un promontoire, et non directement au milieu des installations de Bang Tao. Les transferts comptent.",
      "enWatch": "Trisara is on a private headland, not on the busy central Bang Tao beachfront. Plan transfers accordingly."
    },
    {
      "name": "Emerald Bay & côte de Patong",
      "enName": "Emerald Bay & the Patong coast",
      "fr": "Au sud-ouest de Patong, des anses plus tranquilles gardent le bleu de l’Andaman à proximité des activités de la côte ouest. Rosewood Phuket bénéficie de cette séparation.",
      "en": "Southwest of lively Patong, quieter bays offer Andaman colours while remaining within reach of the west coast. Rosewood Phuket sits in one of these more secluded pockets.",
      "frWatch": "La photo montre Patong, pas la plage privative de Rosewood. Les baies ne sont pas interchangeables.",
      "enWatch": "The district photograph shows Patong, not Rosewood’s own beach. Do not confuse the two bays."
    },
    {
      "name": "Kamala & collines tropicales",
      "enName": "Kamala & forested hills",
      "fr": "Kamala associe une baie balnéaire à des hauteurs couvertes de végétation, où Keemala développe son univers architectural de villas parmi les arbres.",
      "en": "Kamala combines a coastal bay with tree-covered hills, where Keemala’s extraordinary villa architecture is immersed in the forest.",
      "frWatch": "Keemala est sur les collines : ce n’est pas un hôtel situé sur la plage de Kamala.",
      "enWatch": "Keemala is a hillside resort, not a hotel located directly on Kamala’s beachfront."
    }
  ],
  "experiences": [
    {
      "frTitle": "La côte nord-ouest à l’aube",
      "enTitle": "The northwest coast at sunrise",
      "fr": "Marcher au bord de l’eau avant les heures les plus chaudes et retrouver son pavillon pour une matinée lente.",
      "en": "Walk by the water before the heat builds, then return to a shaded pavilion for a slow morning."
    },
    {
      "frTitle": "La vieille ville au rythme des façades",
      "enTitle": "Old Phuket Town by its facades",
      "fr": "Explorer l’architecture sino-portugaise et les petites boutiques de Phuket Old Town : une autre lecture de l’île, loin des plages.",
      "en": "Discover the Sino-Portuguese architecture and independent shops of Phuket Old Town, another side of the island away from the beaches."
    },
    {
      "frTitle": "Dernières lumières au cap Promthep",
      "enTitle": "Last light at Promthep Cape",
      "fr": "Admirer la côte sud depuis ses points de vue. Se renseigner sur l’affluence et la météo avant de partir.",
      "en": "Enjoy the south coast from its viewpoints, while allowing for weather and crowds."
    },
    {
      "frTitle": "La mer d’Andaman en bateau",
      "enTitle": "The Andaman by boat",
      "fr": "Privilégier une sortie privée dont le trajet respecte la météo, les conditions de mer et les espaces naturels protégés.",
      "en": "Opt for a private sea outing with a route adapted to weather, sea conditions and protected natural areas."
    }
  ],
  "hotels": [
    {
      "name": "Amanpuri",
      "area": "Pansea Beach · côte nord-ouest",
      "fr": "Adresse iconique de pavillons thaïs en teck, jardins tropicaux et accès privilégié à Pansea Beach.",
      "en": "An iconic retreat of Thai teak pavilions, lush gardens and a privileged setting on Pansea Beach.",
      "frWatch": "Pavillon, Pool Pavilion et villa privée ne proposent pas les mêmes espaces ni piscines. Vérifier l’orientation et la catégorie.",
      "enWatch": "Pavilions, Pool Pavilions and private villas have different layouts and pools. Confirm the exact category and outlook.",
      "officialUrl": "https://www.aman.com/resorts/amanpuri"
    },
    {
      "name": "Trisara",
      "area": "Côte de Layan · promontoire nord-ouest",
      "fr": "Un domaine de villas très privées avec piscines et vues vers la mer, pensé pour le calme et l’intimité.",
      "en": "A secluded estate of private-pool villas overlooking the Andaman Sea, designed for quiet and privacy.",
      "frWatch": "Vérifier Ocean View, Oceanfront et configuration réelle de la villa ; les vues et accès au rivage varient.",
      "enWatch": "Distinguish Ocean View and Oceanfront villa categories: outlook, layout and shore access differ.",
      "officialUrl": "https://trisara.com/"
    },
    {
      "name": "Rosewood Phuket",
      "area": "Emerald Bay · au sud de Patong",
      "fr": "Une retraite contemporaine avec pavillons et villas dans la végétation, à deux pas d’une baie abritée.",
      "en": "A contemporary retreat of pavilions and villas integrated into lush gardens beside Emerald Bay.",
      "frWatch": "Comparer pavillon et villa Beachfront ; piscine privée, terrasse et vue directe mer dépendent de la catégorie.",
      "enWatch": "Compare pavilion and Beachfront Villa categories; private-pool size, terrace and direct sea view vary.",
      "officialUrl": "https://www.rosewoodhotels.com/en/phuket"
    },
    {
      "name": "Keemala",
      "area": "Collines de Kamala · forêt tropicale",
      "fr": "Un univers architectural insolite de villas avec piscine, au milieu des arbres plutôt que sur la plage.",
      "en": "An extraordinary architectural retreat of private-pool villas among the trees, rather than on the beach.",
      "frWatch": "Bird’s Nest, Tree Pool House et autres catégories diffèrent ; certaines vues donnent sur la forêt ou le resort, pas la mer.",
      "enWatch": "Bird’s Nest, Tree Pool House and other villas differ; some views face forest or resort, not the sea.",
      "officialUrl": "https://www.keemala.com/"
    }
  ],
  "checksFr": [
    "Choisir le séjour : Pansea en bord de plage, promontoire de Trisara, baie de Rosewood ou colline de Kamala.",
    "Vérifier la villa exacte : vue, taille de piscine, terrasse et accès réel au rivage ne sont jamais universels.",
    "Prévoir transferts et circulation entre aéroport, stations du nord-ouest et vieux Phuket.",
    "Tenir compte de la mousson, des vagues et courants, notamment pour les sorties en mer et baignades.",
    "Comparer horaires saisonniers, taxes, annulations et prestations comprises dans la catégorie réservée."
  ],
  "checksEn": [
    "Choose the setting first: Pansea beachfront, Trisara’s headland, Rosewood’s bay or Kamala hillside.",
    "Check the exact villa: outlook, pool, terrace and direct beach access are not universal.",
    "Plan transfers and traffic between the airport, northwest resorts and Phuket Old Town.",
    "Consider monsoon season, surf and currents, especially for swimming and boat outings.",
    "Compare seasonal opening times, taxes, cancellation rules and room-category inclusions."
  ],
  "photos": {
    "kata-noi-seaside": {
      "src": "/images/travel/phuket-premium/destination/phuket-kata-noi-beach-hero.webp",
      "fr": "La plage de Kata Noi sous une lumière tropicale, Phuket",
      "en": "Kata Noi beach under tropical sunlight in Phuket",
      "author": "Phuket@photographer.net",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0/",
      "sourcePage": "https://commons.wikimedia.org/wiki/File:Kata_Noi_beach,_Katathani_resort_(40414030520).jpg"
    },
    "surin-beach": {
      "src": "/images/travel/phuket-premium/destination/phuket-surin-beach.webp",
      "fr": "Surin Beach, sur la côte nord-ouest de Phuket",
      "en": "Surin Beach on Phuket’s northwest coast",
      "author": "Jpatokal",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "sourcePage": "https://commons.wikimedia.org/wiki/File:Surin_Beach.JPG"
    },
    "kamala-bay": {
      "src": "/images/travel/phuket-premium/destination/phuket-kamala-beach.webp",
      "fr": "Vue panoramique de Kamala Beach et de sa baie",
      "en": "Panoramic view of Kamala Beach and bay",
      "author": "govertvissers",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "sourcePage": "https://commons.wikimedia.org/wiki/File:Kamala_beach.jpg"
    },
    "nai-harn-sunset": {
      "src": "/images/travel/phuket-premium/destination/phuket-nai-harn-sunset.webp",
      "fr": "Le coucher du soleil sur Nai Harn Beach, Phuket",
      "en": "Sunset over Phuket’s Nai Harn Beach",
      "author": "Phuket@photographer.net",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0/",
      "sourcePage": "https://commons.wikimedia.org/wiki/File:Sunset_at_Nai_Harn_beach,_Phuket,_Thailand_05.jpg"
    },
    "old-town": {
      "src": "/images/travel/phuket-premium/destination/phuket-old-town.webp",
      "fr": "Phuket Old Town et ses façades historiques",
      "en": "Historic streets and architecture of Phuket Old Town",
      "author": "Ryomaandres",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "sourcePage": "https://commons.wikimedia.org/wiki/File:Phuket_Old_Town_1.jpg"
    },
    "promthep-cape": {
      "src": "/images/travel/phuket-premium/destination/phuket-promthep-cape.webp",
      "fr": "Le cap Promthep et l’océan d’Andaman",
      "en": "Promthep Cape overlooking the Andaman Sea",
      "author": "Christophe95",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "sourcePage": "https://commons.wikimedia.org/wiki/File:Promthep_Cape_Phuket.jpg"
    },
    "kata-beach": {
      "src": "/images/travel/phuket-premium/destination/phuket-kata-alt.webp",
      "fr": "Kata Beach et sa plage tropicale à Phuket",
      "en": "Tropical beachfront on Kata Beach, Phuket",
      "author": "ADwarf",
      "license": "Public domain",
      "licenseUrl": "https://creativecommons.org/publicdomain/mark/1.0/",
      "sourcePage": "https://commons.wikimedia.org/wiki/File:Phuket_-_Kata_Beach_001.jpg"
    },
    "bang-tao": {
      "src": "/images/travel/phuket-premium/destination/phuket-bang-tao-beach.webp",
      "fr": "Bang Tao Beach et sa côte au nord-ouest de Phuket",
      "en": "Bang Tao Beach on Phuket’s northwest shoreline",
      "author": "Raita Futo",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0/",
      "sourcePage": "https://commons.wikimedia.org/wiki/File:Bang_Tao_Beach_(53668069638).jpg"
    },
    "patong-coast": {
      "src": "/images/travel/phuket-premium/destination/phuket-patong-beach.webp",
      "fr": "Patong Beach et la côte ouest de Phuket",
      "en": "Patong Beach and Phuket’s west coast",
      "author": "Ewong17",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "sourcePage": "https://commons.wikimedia.org/wiki/File:Patong_Beach_in_Phuket.jpg"
    }
  }
},
'koh-samui': kohSamuiGuide,
'maldives': maldivesGuide,
'los-cabos': losCabosGuide,
'saint-barthelemy': saintBarthelemyGuide,
'porto-cervo': portoCervoGuide,
'mustique': mustiqueGuide,
'courchevel-1850': courchevel1850Guide,
'st-moritz': stMoritzGuide,
aspen: aspenGuide,
niseko: nisekoGuide,
'megeve': megeveGuide,
'jackson-hole': jacksonHoleGuide,
'big-sky': bigSkyGuide,
'val-disere': valDisereGuide,
'verbier': verbierGuide,
'gstaad': gstaadGuide,
'zermatt': zermattGuide,
'monaco': monacoGuide,
'saint-jean-cap-ferrat': saintJeanCapFerratGuide,
'cap-dantibes': capDAntibesGuide,
'lake-como': lakeComoGuide,
'capri': capriGuide,
'positano': positanoGuide,
'ravello': ravelloGuide,
'mykonos': mykonosGuide,
'antiparos': antiparosGuide,
'ibiza': ibizaGuide,
'formentera': formenteraGuide,
'deia': deiaGuide,
'port-andratx': portAndratxGuide,
'comporta': comportaGuide,
'melides': melidesGuide,
'tivat': tivatGuide,
 'the-hamptons': theHamptonsGuide,
'palm-beach': palmBeachGuide,
'nantucket': nantucketGuide,
'harbour-island': harbourIslandGuide,
 'turks-and-caicos': turksAndCaicosGuide,
 'canouan': canouanGuide,
 'necker-island': neckerIslandGuide,
 'north-island-seychelles': northIslandSeychellesGuide,
 'pamalican-island': pamalicanIslandGuide,
 'laucala-island': laucalaIslandGuide,
 'jumby-bay': jumbyBayGuide,
 'okavango-delta': okavangoDeltaGuide,
 'punta-mita': puntaMitaGuide,
 'costa-careyes': costaCareyesGuide
};
export function featuredCityGuide(slug:string | undefined):FeaturedCityGuideData | undefined {
 if (!slug || !(slug in featuredCityGuides)) return undefined;
 return featuredCityGuides[slug as FeaturedCitySlug];
}
