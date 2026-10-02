// @ts-nocheck
'use client';

import { useState } from 'react';
import { CheckCircle2, Link2, Loader2, WandSparkles } from 'lucide-react';
import { getPortalSupabase } from '@/lib/portalSupabase';

function local(value='') {
  return { fr:value, en:value, ru:value, ar:value };
}

function detectCity(text='') {
  const x=String(text).toLowerCase();
  if(x.includes('bodrum')) return 'bodrum';
  if(x.includes('antalya')) return 'antalya';
  if(x.includes('istanbul')||x.includes('İstanbul'.toLowerCase())) return 'istanbul';
  return 'istanbul';
}

export function PropertyUrlAutofill({
  onPrepared,
  compact=false,
}:{
  onPrepared:(draft:any)=>void;
  compact?:boolean;
}) {
  const supabase=getPortalSupabase();
  const [url,setUrl]=useState('');
  const [busy,setBusy]=useState(false);
  const [stage,setStage]=useState('');
  const [message,setMessage]=useState('');

  async function authHeaders() {
    const {data}=await supabase.auth.getSession();
    const token=data.session?.access_token;
    if(!token) throw new Error('Session expirée. Reconnectez-vous.');
    return { Authorization:`Bearer ${token}`, 'Content-Type':'application/json' };
  }

  async function prepare() {
    if(!url.trim()) return;
    setBusy(true);
    setMessage('');
    try {
      const headers=await authHeaders();
      setStage('Lecture de l’annonce source et récupération des photos…');
      const imported=await fetch('/api/property-desk/import-url',{
        method:'POST',
        headers,
        body:JSON.stringify({url:url.trim(),copyImages:true}),
      });
      const importedJson=await imported.json();
      if(!imported.ok) throw new Error(importedJson.error||'Import impossible.');

      const base=importedJson.data||{};
      const fallback={
        sourceUrl:base.sourceUrl||url.trim(),
        sourceHost:base.sourceHost||'',
        countryCode:base.countryCode||'',
        countryName:base.countryName||'',
        cityName:base.cityName||'',
        city:base.city||detectCity(`${base.title||''} ${base.description||''} ${base.district||''}`),
        district:base.district||'',
        collection:'selected-investment',
        propertyType:'apartment',
        transaction:'sale',
        currency:base.currency||'EUR',
        totalPrice:base.price||'',
        entryCapital:'',
        surfaceM2:base.surfaceM2||'',
        bedrooms:base.bedrooms||'',
        bathrooms:'',
        developer:base.developer||'',
        paymentPlan:Array.isArray(base.paymentPlan)?base.paymentPlan:[],
        paymentPlanEnabled:Array.isArray(base.paymentPlan)&&base.paymentPlan.length>0,
        paymentInterestMode:'not_specified',
        paymentInterestRate:'',
        cashDiscountPct:'',
        cashPrice:'',
        installmentPrice:'',
        featured:false,
        priceOnRequest:!base.price,
        title:local(base.title||''),
        summary:local(base.summary||''),
        description:local(base.description||base.rawText?.slice(0,5000)||''),
        seoTitle:local(base.title||''),
        seoDescription:local(base.summary||''),
        delivery:local(''),
        strengths:[],
        technicalNotes:[],
        watchpoints:[],
        images:Array.isArray(base.images)?base.images:[],
      };

      setStage('Traduction FR / EN / RU / AR et préparation SEO…');
      const translated=await fetch('/api/property-desk/translate-draft',{
        method:'POST',
        headers,
        body:JSON.stringify({data:base,importJobId:importedJson.importJobId||null}),
      });
      const translatedJson=await translated.json();

      let prepared=fallback;
      if(translated.ok&&translatedJson.data){
        const ai=translatedJson.data;
        const plan=Array.isArray(ai.paymentPlan)?ai.paymentPlan:fallback.paymentPlan;
        const firstPct=Number(plan?.[0]?.percentage||0);
        const derivedEntry=!ai.entryCapital&&fallback.totalPrice&&firstPct>0
          ? Math.round(Number(fallback.totalPrice)*firstPct/100)
          : '';
        prepared={
          ...fallback,
          countryCode:ai.countryCode||fallback.countryCode,
          countryName:ai.countryName||fallback.countryName,
          city:ai.city||fallback.city,
          cityName:ai.cityName||fallback.cityName,
          district:ai.district||fallback.district,
          propertyType:ai.propertyType||fallback.propertyType,
          developer:ai.developer||fallback.developer,
          currency:ai.currency||fallback.currency,
          totalPrice:ai.price??fallback.totalPrice,
          entryCapital:ai.entryCapital??derivedEntry??fallback.entryCapital,
          surfaceM2:ai.surfaceM2??fallback.surfaceM2,
          bedrooms:ai.bedrooms??fallback.bedrooms,
          bathrooms:ai.bathrooms??fallback.bathrooms,
          delivery:ai.delivery||fallback.delivery,
          paymentPlan:plan,
          paymentPlanEnabled:Array.isArray(plan)&&plan.length>0,
          title:ai.title||fallback.title,
          summary:ai.summary||fallback.summary,
          description:ai.description||fallback.description,
          seoTitle:ai.seoTitle||fallback.seoTitle,
          seoDescription:ai.seoDescription||fallback.seoDescription,
          strengths:Array.isArray(ai.strengths)?ai.strengths:[],
          technicalNotes:Array.isArray(ai.technicalNotes)?ai.technicalNotes:[],
          watchpoints:Array.isArray(ai.watchpoints)?ai.watchpoints:[],
        };
      }

      onPrepared(prepared);
      setMessage(
        translated.ok
          ? `Préremplissage terminé : données, ${prepared.images.length} photo(s), traductions et suggestions SEO ajoutées. Vérifiez puis ajustez si nécessaire.`
          : `Données et photos récupérées. La traduction automatique n’a pas été disponible : ${translatedJson.error||'service indisponible'}.`
      );
      setStage('');
    } catch(error) {
      setMessage(error instanceof Error?error.message:'Import impossible.');
      setStage('');
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className={`border border-[#d5dee7] bg-[#f8fafc] ${compact?'p-4':'p-5 md:p-6'}`}>
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#12304a] text-white">
          <Link2 size={18}/>
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-base font-semibold tracking-[-0.01em] text-[#162334]">Préremplir depuis une annonce existante</h3>
            <span className="rounded bg-[#e7eef4] px-2 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-[#315d7c]">Recommandé</span>
          </div>
          <p className="mt-1 text-xs leading-5 text-[#687685]">
            Collez le lien du promoteur, de l’agence ou du portail. Bosphoras récupère au maximum le prix, la surface, la localisation, le texte et les photos, puis prépare les traductions et les champs SEO. Rien n’est enregistré automatiquement.
          </p>
          <div className="mt-4 flex flex-col gap-2 md:flex-row">
            <input
              value={url}
              onChange={(e)=>setUrl(e.target.value)}
              placeholder="https://..."
              className="min-h-[46px] flex-1 border border-[#cfd8e3] bg-white px-3 text-sm outline-none focus:border-[#315d7c]"
            />
            <button
              type="button"
              disabled={busy||!url.trim()}
              onClick={prepare}
              className="inline-flex min-h-[46px] items-center justify-center gap-2 bg-[#12304a] px-5 text-sm font-semibold text-white disabled:opacity-50"
            >
              {busy?<Loader2 size={16} className="animate-spin"/>:<WandSparkles size={16}/>}
              Préremplir
            </button>
          </div>
          {stage?<p className="mt-3 text-xs font-medium text-[#315d7c]">{stage}</p>:null}
          {message?<div className="mt-3 flex items-start gap-2 text-xs leading-5 text-[#526272]"><CheckCircle2 size={14} className="mt-0.5 shrink-0 text-[#3e755c]"/><span>{message}</span></div>:null}
        </div>
      </div>
    </section>
  );
}
