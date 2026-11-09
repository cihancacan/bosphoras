'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Loader2, Globe2, MapPin } from 'lucide-react';
import { careerAreas, careerPerspectiveCopy, careerApplicationCopy, careerCopy, careerLanguageNames, careerLanguages, type CareerLocale } from '@/lib/careers/copy';

type State = 'idle'|'sending'|'success'|'stored'|'error';

export function CareersContent({ initialLanguage }: { initialLanguage: CareerLocale }) {
  const [language,setLanguage] = useState<CareerLocale>(initialLanguage);
  const [state,setState] = useState<State>('idle');
  const copy=careerCopy(language);
  const applicationCopy=careerApplicationCopy(language);
  const perspectiveCopy=careerPerspectiveCopy[language];
  const [reference,setReference] = useState('');
  const statusRef=useRef<HTMLDivElement>(null);
  const errorRef=useRef<HTMLDivElement>(null);
  useEffect(()=>{
    if(state==='sending'||state==='success'||state==='stored'){
      statusRef.current?.focus({preventScroll:true});
      statusRef.current?.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'center'});
    }else if(state==='error'){
      errorRef.current?.focus();
    }
  },[state]);
  const rtl=language==='ar';
  const names=[copy.role1,copy.role2,copy.role3,copy.role4,copy.role5,applicationCopy.travelTitle];
  const roles=[copy.desk1,copy.desk2,copy.desk3,copy.desk4,applicationCopy.travelTitle];

  async function submit(event:FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if(state==='sending')return;
    const form=event.currentTarget;
    const body=new FormData(form);
    body.set('locale',language);
    setState('sending');
    try {
      const response=await fetch('/api/careers/apply',{method:'POST',body,cache:'no-store'});
      const data=await response.json().catch(()=>null);
      if(!response.ok || !data?.ok || data.recorded!==true){setState('error');return;}
      setReference(typeof data.applicationId==='string'?data.applicationId:'');
      setState(data.notificationSent && data.confirmationSent ? 'success' : 'stored');

    }catch{setState('error');}
  }

  return <main dir={rtl?'rtl':'ltr'} lang={language} className="min-h-screen bg-[#f8f7f3] pt-[4.85rem] text-[#17252d]">
    <section className="bg-[#101f29] text-[#f7f5ee]" aria-labelledby="careers-title">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-[1.25fr_.75fr] lg:items-end">
        <div>
          <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.24em] text-[#d0b78b]">{copy.eyebrow}</p>
          <h1 id="careers-title" className="max-w-3xl font-serif text-5xl font-normal leading-[1.05] tracking-[-.035em] md:text-7xl">{copy.headline}</h1>
          <p className="mt-8 max-w-2xl text-[16px] leading-8 text-[#cbd4d7]">{copy.intro}</p>
          <div className="mt-10 max-w-xl">
            <label htmlFor="application-language" className="block text-sm font-medium text-[#f0e7d8]">{applicationCopy.languageLabel}</label>
            <p id="application-language-hint" className="mt-2 text-sm leading-6 text-[#cbd4d7]">{applicationCopy.languageHint}</p>
            <select id="application-language" value={language} onChange={event=>setLanguage(event.target.value as CareerLocale)} disabled={state==='sending'} aria-describedby="application-language-hint" className="mt-4 min-h-12 w-full rounded-none border border-[#cab187] bg-[#101f29] px-4 text-base text-[#f7f5ee] focus:outline-none focus:ring-2 focus:ring-[#cab187]">
              {careerLanguages.map(code=><option key={code} value={code} lang={code}>{careerLanguageNames[code]}</option>)}
            </select>
          </div>
          <a href="#candidature" className="mt-5 inline-flex min-h-[48px] items-center gap-3 border border-[#cab187] px-6 py-3 text-xs font-semibold uppercase tracking-[0.13em] text-[#f0e7d8] transition hover:bg-[#cab187] hover:text-[#102029]">
            {copy.formTitle} <ArrowRight size={16} aria-hidden="true"/>
          </a>
        </div>
        <div className="border-t border-[#6b797a]/60 py-7 lg:border-t-0 lg:border-s lg:ps-9">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#d1bc97]"><MapPin size={15} aria-hidden="true"/>{copy.location}</p>
          <div className="mt-8 flex items-center gap-3 text-xs uppercase tracking-[0.12em] text-[#c2cbd0]"><Globe2 size={15}/>{careerLanguages.length} {applicationCopy.languagesLabel}</div>

        </div>
      </div>
    </section>

    <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-10 lg:grid-cols-2 lg:gap-24" aria-labelledby="approach-title">
      <div>
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.19em] text-[#9b8057]">BOSPHORAS</p>
        <h2 id="approach-title" className="font-serif text-4xl font-normal tracking-[-.025em]">{copy.approachTitle}</h2>
        <p className="mt-6 max-w-xl text-[15px] leading-8 text-[#56636a]">{copy.approachText}</p>
      </div>
      <div className="border-t border-[#d7d7d1] pt-8">
        <h3 className="text-[12px] font-semibold uppercase tracking-[0.15em] text-[#192b35]">{copy.profileTitle}</h3>
        <p className="mt-5 max-w-xl text-[15px] leading-8 text-[#56636a]">{copy.profileText}</p>
      </div>
    </section>

    <section className="border-y border-[#deddd6] bg-white" aria-labelledby="roles-title">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <h2 id="roles-title" className="font-serif text-4xl font-normal">{copy.deskTitle}</h2>
        <div className="mt-9 grid gap-x-10 gap-y-0 md:grid-cols-2">
          {roles.map((name,i)=><div key={i} className="flex min-h-[104px] items-center justify-between gap-4 border-t border-[#deddd6] py-7">
            <div className="flex items-center gap-5">
              <span className="text-[11px] tracking-[.18em] text-[#9b8057]">0{i+1}</span>
              <div>
                <p className="text-base font-medium leading-6">{name}</p>
                {i===4&&<p className="mt-2 text-sm leading-6 text-[#56636a]">{applicationCopy.travelDesk}</p>}
              </div>
            </div>
            <ArrowUpRight size={16} className="shrink-0 text-[#99825e]" aria-hidden="true"/>
          </div>)}
        </div>
      </div>
    </section>

    <section id="candidature" className="mx-auto grid max-w-7xl scroll-mt-28 gap-12 px-6 py-20 md:px-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-24" aria-labelledby="form-title">
      <div className={state==='sending'||state==='success'||state==='stored'?'hidden':''}>
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#97794a]">{copy.eyebrow}</p>
        <h2 id="form-title" className="font-serif text-4xl font-normal leading-tight md:text-5xl">{copy.formTitle}</h2>
        <p className="mt-6 max-w-md text-[15px] leading-8 text-[#5c686e]">{copy.formIntro}</p>
        <div className="mt-10 border-t border-[#d6d8d3] pt-6 text-xs leading-7 text-[#6a7477]">
          <p>{copy.privacy}</p>
          <Link href="/confidentialite" className="mt-2 inline-flex items-center gap-2 underline underline-offset-4 hover:text-[#17252d]">{applicationCopy.privacyLabel} <ArrowUpRight size={13}/></Link>
        </div>
      </div>
      {(state==='sending'||state==='success'||state==='stored')&&<div ref={statusRef} tabIndex={-1} role="status" aria-live="polite" aria-atomic="true" aria-busy={state==='sending'} className="lg:col-span-2 flex min-h-[500px] flex-col items-center justify-center border border-[#c7b28d] bg-white px-6 py-16 text-center shadow-[0_22px_60px_rgba(18,32,39,0.06)] focus:outline-none md:px-12">
        <div aria-hidden="true" className="mb-9 flex h-24 w-24 items-center justify-center rounded-full border border-[#c7b28d] bg-[#f8f7f3] text-[#80663c]">
          {state==='sending'?<Loader2 size={40} className="motion-safe:animate-spin"/>:<svg viewBox="0 0 52 52" className="h-14 w-14" fill="none" stroke="currentColor" strokeWidth="2.5"><path className="career-success-check" d="m13 27 9 9 18-20"/></svg>}
        </div>
        <p className="mb-5 text-[11px] font-semibold uppercase tracking-[.22em] text-[#97794a]">BOSPHORAS</p>
        <h3 className="font-serif text-3xl leading-tight md:text-4xl">{state==='sending'?copy.sending:applicationCopy.successTitle}</h3>
        {state!=='sending'&&<>
          <p className="mt-6 max-w-lg text-[15px] leading-8 text-[#56636a]">{applicationCopy.successBody}</p>
          {state==='stored'&&<p className="mt-7 border border-[#d6bd91] bg-[#faf5eb] p-4 text-sm leading-7 text-[#75552e]">{applicationCopy.mailPending}</p>}
          {reference&&<p className="mt-8 break-all border-t border-[#e3e3de] pt-6 text-xs leading-6 text-[#6a7477]">{applicationCopy.applicationRef}<br/><span dir="ltr">{reference}</span></p>}
        </>}
      </div>}
      {state!=='success'&&state!=='stored'&&<form onSubmit={submit} encType="multipart/form-data" aria-busy={state==='sending'} className={(state==='sending'?'hidden ':'')+"space-y-6 border border-[#e3e3de] bg-white p-6 shadow-[0_22px_60px_rgba(18,32,39,0.04)] md:p-9"}>
        <label className="block text-sm font-medium text-[#253742]">
          <span>{applicationCopy.languageLabel}</span>
          <select aria-label={applicationCopy.languageLabel} value={language} onChange={event=>setLanguage(event.target.value as CareerLocale)} className="mt-2 block h-12 w-full rounded-none border border-[#cbd0d1] bg-white px-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#a58a5e]">
            {careerLanguages.map(code=><option key={code} value={code} lang={code}>{careerLanguageNames[code]}</option>)}
          </select>
        </label>
        <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true"/>
        <input type="hidden" name="locale" value={language}/>
        <div className="grid gap-6 md:grid-cols-2">
          <Field name="full_name" label={copy.name} required maxLength={140} autoComplete="name"/>
          <Field name="email" type="email" label={copy.email} required maxLength={254} autoComplete="email"/>
          <Field name="phone" type="tel" label={copy.phone} maxLength={50} autoComplete="tel"/>
          <Field name="spoken_languages" label={copy.languages} required maxLength={180} placeholder="C2, C1, B2…"/>
        </div>
        <label className="block text-sm font-medium text-[#253742]">
          <span>{copy.area} *</span>
          <select name="role_area" required defaultValue="" className="mt-2 block h-12 w-full rounded-none border border-[#cbd0d1] bg-white px-3 text-sm text-[#1d303b] focus:border-[#a58a5e] focus:outline-none focus:ring-1 focus:ring-[#a58a5e]">
            <option value="" disabled>{copy.select}</option>
            {careerAreas.map((value,i)=><option key={value} value={value}>{names[i]}</option>)}
          </select>
        </label>
        <label className="block text-sm font-medium text-[#253742]">
          <span>{copy.experience} *</span>
          <textarea name="experience_summary" required minLength={30} maxLength={2000} rows={5} className="mt-2 block w-full resize-y rounded-none border border-[#cbd0d1] bg-white px-3 py-3 text-sm leading-6 focus:border-[#a58a5e] focus:outline-none focus:ring-1 focus:ring-[#a58a5e]"/>
        </label>
        <div className="border-t-2 border-[#c7b28d] bg-[#f8f7f3] p-5 md:p-6">
          <label htmlFor="personal-perspective" className="block font-serif text-2xl leading-8 text-[#253742]">{perspectiveCopy.label}</label>
          <p id="personal-perspective-invitation" className="mt-3 text-sm leading-7 text-[#56636a]">{perspectiveCopy.invitation}</p>
          <textarea id="personal-perspective" name="personal_perspective" maxLength={1500} rows={5} aria-describedby="personal-perspective-invitation personal-perspective-note" className="mt-4 block w-full resize-y rounded-none border border-[#cbd0d1] bg-white px-3 py-3 text-sm leading-6 focus:border-[#a58a5e] focus:outline-none focus:ring-1 focus:ring-[#a58a5e]"/>
          <p id="personal-perspective-note" className="mt-2 text-xs leading-6 text-[#6d787d]">{perspectiveCopy.note}</p>
        </div>
        <Field name="linkedin_url" label={copy.profile} type="url" maxLength={400} placeholder="https://"/>
        <label className="block text-sm font-medium text-[#253742]">
          <span>{copy.cv}</span>
          <input name="cv" type="file" accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document" className="mt-2 block w-full border border-[#cbd0d1] bg-white px-3 py-3 text-sm text-[#55636b] file:me-4 file:border-0 file:bg-[#eef0ec] file:px-3 file:py-2 file:text-xs file:font-semibold file:text-[#23353c]"/>
          <span className="mt-2 block text-xs font-normal leading-5 text-[#6d787d]">{copy.cvNote}</span>
        </label>
        <label className="flex items-start gap-3 text-[13px] leading-6 text-[#4f5d64]">
          <input name="consent" type="checkbox" required value="yes" className="mt-[6px] h-4 w-4 accent-[#19313c]"/>
          <span>{copy.consent}</span>
        </label>
        <button type="submit" disabled={state==='sending'} className="inline-flex min-h-12 w-full items-center justify-center gap-3 bg-[#152e3a] px-6 py-3 text-xs font-semibold uppercase tracking-[.15em] text-white transition hover:bg-[#264553] disabled:opacity-50">
          {state==='sending'?copy.sending:copy.submit}<ArrowRight size={16}/>
        </button>
        <div ref={errorRef} tabIndex={-1} aria-live="polite" role="status" className="min-h-6 text-sm leading-6 focus:outline-none">
          {state==='error'&&<p className="text-[#a2443d]">{copy.error}</p>}
        </div>
      </form>}
    </section>
    <style jsx>{`
      .career-success-check { stroke-dasharray: 50; stroke-dashoffset: 0; }
      @media (prefers-reduced-motion: no-preference) {
        .career-success-check { animation: career-check .65s ease-out both; }
        @keyframes career-check { from { stroke-dashoffset: 50; } to { stroke-dashoffset: 0; } }
      }
    `}</style>
  </main>;
}

function Field({name,label,required=false,type='text',maxLength,autoComplete,placeholder}:{
  name:string;label:string;required?:boolean;type?:string;maxLength?:number;autoComplete?:string;placeholder?:string
}){
  return <label className="block text-sm font-medium text-[#253742]">
    <span>{label}{required?' *':''}</span>
    <input name={name} type={type} required={required} maxLength={maxLength} autoComplete={autoComplete} placeholder={placeholder} className="mt-2 block h-12 w-full rounded-none border border-[#cbd0d1] bg-white px-3 text-sm text-[#1d303b] placeholder:text-[#9ca6a8] focus:border-[#a58a5e] focus:outline-none focus:ring-1 focus:ring-[#a58a5e]"/>
  </label>;
}
