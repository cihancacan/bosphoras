// @ts-nocheck
'use client';

import { useEffect, useMemo, useState } from 'react';
import { Check, ChevronLeft, ChevronRight, DownloadCloud, ExternalLink, Loader2, RefreshCcw } from 'lucide-react';
import { getPortalSupabase } from '@/lib/portalSupabase';

type DeskLocale='fr'|'en'|'ru';

function t(locale:DeskLocale){
  if(locale==='en')return{
    title:'Istanbul partner catalogue',sub:'Browse the partner catalogue page by page. Nothing is public until you explicitly select and import it.',
    page:'Page',prev:'Previous',next:'Next',refresh:'Refresh',selected:'selected',import:'Import selection as drafts',importing:'Importing',
    imported:'Already in Bosphoras',keep:'Keep',remove:'Remove',source:'Open source',empty:'No property found on this page.',
    success:'Imported as an unpublished Bosphoras draft.',failed:'Import failed',limit:'Select up to 12 properties per batch.',
    hidden:'Imported properties remain offline until you publish them from the Bosphoras inventory.',
  };
  if(locale==='ru')return{
    title:'Каталог партнёра Istanbul',sub:'Просматривайте каталог партнёра по страницам. Ничего не публикуется, пока вы сами не выберете и не импортируете объект.',
    page:'Страница',prev:'Назад',next:'Далее',refresh:'Обновить',selected:'выбрано',import:'Импортировать выбранное в черновики',importing:'Импорт',
    imported:'Уже в Bosphoras',keep:'Оставить',remove:'Убрать',source:'Открыть источник',empty:'На этой странице объекты не найдены.',
    success:'Импортировано как неопубликованный черновик Bosphoras.',failed:'Ошибка импорта',limit:'До 12 объектов за одну операцию.',
    hidden:'Импортированные объекты остаются скрытыми, пока вы не опубликуете их из каталога Bosphoras.',
  };
  return{
    title:'Catalogue partenaire Istanbul',sub:'Parcourez le catalogue partenaire page par page. Rien n’est publié tant que vous n’avez pas sélectionné puis importé un bien.',
    page:'Page',prev:'Précédente',next:'Suivante',refresh:'Actualiser',selected:'sélectionné(s)',import:'Importer la sélection en brouillons',importing:'Import en cours',
    imported:'Déjà dans Bosphoras',keep:'Garder',remove:'Retirer',source:'Ouvrir la source',empty:'Aucun bien trouvé sur cette page.',
    success:'Importé comme brouillon Bosphoras non publié.',failed:'Échec de l’import',limit:'Maximum 12 biens par lot.',
    hidden:'Les biens importés restent hors ligne jusqu’à leur publication depuis l’inventaire Bosphoras.',
  };
}
function money(value:any,currency='USD',locale:DeskLocale='fr'){
  if(value===null||value===undefined||!Number.isFinite(Number(value)))return '—';
  try{return new Intl.NumberFormat(locale==='ru'?'ru-RU':locale==='en'?'en-GB':'fr-FR',{style:'currency',currency:currency||'USD',maximumFractionDigits:0}).format(Number(value));}
  catch{return Number(value).toLocaleString()+' '+currency;}
}
function local(value=''){return{fr:value,en:value,ru:value,ar:value};}
function slugify(value=''){
  return String(value).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim().replace(/[^a-z0-9\u0400-\u04ff\u0600-\u06ff]+/g,'-').replace(/^-+|-+$/g,'').slice(0,95);
}
function localized(value:any,locale:DeskLocale){
  if(!value)return''; if(typeof value==='string')return value;
  return value?.[locale]||value?.fr||value?.en||value?.ru||Object.values(value||{})[0]||'';
}

