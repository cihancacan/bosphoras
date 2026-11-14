import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { InvestmentInterestForm } from '@/components/InvestmentInterestForm';
import { investmentVentures, type InvestmentVentureCode } from '@/data/investmentVentures';
import { ShieldCheck, ArrowLeft, Landmark } from 'lucide-react';
type Lang='fr'|'en';
export function InvestmentRequestPage({locale,code}:{locale:Lang;code:string}){
 const project=investmentVentures.find(p=>p.code===code);
 if(!project)notFound();
 const fr=locale==='fr';
 const base=fr?'/investissement/projets':'/en/investment/projects';
 return <><Header locale={locale} currentPath={base} localizedPaths={{fr:'/investissement/projets',en:'/en/investment/projects',ru:'/en/investment/projects',ar:'/en/investment/projects'}}/>
  <main lang={locale} className="min-h-screen bg-[#f4f6f5] pt-[4.85rem] text-[#23363e]">
   <div className="mx-auto grid max-w-[1260px] gap-12 px-5 pb-24 pt-16 md:px-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
    <div><Link href={base} className="inline-flex items-center gap-2 text-sm text-[#193344] underline underline-offset-4"><ArrowLeft size={16}/>{fr?'Tous les projets':'All projects'}</Link>
     <p className="mt-14 text-xs font-medium uppercase tracking-[.2em] text-[#5a6d75]">BOSPHORAS INVESTMENT</p>
     <h1 className="mt-6 text-[clamp(2.9rem,5vw,5.2rem)] leading-[1.08] tracking-[-.06em] text-[#193344]">{fr?'Découvrir une opportunité.':'Explore an opportunity.'}</h1>
     <div className="mt-10 border-t border-[#c9d3d6] pt-7"><p className="text-sm text-[#53616a]">{fr?'Projet sélectionné':'Selected project'}</p><h2 className="mt-3 text-3xl text-[#193344]">{project.name}</h2><p className="mt-4 text-sm leading-8 text-[#55676f]">{fr?project.summary:project.englishSummary}</p></div>
     <div className="mt-9 flex items-start gap-3 rounded-lg border border-[#d4dee0] bg-white p-5 text-sm leading-7 text-[#52636b]"><ShieldCheck size={21} className="mt-1 shrink-0 text-[#193344]"/><p>{fr?'Votre demande est transmise à l’équipe Bosphoras pour examen et orientation vers les interlocuteurs compétents. Aucun capital n’est débité à cette étape.':'Your enquiry goes to Bosphoras for review and follow-up with the appropriate professionals. No capital is debited at this stage.'}</p></div>
    </div>
    <div className="self-start rounded-xl border border-[#dce3e4] bg-white p-6 shadow-sm sm:p-10"><div className="mb-7 flex items-center gap-3"><Landmark className="text-[#193344]" size={27}/><h2 className="text-2xl text-[#193344]">{fr?'Votre demande':'Your enquiry'}</h2></div><InvestmentInterestForm locale={locale} projectCode={code as InvestmentVentureCode}/></div>
   </div>
  </main><Footer locale={locale}/></>;
}
