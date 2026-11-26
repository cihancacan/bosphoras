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
