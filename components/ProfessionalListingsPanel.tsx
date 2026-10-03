// @ts-nocheck
'use client';

import { useMemo, useState } from 'react';
import { AlertTriangle, CheckCircle2, ChevronRight, Eye, FileClock, Globe2, Image as ImageIcon, Pencil, Plus, Search, Store, Trash2, XCircle } from 'lucide-react';
import { getPortalSupabase } from '@/lib/portalSupabase';
import { AdminListingEditor } from '@/components/AdminListingEditor';
import { ListingSubmissionEditor } from '@/components/ListingSubmissionEditor';
import { PartnerCatalogPicker } from '@/components/PartnerCatalogPicker';

type DeskLocale='fr'|'en'|'ru';

function copy(locale:DeskLocale){
  if(locale==='en')return{
    title:'Properties & projects',kicker:'Property inventory',newListing:'New listing',
    inventory:'Properties',submissions:'Submissions',all:'All',online:'Online',offline:'Offline / drafts',
    search:'Search reference, city, district, developer…',results:'result(s)',
    selectTitle:'Open a property',selectText:'The list stays compact. Click a property to see seller information, visibility, publication controls and actions.',
    published:'Published',unpublished:'Offline',revision:'revision',publicPage:'Public page',preview:'Preview',
    edit:'Edit',propose:'Propose changes',publish:'Publish',unpublish:'Unpublish',delete:'Delete',
    seller:'Seller information · internal',sellerMissing:'Seller information incomplete',sellerName:'Seller',
    contact:'Contact',asking:'Seller asking price',floor:'Minimum',discount:'max discount',
    visibility:'Internal visibility',ownerOnly:'Owner partner only',allAgents:'Entire internal team',neverPublic:'Never public.',
    pending:'Review pending',changes:'Changes requested',draft:'Draft',approved:'Approved',rejected:'Rejected',
    noProperties:'No property assigned yet.',noSubmissions:'No submissions.',continue:'Continue',
    rule:'Bosphoras rule: partner-created or edited listings stay as drafts/submissions until admin approval. Changes never affect the public version before approval.',
    modifyTitle:'Edit listing',modifyKicker:'Administrator control',partnerEditor:'Partner editor',validation:'Approval required',
    pendingCount:'awaiting review',incompleteCount:'seller file(s) incomplete',offlineCount:'offline',
    details:'Property file',commercial:'Commercial data',publication:'Publication',source:'Owner / source',
    removeConfirm:'Remove this listing from active inventory? It will be unpublished and moved to the internal trash.',
    statusFilter:'Status',sellerAccess:'Seller access',
  };
  if(locale==='ru')return{
    title:'Объекты и проекты',kicker:'Каталог объектов',newListing:'Новый объект',
    inventory:'Объекты',submissions:'Заявки',all:'Все',online:'Опубликованные',offline:'Не опубликовано / черновики',
    search:'Поиск по номеру, городу, району, застройщику…',results:'результат(ов)',
    selectTitle:'Откройте объект',selectText:'Список остается компактным. Нажмите на объект, чтобы увидеть данные продавца, доступ, публикацию и действия.',
    published:'Опубликован',unpublished:'Не опубликован',revision:'версия',publicPage:'Публичная страница',preview:'Предпросмотр',
    edit:'Изменить',propose:'Предложить изменение',publish:'Опубликовать',unpublish:'Снять с публикации',delete:'Удалить',
    seller:'Данные продавца · внутренние',sellerMissing:'Данные продавца не заполнены',sellerName:'Продавец',
    contact:'Контакт',asking:'Цена продавца',floor:'Минимум',discount:'макс. скидка',
    visibility:'Внутренняя видимость',ownerOnly:'Только партнер-владелец',allAgents:'Вся внутренняя команда',neverPublic:'Никогда не публикуется.',
    pending:'Ожидает проверки',changes:'Нужны изменения',draft:'Черновик',approved:'Одобрено',rejected:'Отклонено',
    noProperties:'Нет назначенных объектов.',noSubmissions:'Нет заявок.',continue:'Продолжить',
    rule:'Правило Bosphoras: объект, созданный или измененный партнером, остается черновиком/заявкой до одобрения администратора. Публичная версия не меняется до одобрения.',
    modifyTitle:'Редактировать объект',modifyKicker:'Контроль администратора',partnerEditor:'Редактор партнера',validation:'Требуется одобрение',
    pendingCount:'ожидают проверки',incompleteCount:'карточек продавца не заполнено',offlineCount:'не опубликовано',
    details:'Карточка объекта',commercial:'Коммерческие данные',publication:'Публикация',source:'Владелец / источник',
    removeConfirm:'Удалить объект из активного каталога? Он будет снят с публикации и перемещен во внутреннюю корзину.',
    statusFilter:'Статус',sellerAccess:'Доступ к продавцу',
  };
  return{
    title:'Biens & projets',kicker:'Inventaire immobilier',newListing:'Nouvelle annonce',
    inventory:'Biens',submissions:'Soumissions',all:'Toutes',online:'En ligne',offline:'Hors ligne / brouillons',
    search:'Rechercher une référence, ville, quartier, promoteur…',results:'résultat(s)',
    selectTitle:'Ouvrez un bien',selectText:'La liste reste compacte. Cliquez sur un bien pour afficher le vendeur, la visibilité, la publication et toutes les actions.',
    published:'Publié',unpublished:'Hors ligne',revision:'révision',publicPage:'Page publique',preview:'Aperçu',
    edit:'Modifier',propose:'Proposer une modification',publish:'Publier',unpublish:'Dépublier',delete:'Supprimer',
    seller:'Informations vendeur · interne',sellerMissing:'Informations vendeur incomplètes',sellerName:'Vendeur',
    contact:'Contact',asking:'Prix vendeur',floor:'Minimum',discount:'remise max',
    visibility:'Visibilité interne',ownerOnly:'Partenaire propriétaire uniquement',allAgents:'Toute l’équipe interne',neverPublic:'Jamais visible publiquement.',
    pending:'Validation en attente',changes:'Modifications demandées',draft:'Brouillon',approved:'Approuvée',rejected:'Refusée',
    noProperties:'Aucun bien attribué pour le moment.',noSubmissions:'Aucune soumission.',continue:'Continuer',
    rule:'Règle Bosphoras : une annonce créée ou modifiée par un partenaire reste en brouillon/soumission jusqu’à validation de l’administrateur. Une modification ne change jamais la version publique avant approbation.',
    modifyTitle:'Modifier une annonce',modifyKicker:'Contrôle administrateur',partnerEditor:'Éditeur partenaire',validation:'Validation obligatoire',
    pendingCount:'en attente de validation',incompleteCount:'fiche(s) vendeur incomplète(s)',offlineCount:'hors ligne',
    details:'Dossier du bien',commercial:'Données commerciales',publication:'Publication',source:'Propriétaire / source',
    removeConfirm:'Retirer cette annonce de l’inventaire actif ? Elle sera dépubliée et placée en corbeille interne.',
    statusFilter:'Statut',sellerAccess:'Accès vendeur',
  };
}

