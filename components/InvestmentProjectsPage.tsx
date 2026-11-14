import Link from 'next/link';
import { ArrowRight, Building2, Globe2, Landmark, ShieldCheck } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';
import { breadcrumbSchema } from '@/lib/seo';
import { investmentVentures } from '@/data/investmentVentures';

type Lang='fr'|'en';
export function InvestmentProjectsPage({locale}:{locale:Lang}){
 const fr=locale==='fr';
 const base=fr?'/investissement':'/en/investment';
 const path=fr?'/investissement/projets':'/en/investment/projects';
 const investor=fr?'/investissement/investisseurs':'/en/investment/investors';
 const access=fr?'/investissement/acces/investisseur':'/en/investment/access/investor';
 const entrepreneur=fr?'/investissement/entrepreneurs':'/en/investment/entrepreneurs';
 const description=fr
  ? 'Découvrez des entreprises et projets dans le bâtiment, la santé, l’énergie, la technologie et l’hôtellerie. Bosphoras rapproche les entreprises de capitaux adaptés et de partenaires financiers.'
  : 'Discover businesses and projects in construction, healthcare, energy, technology and hospitality. Bosphoras connects business development with suitable capital and specialist partners.';
 return <>
  <StructuredData data={breadcrumbSchema([{name:'Bosphoras',url:'https://www.bosphoras.com/'},{name:'Investment',url:'https://www.bosphoras.com'+base},{name:fr?'Projets':'Projects',url:'https://www.bosphoras.com'+path}])}/>
  <StructuredData data={{'@context':'https://schema.org','@type':'CollectionPage',name:fr?'Projets et entreprises | Bosphoras Investment':'Projects and companies | Bosphoras Investment',description,url:'https://www.bosphoras.com'+path,mainEntity:{'@type':'ItemList',itemListElement:investmentVentures.map((p,i)=>({'@type':'ListItem',position:i+1,item:{'@type':'Thing',name:p.name,description:fr?p.summary:p.englishSummary}}))}}}/>
  <Header locale={locale} currentPath={path} localizedPaths={{fr:'/investissement/projets',en:'/en/investment/projects',ru:'/en/investment/projects',ar:'/en/investment/projects'}}/>
  <main lang={locale} className="bg-white pt-[4.85rem] text-[#202629]">
   <section className="border-b border-[#d9e0e3] bg-[#f5f5f3] px-6 py-20 md:px-12 md:py-28">
    <div className="mx-auto grid max-w-[1370px] gap-12 lg:grid-cols-[1.4fr_.6fr] lg:gap-20"><div>
     <p className="text-xs font-medium uppercase tracking-[.2em] text-[#52656f]">BOSPHORAS INVESTMENT · {fr?'PROJETS':'PROJECTS'}</p>
     <h1 className="mt-8 max-w-5xl text-[clamp(3rem,5.8vw,6.7rem)] font-normal leading-[1.07] tracking-[-.06em] text-[#193344]">{fr?'Des entreprises qui construisent l’avenir.':'Businesses building the future.'}</h1>
     <p className="mt-9 max-w-3xl text-lg leading-9 text-[#53626b]">{description}</p>
     <div className="mt-10 flex flex-wrap gap-3"><Link href={access} className="inline-flex items-center gap-3 bg-[#193344] px-6 py-4 text-sm text-white">{fr?'Créer mon espace investisseur':'Create investor access'}<ArrowRight size={16}/></Link><Link href={entrepreneur} className="inline-flex items-center gap-3 border border-[#aab7bd] px-6 py-4 text-sm text-[#193344]">{fr?'Proposer une entreprise':'Submit a business'}<ArrowRight size={16}/></Link></div>
     </div><aside className="self-end border-t border-[#afbdc3] pt-7 lg:border-l lg:border-t-0 lg:pl-9"><Globe2 size={32} strokeWidth={1.1} className="text-[#193344]"/><h2 className="mt-7 text-3xl font-normal leading-tight tracking-[-.045em] text-[#193344]">{fr?'Diversifier les secteurs. Comprendre les entreprises.':'Discover across sectors. Understand each business.'}</h2></aside></div>
   </section>
   <section className="px-6 py-20 md:px-12 md:py-28"><div className="mx-auto max-w-[1340px]">
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{investmentVentures.map((p,i)=><article key={p.code} id={p.code} className="scroll-mt-28 flex flex-col border-t-2 border-[#193344] bg-[#f6f6f4] p-7 md:p-9">
     <div className="flex items-center justify-between gap-3"><p className="text-xs uppercase tracking-[.12em] text-[#63757e]">{fr?p.sector:p.englishSector}</p><span className="text-xs tabular-nums text-[#84939a]">{String(i+1).padStart(2,'0')}</span></div>
     <h2 className="mt-8 text-3xl font-normal tracking-[-.045em] text-[#193344]">{p.name}</h2><p className="mt-2 text-sm text-[#6a7a83]">{p.region}</p>
     <p className="mt-7 flex-1 text-base leading-8 text-[#485a63]">{fr?p.summary:p.englishSummary}</p>
     <div className="mt-9 border-t border-[#d8e0e2] pt-6"><p className="text-xs text-[#657681]">{fr?'Orientation de financement':'Financing approach'}</p><p className="mt-2 text-sm font-medium leading-7 text-[#193344]">{fr?p.financing: 'Debt or equity depending on the transaction'}</p>
     <Link href={access} className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#193344] underline underline-offset-8">{fr?'Suivre le projet':'Follow project'}<ArrowRight size={16}/></Link>
     </div></article>)}</div>
   </div></section>
   <section className="border-t border-[#d8e0e2] bg-[#f5f5f3] px-6 py-20 md:px-12 md:py-24"><div className="mx-auto grid max-w-[1340px] gap-12 md:grid-cols-[.75fr_1.25fr]">
    <div><Landmark size={32} strokeWidth={1.1} className="text-[#193344]"/><h2 className="mt-6 text-4xl font-normal tracking-[-.05em] text-[#193344]">{fr?'Votre prochain investissement commence par la compréhension du projet.':'The next step is understanding the business.'}</h2></div>
    <div><p className="text-base leading-9 text-[#53646e]">{fr?'Retrouvez notre guide pour comprendre les différentes formes de financement, les éventuels intérêts, l’actionnariat, les conditions de sortie et les risques associés aux investissements dans les entreprises.':'Learn about debt, contractual interest, equity ownership, liquidity, exits and the risks of investing in private businesses.'}</p>
     <Link href={investor} className="mt-8 inline-flex items-center gap-2 border-b border-[#193344] pb-1 text-sm font-medium text-[#193344]">{fr?'Découvrir l’espace investisseurs':'Explore investor information'}<ArrowRight size={16}/></Link>
    </div>
   </div></section>
   <section className="px-6 py-8 md:px-12"><div className="mx-auto flex max-w-[1340px] items-center gap-3 text-xs leading-6 text-[#6b7980]"><ShieldCheck size={17} className="shrink-0"/><p>{fr?'Les investissements dans les entreprises comportent un risque de perte de capital et une liquidité limitée. Les modalités de chaque opération sont communiquées par les opérateurs habilités concernés.':'Private business investments involve potential capital loss and limited liquidity. Transaction terms are provided by the relevant authorised providers.'}</p></div></section>
  </main><Footer locale={locale}/>
 </>;
}
