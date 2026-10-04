// @ts-nocheck
'use client';

import { FormEvent, useEffect, useMemo, useState } from 'react';
import {
  AlertTriangle, BadgeCheck, BriefcaseBusiness, Building2, CalendarClock, CheckCircle2,
  ChevronRight, CircleDollarSign, Clock3, FileLock2, History, Mail, MessageCircle,
  Phone, Plus, Search, ShieldCheck, Star, UserRound, Users
} from 'lucide-react';
import { createIsolatedPortalSupabase, getPortalSupabase } from '@/lib/portalSupabase';

function money(value:any,currency='EUR'){
  const n=Number(value||0);
  if(!Number.isFinite(n))return '—';
  try{return new Intl.NumberFormat('fr-FR',{style:'currency',currency,maximumFractionDigits:0}).format(n);}
  catch{return String(n)+' '+currency;}
}
function when(value?:string|null){
  if(!value)return 'Jamais';
  const d=new Date(value);
  if(Number.isNaN(d.getTime()))return '—';
  return d.toLocaleString('fr-FR',{dateStyle:'medium',timeStyle:'short'});
}
function daysSince(value?:string|null){
  if(!value)return null;
  const ms=Date.now()-new Date(value).getTime();
  return Math.floor(ms/86400000);
}
function initials(name=''){
  return name.split(/\s+/).filter(Boolean).slice(0,2).map((x)=>x[0]?.toUpperCase()).join('')||'?';
}
const defaultPermissions={
  can_view_contact_details:true,
  can_manage_deals:true,
  can_view_finance:false,
  can_download_documents:false,
};

