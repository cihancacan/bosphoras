import type { TravelLocale } from '@/lib/travel/i18n';

const copy={
 de:{"title":"Welches Viertel passt zu Ihrer Reise?","area":"Viertel / Lage","tip":"Worauf es bei der Wahl ankommt"},
 es:{"title":"¿En qué zona conviene alojarse?","area":"Barrio o zona","tip":"Qué saber antes de elegir"},
 it:{"title":"Quale quartiere scegliere?","area":"Quartiere o zona","tip":"Cosa sapere prima di scegliere"},
 pt:{"title":"Em qual bairro vale a pena ficar?","area":"Bairro ou região","tip":"O que saber antes de escolher"},
 zh:{"title":"选择哪个住宿区域？","area":"街区或区域","tip":"选择前需要了解的事项"},
 tr:{title:'Hangi semtte kalınır?',area:'Semt / bölge',tip:'Seçim yaparken bilmeniz gerekenler'},
 fr:{title:'Quel quartier ou secteur choisir ?',area:'Quartier / secteur',tip:'À savoir avant de choisir'},
 en:{title:'Which neighborhood or area should you choose?',area:'Neighborhood / area',tip:'What to know before choosing'},
 ru:{title:'Какой район выбрать?',area:'Район / местность',tip:'Что учесть при выборе'},
 ar:{title:'أي منطقة تختار للإقامة؟',area:'الحي أو المنطقة',tip:'ما ينبغي معرفته قبل الاختيار'},
} as const;
type Locale=Extract<TravelLocale,keyof typeof copy>;
export function AreaComparisonTable({locale,rows}:{locale:Locale;rows:{name:string;tip:string}[]}){
 const t=copy[locale];
 if(rows.length<2||rows.some(row=>!row.name||!row.tip))return null;
 return <div className="mt-6 overflow-x-auto rounded-xl border border-[#e1e5e5] bg-white" lang={locale} dir={locale==='ar'?'rtl':'ltr'}>
  <table className="w-full min-w-[280px] border-collapse text-sm leading-6 text-[#465968]">
   <caption className="px-4 py-4 text-start text-base font-semibold text-[#193344]">{t.title}</caption>
   <thead className="bg-[#f5f5f3] text-[#193344]"><tr><th scope="col" className="px-4 py-3 text-start">{t.area}</th><th scope="col" className="px-4 py-3 text-start">{t.tip}</th></tr></thead>
   <tbody>{rows.map(row=><tr key={row.name} className="border-t border-[#e1e5e5]"><th scope="row" className="px-4 py-3 text-start align-top font-medium text-[#193344]">{row.name}</th><td className="px-4 py-3 align-top">{row.tip}</td></tr>)}</tbody>
  </table>
 </div>;
}
