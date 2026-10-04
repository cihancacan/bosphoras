// @ts-nocheck
'use client';

import { FormEvent, useEffect, useMemo, useState } from 'react';
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

export function RealEstateInventoryPanel({user,profile,isAdmin,partners=[]}:{user:any;profile:any;isAdmin:boolean;partners?:any[]}){
  const supabase=getPortalSupabase();
  const [developers,setDevelopers]=useState<any[]>([]);
  const [projects,setProjects]=useState<any[]>([]);
  const [units,setUnits]=useState<any[]>([]);
  const [history,setHistory]=useState<any[]>([]);
  const [selectedProjectId,setSelectedProjectId]=useState('');
  const [query,setQuery]=useState('');
  const [status,setStatus]=useState('all');
  const [busy,setBusy]=useState(false);
  const [message,setMessage]=useState('');

  async function reload(){
    setBusy(true);setMessage('');
    try{
      const [d,p,u,h]=await Promise.all([
        supabase.from('developers').select('*').order('name'),
        supabase.from('real_estate_projects').select('*').order('updated_at',{ascending:false}),
        supabase.from('project_units').select('*').order('updated_at',{ascending:false}),
        supabase.from('project_unit_history').select('*').order('created_at',{ascending:false}).limit(500),
      ]);
      if(d.error)throw d.error;if(p.error)throw p.error;if(u.error)throw u.error;if(h.error)throw h.error;
      setDevelopers(d.data||[]);setProjects(p.data||[]);setUnits(u.data||[]);setHistory(h.data||[]);
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

  async function createDeveloper(e:FormEvent<HTMLFormElement>){
    e.preventDefault();setBusy(true);setMessage('');
    try{
      const fd=new FormData(e.currentTarget);
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
      if(error)throw error;e.currentTarget.reset();setMessage('Promoteur ajouté.');await reload();
    }catch(e:any){setMessage(e?.message||'Création impossible.');}
    finally{setBusy(false);}
  }

  async function createProject(e:FormEvent<HTMLFormElement>){
    e.preventDefault();setBusy(true);setMessage('');
    try{
      const fd=new FormData(e.currentTarget);
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
      if(error)throw error;e.currentTarget.reset();setSelectedProjectId(data.id);setMessage('Projet ajouté.');await reload();
    }catch(e:any){setMessage(e?.message||'Création impossible.');}
    finally{setBusy(false);}
  }

  async function createUnit(e:FormEvent<HTMLFormElement>){
    e.preventDefault();if(!selected)return;
    setBusy(true);setMessage('');
    try{
      const fd=new FormData(e.currentTarget);
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
        status:String(fd.get('status')||'available'),
        last_verified_at:new Date().toISOString(),
        created_by:user?.id||null,updated_by:user?.id||null,
      });
      if(error)throw error;e.currentTarget.reset();setMessage('Unité ajoutée.');await reload();
    }catch(e:any){setMessage(e?.message||'Création impossible.');}
    finally{setBusy(false);}
  }

  async function updateUnitStatus(id:string,next:string){
    setBusy(true);
    const {error}=await supabase.from('project_units').update({status:next,updated_by:user?.id||null,last_verified_at:new Date().toISOString()}).eq('id',id);
    if(error)setMessage(error.message);else await reload();
    setBusy(false);
  }
  async function updateProjectStatus(id:string,next:string){
    setBusy(true);
    const {error}=await supabase.from('real_estate_projects').update({sales_status:next,updated_by:user?.id||null,last_verified_at:new Date().toISOString()}).eq('id',id);
    if(error)setMessage(error.message);else await reload();
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

    {message?<div className="border border-[#d9e1e8] bg-white px-4 py-3 text-sm">{message}</div>:null}

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
              <button onClick={reload} className="ml-auto inline-flex items-center gap-2 border border-white/20 px-3 py-2 text-xs"><RefreshCw size={13} className={busy?'animate-spin':''}/>Actualiser</button>
            </div>
          </div>

          <details className="border border-[#d9e1e8] bg-white" open={selectedUnits.length===0}>
            <summary className="cursor-pointer px-5 py-4 text-sm font-semibold">+ Ajouter une unité</summary>
            <form onSubmit={createUnit} className="grid gap-3 border-t border-[#e7edf2] p-5 md:grid-cols-4">
              <label className={label}>N° unité<input name="unit_number" className={input}/></label>
              <label className={label}>Réf. externe<input name="external_id" className={input}/></label>
              <label className={label}>Bloc / bâtiment<input name="building" className={input}/></label>
              <label className={label}>Étage<input name="floor" className={input}/></label>
              <label className={label}>Typologie<input name="unit_type" placeholder="2+1, 2BR…" className={input}/></label>
              <label className={label}>Chambres<input name="bedrooms" inputMode="numeric" className={input}/></label>
              <label className={label}>SDB<input name="bathrooms" inputMode="numeric" className={input}/></label>
              <label className={label}>Vue<input name="view" className={input}/></label>
              <label className={label}>Surface brute<input name="gross_area_m2" inputMode="decimal" className={input}/></label>
              <label className={label}>Surface nette<input name="net_area_m2" inputMode="decimal" className={input}/></label>
              <label className={label}>Devise<select name="currency" defaultValue={selected.currency} className={input}><option>EUR</option><option>USD</option><option>AED</option><option>TRY</option><option>GBP</option></select></label>
              <label className={label}>Prix catalogue<input name="list_price" inputMode="decimal" className={input}/></label>
              <label className={label}>Prix cash<input name="cash_price" inputMode="decimal" className={input}/></label>
              <label className={label}>Prix échéancé<input name="installment_price" inputMode="decimal" className={input}/></label>
              <label className={label}>Capital d'entrée<input name="entry_capital" inputMode="decimal" className={input}/></label>
              <label className={label}>Statut<select name="status" className={input}><option value="available">Disponible</option><option value="option">Option</option><option value="reserved">Réservée</option><option value="deposit_received">Acompte reçu</option><option value="contracted">Contractée</option><option value="sold">Vendue</option></select></label>
              <button disabled={busy} className="min-h-[42px] bg-[#12304a] px-4 text-sm font-semibold text-white md:col-span-4"><Plus size={14} className="mr-2 inline"/>Ajouter l'unité</button>
            </form>
          </details>

          <div className="overflow-x-auto border border-[#d9e1e8] bg-white">
            <table className="w-full min-w-[950px] text-left text-sm">
              <thead className="border-b border-[#d9e1e8] bg-[#f7f9fb] text-[0.65rem] uppercase tracking-[0.08em] text-[#687685]"><tr><th className="p-3">Unité</th><th className="p-3">Étage</th><th className="p-3">Surface</th><th className="p-3">Vue</th><th className="p-3">Prix</th><th className="p-3">Entrée</th><th className="p-3">Statut</th></tr></thead>
              <tbody>{selectedUnits.map((u:any)=><tr key={u.id} className="border-b border-[#edf1f4]"><td className="p-3"><strong>{unitLabel(u)}</strong><span className="mt-1 block text-xs text-[#7b8794]">{u.external_id||'—'}</span></td><td className="p-3">{u.floor||'—'}</td><td className="p-3">{u.gross_area_m2?String(u.gross_area_m2)+' m²':'—'}</td><td className="p-3">{u.view||'—'}</td><td className="p-3 font-semibold">{money(u.list_price,u.currency)}</td><td className="p-3">{money(u.entry_capital,u.currency)}</td><td className="p-3"><select value={u.status} onChange={e=>updateUnitStatus(u.id,e.target.value)} className="min-h-[36px] border border-[#cfd8e3] bg-white px-2 text-xs"><option value="available">Disponible</option><option value="option">Option</option><option value="reserved">Réservée</option><option value="deposit_received">Acompte reçu</option><option value="contracted">Contractée</option><option value="sold">Vendue</option><option value="withdrawn">Retirée</option></select></td></tr>)}</tbody>
            </table>
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