function money(value:any,currency='EUR',locale:DeskLocale='fr'){
  const n=Number(value||0);
  return new Intl.NumberFormat(locale==='ru'?'ru-RU':locale==='en'?'en-GB':'fr-FR',{style:'currency',currency:currency||'EUR',maximumFractionDigits:0}).format(Number.isFinite(n)?n:0);
}

function listingToPayload(l:any){
  return{
    externalId:l.external_id,featured:l.featured,status:l.status,collection:l.collection,transaction:l.transaction_type,
    propertyType:l.property_type,countryCode:l.country_code||'TR',countryName:l.country_name||'Turkey',city:l.city,cityName:l.city_name||l.city,district:l.district,
    slugs:{fr:l.slug_fr,en:l.slug_en,ru:l.slug_ru,ar:l.slug_ar},title:l.title,summary:l.summary,description:l.description,seoTitle:l.seo_title,seoDescription:l.seo_description,
    currency:l.currency,totalPrice:l.total_price,priceOnRequest:l.price_on_request,entryCapital:l.entry_capital,surfaceM2:l.surface_m2,bedrooms:l.bedrooms,bathrooms:l.bathrooms,
    delivery:l.delivery,developer:l.developer,partner:l.partner,paymentPlan:l.payment_plan,paymentPlanEnabled:l.payment_plan_enabled!==false,paymentInterestMode:l.payment_interest_mode||'not_specified',
    paymentInterestRate:l.payment_interest_rate,cashDiscountPct:l.cash_discount_pct,cashPrice:l.cash_price,installmentPrice:l.installment_price,
    highlights:l.highlights,technicalNotes:l.technical_notes,strengths:l.strengths,watchpoints:l.watchpoints,images:l.images,heroImage:l.hero_image,verifiedAt:l.verified_at,
    sourceUrl:l.source_url||'',sourceHost:l.source_host||'',
  };
}

