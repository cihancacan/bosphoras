import type { TravelLocale } from './i18n';

const directory: Record<TravelLocale,{title:string;description:string}> = {
 fr:{title:'Guides de voyage : où dormir et quels hôtels choisir ?',description:'Explorez 88 destinations avec nos guides : quartiers, hôtels sélectionnés et conseils pour préparer votre séjour. Comparez les prix avec Bosphoras.'},
 en:{title:'Travel Guides: Best Areas & Hotels by Destination',description:'Explore 88 destinations with guides to neighborhoods, selected hotels and travel tips. Find the right place to stay and compare prices with Bosphoras.'},
 ru:{title:'Путеводители: лучшие районы и отели по направлениям',description:'Откройте 88 направлений: районы, подборки отелей и советы для поездки. Найдите подходящий вариант и сравните цены с Bosphoras.'},
 ar:{title:'أدلة السفر: أفضل المناطق والفنادق حسب الوجهة',description:'استكشف 88 وجهة مع أدلة المناطق والفنادق المختارة ونصائح السفر. اختر مكان إقامتك وقارن الأسعار مع Bosphoras.'},
 de:{title:'Reiseführer: die besten Gegenden und Hotels',description:'Entdecken Sie Reiseziele, Stadtviertel und ausgewählte Hotels. Vergleichen Sie Preise mit Bosphoras.'},
 tr:{title:'Seyahat rehberleri: konaklama bölgeleri ve oteller',description:'Seyahat rotalarını, konaklama bölgelerini ve seçkin otelleri keşfedin. Bosphoras ile fiyatları karşılaştırın.'},
 es:{title:'Guías de viaje: mejores zonas y hoteles',description:'Descubre destinos, zonas para alojarte y hoteles seleccionados. Compara precios con Bosphoras.'},
 it:{title:'Guide di viaggio: le migliori zone e gli hotel',description:'Scopri destinazioni, zone in cui soggiornare e hotel selezionati. Confronta i prezzi con Bosphoras.'},
 pt:{title:'Guias de viagem: melhores regiões e hotéis',description:'Descubra destinos, regiões para se hospedar e hotéis selecionados. Compare preços com a Bosphoras.'},
 zh:{title:'旅行指南：最佳住宿区域与精选酒店',description:'探索旅行目的地、住宿区域与精选酒店，通过 Bosphoras 比较价格。'},
};
export function directorySearchMetadata(locale:TravelLocale){return directory[locale];}

const genericDestination:Record<TravelLocale,(name:string)=>string>={
 fr:n=>n+' : où dormir ? Quartiers et hôtels',
 en:n=>'Where to Stay in '+n+': Best Areas & Hotels',
 ru:n=>n+': где остановиться — районы и отели',
 ar:n=>n+': أين تقيم؟ أفضل المناطق والفنادق',
 de:n=>n+': die besten Gegenden und Hotels',
 tr:n=>n+': nerede kalınır? Bölgeler ve oteller',
 es:n=>n+': dónde alojarse, zonas y hoteles',
 it:n=>n+': dove dormire, zone e hotel',
 pt:n=>n+': onde ficar, regiões e hotéis',
 zh:n=>n+'住宿指南：最佳区域与酒店',
};
const englishArticle:Readonly<Record<string,string>>={'maldives':'the Maldives','the-hamptons':'the Hamptons','turks-and-caicos':'Turks and Caicos'};
export function destinationSearchTitle(locale:TravelLocale,slug:string,name:string,existing:string){
 // Preserve distinctive existing editorial titles rather than replace them with generic copy.
 const generic=existing.endsWith(' — Luxury stays')||existing.endsWith(': luxury stays, neighbourhoods and experiences')||existing.endsWith(' : où séjourner, hôtels et expériences de luxe');
 if(!generic)return existing;
 return genericDestination[locale](locale==='en'?(englishArticle[slug]||name):name);
}
export function hotelSearchTitle(locale:TravelLocale,slug:string,name:string,existing:string){
 if(locale==='en'&&existing.endsWith(': curated guide and locations'))return 'Best Luxury Hotels in '+(englishArticle[slug]||name)+': Where to Stay';
 return existing;
}

