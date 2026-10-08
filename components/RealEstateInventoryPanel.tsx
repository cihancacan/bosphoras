// @ts-nocheck
'use client';

import { FormEvent, useEffect, useMemo, useRef, useState } from 'react';
import { Building2, CheckCircle2, Layers3, Plus, RefreshCw, Search, Warehouse } from 'lucide-react';
import { getPortalSupabase } from '@/lib/portalSupabase';
import { AdminProjectImporter } from '@/components/AdminProjectImporter';

function money(value:any,currency='EUR'){
  const n=Number(value||0);
  if(!Number.isFinite(n)||!n)return '—';
  try{return new Intl.NumberFormat('fr-FR',{style:'currency',currency,maximumFractionDigits:0}).format(n);}
  catch{return n.toLocaleString('fr-FR')+' '+currency;}
}
function unitLabel(u:any){
  return [u?.unit_number,u?.unit_type,u?.bedrooms!=null?String(u.bedrooms)+' ch.':null].filter(Boolean).join(' · ')||u?.external_id||'Unité';
}

function positiveNumber(value:any){
  const n=Number(value);
  return Number.isFinite(n)&&n>0?n:null;
}
function fromOfferIfEmpty(saved:any,suggested:any){
  return saved!==null&&saved!==undefined&&saved!==''?saved:suggested??'';
}
function savedPaymentPercentage(plan:any,label:string){
  if(!Array.isArray(plan))return '';
  return plan.find((p:any)=>p?.label===label)?.percentage??'';
}
function readPaymentForm(fd:FormData){
  const parts=paymentFields.flatMap((f)=>{
    const raw=String(fd.get(f.name)||'').trim();
    if(!raw)return [];
    const percentage=Number(raw);
    if(!Number.isFinite(percentage)||percentage<0||percentage>100)throw new Error('Chaque échéance doit être comprise entre 0 et 100 %.');
    return [{label:f.label,percentage}];
  });
  const total=parts.reduce((sum:number,p:any)=>sum+p.percentage,0);
  if(parts.length&&Math.abs(total-100)>0.5)throw new Error('Le plan de paiement doit totaliser 100 % (actuellement '+total.toFixed(1)+' %).');
  return parts;
}
function verifiedAreaM2(payload:any){
  const unit=String(payload?.areaUnit||payload?.area_unit||payload?.areaMeasurement||'').toLowerCase().trim();
  const n=positiveNumber(payload?.area);
  if(!n)return null;
  if(['sqm','sq.m','m2','m²','square meters','square metres'].includes(unit))return Number(n.toFixed(2));
  if(['sqft','sq.ft','ft2','ft²','square feet'].includes(unit))return Number((n*0.09290304).toFixed(2));
  return null; // An unlabeled area is unsafe to import into a square-meter field.
}
function projectSlug(value:string){
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,82)||'programme';
}
function localizedText(value:string){
  return {fr:value,en:value,ru:value,ar:value};
}
function draftPaymentPlan(project:any,payload:any){
  if(Array.isArray(project?.payment_plan)&&project.payment_plan.length) {
    return project.payment_plan.every((step:any)=>step?.label&&typeof step.label==='object')
      ? project.payment_plan : [];
  }
  const summary=bayutPlanBreakdown(payload);
  if(!summary)return [];
  const parts=[
    ['downPaymentPercentage','Acompte','Down payment','Первый взнос','دفعة أولى'],
    ['preHandoverPercentage','Avant livraison','Before handover','До сдачи','قبل التسليم'],
    ['handoverPercentage','À la livraison','On handover','При сдаче','عند التسليم'],
    ['postHandoverPercentage','Après livraison','After handover','После сдачи','بعد التسليم']
  ];
  const steps=parts.flatMap(([key,fr,en,ru,ar])=>{
    const pct=Number(summary[key]);
    return Number.isFinite(pct)&&pct>0&&pct<=100?[{
      label:{fr,en,ru,ar},
      percentage:pct,
      due:{fr:'À confirmer',en:'To confirm',ru:'Уточняется',ar:'يُؤكد لاحقًا'}
    }]:[];
  });
  return Math.abs(steps.reduce((sum:number,x:any)=>sum+x.percentage,0)-100)<0.5?steps:[];
}
function optionsForProject(project:any,projectUnits:any[],source:any){
  const candidates=projectUnits.filter((unit:any)=>['available','unverified'].includes(unit.status)).map((unit:any)=>{
    const bedrooms=unit.bedrooms===null||unit.bedrooms===undefined?undefined:Number(unit.bedrooms);
    const areaM2=positiveNumber(unit.gross_area_m2)||undefined;
    const price=positiveNumber(unit.list_price)||undefined;
    return {
      label:String(unit.unit_type|| (bedrooms===0?'Studio':bedrooms!==undefined?bedrooms+' BR':'Typologie sur demande')),
      ...(bedrooms!==undefined?{bedrooms}:{}),
      ...(unit.bathrooms!=null?{bathrooms:Number(unit.bathrooms)}:{}),
      ...(areaM2?{areaM2}:{}),
      ...(price?{price}:{}),
      currency:unit.currency||project.currency,
      availability:unit.status==='available'&&unit.last_verified_at?'confirmed':'on_request',
      source:'unit',
    };
  });
  const sourceBedrooms=source?.rooms===null||source?.rooms===undefined?null:Number(source.rooms);
  const sourceBathrooms=source?.baths===null||source?.baths===undefined?null:Number(source.baths);
  if(Number.isInteger(sourceBedrooms)&&sourceBedrooms>=0&&sourceBedrooms<=15){
    candidates.push({
      label:sourceBedrooms===0?'Studio':sourceBedrooms+' BR',
      bedrooms:sourceBedrooms,
      ...(Number.isInteger(sourceBathrooms)&&sourceBathrooms>=0?{bathrooms:sourceBathrooms}:{}),
      // The source area lacks a reliable unit label. Do not treat it as m².
      ...(positiveNumber(source.price)?{price:positiveNumber(source.price)}:{}),
      currency:project.currency,
      availability:'on_request',
      source:'source_offer',
    });
  }
  const seen=new Set<string>();
  return candidates.filter((unit:any)=>{
    const key=[unit.label,unit.price||'',unit.areaM2||'',unit.availability].join('|');
    if(seen.has(key))return false;
    seen.add(key);
    return true;
  }).slice(0,16);
}
function bayutPlanBreakdown(payload:any){
  const summaries=Array.isArray(payload?.paymentPlanSummaries)?payload.paymentPlanSummaries:[];
  return summaries.find((s:any)=>s?.breakdown&&typeof s.breakdown==='object')?.breakdown||null;
}
const paymentFields=[
  {key:'downPaymentPercentage',name:'payment_down_pct',label:'Acompte'},
  {key:'preHandoverPercentage',name:'payment_pre_pct',label:'Avant livraison'},
  {key:'handoverPercentage',name:'payment_handover_pct',label:'À la livraison'},
  {key:'postHandoverPercentage',name:'payment_post_pct',label:'Après livraison'},
];
export function RealEstateInventoryPanel({user,profile,isAdmin,partners=[]}:{user:any;profile:any;isAdmin:boolean;partners?:any[]}){
  const supabase=getPortalSupabase();
  const [developers,setDevelopers]=useState<any[]>([]);
  const [projects,setProjects]=useState<any[]>([]);
  const [units,setUnits]=useState<any[]>([]);
  const [history,setHistory]=useState<any[]>([]);
  const [apiReferences,setApiReferences]=useState<any[]>([]);
  const [mediaCandidates,setMediaCandidates]=useState<any[]>([]);
  const [officialResearch,setOfficialResearch]=useState<any[]>([]);
  const [officialBusy,setOfficialBusy]=useState(false);
  const [officialMessage,setOfficialMessage]=useState('');
  const [officialCodes,setOfficialCodes]=useState<string[]>([]);
  const [officialUnits,setOfficialUnits]=useState<string[]>([]);
  const [officialPhotos,setOfficialPhotos]=useState<string[]>([]);
  const [officialUseDescription,setOfficialUseDescription]=useState(false);
  const [officialUseLocation,setOfficialUseLocation]=useState(false);
  const [officialPhotoRights,setOfficialPhotoRights]=useState(false);
  const officialInput=useRef<HTMLInputElement|null>(null);
  const [chosenMedia,setChosenMedia]=useState<string[]>([]);
  const [mediaRightsConfirmed,setMediaRightsConfirmed]=useState(false);
  const [mediaBusy,setMediaBusy]=useState(false);
  const [mediaMessage,setMediaMessage]=useState('');
  const [manualImageUrls,setManualImageUrls]=useState('');
  const [publicProjects,setPublicProjects]=useState<any[]>([]);
  const [projectLeads,setProjectLeads]=useState<any[]>([]);
  const [prefillProjectId,setPrefillProjectId]=useState('');
  const [editingUnitId,setEditingUnitId]=useState('');
  const [editPrefillUnitId,setEditPrefillUnitId]=useState('');
  const [selectedProjectId,setSelectedProjectId]=useState('');
  const [query,setQuery]=useState('');
  const [status,setStatus]=useState('all');
  const [busy,setBusy]=useState(false);
  const [message,setMessage]=useState('');
  const [unitFormMessage,setUnitFormMessage]=useState('');

  async function reload({clearMessage=true}:{clearMessage?:boolean}={}){
    setBusy(true);
    if(clearMessage)setMessage('');
    try{
      const [d,p,u,h,c,l,i,m,o]=await Promise.all([
        supabase.from('developers').select('*').order('name'),
        supabase.from('real_estate_projects').select('*').order('updated_at',{ascending:false}),
        supabase.from('project_units').select('*').order('updated_at',{ascending:false}),
        supabase.from('project_unit_history').select('*').order('created_at',{ascending:false}).limit(500),
        isAdmin?supabase.from('project_import_candidates')
          .select('id,imported_project_id,source_system,source_external_id,source_url,source_payload,currency')
          .eq('review_status','imported').limit(300):Promise.resolve({data:[],error:null}),
        isAdmin?supabase.from('property_listings')
          .select('*')
          .not('real_estate_project_id','is',null).is('deleted_at',null).limit(1000):Promise.resolve({data:[],error:null}),
        isAdmin?supabase.from('project_inquiries')
          .select('id,project_id,full_name,email,phone,budget,wants_similar_options,created_at')
          .order('created_at',{ascending:false}).limit(100):Promise.resolve({data:[],error:null}),
        isAdmin?supabase.from('project_media_enrichments')
          .select('project_id,listing_external_id,photos,floorplans,source_description,amenities,fetched_at')
          .order('fetched_at',{ascending:false}).limit(300):Promise.resolve({data:[],error:null}),
        isAdmin?supabase.from('project_official_research').select('*')
          .order('fetched_at',{ascending:false}).limit(400):Promise.resolve({data:[],error:null}),
      ]);
      if(d.error)throw d.error;if(p.error)throw p.error;if(u.error)throw u.error;if(h.error)throw h.error;
      setDevelopers(d.data||[]);setProjects(p.data||[]);setUnits(u.data||[]);setHistory(h.data||[]);
      if(c.error){setApiReferences([]);}else setApiReferences(c.data||[]);
      setPublicProjects(l.error?[]:(l.data||[]));
      setProjectLeads(i.error?[]:(i.data||[]));
      setMediaCandidates(m.error?[]:(m.data||[]));
      setOfficialResearch(o.error?[]:(o.data||[]));
      if(o.error)setOfficialMessage('Recherche officielle inaccessible : '+o.error.message);
      if(m.error)setMediaMessage('La galerie privée ne peut pas être chargée : '+m.error.message);
      if(!selectedProjectId&&p.data?.[0]?.id)setSelectedProjectId(p.data[0].id);
    }catch(e:any){setMessage(e?.message||'Chargement impossible.');}
    finally{setBusy(false);}
  }
  useEffect(()=>{reload();},[]);

  const developerById=useMemo(()=>Object.fromEntries(developers.map((x:any)=>[x.id,x])),[developers]);
  const filtered=useMemo(()=>projects.filter((p:any)=>{
    if(status!=='all'&&p.sales_status!==status)return false;
    const q=query.trim().toLowerCase();
    if(!q)return true;
    return [p.name,p.city,p.district,p.external_id,developerById[p.developer_id]?.name].filter(Boolean).join(' ').toLowerCase().includes(q);
  }),[projects,query,status,developerById]);
  const selected=projects.find((p:any)=>p.id===selectedProjectId)||filtered[0]||null;
  const selectedUnits=selected?units.filter((u:any)=>u.project_id===selected.id):[];
  const publicProject=selected?publicProjects.find((l:any)=>l.real_estate_project_id===selected.id):null;
  const selectedLeads=selected?projectLeads.filter((lead:any)=>lead.project_id===selected.id):[];
  const importedReference=selected?apiReferences.find((c:any)=>c.imported_project_id===selected.id):null;
  const reviewedMedia=selected?mediaCandidates.find((c:any)=>c.project_id===selected.id):null;
  const researched=selected?officialResearch.find((c:any)=>c.project_id===selected.id):null;
  const availableMedia=reviewedMedia?[...(Array.isArray(reviewedMedia.photos)?reviewedMedia.photos:[]),
    ...(Array.isArray(reviewedMedia.floorplans)?reviewedMedia.floorplans:[])]:[];
  useEffect(()=>{
    setChosenMedia([]);setMediaRightsConfirmed(false);setMediaMessage('');
    setOfficialCodes([]);setOfficialUnits([]);setOfficialPhotos([]);
    setOfficialUseDescription(false);setOfficialUseLocation(false);
    setOfficialPhotoRights(false);setOfficialMessage('');
  },[selectedProjectId]);
  const prefillEnabled=Boolean(selected&&importedReference&&prefillProjectId===selected.id);
  const offer=prefillEnabled?importedReference.source_payload||{}:{};
  const paymentBreakdown=bayutPlanBreakdown(offer);
  const offerPrice=positiveNumber(offer.price);
  const offerArea=verifiedAreaM2(offer);
  const offerBedrooms=offer.rooms!=null&&offer.rooms!==''?Number(offer.rooms):null;
  const offerBathrooms=offer.baths!=null&&offer.baths!==''?Number(offer.baths):null;
  const editingUnit=selectedUnits.find((u:any)=>u.id===editingUnitId)||null;
  const editingWithOffer=Boolean(editingUnit&&editPrefillUnitId===editingUnitId&&importedReference);
  const editOffer=editingWithOffer?importedReference.source_payload||{}:{};
  const editBreakdown=bayutPlanBreakdown(editOffer);

  async function getBayutPhotoDetails(){
    if(!isAdmin||!selected||selected.source_system!=='bayut'||mediaBusy)return;
    if(!window.confirm("Interroger Bayut /property-details pour ce projet ? Un appel RapidAPI peut être décompté du quota ; si des résultats récents sont en cache, aucun nouvel appel ne sera fait."))return;
    setMediaBusy(true);setMediaMessage('Récupération des photos détaillées de l’annonce Bayut…');
    try{
      const {data}=await supabase.auth.getSession();
      if(!data.session?.access_token)throw new Error('Session expirée, reconnecte-toi.');
      const response=await fetch('/api/property-desk/api-projects/media',{
        method:'POST',headers:{Authorization:'Bearer '+data.session.access_token,'Content-Type':'application/json'},
        body:JSON.stringify({project_id:selected.id})
      });
      const result=await response.json().catch(()=>({}));
      if(!response.ok)throw new Error(result.error||'Échec de l’appel Bayut.');
      await reload({clearMessage:false});
      setMediaMessage((result.cached?'Cache réutilisé. ':'Détails Bayut récupérés. ')+
        String(result.photos||0)+' photo(s), '+String(result.floorplans||0)+' plan(s) à examiner dans la galerie privée.');
    }catch(error:any){setMediaMessage(error?.message||'Erreur pendant la récupération des images.');}
    finally{setMediaBusy(false);}
  }
  async function saveReviewedBayutPhotos(){
    if(!isAdmin||!selected||!reviewedMedia||!chosenMedia.length||!mediaRightsConfirmed||mediaBusy)return;
    setMediaBusy(true);setMediaMessage('');
    try{
      const valid=new Set(availableMedia.map((item:any)=>item.url));
      const approved=chosenMedia.filter(url=>valid.has(url));
      if(!approved.length)throw new Error('Sélectionne au moins une image dans les propositions.');
      const stored=Array.isArray(selected.images)?selected.images:[];
      const next=Array.from(new Set([...stored,...approved])).slice(0,32);
      const {error}=await supabase.from('real_estate_projects').update({
        images:next,
        hero_image:selected.hero_image||next[0]||null,
        updated_by:user?.id||null,
      }).eq('id',selected.id);
      if(error)throw error;
      // Never change the publicly displayed gallery without a separate publishing review.
      if(publicProject&&!publicProject.published){
        const current=Array.isArray(publicProject.images)?publicProject.images:[];
        const draftImages=Array.from(new Set([...current,...approved])).slice(0,32);
        const saveDraft=await supabase.from('property_listings').update({
          images:draftImages,hero_image:publicProject.hero_image||draftImages[0]||null
        }).eq('id',publicProject.id).eq('published',false);
        if(saveDraft.error)throw new Error('Images enregistrées dans le projet privé, mais la mise à jour du brouillon public a échoué : '+saveDraft.error.message);
      }
      setChosenMedia([]);setMediaRightsConfirmed(false);
      await reload({clearMessage:false});
      setMediaMessage(approved.length+' image(s) approuvée(s) et ajoutée(s) sans remplacer les anciennes. '+
        (publicProject?.published?'La fiche déjà publiée reste inchangée ; mets sa galerie à jour dans Publications après vérification.':
          publicProject?'La galerie du brouillon a été mise à jour, sans publication automatique.':
          'Elles seront proposées lors de la préparation de la fiche du programme.'));
    }catch(error:any){setMediaMessage(error?.message||"Impossible d’enregistrer les photos.");}
    finally{setMediaBusy(false);}
  }

  async function addApprovedManualImages(event:FormEvent<HTMLFormElement>){
    event.preventDefault();
    if(!selected||!isAdmin||mediaBusy)return;
    setMediaBusy(true);setMediaMessage('');
    try{
      const raw=manualImageUrls.split(/[\n,]+/g).map(x=>x.trim()).filter(Boolean);
      if(!raw.length||raw.length>20)throw new Error('Renseigne entre 1 et 20 URL de photos officielles.');
      if(!mediaRightsConfirmed)throw new Error('Confirme au préalable les droits de réutilisation des images.');
      const urls=raw.map(value=>{
        const u=new URL(value);
        if(u.protocol!=='https:'||!u.hostname||u.username||u.password||value.length>1800)
          throw new Error('Chaque photo doit avoir une URL HTTPS valide.');
        return u.toString();
      });
      const current=Array.isArray(selected.images)?selected.images:[];
      const merged=Array.from(new Set([...current,...urls])).slice(0,32);
      const {error}=await supabase.from('real_estate_projects').update({
        images:merged,hero_image:selected.hero_image||merged[0],updated_by:user?.id||null
      }).eq('id',selected.id);
      if(error)throw error;
      if(publicProject&&!publicProject.published){
        const publicImages=Array.isArray(publicProject.images)?publicProject.images:[];
        const next=Array.from(new Set([...publicImages,...urls])).slice(0,32);
        const save=await supabase.from('property_listings').update({
          images:next,hero_image:publicProject.hero_image||next[0]
        }).eq('id',publicProject.id).eq('published',false);
        if(save.error)throw new Error('Projet privé mis à jour, mais erreur sur la galerie du brouillon : '+save.error.message);
      }
      setManualImageUrls('');setMediaRightsConfirmed(false);
      await reload({clearMessage:false});
      setMediaMessage(urls.length+' photo(s) officielle(s) ajoutée(s) au stock privé'+
        (publicProject?.published?' ; la fiche en ligne reste inchangée.':
         publicProject?' et au brouillon de publication.':' ; prêtes pour la création de la fiche publique.'));
    }catch(error:any){setMediaMessage(error?.message||'Ajout impossible.');}
    finally{setMediaBusy(false);}
  }

  async function officialAction(action:'scan'|'apply'){
    if(!isAdmin||!selected||officialBusy||busy)return;
    setOfficialBusy(true);setOfficialMessage('');
    try{
      const session=await supabase.auth.getSession();
      const token=session.data.session?.access_token;
      if(!token)throw new Error('Ta session administrateur a expiré. Reconnecte-toi.');
      const body:any={action,project_id:selected.id};
      if(action==='scan'){
        const url=officialInput.current?.value?.trim();
        if(url)body.official_url=url;
      }else{
        if(!officialUseDescription&&!officialUseLocation&&!officialCodes.length&&!officialUnits.length&&!officialPhotos.length)
          throw new Error('Sélectionne au moins une catégorie d’informations à conserver.');
        body.description=officialUseDescription;
        body.location=officialUseLocation;
        body.amenity_codes=officialCodes;
        body.unit_mentions=officialUnits;
        body.image_urls=officialPhotos;
        body.rights_confirmed=officialPhotoRights;
      }
      const response=await fetch('/api/property-desk/official-research',{
        method:'POST',headers:{Authorization:'Bearer '+token,'Content-Type':'application/json'},
        body:JSON.stringify(body)
      });
      const result=await response.json().catch(()=>({}));
      if(!response.ok)throw new Error(result.error||'Recherche officielle indisponible.');
      await reload({clearMessage:false});
      setOfficialMessage(result.message||'Opération enregistrée.');
      if(action==='apply'){
        setOfficialCodes([]);setOfficialUnits([]);setOfficialPhotos([]);
        setOfficialUseDescription(false);setOfficialUseLocation(false);setOfficialPhotoRights(false);
      }
    }catch(error:any){setOfficialMessage(error?.message||'Impossible de traiter la source officielle.');}
    finally{setOfficialBusy(false);}
  }

  async function createPublicationDraft(){
    if(!isAdmin||!selected||busy)return;
    setBusy(true);setMessage('');
    try{
      if(publicProject)throw new Error('Une fiche publique existe déjà pour ce programme. Ouvre-la dans Publications.');
      const project=selected;
      const source=importedReference?.source_payload||{};
      const imageUrls=Array.from(new Set(
        [...(Array.isArray(project.images)?project.images:[]),project.hero_image].filter((u:any)=>typeof u==='string'&&/^https?:\/\//i.test(u))
      )).slice(0,18);
      const name=String(project.name||'').trim();
      const city=String(project.city||'').trim();
      if(!name||!city)throw new Error('Renseigne le nom et la ville du projet avant de préparer sa fiche.');
      const slug=projectSlug(name)+'-'+project.id.slice(0,8);
      const projectDescription=project.description&&typeof project.description==='object'?project.description:{};
      const summary={
        fr:'Programme immobilier à '+city+'. Prix indicatifs et typologies à découvrir. Disponibilités et conditions sous réserve de confirmation.',
        en:'Property development in '+city+'. Indicative prices and unit types. Availability and terms subject to confirmation.',
        ru:'Жилой проект в городе '+city+'. Ориентировочные цены и типы квартир. Наличие и условия уточняются.',
        ar:'مشروع عقاري في '+city+'. أسعار وأنواع وحدات إرشادية. التوافر والشروط تتطلب التأكيد.'
      };
      const plan=draftPaymentPlan(project,source);
      const opts=optionsForProject(project,selectedUnits,source);
      for(const label of Array.isArray(project.official_unit_types)?project.official_unit_types:[]){
        if(!opts.some((unit:any)=>unit.label===label))opts.push({label,availability:'on_request',source:'source_offer',currency:project.currency});
      }
      const note={
        fr:'Échéancier communiqué par la source : indicatif, non contractuel. Conditions et dates à confirmer auprès du promoteur.',
        en:'Payment schedule from the source is indicative and non-contractual. Confirm terms and dates with the developer.',
        ru:'График платежей из источника носит ориентировочный характер. Условия и даты уточняются у застройщика.',
        ar:'جدول الدفع من المصدر إرشادي وغير تعاقدي. يرجى تأكيد الشروط والتواريخ مع المطور.'
      };
      const data:any={
        external_id:'PRJ-'+project.id.replace(/-/g,'').slice(0,18).toUpperCase(),
        real_estate_project_id:project.id,
        published:false,featured:false,review_status:'draft',status:'private',
        collection:'selected-investment',transaction_type:'sale',property_type:'residence',
        country_code:project.country_code||'TR',
        country_name:project.country_name||(project.country_code==='AE'?'United Arab Emirates':'Turkey'),
        city:projectSlug(city),city_name:city,district:project.district||null,
        slug_fr:slug,slug_en:slug,slug_ru:slug,slug_ar:slug,
        title:localizedText(name),summary,
        description:{
          fr:projectDescription.fr||'',en:projectDescription.en||'',
          ru:projectDescription.ru||'',ar:projectDescription.ar||''
        },
        seo_title:localizedText(name+' | Bosphoras'),
        seo_description:summary,
        currency:project.currency||'EUR',
        total_price:positiveNumber(project.price_min),
        project_price_max:positiveNumber(project.price_max),
        price_on_request:!positiveNumber(project.price_min),
        entry_capital:positiveNumber(project.entry_capital_min),
        delivery:project.completion_date?localizedText(String(project.completion_date)):project.handover_text?localizedText(project.handover_text):null,
        project_latitude:project.latitude??null,
        project_longitude:project.longitude??null,
        highlights:Array.isArray(project.highlights)?project.highlights.filter((v:any)=>typeof v==='object'&&v.fr):[],
        project_amenity_codes:Array.isArray(project.amenities)?project.amenities.filter((v:any)=>typeof v==='string'):[],
        // Rich project fact sections are curated in Publications before release.
        developer:developerById[project.developer_id]?.name||null,
        payment_plan:plan,payment_plan_enabled:Boolean(plan.length),payment_interest_mode:'not_specified',
        payment_notes:plan.length?note:null,
        images:imageUrls,hero_image:imageUrls[0]||null,
        project_unit_options:opts,
        source_url:project.official_project_url||project.source_url||importedReference?.source_url||null,
        source_host:project.source_system||null,
        source_partner_name:developerById[project.developer_id]?.name||null,
        partner_id:project.partner_id||null,
        created_by:user?.id||null
      };
      const {error}=await supabase.from('property_listings').insert(data);
      if(error)throw error;
      await reload({clearMessage:false});
      setMessage('Fiche publique créée en BROUILLON (non visible). Ouvre Publications, vérifie les droits des photos, les descriptions, les prix et les conditions puis publie.');
    }catch(error:any){setMessage(error?.message||'Impossible de préparer le programme.');}
    finally{setBusy(false);}
  }

  async function updateProgramDetails(event:FormEvent<HTMLFormElement>){
    event.preventDefault();if(!isAdmin||!publicProject||busy)return;
    const form=event.currentTarget;
    const fd=new FormData(form);
    setBusy(true);setMessage('');
    try{
      if(publicProject.published)throw new Error('Dépublie temporairement le programme avant de modifier sa fiche publique.');
      const existing=publicProject.project_unit_options||[];
      const lines=String(fd.get('types')||'').split(/\n/g).map(x=>x.trim()).filter(Boolean).slice(0,16);
      const options=lines.map(line=>{
        const [label,roomsText,areaText,priceText,priceMaxText]=line.split('|').map(x=>x.trim());
        const rooms=roomsText===''?undefined:Number(roomsText);
        const area=areaText===''?undefined:Number(areaText);
        const price=priceText===''?undefined:Number(priceText);
        const priceMax=priceMaxText===''?undefined:Number(priceMaxText);
        if(!label)throw new Error('Chaque typologie doit avoir un nom.');
        for(const val of [rooms,area,price,priceMax]){
          if(val!==undefined&&(!Number.isFinite(val)||val<0))throw new Error('Typologie invalide : '+line);
        }
        const prior=existing.find((o:any)=>o.label===label);
        return {label,
          ...(rooms!==undefined?{bedrooms:rooms}:{}),
          ...(area!==undefined&&area>0?{areaM2:area}:{}),
          ...(price!==undefined&&price>0?{price}:{}),
          ...(priceMax!==undefined&&priceMax>0?{priceMax}:{}),
          currency:publicProject.currency,
          availability:prior?.availability==='confirmed'?'confirmed':'on_request',
          source:'unit'};
      });
      const minimum=positiveNumber(fd.get('min'));
      const maximum=positiveNumber(fd.get('max'));
      if(minimum&&maximum&&maximum<minimum)throw new Error('Le prix maximum ne peut être inférieur au prix minimum.');
      const latitude=String(fd.get('lat')||'').trim();
      const longitude=String(fd.get('lng')||'').trim();
      if(Boolean(latitude)!==Boolean(longitude))throw new Error('Renseigne les deux coordonnées ou laisse les deux vides.');
      if(latitude&&(!Number.isFinite(Number(latitude))||Number(latitude)<-90||Number(latitude)>90||
        !Number.isFinite(Number(longitude))||Number(longitude)<-180||Number(longitude)>180))
        throw new Error('Coordonnées géographiques invalides.');
      const description=String(fd.get('description')||'').trim().slice(0,12000);
      const summary=String(fd.get('summary')||'').trim().slice(0,700);
      const amenities=String(fd.get('amenities')||'').split(/\n/g).map(x=>x.trim()).filter(Boolean).slice(0,25);
      const title=String(fd.get('title')||'').trim().slice(0,200);
      const delivery=String(fd.get('delivery')||'').trim().slice(0,120);
      const {error}=await supabase.from('property_listings').update({
        title:{...(publicProject.title||{}),fr:title||publicProject.title?.fr||selected.name},
        summary:{...(publicProject.summary||{}),fr:summary},
        description:{...(publicProject.description||{}),fr:description},
        total_price:minimum,price_on_request:!minimum,
        project_price_max:maximum,
        delivery:{...(publicProject.delivery||{}),fr:delivery},
        project_unit_options:options,
        project_latitude:latitude?Number(latitude):null,
        project_longitude:longitude?Number(longitude):null,
        highlights:amenities.map(x=>({fr:x,en:'',ru:'',ar:''})),
        updated_at:new Date().toISOString()
      }).eq('id',publicProject.id);
      if(error)throw error;
      await reload({clearMessage:false});
      setMessage('Fiche programme enrichie et enregistrée en brouillon. Vérifie la galerie, les droits des photos et l’ensemble des données avant publication.');
    }catch(err:any){setMessage(err?.message||'Modification du programme impossible.');}
    finally{setBusy(false);}
  }

  async function createDeveloper(e:FormEvent<HTMLFormElement>){
    e.preventDefault();setBusy(true);setMessage('');
    const form=e.currentTarget;
    try{
      const fd=new FormData(form);
      const {error}=await supabase.from('developers').insert({
        name:String(fd.get('name')||'').trim(),
        legal_name:String(fd.get('legal_name')||'').trim()||null,
        country_code:String(fd.get('country_code')||'TR').trim().toUpperCase(),
        city:String(fd.get('city')||'').trim()||null,
        website:String(fd.get('website')||'').trim()||null,
        contact_name:String(fd.get('contact_name')||'').trim()||null,
        email:String(fd.get('email')||'').trim()||null,
        phone:String(fd.get('phone')||'').trim()||null,
        whatsapp:String(fd.get('whatsapp')||'').trim()||null,
        logo_url:String(fd.get('logo_url')||'').trim()||null,
        created_by:user?.id||null,
      });
      if(error)throw error;form.reset();await reload({clearMessage:false});setMessage('Promoteur ajouté.');
    }catch(e:any){setMessage(e?.message||'Création impossible.');}
    finally{setBusy(false);}
  }

  async function createProject(e:FormEvent<HTMLFormElement>){
    e.preventDefault();setBusy(true);setMessage('');
    const form=e.currentTarget;
    try{
      const fd=new FormData(form);
      const payload:any={
        name:String(fd.get('name')||'').trim(),
        developer_id:String(fd.get('developer_id')||'')||null,
        partner_id:isAdmin?(String(fd.get('partner_id')||'')||null):(profile?.partner_id||null),
        external_id:String(fd.get('external_id')||'').trim()||null,
        source_system:String(fd.get('source_system')||'').trim()||null,
        country_code:String(fd.get('country_code')||'TR').trim().toUpperCase(),
        country_name:String(fd.get('country_name')||'').trim()||null,
        city:String(fd.get('city')||'').trim(),
        district:String(fd.get('district')||'').trim()||null,
        address:String(fd.get('address')||'').trim()||null,
        currency:String(fd.get('currency')||'EUR'),
        price_min:Number(fd.get('price_min')||0)||null,
        price_max:Number(fd.get('price_max')||0)||null,
        entry_capital_min:Number(fd.get('entry_capital_min')||0)||null,
        completion_date:String(fd.get('completion_date')||'')||null,
        sales_status:String(fd.get('sales_status')||'available'),
        logo_url:String(fd.get('logo_url')||'').trim()||null,
        hero_image:String(fd.get('hero_image')||'').trim()||null,
        status:'active',
        created_by:user?.id||null,updated_by:user?.id||null,last_verified_at:new Date().toISOString(),
      };
      const {data,error}=await supabase.from('real_estate_projects').insert(payload).select('*').single();
      if(error)throw error;form.reset();setSelectedProjectId(data.id);await reload({clearMessage:false});setMessage('Projet ajouté.');
    }catch(e:any){setMessage(e?.message||'Création impossible.');}
    finally{setBusy(false);}
  }

  async function createUnit(e:FormEvent<HTMLFormElement>){
    e.preventDefault();if(!selected)return;
    if(busy)return;
    const form=e.currentTarget;
    setBusy(true);setMessage('');setUnitFormMessage('Enregistrement de l’unité…');
    try{
      const fd=new FormData(form);
      const hasUnitInfo=['unit_number','external_id','unit_type','bedrooms','gross_area_m2','list_price']
        .some((field)=>String(fd.get(field)||'').trim()!=='');
      if(!hasUnitInfo)throw new Error('Renseigne au moins une caractéristique (n° de lot, référence, typologie, surface, chambres ou prix) avant d’enregistrer.');
      const status=String(fd.get('status')||'unverified');
      const plan=readPaymentForm(fd);
      const usingOffer=Boolean(importedReference&&prefillProjectId===selected.id);
      const {error}=await supabase.from('project_units').insert({
        project_id:selected.id,
        external_id:String(fd.get('external_id')||'').trim()||null,
        source_system:selected.source_system||null,
        unit_number:String(fd.get('unit_number')||'').trim()||null,
        building:String(fd.get('building')||'').trim()||null,
        floor:String(fd.get('floor')||'').trim()||null,
        unit_type:String(fd.get('unit_type')||'').trim()||null,
        bedrooms:fd.get('bedrooms')===''?null:Number(fd.get('bedrooms')),
        bathrooms:fd.get('bathrooms')===''?null:Number(fd.get('bathrooms')),
        view:String(fd.get('view')||'').trim()||null,
        gross_area_m2:Number(fd.get('gross_area_m2')||0)||null,
        net_area_m2:Number(fd.get('net_area_m2')||0)||null,
        currency:String(fd.get('currency')||selected.currency||'EUR'),
        list_price:Number(fd.get('list_price')||0)||null,
        cash_price:Number(fd.get('cash_price')||0)||null,
        installment_price:Number(fd.get('installment_price')||0)||null,
        entry_capital:Number(fd.get('entry_capital')||0)||null,
        status,
        payment_plan:plan,
        metadata:usingOffer?{
          import_candidate_id:importedReference.id,
          source_offer_reference:true,
          source_offer_requires_verification:true,
          availability_source:status==='unverified'?'unknown':'manual',
        }:{availability_source:status==='unverified'?'unknown':'manual'},
        last_verified_at:status==='unverified'?null:new Date().toISOString(),
        created_by:user?.id||null,updated_by:user?.id||null,
      });
      if(error)throw error;
      form.reset();setPrefillProjectId('');
      await reload({clearMessage:false});
      const feedback=status==='unverified'?'Unité enregistrée en stock privé, disponibilité à vérifier.':'Unité ajoutée au stock privé. Ce n’est pas une publication publique.';
      setMessage(feedback);setUnitFormMessage(feedback);
    }catch(e:any){
      const errorText=e?.message||'Enregistrement de l’unité impossible.';
      setMessage(errorText);setUnitFormMessage(errorText);
    }
    finally{setBusy(false);}
  }

  async function updateExistingUnit(e:FormEvent<HTMLFormElement>){
    e.preventDefault();if(!editingUnit)return;
    setBusy(true);setMessage('');
    try{
      const fd=new FormData(e.currentTarget);
      const status=String(fd.get('status')||'unverified');
      const plan=readPaymentForm(fd);
      const {error}=await supabase.from('project_units').update({
        unit_number:String(fd.get('unit_number')||'').trim()||null,
        building:String(fd.get('building')||'').trim()||null,
        floor:String(fd.get('floor')||'').trim()||null,
        unit_type:String(fd.get('unit_type')||'').trim()||null,
        bedrooms:fd.get('bedrooms')===''?null:Number(fd.get('bedrooms')),
        bathrooms:fd.get('bathrooms')===''?null:Number(fd.get('bathrooms')),
        gross_area_m2:positiveNumber(fd.get('gross_area_m2')),
        net_area_m2:positiveNumber(fd.get('net_area_m2')),
        currency:String(fd.get('currency')||selected?.currency||'AED'),
        list_price:positiveNumber(fd.get('list_price')),
        cash_price:positiveNumber(fd.get('cash_price')),
        installment_price:positiveNumber(fd.get('installment_price')),
        entry_capital:positiveNumber(fd.get('entry_capital')),
        status,
        payment_plan:plan,
        last_verified_at:status==='unverified'?null:new Date().toISOString(),
        metadata:{
          ...(editingUnit.metadata||{}),
          availability_source:status==='unverified'?'unknown':'manual',
          ...(editingWithOffer?{source_offer_reference:true,source_offer_requires_verification:true,import_candidate_id:importedReference.id}:{}),
        },
        updated_by:user?.id||null,
      }).eq('id',editingUnit.id);
      if(error)throw error;
      setEditingUnitId('');setEditPrefillUnitId('');
      await reload({clearMessage:false});
      setMessage('Fiche unité enregistrée'+(status==='unverified'?' — disponibilité toujours à vérifier.':'.'));
    }catch(error:any){setMessage(error?.message||'Modification impossible.');}
    finally{setBusy(false);}
  }
  async function updateUnitStatus(id:string,next:string){
    setBusy(true);
    const {error}=await supabase.from('project_units').update({status:next,updated_by:user?.id||null,last_verified_at:next==='unverified'?null:new Date().toISOString()}).eq('id',id);
    if(error)setMessage(error.message);else {await reload({clearMessage:false});setMessage('Statut de l’unité mis à jour.');}
    setBusy(false);
  }
  async function updateProjectStatus(id:string,next:string){
    setBusy(true);
    const {error}=await supabase.from('real_estate_projects').update({sales_status:next,updated_by:user?.id||null,last_verified_at:new Date().toISOString()}).eq('id',id);
    if(error)setMessage(error.message);else {await reload({clearMessage:false});setMessage('Commercialisation interne mise à jour. Cela ne publie pas une annonce.');}
    setBusy(false);
  }

  const input='min-h-[42px] w-full border border-[#cfd8e3] bg-white px-3 text-sm outline-none focus:border-[#315d7c]';
  const label='grid gap-1.5 text-[0.66rem] font-semibold uppercase tracking-[0.08em] text-[#687685]';
  const counts=useMemo(()=>({
    projects:projects.length,
    available:units.filter((u:any)=>u.status==='available').length,
    option:units.filter((u:any)=>['option','reserved','deposit_received'].includes(u.status)).length,
    sold:units.filter((u:any)=>['contracted','sold'].includes(u.status)).length,
  }),[projects,units]);

  return <div className="space-y-6">
    <div className="grid gap-px bg-[#d9e1e8] sm:grid-cols-2 xl:grid-cols-4">
      {[
        ['Projets',counts.projects,Building2],
        ['Unités disponibles',counts.available,Warehouse],
        ['Options / réservées',counts.option,Layers3],
        ['Contractées / vendues',counts.sold,CheckCircle2],
      ].map(([k,v,Icon]:any)=><article key={k} className="bg-white p-5"><div className="flex items-center justify-between"><span className="text-[0.66rem] uppercase tracking-[0.08em] text-[#687685]">{k}</span><Icon size={17} className="text-[#315d7c]"/></div><strong className="mt-2 block text-3xl font-semibold">{v}</strong></article>)}
    </div>

    {message?<div role="status" aria-live="polite" className="border border-[#d9e1e8] bg-white px-4 py-3 text-sm">{message}</div>:null}
    <div className="flex flex-wrap items-center justify-between gap-3 border border-[#b9cbd8] bg-[#f4f8fb] p-4 text-sm">
      <p className="max-w-3xl text-[#31536d]"><strong>Programmes Turquie & Dubaï :</strong> crée une seule fiche publique par programme. Elle présente les photos, prix min–max, typologies et paiements. Les unités restent des données de suivi interne, et les clients demandent les disponibilités. Les annonces de biens individuels sont gérées séparément.</p>
      {isAdmin?<a href="/espace?tab=listings" className="inline-flex min-h-[40px] items-center justify-center bg-[#12304a] px-4 text-xs font-semibold text-white">Gérer les publications</a>:null}
    </div>

    {isAdmin?<AdminProjectImporter user={user} profile={profile} isAdmin={isAdmin} partners={partners} developers={developers} onSaved={reload}/>:null}

    {isAdmin?<details className="border border-[#d9e1e8] bg-white">
      <summary className="cursor-pointer px-5 py-4 text-sm font-semibold">+ Ajouter un promoteur</summary>
      <form onSubmit={createDeveloper} className="grid gap-3 border-t border-[#e7edf2] p-5 md:grid-cols-3">
        <label className={label}>Nom<input name="name" required className={input}/></label>
        <label className={label}>Raison sociale<input name="legal_name" className={input}/></label>
        <label className={label}>Pays<input name="country_code" defaultValue="TR" className={input}/></label>
        <label className={label}>Ville<input name="city" className={input}/></label>
        <label className={label}>Site web<input name="website" className={input}/></label>
        <label className={label}>Contact<input name="contact_name" className={input}/></label>
        <label className={label}>E-mail<input name="email" type="email" className={input}/></label>
        <label className={label}>Téléphone<input name="phone" className={input}/></label>
        <label className={label}>WhatsApp<input name="whatsapp" className={input}/></label>
        <label className={label+" md:col-span-2"}>Logo URL<input name="logo_url" className={input}/></label>
        <button disabled={busy} className="min-h-[42px] bg-[#12304a] px-4 text-sm font-semibold text-white md:col-span-3">Créer le promoteur</button>
      </form>
    </details>:null}

    <details className="border border-[#d9e1e8] bg-white">
      <summary className="cursor-pointer px-5 py-4 text-sm font-semibold">+ Ajouter un projet</summary>
      <form onSubmit={createProject} className="grid gap-3 border-t border-[#e7edf2] p-5 md:grid-cols-4">
        <label className={label+" md:col-span-2"}>Nom du projet<input name="name" required className={input}/></label>
        <label className={label}>Promoteur<select name="developer_id" className={input}><option value="">Non défini</option>{developers.map((d:any)=><option key={d.id} value={d.id}>{d.name}</option>)}</select></label>
        {isAdmin?<label className={label}>Partenaire source<select name="partner_id" className={input}><option value="">Bosphoras / direct</option>{partners.map((p:any)=><option key={p.id} value={p.id}>{p.name}</option>)}</select></label>:null}
        <label className={label}>Réf. externe<input name="external_id" className={input}/></label>
        <label className={label}>Source / API<input name="source_system" placeholder="reelly, partner_x…" className={input}/></label>
        <label className={label}>Pays<input name="country_code" defaultValue="TR" className={input}/></label>
        <label className={label}>Nom pays<input name="country_name" defaultValue="Turkey" className={input}/></label>
        <label className={label}>Ville<input name="city" required className={input}/></label>
        <label className={label}>Quartier<input name="district" className={input}/></label>
        <label className={label+" md:col-span-2"}>Adresse interne<input name="address" className={input}/></label>
        <label className={label}>Devise<select name="currency" className={input}><option>EUR</option><option>USD</option><option>AED</option><option>TRY</option><option>GBP</option></select></label>
        <label className={label}>Prix min<input name="price_min" inputMode="decimal" className={input}/></label>
        <label className={label}>Prix max<input name="price_max" inputMode="decimal" className={input}/></label>
        <label className={label}>Capital d'entrée min<input name="entry_capital_min" inputMode="decimal" className={input}/></label>
        <label className={label}>Livraison<input name="completion_date" type="date" className={input}/></label>
        <label className={label}>Commercialisation<select name="sales_status" className={input}><option value="prelaunch">Pré-lancement</option><option value="available">Disponible</option><option value="limited">Stock limité</option><option value="sold_out">Épuisé</option></select></label>
        <label className={label+" md:col-span-2"}>Logo projet<input name="logo_url" className={input}/></label>
        <label className={label+" md:col-span-2"}>Image principale<input name="hero_image" className={input}/></label>
        <button disabled={busy} className="min-h-[42px] bg-[#12304a] px-4 text-sm font-semibold text-white md:col-span-4">Créer le projet</button>
      </form>
    </details>

    <div className="grid gap-6 xl:grid-cols-[390px_minmax(0,1fr)]">
      <aside className="border border-[#d9e1e8] bg-white">
        <div className="grid gap-2 border-b border-[#e7edf2] p-4">
          <label className="relative"><Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#87929c]"/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Projet, ville, promoteur…" className="min-h-[40px] w-full border border-[#d9e1e8] pl-9 pr-3 text-sm"/></label>
          <select value={status} onChange={e=>setStatus(e.target.value)} className="min-h-[40px] border border-[#d9e1e8] bg-white px-3 text-sm"><option value="all">Tous les statuts</option><option value="prelaunch">Pré-lancement</option><option value="available">Disponible</option><option value="limited">Stock limité</option><option value="sold_out">Épuisé</option></select>
        </div>
        <div className="max-h-[720px] overflow-y-auto">
          {filtered.map((p:any)=>{
            const pUnits=units.filter((u:any)=>u.project_id===p.id);
            const avail=pUnits.filter((u:any)=>u.status==='available').length;
            const activeClass=selected?.id===p.id?'bg-[#edf4f7]':'hover:bg-[#f8fafb]';
            return <button key={p.id} onClick={()=>setSelectedProjectId(p.id)} className={'block w-full border-b border-[#edf1f4] p-4 text-left '+activeClass}>
              <span className="text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-[#315d7c]">{p.sales_status}</span>
              <strong className="mt-1 block">{p.name}</strong>
              <p className="mt-1 text-xs text-[#687685]">{[p.city,p.district,developerById[p.developer_id]?.name].filter(Boolean).join(' · ')}</p>
              <div className="mt-3 flex justify-between text-xs text-[#596875]"><span>{avail}/{pUnits.length} disponibles</span><span>{money(p.price_min,p.currency)}+</span></div>
            </button>;
          })}
          {!filtered.length?<p className="p-6 text-sm text-[#687685]">Aucun projet.</p>:null}
        </div>
      </aside>

      <section className="min-w-0">
        {selected?<div className="space-y-5">
          <div className="border border-[#d9e1e8] bg-[#132538] p-6 text-white">
            <div className="flex flex-wrap items-start justify-between gap-5">
              <div className="flex items-start gap-4">{selected.logo_url?<div className="flex h-16 w-24 shrink-0 items-center justify-center bg-white p-2"><img src={selected.logo_url} alt="" className="max-h-full max-w-full object-contain"/></div>:null}<div><div className="flex flex-wrap items-center gap-2">{developerById[selected.developer_id]?.logo_url?<span className="flex h-7 w-14 items-center justify-center bg-white/95 p-1"><img src={developerById[selected.developer_id].logo_url} alt="" className="max-h-full max-w-full object-contain"/></span>:null}<span className="text-[0.66rem] uppercase tracking-[0.12em] text-[#9eb6c8]">{developerById[selected.developer_id]?.name||'Promoteur non défini'}</span></div><h2 className="mt-2 text-3xl font-semibold">{selected.name}</h2><p className="mt-2 text-sm text-[#b9c9d6]">{[selected.city,selected.district,selected.completion_date?'Livraison '+selected.completion_date:null].filter(Boolean).join(' · ')}</p></div></div>
              <div className="text-right"><strong className="block text-xl">{money(selected.price_min,selected.currency)} – {money(selected.price_max,selected.currency)}</strong><span className="mt-1 block text-xs text-[#a9bfd0]">Capital d'entrée {money(selected.entry_capital_min,selected.currency)}</span></div>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {['prelaunch','available','limited','sold_out','closed'].map(s=><button key={s} onClick={()=>updateProjectStatus(selected.id,s)} disabled={busy} className={'border px-3 py-2 text-xs font-semibold '+(selected.sales_status===s?'border-white bg-white text-[#132538]':'border-white/20 text-white')}>{s}</button>)}
              <button onClick={()=>reload()} className="ml-auto inline-flex items-center gap-2 border border-white/20 px-3 py-2 text-xs"><RefreshCw size={13} className={busy?'animate-spin':''}/>Actualiser</button>
            </div>
          </div>
          {isAdmin?<div className="border border-[#d9e1e8] bg-[#f8fafb] p-5">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="max-w-2xl">
                <h3 className="text-lg font-semibold text-[#12304a]">Publication du programme</h3>
                <p className="mt-1 text-xs leading-6 text-[#687685]">Une seule annonce par projet pour la Turquie et Dubaï. Les photos, fourchettes de prix et typologies sont préparées dans une fiche non publiée. Les leads rejoignent le CRM après la demande du visiteur.</p>
                {publicProject?<span className="mt-3 inline-block text-xs font-semibold text-[#315d7c]">{publicProject.published?'En ligne':'Brouillon / hors ligne'}</span>:null}
              </div>
              {publicProject?<a href={'/espace?tab=listings&listing='+publicProject.id} className="inline-flex min-h-[42px] items-center justify-center bg-[#12304a] px-4 text-xs font-semibold text-white">Ouvrir / publier la fiche</a>:<button onClick={createPublicationDraft} disabled={busy} className="min-h-[42px] bg-[#12304a] px-4 text-xs font-semibold text-white disabled:opacity-50">Préparer la fiche du programme</button>}
            </div>
            <p className="mt-3 text-xs text-[#9b6d33]">Avant publication : vérifier les droits d’utilisation des photos API, l’exactitude des prix, le promoteur et l’échéancier. Disponibilités jamais garanties par l’import.</p>
            <section className="mt-5 border-t border-[#d9e1e8] pt-5">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h4 className="text-base font-semibold text-[#12304a]">1. Rechercher et enrichir depuis le site officiel</h4>
                  <p className="mt-2 max-w-2xl text-xs leading-6 text-[#687685]">Bosphoras analyse la page du promoteur en brouillon : description factuelle, équipements, typologies, photos et éventuelles coordonnées. Aucun texte ni visuel n’est publié sans validation.</p>
                  {developerById[selected.developer_id]?.website?<p className="mt-1 text-xs text-[#557263]">Promoteur : {developerById[selected.developer_id].website}</p>:<p className="mt-1 text-xs text-[#a16a39]">Site du promoteur non encore identifié ; tu peux renseigner la page officielle du programme.</p>}
                </div>
              </div>
              <div className="mt-4 flex flex-wrap items-end gap-3">
                <label className={label+" min-w-[220px] flex-1"}>Lien de la page officielle du programme
                  <input key={selected.id} ref={officialInput} type="url" defaultValue={selected.official_project_url||researched?.official_url||''} placeholder="https://promoteur.com/projets/nom-du-programme" className={input}/>
                </label>
                <button type="button" disabled={busy||officialBusy} onClick={()=>officialAction('scan')} className="min-h-[42px] bg-[#12304a] px-4 text-xs font-semibold text-white disabled:opacity-50">{officialBusy?'Analyse en cours…':'Rechercher / analyser'}</button>
              </div>
              {researched?<div className="mt-4 border border-[#d9e1e8] bg-white p-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <strong className="text-sm text-[#12304a]">Résultat : {researched.status==='ready'?'Suggestions à examiner':researched.status==='needs_url'?'URL officielle manquante':researched.status==='error'?'Analyse non aboutie':researched.status}</strong>
                  {researched.official_url?<a href={researched.official_url} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-[#315d7c] underline">Ouvrir la source officielle</a>:null}
                </div>
                {researched.status_message?<p className="mt-2 text-xs leading-5 text-[#687685]">{researched.status_message}</p>:null}
                {researched.status==='ready'&&!publicProject?.published?<div className="mt-4 grid gap-4">
                  {researched.suggested_description?.fr?<label className="flex items-start gap-3 rounded-lg border border-[#dde5df] bg-[#f6faf7] p-3 text-xs">
                    <input className="mt-1" type="checkbox" checked={officialUseDescription} onChange={e=>setOfficialUseDescription(e.target.checked)}/>
                    <span><strong className="block text-sm text-[#153d2f]">Utiliser la description originale proposée</strong><span className="mt-2 block leading-6">{researched.suggested_description.fr}</span></span>
                  </label>:null}
                  {researched.source_excerpt?<details className="rounded-lg border border-[#d9e1e8] p-3 text-xs"><summary className="cursor-pointer font-semibold text-[#315d7c]">Éléments trouvés sur le site source (référence privée)</summary><p className="mt-3 whitespace-pre-line leading-6 text-[#526272]">{researched.source_excerpt}</p></details>:null}
                  {(researched.suggested_amenities||[]).length?<div>
                    <strong className="text-sm text-[#12304a]">Équipements mentionnés par la source — à confirmer pour cette phase</strong>
                    <div className="mt-2 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                      {researched.suggested_amenities.map((code:string)=><label key={code} className="flex cursor-pointer gap-2 rounded-lg border border-[#d7e2d7] bg-[#f4f8f4] px-3 py-3 text-xs">
                        <input type="checkbox" checked={officialCodes.includes(code)} onChange={e=>setOfficialCodes(list=>e.target.checked?[...new Set([...list,code])]:list.filter(x=>x!==code))}/>
                        <span><strong className="block text-[#2a5843]">{({pool:'Piscine',gym:'Salle de sport',spa:'Spa',hammam:'Hammam',sauna:'Sauna',bbq:'Barbecue',cinema:'Cinéma',yoga:'Yoga',boxing:'Boxe',kids:'Espace enfants',tennis:'Tennis',basketball:'Basketball',jogging:'Jogging',garden:'Jardins',concierge:'Conciergerie',security:'Sécurité'} as Record<string,string>)[code]||code}</strong>
                          <small className="mt-1 block leading-4 text-[#687685]">{researched.amenity_evidence?.[code]||'Mention trouvée sur la page'}</small>
                        </span>
                      </label>)}
                    </div>
                  </div>:null}
                  {(researched.unit_mentions||[]).length?<div>
                    <strong className="text-sm text-[#12304a]">Typologies mentionnées — aucune disponibilité garantie</strong>
                    <div className="mt-2 flex flex-wrap gap-2">{researched.unit_mentions.map((unit:string)=><label key={unit} className="inline-flex items-center gap-2 border border-[#d9e1e8] bg-white px-3 py-2 text-xs">
                      <input type="checkbox" checked={officialUnits.includes(unit)} onChange={e=>setOfficialUnits(list=>e.target.checked?[...new Set([...list,unit])]:list.filter(x=>x!==unit))}/>{unit}
                    </label>)}</div>
                  </div>:null}
                  {researched.suggested_latitude!=null&&researched.suggested_longitude!=null?<label className="flex items-center gap-3 border border-[#d9e1e8] p-3 text-xs">
                    <input type="checkbox" checked={officialUseLocation} onChange={e=>setOfficialUseLocation(e.target.checked)}/>
                    <span>Reprendre les coordonnées exactes indiquées sur cette page : {researched.suggested_latitude}, {researched.suggested_longitude} (vérifier sur la carte)</span>
                  </label>:<p className="text-xs text-[#a16a39]">Le site n’indique pas de coordonnées géographiques exactes exploitables. La carte reste sur le secteur du projet.</p>}
                  {(researched.suggested_images||[]).length?<div>
                    <strong className="text-sm text-[#12304a]">Visuels repérés sur la page officielle — sélectionner uniquement ceux autorisés</strong>
                    <div className="mt-3 grid gap-2 grid-cols-2 sm:grid-cols-3 xl:grid-cols-4">
                      {researched.suggested_images.map((asset:any,i:number)=><label key={asset.url} className={'cursor-pointer overflow-hidden border-2 '+(officialPhotos.includes(asset.url)?'border-[#245a47]':'border-[#d9e1e8]')}>
                        <img src={asset.url} loading="lazy" alt={'Image candidate n° '+(i+1)} className="aspect-[4/3] w-full bg-[#edf2f0] object-contain"/>
                        <span className="flex items-center gap-2 p-2 text-xs"><input type="checkbox" checked={officialPhotos.includes(asset.url)} onChange={e=>setOfficialPhotos(list=>e.target.checked?[...new Set([...list,asset.url])]:list.filter(u=>u!==asset.url))}/>Visuel {i+1}</span>
                      </label>)}
                    </div>
                    <label className="mt-3 flex items-start gap-2 text-xs leading-5"><input className="mt-1" type="checkbox" checked={officialPhotoRights} onChange={e=>setOfficialPhotoRights(e.target.checked)}/>Je confirme que Bosphoras dispose du droit de réutiliser les visuels sélectionnés.</label>
                  </div>:null}
                  <button type="button" onClick={()=>officialAction('apply')} disabled={busy||officialBusy||(officialPhotos.length>0&&!officialPhotoRights)} className="min-h-[46px] bg-[#245a47] px-5 text-sm font-semibold text-white disabled:opacity-50">Valider les informations sélectionnées dans le brouillon</button>
                  {researched.approved_at?<p className="text-xs text-[#58806a]">Dernière validation : {new Date(researched.approved_at).toLocaleString('fr-FR')}</p>:null}
                </div>:null}
                {publicProject?.published?<p className="mt-2 text-xs text-[#8f673b]">Pour préserver les données en ligne, dépublie le projet avant d’appliquer de nouvelles suggestions.</p>:null}
              </div>:null}
              {officialMessage?<p role="status" aria-live="polite" className="mt-3 border border-[#d7e4df] bg-white p-3 text-xs leading-5 text-[#275943]">{officialMessage}</p>:null}
            </section>
            {selected.source_system==='bayut'?<div className="mt-5 border-t border-[#d9e1e8] pt-5">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="max-w-xl">
                  <h4 className="text-sm font-semibold text-[#12304a]">Galerie photos Bayut · Import détaillé</h4>
                  <p className="mt-2 text-xs leading-6 text-[#687685]">L’import initial contient une seule photo. Le bouton demande les détails de l’annonce rattachée à ce programme, pour retrouver d’autres visuels ou des plans. Ce ne sont pas nécessairement les photos officielles du promoteur.</p>
                  {reviewedMedia?<p className="mt-2 text-xs text-[#315d7c]">Dernière récupération : {new Date(reviewedMedia.fetched_at).toLocaleString('fr-FR')} · Annonce Bayut n° {reviewedMedia.listing_external_id}</p>:null}
                </div>
                <button type="button" disabled={mediaBusy||busy||!importedReference} onClick={getBayutPhotoDetails} className="inline-flex min-h-[44px] items-center justify-center gap-2 bg-[#12304a] px-4 py-2 text-xs font-semibold text-white disabled:opacity-50">
                  <RefreshCw size={14} className={mediaBusy?'animate-spin':''}/>{mediaBusy?'Récupération…':reviewedMedia?'Consulter / actualiser les détails Bayut':'Récupérer les photos détaillées'}
                </button>
              </div>
              {!importedReference?<p className="mt-3 text-xs text-[#ad633d]">Le projet n’a pas d’annonce Bayut importée associée : aucune requête externe ne sera effectuée.</p>:null}
              {reviewedMedia?.source_description?<details className="mt-3 border border-[#d9e1e8] bg-white p-3 text-xs text-[#526272]"><summary className="cursor-pointer font-semibold">Description provenant de l’annonce source (non publiée)</summary><p className="mt-2 whitespace-pre-line leading-6">{reviewedMedia.source_description}</p></details>:null}
              {availableMedia.length?<div className="mt-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <strong className="text-sm text-[#12304a]">{availableMedia.length} image(s) proposées à vérifier</strong>
                  <button type="button" onClick={()=>setChosenMedia(chosenMedia.length===availableMedia.length?[]:availableMedia.map((item:any)=>item.url))} className="border border-[#afbfcb] bg-white px-3 py-2 text-xs font-semibold text-[#315d7c]">{chosenMedia.length===availableMedia.length?'Tout désélectionner':'Tout sélectionner'}</button>
                </div>
                <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {availableMedia.map((item:any,i:number)=><label key={item.url} className={'group relative cursor-pointer overflow-hidden border-2 bg-white '+(chosenMedia.includes(item.url)?'border-[#245a47]':'border-[#d9e1e8]')}>
                    <div className="relative aspect-[4/3] bg-[#ecf0f2]"><img src={item.url} alt={item.title||'Photo de l’annonce Bayut '+String(i+1)} loading="lazy" className="h-full w-full object-contain"/></div>
                    <div className="flex items-start gap-2 p-3 text-xs">
                      <input type="checkbox" checked={chosenMedia.includes(item.url)} onChange={e=>setChosenMedia(list=>e.target.checked?[...new Set([...list,item.url])]:list.filter(url=>url!==item.url))} className="mt-0.5"/>
                      <span className="min-w-0 break-words text-[#526272]">{item.title||'Visuel '+String(i+1)}{i>=(reviewedMedia?.photos?.length||0)?' · Plan':''}</span>
                    </div>
                  </label>)}
                </div>
                <label className="mt-5 flex items-start gap-2 text-xs leading-6 text-[#4c5e69]"><input type="checkbox" checked={mediaRightsConfirmed} onChange={e=>setMediaRightsConfirmed(e.target.checked)} className="mt-1"/>
                  Je confirme avoir vérifié que ces visuels correspondent bien au programme et que Bosphoras dispose du droit de les réutiliser.</label>
                <button type="button" disabled={mediaBusy||busy||!chosenMedia.length||!mediaRightsConfirmed} onClick={saveReviewedBayutPhotos} className="mt-3 min-h-[44px] bg-[#245a47] px-5 text-xs font-semibold text-white disabled:opacity-40">Valider et ajouter {chosenMedia.length} image(s) à la galerie du projet</button>
                <p className="mt-3 text-xs leading-5 text-[#687685]">Les photos existantes sont conservées. Si le programme est déjà publié, la galerie publique n’est pas modifiée automatiquement. Aucune publication n’est déclenchée.</p>
              </div>:null}
              <details className="mt-5 border-t border-[#d9e1e8] pt-4">
                <summary className="cursor-pointer text-xs font-semibold text-[#315d7c]">Ajouter des photos officielles autorisées — sans utiliser RapidAPI</summary>
                <form className="mt-3 grid gap-3" onSubmit={addApprovedManualImages}>
                  <label className={label}>URL HTTPS des photos (une par ligne)
                    <textarea className={input+" min-h-[95px] py-2"} placeholder="https://site-du-promoteur.example/photo1.jpg" rows={3} value={manualImageUrls} onChange={e=>setManualImageUrls(e.target.value)}/>
                  </label>
                  <label className="flex items-start gap-2 text-xs leading-5 text-[#526272]"><input type="checkbox" checked={mediaRightsConfirmed} onChange={e=>setMediaRightsConfirmed(e.target.checked)} className="mt-1"/>
                    Je confirme avoir vérifié que ces images correspondent au programme et que Bosphoras est autorisé à les réutiliser.</label>
                  <button type="submit" disabled={mediaBusy||busy||!manualImageUrls.trim()||!mediaRightsConfirmed} className="min-h-[42px] bg-[#245a47] px-4 text-xs font-semibold text-white disabled:opacity-40">Ajouter à la galerie du projet</button>
                </form>
              </details>
              {reviewedMedia?.amenities?.length?<details className="mt-3 border border-[#d9e1e8] bg-white p-3 text-xs text-[#526272]">
                <summary className="cursor-pointer font-semibold">Autres données reçues de Bayut · {reviewedMedia.amenities.length} équipement(s)</summary>
                <p className="mt-2 leading-6">{reviewedMedia.amenities.join(' · ')}</p>
              </details>:null}

              {mediaMessage?<p role="status" aria-live="polite" className="mt-4 border border-[#d3e0df] bg-white p-3 text-xs leading-5 text-[#31576b]">{mediaMessage}</p>:null}
            </div>:null}

            {publicProject&&!publicProject.published?<details className="mt-5 border-t border-[#d9e1e8] pt-4">
              <summary className="cursor-pointer text-sm font-semibold text-[#315d7c]">Enrichir la fiche du programme : description, typologies, fourchettes, carte</summary>
              <form onSubmit={updateProgramDetails} className="mt-4 grid gap-3 md:grid-cols-2">
                <label className={label+" md:col-span-2"}>Nom public du programme<input name="title" defaultValue={publicProject.title?.fr||selected.name} className={input} required/></label>
                <label className={label+" md:col-span-2"}>Résumé commercial factuel<textarea name="summary" rows={2} defaultValue={publicProject.summary?.fr||''} className={input}/></label>
                <label className={label+" md:col-span-2"}>Description complète FR<textarea name="description" rows={8} defaultValue={publicProject.description?.fr||''} className={input} placeholder="Présentation, cadre de vie, positionnement, finitions, informations réelles…"/></label>
                <label className={label}>Prix minimum indicatif<input name="min" type="number" min="0" step="1" defaultValue={publicProject.total_price??''} className={input}/></label>
                <label className={label}>Prix maximum (si connu)<input name="max" type="number" min="0" step="1" defaultValue={publicProject.project_price_max??''} className={input}/></label>
                <label className={label+" md:col-span-2"}>Livraison prévue (date ou trimestre)<input name="delivery" defaultValue={publicProject.delivery?.fr||''} className={input} placeholder="Ex. T2 2028"/></label>
                <label className={label+" md:col-span-2"}>Équipements / caractéristiques confirmés (un par ligne)<textarea name="amenities" rows={5} defaultValue={(publicProject.highlights||[]).map((x:any)=>x?.fr||'').filter(Boolean).join('\n')} className={input}/></label>
                <label className={label+" md:col-span-2"}>Typologies (une par ligne : Type | chambres | surface m² | prix min | prix max)
                  <textarea name="types" rows={5} defaultValue={(publicProject.project_unit_options||[]).map((o:any)=>[o.label,o.bedrooms??'',o.areaM2??'',o.price??'',o.priceMax??''].join(' | ')).join('\n')} className={input} placeholder="1 BR | 1 | 85 | 1200000 | 1500000"/>
                  <span className="text-xs normal-case tracking-normal">Laisser vide tout chiffre inconnu. La typologie ne représente pas un lot réellement disponible.</span>
                </label>
                <label className={label}>Latitude vérifiée<input name="lat" type="number" step="any" min="-90" max="90" defaultValue={publicProject.project_latitude??''} className={input}/></label>
                <label className={label}>Longitude vérifiée<input name="lng" type="number" step="any" min="-180" max="180" defaultValue={publicProject.project_longitude??''} className={input}/></label>
                <p className="md:col-span-2 text-xs text-[#687685]">Sans coordonnées vérifiées, la carte pointe le secteur du quartier. Le plan de paiement et les photos se modifient dans Publications → Modifier.</p>
                <button type="submit" disabled={busy} className="min-h-[44px] bg-[#12304a] px-5 text-sm font-semibold text-white md:col-span-2">Enregistrer l’enrichissement du programme</button>
              </form>
            </details>:null}

            {selectedLeads.length?<div className="mt-5 border-t border-[#d9e1e8] pt-4"><strong className="text-sm text-[#12304a]">{selectedLeads.length} demande(s) de renseignements pour ce projet</strong>
              <div className="mt-3 grid gap-2">{selectedLeads.slice(0,5).map((lead:any)=><div key={lead.id} className="flex flex-wrap items-center justify-between gap-2 border border-[#e2e7eb] bg-white px-3 py-2 text-xs"><span>{lead.full_name} · {lead.email} · {lead.budget||'Budget non précisé'}</span><span className="text-[#597463]">{lead.wants_similar_options?'Alternatives acceptées':'Projet uniquement'}</span></div>)}</div>
            </div>:null}
          </div>:null}

          <details className="border border-[#d9e1e8] bg-white">
            <summary className="cursor-pointer px-5 py-4 text-sm font-semibold">Stock interne (facultatif) · Ajouter ou vérifier un lot précis</summary>
            <div className="border-t border-[#e7edf2] bg-[#f5f8fa] px-5 py-4 text-xs leading-6 text-[#526272]">
              {importedReference?<>
                <strong>Annonce API retrouvée :</strong> des données de typologie, surface, prix indicatif et échéancier peuvent être proposées.
                Elles ne constituent pas une liste d'unités disponibles certifiée par le promoteur.
                Les surfaces API sans unité explicite restent à confirmer, et ne sont pas copiées dans les champs en m².
                <button type="button" onClick={()=>setPrefillProjectId(prefillEnabled?'':selected.id)} className="ml-3 border border-[#315d7c] px-3 py-2 font-semibold text-[#12304a]">
                  {prefillEnabled?'Effacer les suggestions':'Préremplir depuis l’annonce importée'}
                </button>
                {importedReference.source_url?<a href={importedReference.source_url} target="_blank" rel="noopener noreferrer" className="ml-3 underline">Voir la source</a>:null}
              </>:<>Aucune annonce API associée à ce projet. Les informations de chaque unité doivent être saisies et vérifiées manuellement.</>}
            </div>
            <form key={selected.id+'-'+(prefillEnabled?'offer':'manual')} onSubmit={createUnit} onInvalidCapture={(e:any)=>setUnitFormMessage('Un champ du formulaire est invalide : '+(e.target?.name||'vérifier les nombres saisis')+'.')} className="grid gap-3 border-t border-[#e7edf2] p-5 md:grid-cols-4">
              {prefillEnabled?<p className="md:col-span-4 text-xs text-[#9a6927]">Préremplissage indicatif issu d'une annonce. Vérifiez le numéro, le lot précis, le prix, les surfaces, l'échéancier et la disponibilité avant de faire une offre.</p>:null}
              <label className={label}>N° unité<input name="unit_number" className={input}/></label>
              <label className={label}>Réf. externe<input name="external_id" className={input}/></label>
              <label className={label}>Bloc / bâtiment<input name="building" className={input}/></label>
              <label className={label}>Étage<input name="floor" className={input}/></label>
              <label className={label}>Typologie<input name="unit_type" placeholder="2+1, 2BR…" className={input}/></label>
              <label className={label}>Chambres<input name="bedrooms" type="number" min="0" defaultValue={Number.isInteger(offerBedrooms)&&offerBedrooms>=0?offerBedrooms:''} className={input}/></label>
              <label className={label}>SDB<input name="bathrooms" type="number" min="0" defaultValue={Number.isInteger(offerBathrooms)&&offerBathrooms>=0?offerBathrooms:''} className={input}/></label>
              <label className={label}>Vue<input name="view" className={input}/></label>
              <label className={label}>Surface brute (m², à confirmer)<input name="gross_area_m2" inputMode="decimal" defaultValue={offerArea||''} className={input}/></label>
              <label className={label}>Surface nette<input name="net_area_m2" inputMode="decimal" className={input}/></label>
              <label className={label}>Devise<select name="currency" defaultValue={selected.currency} className={input}><option>EUR</option><option>USD</option><option>AED</option><option>TRY</option><option>GBP</option></select></label>
              <label className={label}>Prix annoncé (non vérifié)<input name="list_price" inputMode="decimal" defaultValue={offerPrice||''} className={input}/></label>
              <label className={label}>Prix cash<input name="cash_price" inputMode="decimal" className={input}/></label>
              <label className={label}>Prix échéancé<input name="installment_price" inputMode="decimal" className={input}/></label>
              <label className={label}>Capital d'entrée<input name="entry_capital" inputMode="decimal" className={input}/></label>
              <label className={label}>Statut réel<select name="status" defaultValue="unverified" className={input}><option value="unverified">À vérifier — non confirmée</option><option value="available">Disponible — confirmé manuellement</option><option value="option">Option</option><option value="reserved">Réservée</option><option value="deposit_received">Acompte reçu</option><option value="contracted">Contractée</option><option value="sold">Vendue</option><option value="withdrawn">Retirée</option></select></label>
              <div className="md:col-span-4 border-t border-[#e7edf2] pt-4">
                <p className="text-sm font-semibold text-[#12304a]">Plan de paiement de l'unité</p>
                <p className="mt-1 text-xs text-[#687685]">Échéancier indicatif ; confirmation écrite du promoteur requise. Laisser vide si inconnu. Si renseigné, les pourcentages doivent totaliser 100 %.</p>
              </div>
              {paymentFields.map((f)=><label key={f.key} className={label}>{f.label} (%)<input name={f.name} type="number" step="0.1" min="0" max="100" defaultValue={paymentBreakdown?.[f.key]??''} className={input}/></label>)}
              <p className="md:col-span-4 text-xs leading-5 text-[#687685]">Un projet et une annonce API ne garantissent pas le stock réel. Le statut « À vérifier » n'est pas compté comme disponible.</p>
              <button type="submit" disabled={busy} className="min-h-[42px] bg-[#12304a] px-4 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50 md:col-span-4"><Plus size={14} className="mr-2 inline"/>{busy?'Enregistrement…':"Enregistrer l’unité dans le stock privé"}</button>
              {unitFormMessage?<p role="status" aria-live="polite" className="md:col-span-4 border border-[#b9cbd8] bg-[#f4f8fb] p-3 text-xs text-[#12304a]">{unitFormMessage}</p>:null}
            </form>
          </details>

          <div className="overflow-x-auto border border-[#d9e1e8] bg-white">
            <table className="w-full min-w-[950px] text-left text-sm">
              <thead className="border-b border-[#d9e1e8] bg-[#f7f9fb] text-[0.65rem] uppercase tracking-[0.08em] text-[#687685]"><tr><th className="p-3">Unité</th><th className="p-3">Étage</th><th className="p-3">Surface</th><th className="p-3">Vue</th><th className="p-3">Prix</th><th className="p-3">Entrée</th><th className="p-3">Statut</th></tr></thead>
              <tbody>{selectedUnits.map((u:any)=><tr key={u.id} className="border-b border-[#edf1f4]"><td className="p-3"><strong>{unitLabel(u)}</strong><span className="mt-1 block text-xs text-[#7b8794]">{u.external_id||'—'}</span></td><td className="p-3">{u.floor||'—'}</td><td className="p-3">{u.gross_area_m2?String(u.gross_area_m2)+' m²':'—'}</td><td className="p-3">{u.view||'—'}</td><td className="p-3 font-semibold">{money(u.list_price,u.currency)}</td><td className="p-3">{money(u.entry_capital,u.currency)}</td><td className="p-3"><select value={u.status} onChange={e=>updateUnitStatus(u.id,e.target.value)} className="min-h-[36px] border border-[#cfd8e3] bg-white px-2 text-xs"><option value="unverified">À vérifier</option><option value="available">Disponible</option><option value="option">Option</option><option value="reserved">Réservée</option><option value="deposit_received">Acompte reçu</option><option value="contracted">Contractée</option><option value="sold">Vendue</option><option value="withdrawn">Retirée</option></select><button type="button" onClick={()=>{setEditingUnitId(editingUnitId===u.id?'':u.id);setEditPrefillUnitId('');}} className="ml-2 border border-[#cfd8e3] bg-white px-2 py-2 text-xs font-semibold text-[#315d7c]">Modifier</button></td></tr>)}</tbody>
            </table>
            {editingUnit?<form key={editingUnit.id+'-'+(editingWithOffer?'source':'existing')} onSubmit={updateExistingUnit} className="grid gap-3 border-t border-[#d9e1e8] bg-[#f8fafb] p-5 md:grid-cols-4">
              <div className="md:col-span-4">
                <h3 className="text-sm font-semibold text-[#12304a]">Modifier l’unité — {unitLabel(editingUnit)}</h3>
                {importedReference?<button type="button" onClick={()=>setEditPrefillUnitId(editingWithOffer?'':editingUnit.id)} className="mt-2 border border-[#315d7c] px-3 py-2 text-xs font-semibold text-[#12304a]">{editingWithOffer?'Retirer les suggestions':'Compléter les champs vides depuis l’annonce API'}</button>:null}
                <p className="mt-2 text-xs text-[#687685]">L’annonce API ne certifie ni le numéro réel du lot ni sa disponibilité. Les champs existants restent prioritaires sur les suggestions. Une surface sans unité explicite n'est pas convertie.</p>
              </div>
              <label className={label}>N° unité<input name="unit_number" defaultValue={editingUnit.unit_number||''} className={input}/></label>
              <label className={label}>Bloc / bâtiment<input name="building" defaultValue={editingUnit.building||''} className={input}/></label>
              <label className={label}>Étage<input name="floor" defaultValue={editingUnit.floor||''} className={input}/></label>
              <label className={label}>Typologie<input name="unit_type" defaultValue={editingUnit.unit_type||''} className={input}/></label>
              <label className={label}>Chambres<input name="bedrooms" type="number" min="0" defaultValue={fromOfferIfEmpty(editingUnit.bedrooms,editOffer.rooms)} className={input}/></label>
              <label className={label}>SDB<input name="bathrooms" type="number" min="0" defaultValue={fromOfferIfEmpty(editingUnit.bathrooms,editOffer.baths)} className={input}/></label>
              <label className={label}>Surface brute (m²)<input name="gross_area_m2" type="number" step="0.01" min="0" defaultValue={fromOfferIfEmpty(editingUnit.gross_area_m2,verifiedAreaM2(editOffer))} className={input}/></label>
              <label className={label}>Surface nette (m²)<input name="net_area_m2" type="number" step="0.01" min="0" defaultValue={editingUnit.net_area_m2??''} className={input}/></label>
              <label className={label}>Devise<select name="currency" defaultValue={editingUnit.currency||selected.currency} className={input}><option>EUR</option><option>USD</option><option>AED</option><option>TRY</option><option>GBP</option></select></label>
              <label className={label}>Prix annonce (non vérifié)<input name="list_price" type="number" step="0.01" min="0" defaultValue={fromOfferIfEmpty(editingUnit.list_price,positiveNumber(editOffer.price))} className={input}/></label>
              <label className={label}>Prix cash<input name="cash_price" type="number" step="0.01" min="0" defaultValue={editingUnit.cash_price??''} className={input}/></label>
              <label className={label}>Prix échéancé<input name="installment_price" type="number" step="0.01" min="0" defaultValue={editingUnit.installment_price??''} className={input}/></label>
              <label className={label}>Capital d'entrée<input name="entry_capital" type="number" step="0.01" min="0" defaultValue={editingUnit.entry_capital??''} className={input}/></label>
              <label className={label}>Statut<select name="status" defaultValue={editingUnit.status} className={input}><option value="unverified">À vérifier</option><option value="available">Disponible confirmé</option><option value="option">Option</option><option value="reserved">Réservée</option><option value="deposit_received">Acompte reçu</option><option value="contracted">Contractée</option><option value="sold">Vendue</option><option value="withdrawn">Retirée</option></select></label>
              <div className="md:col-span-4 border-t border-[#d9e1e8] pt-3"><strong className="text-sm">Échéancier de paiement (%)</strong><p className="text-xs text-[#687685]">Si connu, le total doit être égal à 100 %. À confirmer auprès du promoteur.</p></div>
              {paymentFields.map((f)=><label key={f.key} className={label}>{f.label}<input name={f.name} type="number" step="0.1" min="0" max="100" defaultValue={fromOfferIfEmpty(savedPaymentPercentage(editingUnit.payment_plan,f.label),editBreakdown?.[f.key])} className={input}/></label>)}
              <div className="md:col-span-4 flex gap-3"><button disabled={busy} className="min-h-[42px] bg-[#12304a] px-5 text-sm font-semibold text-white">Enregistrer les modifications</button><button type="button" onClick={()=>{setEditingUnitId('');setEditPrefillUnitId('');}} className="border border-[#cfd8e3] bg-white px-5 text-sm">Annuler</button></div>
            </form>:null}
            {!selectedUnits.length?<p className="p-8 text-center text-sm text-[#687685]">Aucune unité. Ajoutez le stock de ce projet.</p>:null}
          </div>
          <section className="border border-[#d9e1e8] bg-white p-5">
            <h3 className="text-lg font-semibold">Historique du stock</h3>
            <div className="mt-4 space-y-3">{history.filter((h:any)=>selectedUnits.some((u:any)=>u.id===h.unit_id)).slice(0,20).map((h:any)=>{const u=units.find((x:any)=>x.id===h.unit_id);return <div key={h.id} className="flex flex-wrap items-start justify-between gap-3 border-b border-[#edf1f4] pb-3"><div><strong className="block text-sm">{unitLabel(u)}</strong><span className="mt-1 block text-xs uppercase tracking-[0.08em] text-[#315d7c]">{h.event_type}</span></div><span className="text-xs text-[#7b8794]">{new Date(h.created_at).toLocaleString('fr-FR')}</span></div>})}{!history.some((h:any)=>selectedUnits.some((u:any)=>u.id===h.unit_id))?<p className="text-sm text-[#687685]">Aucune modification de stock enregistrée.</p>:null}</div>
          </section>
        </div>:<div className="border border-dashed border-[#cfd8e3] bg-white p-10 text-center text-sm text-[#687685]">Sélectionnez un projet.</div>}
      </section>
    </div>
  </div>;
}