function localTitle(l:any,locale:DeskLocale){
  return l?.title?.[locale]||l?.title?.fr||l?.external_id||'—';
}

function submissionLabel(status:string,c:any){
  if(status==='submitted')return c.pending;
  if(status==='changes_requested')return c.changes;
  if(status==='approved')return c.approved;
  if(status==='rejected')return c.rejected;
  return c.draft;
}

export function ProfessionalListingsPanel({
  locale='fr',isAdmin,user,profile,listings,listingInternal,submissions,showNew,setShowNew,
  editingSubmission,setEditingSubmission,editingListing,setEditingListing,reload
}:any){
  const l=(['fr','en','ru'].includes(locale)?locale:'fr') as DeskLocale;
  const c=copy(l);
  const supabase=getPortalSupabase();
  const [mode,setMode]=useState<'inventory'|'submissions'|'partner'>('inventory');
  const [selectedId,setSelectedId]=useState<string|null>(null);
  const [selectedSubmissionId,setSelectedSubmissionId]=useState<string|null>(null);
  const [search,setSearch]=useState('');
  const [filter,setFilter]=useState('all');
  const internalMap=useMemo(()=>new Map((listingInternal||[]).map((row:any)=>[row.listing_id,row])),[listingInternal]);

  const filtered=useMemo(()=>listings.filter((item:any)=>{
    if(filter==='published'&&!item.published)return false;
    if(filter==='unpublished'&&item.published)return false;
    const q=search.trim().toLowerCase();
    if(!q)return true;
    return [item.external_id,item.title?.fr,item.title?.en,item.title?.ru,item.country_name,item.city,item.city_name,item.district,item.developer].filter(Boolean).join(' ').toLowerCase().includes(q);
  }),[listings,filter,search]);

  const filteredSubmissions=useMemo(()=>submissions.filter((item:any)=>{
    if(filter==='published'&&item.status!=='approved')return false;
    if(filter==='unpublished'&&item.status==='approved')return false;
    const q=search.trim().toLowerCase();
    if(!q)return true;
    return [item.payload?.externalId,item.payload?.title?.fr,item.payload?.title?.en,item.payload?.title?.ru,item.payload?.cityName,item.payload?.city,item.payload?.district,item.status].filter(Boolean).join(' ').toLowerCase().includes(q);
  }),[submissions,filter,search]);

  const selected=listings.find((x:any)=>x.id===selectedId)||null;
  const selectedInfo=selected?internalMap.get(selected.id):null;
  const selectedSubmission=submissions.find((x:any)=>x.id===selectedSubmissionId)||null;
  const pendingCount=submissions.filter((x:any)=>x.status==='submitted').length;
  const incompleteCount=listings.filter((x:any)=>{
    const info=internalMap.get(x.id);
    return !info||!(info.seller_name||info.seller_company||info.seller_phone||info.seller_whatsapp||info.seller_email);
  }).length;
  const offlineCount=listings.filter((x:any)=>!x.published).length;

  async function createAdminDraft(){
    const stamp=Date.now().toString(36);
    const row:any={
      external_id:`ADM-${stamp.toUpperCase()}`,published:false,featured:false,status:'available',collection:'selected-investment',transaction_type:'sale',property_type:'apartment',
      country_code:'TR',country_name:'Turkey',city:'istanbul',city_name:'Istanbul',district:l==='ru'?'Заполнить':l==='en'?'To complete':'À compléter',
      slug_fr:`nouvelle-annonce-${stamp}`,slug_en:`new-listing-${stamp}`,slug_ru:`new-listing-${stamp}`,slug_ar:`new-listing-${stamp}`,
      title:{fr:'Nouvelle annonce',en:'New listing',ru:'Новый объект',ar:'عقار جديد'},summary:{fr:'',en:'',ru:'',ar:''},description:{fr:'',en:'',ru:'',ar:''},
      seo_title:{fr:'',en:'',ru:'',ar:''},seo_description:{fr:'',en:'',ru:'',ar:''},currency:'EUR',images:[],review_status:'approved',created_by:user.id,
    };
    const {data,error}=await supabase.from('property_listings').insert(row).select('*').single();
    if(error){alert(error.message);return;}
    await reload();setEditingListing(data);
  }

  async function deleteListing(item:any){
    if(!isAdmin)return;
    if(!window.confirm(c.removeConfirm))return;
    const {error}=await supabase.from('property_listings').update({published:false,published_at:null,deleted_at:new Date().toISOString(),deleted_by:user.id}).eq('id',item.id);
    if(error)alert(error.message);else{setSelectedId(null);reload();}
  }

  async function togglePublish(item:any){
    const next=!item.published;
    const {error}=await supabase.from('property_listings').update({published:next,published_at:next?new Date().toISOString():null}).eq('id',item.id);
    if(error)alert(error.message);else reload();
  }

  async function updateVisibility(scope:string){
    if(!isAdmin||!selected)return;
    const {error}=await supabase.from('property_listing_internal').update({access_scope:scope,updated_at:new Date().toISOString()}).eq('listing_id',selected.id);
    if(error)alert(error.message);else reload();
  }

  const editor=showNew||editingSubmission||editingListing;
  if(editingListing&&isAdmin)return <section><div className="mb-7"><p className="text-xs font-bold uppercase tracking-[0.22em] text-[#315d7c]">{c.modifyKicker}</p><h1 className="mt-2 text-4xl font-semibold tracking-[-0.04em]">{c.modifyTitle}</h1></div><AdminListingEditor listing={editingListing} reload={reload} onClose={()=>setEditingListing(null)}/></section>;
  if(editor&&!isAdmin)return <section><div className="mb-7"><p className="text-xs font-bold uppercase tracking-[0.22em] text-[#315d7c]">{c.validation}</p><h1 className="mt-2 text-4xl font-semibold tracking-[-0.04em]">{c.partnerEditor}</h1></div><ListingSubmissionEditor userId={user.id} listingId={editingListing?.id||editingSubmission?.listing_id||null} initialSubmission={editingSubmission||(editingListing?{status:'draft',payload:listingToPayload(editingListing)}:undefined)} onSaved={reload} onClose={()=>{setShowNew(false);setEditingSubmission(null);setEditingListing(null);}}/></section>;

  const discount=selectedInfo&&Number(selectedInfo.seller_asking_price)>0&&Number(selectedInfo.seller_floor_price)>0
    ?Math.max(0,((Number(selectedInfo.seller_asking_price)-Number(selectedInfo.seller_floor_price))/Number(selectedInfo.seller_asking_price))*100):null;
  const pendingForSelected=selected?submissions.filter((x:any)=>x.listing_id===selected.id&&x.status==='submitted'):[];

  return <section>
    <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
      <div><p className="text-xs font-bold uppercase tracking-[0.22em] text-[#315d7c]">{c.kicker}</p><h1 className="mt-2 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">{c.title}</h1></div>
      <button onClick={()=>isAdmin?createAdminDraft():setShowNew(true)} className="inline-flex min-h-[44px] items-center gap-2 bg-[#12304a] px-5 text-xs font-bold uppercase tracking-[0.1em] text-white"><Plus size={14}/>{c.newListing}</button>
    </div>

    {!isAdmin?<div className="mb-5 border border-[#d9e1e8] bg-[#f7f9fb] px-4 py-3 text-sm leading-6 text-[#526272]">{c.rule}</div>:null}

    <div className="mb-5 grid gap-px bg-[#d9e1e8] sm:grid-cols-3">
      <button onClick={()=>{setMode('submissions');setSelectedSubmissionId(null);}} className={`p-4 text-left ${pendingCount?'bg-[#fff6f0]':'bg-white'}`}><span className="text-[0.62rem] font-semibold uppercase tracking-[0.09em] text-[#75818b]">{c.pendingCount}</span><strong className={`mt-2 block text-2xl ${pendingCount?'text-[#a55a37]':''}`}>{pendingCount}</strong></button>
      <div className={incompleteCount?'bg-[#fff9ed] p-4':'bg-white p-4'}><span className="text-[0.62rem] font-semibold uppercase tracking-[0.09em] text-[#75818b]">{c.incompleteCount}</span><strong className="mt-2 block text-2xl">{incompleteCount}</strong></div>
      <div className="bg-white p-4"><span className="text-[0.62rem] font-semibold uppercase tracking-[0.09em] text-[#75818b]">{c.offlineCount}</span><strong className="mt-2 block text-2xl">{offlineCount}</strong></div>
    </div>

    <div className="mb-4 flex flex-wrap gap-2">
      <button onClick={()=>{setMode('inventory');setSelectedSubmissionId(null);}} className={`min-h-[40px] px-4 text-sm font-semibold ${mode==='inventory'?'bg-[#12304a] text-white':'border border-[#cfd8e3] bg-white text-[#526272]'}`}>{c.inventory} · {listings.length}</button>
      <button onClick={()=>{setMode('submissions');setSelectedId(null);}} className={`min-h-[40px] px-4 text-sm font-semibold ${mode==='submissions'?'bg-[#12304a] text-white':'border border-[#cfd8e3] bg-white text-[#526272]'}`}>{c.submissions} · {submissions.length}{pendingCount?` (${pendingCount})`:''}</button>
      {isAdmin?<button onClick={()=>{setMode('partner');setSelectedId(null);setSelectedSubmissionId(null);}} className={`min-h-[40px] px-4 text-sm font-semibold ${mode==='partner'?'bg-[#315f52] text-white':'border border-[#9fb9af] bg-white text-[#315f52]'}`}>Istanbul Partner Feed</button>:null}
    </div>

    {mode!=='partner'?<div className="mb-5 grid gap-2 border border-[#d9e1e8] bg-white p-3 md:grid-cols-[1fr_210px]">
      <label className="relative"><Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#7b8794]"/><input value={search} onChange={(e)=>setSearch(e.target.value)} placeholder={c.search} className="min-h-[40px] w-full border border-[#d9e1e8] pl-9 pr-3 text-sm"/></label>
      <select value={filter} onChange={(e)=>setFilter(e.target.value)} className="min-h-[40px] border border-[#d9e1e8] bg-white px-3 text-sm"><option value="all">{c.all}</option><option value="published">{c.online}</option><option value="unpublished">{c.offline}</option></select>
    </div>:null}

    {mode==='partner'&&isAdmin?<PartnerCatalogPicker locale={l} user={user} listings={listings} reload={reload}/>:mode==='inventory'?<div className="grid gap-5 xl:grid-cols-[420px_minmax(0,1fr)]">
      <aside className="border border-[#d9e1e8] bg-white">
        <div className="flex items-center justify-between border-b border-[#e7edf2] px-4 py-3"><strong className="text-sm">{c.inventory}</strong><span className="text-xs text-[#7a8690]">{filtered.length} {c.results}</span></div>
        <div className="max-h-[780px] overflow-y-auto">
          {filtered.map((item:any)=>{
            const info=internalMap.get(item.id);
            const hasSeller=Boolean(info&&(info.seller_name||info.seller_company||info.seller_phone||info.seller_whatsapp||info.seller_email));
            const pending=submissions.some((x:any)=>x.listing_id===item.id&&x.status==='submitted');
            return <button key={item.id} onClick={()=>setSelectedId(item.id)} className={`w-full border-b border-[#edf0f2] p-3 text-left transition ${selectedId===item.id?'bg-[#edf3f7]':'hover:bg-[#f8fafb]'}`}>
              <div className="flex gap-3">
                <div className="h-16 w-20 shrink-0 overflow-hidden bg-[#edf0f2]">{item.hero_image?<img src={item.hero_image} alt="" className="h-full w-full object-cover"/>:<div className="flex h-full items-center justify-center"><ImageIcon size={17} className="text-[#96a1a9]"/></div>}</div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2"><strong className="line-clamp-2 text-sm leading-5">{localTitle(item,l)}</strong><ChevronRight size={15} className="mt-1 shrink-0 text-[#9aa4ab]"/></div>
                  <p className="mt-1 truncate text-xs text-[#77838d]">{item.city_name||item.city} · {item.district||'—'} · {item.external_id}</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    <span className={`px-2 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.05em] ${item.published?'bg-[#e8f4ed] text-[#2f6d59]':'bg-[#eef0f2] text-[#68727a]'}`}>{item.published?c.published:c.unpublished}</span>
                    {pending?<span className="bg-[#fff0e7] px-2 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.05em] text-[#a15b37]">{c.pending}</span>:null}
                    {!hasSeller?<span className="bg-[#fff8e9] px-2 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.05em] text-[#8e6c27]">{c.sellerMissing}</span>:null}
                  </div>
                </div>
              </div>
            </button>;
          })}
          {!filtered.length?<p className="p-5 text-sm text-[#7b8794]">{c.noProperties}</p>:null}
        </div>
      </aside>

      <div className="min-w-0">
        {!selected?<div className="flex min-h-[440px] items-center justify-center border border-dashed border-[#cfd8e3] bg-[#fafbfc] p-8 text-center"><div><Store size={28} className="mx-auto text-[#8da0ad]"/><h2 className="mt-4 text-xl font-semibold">{c.selectTitle}</h2><p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#788590]">{c.selectText}</p></div></div>:<div className="space-y-5">
          <section className="border border-[#d9e1e8] bg-white">
            <div className="grid gap-5 p-5 md:grid-cols-[1fr_220px]">
              <div>
                <div className="flex flex-wrap gap-2"><span className={`px-2 py-1 text-[0.62rem] font-semibold uppercase ${selected.published?'bg-[#e8f4ed] text-[#2f6d59]':'bg-[#eef0f2] text-[#68727a]'}`}>{selected.published?c.published:c.unpublished}</span>{pendingForSelected.length?<span className="bg-[#fff0e7] px-2 py-1 text-[0.62rem] font-semibold uppercase text-[#a15b37]">{c.pending}</span>:null}</div>
                <p className="mt-3 text-[0.66rem] font-semibold uppercase tracking-[0.1em] text-[#315d7c]">{selected.country_name||selected.country_code} · {selected.city_name||selected.city} · {selected.district}</p>
                <h2 className="mt-2 text-3xl font-semibold tracking-[-0.035em]">{localTitle(selected,l)}</h2>
                <p className="mt-3 text-sm text-[#687685]">{selected.external_id} · {money(selected.total_price,selected.currency,l)} · {c.revision} {selected.revision||1}</p>
              </div>
              <div className="aspect-[4/3] overflow-hidden bg-[#edf0f2]">{selected.hero_image?<img src={selected.hero_image} alt="" className="h-full w-full object-cover"/>:<div className="flex h-full items-center justify-center"><ImageIcon size={22} className="text-[#96a1a9]"/></div>}</div>
            </div>
            <div className="flex flex-wrap gap-2 border-t border-[#e7edf2] p-4">
              <a href={'/espace/apercu?listing='+selected.id} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 border border-[#315d7c] bg-[#eef4f8] px-3 py-2 text-xs font-semibold uppercase text-[#315d7c]"><Eye size={13}/>{c.preview}</a>
              {selected.published&&selected.slug_fr?<a href={'/immobilier-turquie/'+selected.slug_fr} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 border border-[#2f6d59] px-3 py-2 text-xs font-semibold uppercase text-[#2f6d59]"><Globe2 size={13}/>{c.publicPage}</a>:null}
              {isAdmin?<><button onClick={()=>setEditingListing(selected)} className="inline-flex items-center gap-1.5 border border-[#12304a] px-3 py-2 text-xs font-semibold uppercase text-[#12304a]"><Pencil size={13}/>{c.edit}</button><button onClick={()=>togglePublish(selected)} className="border border-[#12304a] px-3 py-2 text-xs font-semibold uppercase">{selected.published?c.unpublish:c.publish}</button><button onClick={()=>deleteListing(selected)} className="inline-flex items-center gap-1.5 border border-[#b96363] px-3 py-2 text-xs font-semibold uppercase text-[#9b4444]"><Trash2 size={13}/>{c.delete}</button></>:<button onClick={()=>setEditingListing(selected)} className="inline-flex items-center gap-1.5 border border-[#12304a] px-3 py-2 text-xs font-semibold uppercase"><Pencil size={13}/>{c.propose}</button>}
            </div>
          </section>

          <section className="border border-[#d9e1e8] bg-white p-5">
            <div className="flex flex-wrap items-center justify-between gap-3"><div><p className="text-[0.66rem] font-semibold uppercase tracking-[0.1em] text-[#315d7c]">{c.commercial}</p><h3 className="mt-1 text-xl font-semibold">{c.seller}</h3></div>{selectedInfo&&isAdmin?<select value={selectedInfo.access_scope||'owner_only'} onChange={(e)=>updateVisibility(e.target.value)} className="min-h-[36px] border border-[#c8d4ce] bg-white px-2 text-xs"><option value="owner_only">{c.ownerOnly}</option><option value="all_agents">{c.allAgents}</option></select>:null}</div>
            {selectedInfo?<div className="mt-5 grid gap-px bg-[#dfe6e2] sm:grid-cols-2">
              <div className="bg-[#f8faf9] p-4"><span className="text-[0.62rem] uppercase tracking-[0.08em] text-[#7b8794]">{c.sellerName}</span><strong className="mt-1 block text-sm">{selectedInfo.seller_name||selectedInfo.seller_company||'—'}</strong></div>
              <div className="bg-[#f8faf9] p-4"><span className="text-[0.62rem] uppercase tracking-[0.08em] text-[#7b8794]">{c.contact}</span><strong className="mt-1 block text-sm">{selectedInfo.seller_whatsapp||selectedInfo.seller_phone||selectedInfo.seller_email||'—'}</strong></div>
              <div className="bg-[#f8faf9] p-4"><span className="text-[0.62rem] uppercase tracking-[0.08em] text-[#7b8794]">{c.asking}</span><strong className="mt-1 block text-sm">{selectedInfo.seller_asking_price?money(selectedInfo.seller_asking_price,selected.currency,l):'—'}</strong></div>
              <div className="bg-[#f8faf9] p-4"><span className="text-[0.62rem] uppercase tracking-[0.08em] text-[#7b8794]">{c.floor}</span><strong className="mt-1 block text-sm">{selectedInfo.seller_floor_price?money(selectedInfo.seller_floor_price,selected.currency,l):'—'}{discount!==null?` · ${c.discount} ${discount.toFixed(1)}%`:''}</strong></div>
              {selectedInfo.internal_notes?<div className="bg-[#f8faf9] p-4 sm:col-span-2"><span className="text-[0.62rem] uppercase tracking-[0.08em] text-[#7b8794]">Notes</span><p className="mt-1 text-sm leading-6">{selectedInfo.internal_notes}</p></div>:null}
            </div>:<div className="mt-4 border border-dashed border-[#d7dfdc] px-4 py-5 text-sm text-[#7b8794]">{c.sellerMissing}. {isAdmin?c.edit:''}</div>}
            {selectedInfo?<p className="mt-3 text-xs text-[#8a9691]">{c.visibility}: {selectedInfo.access_scope==='all_agents'?c.allAgents:c.ownerOnly}. {c.neverPublic}</p>:null}
          </section>
        </div>}
      </div>
    </div>:<div className="grid gap-5 xl:grid-cols-[420px_minmax(0,1fr)]">
      <aside className="border border-[#d9e1e8] bg-white">
        <div className="flex items-center justify-between border-b border-[#e7edf2] px-4 py-3"><strong className="text-sm">{c.submissions}</strong><span className="text-xs text-[#7a8690]">{filteredSubmissions.length} {c.results}</span></div>
        <div className="max-h-[780px] overflow-y-auto">
          {filteredSubmissions.map((item:any)=><button key={item.id} onClick={()=>setSelectedSubmissionId(item.id)} className={`w-full border-b border-[#edf0f2] p-4 text-left ${selectedSubmissionId===item.id?'bg-[#edf3f7]':'hover:bg-[#f8fafb]'}`}><div className="flex items-start justify-between gap-2"><div className="min-w-0"><span className={`text-[0.62rem] font-semibold uppercase tracking-[0.07em] ${item.status==='submitted'?'text-[#a15b37]':item.status==='changes_requested'?'text-[#a85656]':'text-[#315d7c]'}`}>{submissionLabel(item.status,c)}</span><h3 className="mt-1 line-clamp-2 text-sm font-semibold">{item.payload?.title?.[l]||item.payload?.title?.fr||'—'}</h3><p className="mt-1 truncate text-xs text-[#7b8794]">{item.payload?.cityName||item.payload?.city} · {item.payload?.district||'—'}</p></div><ChevronRight size={15} className="mt-1 shrink-0 text-[#9aa4ab]"/></div></button>)}
          {!filteredSubmissions.length?<p className="p-5 text-sm text-[#7b8794]">{c.noSubmissions}</p>:null}
        </div>
      </aside>
      <div>
        {!selectedSubmission?<div className="flex min-h-[420px] items-center justify-center border border-dashed border-[#cfd8e3] bg-[#fafbfc] p-8 text-center"><div><FileClock size={28} className="mx-auto text-[#8da0ad]"/><h2 className="mt-4 text-xl font-semibold">{c.submissions}</h2><p className="mt-2 text-sm text-[#788590]">{c.selectText}</p></div></div>:<section className="border border-[#d9e1e8] bg-white p-5">
          <span className={`text-[0.66rem] font-semibold uppercase tracking-[0.08em] ${selectedSubmission.status==='submitted'?'text-[#a15b37]':selectedSubmission.status==='changes_requested'?'text-[#a85656]':'text-[#315d7c]'}`}>{submissionLabel(selectedSubmission.status,c)}</span>
          <h2 className="mt-2 text-3xl font-semibold tracking-[-0.03em]">{selectedSubmission.payload?.title?.[l]||selectedSubmission.payload?.title?.fr||'—'}</h2>
          <p className="mt-2 text-sm text-[#687685]">{selectedSubmission.payload?.countryName||selectedSubmission.payload?.countryCode} · {selectedSubmission.payload?.cityName||selectedSubmission.payload?.city} · {selectedSubmission.payload?.district}</p>
          {selectedSubmission.admin_feedback?<div className="mt-5 border-l-2 border-[#a15b37] bg-[#fff9f3] px-4 py-3 text-sm leading-6 text-[#5f5b55]">{selectedSubmission.admin_feedback}</div>:null}
          <div className="mt-5 flex flex-wrap gap-2"><a href={'/espace/apercu?submission='+selectedSubmission.id} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 border border-[#315d7c] bg-[#eef4f8] px-3 py-2 text-xs font-semibold uppercase text-[#315d7c]"><Eye size={13}/>{c.preview}</a>{!isAdmin&&['draft','changes_requested'].includes(selectedSubmission.status)?<button onClick={()=>setEditingSubmission(selectedSubmission)} className="inline-flex items-center gap-1.5 border border-[#12304a] px-3 py-2 text-xs font-semibold uppercase"><Pencil size={13}/>{c.continue}</button>:null}</div>
        </section>}
      </div>
    </div>}
  </section>;
}
