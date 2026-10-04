// @ts-nocheck
'use client';

import { FormEvent, useEffect, useMemo, useState } from 'react';
import {
  AlertTriangle,
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Pencil,
  Phone,
  Plus,
  Search,
  Tags,
  Target,
  Trash2,
  UserRound,
  X,
} from 'lucide-react';
import { getPortalSupabase } from '@/lib/portalSupabase';

function money(value:any,currency='EUR'){
  const n=Number(value||0);
  return new Intl.NumberFormat('fr-FR',{style:'currency',currency:currency||'EUR',maximumFractionDigits:0}).format(Number.isFinite(n)?n:0);
}

function splitList(value:any){
  if(Array.isArray(value)) return value.map(String).map((v)=>v.trim()).filter(Boolean);
  return String(value||'').split(/[\n,;]+/).map((v)=>v.trim()).filter(Boolean);
}

function contactName(contact:any){
  return [contact?.first_name,contact?.last_name].filter(Boolean).join(' ')||contact?.company||contact?.email||contact?.phone||'Contact';
}

function shortDate(value:any){
  if(!value)return '—';
  try{return new Date(value).toLocaleString('fr-FR',{day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit'});}
  catch{return String(value);}
}

function daysLate(value:any){
  if(!value)return 0;
  return Math.max(0,Math.floor((Date.now()-new Date(value).getTime())/86400000));
}

function priorityLabel(value:string){
  return value==='hot'?'Prioritaire':value==='cold'?'Faible':'Normal';
}

function statusLabel(value:string){
  const map:any={new:'Nouveau',contacted:'Contacté',qualified:'Qualifié',nurturing:'À relancer',converted:'Converti',lost:'Perdu',inactive:'Inactif'};
  return map[value]||value||'Nouveau';
}

function requestGoalLabel(value:string){
  const map:any={rental:'Rendement locatif',capital_growth:'Valorisation',residence:'Résidence personnelle',family:'Usage familial',diversification:'Diversification'};
  return map[value]||value||'—';
}

export function ProfessionalCrmPanel({isAdmin,user,profile,contacts,deals,listings,partnerUsers,reload}:any){
  const supabase=getPortalSupabase();
  const [activities,setActivities]=useState<any[]>([]);
  const [requests,setRequests]=useState<any[]>([]);
  const [projects,setProjects]=useState<any[]>([]);
  const [units,setUnits]=useState<any[]>([]);
  const [shortlists,setShortlists]=useState<any[]>([]);
  const [selectedId,setSelectedId]=useState<string|null>(null);
  const [editing,setEditing]=useState(false);
  const [showNew,setShowNew]=useState(false);
  const [showRequest,setShowRequest]=useState(false);
  const [showActivity,setShowActivity]=useState(false);
  const [showDeal,setShowDeal]=useState(false);
  const [showMatches,setShowMatches]=useState(false);
  const [busy,setBusy]=useState(false);
  const [notice,setNotice]=useState<{type:'success'|'error';text:string}|null>(null);
  const [search,setSearch]=useState('');
  const [status,setStatus]=useState('all');
  const [priority,setPriority]=useState('all');
  const [owner,setOwner]=useState('all');

  async function loadRelated(){
    const [{data:activityRows},{data:requestRows},{data:projectRows},{data:unitRows},{data:shortlistRows}]=await Promise.all([
      supabase.from('crm_activities').select('*').order('created_at',{ascending:false}).limit(500),
      supabase.from('crm_contact_requests').select('*').order('created_at',{ascending:false}).limit(500),
      supabase.from('real_estate_projects').select('*').order('updated_at',{ascending:false}),
      supabase.from('project_units').select('*').order('updated_at',{ascending:false}),
      supabase.from('client_property_shortlist').select('*').order('created_at',{ascending:false}).limit(1000),
    ]);
    setActivities(activityRows||[]);
    setRequests(requestRows||[]);
    setProjects(projectRows||[]);
    setUnits(unitRows||[]);
    setShortlists(shortlistRows||[]);
  }

  useEffect(()=>{loadRelated();},[]);

  useEffect(()=>{
    if(selectedId&&!contacts.some((c:any)=>c.id===selectedId)){
      setSelectedId(null);
      setEditing(false);
    }
  },[contacts,selectedId]);

  useEffect(()=>{
    if(!selectedId||typeof window==='undefined'||window.innerWidth>=1280)return;
    window.setTimeout(()=>document.getElementById('crm-contact-detail')?.scrollIntoView({behavior:'smooth',block:'start'}),80);
  },[selectedId]);

  async function refresh(message?:string){
    await Promise.all([loadRelated(),reload()]);
    if(message){
      setNotice({type:'success',text:message});
      window.setTimeout(()=>setNotice(null),4500);
    }
  }

  const selected=contacts.find((c:any)=>c.id===selectedId)||null;
  const selectedActivities=selected?activities.filter((a:any)=>a.contact_id===selected.id):[];
  const selectedRequests=selected?requests.filter((r:any)=>r.contact_id===selected.id):[];
  const selectedDeals=selected?deals.filter((d:any)=>d.contact_id===selected.id):[];

  const actionMeta=(contact:any)=>{
    const open=activities.filter((a:any)=>a.contact_id===contact.id&&!a.completed_at&&a.due_at).sort((a:any,b:any)=>new Date(a.due_at).getTime()-new Date(b.due_at).getTime());
    const overdue=open.filter((a:any)=>new Date(a.due_at).getTime()<Date.now());
    if(overdue.length){
      const first=overdue[0];
      const late=daysLate(first.due_at);
      return {tone:'late',count:overdue.length,text:first.subject||'Action en retard',sub:late>0?`${late} j de retard`:'À faire maintenant'};
    }
    const today=open.find((a:any)=>{
      const d=new Date(a.due_at);const n=new Date();
      return d.getFullYear()===n.getFullYear()&&d.getMonth()===n.getMonth()&&d.getDate()===n.getDate();
    });
    if(today)return {tone:'today',count:1,text:today.subject||'Action aujourd’hui',sub:shortDate(today.due_at)};
    if(open[0])return {tone:'next',count:1,text:open[0].subject||'Prochaine action',sub:shortDate(open[0].due_at)};
    if(contact.next_action_at){
      const late=new Date(contact.next_action_at).getTime()<Date.now();
      return {tone:late?'late':'next',count:1,text:late?'Action prévue en retard':'Prochaine action',sub:shortDate(contact.next_action_at)};
    }
    return {tone:'none',count:0,text:'Aucune action planifiée',sub:'À programmer'};
  };

  const filtered=useMemo(()=>contacts.filter((contact:any)=>{
    if(status!=='all'&&contact.status!==status)return false;
    if(priority!=='all'&&(contact.lead_priority||'warm')!==priority)return false;
    if(owner!=='all'&&contact.owner_user_id!==owner)return false;
    const q=search.trim().toLowerCase();
    if(!q)return true;
    return [
      contact.first_name,contact.last_name,contact.company,contact.email,contact.phone,contact.whatsapp,
      ...(contact.alternate_emails||[]),...(contact.alternate_phones||[]),...(contact.tags||[]),
      contact.source,contact.nationality,contact.country_of_residence
    ].filter(Boolean).join(' ').toLowerCase().includes(q);
  }),[contacts,status,priority,owner,search]);

  const overdueContacts=contacts.filter((c:any)=>actionMeta(c).tone==='late').length;
  const todayContacts=contacts.filter((c:any)=>actionMeta(c).tone==='today').length;
  const unplanned=contacts.filter((c:any)=>actionMeta(c).tone==='none').length;

  async function createContact(e:FormEvent<HTMLFormElement>){
    e.preventDefault();if(busy)return;
    const fd=new FormData(e.currentTarget);
    const email=String(fd.get('email')||'').trim().toLowerCase();
    const phone=String(fd.get('phone')||'').trim();
    const normalized=phone.replace(/\D+/g,'');
    const duplicate=contacts.find((c:any)=>{
      const emails=[c.email,...(c.alternate_emails||[])].filter(Boolean).map((x:any)=>String(x).trim().toLowerCase());
      const phones=[c.phone,c.whatsapp,...(c.alternate_phones||[])].filter(Boolean).map((x:any)=>String(x).replace(/\D+/g,''));
      return (email&&emails.includes(email))||(normalized.length>=7&&phones.includes(normalized));
    });
    if(duplicate){setNotice({type:'error',text:`Ce contact existe déjà : ${contactName(duplicate)}.`});return;}
    setBusy(true);
    try{
      const row:any={
        owner_user_id:user.id,
        partner_id:isAdmin?null:profile.partner_id,
        first_name:String(fd.get('first_name')||'').trim()||null,
        last_name:String(fd.get('last_name')||'').trim()||null,
        email:email||null,
        phone:phone||null,
        source:String(fd.get('source')||'partner').trim()||'partner',
        status:'new',
        lead_priority:String(fd.get('lead_priority')||'warm'),
        next_action_at:String(fd.get('next_action_at')||'')?new Date(String(fd.get('next_action_at'))).toISOString():null,
        notes:String(fd.get('notes')||'').trim()||null,
        created_by:user.id,
      };
      const {data,error}=await supabase.from('crm_contacts').insert(row).select('*').single();
      if(error)throw error;
      setSelectedId(data.id);setShowNew(false);setEditing(true);
      await refresh('Contact créé. Vous pouvez maintenant compléter son dossier.');
    }catch(error:any){setNotice({type:'error',text:error?.message||'Création impossible.'});}
    finally{setBusy(false);}
  }

  async function updateContact(e:FormEvent<HTMLFormElement>){
    e.preventDefault();if(!selected||busy)return;
    const fd=new FormData(e.currentTarget);
    setBusy(true);
    try{
      const row:any={
        first_name:String(fd.get('first_name')||'').trim()||null,
        last_name:String(fd.get('last_name')||'').trim()||null,
        company:String(fd.get('company')||'').trim()||null,
        email:String(fd.get('email')||'').trim().toLowerCase()||null,
        phone:String(fd.get('phone')||'').trim()||null,
        whatsapp:String(fd.get('whatsapp')||'').trim()||null,
        alternate_emails:splitList(fd.get('alternate_emails')),
        alternate_phones:splitList(fd.get('alternate_phones')),
        nationality:String(fd.get('nationality')||'').trim()||null,
        country_of_residence:String(fd.get('country_of_residence')||'').trim()||null,
        language:String(fd.get('language')||'').trim()||null,
        source:String(fd.get('source')||'').trim()||null,
        status:String(fd.get('status')||'new'),
        lead_priority:String(fd.get('lead_priority')||'warm'),
        preferred_contact_method:String(fd.get('preferred_contact_method')||'').trim()||null,
        preferred_contact_time:String(fd.get('preferred_contact_time')||'').trim()||null,
        tags:splitList(fd.get('tags')),
        target_cities:splitList(fd.get('target_cities')),
        target_types:splitList(fd.get('target_types')),
        budget_min:Number(fd.get('budget_min')||0)||null,
        budget_max:Number(fd.get('budget_max')||0)||null,
        capital_available:Number(fd.get('capital_available')||0)||null,
        currency:String(fd.get('currency')||'EUR'),
        timeframe:String(fd.get('timeframe')||'').trim()||null,
        investment_goal:String(fd.get('investment_goal')||'').trim()||null,
        target_yield_pct:Number(fd.get('target_yield_pct')||0)||null,
        financing_required:fd.get('financing_required')==='on',
        visa_or_residency_goal:String(fd.get('visa_or_residency_goal')||'').trim()||null,
        preferred_delivery_before:String(fd.get('preferred_delivery_before')||'')||null,
        min_surface_m2:Number(fd.get('min_surface_m2')||0)||null,
        max_entry_capital:Number(fd.get('max_entry_capital')||0)||null,
        must_haves:splitList(fd.get('must_haves')),
        excluded_areas:splitList(fd.get('excluded_areas')),
        notes:String(fd.get('notes')||'').trim()||null,
        next_action_at:String(fd.get('next_action_at')||'')?new Date(String(fd.get('next_action_at'))).toISOString():null,
        updated_at:new Date().toISOString(),
      };
      const {error}=await supabase.from('crm_contacts').update(row).eq('id',selected.id);
      if(error)throw error;
      setEditing(false);
      await refresh('Dossier contact mis à jour.');
    }catch(error:any){setNotice({type:'error',text:error?.message||'Mise à jour impossible.'});}
    finally{setBusy(false);}
  }

  async function assignContact(ownerUserId:string){
    if(!selected||!isAdmin||!ownerUserId)return;
    const {error}=await supabase.rpc('admin_assign_crm_contact',{p_contact_id:selected.id,p_owner_user_id:ownerUserId});
    if(error){setNotice({type:'error',text:error.message});return;}
    const ownerProfile=partnerUsers.find((p:any)=>p.user_id===ownerUserId);
    await supabase.from('crm_contact_requests').update({owner_user_id:ownerUserId,partner_id:ownerProfile?.partner_id||null,updated_at:new Date().toISOString()}).eq('contact_id',selected.id);
    await refresh('Contact réattribué.');
  }

  async function deleteContact(){
    if(!selected||!isAdmin)return;
    if(!window.confirm(`Supprimer définitivement ${contactName(selected)} et ses données CRM liées ?`))return;
    const {error}=await supabase.from('crm_contacts').delete().eq('id',selected.id);
    if(error){setNotice({type:'error',text:error.message});return;}
    setSelectedId(null);setEditing(false);
    await refresh('Contact supprimé.');
  }

  async function createRequest(e:FormEvent<HTMLFormElement>){
    e.preventDefault();if(!selected)return;
    const fd=new FormData(e.currentTarget);
    const row:any={
      contact_id:selected.id,
      owner_user_id:selected.owner_user_id||user.id,
      partner_id:selected.partner_id||null,
      title:String(fd.get('title')||'Nouvelle demande').trim()||'Nouvelle demande',
      status:'active',
      target_cities:splitList(fd.get('target_cities')),
      target_types:splitList(fd.get('target_types')),
      budget_min:Number(fd.get('budget_min')||0)||null,
      budget_max:Number(fd.get('budget_max')||0)||null,
      capital_available:Number(fd.get('capital_available')||0)||null,
      currency:String(fd.get('currency')||selected.currency||'EUR'),
      investment_goal:String(fd.get('investment_goal')||'').trim()||null,
      timeframe:String(fd.get('timeframe')||'').trim()||null,
      bedrooms_min:Number(fd.get('bedrooms_min')||0)||null,
      target_yield_pct:Number(fd.get('target_yield_pct')||0)||null,
      financing_required:fd.get('financing_required')==='on',
      visa_or_residency_goal:String(fd.get('visa_or_residency_goal')||'').trim()||null,
      preferred_delivery_before:String(fd.get('preferred_delivery_before')||'')||null,
      min_surface_m2:Number(fd.get('min_surface_m2')||0)||null,
      max_entry_capital:Number(fd.get('max_entry_capital')||0)||null,
      must_haves:splitList(fd.get('must_haves')),
      excluded_areas:splitList(fd.get('excluded_areas')),
      notes:String(fd.get('notes')||'').trim()||null,
      created_by:user.id,
    };
    const {error}=await supabase.from('crm_contact_requests').insert(row);
    if(error){setNotice({type:'error',text:error.message});return;}
    setShowRequest(false);
    await refresh('Nouvelle demande ajoutée au dossier.');
  }

  async function requestStatus(id:string,next:string){
    const {error}=await supabase.from('crm_contact_requests').update({status:next,updated_at:new Date().toISOString()}).eq('id',id);
    if(error)setNotice({type:'error',text:error.message});else refresh();
  }

  async function createActivity(e:FormEvent<HTMLFormElement>){
    e.preventDefault();if(!selected)return;
    const fd=new FormData(e.currentTarget);
    const due=String(fd.get('due_at')||'');
    const row:any={
      contact_id:selected.id,
      deal_id:String(fd.get('deal_id')||'')||null,
      owner_user_id:selected.owner_user_id||user.id,
      activity_type:String(fd.get('activity_type')||'task'),
      subject:String(fd.get('subject')||'Relance').trim()||'Relance',
      body:String(fd.get('body')||'').trim()||null,
      due_at:due?new Date(due).toISOString():null,
      created_by:user.id,
    };
    const {error}=await supabase.from('crm_activities').insert(row);
    if(error){setNotice({type:'error',text:error.message});return;}
    if(due)await supabase.from('crm_contacts').update({next_action_at:new Date(due).toISOString(),updated_at:new Date().toISOString()}).eq('id',selected.id);
    setShowActivity(false);
    await refresh('Action ajoutée.');
  }

  async function completeActivity(activity:any){
    const {error}=await supabase.from('crm_activities').update({completed_at:new Date().toISOString()}).eq('id',activity.id);
    if(error){setNotice({type:'error',text:error.message});return;}
    await refresh('Action terminée.');
  }

  async function createDeal(e:FormEvent<HTMLFormElement>){
    e.preventDefault();if(!selected)return;
    const fd=new FormData(e.currentTarget);
    const row:any={
      contact_id:selected.id,
      owner_user_id:selected.owner_user_id||user.id,
      partner_id:selected.partner_id||null,
      listing_id:String(fd.get('listing_id')||'')||null,
      title:String(fd.get('title')||'Acquisition immobilière').trim()||'Acquisition immobilière',
      stage:'lead',
      deal_value:Number(fd.get('deal_value')||0)||null,
      currency:String(fd.get('currency')||selected.currency||'EUR'),
      probability:10,
      expected_close_date:String(fd.get('expected_close_date')||'')||null,
      notes:String(fd.get('notes')||'').trim()||null,
      created_by:user.id,
    };
    const {error}=await supabase.from('crm_deals').insert(row);
    if(error){setNotice({type:'error',text:error.message});return;}
    setShowDeal(false);
    await refresh('Deal créé.');
  }

  async function dealStage(id:string,stage:string){
    const probabilityMap:any={lead:10,qualified:25,viewing:40,offer:60,reservation:75,due_diligence:82,contract:90,closed_won:100,closed_lost:0};
    const {error}=await supabase.from('crm_deals').update({stage,probability:probabilityMap[stage]??10,updated_at:new Date().toISOString()}).eq('id',id);
    if(error)setNotice({type:'error',text:error.message});else reload();
  }

  async function saveMatch(item:any,score:number){
    if(!selected)return;
    const payload:any={
      contact_id:selected.id,
      request_id:selectedRequests.find((r:any)=>r.status==='active')?.id||null,
      listing_id:item._kind==='listing'?item.id:null,
      project_id:item.project_id||null,
      unit_id:item.unit_id||null,
      score,status:'shortlisted',created_by:user.id
    };
    const {error}=await supabase.from('client_property_shortlist').upsert(payload,{onConflict:'contact_id,listing_id,project_id,unit_id'});
    if(error)setNotice({type:'error',text:error.message});else{setNotice({type:'success',text:'Bien ajouté à la shortlist client.'});loadRelated();}
  }

  const activeCriteria=selectedRequests.find((r:any)=>r.status==='active')||selected;
  const projectById=Object.fromEntries(projects.map((p:any)=>[p.id,p]));
  const listingCandidates=(listings||[]).map((listing:any)=>({...listing,_kind:'listing'}));
  const unitCandidates=(units||[]).filter((u:any)=>u.status==='available').map((u:any)=>{
    const p=projectById[u.project_id]||{};
    return {
      id:'unit-'+u.id,_kind:'unit',unit_id:u.id,project_id:u.project_id,
      title:{fr:(p.name||'Projet')+' · '+([u.unit_number,u.unit_type].filter(Boolean).join(' · ')||'Unité')},
      city_name:p.city,city:p.city,district:p.district,property_type:u.unit_type||'apartment',
      total_price:u.list_price||u.cash_price||u.installment_price,entry_capital:u.entry_capital,
      currency:u.currency||p.currency||'EUR',surface_m2:u.gross_area_m2||u.net_area_m2,bedrooms:u.bedrooms,
      delivery_date:p.completion_date,payment_plan_enabled:Array.isArray(u.payment_plan)&&u.payment_plan.length>0,
    };
  });
  const matches=selected&&showMatches?[...listingCandidates,...unitCandidates].map((listing:any)=>{
    let score=0;const reasons:string[]=[];
    const cities=Array.isArray(activeCriteria?.target_cities)?activeCriteria.target_cities.map((x:any)=>String(x).toLowerCase()):[];
    const excluded=Array.isArray(activeCriteria?.excluded_areas)?activeCriteria.excluded_areas.map((x:any)=>String(x).toLowerCase()):[];
    const types=Array.isArray(activeCriteria?.target_types)?activeCriteria.target_types.map((x:any)=>String(x).toLowerCase()):[];
    const listingCity=String(listing.city_name||listing.city||'').toLowerCase();
    const district=String(listing.district||'').toLowerCase();
    const listingType=String(listing.property_type||'').toLowerCase();
    if(excluded.some((x:string)=>listingCity.includes(x)||district.includes(x)))return {listing,score:0,reasons:['zone exclue']};
    if(!cities.length||cities.some((c:string)=>listingCity.includes(c)||district.includes(c)||c.includes(listingCity))){score+=20;reasons.push('localisation');}
    if(!types.length||types.some((t:string)=>listingType.includes(t)||t.includes(listingType))){score+=15;reasons.push('type');}
    const budget=Number(activeCriteria?.budget_max||0),price=Number(listing.total_price||0);
    if(!budget||!price||price<=budget){score+=20;reasons.push('budget');}
    const capital=Number(activeCriteria?.max_entry_capital||activeCriteria?.capital_available||0),entry=Number(listing.entry_capital||listing.total_price||0);
    if(!capital||!entry||entry<=capital){score+=15;reasons.push('capital');}
    const bedrooms=Number(activeCriteria?.bedrooms_min||0);
    if(!bedrooms||!listing.bedrooms||Number(listing.bedrooms)>=bedrooms){score+=10;reasons.push('chambres');}
    const minSurface=Number(activeCriteria?.min_surface_m2||0);
    if(!minSurface||!listing.surface_m2||Number(listing.surface_m2)>=minSurface){score+=10;reasons.push('surface');}
    const delivery=activeCriteria?.preferred_delivery_before;
    if(!delivery||!listing.delivery_date||new Date(listing.delivery_date)<=new Date(delivery)){score+=5;reasons.push('livraison');}
    if(!activeCriteria?.financing_required||listing.payment_plan_enabled){score+=5;reasons.push(activeCriteria?.financing_required?'paiement':'flexibilité');}
    return {listing,score,reasons};
  }).filter((x:any)=>x.score>=55).sort((a:any,b:any)=>b.score-a.score).slice(0,12):[];

  const input='min-h-[42px] w-full border border-[#d6dde3] bg-white px-3 text-sm text-[#162334] outline-none focus:border-[#315d7c]';
  const label='grid gap-1.5 text-[0.66rem] font-semibold uppercase tracking-[0.08em] text-[#677481]';

  return <section>
    <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#315d7c]">Contacts · demandes · relances</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">CRM investissement</h1>
      </div>
      <button onClick={()=>setShowNew(!showNew)} className="inline-flex min-h-[44px] items-center gap-2 bg-[#12304a] px-5 text-xs font-semibold uppercase tracking-[0.1em] text-white"><Plus size={15}/>Nouveau contact</button>
    </div>

    {notice?<div className={`mb-5 flex items-center justify-between border px-4 py-3 text-sm ${notice.type==='success'?'border-[#a8c8b8] bg-[#f1faf5] text-[#245943]':'border-[#e0b5b5] bg-[#fff6f6] text-[#8b4040]'}`}><span>{notice.text}</span><button onClick={()=>setNotice(null)}><X size={15}/></button></div>:null}

    <div className="mb-5 grid gap-px bg-[#d9e1e8] sm:grid-cols-4">
      <div className="bg-white p-4"><span className="text-[0.63rem] font-semibold uppercase tracking-[0.09em] text-[#75818b]">Contacts</span><strong className="mt-2 block text-2xl">{contacts.length}</strong></div>
      <div className={overdueContacts?'bg-[#fff4f3] p-4':'bg-white p-4'}><span className="text-[0.63rem] font-semibold uppercase tracking-[0.09em] text-[#75818b]">Avec retard</span><strong className={`mt-2 block text-2xl ${overdueContacts?'text-[#a94f49]':''}`}>{overdueContacts}</strong></div>
      <div className={todayContacts?'bg-[#fff9eb] p-4':'bg-white p-4'}><span className="text-[0.63rem] font-semibold uppercase tracking-[0.09em] text-[#75818b]">À faire aujourd’hui</span><strong className="mt-2 block text-2xl">{todayContacts}</strong></div>
      <div className="bg-white p-4"><span className="text-[0.63rem] font-semibold uppercase tracking-[0.09em] text-[#75818b]">Sans prochaine action</span><strong className="mt-2 block text-2xl">{unplanned}</strong></div>
    </div>

    {showNew?<form onSubmit={createContact} className="mb-6 grid gap-3 border border-[#d9e1e8] bg-white p-5 md:grid-cols-4">
      <input name="first_name" placeholder="Prénom" className={input}/>
      <input name="last_name" placeholder="Nom" className={input}/>
      <input name="email" type="email" placeholder="E-mail principal" className={input}/>
      <input name="phone" placeholder="Téléphone principal" className={input}/>
      <input name="source" placeholder="Source du lead" className={input}/>
      <select name="lead_priority" className={input}><option value="warm">Priorité normale</option><option value="hot">Prioritaire / chaud</option><option value="cold">Faible / froid</option></select>
      <input name="next_action_at" type="datetime-local" className={input}/>
      <input name="notes" placeholder="Note rapide / contexte" className={input}/>
      <div className="md:col-span-4 flex justify-end gap-2"><button type="button" onClick={()=>setShowNew(false)} className="border border-[#cfd8e3] px-4 py-2 text-xs font-semibold uppercase">Annuler</button><button disabled={busy} className="bg-[#12304a] px-5 py-2 text-xs font-semibold uppercase text-white disabled:opacity-50">{busy?'Enregistrement…':'Créer et ouvrir'}</button></div>
    </form>:null}

    <div className="mb-5 grid gap-2 border border-[#d9e1e8] bg-white p-3 md:grid-cols-[1fr_160px_160px_190px]">
      <label className="relative"><Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#7b8794]"/><input value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Nom, téléphone, e-mail, tag…" className="min-h-[40px] w-full border border-[#d9e1e8] pl-9 pr-3 text-sm"/></label>
      <select value={status} onChange={(e)=>setStatus(e.target.value)} className="min-h-[40px] border border-[#d9e1e8] bg-white px-2 text-sm"><option value="all">Tous statuts</option><option value="new">Nouveaux</option><option value="contacted">Contactés</option><option value="qualified">Qualifiés</option><option value="nurturing">À relancer</option><option value="converted">Convertis</option><option value="lost">Perdus</option><option value="inactive">Inactifs</option></select>
      <select value={priority} onChange={(e)=>setPriority(e.target.value)} className="min-h-[40px] border border-[#d9e1e8] bg-white px-2 text-sm"><option value="all">Toutes priorités</option><option value="hot">Prioritaires</option><option value="warm">Normaux</option><option value="cold">Faibles</option></select>
      {isAdmin?<select value={owner} onChange={(e)=>setOwner(e.target.value)} className="min-h-[40px] border border-[#d9e1e8] bg-white px-2 text-sm"><option value="all">Tous agents</option>{partnerUsers.map((p:any)=><option key={p.user_id} value={p.user_id}>{p.full_name||p.email}</option>)}</select>:<div/>}
    </div>

    <div className="grid gap-5 xl:grid-cols-[390px_minmax(0,1fr)]">
      <aside className="border border-[#d9e1e8] bg-white">
        <div className="flex items-center justify-between border-b border-[#e6ebef] px-4 py-3"><strong className="text-sm">Contacts</strong><span className="text-xs text-[#7a8690]">{filtered.length} résultat(s)</span></div>
        <div className="max-h-[760px] overflow-y-auto">
          {filtered.map((contact:any)=>{
            const action=actionMeta(contact);
            const active=selectedId===contact.id;
            return <button key={contact.id} type="button" onClick={()=>{setSelectedId(contact.id);setEditing(false);setShowRequest(false);setShowActivity(false);setShowDeal(false);setShowMatches(false);}} className={`w-full border-b border-[#edf0f2] px-4 py-4 text-left transition ${active?'bg-[#edf3f7]':'hover:bg-[#f8fafb]'}`}>
              <div className="flex items-start gap-3">
                <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold ${contact.lead_priority==='hot'?'bg-[#fbe6e3] text-[#9a443e]':contact.lead_priority==='cold'?'bg-[#eef0f2] text-[#6f7881]':'bg-[#e7eff3] text-[#315d7c]'}`}>{contactName(contact).slice(0,1).toUpperCase()}</div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2"><strong className="truncate text-sm text-[#162334]">{contactName(contact)}</strong><span className="shrink-0 text-[0.62rem] font-semibold uppercase tracking-[0.06em] text-[#6e7a85]">{statusLabel(contact.status)}</span></div>
                  <p className="mt-1 truncate text-xs text-[#7b8794]">{contact.phone||contact.email||contact.whatsapp||'Coordonnées à compléter'}</p>
                  <div className={`mt-2 border-l-2 pl-2 ${action.tone==='late'?'border-[#c85f55]':action.tone==='today'?'border-[#c49336]':action.tone==='none'?'border-[#cbd3d8]':'border-[#5d8298]'}`}>
                    <p className={`truncate text-xs font-semibold ${action.tone==='late'?'text-[#a54b45]':action.tone==='today'?'text-[#896522]':action.tone==='none'?'text-[#858f97]':'text-[#46697e]'}`}>{action.text}</p>
                    <p className="mt-0.5 text-[0.68rem] text-[#8a949b]">{action.sub}{action.count>1?` · +${action.count-1}`:''}</p>
                  </div>
                </div>
                <ChevronRight size={16} className="mt-1 shrink-0 text-[#9aa4ab]"/>
              </div>
            </button>;
          })}
          {!filtered.length?<p className="p-5 text-sm text-[#7b8794]">Aucun contact avec ces filtres.</p>:null}
        </div>
      </aside>

      <div id="crm-contact-detail" className="min-w-0 scroll-mt-24">
        {!selected?<div className="flex min-h-[420px] items-center justify-center border border-dashed border-[#cfd8e3] bg-[#fafbfc] p-8 text-center"><div><UserRound size={28} className="mx-auto text-[#8da0ad]"/><h2 className="mt-4 text-xl font-semibold">Ouvrez un contact</h2><p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#788590]">La liste reste volontairement compacte. Cliquez sur un contact pour afficher ses coordonnées, demandes, relances, notes et deals.</p></div></div>:<>
          <section className="border border-[#d9e1e8] bg-white">
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[#e7edf2] p-5">
              <div>
                <div className="flex flex-wrap items-center gap-2"><span className={`px-2 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.08em] ${selected.lead_priority==='hot'?'bg-[#fbe6e3] text-[#99423c]':selected.lead_priority==='cold'?'bg-[#eef0f2] text-[#69727a]':'bg-[#e7eff3] text-[#315d7c]'}`}>{priorityLabel(selected.lead_priority||'warm')}</span><span className="border border-[#d8e0e5] px-2 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-[#63717d]">{statusLabel(selected.status)}</span></div>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#162334]">{contactName(selected)}</h2>
                <p className="mt-1 text-sm text-[#75818b]">{selected.company||selected.source||'Dossier investisseur'}</p>
              </div>
              <div className="flex flex-wrap gap-2"><button onClick={()=>setEditing(!editing)} className="inline-flex items-center gap-2 border border-[#315d7c] px-3 py-2 text-xs font-semibold text-[#315d7c]"><Pencil size={13}/>{editing?'Fermer édition':'Modifier'}</button>{isAdmin?<button onClick={deleteContact} className="inline-flex items-center gap-2 border border-[#c97a73] px-3 py-2 text-xs font-semibold text-[#9d4b45]"><Trash2 size={13}/>Supprimer</button>:null}</div>
            </div>

            {!editing?<div className="p-5">
              <div className="grid gap-5 lg:grid-cols-2">
                <div>
                  <p className="text-[0.66rem] font-semibold uppercase tracking-[0.1em] text-[#71808b]">Coordonnées</p>
                  <div className="mt-3 space-y-2 text-sm">
                    <p className="flex items-center gap-2"><Phone size={14} className="text-[#315d7c]"/><span>{selected.phone||'—'}</span></p>
                    {selected.whatsapp?<p className="flex items-center gap-2"><MessageCircle size={14} className="text-[#315d7c]"/><span>{selected.whatsapp}</span></p>:null}
                    <p className="flex items-center gap-2"><Mail size={14} className="text-[#315d7c]"/><span>{selected.email||'—'}</span></p>
                    {(selected.alternate_phones||[]).map((x:string)=><p key={x} className="flex items-center gap-2 pl-6 text-[#596771]"><span>+ téléphone : {x}</span></p>)}
                    {(selected.alternate_emails||[]).map((x:string)=><p key={x} className="flex items-center gap-2 pl-6 text-[#596771]"><span>+ e-mail : {x}</span></p>)}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">{(selected.tags||[]).map((tag:string)=><span key={tag} className="inline-flex items-center gap-1 bg-[#eef3f6] px-2 py-1 text-xs text-[#526b7a]"><Tags size={11}/>{tag}</span>)}</div>
                </div>
                <div>
                  <p className="text-[0.66rem] font-semibold uppercase tracking-[0.1em] text-[#71808b]">Profil & contact</p>
                  <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
                    <p><span className="block text-xs text-[#8a949b]">Nationalité</span>{selected.nationality||'—'}</p>
                    <p><span className="block text-xs text-[#8a949b]">Résidence</span>{selected.country_of_residence||'—'}</p>
                    <p><span className="block text-xs text-[#8a949b]">Langue</span>{selected.language||'—'}</p>
                    <p><span className="block text-xs text-[#8a949b]">Préférence</span>{selected.preferred_contact_method||'—'}</p>
                    <p><span className="block text-xs text-[#8a949b]">Horaire préféré</span>{selected.preferred_contact_time||'—'}</p>
                    <p><span className="block text-xs text-[#8a949b]">Source</span>{selected.source||'—'}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-px bg-[#dfe5e9] sm:grid-cols-3">
                <div className="bg-[#f8fafb] p-4"><span className="text-[0.62rem] uppercase tracking-[0.08em] text-[#7b8794]">Budget max</span><strong className="mt-1 block text-lg">{selected.budget_max?money(selected.budget_max,selected.currency):'—'}</strong></div>
                <div className="bg-[#f8fafb] p-4"><span className="text-[0.62rem] uppercase tracking-[0.08em] text-[#7b8794]">Capital disponible</span><strong className="mt-1 block text-lg">{selected.capital_available?money(selected.capital_available,selected.currency):'—'}</strong></div>
                <div className="bg-[#f8fafb] p-4"><span className="text-[0.62rem] uppercase tracking-[0.08em] text-[#7b8794]">Horizon</span><strong className="mt-1 block text-lg">{selected.timeframe||'—'}</strong></div>
              </div>

              {selected.notes?<div className="mt-5 border-l-2 border-[#315d7c] bg-[#f6f9fb] px-4 py-3"><span className="text-[0.63rem] font-semibold uppercase tracking-[0.08em] text-[#637785]">Note dossier</span><p className="mt-2 whitespace-pre-line text-sm leading-6 text-[#53616c]">{selected.notes}</p></div>:null}

              {isAdmin?<label className="mt-5 flex max-w-md items-center gap-3 text-xs font-semibold uppercase tracking-[0.08em] text-[#687685]">Agent responsable<select value={selected.owner_user_id||''} onChange={(e)=>assignContact(e.target.value)} className="min-h-[38px] flex-1 border border-[#d9e1e8] bg-white px-2 text-xs normal-case tracking-normal"><option value="">Attribuer…</option>{partnerUsers.map((p:any)=><option key={p.user_id} value={p.user_id}>{p.full_name||p.email}</option>)}</select></label>:null}
            </div>:<form key={selected.id} onSubmit={updateContact} className="grid gap-4 p-5 md:grid-cols-2 xl:grid-cols-3">
              <label className={label}>Prénom<input name="first_name" defaultValue={selected.first_name||''} className={input}/></label>
              <label className={label}>Nom<input name="last_name" defaultValue={selected.last_name||''} className={input}/></label>
              <label className={label}>Société<input name="company" defaultValue={selected.company||''} className={input}/></label>
              <label className={label}>E-mail principal<input name="email" type="email" defaultValue={selected.email||''} className={input}/></label>
              <label className={label}>Téléphone principal<input name="phone" defaultValue={selected.phone||''} className={input}/></label>
              <label className={label}>WhatsApp<input name="whatsapp" defaultValue={selected.whatsapp||''} className={input}/></label>
              <label className={label}>Autres e-mails<textarea name="alternate_emails" defaultValue={(selected.alternate_emails||[]).join('\n')} rows={3} className={input+" py-2"} placeholder="Un par ligne"/></label>
              <label className={label}>Autres téléphones<textarea name="alternate_phones" defaultValue={(selected.alternate_phones||[]).join('\n')} rows={3} className={input+" py-2"} placeholder="Un par ligne"/></label>
              <label className={label}>Tags<input name="tags" defaultValue={(selected.tags||[]).join(', ')} className={input} placeholder="investisseur, famille, urgent…"/></label>
              <label className={label}>Nationalité<input name="nationality" defaultValue={selected.nationality||''} className={input}/></label>
              <label className={label}>Pays de résidence<input name="country_of_residence" defaultValue={selected.country_of_residence||''} className={input}/></label>
              <label className={label}>Langue<input name="language" defaultValue={selected.language||''} className={input}/></label>
              <label className={label}>Source<input name="source" defaultValue={selected.source||''} className={input}/></label>
              <label className={label}>Statut<select name="status" defaultValue={selected.status||'new'} className={input}><option value="new">Nouveau</option><option value="contacted">Contacté</option><option value="qualified">Qualifié</option><option value="nurturing">À relancer</option><option value="converted">Converti</option><option value="lost">Perdu</option><option value="inactive">Inactif</option></select></label>
              <label className={label}>Priorité<select name="lead_priority" defaultValue={selected.lead_priority||'warm'} className={input}><option value="hot">Prioritaire / chaud</option><option value="warm">Normal</option><option value="cold">Faible / froid</option></select></label>
              <label className={label}>Contact préféré<select name="preferred_contact_method" defaultValue={selected.preferred_contact_method||''} className={input}><option value="">Non défini</option><option value="phone">Téléphone</option><option value="whatsapp">WhatsApp</option><option value="email">E-mail</option></select></label>
              <label className={label}>Horaire préféré<input name="preferred_contact_time" defaultValue={selected.preferred_contact_time||''} className={input} placeholder="Matin, après 18h…"/></label>
              <label className={label}>Villes cibles<input name="target_cities" defaultValue={(selected.target_cities||[]).join(', ')} className={input}/></label>
              <label className={label}>Types de biens<input name="target_types" defaultValue={(selected.target_types||[]).join(', ')} className={input}/></label>
              <label className={label}>Budget min<input name="budget_min" defaultValue={selected.budget_min||''} inputMode="decimal" className={input}/></label>
              <label className={label}>Budget max<input name="budget_max" defaultValue={selected.budget_max||''} inputMode="decimal" className={input}/></label>
              <label className={label}>Capital disponible<input name="capital_available" defaultValue={selected.capital_available||''} inputMode="decimal" className={input}/></label>
              <label className={label}>Devise<select name="currency" defaultValue={selected.currency||'EUR'} className={input}><option>EUR</option><option>USD</option><option>TRY</option><option>GBP</option><option>CHF</option><option>AED</option></select></label>
              <label className={label}>Objectif<select name="investment_goal" defaultValue={selected.investment_goal||''} className={input}><option value="">Non défini</option><option value="rental">Rendement locatif</option><option value="capital_growth">Valorisation</option><option value="residence">Résidence personnelle</option><option value="family">Usage familial</option><option value="diversification">Diversification</option></select></label>
              <label className={label}>Horizon<input name="timeframe" defaultValue={selected.timeframe||''} className={input} placeholder="3 mois, 12 mois…"/></label>
              <label className={label}>Rendement cible %<input name="target_yield_pct" defaultValue={selected.target_yield_pct||''} inputMode="decimal" className={input}/></label>
              <label className={label}>Surface min m²<input name="min_surface_m2" defaultValue={selected.min_surface_m2||''} inputMode="decimal" className={input}/></label>
              <label className={label}>Capital d'entrée max<input name="max_entry_capital" defaultValue={selected.max_entry_capital||''} inputMode="decimal" className={input}/></label>
              <label className={label}>Livraison avant<input name="preferred_delivery_before" defaultValue={selected.preferred_delivery_before||''} type="date" className={input}/></label>
              <label className={label}>Objectif visa / résidence<input name="visa_or_residency_goal" defaultValue={selected.visa_or_residency_goal||''} className={input}/></label>
              <label className={label}>Éléments indispensables<input name="must_haves" defaultValue={(selected.must_haves||[]).join(', ')} className={input} placeholder="vue mer, métro, piscine…"/></label>
              <label className={label}>Zones exclues<input name="excluded_areas" defaultValue={(selected.excluded_areas||[]).join(', ')} className={input}/></label>
              <label className={label+" flex-row items-center gap-2 pt-6"}><input name="financing_required" type="checkbox" defaultChecked={Boolean(selected.financing_required)} className="h-4 w-4"/> Financement / échéancier requis</label>
              <label className={label}>Prochaine action<input name="next_action_at" type="datetime-local" defaultValue={selected.next_action_at?new Date(new Date(selected.next_action_at).getTime()-new Date(selected.next_action_at).getTimezoneOffset()*60000).toISOString().slice(0,16):''} className={input}/></label>
              <label className={label+" md:col-span-2 xl:col-span-3"}>Note dossier<textarea name="notes" defaultValue={selected.notes||''} rows={4} className={input+" py-2"} placeholder="Contexte, préférences, objections, contraintes, informations familiales utiles…"/></label>
              <div className="md:col-span-2 xl:col-span-3 flex justify-end gap-2"><button type="button" onClick={()=>setEditing(false)} className="border border-[#cfd8e3] px-4 py-2 text-xs font-semibold uppercase">Annuler</button><button disabled={busy} className="bg-[#12304a] px-5 py-2 text-xs font-semibold uppercase text-white disabled:opacity-50">{busy?'Enregistrement…':'Enregistrer'}</button></div>
            </form>}
          </section>

          <section className="mt-5 border border-[#d9e1e8] bg-white p-5">
            <div className="flex flex-wrap items-center justify-between gap-3"><div><p className="text-[0.66rem] font-semibold uppercase tracking-[0.1em] text-[#315d7c]">Besoins immobiliers</p><h3 className="mt-1 text-xl font-semibold">Demandes du contact</h3></div><button onClick={()=>setShowRequest(!showRequest)} className="inline-flex items-center gap-2 border border-[#315d7c] px-3 py-2 text-xs font-semibold text-[#315d7c]"><Plus size={13}/>Ajouter une demande</button></div>

            <div className="mt-4 border border-[#e4e9ed] bg-[#f8fafb] p-4">
              <div className="flex items-center justify-between gap-3"><strong className="text-sm">Demande principale</strong><span className="text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-[#71808b]">Fiche contact</span></div>
              <div className="mt-3 grid gap-3 text-sm sm:grid-cols-2 lg:grid-cols-4">
                <p><span className="block text-xs text-[#8a949b]">Villes</span>{(selected.target_cities||[]).join(', ')||'—'}</p>
                <p><span className="block text-xs text-[#8a949b]">Types</span>{(selected.target_types||[]).join(', ')||'—'}</p>
                <p><span className="block text-xs text-[#8a949b]">Budget</span>{selected.budget_max?money(selected.budget_max,selected.currency):'—'}</p>
                <p><span className="block text-xs text-[#8a949b]">Objectif</span>{requestGoalLabel(selected.investment_goal)}</p>
              </div>
            </div>

            {selectedRequests.map((request:any)=><article key={request.id} className="mt-3 border border-[#e4e9ed] p-4">
              <div className="flex flex-wrap items-start justify-between gap-3"><div><span className="text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-[#315d7c]">{request.status}</span><h4 className="mt-1 font-semibold">{request.title}</h4></div><select value={request.status} onChange={(e)=>requestStatus(request.id,e.target.value)} className="min-h-[34px] border border-[#d9e1e8] bg-white px-2 text-xs"><option value="active">Active</option><option value="paused">En pause</option><option value="converted">Convertie</option><option value="closed">Clôturée</option></select></div>
              <div className="mt-3 grid gap-3 text-sm sm:grid-cols-2 lg:grid-cols-4"><p><span className="block text-xs text-[#8a949b]">Villes</span>{(request.target_cities||[]).join(', ')||'—'}</p><p><span className="block text-xs text-[#8a949b]">Types</span>{(request.target_types||[]).join(', ')||'—'}</p><p><span className="block text-xs text-[#8a949b]">Budget max</span>{request.budget_max?money(request.budget_max,request.currency):'—'}</p><p><span className="block text-xs text-[#8a949b]">Horizon</span>{request.timeframe||'—'}</p></div>
              {request.notes?<p className="mt-3 text-sm leading-6 text-[#5d6973]">{request.notes}</p>:null}
            </article>)}

            {showRequest?<form onSubmit={createRequest} className="mt-4 grid gap-3 border-t border-[#e4e9ed] pt-4 md:grid-cols-3">
              <input name="title" required placeholder="Ex. Appartement locatif Dubaï" className={input}/>
              <input name="target_cities" placeholder="Villes, séparées par virgule" className={input}/>
              <input name="target_types" placeholder="Types : appartement, villa…" className={input}/>
              <input name="budget_min" placeholder="Budget min" inputMode="decimal" className={input}/>
              <input name="budget_max" placeholder="Budget max" inputMode="decimal" className={input}/>
              <input name="capital_available" placeholder="Capital disponible" inputMode="decimal" className={input}/>
              <select name="currency" className={input}><option>EUR</option><option>USD</option><option>TRY</option><option>GBP</option><option>CHF</option><option>AED</option></select>
              <select name="investment_goal" className={input}><option value="">Objectif</option><option value="rental">Rendement locatif</option><option value="capital_growth">Valorisation</option><option value="residence">Résidence personnelle</option><option value="family">Usage familial</option><option value="diversification">Diversification</option></select>
              <input name="timeframe" placeholder="Horizon / délai" className={input}/>
              <input name="bedrooms_min" placeholder="Chambres min" inputMode="numeric" className={input}/>
              <input name="target_yield_pct" placeholder="Rendement cible %" inputMode="decimal" className={input}/>
              <input name="min_surface_m2" placeholder="Surface min m²" inputMode="decimal" className={input}/>
              <input name="max_entry_capital" placeholder="Capital entrée max" inputMode="decimal" className={input}/>
              <input name="preferred_delivery_before" type="date" className={input}/>
              <input name="visa_or_residency_goal" placeholder="Visa / résidence visé" className={input}/>
              <input name="must_haves" placeholder="Indispensables : vue, métro…" className={input}/>
              <input name="excluded_areas" placeholder="Zones exclues" className={input}/>
              <label className="flex items-center gap-2 text-sm text-[#526272]"><input name="financing_required" type="checkbox"/> Financement / échéancier requis</label>
              <textarea name="notes" rows={3} placeholder="Critères spécifiques, quartiers, vue, financement, contraintes…" className={input+" py-2 md:col-span-2"}/>
              <button className="bg-[#12304a] px-4 py-2 text-xs font-semibold uppercase text-white">Ajouter</button>
            </form>:null}

            <button onClick={()=>setShowMatches(!showMatches)} className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[#315d7c]"><Target size={14}/>{showMatches?'Masquer le matching':'Matcher les biens avec la demande active'}<ArrowRight size={13}/></button>
            {showMatches?<div className="mt-4 grid gap-3 md:grid-cols-2">
              {matches.map(({listing,score,reasons}:any)=>{const saved=shortlists.some((x:any)=>x.contact_id===selected?.id&&((listing._kind==='unit'&&x.unit_id===listing.unit_id)||(listing._kind==='listing'&&x.listing_id===listing.id)));return <article key={listing.id} className="border border-[#dce4e8] bg-[#f8fafb] p-4"><div className="flex items-start justify-between gap-3"><div><span className="text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-[#315d7c]">{listing._kind==='unit'?'UNITÉ · ':''}{listing.city_name||listing.city} · {listing.district}</span><h4 className="mt-1 font-semibold">{listing.title?.fr||listing.external_id}</h4></div><strong className="text-lg text-[#315d7c]">{score}%</strong></div><p className="mt-2 text-sm text-[#687685]">{money(listing.total_price,listing.currency)} · entrée {money(listing.entry_capital||listing.total_price,listing.currency)}</p><div className="mt-2 flex items-end justify-between gap-3"><p className="text-xs text-[#87929a]">{reasons.join(' · ')}</p><button disabled={saved} onClick={()=>saveMatch(listing,score)} className="shrink-0 border border-[#315d7c] px-2 py-1 text-[0.65rem] font-semibold text-[#315d7c] disabled:opacity-40">{saved?'Shortlist':'Garder'}</button></div></article>})}
              {!matches.length?<p className="text-sm text-[#7b8794]">Aucun bien suffisamment proche des critères actuels.</p>:null}
            </div>:null}
          </section>

          <section className="mt-5 grid gap-5 lg:grid-cols-2">
            <div className="border border-[#d9e1e8] bg-white p-5">
              <div className="flex items-center justify-between gap-3"><div><p className="text-[0.66rem] font-semibold uppercase tracking-[0.1em] text-[#315d7c]">Suivi</p><h3 className="mt-1 text-xl font-semibold">À faire & historique</h3></div><button onClick={()=>setShowActivity(!showActivity)} className="inline-flex items-center gap-2 border border-[#315d7c] px-3 py-2 text-xs font-semibold text-[#315d7c]"><Plus size={13}/>Action</button></div>
              {showActivity?<form onSubmit={createActivity} className="mt-4 grid gap-3 border-b border-[#e5eaee] pb-4">
                <select name="activity_type" className={input}><option value="task">Tâche</option><option value="call">Appel</option><option value="whatsapp">WhatsApp</option><option value="email">E-mail</option><option value="meeting">Réunion</option><option value="note">Note</option><option value="viewing">Visite</option><option value="document">Document</option></select>
                <input name="subject" required placeholder="Objet / prochaine action" className={input}/>
                <input name="due_at" type="datetime-local" className={input}/>
                <select name="deal_id" className={input}><option value="">Sans deal</option>{selectedDeals.map((d:any)=><option key={d.id} value={d.id}>{d.title}</option>)}</select>
                <textarea name="body" rows={3} placeholder="Compte rendu / détail" className={input+" py-2"}/>
                <button className="bg-[#12304a] px-4 py-2 text-xs font-semibold uppercase text-white">Enregistrer</button>
              </form>:null}
              <div className="mt-3 divide-y divide-[#e7edf2]">
                {selectedActivities.slice(0,12).map((activity:any)=>{
                  const late=!activity.completed_at&&activity.due_at&&new Date(activity.due_at).getTime()<Date.now();
                  return <div key={activity.id} className="py-3"><div className="flex items-start justify-between gap-3"><div><span className={`text-[0.62rem] font-semibold uppercase tracking-[0.08em] ${late?'text-[#a85656]':'text-[#315d7c]'}`}>{activity.activity_type}{activity.completed_at?' · terminé':late?' · en retard':''}</span><h4 className="mt-1 text-sm font-semibold">{activity.subject}</h4>{activity.body?<p className="mt-1 text-xs leading-5 text-[#6c7882]">{activity.body}</p>:null}{activity.due_at?<p className={`mt-1 text-xs ${late?'font-semibold text-[#a85656]':'text-[#8a949b]'}`}>{shortDate(activity.due_at)}</p>:null}</div>{!activity.completed_at?<button onClick={()=>completeActivity(activity)} className="shrink-0 border border-[#2f6d59] px-2 py-1 text-[0.65rem] font-semibold text-[#2f6d59]">Terminer</button>:<CheckCircle2 size={16} className="text-[#2f6d59]"/>}</div></div>;
                })}
                {!selectedActivities.length?<p className="py-4 text-sm text-[#7b8794]">Aucune activité pour ce contact.</p>:null}
              </div>
            </div>

            <div className="border border-[#d9e1e8] bg-white p-5">
              <div className="flex items-center justify-between gap-3"><div><p className="text-[0.66rem] font-semibold uppercase tracking-[0.1em] text-[#315d7c]">Pipeline</p><h3 className="mt-1 text-xl font-semibold">Deals du contact</h3></div><button onClick={()=>setShowDeal(!showDeal)} className="inline-flex items-center gap-2 border border-[#315d7c] px-3 py-2 text-xs font-semibold text-[#315d7c]"><Plus size={13}/>Deal</button></div>
              {showDeal?<form onSubmit={createDeal} className="mt-4 grid gap-3 border-b border-[#e5eaee] pb-4">
                <input name="title" required placeholder="Nom du deal" className={input}/>
                <select name="listing_id" className={input}><option value="">Sans bien attribué</option>{listings.map((l:any)=><option key={l.id} value={l.id}>{l.title?.fr||l.external_id}</option>)}</select>
                <div className="grid grid-cols-[1fr_100px] gap-2"><input name="deal_value" placeholder="Valeur" inputMode="decimal" className={input}/><select name="currency" className={input}><option>EUR</option><option>USD</option><option>TRY</option><option>AED</option></select></div>
                <input name="expected_close_date" type="date" className={input}/>
                <textarea name="notes" rows={2} placeholder="Note deal" className={input+" py-2"}/>
                <button className="bg-[#12304a] px-4 py-2 text-xs font-semibold uppercase text-white">Créer</button>
              </form>:null}
              <div className="mt-3 space-y-3">
                {selectedDeals.map((deal:any)=><article key={deal.id} className="border border-[#e5eaee] p-3"><div className="flex items-start justify-between gap-3"><div><span className="text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-[#315d7c]">{deal.stage}</span><h4 className="mt-1 text-sm font-semibold">{deal.title}</h4><p className="mt-1 text-xs text-[#77838d]">{money(deal.deal_value,deal.currency)} · {deal.probability}%</p></div><select value={deal.stage} onChange={(e)=>dealStage(deal.id,e.target.value)} className="min-h-[34px] border border-[#d9e1e8] bg-white px-2 text-xs"><option value="lead">Lead</option><option value="qualified">Qualifié</option><option value="viewing">Visite</option><option value="offer">Offre</option><option value="reservation">Réservation</option><option value="due_diligence">Due diligence</option><option value="contract">Contrat</option><option value="closed_won">Gagné</option><option value="closed_lost">Perdu</option></select></div></article>)}
                {!selectedDeals.length?<p className="py-4 text-sm text-[#7b8794]">Aucun deal pour ce contact.</p>:null}
              </div>
            </div>
          </section>
        </>}
      </div>
    </div>
  </section>;
}
