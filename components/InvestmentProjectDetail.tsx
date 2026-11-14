import Link from 'next/link';
import {ArrowLeft,ArrowRight,CalendarDays,ChartNoAxesCombined,Clock3,FileText,Landmark,MapPin,Percent,ShieldCheck,Wallet} from 'lucide-react';
import {Header} from '@/components/Header';
import {Footer} from '@/components/Footer';
import {StructuredData} from '@/components/StructuredData';
import {investmentVentures,type InvestmentVentureCode} from '@/data/investmentVentures';
import {publicInvestmentListing,publicInvestmentImages,publicCoverUrl,moneyLabel} from '@/lib/investmentListings';
import {breadcrumbSchema} from '@/lib/seo';

const terms:Record<string,[string,string]>={loan:['Prêt','Loan'],bond:['Obligations','Bonds'],equity:['Capital / actions','Equity'],project_finance:['Financement de projet','Project finance'],other:['Opération privée','Private transaction']};
const freq:Record<string,[string,string]>={monthly:['Mensuelle','Monthly'],quarterly:['Trimestrielle','Quarterly'],annual:['Annuelle','Annual'],at_maturity:['À échéance','At maturity'],variable:['Variable','Variable']};
export async function InvestmentProjectDetail({code,locale}:{code:InvestmentVentureCode;locale:'fr'|'en'}){
 const fr=locale==='fr';const v=investmentVentures.find(x=>x.code===code)!;
 const [p,allImages]=await Promise.all([publicInvestmentListing(code),publicInvestmentImages()]);
 const images=allImages.filter(x=>x.listing_code===code&&x.public_path&&x.category!=='logo').sort((a,b)=>a.sort_order-b.sort_order);
 const cover=p.cover_path?publicCoverUrl(p.cover_path):'';
 const title=(fr?p.title_fr:p.title_en)||v.name;
 const desc=(fr?p.short_fr:p.short_en)||(fr?v.summary:v.englishSummary);
 const story=(fr?p.story_fr:p.story_en)||desc;
 const highlights=(fr?p.highlights_fr:p.highlights_en).split('\n').map(s=>s.trim()).filter(Boolean);
 const target=p.publication_status==='published'&&p.target_amount!==null?moneyLabel(p.target_amount,p.currency,locale):null;
 const ticket=p.publication_status==='published'&&p.minimum_ticket!==null?moneyLabel(p.minimum_ticket,p.currency,locale):null;
 const request=(fr?'/investissement/demande/':'/en/investment/request/')+code;
 const index=fr?'/investissement/projets':'/en/investment/projects';
 const path=index+'/'+code;
 const schedule=fr?p.exit_terms_fr:p.exit_terms_en;
 const use=fr?p.use_of_funds_fr:p.use_of_funds_en;
 const risk=fr?p.risk_summary_fr:p.risk_summary_en;
 return <>
  <StructuredData data={breadcrumbSchema([{name:'Bosphoras',url:'https://www.bosphoras.com'},{name:'Investment',url:'https://www.bosphoras.com'+(fr?'/investissement':'/en/investment')},{name:fr?'Projets':'Projects',url:'https://www.bosphoras.com'+index},{name:title,url:'https://www.bosphoras.com'+path}])}/>
  <StructuredData data={{'@context':'https://schema.org','@type':'WebPage',name:title,description:desc,url:'https://www.bosphoras.com'+path,about:{'@type':'Organization',name:p.issuer_name||v.name},...(cover?{primaryImageOfPage:{'@type':'ImageObject',url:cover}}:{})}}/>
  <Header locale={locale} currentPath={path} localizedPaths={{fr:'/investissement/projets/'+code,en:'/en/investment/projects/'+code,ru:'/en/investment/projects/'+code,ar:'/en/investment/projects/'+code}}/>
  <main lang={locale} className="bg-[#f5f6f5] pb-24 pt-[4.85rem] text-[#243941]">
   <div className="mx-auto max-w-[1450px] px-6 pt-9 md:px-12">
    <Link href={index} className="inline-flex items-center gap-2 text-sm text-[#546d79] hover:text-[#193344]"><ArrowLeft size={16}/>{fr?'Tous les projets':'All projects'}</Link>
    <div className="mt-10 flex flex-wrap items-end justify-between gap-5"><div><p className="text-xs font-medium uppercase tracking-[.17em] text-[#657982]">{p.sector||v.sector} · {p.location||v.region}</p><h1 className="mt-4 text-[clamp(2.8rem,5.7vw,5.5rem)] font-normal tracking-[-.06em] leading-[1.08] text-[#193344]">{title}</h1>{(fr?p.tagline_fr:p.tagline_en)&&<p className="mt-6 max-w-4xl text-xl leading-8 text-[#536b77]">{fr?p.tagline_fr:p.tagline_en}</p>}</div><Link href={request} className="inline-flex min-h-13 items-center gap-3 rounded-md bg-[#193344] px-7 py-4 text-sm font-medium text-white hover:bg-[#30576a]">{fr?'Demander un placement':'Request investment'}<ArrowRight size={16}/></Link></div>
    <div className="mt-10 grid gap-3 lg:grid-cols-[1.65fr_.75fr]">
     <div className="relative min-h-[300px] overflow-hidden rounded-xl bg-[linear-gradient(135deg,#12334a,#748b99)] md:min-h-[540px]">
      {cover?<img src={cover} alt={title+' — '+p.location} className="absolute inset-0 h-full w-full object-cover"/>:<div className="absolute inset-0 flex items-end p-8 md:p-14"><span className="max-w-xl text-[clamp(2.5rem,4.5vw,4.5rem)] leading-tight tracking-[-.06em] text-white">{title}</span></div>}
     </div>
     <div className="grid grid-cols-2 gap-3 lg:grid-cols-1 lg:grid-rows-2">
      {images.filter(x=>x.public_path!==p.cover_path).slice(0,2).map(x=><div key={x.id} className="min-h-[120px] overflow-hidden rounded-xl bg-[#dfe5e8]"><img src={publicCoverUrl(x.public_path)} alt={title+' — galerie du projet'} loading="lazy" className="h-full w-full object-cover"/></div>)}
      {images.filter(x=>x.public_path!==p.cover_path).length===0&&<div className="col-span-2 flex min-h-[130px] items-center justify-center rounded-xl border border-[#dce3e5] bg-white px-7 text-center lg:col-span-1"><div><Landmark size={27} className="mx-auto text-[#517084]"/><p className="mt-4 text-xs text-[#647781]">{fr?'Entreprise & investissement privé':'Company & private capital'}</p></div></div>}
     </div>
    </div>
   </div>
   <div className="mx-auto mt-11 grid max-w-[1450px] gap-8 px-6 md:px-12 lg:grid-cols-[1.3fr_.7fr] lg:gap-12">
    <div className="space-y-8">
     <section className="rounded-xl border border-[#dce4e8] bg-white p-7 md:p-10"><p className="text-xs uppercase tracking-[.18em] text-[#71848c]">{fr?'L’entreprise':'The company'}</p><h2 className="mt-4 text-3xl font-normal tracking-[-.045em] text-[#193344]">{fr?'L’opportunité en détail':'Opportunity overview'}</h2><div className="mt-6 space-y-5">{story.split(/\n\n+/).map((part,i)=><p key={i} className="whitespace-pre-line text-base leading-9 text-[#506570]">{part}</p>)}</div></section>
     {highlights.length>0&&<section className="rounded-xl border border-[#dce4e8] bg-white p-7 md:p-10"><h2 className="text-2xl font-normal tracking-[-.04em] text-[#193344]">{fr?'Les points forts':'Key highlights'}</h2><div className="mt-7 grid gap-4 md:grid-cols-2">{highlights.map(x=><div key={x} className="flex gap-3 rounded-lg bg-[#f5f8f8] p-4"><span className="mt-1 text-[#193344]">✓</span><p className="text-sm leading-7 text-[#4c626c]">{x}</p></div>)}</div></section>}
     {use&&<section className="rounded-xl border border-[#dce4e8] bg-white p-7 md:p-10"><h2 className="text-2xl font-normal tracking-[-.04em] text-[#193344]">{fr?'Utilisation du financement':'Use of funding'}</h2><p className="mt-5 whitespace-pre-line text-base leading-9 text-[#526873]">{use}</p></section>}
     {schedule&&<section className="rounded-xl border border-[#dce4e8] bg-white p-7 md:p-10"><h2 className="text-2xl font-normal tracking-[-.04em] text-[#193344]">{fr?'Durée, remboursement et sortie':'Term, repayment & exit'}</h2><p className="mt-5 whitespace-pre-line text-base leading-9 text-[#526873]">{schedule}</p></section>}
     {risk&&<section className="rounded-xl border border-[#dce4e8] bg-white p-7 md:p-10"><h2 className="text-2xl font-normal tracking-[-.04em] text-[#193344]">{fr?'Risques et informations importantes':'Key investment risks'}</h2><p className="mt-5 whitespace-pre-line text-base leading-9 text-[#526873]">{risk}</p></section>}
     {images.length>3&&<section className="rounded-xl border border-[#dce4e8] bg-white p-7 md:p-10"><h2 className="text-2xl font-normal tracking-[-.04em] text-[#193344]">{fr?'Galerie du projet':'Project gallery'}</h2><div className="mt-6 grid gap-3 sm:grid-cols-2">{images.slice(3).map(x=><img key={x.id} loading="lazy" src={publicCoverUrl(x.public_path)} alt={title+' — '+x.category} className="aspect-[16/10] w-full rounded-md object-cover"/>)}</div></section>}
    </div>
    <aside className="self-start space-y-5 lg:sticky lg:top-28">
     <section className="rounded-xl border border-[#dce4e8] bg-white p-7 shadow-[0_14px_45px_rgba(17,45,61,.08)]"><p className="text-xs uppercase tracking-[.18em] text-[#6c8088]">{fr?'En bref':'At a glance'}</p><h2 className="mt-4 text-2xl font-normal text-[#193344]">{fr?'Données clés':'Key figures'}</h2>
      <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-6">
       <div><p className="text-xs text-[#71858e]">{fr?'Financement recherché':'Funding target'}</p><p className="mt-2 text-xl font-semibold text-[#193344]">{target||(fr?'Sur demande':'On enquiry')}</p></div>
       <div><p className="text-xs text-[#71858e]">{fr?'Ticket minimum':'Minimum ticket'}</p><p className="mt-2 text-xl font-semibold text-[#193344]">{ticket||(fr?'Sur demande':'On enquiry')}</p></div>
       {p.publication_status==='published'&&p.annual_rate!==null&&<div><p className="text-xs text-[#71858e]">{fr?'Taux annuel indicatif':'Indicative annual rate'}</p><p className="mt-2 text-xl font-semibold text-[#193344]">{p.annual_rate}%</p></div>}
       {p.publication_status==='published'&&p.term_months&&<div><p className="text-xs text-[#71858e]">{fr?'Durée':'Term'}</p><p className="mt-2 text-xl font-semibold text-[#193344]">{p.term_months} {fr?'mois':'months'}</p></div>}
       {p.publication_status==='published'&&p.first_payment_month&&<div><p className="text-xs text-[#71858e]">{fr?'Premier versement prévu':'First scheduled payment'}</p><p className="mt-2 text-xl font-semibold text-[#193344]">{fr?'Mois':'Month'} {p.first_payment_month}</p></div>}
       <div><p className="text-xs text-[#71858e]">{fr?'Type':'Instrument'}</p><p className="mt-2 text-base font-semibold text-[#193344]">{p.publication_status==='published'&&(terms[p.investment_type])?terms[p.investment_type][fr?0:1]:(fr?'Selon projet':'Project-specific')}</p></div>
       <div><p className="text-xs text-[#71858e]">{fr?'Pays':'Location'}</p><p className="mt-2 text-base font-semibold text-[#193344]">{p.location||v.region}</p></div>
       {p.payment_frequency&&<div><p className="text-xs text-[#71858e]">{fr?'Paiements':'Payment frequency'}</p><p className="mt-2 text-sm font-semibold text-[#193344]">{freq[p.payment_frequency]?.[fr?0:1]||p.payment_frequency}</p></div>}
      </div>
      <Link href={request} className="mt-8 flex min-h-14 items-center justify-center gap-3 rounded-lg bg-[#193344] px-5 py-4 text-sm font-medium text-white">{fr?'Demander un placement':'Request investment'}<ArrowRight size={17}/></Link>
      <Link href={request} className="mt-4 block text-center text-sm font-medium text-[#193344] underline underline-offset-4">{fr?'Demander l’accès au dossier':'Request dossier access'}</Link>
      <p className="mt-5 text-xs leading-6 text-[#73828b]">{fr?'Demande sans engagement. Aucun prélèvement à cette étape.':'Non-binding enquiry. No debit at this stage.'}</p>
     </section>
     <p className="flex gap-3 px-2 text-xs leading-7 text-[#677b85]"><ShieldCheck size={19} className="mt-1 shrink-0 text-[#193344]"/>{fr?'Tout investissement comporte un risque de perte en capital. Les échéances et conditions dépendent des documents définitifs.':'Private investments involve capital risk. Final documents govern all terms and payments.'}</p>
    </aside>
   </div>
  </main><Footer locale={locale}/>
 </>;
}
