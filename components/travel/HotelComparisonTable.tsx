import type { TravelLocale } from '@/lib/travel/i18n';

const labels={
 de:{"title":"Unterkünfte auf einen Blick vergleichen","hotel":"Hotel oder Unterkunft","area":"Viertel oder Lage","best":"Warum dieses Hotel?"},
 es:{"title":"Compara alojamientos de un vistazo","hotel":"Hotel o alojamiento","area":"Barrio o zona","best":"Por qué elegirlo"},
 it:{"title":"Confronta gli alloggi a colpo d'occhio","hotel":"Hotel o alloggio","area":"Quartiere o zona","best":"Perché sceglierlo"},
 pt:{"title":"Compare as hospedagens de forma rápida","hotel":"Hotel ou hospedagem","area":"Bairro ou região","best":"Por que escolher"},
 zh:{"title":"快速对比住宿选择","hotel":"酒店或住宿","area":"街区或区域","best":"推荐理由"},
 tr:{title:'Konaklama seçeneklerini karşılaştırın',hotel:'Otel veya konaklama',area:'Semt veya bölge',best:'Neden tercih edilmeli?'},
 fr:{title:'Comparer les hébergements en un coup d’œil',hotel:'Hôtel ou hébergement',area:'Quartier ou secteur',best:'Pourquoi le choisir'},
 en:{title:'Compare places to stay at a glance',hotel:'Hotel or accommodation',area:'Neighborhood or area',best:'Why choose it'},
 ru:{title:'Сравнение вариантов размещения',hotel:'Отель или резиденция',area:'Район',best:'Почему стоит выбрать'},
 ar:{title:'قارن خيارات الإقامة بنظرة واحدة',hotel:'الفندق أو مكان الإقامة',area:'المنطقة',best:'ما يميّزه'},
} as const;
type Props={locale:Extract<TravelLocale,keyof typeof labels>;rows:{name:string;area:string;best?:string}[]};
export function HotelComparisonTable({locale,rows}:Props){
 if(!rows.length)return null;
 const t=labels[locale],showBest=rows.every(row=>Boolean(row.best?.trim()));
 return <div className="mt-7 overflow-x-auto rounded-xl border border-[#e1e5e5] bg-white" lang={locale} dir={locale==='ar'?'rtl':'ltr'}>
   <table className="w-full min-w-[340px] border-collapse text-start text-sm text-[#465968]">
     <caption className="px-4 py-4 text-start text-base font-semibold text-[#193344]">{t.title}</caption>
     <thead className="bg-[#f5f5f3] text-[#193344]"><tr><th scope="col" className="px-4 py-3 text-start">{t.hotel}</th><th scope="col" className="px-4 py-3 text-start">{t.area}</th>{showBest&&<th scope="col" className="px-4 py-3 text-start">{t.best}</th>}</tr></thead>
     <tbody>{rows.map(row=><tr key={row.name} className="border-t border-[#e1e5e5]"><th scope="row" className="px-4 py-3 text-start font-medium text-[#193344]"><bdi>{row.name}</bdi></th><td className="px-4 py-3">{row.area}</td>{showBest&&<td className="px-4 py-3">{row.best}</td>}</tr>)}</tbody>
   </table>
 </div>;
}