export function PartnerCatalogPicker({locale='fr',user,listings=[],reload}:{locale?:DeskLocale;user:any;listings?:any[];reload?:()=>void}){
  const l=(['fr','en','ru'].includes(locale)?locale:'fr') as DeskLocale;
  const c=t(l);
  const supabase=getPortalSupabase();
  const [page,setPage]=useState(1);
  const [pageInput,setPageInput]=useState('1');
  const [items,setItems]=useState<any[]>([]);
  const [hasNext,setHasNext]=useState(true);
  const [busy,setBusy]=useState(false);
  const [message,setMessage]=useState('');
  const [selected,setSelected]=useState<Record<string,any>>({});
  const [status,setStatus]=useState<Record<string,{state:string;text?:string}>>({});

  const existing=useMemo(()=>new Set((listings||[]).flatMap((x:any)=>[x.source_url,x.external_id].filter(Boolean))),[listings]);

  async function headers(){
    const {data}=await supabase.auth.getSession();
    const token=data.session?.access_token;
    if(!token)throw new Error('Session expirée.');
    return {Authorization:`Bearer ${token}`,'Content-Type':'application/json'};
  }

  async function load(target=page){
    setBusy(true);setMessage('');
    try{
      const h=await headers();
      const response=await fetch(`/api/property-desk/source-catalog?page=${target}`,{headers:h,cache:'no-store'});
      const data=await response.json();
      if(!response.ok)throw new Error(data.error||'Catalogue indisponible.');
      setPage(data.page||target);setPageInput(String(data.page||target));setItems(data.items||[]);setHasNext(Boolean(data.hasNext));
    }catch(error:any){setMessage(error?.message||'Catalogue indisponible.');}
    finally{setBusy(false);}
  }
  useEffect(()=>{load(1);},[]);

  function toggle(item:any){
    if(existing.has(item.sourceUrl)||existing.has(item.externalId))return;
    setSelected(prev=>{
      const next={...prev};
      if(next[item.sourceUrl])delete next[item.sourceUrl];
      else{
        if(Object.keys(next).length>=12){setMessage(c.limit);return prev;}
        next[item.sourceUrl]=item;
      }
      return next;
    });
  }

  async function importOne(item:any,h:any){
    setStatus(prev=>({...prev,[item.sourceUrl]:{state:'loading'}}));
    try{
      if(existing.has(item.sourceUrl)||existing.has(item.externalId)){
        setStatus(prev=>({...prev,[item.sourceUrl]:{state:'success',text:c.imported}}));return;
      }
      const extractResponse=await fetch('/api/property-desk/import-url',{method:'POST',headers:h,body:JSON.stringify({url:item.sourceUrl,copyImages:true})});
      const extract=await extractResponse.json();
      if(!extractResponse.ok)throw new Error(extract.error||c.failed);
      const base=extract.data||{};
      let translated:any=null;
      try{
        const trResponse=await fetch('/api/property-desk/translate-draft',{method:'POST',headers:h,body:JSON.stringify({data:base,importJobId:extract.importJobId||null})});
        const tr=await trResponse.json();
        if(trResponse.ok&&tr.data)translated=tr.data;
      }catch{}
      const ai=translated||{};
      const title=ai.title||local(base.title||item.title||'Istanbul property');
      const summary=ai.summary||local(base.summary||'');
      const description=ai.description||local(base.description||base.rawText?.slice(0,6000)||'');
      const seoTitle=ai.seoTitle||title;
      const seoDescription=ai.seoDescription||summary;
      const sourceId=item.sourceId||String(Date.now());
      const slugs:any={};
      for(const lang of ['fr','en','ru','ar'])slugs[lang]=`${slugify(title?.[lang]||title?.fr||item.title)}-${sourceId}`;
      const plan=Array.isArray(ai.paymentPlan)?ai.paymentPlan:(Array.isArray(base.paymentPlan)?base.paymentPlan:[]);
      const p=Number(ai.price??base.price??item.price);
      const currency=ai.currency||base.currency||item.currency||'USD';
      const firstPct=Number(plan?.[0]?.percentage||0);
      const entryCapital=Number(ai.entryCapital)||((Number.isFinite(p)&&p>0&&firstPct>0)?Math.round(p*firstPct/100):null);

      const row:any={
        external_id:item.externalId||`IPFS-${sourceId}`,
        published:false,featured:false,status:'available',collection:'selected-investment',transaction_type:'sale',
        property_type:ai.propertyType||(/villa/i.test(item.title)?'villa':/penthouse/i.test(item.title)?'penthouse':'apartment'),
        country_code:ai.countryCode||base.countryCode||'TR',country_name:ai.countryName||base.countryName||'Turkey',
        city:ai.city||base.city||'istanbul',city_name:ai.cityName||base.cityName||'Istanbul',district:ai.district||base.district||'À compléter',
        slug_fr:slugs.fr,slug_en:slugs.en,slug_ru:slugs.ru,slug_ar:slugs.ar,
        title,summary,description,seo_title:seoTitle,seo_description:seoDescription,
        currency,total_price:Number.isFinite(p)&&p>0?p:null,price_on_request:!(Number.isFinite(p)&&p>0),
        entry_capital:entryCapital,surface_m2:Number(ai.surfaceM2??base.surfaceM2)||null,bedrooms:Number(ai.bedrooms??base.bedrooms)||null,bathrooms:Number(ai.bathrooms)||null,
        delivery:ai.delivery||local(base.delivery||''),developer:ai.developer||base.developer||null,
        payment_plan:plan,payment_plan_enabled:plan.length>0,payment_interest_mode:/0%|interest[- ]free/i.test(String(base.rawText||''))?'interest_free':'not_specified',
        payment_interest_rate:null,cash_discount_pct:null,cash_price:null,installment_price:null,
        highlights:Array.isArray(ai.highlights)?ai.highlights:[],technical_notes:Array.isArray(ai.technicalNotes)?ai.technicalNotes:[],
        strengths:Array.isArray(ai.strengths)?ai.strengths:[],watchpoints:Array.isArray(ai.watchpoints)?ai.watchpoints:[],
        images:base.images||[],hero_image:base.images?.[0]||item.image||null,
        verified_at:new Date().toISOString(),published_at:null,created_by:user.id,approved_by:user.id,approved_at:new Date().toISOString(),review_status:'approved',
        source_url:item.sourceUrl,source_host:'www.istanbulpropertyforsale.com',source_last_checked_at:new Date().toISOString(),source_partner_name:'Istanbul Property For Sale',
      };
      const {data:created,error}=await supabase.from('property_listings').insert(row).select('id').single();
      if(error)throw error;
      if(extract.importJobId&&created?.id)await supabase.from('property_import_jobs').update({status:'draft_created',listing_id:created.id}).eq('id',extract.importJobId);
      setStatus(prev=>({...prev,[item.sourceUrl]:{state:'success',text:c.success}}));
    }catch(error:any){
      setStatus(prev=>({...prev,[item.sourceUrl]:{state:'error',text:error?.message||c.failed}}));
    }
  }

  async function importSelected(){
    const batch=Object.values(selected);
    if(!batch.length)return;
    setBusy(true);setMessage('');
    try{
      const h=await headers();
      for(const item of batch)await importOne(item,h);
      setSelected({});
      await reload?.();
      await load(page);
    }finally{setBusy(false);}
  }

  const count=Object.keys(selected).length;
  return <section className="space-y-4">
    <div className="border border-[#d9e1e8] bg-[#f7f9fb] p-5">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div><p className="text-[0.65rem] font-bold uppercase tracking-[0.12em] text-[#315d7c]">IstanbulPropertyForSale.com</p><h2 className="mt-1 text-2xl font-semibold text-[#162334]">{c.title}</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-[#687685]">{c.sub}</p></div>
        <button disabled={busy||!count} onClick={importSelected} className="inline-flex min-h-[44px] items-center gap-2 bg-[#12304a] px-5 text-sm font-semibold text-white disabled:opacity-40">{busy?<Loader2 size={16} className="animate-spin"/>:<DownloadCloud size={16}/>} {busy?c.importing:c.import} · {count}</button>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-[#687685]"><Check size={14} className="text-[#315f52]"/><span>{c.hidden}</span><span>·</span><strong>{c.limit}</strong></div>
    </div>

    <div className="flex flex-wrap items-center justify-between gap-3 border border-[#d9e1e8] bg-white p-3">
      <div className="flex items-center gap-2">
        <button disabled={busy||page<=1} onClick={()=>load(page-1)} className="inline-flex min-h-[38px] items-center gap-1 border border-[#cfd8e3] px-3 text-sm disabled:opacity-40"><ChevronLeft size={15}/>{c.prev}</button>
        <label className="flex items-center gap-2 text-sm text-[#526272]">{c.page}<input value={pageInput} onChange={(e)=>setPageInput(e.target.value.replace(/[^0-9]/g,''))} onKeyDown={(e)=>{if(e.key==='Enter')load(Math.max(1,Number(pageInput)||1));}} className="h-[38px] w-20 border border-[#cfd8e3] px-2 text-center"/></label>
        <button disabled={busy||!hasNext} onClick={()=>load(page+1)} className="inline-flex min-h-[38px] items-center gap-1 border border-[#cfd8e3] px-3 text-sm disabled:opacity-40">{c.next}<ChevronRight size={15}/></button>
        <button disabled={busy} onClick={()=>load(page)} className="inline-flex h-[38px] w-[38px] items-center justify-center border border-[#cfd8e3]" aria-label={c.refresh}><RefreshCcw size={15} className={busy?'animate-spin':''}/></button>
      </div>
      <strong className="text-sm text-[#315d7c]">{count} {c.selected}</strong>
    </div>

    {message?<div className="border border-[#ead8bc] bg-[#fff9ed] px-4 py-3 text-sm text-[#7d6337]">{message}</div>:null}

    <div className="grid gap-3 lg:grid-cols-2">
      {items.map(item=>{
        const already=existing.has(item.sourceUrl)||existing.has(item.externalId);
        const checked=Boolean(selected[item.sourceUrl]);
        const st=status[item.sourceUrl];
        return <article key={item.sourceUrl} className={`grid grid-cols-[110px_minmax(0,1fr)] gap-4 border p-3 ${checked?'border-[#315f52] bg-[#f4f8f6]':'border-[#d9e1e8] bg-white'}`}>
          <div className="aspect-[4/3] overflow-hidden bg-[#edf0f2]">{item.image?<img src={item.image} alt="" className="h-full w-full object-cover"/>:null}</div>
          <div className="min-w-0">
            <div className="flex items-start justify-between gap-3"><div><span className="text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-[#7b8794]">{item.externalId}</span><h3 className="mt-1 line-clamp-2 text-sm font-semibold leading-5">{item.title}</h3></div><strong className="shrink-0 text-sm text-[#12304a]">{money(item.price,item.currency,l)}</strong></div>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              {already?<span className="bg-[#e7f1eb] px-3 py-2 text-xs font-semibold text-[#315f52]">{c.imported}</span>:<button disabled={busy} onClick={()=>toggle(item)} className={`min-h-[36px] px-3 text-xs font-semibold ${checked?'bg-[#315f52] text-white':'border border-[#315f52] text-[#315f52]'}`}>{checked?c.remove:c.keep}</button>}
              <a href={item.sourceUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-[36px] items-center gap-1 border border-[#cfd8e3] px-3 text-xs text-[#526272]">{c.source}<ExternalLink size={12}/></a>
            </div>
            {st?<p className={`mt-2 text-xs ${st.state==='error'?'text-[#9b4444]':st.state==='success'?'text-[#315f52]':'text-[#687685]'}`}>{st.state==='loading'?c.importing:st.text}</p>:null}
          </div>
        </article>;
      })}
    </div>
    {!busy&&!items.length?<p className="border border-dashed border-[#cfd8e3] bg-[#fafbfc] p-8 text-center text-sm text-[#7b8794]">{c.empty}</p>:null}
  </section>;
}
