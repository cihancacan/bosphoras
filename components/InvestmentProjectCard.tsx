import Link from 'next/link';
import { ArrowRight, CalendarDays, MapPin, Wallet, Landmark, Percent } from 'lucide-react';
import { investmentVentures } from '@/data/investmentVentures';
import { publicCoverUrl, moneyLabel, type InvestmentListing } from '@/lib/investmentListings';

const kindFr:Record<string,string>={loan:'Prêt',bond:'Obligations',equity:'Participation au capital',project_finance:'Financement de projet',other:'Opération privée'};
const kindEn:Record<string,string>={loan:'Private loan',bond:'Bonds',equity:'Equity participation',project_finance:'Project finance',other:'Private investment'};

export function InvestmentProjectCard({project:p,locale,priority=false}:{project:InvestmentListing;locale:'fr'|'en';priority?:boolean}){
 const fr=locale==='fr',code=p.code;
 const picture=p.publication_status==='published'&&p.cover_path?publicCoverUrl(p.cover_path):'';
 const short=(fr?p.short_fr:p.short_en)||investmentVentures.find(v=>v.code===code)?.summary||'';
 const title=(fr?p.title_fr:p.title_en)||investmentVentures.find(v=>v.code===code)?.name||code;
 const tagline=fr?p.tagline_fr:p.tagline_en;
 const detail=(fr?'/investissement/projets/':'/en/investment/projects/')+code;
 const request=(fr?'/investissement/demande/':'/en/investment/request/')+code;
 const isPublic=p.publication_status==='published';
 const hasFinance=isPublic && p.target_amount!==null;
 return <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#d8e1e5] bg-white shadow-[0_10px_45px_rgba(14,42,58,.045)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(14,42,58,.12)]">
  <Link href={detail} className="relative block aspect-[16/10] overflow-hidden bg-[#dce5e9]" aria-label={(fr?'Découvrir ':'Explore ')+title}>
   {picture?<img src={picture} alt={title+' — '+p.location} loading={priority?'eager':'lazy'} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.045]"/>:
    <div className="relative flex h-full flex-col justify-between overflow-hidden bg-[linear-gradient(135deg,#17384a,#557080_60%,#e0e7e5)] p-7 text-white"><div className="absolute -right-16 -top-10 h-64 w-64 rounded-full border border-white/25"/><div className="absolute bottom-0 right-6 h-28 w-48 rotate-[-15deg] border border-white/15"/><span className="relative z-10 text-xs tracking-[.24em]">BOSPHORAS INVESTMENT</span><strong className="relative z-10 max-w-[95%] text-[clamp(2.0rem,3vw,3.4rem)] font-normal leading-tight tracking-[-.055em]">{title}</strong></div>}
   {isPublic&&p.investment_type&&<span className="absolute left-5 top-5 rounded bg-white/95 px-3 py-2 text-[11px] font-medium uppercase tracking-[.08em] text-[#193344]">{(fr?kindFr:kindEn)[p.investment_type]||p.investment_type}</span>}
  </Link>
  <div className="flex flex-1 flex-col p-6 md:p-7">
   <div className="flex items-center gap-2 text-xs text-[#687b85]"><MapPin size={14}/>{p.location||'International'}<span className="mx-1 text-[#b1bfc5]">·</span>{p.sector}</div>
   <Link href={detail} className="mt-4 block text-[clamp(1.45rem,2vw,2rem)] font-normal leading-tight tracking-[-.045em] text-[#193344] hover:underline hover:underline-offset-4">{title}</Link>
   {tagline&&<p className="mt-2 text-sm font-medium leading-6 text-[#3d5e6e]">{tagline}</p>}
   <p className="mt-4 line-clamp-3 flex-1 text-sm leading-7 text-[#5b6c75]">{short}</p>
   <div className="mt-7 grid grid-cols-2 gap-x-5 gap-y-4 border-t border-[#e2e8eb] pt-6">
    <div><p className="text-[11px] uppercase tracking-[.08em] text-[#7b8a92]">{fr?'Financement recherché':'Funding target'}</p><p className="mt-2 text-lg font-semibold tracking-[-.02em] text-[#193344]">{hasFinance?moneyLabel(p.target_amount,p.currency,locale):(fr?'Sur demande':'On enquiry')}</p></div>
    <div><p className="text-[11px] uppercase tracking-[.08em] text-[#7b8a92]">{fr?'Investissement minimum':'Minimum investment'}</p><p className="mt-2 text-lg font-semibold tracking-[-.02em] text-[#193344]">{isPublic&&p.minimum_ticket!==null?moneyLabel(p.minimum_ticket,p.currency,locale):(fr?'À préciser':'To be confirmed')}</p></div>
    {isPublic&&p.annual_rate!==null&&<div><p className="text-[11px] uppercase tracking-[.08em] text-[#7b8a92]">{fr?'Taux contractuel indicatif':'Indicative contractual rate'}</p><p className="mt-2 text-base font-semibold text-[#193344]">{p.annual_rate}% / {fr?'an':'year'}</p></div>}
    {isPublic&&p.term_months!==null&&<div><p className="text-[11px] uppercase tracking-[.08em] text-[#7b8a92]">{fr?'Durée':'Term'}</p><p className="mt-2 text-base font-semibold text-[#193344]">{p.term_months} {fr?'mois':'months'}</p></div>}
   </div>
   <div className="mt-7 grid grid-cols-2 gap-3"><Link href={detail} className="flex min-h-12 items-center justify-center gap-2 rounded-md border border-[#cad6dc] px-4 py-3 text-center text-xs font-medium text-[#193344] transition hover:border-[#193344]">{fr?'Voir le projet':'View project'}<ArrowRight size={15}/></Link><Link href={request} className="flex min-h-12 items-center justify-center rounded-md bg-[#193344] px-4 py-3 text-center text-xs font-medium text-white hover:bg-[#305364]">{fr?'Demander un placement':'Request investment'}</Link></div>
  </div>
 </article>;
}