// Destination-specific search snippets based on the reviewed, visible guides.
const priorityDestinationDescriptions:Record<string,Record<'fr'|'en',string>>={
  "istanbul": {
    "en": "Compare Karaköy, Sultanahmet, Beşiktaş and the Bosphorus waterfront, with nine luxury hotels and practical booking tips for Istanbul.",
    "fr": "Comparez Karaköy, Sultanahmet, Beşiktaş et les rives du Bosphore : neuf hôtels de luxe et des conseils pour choisir votre séjour à Istanbul."
  },
  "paris": {
    "en": "Compare the Louvre, Golden Triangle and Saint-Germain-des-Prés. Discover four exceptional Paris hotels and choose the right area for your stay.",
    "fr": "Louvre, Triangle d’or ou Saint-Germain-des-Prés ? Comparez trois quartiers et quatre hôtels d’exception pour choisir où dormir à Paris."
  },
  "dubai": {
    "en": "Palm Jumeirah, Downtown Dubai or Dubai Marina? Compare beach and city stays, four luxury hotels and practical tips for your trip.",
    "fr": "Palm Jumeirah, Downtown ou Dubai Marina ? Comparez les séjours en bord de mer et en ville, quatre hôtels de luxe et nos conseils."
  },
  "new-york": {
    "en": "Compare Midtown, NoMad, Tribeca, the Upper East Side and Brooklyn. Explore four luxury New York hotels and find the right neighborhood.",
    "fr": "Midtown, NoMad, Tribeca, Upper East Side ou Brooklyn : comparez cinq secteurs et quatre hôtels de luxe pour votre séjour à New York."
  },
  "miami": {
    "en": "South Beach, Mid-Beach, Surfside or Brickell? Compare five Miami areas and four luxury hotels, including The Setai and Faena.",
    "fr": "South Beach, Mid-Beach, Surfside ou Brickell ? Comparez cinq secteurs de Miami et quatre hôtels de luxe, dont The Setai et Faena."
  },
  "los-angeles": {
    "en": "Compare Bel-Air, Beverly Hills, West Hollywood and Santa Monica. Find the right area for your Los Angeles trip and explore four luxury hotels.",
    "fr": "Bel-Air, Beverly Hills, West Hollywood ou Santa Monica ? Comparez les quartiers de Los Angeles et quatre hôtels de luxe."
  },
  "bali": {
    "en": "Ubud, Uluwatu, Jimbaran or Seminyak? Compare Bali's forest, cliffside and beach stays with four luxury resorts and booking tips.",
    "fr": "Ubud, Uluwatu, Jimbaran ou Seminyak ? Comparez les séjours dans la nature, sur les falaises et en bord de mer, avec quatre hôtels de luxe."
  },
  "maldives": {
    "en": "Compare four Maldives luxury resorts, private islands, overwater and beach villas, atolls and transfer options before booking.",
    "fr": "Comparez quatre resorts de luxe aux Maldives, leurs atolls, villas sur pilotis ou sur la plage et modalités de transfert avant de réserver."
  },
  "tokyo": {
    "en": "Otemachi, Ginza, Shinjuku or Akasaka? Compare five Tokyo areas and four luxury hotels, including Aman Tokyo and Bvlgari.",
    "fr": "Otemachi, Ginza, Shinjuku ou Akasaka ? Comparez cinq secteurs de Tokyo et quatre hôtels de luxe, dont Aman Tokyo et Bvlgari."
  },
  "phuket": {
    "en": "Compare Surin, Bang Tao, Layan, Kamala and the Patong coast. Discover four Phuket luxury resorts and choose your ideal beach stay.",
    "fr": "Surin, Bang Tao, Layan, Kamala ou la côte de Patong ? Comparez les secteurs de Phuket et quatre resorts de luxe pour votre séjour."
  },
  "bodrum": {
    "en": "Compare Yalıkavak, Paradise Bay and Kaplankaya. Explore four Bodrum luxury resorts and choose the bay that suits your trip.",
    "fr": "Yalıkavak, Paradise Bay ou Kaplankaya ? Comparez les baies de Bodrum et quatre resorts de luxe pour choisir votre séjour."
  },
  "antalya": {
    "en": "Belek, Kemer or Antalya's old town? Compare golf, family resorts and coastal stays, with four selected luxury hotels.",
    "fr": "Belek, Kemer ou la vieille ville d’Antalya ? Comparez golf, resorts familiaux et séjours en bord de mer, avec quatre hôtels sélectionnés."
  }
};
export function destinationSearchDescription(locale:TravelLocale,slug:string,fallback:string){
 return locale==='fr'||locale==='en' ? priorityDestinationDescriptions[slug]?.[locale]||fallback : fallback;
}

