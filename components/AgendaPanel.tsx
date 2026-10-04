// @ts-nocheck
'use client';

import { FormEvent, useEffect, useMemo, useState } from 'react';
import { CalendarDays, CheckCircle2, Clock3, PhoneCall, Plus, RefreshCw } from 'lucide-react';
import { getPortalSupabase } from '@/lib/portalSupabase';

function niceDate(value?:string){
  if(!value)return '—';
  try{return new Date(value).toLocaleString('fr-FR',{dateStyle:'medium',timeStyle:'short'});}catch{return value;}
}
function cname(c:any){return [c?.first_name,c?.last_name].filter(Boolean).join(' ')||c?.company||c?.email||'Contact';}
function dayKey(value:string){
  const d=new Date(value);const today=new Date();const tomorrow=new Date();tomorrow.setDate(today.getDate()+1);
  const same=(a:Date,b:Date)=>a.getFullYear()===b.getFullYear()&&a.getMonth()===b.getMonth()&&a.getDate()===b.getDate();
  if(same(d,today))return 'today';if(same(d,tomorrow))return 'tomorrow';if(d<today)return 'late';return 'later';
}

export function AgendaPanel({user,profile,isAdmin,contacts=[],deals=[],listings=[]}:{user:any;profile:any;isAdmin:boolean;contacts:any[];deals:any[];listings:any[]}){
  const supabase=getPortalSupabase();
  const [activities,setActivities]=useState<any[]>([]);
  const [viewings,setViewings]=useState<any[]>([]);
  const [filter,setFilter]=useState('open');
  const [busy,setBusy]=useState(false);
  const [message,setMessage]=useState('');

  async function reload(){
    setBusy(true);setMessage('');
    try{
      const [a,v]=await Promise.all([
        supabase.from('crm_activities').select('*').order('due_at',{ascending:true,nullsFirst:false}),
        supabase.from('viewings').select('*').order('starts_at',{ascending:true}),
      ]);
      if(a.error)throw a.error;if(v.error)throw v.error;
      setActivities(a.data||[]);setViewings(v.data||[]);
    }catch(e:any){setMessage(e?.message||'Chargement impossible.');}
    finally{setBusy(false);}
  }
  useEffect(()=>{reload();},[]);

  const contactById=useMemo(()=>Object.fromEntries(contacts.map((x:any)=>[x.id,x])),[contacts]);
  const dealById=useMemo(()=>Object.fromEntries(deals.map((x:any)=>[x.id,x])),[deals]);
  const listingById=useMemo(()=>Object.fromEntries(listings.map((x:any)=>[x.id,x])),[listings]);

  async function createTask(e:FormEvent<HTMLFormElement>){
    e.preventDefault();setBusy(true);setMessage('');
    try{
      const fd=new FormData(e.currentTarget);
      const contactId=String(fd.get('contact_id')||'')||null;
      const contact=contacts.find((c:any)=>c.id===contactId);
      const owner=isAdmin?(contact?.owner_user_id||user?.id):user?.id;
      const {error}=await supabase.from('crm_activities').insert({
        contact_id:contactId,deal_id:String(fd.get('deal_id')||'')||null,owner_user_id:owner,
        activity_type:String(fd.get('activity_type')||'task'),
        subject:String(fd.get('subject')||'').trim(),body:String(fd.get('body')||'').trim()||null,
        due_at:String(fd.get('due_at')||'')?new Date(String(fd.get('due_at'))).toISOString():null,
        priority:String(fd.get('priority')||'normal'),created_by:user?.id||null
      });
      if(error)throw error;e.currentTarget.reset();setMessage('Tâche ajoutée.');await reload();
    }catch(e:any){setMessage(e?.message||'Création impossible.');}
    finally{setBusy(false);}
  }

  async function complete(id:string){
    const {error}=await supabase.from('crm_activities').update({completed_at:new Date().toISOString()}).eq('id',id);
    if(error)setMessage(error.message);else await reload();
  }

  async function createViewing(e:FormEvent<HTMLFormElement>){
    e.preventDefault();setBusy(true);setMessage('');
    try{
      const fd=new FormData(e.currentTarget);const contactId=String(fd.get('contact_id')||'');
      const contact=contacts.find((c:any)=>c.id===contactId);if(!contact)throw new Error('Contact obligatoire.');
      const {error}=await supabase.from('viewings').insert({
        contact_id:contactId,deal_id:String(fd.get('deal_id')||'')||null,listing_id:String(fd.get('listing_id')||'')||null,
        owner_user_id:isAdmin?(contact.owner_user_id||user.id):user.id,partner_id:isAdmin?(contact.partner_id||null):(profile?.partner_id||null),
        starts_at:new Date(String(fd.get('starts_at'))).toISOString(),viewing_type:String(fd.get('viewing_type')||'physical'),
        status:'scheduled',meeting_point:String(fd.get('meeting_point')||'').trim()||null,notes:String(fd.get('notes')||'').trim()||null
      });
      if(error)throw error;e.currentTarget.reset();setMessage('Visite planifiée.');await reload();
    }catch(e:any){setMessage(e?.message||'Planification impossible.');}
    finally{setBusy(false);}
  }

  async function viewingStatus(id:string,status:string){
    const {error}=await supabase.from('viewings').update({status}).eq('id',id);
    if(error)setMessage(error.message);else await reload();
  }

  const openActivities=activities.filter((a:any)=>!a.completed_at);
  const late=openActivities.filter((a:any)=>a.due_at&&dayKey(a.due_at)==='late').length;
  const today=openActivities.filter((a:any)=>a.due_at&&dayKey(a.due_at)==='today').length;
  const week=openActivities.filter((a:any)=>a.due_at&&new Date(a.due_at).getTime()<Date.now()+7*86400000).length;
  const shown=filter==='done'?activities.filter((a:any)=>a.completed_at):filter==='all'?activities:openActivities;

  const input='min-h-[41px] w-full border border-[#cfd8e3] bg-white px-3 text-sm';
  const label='grid gap-1 text-[0.64rem] font-semibold uppercase tracking-[0.08em] text-[#687685]';

  return <div className="space-y-6">
    <div className="grid gap-px bg-[#d9e1e8] sm:grid-cols-2 lg:grid-cols-4">
      {[
        ['En retard',late,'text-[#a85656]'],['Aujourd’hui',today,'text-[#315d7c]'],['7 prochains jours',week,'text-[#315d7c]'],['Visites planifiées',viewings.filter((v:any)=>v.status==='scheduled').length,'text-[#315d7c]']
      ].map(([k,v,t]:any)=><article key={k} className="bg-white p-5"><span className="text-[0.65rem] uppercase tracking-[0.08em] text-[#687685]">{k}</span><strong className={'mt-2 block text-3xl '+t}>{v}</strong></article>)}
    </div>

    {message?<div className="border border-[#d9e1e8] bg-white px-4 py-3 text-sm">{message}</div>:null}

    <div className="grid gap-6 xl:grid-cols-[0.85fr_1.15fr]">
      <div className="space-y-5">
        <form onSubmit={createTask} className="border border-[#d9e1e8] bg-white p-5">
          <div className="flex items-center gap-2"><Plus size={17} className="text-[#315d7c]"/><h2 className="text-lg font-semibold">Nouvelle tâche / relance</h2></div>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <label className={label}>Contact<select name="contact_id" className={input}><option value="">Sans contact</option>{contacts.map((c:any)=><option key={c.id} value={c.id}>{cname(c)}</option>)}</select></label>
            <label className={label}>Deal<select name="deal_id" className={input}><option value="">Sans deal</option>{deals.map((d:any)=><option key={d.id} value={d.id}>{d.title}</option>)}</select></label>
            <label className={label}>Type<select name="activity_type" className={input}><option value="task">Tâche</option><option value="call">Appel</option><option value="whatsapp">WhatsApp</option><option value="email">E-mail</option><option value="meeting">Réunion</option><option value="document">Document</option></select></label>
            <label className={label}>Priorité<select name="priority" className={input}><option value="normal">Normale</option><option value="high">Haute</option><option value="urgent">Urgente</option><option value="low">Faible</option></select></label>
            <label className={label+" md:col-span-2"}>Objet<input name="subject" required className={input}/></label>
            <label className={label}>Échéance<input name="due_at" type="datetime-local" className={input}/></label>
            <label className={label+" md:col-span-2"}>Détail<textarea name="body" rows={3} className={input+' py-2'}/></label>
            <button disabled={busy} className="min-h-[42px] bg-[#12304a] text-sm font-semibold text-white md:col-span-2">Ajouter</button>
          </div>
        </form>

        <form onSubmit={createViewing} className="border border-[#d9e1e8] bg-white p-5">
          <div className="flex items-center gap-2"><CalendarDays size={17} className="text-[#315d7c]"/><h2 className="text-lg font-semibold">Planifier une visite</h2></div>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <label className={label}>Contact<select name="contact_id" required className={input}><option value="">Choisir…</option>{contacts.map((c:any)=><option key={c.id} value={c.id}>{cname(c)}</option>)}</select></label>
            <label className={label}>Deal<select name="deal_id" className={input}><option value="">Sans deal</option>{deals.map((d:any)=><option key={d.id} value={d.id}>{d.title}</option>)}</select></label>
            <label className={label}>Bien<select name="listing_id" className={input}><option value="">Non défini</option>{listings.map((l:any)=><option key={l.id} value={l.id}>{l.title?.fr||l.external_id}</option>)}</select></label>
            <label className={label}>Type<select name="viewing_type" className={input}><option value="physical">Physique</option><option value="video">Vidéo</option><option value="developer_meeting">Rendez-vous promoteur</option><option value="handover">Remise des clés</option></select></label>
            <label className={label}>Date / heure<input name="starts_at" required type="datetime-local" className={input}/></label>
            <label className={label}>Lieu / lien<input name="meeting_point" className={input}/></label>
            <label className={label+" md:col-span-2"}>Notes<textarea name="notes" rows={2} className={input+' py-2'}/></label>
            <button disabled={busy} className="min-h-[42px] bg-[#12304a] text-sm font-semibold text-white md:col-span-2">Planifier</button>
          </div>
        </form>
      </div>

      <div className="space-y-5">
        <section className="border border-[#d9e1e8] bg-white p-5">
          <div className="flex flex-wrap items-center justify-between gap-3"><h2 className="text-lg font-semibold">Task Inbox</h2><div className="flex gap-2"><select value={filter} onChange={e=>setFilter(e.target.value)} className="h-9 border border-[#cfd8e3] bg-white px-2 text-xs"><option value="open">Ouvertes</option><option value="done">Terminées</option><option value="all">Toutes</option></select><button onClick={reload} className="h-9 border border-[#cfd8e3] px-3"><RefreshCw size={14} className={busy?'animate-spin':''}/></button></div></div>
          <div className="mt-4 divide-y divide-[#edf1f4]">{shown.map((a:any)=>{
            const key=a.due_at?dayKey(a.due_at):'later';
            const tone=key==='late'?'text-[#a85656]':key==='today'?'text-[#315d7c]':'text-[#687685]';
            return <article key={a.id} className="py-4"><div className="flex items-start justify-between gap-4"><div className="min-w-0"><div className="flex flex-wrap items-center gap-2"><span className="text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-[#315d7c]">{a.activity_type}</span><span className="text-[0.62rem] uppercase text-[#87929c]">{a.priority}</span></div><strong className="mt-1 block">{a.subject}</strong><p className="mt-1 text-xs text-[#687685]">{cname(contactById[a.contact_id])}{a.deal_id?' · '+(dealById[a.deal_id]?.title||'Deal'):''}</p>{a.body?<p className="mt-2 text-sm leading-5 text-[#596875]">{a.body}</p>:null}<p className={'mt-2 inline-flex items-center gap-1 text-xs '+tone}><Clock3 size={12}/>{niceDate(a.due_at)}</p></div>{!a.completed_at?<button onClick={()=>complete(a.id)} className="shrink-0 border border-[#2f6d59] p-2 text-[#2f6d59]" title="Terminer"><CheckCircle2 size={16}/></button>:<CheckCircle2 size={18} className="text-[#2f6d59]"/>}</div></article>;
          })}{!shown.length?<p className="py-8 text-center text-sm text-[#687685]">Aucune tâche.</p>:null}</div>
        </section>

        <section className="border border-[#d9e1e8] bg-white p-5">
          <h2 className="text-lg font-semibold">Agenda des visites</h2>
          <div className="mt-4 space-y-3">{viewings.map((v:any)=><article key={v.id} className="border border-[#e5eaee] p-4"><div className="flex flex-wrap items-start justify-between gap-3"><div><span className="text-[0.62rem] uppercase tracking-[0.08em] text-[#315d7c]">{v.viewing_type} · {v.status}</span><strong className="mt-1 block">{cname(contactById[v.contact_id])}</strong><p className="mt-1 text-xs text-[#687685]">{listingById[v.listing_id]?.title?.fr||'Bien non défini'} · {niceDate(v.starts_at)}</p>{v.meeting_point?<p className="mt-2 text-xs text-[#596875]">{v.meeting_point}</p>:null}</div><div className="flex gap-2">{v.status==='scheduled'?<><button onClick={()=>viewingStatus(v.id,'completed')} className="border border-[#2f6d59] px-2 py-1 text-xs text-[#2f6d59]">Terminée</button><button onClick={()=>viewingStatus(v.id,'cancelled')} className="border border-[#a85656] px-2 py-1 text-xs text-[#a85656]">Annuler</button></>:null}</div></div></article>)}{!viewings.length?<p className="py-6 text-sm text-[#687685]">Aucune visite.</p>:null}</div>
        </section>
      </div>
    </div>
  </div>;
}
