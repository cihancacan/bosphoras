import { taxRelocationPaths, taxRelocationLabels } from '@/data/taxRelocationPaths';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';
import { organizationSchema,serviceSchema,faqSchema,breadcrumbSchema } from '@/lib/seo';
import { getLocalePath,siteUrl } from '@/lib/routes';
import { getSlugForPage } from '@/data/pages/types';
import type { MainPageContent } from '@/data/pages/types';
import { withAssessmentContext } from '@/lib/assessmentContext';
import { companyFormationEditorial } from '@/data/companyFormationEditorial';
import { mobilityDetails } from '@/data/businessMobilityDetails';

const ifc='https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/IFM_G%C3%B6rsel.jpg/1280px-IFM_G%C3%B6rsel.jpg';
const levent='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Istanbul_IMG_7257_1725.jpg/1280px-Istanbul_IMG_7257_1725.jpg';
const sources=[
 ['Invest in Türkiye — Law 7582','https://www.invest.gov.tr/en/news/news-from-turkey/pages/powerhouse-for-investments-reform-package-enters-into-force-following-publication-in-the-official-gazette.aspx'],
 ['Istanbul Financial Center','https://ifm.gov.tr/i/tax-incentives'],
 ['CPA Turkey — Law 7582','https://www.stb-cpaturkey.com/en/amendments-to-tax-legislation-introduced-by-law-no-7582/'],
 ['Invest in Türkiye — investment zones','https://www.invest.gov.tr/en/investmentguide/pages/investment-zones.aspx'],
 ['Ministry of Trade — free zones','https://www.trade.gov.tr/free-zones/advantages-of-the-turkish-free-zones'],
 ['TOBB — 23.10.2026','https://tobb.org.tr/Sayfalar/Detay.php?lst=Haberler&rid=15916'],
 ['TOBB — 18.09.2026','https://www.tobb.org.tr/Sayfalar/Detay.php?lst=Haberler&rid=15843'],
 ['TOBB — 21.08.2026','https://www.tobb.org.tr/Sayfalar/Detay.php?lst=Haberler&rid=15786'],
 ['BNP Paribas — TEB','https://cashmanagement.bnpparibas.com/atlas-countries/turkey'],
 ['Invest in Türkiye — establishment','https://www.invest.gov.tr/en/InvestmentGuide/Pages/establishing-a-business.aspx'],
 ['Ministry of Labour — work permits','https://www.csgb.gov.tr/uigm/en/calisma-izni/calisma-izni-degerlendirme-kriterleri/']
];
function Table({headers,rows}:{headers:string[],rows:string[][]}){return <div className="overflow-x-auto border-y border-[#d9e0e2]"><table className="w-full min-w-[540px] text-sm md:text-base text-start"><thead className="bg-[#193344] text-white"><tr>{headers.map(h=><th key={h} scope="col" className="p-4 text-start font-medium">{h}</th>)}</tr></thead><tbody>{rows.map((r,i)=><tr key={i} className="border-b border-[#d9e0e2]">{r.map((x,j)=>j===0?<th scope="row" key={j} className="p-4 text-start align-top font-medium">{x}</th>:<td key={j} className="p-4 align-top">{x}</td>)}</tr>)}</tbody></table></div>}
export function CompanyFormationPage({page}:{page:MainPageContent}){
const locale=page.locale,c=companyFormationEditorial[locale],d=mobilityDetails[locale].business;
const path=getLocalePath(locale,page.slug),url=siteUrl+path;
const contact=withAssessmentContext(getLocalePath(locale,getSlugForPage('private-assessment',locale)||'/'),path,c.title,'business-setup');
const fmt=(n:number)=>n.toLocaleString(locale);
const questions=Array.from(new Map([...d.answers,...(page.faqs||[]).map(f=>[f.question,f.answer])].map(a=>[a[0],a])).values());
const relocation={fr:'/relocation-corporate-turquie',en:'/en/corporate-relocation-turkey',ru:'/ru/korporativnyy-relokeyshn-v-turtsiyu',ar:'/ar/الانتقال-المؤسسي-إلى-تركيا'}[locale];
const btn=<Link href={contact} className="inline-flex bg-[#193344] text-white px-7 py-4 font-medium hover:bg-[#25485e]">{c.cta}</Link>;
return <main lang={locale} dir={locale==='ar'?'rtl':'ltr'} className="bg-[#faf9f6] text-[#193344] min-h-screen">
<Header locale={locale} currentPath={path}/><StructuredData data={organizationSchema()}/><StructuredData data={serviceSchema({name:page.h1,description:page.metaDescription,url})}/><StructuredData data={faqSchema(questions.map(([question,answer])=>({question,answer})))}/><StructuredData data={breadcrumbSchema([{name:'Bosphoras',url:siteUrl},{name:page.h1,url}])}/>
<section className="pt-32 md:pt-40 pb-12"><div className="container-editorial grid items-center gap-10 lg:grid-cols-2"><div><h1 className="font-serif text-4xl md:text-6xl leading-tight">{c.title}</h1><p className="mt-6 text-lg leading-8">{c.description}</p><div className="mt-7">{btn}</div></div><figure><img src={ifc} alt={c.photoLabels[0]} width={1280} height={959} fetchPriority="high" className="w-full aspect-[4/3] object-cover"/><figcaption className="text-xs mt-2">{c.photoLabels[0]} · <a href="https://commons.wikimedia.org/wiki/File:IFM_G%C3%B6rsel.jpg" className="underline">Acode37, CC0</a></figcaption></figure></div></section>
<div className="border-y border-[#d9e0e2]"><div className="container-editorial grid grid-cols-2 md:grid-cols-4 gap-5 py-6">{c.trust.map(x=><p key={x} className="font-medium text-sm">{x}</p>)}</div></div>
<nav className="container-editorial flex flex-wrap gap-x-6 gap-y-3 py-7 text-sm" aria-label={c.nav[0]}>{['services','tax','zones','bank','details'].map((id,i)=><a key={id} href={'#'+id} className="underline underline-offset-4">{c.nav[i]}</a>)}</nav>
<div className="container-editorial space-y-20 pb-20">
<section id="services" className="scroll-mt-32"><h2 className="font-serif text-3xl md:text-4xl">{c.serviceTitle}</h2><div className="grid md:grid-cols-2 gap-x-12 gap-y-7 mt-8">{c.services.map(([h,p])=><article key={h} className="border-t border-[#b9c5ca] pt-5"><h3 className="font-serif text-2xl">{h}</h3><p className="mt-3 leading-8">{p}</p></article>)}</div></section>
<section id="tax" className="scroll-mt-32 space-y-7"><h2 className="font-serif text-3xl md:text-4xl">{c.reformTitle}</h2><p className="max-w-4xl leading-8 text-lg">{c.reformIntro}</p><article className="bg-[#193344] text-white p-7 md:p-10"><h3 className="font-serif text-3xl md:text-4xl">{c.residentTitle}</h3><p className="mt-5 leading-8 max-w-5xl">{c.resident}</p></article><h3 className="font-serif text-3xl pt-4">{c.taxTitle}</h3><Table headers={c.taxHeads} rows={c.taxRows}/><figure className="max-w-4xl bg-white p-6 md:p-9 border border-[#d9e0e2]"><figcaption className="font-serif text-2xl">{c.chartTitle}</figcaption><div className="space-y-5 mt-6">{[25000,12500,1250,0].map((n,i)=><div key={i}><div className="flex justify-between gap-2 mb-2"><span>{c.chartLabels[i]}</span><strong>{fmt(n)} €</strong></div><div className="h-3 bg-[#e6ebed]" aria-hidden="true"><div className="h-3 bg-[#193344]" style={{width:n/25000*100+'%'}}/></div></div>)}</div><p className="mt-5 text-sm leading-7">{c.chartNote}</p></figure><div className="flex flex-wrap items-center gap-5">{btn}<Link href={taxRelocationPaths[locale]} className="underline underline-offset-4">{taxRelocationLabels[locale]}</Link></div></section>
<section className="grid gap-10 lg:grid-cols-2 lg:items-start"><div><h2 className="font-serif text-3xl md:text-4xl">{c.growthTitle}</h2><p className="mt-5 leading-8">{c.growth}</p></div><figure className="bg-white p-6 border border-[#d9e0e2]"><figcaption className="font-medium">{c.growthCaption}</figcaption><div className="mt-6 space-y-5">{[7.4,6.4,5.4].map((n,i)=><div key={i}><div className="flex justify-between mb-2"><span>{c.growthLabels[i]}</span><strong>+{fmt(n)} %</strong></div><div className="h-3 bg-[#e6ebed]" aria-hidden="true"><div className="h-3 bg-[#193344]" style={{width:n/8*100+'%'}}/></div></div>)}</div></figure></section>
<section id="zones" className="scroll-mt-32"><h2 className="font-serif text-3xl md:text-4xl">{c.zoneTitle}</h2><p className="mt-4 leading-8 max-w-4xl">{c.zoneIntro}</p><div className="mt-7 grid gap-9 lg:grid-cols-2"><figure><img src={levent} alt={c.photoLabels[1]} width={1280} height={853} loading="lazy" className="w-full aspect-[3/2] object-cover"/><figcaption className="mt-2 text-xs">{c.photoLabels[1]} · <a href="https://commons.wikimedia.org/wiki/File:Istanbul_IMG_7257_1725.jpg" className="underline">Alexxx1979</a> · <a href="https://creativecommons.org/licenses/by-sa/3.0/" className="underline">CC BY-SA 3.0</a> · 2013</figcaption></figure><div className="space-y-5">{c.zones.map(([h,p])=><article key={h}><h3 className="font-serif text-2xl">{h}</h3><p className="mt-2 leading-7">{p}</p></article>)}</div></div></section>
<section id="bank" className="scroll-mt-32 border-y border-[#b9c5ca] py-10"><h2 className="font-serif text-3xl md:text-4xl">{c.bankTitle}</h2><p className="mt-5 text-lg leading-8 max-w-4xl">{c.bankIntro}</p><div className="flex flex-wrap gap-x-10 gap-y-5 py-7 text-2xl font-medium"><span>TEB / BNP Paribas</span><span>HSBC</span><span>QNB</span></div><p className="leading-7 max-w-4xl">{c.bankNote}</p><div className="mt-7">{btn}</div></section>
<section id="details" className="scroll-mt-32 space-y-8"><h2 className="font-serif text-3xl md:text-4xl">{c.detailsTitle}</h2><Table headers={d.headers} rows={d.rows}/><p className="max-w-4xl leading-8">{d.note}</p><h3 className="font-serif text-2xl">{d.flowTitle}</h3><ol className="grid gap-3 md:grid-cols-3">{d.steps.map((s,i)=><li key={s} className="border-t border-[#b9c5ca] py-4"><span className="text-sm me-3">{i+1}.</span>{s}</li>)}</ol><div className="divide-y divide-[#d9e0e2]">{questions.map(([q,a])=><details key={q} className="py-5"><summary className="cursor-pointer font-medium text-lg">{q}</summary><p className="mt-4 leading-8 max-w-4xl">{a}</p></details>)}</div></section>
<section className="grid gap-8 lg:grid-cols-2 lg:items-center"><figure><div className="relative aspect-[3/2]"><Image src="/images/travel/istanbul/city/ortakoy-bosphorus.webp" alt={c.photoLabels[2]} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover"/></div><figcaption className="mt-2 text-xs">{c.photoLabels[2]}</figcaption></figure><div><h2 className="font-serif text-3xl md:text-4xl">{c.lifeTitle}</h2><p className="mt-4 leading-8">{c.life}</p><Link href={relocation} className="inline-block mt-5 underline underline-offset-4">{d.related}</Link></div></section>
<section className="border-t border-[#d9e0e2] pt-7"><h2 className="font-serif text-xl">{c.sourceTitle}</h2><div className="mt-3 flex flex-wrap gap-x-6 gap-y-3 text-sm">{sources.map(([label,href])=><a key={href} href={href} className="underline underline-offset-4" target="_blank" rel="noreferrer">{label}</a>)}</div></section>
<section className="bg-[#193344] text-white p-8 md:p-12"><h2 className="font-serif text-3xl md:text-4xl">{c.endTitle}</h2><p className="mt-5 max-w-3xl leading-8">{c.endText}</p><Link href={contact} className="inline-flex mt-7 bg-white text-[#193344] px-7 py-4 font-medium">{c.cta}</Link></section>
</div><Footer locale={locale}/></main>
}