// Commercial hotel-guide snippets, grounded in the actual curated selection.
const priorityHotelDescriptions:Record<string,Record<'fr'|'en',string>>={
  "istanbul": {
    "en": "Compare The Peninsula, Çırağan Palace, Four Seasons and six more luxury Istanbul hotels. Check room views, neighborhoods and booking conditions.",
    "fr": "Comparez The Peninsula, Çırağan Palace, Four Seasons et six autres hôtels de luxe à Istanbul : vues, quartiers et conditions de réservation."
  },
  "paris": {
    "en": "Compare Cheval Blanc, George V, Le Bristol and Mandarin Oriental Lutetia. Explore locations and room choices, then check hotel prices for your dates.",
    "fr": "Comparez Cheval Blanc, George V, Le Bristol et Mandarin Oriental Lutetia : emplacement, chambres et prix des hôtels à vos dates."
  },
  "dubai": {
    "en": "Compare The Lana, One&Only One Za'abeel, Atlantis The Royal and Jumeirah Al Naseem. Choose between city and beach hotels in Dubai.",
    "fr": "Comparez The Lana, One&Only One Za'abeel, Atlantis The Royal et Jumeirah Al Naseem : hôtels urbains et séjours balnéaires à Dubaï."
  },
  "new-york": {
    "en": "Compare Aman New York, The Fifth Avenue Hotel, The Greenwich and The Lowell. Explore neighborhoods, room choices and booking tips.",
    "fr": "Comparez Aman New York, The Fifth Avenue Hotel, The Greenwich et The Lowell : quartiers, chambres et conseils avant de réserver."
  },
  "miami": {
    "en": "Compare The Setai, Faena, Miami Beach EDITION and Four Seasons Surf Club. Find the right Miami Beach luxury hotel for your dates.",
    "fr": "Comparez The Setai, Faena, Miami Beach EDITION et Four Seasons Surf Club pour choisir votre hôtel de luxe à Miami Beach."
  },
  "los-angeles": {
    "en": "Compare Hotel Bel-Air, The Beverly Hills Hotel, Sunset Tower and Shutters on the Beach. Find a luxury hotel from Beverly Hills to Santa Monica.",
    "fr": "Comparez Hotel Bel-Air, The Beverly Hills Hotel, Sunset Tower et Shutters on the Beach, de Beverly Hills à Santa Monica."
  },
  "bali": {
    "en": "Compare Four Seasons Sayan, Bvlgari Resort, Raffles Bali and The Legian Seminyak. Find a luxury resort for your ideal Bali stay.",
    "fr": "Comparez Four Seasons Sayan, Bvlgari Resort, Raffles Bali et The Legian Seminyak : quatre expériences de séjour de luxe à Bali."
  },
  "maldives": {
    "en": "Compare Soneva Jani, Cheval Blanc Randheli, One&Only Reethi Rah and Four Seasons Landaa Giraavaru: villas, atolls and transfers.",
    "fr": "Comparez Soneva Jani, Cheval Blanc Randheli, One&Only Reethi Rah et Four Seasons Landaa Giraavaru : villas, atolls et transferts."
  },
  "tokyo": {
    "en": "Compare Aman Tokyo, Bvlgari, Park Hyatt and 1 Hotel Tokyo. Explore hotel locations, room views and airport logistics before booking.",
    "fr": "Comparez Aman Tokyo, Bvlgari, Park Hyatt et 1 Hotel Tokyo : quartiers, vues des chambres et accès depuis les aéroports."
  },
  "phuket": {
    "en": "Compare Amanpuri, Trisara, Rosewood Phuket and Keemala. Explore beaches, villa settings and practical booking tips for your luxury stay.",
    "fr": "Comparez Amanpuri, Trisara, Rosewood Phuket et Keemala : plages, villas et conseils pour choisir votre séjour de luxe à Phuket."
  },
  "bodrum": {
    "en": "Compare Mandarin Oriental, The Bodrum EDITION, Maxx Royal and Six Senses Kaplankaya. Choose the right resort and bay for your stay.",
    "fr": "Comparez Mandarin Oriental, The Bodrum EDITION, Maxx Royal et Six Senses Kaplankaya : choisissez votre resort et votre baie."
  },
  "antalya": {
    "en": "Compare Regnum Carya, Cullinan Belek, Rixos Premium Belek and Maxx Royal Kemer. Choose a luxury resort for beach, family or golf trips.",
    "fr": "Comparez Regnum Carya, Cullinan Belek, Rixos Premium Belek et Maxx Royal Kemer : resorts de luxe pour plage, famille ou golf."
  }
};
export function hotelSearchDescription(locale:TravelLocale,slug:string,fallback:string){
 return locale==='fr'||locale==='en'?priorityHotelDescriptions[slug]?.[locale]||fallback:fallback;
}
