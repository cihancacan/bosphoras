// @ts-nocheck
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, MapPin, WalletCards } from 'lucide-react';
import { getPortalSupabase } from '@/lib/portalSupabase';

function money(value:any,currency='EUR'){
  if(value===null||value===undefined||value==='') return '—';
  return new Intl.NumberFormat('fr-FR',{style:'currency',currency,maximumFractionDigits:0}).format(Number(value)||0);
}

export function BackofficePropertyPreview({ listingId, submissionId }:{ listingId?:string|null; submissionId?:string|null }) {
  const supabase=getPortalSupabase();
  const [record,setRecord]=useState<any>(null);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState('');

  useEffect(()=>{
    (async()=>{
      setLoading(true);
      try{
        const {data:auth}=await supabase.auth.getUser();
        if(!auth.user){window.location.href='/connexion';return;}
        if(submissionId){
          const {data,error}=await supabase.from('property_listing_submissions').select('*').eq('id',submissionId).single();
          if(error) throw error;
          setRecord({...data.payload,_submissionStatus:data.status,_isSubmission:true});
        }else if(listingId){
          const {data,error}=await supabase.from('property_listings').select('*').eq('id',listingId).single();
          if(error) throw error;
          setRecord(data);
        }else throw new Error('Bien non spécifié.');
      }catch(e){setError(e instanceof Error?e.message:'Aperçu indisponible.');}
      finally{setLoading(false);}
    })();
  },[listingId,submissionId,supabase]);

  if(loading) return <main className="min-h-screen bg-[#eef2f3] p-8 text-[#172420]">Chargement de l’aperçu…</main>;
  if(error||!record) return <main className="min-h-screen bg-[#eef2f3] p-8 text-[#172420]"><Link href="/espace?tab=listings" className="text-sm underline">Retour</Link><p className="mt-6">{error||'Aperçu indisponible.'}</p></main>;

  const title=record.title?.fr||record.external_id||'Bien immobilier';
  const summary=record.summary?.fr||'';
  const description=record.description?.fr||'';
  const images=record.images||[];
  const currency=record.currency||'EUR';
  const total=record.total_price??record.totalPrice;
  const entry=record.entry_capital??record.entryCapital;
  const country=record.country_name??record.countryName??'';
  const city=record.city_name??record.cityName??record.city??'';
  const district=record.district||'';
  const plan=record.payment_plan??record.paymentPlan??[];
  const planEnabled=(record.payment_plan_enabled??record.paymentPlanEnabled)!==false;
  const interestMode=record.payment_interest_mode??record.paymentInterestMode;
  const interestRate=record.payment_interest_rate??record.paymentInterestRate;
  const cashDiscount=record.cash_discount_pct??record.cashDiscountPct;
  const watchpoints=record.watchpoints||[];
  const publicHref=!record._isSubmission&&record.published&&record.slug_fr?'/immobilier-turquie/'+record.slug_fr:'';

  return (
    <main className="min-h-screen bg-[#eef2f3] px-5 py-8 text-[#172420] [font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif]">
      <div className="mx-auto max-w-[1450px]">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <Link href="/espace?tab=listings" className="inline-flex items-center gap-2 text-sm font-semibold text-[#315d7c]"><ArrowLeft size={16}/>Retour au back-office</Link>
          <div className="flex items-center gap-2 text-xs">
            <span className="rounded-full bg-[#172420] px-3 py-1.5 text-white">{record._isSubmission?'Soumission · '+record._submissionStatus:(record.published?'Publié':'Non publié')}</span>
            {publicHref?<a target="_blank" rel="noreferrer" href={publicHref} className="inline-flex items-center gap-2 rounded-full border border-[#cbd5d1] bg-white px-3 py-1.5 font-semibold text-[#315d7c]">Page publique <ExternalLink size={13}/></a>:null}
          </div>
        </div>

        <section className="overflow-hidden rounded-3xl border border-[#d2dbd7] bg-white shadow-[0_24px_80px_rgba(21,43,37,0.08)]">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative min-h-[420px] bg-[#dce4e1]">
              {images[0]?<img src={images[0]} alt={title} className="absolute inset-0 h-full w-full object-cover"/>:<div className="flex h-full min-h-[420px] items-center justify-center text-sm uppercase tracking-[0.16em] text-[#6f7f7a]">Bosphoras Property Desk</div>}
            </div>
            <div className="bg-[#10231e] p-8 text-white md:p-10">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#c9aa7a]">{[district,city,country].filter(Boolean).join(' · ')}</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">{title}</h1>
              <p className="mt-5 text-sm leading-7 text-[#c7d1ce]">{summary}</p>
              <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-white/[0.08] p-4"><span className="text-[0.65rem] uppercase tracking-[0.1em] text-[#a8b8b3]">Prix total</span><strong className="mt-2 block text-xl">{money(total,currency)}</strong></div>
                <div className="rounded-xl bg-white/[0.08] p-4"><span className="text-[0.65rem] uppercase tracking-[0.1em] text-[#a8b8b3]">Capital aujourd’hui</span><strong className="mt-2 block text-xl">{money(entry,currency)}</strong></div>
              </div>
            </div>
          </div>

          <div className="grid gap-10 p-7 md:p-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <h2 className="text-2xl font-semibold">Présentation</h2>
              <p className="mt-4 whitespace-pre-line text-sm leading-7 text-[#5f706a]">{description||'Description non renseignée.'}</p>
              {watchpoints?.length?<div className="mt-8 rounded-2xl border border-[#e4d2b6] bg-[#fff8ed] p-5"><h3 className="font-semibold">Points de vigilance</h3><ul className="mt-3 space-y-2 text-sm text-[#685e50]">{watchpoints.map((x:any,i:number)=><li key={i}>• {x?.fr||String(x)}</li>)}</ul></div>:null}
            </div>
            <aside className="space-y-5">
              <div className="rounded-2xl border border-[#d2dbd7] bg-[#f7f9f8] p-5">
                <div className="flex items-center gap-2"><MapPin size={17} className="text-[#315d7c]"/><h3 className="font-semibold">Localisation</h3></div>
                <p className="mt-3 text-sm text-[#5f706a]">{[district,city,country].filter(Boolean).join(', ')||'À compléter'}</p>
              </div>
              {planEnabled&&plan?.length?<div className="rounded-2xl bg-[#10231e] p-5 text-white">
                <div className="flex items-center gap-2"><WalletCards size={17} className="text-[#c9aa7a]"/><h3 className="font-semibold">Plan de paiement</h3></div>
                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                  {interestMode==='interest_free'?<span className="rounded-full bg-white/10 px-3 py-1">Sans intérêt / 0%</span>:null}
                  {interestMode==='interest_bearing'&&interestRate?<span className="rounded-full bg-white/10 px-3 py-1">Taux {interestRate}%</span>:null}
                  {cashDiscount?<span className="rounded-full bg-white/10 px-3 py-1">Remise comptant -{cashDiscount}%</span>:null}
                </div>
                <div className="mt-4 space-y-3">{plan.map((step:any,i:number)=><div key={i} className="flex justify-between gap-4 border-t border-white/10 pt-3 text-sm"><span>{step?.label?.fr||'Étape'}<small className="block text-[#a8b8b3]">{step?.due?.fr||''}</small></span><strong>{step?.percentage?String(step.percentage)+'%':step?.amount?money(step.amount,currency):'—'}</strong></div>)}</div>
              </div>:null}
            </aside>
          </div>
        </section>
      </div>
    </main>
  );
}