export function PartnerAdminCrmPanel({
  partners=[],partnerUsers=[],contacts=[],deals=[],reload
}:{partners:any[];partnerUsers:any[];contacts:any[];deals:any[];reload?:()=>void}){
  const supabase=getPortalSupabase();
  const [selectedId,setSelectedId]=useState<string|null>(partners[0]?.id||null);
  const [search,setSearch]=useState('');
  const [statusFilter,setStatusFilter]=useState('all');
  const [terms,setTerms]=useState<any[]>([]);
  const [notes,setNotes]=useState<any[]>([]);
  const [activities,setActivities]=useState<any[]>([]);
  const [payments,setPayments]=useState<any[]>([]);
  const [commissions,setCommissions]=useState<any[]>([]);
  const [audit,setAudit]=useState<any[]>([]);
  const [busy,setBusy]=useState(false);
  const [message,setMessage]=useState('');
  const [showCreate,setShowCreate]=useState(false);
  const [created,setCreated]=useState<any>(null);

  useEffect(()=>{if(!selectedId&&partners[0]?.id)setSelectedId(partners[0].id);},[partners,selectedId]);

  async function loadAdminData(){
    setBusy(true);
    const [t,n,a,p,c,l]=await Promise.all([
      supabase.from('partner_admin_terms').select('*').order('updated_at',{ascending:false}),
      supabase.from('partner_admin_notes').select('*').order('pinned',{ascending:false}).order('created_at',{ascending:false}),
      supabase.from('crm_activities').select('*').order('created_at',{ascending:false}).limit(1000),
      supabase.from('deal_payments').select('*').order('due_date',{ascending:true,nullsFirst:false}).limit(2000),
      supabase.from('commissions').select('*').order('created_at',{ascending:false}).limit(1000),
      supabase.from('audit_log').select('*').order('created_at',{ascending:false}).limit(1000),
    ]);
    setTerms(t.data||[]);setNotes(n.data||[]);setActivities(a.data||[]);setPayments(p.data||[]);setCommissions(c.data||[]);setAudit(l.data||[]);
    setBusy(false);
  }
  useEffect(()=>{loadAdminData();},[]);

  const usersByPartner=useMemo(()=>partnerUsers.reduce((acc:any,u:any)=>{(acc[u.partner_id] ||= []).push(u);return acc;},{}),[partnerUsers]);

  const filtered=useMemo(()=>{
    const q=search.trim().toLowerCase();
    return partners.filter((p:any)=>{
      const users=usersByPartner[p.id]||[];
      const blob=[p.name,p.legal_name,p.email,p.phone,p.city,...users.flatMap((u:any)=>[u.full_name,u.email,u.phone,u.whatsapp,u.job_title])].filter(Boolean).join(' ').toLowerCase();
      return (!q||blob.includes(q))&&(statusFilter==='all'||p.status===statusFilter);
    });
  },[partners,usersByPartner,search,statusFilter]);

  const partner=partners.find((p:any)=>p.id===selectedId)||filtered[0]||null;
  const pUsers=partner?(usersByPartner[partner.id]||[]):[];
  const primary=pUsers[0]||null;
  const userIds=pUsers.map((u:any)=>u.user_id);
  const pContacts=partner?contacts.filter((c:any)=>c.partner_id===partner.id):[];
  const pDeals=partner?deals.filter((d:any)=>d.partner_id===partner.id):[];
  const dealIds=pDeals.map((d:any)=>d.id);
  const pActivities=activities.filter((a:any)=>userIds.includes(a.owner_user_id)||dealIds.includes(a.deal_id));
  const pPayments=payments.filter((p:any)=>dealIds.includes(p.deal_id));
  const pCommissions=partner?commissions.filter((c:any)=>c.partner_id===partner.id):[];
  const term=partner?terms.find((x:any)=>x.partner_id===partner.id)||{}:{};
  const pNotes=partner?notes.filter((n:any)=>n.partner_id===partner.id):[];

  const activeDeals=pDeals.filter((d:any)=>!['closed_won','closed_lost'].includes(d.stage));
  const wonDeals=pDeals.filter((d:any)=>d.stage==='closed_won');
  const wonValue=wonDeals.reduce((s:number,d:any)=>s+Number(d.final_sale_price||d.deal_value||0),0);
  const pipelineValue=activeDeals.reduce((s:number,d:any)=>s+Number(d.deal_value||0)*(Number(d.probability||0)/100),0);
  const overdueActivities=pActivities.filter((a:any)=>!a.completed_at&&a.due_at&&new Date(a.due_at).getTime()<Date.now());
  const overduePayments=pPayments.filter((p:any)=>p.status!=='paid'&&p.due_date&&new Date(p.due_date+'T23:59:59').getTime()<Date.now());
  const staleDeals=activeDeals.filter((d:any)=>{const days=daysSince(d.last_stage_changed_at||d.updated_at);return days!=null&&days>=7;});
  const commissionDue=pCommissions.filter((c:any)=>!['paid','received'].includes(c.status)&&c.due_date&&new Date(c.due_date+'T23:59:59').getTime()<Date.now());
  const lastSeen=pUsers.map((u:any)=>u.last_seen_at).filter(Boolean).sort().at(-1)||null;

  const pAudit=useMemo(()=>{
    if(!partner)return [];
    const ids=new Set(userIds);
    const dealsSet=new Set(dealIds);
    return audit.filter((row:any)=>{
      if(row.entity_type==='partner'&&row.entity_id===partner.id)return true;
      if(row.entity_type==='partner_user'&&ids.has(row.entity_id))return true;
      if(row.entity_type==='crm_deal'&&dealsSet.has(row.entity_id))return true;
      if(ids.has(row.actor_user_id))return true;
      return row.metadata?.partner_id===partner.id;
    }).slice(0,100);
  },[audit,partner?.id,userIds.join('|'),dealIds.join('|')]);

  async function createPartner(e:FormEvent<HTMLFormElement>){
    e.preventDefault();
    setBusy(true);setMessage('');setCreated(null);
    try{
      const fd=new FormData(e.currentTarget);
      const email=String(fd.get('email')||'').trim().toLowerCase();
      const password=String(fd.get('password')||'');
      const fullName=String(fd.get('full_name')||'').trim();
      const company=String(fd.get('company')||'').trim();
      const phone=String(fd.get('phone')||'').trim();
      const city=String(fd.get('city')||'').trim();
      if(password.length<10)throw new Error('Le mot de passe initial doit contenir au moins 10 caractères.');

      const {data:prepared,error:prepareError}=await supabase.rpc('admin_prepare_partner_account',{
        p_email:email,p_company_name:company,p_full_name:fullName,p_phone:phone||null,p_city:city||null,p_country:'TR'
      });
      if(prepareError)throw prepareError;

      const isolated=createIsolatedPortalSupabase();
      const {data:signup,error:signupError}=await isolated.auth.signUp({
        email,password,options:{data:{full_name:fullName,provision_code:prepared.provision_code}}
      });
      if(signupError)throw signupError;

      setCreated({email,fullName,company,sessionReady:Boolean(signup.session)});
      e.currentTarget.reset();setShowCreate(false);
      setMessage('Compte partenaire créé.');
      await reload?.();await loadAdminData();
    }catch(e:any){setMessage(e?.message||'Création impossible.');}
    finally{setBusy(false);}
  }

  async function status(id:string,next:string){
    setBusy(true);setMessage('');
    const {error}=await supabase.rpc('admin_set_partner_status',{p_partner_id:id,p_status:next});
    if(error)setMessage(error.message);else{setMessage(next==='active'?'Partenaire activé.':'Accès partenaire suspendu.');await reload?.();}
    setBusy(false);
  }

  async function saveCompany(e:FormEvent<HTMLFormElement>){
    e.preventDefault();if(!partner)return;
    const fd=new FormData(e.currentTarget);setBusy(true);setMessage('');
    const {error}=await supabase.from('partner_companies').update({
      name:String(fd.get('name')||'').trim(),
      legal_name:String(fd.get('legal_name')||'').trim()||null,
      email:String(fd.get('email')||'').trim()||null,
      phone:String(fd.get('phone')||'').trim()||null,
      website:String(fd.get('website')||'').trim()||null,
      city:String(fd.get('city')||'').trim()||null,
      country:String(fd.get('country')||'').trim()||null,
      address:String(fd.get('address')||'').trim()||null,
      tax_number:String(fd.get('tax_number')||'').trim()||null,
      license_number:String(fd.get('license_number')||'').trim()||null,
      updated_at:new Date().toISOString(),
    }).eq('id',partner.id);
    if(error)setMessage(error.message);else{setMessage('Fiche société enregistrée.');await reload?.();await loadAdminData();}
    setBusy(false);
  }

  async function setRole(userId:string,workspaceRole:string){
    const {error}=await supabase.from('profiles').update({workspace_role:workspaceRole,updated_at:new Date().toISOString()}).eq('user_id',userId);
    if(error)setMessage(error.message);else{setMessage('Rôle mis à jour.');await reload?.();await loadAdminData();}
  }

  async function setPermission(user:any,key:string,value:boolean){
    const permissions={...defaultPermissions,...(user.permissions||{}),[key]:value};
    const {error}=await supabase.from('profiles').update({permissions,updated_at:new Date().toISOString()}).eq('user_id',user.user_id);
    if(error)setMessage(error.message);else{setMessage('Droits d’accès mis à jour.');await reload?.();await loadAdminData();}
  }

  async function updateTerms(patch:any){
    if(!partner)return;
    const current=term||{};
    const payload={
      partner_id:partner.id,
      commission_type:patch.commission_type??current.commission_type??'custom',
      commission_rate:patch.commission_rate??current.commission_rate??null,
      fixed_fee:patch.fixed_fee??current.fixed_fee??null,
      default_currency:patch.default_currency??current.default_currency??'EUR',
      agreement_status:patch.agreement_status??current.agreement_status??'pending',
      kyc_status:patch.kyc_status??current.kyc_status??'pending',
      admin_notes:patch.admin_notes??current.admin_notes??null,
      internal_rating:patch.internal_rating??current.internal_rating??null,
      risk_level:patch.risk_level??current.risk_level??'low',
      last_reviewed_at:new Date().toISOString(),
    };
    const {error}=await supabase.from('partner_admin_terms').upsert(payload,{onConflict:'partner_id'});
    if(error)setMessage(error.message);else await loadAdminData();
  }

  async function addNote(e:FormEvent<HTMLFormElement>){
    e.preventDefault();if(!partner)return;
    const fd=new FormData(e.currentTarget);
    const note=String(fd.get('note')||'').trim();if(!note)return;
    const {data:auth}=await supabase.auth.getUser();
    const {error}=await supabase.from('partner_admin_notes').insert({
      partner_id:partner.id,note,
      note_type:String(fd.get('note_type')||'note'),
      pinned:Boolean(fd.get('pinned')),
      created_by:auth.user?.id||null,
    });
    if(error)setMessage(error.message);else{e.currentTarget.reset();setMessage('Note interne ajoutée.');await loadAdminData();}
  }

  const input='min-h-[40px] w-full border border-[#cfd8e3] bg-white px-3 text-sm outline-none focus:border-[#315d7c]';
  const label='grid gap-1.5 text-[0.64rem] font-semibold uppercase tracking-[0.08em] text-[#687685]';

  return <section>
    <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#315d7c]">Réseau · performance · contrôle d’accès</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">CRM partenaires</h1>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-[#687685]">Chaque partenaire possède une fiche unique synchronisée avec les informations qu’il renseigne dans son compte. Les données internes, la notation, le risque et l’historique d’audit restent réservés à l’administration.</p>
      </div>
      <button onClick={()=>setShowCreate((v)=>!v)} className="inline-flex min-h-[44px] items-center gap-2 bg-[#12304a] px-5 text-xs font-semibold uppercase tracking-[0.08em] text-white"><Plus size={14}/>{showCreate?'Fermer':'Nouveau partenaire'}</button>
    </div>

    {showCreate?<form onSubmit={createPartner} className="mb-5 grid gap-3 border border-[#d9e1e8] bg-white p-5 md:grid-cols-3">
      <input name="company" required placeholder="Société partenaire" className={input}/>
      <input name="full_name" required placeholder="Nom du contact" className={input}/>
      <input name="email" type="email" required placeholder="E-mail de connexion" className={input}/>
      <input name="password" type="password" required minLength={10} placeholder="Mot de passe initial" className={input}/>
      <input name="phone" placeholder="Téléphone" className={input}/>
      <input name="city" placeholder="Ville / bureau" className={input}/>
      <button disabled={busy} className="min-h-[42px] bg-[#12304a] px-4 text-xs font-semibold uppercase text-white md:col-span-3">{busy?'Création…':'Créer le compte partenaire'}</button>
    </form>:null}

    {created?<div className="mb-5 border border-[#b9cbd8] bg-[#f7fbfd] p-4 text-sm text-[#526272]"><strong className="text-[#162334]">{created.fullName} · {created.company}</strong><p className="mt-1">Identifiant : {created.email}. {created.sessionReady?'Compte utilisable immédiatement.':'Une confirmation e-mail peut être nécessaire selon la configuration Auth.'}</p></div>:null}

    {message?<div className="mb-5 border border-[#d9e1e8] bg-white px-4 py-3 text-sm text-[#526272]">{message}</div>:null}

    <div className="grid gap-5 xl:grid-cols-[380px_minmax(0,1fr)]">
      <aside className="border border-[#d9e1e8] bg-white">
        <div className="grid gap-2 border-b border-[#e7edf2] p-3">
          <label className="relative"><Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#87929c]"/><input value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Nom, société, téléphone…" className="min-h-[40px] w-full border border-[#d9e1e8] pl-9 pr-3 text-sm"/></label>
          <select value={statusFilter} onChange={(e)=>setStatusFilter(e.target.value)} className={input}><option value="all">Tous les statuts</option><option value="active">Actifs</option><option value="suspended">Suspendus</option><option value="pending">En attente</option></select>
        </div>
        <div className="max-h-[780px] overflow-y-auto">
          {filtered.map((p:any)=>{
            const users=usersByPartner[p.id]||[];
            const u=users[0];
            const pDealsCount=deals.filter((d:any)=>d.partner_id===p.id&&!['closed_won','closed_lost'].includes(d.stage)).length;
            const late=deals.filter((d:any)=>d.partner_id===p.id&&d.next_action_at&&new Date(d.next_action_at).getTime()<Date.now()&&!['closed_won','closed_lost'].includes(d.stage)).length;
            const active=partner?.id===p.id;
            return <button key={p.id} onClick={()=>setSelectedId(p.id)} className={'w-full border-b border-[#edf1f4] p-4 text-left transition '+(active?'bg-[#edf4f7]':'hover:bg-[#f8fafb]')}>
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#e7eef3] text-xs font-bold text-[#315d7c]">{u?.avatar_url?<img src={u.avatar_url} alt="" className="h-full w-full object-cover"/>:initials(u?.full_name||p.name)}</div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2"><strong className="truncate text-sm">{u?.full_name||p.name}</strong><span className={'shrink-0 text-[0.58rem] font-bold uppercase '+(p.status==='active'?'text-[#2f6d59]':p.status==='suspended'?'text-[#a85656]':'text-[#8a6b2d]')}>{p.status}</span></div>
                  <p className="mt-0.5 truncate text-xs text-[#687685]">{p.name}{u?.job_title?' · '+u.job_title:''}</p>
                  <div className="mt-2 flex gap-3 text-[0.66rem] text-[#7b8794]"><span>{pDealsCount} deal(s)</span>{late>0?<span className="font-semibold text-[#a85656]">{late} retard(s)</span>:<span>à jour</span>}</div>
                </div>
                <ChevronRight size={15} className="mt-1 shrink-0 text-[#9aa4ab]"/>
              </div>
            </button>;
          })}
          {!filtered.length?<p className="p-5 text-sm text-[#687685]">Aucun partenaire.</p>:null}
        </div>
      </aside>

      <div className="min-w-0 space-y-5">
        {!partner?<div className="flex min-h-[420px] items-center justify-center border border-dashed border-[#cfd8e3] bg-white p-8 text-center"><div><Users size={28} className="mx-auto text-[#8da0ad]"/><h2 className="mt-4 text-xl font-semibold">Sélectionnez un partenaire</h2></div></div>:<>
          <section className="border border-[#d9e1e8] bg-[#132538] p-6 text-white">
            <div className="flex flex-wrap items-start justify-between gap-5">
              <div className="flex items-start gap-4">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white/10 text-lg font-bold">{primary?.avatar_url?<img src={primary.avatar_url} alt="" className="h-full w-full object-cover"/>:initials(primary?.full_name||partner.name)}</div>
                <div><div className="flex flex-wrap items-center gap-2"><span className="text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-[#9eb6c8]">{partner.status}</span>{term.kyc_status==='verified'?<span className="inline-flex items-center gap-1 text-[0.62rem] font-semibold uppercase text-[#b9e2cc]"><BadgeCheck size={13}/>KYC vérifié</span>:null}</div>
                  <h2 className="mt-2 text-3xl font-semibold">{primary?.full_name||partner.name}</h2>
                  <p className="mt-1 text-sm text-[#b8c8d5]">{partner.name}{primary?.job_title?' · '+primary.job_title:''}</p>
                  <p className="mt-2 text-xs text-[#9eb6c8]">Dernière activité connue : {when(lastSeen)}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">{partner.status!=='active'?<button onClick={()=>status(partner.id,'active')} disabled={busy} className="border border-white/30 px-4 py-2 text-xs font-semibold">Activer</button>:<button onClick={()=>status(partner.id,'suspended')} disabled={busy} className="border border-[#da9c96] px-4 py-2 text-xs font-semibold text-[#ffd3cf]">Suspendre l’accès</button>}</div>
            </div>
          </section>

          <section className="grid gap-px bg-[#d9e1e8] sm:grid-cols-2 xl:grid-cols-4">
            {[
              ['Deals en cours',activeDeals.length,BriefcaseBusiness],
              ['Pipeline pondéré',money(pipelineValue,activeDeals[0]?.currency||'EUR'),CircleDollarSign],
              ['Ventes',wonDeals.length,CheckCircle2],
              ['Valeur vendue',money(wonValue,wonDeals[0]?.currency||'EUR'),CircleDollarSign],
              ['Retards',overdueActivities.length+overduePayments.length+staleDeals.length,AlertTriangle],
            ].map(([k,v,Icon]:any)=><article key={k} className="bg-white p-4"><Icon size={16} className="text-[#315d7c]"/><span className="mt-5 block text-[0.62rem] uppercase tracking-[0.08em] text-[#687685]">{k}</span><strong className="mt-1 block text-2xl">{v}</strong></article>)}
          </section>

          <section className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="border border-[#d9e1e8] bg-white p-5">
              <h3 className="text-lg font-semibold">Profil synchronisé</h3>
              <p className="mt-1 text-xs text-[#7b8794]">Ces données viennent directement de « Mon compte » du partenaire.</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div><span className="text-xs text-[#8a949b]">Nom</span><strong className="mt-1 block">{primary?.full_name||'—'}</strong></div>
                <div><span className="text-xs text-[#8a949b]">Fonction</span><strong className="mt-1 block">{primary?.job_title||'—'}</strong></div>
                <div><span className="text-xs text-[#8a949b]">E-mail</span><p className="mt-1 text-sm">{primary?.email||partner.email||'—'}</p></div>
                <div><span className="text-xs text-[#8a949b]">Téléphone</span><p className="mt-1 text-sm">{primary?.phone||partner.phone||'—'}</p></div>
                <div><span className="text-xs text-[#8a949b]">WhatsApp</span><p className="mt-1 text-sm">{primary?.whatsapp||'—'}</p></div>
                <div><span className="text-xs text-[#8a949b]">Langue</span><p className="mt-1 text-sm">{primary?.preferred_language||'—'}</p></div>
                <div className="sm:col-span-2"><span className="text-xs text-[#8a949b]">Présentation</span><p className="mt-1 text-sm leading-6 text-[#526272]">{primary?.bio||'—'}</p></div>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {primary?.phone?<a href={'tel:'+String(primary.phone).replace(/\s+/g,'')} className="inline-flex items-center gap-2 border border-[#cfd8e3] px-3 py-2 text-xs font-semibold text-[#315d7c]"><Phone size={13}/>Appeler</a>:null}
                {primary?.whatsapp||primary?.phone?<a href={'https://wa.me/'+String(primary.whatsapp||primary.phone).replace(/\D+/g,'')} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-[#cfd8e3] px-3 py-2 text-xs font-semibold text-[#315d7c]"><MessageCircle size={13}/>WhatsApp</a>:null}
                {primary?.email?<a href={'mailto:'+primary.email} className="inline-flex items-center gap-2 border border-[#cfd8e3] px-3 py-2 text-xs font-semibold text-[#315d7c]"><Mail size={13}/>E-mail</a>:null}
              </div>
            </div>

            <div className="border border-[#d9e1e8] bg-white p-5">
              <div className="flex items-center justify-between gap-3"><h3 className="text-lg font-semibold">Évaluation interne</h3><span className={'px-2 py-1 text-[0.62rem] font-bold uppercase '+((term.risk_level||'low')==='high'||term.risk_level==='critical'?'bg-[#fff0ef] text-[#a85656]':term.risk_level==='medium'?'bg-[#fff8e8] text-[#8a6b2d]':'bg-[#edf7f1] text-[#2f6d59]')}>{term.risk_level||'low'}</span></div>
              <div className="mt-5">
                <span className="text-xs text-[#7b8794]">Note partenaire</span>
                <div className="mt-2 flex gap-1">{[1,2,3,4,5].map((n)=><button key={n} onClick={()=>updateTerms({internal_rating:n})}><Star size={20} className={n<=Number(term.internal_rating||0)?'fill-current text-[#a77c2e]':'text-[#c9d0d5]'}/></button>)}</div>
              </div>
              <label className={label+" mt-5"}>Niveau de risque<select value={term.risk_level||'low'} onChange={(e)=>updateTerms({risk_level:e.target.value})} className={input}><option value="low">Faible</option><option value="medium">Moyen</option><option value="high">Élevé</option><option value="critical">Critique</option></select></label>
              <label className={label+" mt-4"}>KYC<select value={term.kyc_status||'pending'} onChange={(e)=>updateTerms({kyc_status:e.target.value})} className={input}><option value="pending">En attente</option><option value="verified">Vérifié</option><option value="rejected">Refusé</option><option value="expired">Expiré</option></select></label>
              <label className={label+" mt-4"}>Convention<select value={term.agreement_status||'pending'} onChange={(e)=>updateTerms({agreement_status:e.target.value})} className={input}><option value="pending">En attente</option><option value="signed">Signée</option><option value="expired">Expirée</option><option value="suspended">Suspendue</option></select></label>
            </div>
          </section>

          <section className="border border-[#d9e1e8] bg-white p-5">
            <div className="flex items-center gap-2"><ShieldCheck size={17} className="text-[#315d7c]"/><h3 className="text-lg font-semibold">Droits d’accès</h3></div>
            <p className="mt-1 text-xs leading-5 text-[#7b8794]">Les exports restent toujours réservés à l’administrateur. Ces droits réduisent encore les écrans visibles par chaque utilisateur du partenaire.</p>
            <div className="mt-5 space-y-4">{pUsers.map((u:any)=>{
              const perms={...defaultPermissions,...(u.permissions||{})};
              return <div key={u.user_id} className="border border-[#e7edf2] p-4">
                <div className="flex flex-wrap items-center justify-between gap-3"><div className="flex items-center gap-3"><div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-[#e7eef3] text-xs font-bold">{u.avatar_url?<img src={u.avatar_url} alt="" className="h-full w-full object-cover"/>:initials(u.full_name||u.email)}</div><div><strong className="block text-sm">{u.full_name||u.email}</strong><span className="text-xs text-[#7b8794]">{u.email}</span></div></div><select value={u.workspace_role||'partner'} onChange={(e)=>setRole(u.user_id,e.target.value)} className="min-h-[38px] border border-[#cfd8e3] bg-white px-2 text-xs"><option value="partner">Partenaire</option><option value="advisor">Conseiller</option><option value="operations">Opérations</option><option value="finance">Finance</option><option value="read_only">Lecture seule</option></select></div>
                <div className="mt-4 grid gap-2 sm:grid-cols-2 xl:grid-cols-5">
                  {[
                    ['can_view_contact_details','Coordonnées clients'],
                    ['can_manage_deals','Gérer deals'],
                    ['can_view_finance','Voir finance'],
                    ['can_download_documents','Télécharger documents'],
                  ].map(([key,label])=><label key={key} className="flex items-center gap-2 border border-[#e7edf2] px-3 py-2 text-xs"><input type="checkbox" checked={Boolean(perms[key])} onChange={(e)=>setPermission(u,key,e.target.checked)}/>{label}</label>)}
                </div>
              </div>;
            })}{!pUsers.length?<p className="text-sm text-[#687685]">Aucun utilisateur rattaché.</p>:null}</div>
          </section>

          <section className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
            <form onSubmit={saveCompany} className="grid gap-3 border border-[#d9e1e8] bg-white p-5 md:grid-cols-2">
              <div className="md:col-span-2"><h3 className="text-lg font-semibold">Société partenaire</h3><p className="mt-1 text-xs text-[#7b8794]">Données contractuelles et administratives.</p></div>
              <label className={label}>Nom commercial<input name="name" defaultValue={partner.name||''} className={input}/></label>
              <label className={label}>Raison sociale<input name="legal_name" defaultValue={partner.legal_name||''} className={input}/></label>
              <label className={label}>E-mail<input name="email" defaultValue={partner.email||''} className={input}/></label>
              <label className={label}>Téléphone<input name="phone" defaultValue={partner.phone||''} className={input}/></label>
              <label className={label}>Site web<input name="website" defaultValue={partner.website||''} className={input}/></label>
              <label className={label}>Ville<input name="city" defaultValue={partner.city||''} className={input}/></label>
              <label className={label}>Pays<input name="country" defaultValue={partner.country||''} className={input}/></label>
              <label className={label}>N° fiscal<input name="tax_number" defaultValue={partner.tax_number||''} className={input}/></label>
              <label className={label}>Licence<input name="license_number" defaultValue={partner.license_number||''} className={input}/></label>
              <label className={label+" md:col-span-2"}>Adresse<input name="address" defaultValue={partner.address||''} className={input}/></label>
              <button disabled={busy} className="min-h-[42px] bg-[#12304a] px-4 text-sm font-semibold text-white md:col-span-2">Enregistrer la société</button>
            </form>

            <div className="border border-[#d9e1e8] bg-white p-5">
              <h3 className="text-lg font-semibold">Notes internes</h3>
              <form onSubmit={addNote} className="mt-4 grid gap-2">
                <textarea name="note" required rows={3} placeholder="Contexte, comportement, vigilance, prochaine action…" className="border border-[#cfd8e3] px-3 py-2 text-sm"/>
                <div className="grid grid-cols-[1fr_auto] gap-2"><select name="note_type" className={input}><option value="note">Note</option><option value="warning">Alerte</option><option value="follow_up">Suivi</option><option value="compliance">Conformité</option></select><label className="flex items-center gap-2 border border-[#cfd8e3] px-3 text-xs"><input name="pinned" type="checkbox"/>Épingler</label></div>
                <button className="inline-flex min-h-[40px] items-center justify-center gap-2 bg-[#12304a] px-4 text-xs font-semibold text-white"><Plus size={13}/>Ajouter la note</button>
              </form>
              <div className="mt-5 max-h-[320px] space-y-3 overflow-y-auto">{pNotes.map((n:any)=><div key={n.id} className={'border p-3 '+(n.note_type==='warning'?'border-[#efc7c3] bg-[#fff7f6]':'border-[#e7edf2] bg-[#fafbfc]')}><div className="flex justify-between gap-2 text-[0.62rem] uppercase text-[#7b8794]"><span>{n.pinned?'★ ':''}{n.note_type}</span><span>{when(n.created_at)}</span></div><p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-[#526272]">{n.note}</p></div>)}{!pNotes.length?<p className="text-sm text-[#7b8794]">Aucune note interne.</p>:null}</div>
            </div>
          </section>

          <section className="border border-[#d9e1e8] bg-white p-5">
            <div className="flex flex-wrap items-center justify-between gap-3"><div><h3 className="text-lg font-semibold">Deals & retards</h3><p className="mt-1 text-xs text-[#7b8794]">Vue administrateur de son portefeuille actuel.</p></div><span className="text-xs text-[#7b8794]">{pContacts.length} client(s) attribué(s)</span></div>
            <div className="mt-4 overflow-x-auto"><table className="w-full min-w-[850px] text-sm"><thead className="border-b border-[#d9e1e8] bg-[#f7f9fb] text-left text-[0.63rem] uppercase tracking-[0.07em] text-[#687685]"><tr><th className="p-3">Deal</th><th className="p-3">Étape</th><th className="p-3">Valeur</th><th className="p-3">Prochaine action</th><th className="p-3">Ancienneté étape</th></tr></thead><tbody>{pDeals.map((d:any)=>{const age=daysSince(d.last_stage_changed_at||d.updated_at);const late=d.next_action_at&&new Date(d.next_action_at).getTime()<Date.now()&&!['closed_won','closed_lost'].includes(d.stage);return <tr key={d.id} className="border-b border-[#edf1f4]"><td className="p-3"><strong>{d.title}</strong></td><td className="p-3">{d.stage}</td><td className="p-3">{money(d.final_sale_price||d.deal_value,d.currency)}</td><td className={'p-3 '+(late?'font-semibold text-[#a85656]':'')}>{d.next_action_at?when(d.next_action_at):'—'}</td><td className={'p-3 '+(age!=null&&age>=7&&!['closed_won','closed_lost'].includes(d.stage)?'font-semibold text-[#a85656]':'')}>{age==null?'—':age+' j'}</td></tr>})}</tbody></table></div>
            {!pDeals.length?<p className="p-6 text-center text-sm text-[#7b8794]">Aucun deal.</p>:null}

            {(overdueActivities.length||overduePayments.length||commissionDue.length)?<div className="mt-5 grid gap-3 md:grid-cols-3">
              <div className="border border-[#efc7c3] bg-[#fff7f6] p-4"><span className="text-xs uppercase text-[#a85656]">Actions en retard</span><strong className="mt-2 block text-2xl">{overdueActivities.length}</strong></div>
              <div className="border border-[#efc7c3] bg-[#fff7f6] p-4"><span className="text-xs uppercase text-[#a85656]">Paiements en retard</span><strong className="mt-2 block text-2xl">{overduePayments.length}</strong></div>
              <div className="border border-[#efc7c3] bg-[#fff7f6] p-4"><span className="text-xs uppercase text-[#a85656]">Commissions en retard</span><strong className="mt-2 block text-2xl">{commissionDue.length}</strong></div>
            </div>:null}
          </section>

          <section className="border border-[#d9e1e8] bg-white p-5">
            <div className="flex items-center gap-2"><History size={17} className="text-[#315d7c]"/><h3 className="text-lg font-semibold">Historique du compte</h3></div>
            <p className="mt-1 text-xs text-[#7b8794]">Journal administrateur des mouvements importants : profil, société, accès, annonces et deals.</p>
            <div className="mt-5 max-h-[520px] space-y-3 overflow-y-auto">{pAudit.map((row:any)=><div key={row.id} className="grid gap-2 border-b border-[#edf1f4] pb-3 md:grid-cols-[190px_1fr]"><span className="text-xs text-[#7b8794]">{when(row.created_at)}</span><div><strong className="text-sm">{String(row.action||'activité').replaceAll('_',' ')}</strong><p className="mt-1 break-words text-xs leading-5 text-[#7b8794]">{row.entity_type} · {row.entity_id}{row.metadata&&Object.keys(row.metadata).length?' · '+JSON.stringify(row.metadata):''}</p></div></div>)}{!pAudit.length?<p className="text-sm text-[#7b8794]">Aucun mouvement journalisé pour ce partenaire.</p>:null}</div>
          </section>
        </>}
      </div>
    </div>
  </section>;
}
