import Link from 'next/link';
import Image from 'next/image';
import type { Locale } from '@/lib/i18n';
import { getLocalePath } from '@/lib/routes';
import { getSlugForPage } from '@/data/pages/types';
import { mobilityDetails, type MobilityKind } from '@/data/businessMobilityDetails';

const relocationPaths: Record<Locale,string> = {fr:'/relocation-corporate-turquie',en:'/en/corporate-relocation-turkey',ru:'/ru/korporativnyy-relokeyshn-v-turtsiyu',ar:'/ar/الانتقال-المؤسسي-إلى-تركيا'};
const official = {
  business:['https://www.invest.gov.tr/en/InvestmentGuide/Pages/establishing-a-business.aspx','https://icticaret.ticaret.gov.tr/haberler/anonim-ve-limited-sirketlerde-asgari-sermaye-tutarlari-artirilmistir','https://taxsummaries.pwc.com/turkey/corporate/taxes-on-corporate-income','https://www.invest.gov.tr/en/investmentguide/pages/tax-guide.aspx'],
  relocation:['https://www.csgb.gov.tr/uigm/en/calisma-izni/calisma-izni-degerlendirme-kriterleri/','https://www.csgb.gov.tr/en/frequently-asked-questions/directorate-general-of-international-labour-force/work-permit/','https://en.goc.gov.tr/work-permit','https://csgb.gov.tr/uigm/en/general-information/harc-ve-degerli-k%C3%A2git-bedelinin-odenmesi/']
};
export function BusinessMobilityDetails({locale,kind}:{locale:Locale;kind:MobilityKind}) {
 const c=mobilityDetails[locale][kind];
 const linked = kind==='business'?relocationPaths[locale]:getLocalePath(locale,getSlugForPage('business-setup',locale) || '/');
 const labels=kind==='business'?['Invest in Türkiye','T.C. Ticaret Bakanlığı','PwC — corporate tax, September 2026','Invest in Türkiye — tax guide']:['T.C. Çalışma ve Sosyal Güvenlik Bakanlığı — criteria','T.C. Çalışma ve Sosyal Güvenlik Bakanlığı — FAQ','Göç İdaresi Başkanlığı','T.C. Çalışma ve Sosyal Güvenlik Bakanlığı — 2026 fees'];
 return <section id="business-mobility-details" className="space-y-10 scroll-mt-32 text-[#121826]">
   <div>
     <div className="relative mb-8 overflow-hidden aspect-[16/9] bg-[#ece8df]">
       <Image src={kind==='business'?'/images/hero-istanbul.jpg':'/images/bosphoras-hero.jpg'} alt={c.photoAlt} fill sizes="(max-width: 1024px) 100vw, 65vw" className="object-cover" />
     </div>
     <h2 className="font-serif text-3xl leading-tight md:text-4xl">{c.title}</h2>
     <p className="mt-5 text-base leading-8 md:text-lg">{c.intro}</p>
   </div>
   <div className="overflow-x-auto border border-[#d8c7a1] bg-white">
     <table className="w-full min-w-[520px] border-collapse text-start text-sm leading-6">
       <thead className="bg-[#121826] text-white"><tr>{c.headers.map(h=><th key={h} scope="col" className="p-4 text-start font-semibold">{h}</th>)}</tr></thead>
       <tbody>{c.rows.map((row,i)=><tr key={i} className="border-b border-[#e6e0d6]">{row.map((cell,j)=>j===0?<th key={j} scope="row" className="p-4 text-start align-top font-semibold">{cell}</th>:<td key={j} className="p-4 align-top">{cell}</td>)}</tr>)}</tbody>
     </table>
   </div>
   <figure className="border border-[#d8c7a1] bg-white p-6 md:p-8">
     <figcaption className="font-serif text-2xl">{c.chart}</figcaption>
     {kind==='business'?<div className="mt-6 space-y-5" aria-hidden="true">{[['Ltd. Şti.',50000],['A.Ş.',250000]].map(([name,value])=><div key={name}><div className="mb-2 flex justify-between gap-3 text-sm"><span>{name}</span><strong>{Number(value).toLocaleString(locale)} TRY</strong></div><div className="h-4 bg-[#e9e3d8]"><div className="h-4 bg-[#263246]" style={{width:(Number(value)/250000*100)+'%'}} /></div></div>)}</div>:<div className="mt-6 flex items-center gap-4" aria-hidden="true"><span className="font-serif text-5xl text-[#121826]">30</span><span className="text-sm">{locale==='fr'?'jours':locale==='en'?'days':locale==='ru'?'дней':'يوماً'}</span></div>}
     <p className="mt-5 text-sm leading-7">{c.note}</p>
   </figure>
   <div>
     <h2 className="font-serif text-3xl">{c.flowTitle}</h2>
     <ol className="mt-6 grid gap-px bg-[#d8c7a1] border border-[#d8c7a1] sm:grid-cols-2">
       {c.steps.map((step,i)=><li key={step} className="flex gap-4 items-center bg-white p-5"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#b19b70] text-sm">{i+1}</span><span>{step}</span></li>)}
     </ol>
   </div>
   <div className="space-y-7">{c.answers.map(([q,a])=><article key={q} className="border-b border-[#e0d9cc] pb-6"><h3 className="font-serif text-2xl leading-snug">{q}</h3><p className="mt-3 text-base leading-8">{a}</p></article>)}</div>
   <div className="border-t border-[#d8c7a1] pt-5 text-sm leading-7"><h3 className="font-semibold">{c.sources}</h3><p>{{fr:"Repères réglementaires et tarifs vérifiés le 18 novembre 2026.",en:"Regulatory benchmarks and fees checked on 18 November 2026.",ru:"Нормативные данные и сборы проверены 18 ноября 2026 года.",ar:"تم التحقق من المؤشرات التنظيمية والرسوم في 18 نوفمبر 2026."}[locale]}</p>{official[kind].map((href,i)=><a className="block underline underline-offset-4" key={href} href={href} target="_blank" rel="noreferrer">{labels[i]}</a>)}</div>
   <Link href={linked} className="block border border-[#d8c7a1] bg-white p-6 font-serif text-xl underline underline-offset-4">{c.related}</Link>
 </section>
}
