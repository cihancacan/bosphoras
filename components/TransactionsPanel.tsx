// @ts-nocheck
'use client';

import { FormEvent, useEffect, useMemo, useState } from 'react';
import { BadgeDollarSign, CalendarClock, CheckCircle2, FileText, GripVertical, Receipt, RefreshCw, UploadCloud } from 'lucide-react';
import { getPortalSupabase } from '@/lib/portalSupabase';

const STAGES=[
  ['lead','Lead'],['qualified','Qualifié'],['viewing','Visite'],['offer','Offre'],['reservation','Réservation'],
  ['due_diligence','Due diligence'],['contract','Contrat'],['closed_won','Gagné'],['closed_lost','Perdu']
];
function money(value:any,currency='EUR'){
  const n=Number(value||0);if(!Number.isFinite(n))return '—';
  try{return new Intl.NumberFormat('fr-FR',{style:'currency',currency,maximumFractionDigits:0}).format(n);}catch{return n.toLocaleString('fr-FR')+' '+currency;}
}
function cname(c:any){return [c?.first_name,c?.last_name].filter(Boolean).join(' ')||c?.company||c?.email||'Contact';}
function dueTone(date?:string,status?:string){
  if(status==='paid')return 'text-[#2f6d59]';
  if(!date)return 'text-[#687685]';
  return new Date(date).getTime()<Date.now()?'text-[#a85656]':'text-[#687685]';
}

export function TransactionsPanel({user,isAdmin,contacts=[],deals=[],listings=[],reloadWorkspace}:{user:any;isAdmin:boolean;contacts:any[];deals:any[];listings:any[];reloadWorkspace?:()=>void}){
  const supabase=getPortalSupabase();
  const [projects,setProjects]=useState<any[]>([]);
  const [units,setUnits]=useState<any[]>([]);
  const [offers,setOffers]=useState<any[]>([]);
  const [reservations,setReservations]=useState<any[]>([]);
  const [payments,setPayments]=useState<any[]>([]);
  const [history,setHistory]=useState<any[]>([]);
  const [documents,setDocuments]=useState<any[]>([]);
  const [selectedDealId,setSelectedDealId]=useState('');
  const [dragId,setDragId]=useState('');
  const [busy,setBusy]=useState(false);
  const [message,setMessage]=useState('');
  const [uploadFile,setUploadFile]=useState<File|null>(null);

  async function reload(){
    setBusy(true);
    try{
      const [p,u,o,r,pay,h,d]=await Promise.all([
        supabase.from('real_estate_projects').select('*').order('updated_at',{ascending:false}),
        supabase.from('project_units').select('*').order('updated_at',{ascending:false}),
        supabase.from('deal_offers').select('*').order('created_at',{ascending:false}),
        supabase.from('deal_reservations').select('*').order('created_at',{ascending:false}),
        supabase.from('deal_payments').select('*').order('due_date',{ascending:true,nullsFirst:false}),
        supabase.from('deal_stage_history').select('*').order('created_at',{ascending:false}),
        supabase.from('property_documents').select('*').not('deal_id','is',null).order('created_at',{ascending:false}),
      ]);
      for(const x of [p,u,o,r,pay,h,d])if(x.error)throw x.error;
      setProjects(p.data||[]);setUnits(u.data||[]);setOffers(o.data||[]);setReservations(r.data||[]);setPayments(pay.data||[]);setHistory(h.data||[]);setDocuments(d.data||[]);
      if(!selectedDealId&&deals[0]?.id)setSelectedDealId(deals[0].id);
    }catch(e:any){setMessage(e?.message||'Chargement impossible.');}
    finally{setBusy(false);}
  }
  useEffect(()=>{reload();},[deals.length]);

  const contactById=useMemo(()=>Object.fromEntries(contacts.map((x:any)=>[x.id,x])),[contacts]);
  const listingById=useMemo(()=>Object.fromEntries(listings.map((x:any)=>[x.id,x])),[listings]);
  const projectById=useMemo(()=>Object.fromEntries(projects.map((x:any)=>[x.id,x])),[projects]);
  const unitById=useMemo(()=>Object.fromEntries(units.map((x:any)=>[x.id,x])),[units]);
  const selected=deals.find((d:any)=>d.id===selectedDealId)||deals[0]||null;
  const selectedOffers=selected?offers.filter((x:any)=>x.deal_id===selected.id):[];
  const selectedReservations=selected?reservations.filter((x:any)=>x.deal_id===selected.id):[];
  const selectedPayments=selected?payments.filter((x:any)=>x.deal_id===selected.id):[];
  const selectedHistory=selected?history.filter((x:any)=>x.deal_id===selected.id):[];
  const selectedDocs=selected?documents.filter((x:any)=>x.deal_id===selected.id):[];
  const projectUnits=selected?.project_id?units.filter((u:any)=>u.project_id===selected.project_id):units;

  async function moveDeal(dealId:string,stage:string){
    const probability:any={lead:10,qualified:25,viewing:40,offer:60,reservation:75,due_diligence:82,contract:90,closed_won:100,closed_lost:0};
    setBusy(true);
    const {error}=await supabase.from('crm_deals').update({stage,probability:probability[stage]??10,updated_at:new Date().toISOString()}).eq('id',dealId);
    if(error)setMessage(error.message);else{await reloadWorkspace?.();await reload();}
    setBusy(false);
  }

  async function assignAsset(projectId:string,unitId:string){
    if(!selected)return;
    const unit=units.find((u:any)=>u.id===unitId);
    const patch:any={project_id:projectId||null,unit_id:unitId||null};
    if(unit?.listing_id)patch.listing_id=unit.listing_id;
    if(unit?.list_price){patch.deal_value=unit.list_price;patch.currency=unit.currency||selected.currency;}
    const {error}=await supabase.from('crm_deals').update(patch).eq('id',selected.id);
    if(error)setMessage(error.message);else{await reloadWorkspace?.();}
  }

  async function createOffer(e:FormEvent<HTMLFormElement>){
    e.preventDefault();if(!selected)return;setBusy(true);setMessage('');
    try{
      const fd=new FormData(e.currentTarget);const proposed=Number(fd.get('proposed_price')||0);
      if(!proposed)throw new Error('Prix proposé obligatoire.');
      const listPrice=Number(fd.get('list_price')||0)||null;
      const {error}=await supabase.from('deal_offers').insert({
        deal_id:selected.id,listing_id:selected.listing_id||null,project_id:selected.project_id||null,unit_id:selected.unit_id||null,
        version:selectedOffers.length+1,currency:String(fd.get('currency')||selected.currency||'EUR'),
        list_price:listPrice,proposed_price:proposed,
        discount_pct:listPrice?Math.max(0,(listPrice-proposed)/listPrice*100):null,
        seller_floor_price_snapshot:Number(fd.get('floor_price')||0)||null,
        terms:String(fd.get('terms')||'').trim()||null,
        expires_at:String(fd.get('expires_at')||'')?new Date(String(fd.get('expires_at'))).toISOString():null,
        status:String(fd.get('status')||'draft'),created_by:user?.id||null
      });
      if(error)throw error;
      if(selected.stage==='viewing'||selected.stage==='qualified')await moveDeal(selected.id,'offer');
      e.currentTarget.reset();setMessage('Offre enregistrée.');await reload();
    }catch(e:any){setMessage(e?.message||'Offre impossible.');}
    finally{setBusy(false);}
  }

  async function offerStatus(id:string,status:string){
    const {error}=await supabase.from('deal_offers').update({status}).eq('id',id);
    if(error){setMessage(error.message);return;}
    if(status==='accepted'&&selected)await moveDeal(selected.id,'reservation');
    await reload();
  }

  async function createReservation(e:FormEvent<HTMLFormElement>){
    e.preventDefault();if(!selected)return;setBusy(true);setMessage('');
    try{
      const fd=new FormData(e.currentTarget);
      const {error}=await supabase.from('deal_reservations').insert({
        deal_id:selected.id,unit_id:selected.unit_id||null,
        reservation_reference:String(fd.get('reference')||'').trim()||null,
        amount:Number(fd.get('amount')||0)||null,currency:String(fd.get('currency')||selected.currency||'EUR'),
        expires_at:String(fd.get('expires_at')||'')?new Date(String(fd.get('expires_at'))).toISOString():null,
        status:String(fd.get('status')||'pending'),payment_method:String(fd.get('payment_method')||'').trim()||null,
        receipt_reference:String(fd.get('receipt_reference')||'').trim()||null,notes:String(fd.get('notes')||'').trim()||null,
        created_by:user?.id||null
      });
      if(error)throw error;
      if(selected.unit_id)await supabase.from('project_units').update({status:'reserved',option_expires_at:String(fd.get('expires_at')||'')?new Date(String(fd.get('expires_at'))).toISOString():null}).eq('id',selected.unit_id);
      await moveDeal(selected.id,'reservation');e.currentTarget.reset();setMessage('Réservation créée.');await reload();
    }catch(e:any){setMessage(e?.message||'Réservation impossible.');}
    finally{setBusy(false);}
  }

  async function createPayment(e:FormEvent<HTMLFormElement>){
    e.preventDefault();if(!selected)return;setBusy(true);setMessage('');
    try{
      const fd=new FormData(e.currentTarget);
      const {error}=await supabase.from('deal_payments').insert({
        deal_id:selected.id,reservation_id:String(fd.get('reservation_id')||'')||null,unit_id:selected.unit_id||null,
        sequence_no:selectedPayments.length+1,label:String(fd.get('label')||'').trim(),
        payment_type:String(fd.get('payment_type')||'installment'),percentage:Number(fd.get('percentage')||0)||null,
        amount:Number(fd.get('amount')||0),currency:String(fd.get('currency')||selected.currency||'EUR'),
        due_date:String(fd.get('due_date')||'')||null,status:'planned',created_by:user?.id||null
      });
      if(error)throw error;e.currentTarget.reset();setMessage('Échéance ajoutée.');await reload();
    }catch(e:any){setMessage(e?.message||'Échéance impossible.');}
    finally{setBusy(false);}
  }

  async function paymentStatus(payment:any,status:string){
    const patch:any={status};
    if(status==='paid'){patch.amount_paid=payment.amount;patch.paid_at=new Date().toISOString();}
    const {error}=await supabase.from('deal_payments').update(patch).eq('id',payment.id);
    if(error)setMessage(error.message);else await reload();
  }

  async function uploadDocument(e:FormEvent<HTMLFormElement>){
    e.preventDefault();if(!selected||!uploadFile)return;setBusy(true);setMessage('');
    try{
      const fd=new FormData(e.currentTarget);
      const safe=uploadFile.name.toLowerCase().replace(/[^a-z0-9._-]+/g,'-');
      const path=selected.id+'/'+crypto.randomUUID()+'-'+safe;
      const {error:up}=await supabase.storage.from('deal-documents').upload(path,uploadFile,{upsert:false,contentType:uploadFile.type||'application/octet-stream'});
      if(up)throw up;
      const {error}=await supabase.from('property_documents').insert({
        deal_id:selected.id,contact_id:selected.contact_id||null,listing_id:selected.listing_id||null,
        partner_id:selected.partner_id||null,uploaded_by:user?.id||null,category:String(fd.get('category')||'other'),
        name:String(fd.get('name')||'').trim()||uploadFile.name,storage_bucket:'deal-documents',storage_path:path,
        mime_type:uploadFile.type||null,size_bytes:uploadFile.size,status:'active',visibility:String(fd.get('visibility')||'internal')
      });
      if(error)throw error;e.currentTarget.reset();setUploadFile(null);setMessage('Document ajouté à la Data Room.');await reload();
    }catch(e:any){setMessage(e?.message||'Upload impossible.');}
    finally{setBusy(false);}
  }

  async function openDocument(doc:any){
    const bucket=doc.storage_bucket||'deal-documents';
    const {data,error}=await supabase.storage.from(bucket).createSignedUrl(doc.storage_path,180);
    if(error)setMessage(error.message);else if(data?.signedUrl)window.open(data.signedUrl,'_blank','noopener,noreferrer');
  }

  const input='min-h-[40px] w-full border border-[#cfd8e3] bg-white px-3 text-sm outline-none';
  const label='grid gap-1 text-[0.64rem] font-semibold uppercase tracking-[0.08em] text-[#687685]';
  const paid=selectedPayments.reduce((s:number,p:any)=>s+Number(p.amount_paid||0),0);
  const planned=selectedPayments.reduce((s:number,p:any)=>s+Number(p.amount||0),0);

  return <div className="space-y-6">
    {message?<div className="border border-[#d9e1e8] bg-white px-4 py-3 text-sm">{message}</div>:null}
    <div className="flex items-center justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#315d7c]">Pipeline commercial</p><h2 className="mt-1 text-3xl font-semibold">Transactions</h2></div><button onClick={reload} className="inline-flex items-center gap-2 border border-[#cfd8e3] bg-white px-3 py-2 text-sm"><RefreshCw size={14} className={busy?'animate-spin':''}/>Actualiser</button></div>

    <div className="overflow-x-auto pb-2">
      <div className="grid min-w-[1900px] grid-cols-9 gap-3">
        {STAGES.map(([stage,label])=>{
          const rows=deals.filter((d:any)=>d.stage===stage);
          return <section key={stage} onDragOver={e=>e.preventDefault()} onDrop={()=>{if(dragId)moveDeal(dragId,stage);setDragId('');}} className="min-h-[250px] border border-[#d9e1e8] bg-[#f7f9fb]">
            <div className="flex items-center justify-between border-b border-[#d9e1e8] px-3 py-3"><strong className="text-sm">{label}</strong><span className="rounded-full bg-white px-2 py-0.5 text-xs">{rows.length}</span></div>
            <div className="space-y-2 p-2">{rows.map((d:any)=><article draggable onDragStart={()=>setDragId(d.id)} onClick={()=>setSelectedDealId(d.id)} key={d.id} className={'cursor-pointer border bg-white p-3 '+(selected?.id===d.id?'border-[#315d7c]':'border-[#e2e8ee]')}>
              <div className="flex items-start gap-2"><GripVertical size={14} className="mt-1 shrink-0 text-[#9aa6af]"/><div className="min-w-0"><strong className="block truncate text-sm">{d.title}</strong><p className="mt-1 truncate text-xs text-[#687685]">{cname(contactById[d.contact_id])}</p><p className="mt-2 text-xs font-semibold text-[#315d7c]">{money(d.deal_value,d.currency)} · {d.probability}%</p></div></div>
            </article>)}</div>
          </section>;
        })}
      </div>
    </div>

    {selected?<div className="grid gap-6 xl:grid-cols-[minmax(0,1.35fr)_minmax(360px,0.65fr)]">
      <section className="space-y-5">
        <div className="border border-[#d9e1e8] bg-[#132538] p-6 text-white">
          <div className="flex flex-wrap items-start justify-between gap-4"><div><span className="text-[0.65rem] uppercase tracking-[0.1em] text-[#9eb6c8]">{selected.stage}</span><h3 className="mt-1 text-3xl font-semibold">{selected.title}</h3><p className="mt-2 text-sm text-[#b8c8d5]">{cname(contactById[selected.contact_id])}</p></div><div className="text-right"><strong className="text-2xl">{money(selected.deal_value,selected.currency)}</strong><span className="mt-1 block text-xs text-[#a9bfd0]">{selected.probability}% probabilité</span></div></div>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <select value={selected.project_id||''} onChange={e=>assignAsset(e.target.value,'')} className="min-h-[40px] bg-white px-3 text-sm text-[#162334]"><option value="">Projet non attribué</option>{projects.map((p:any)=><option key={p.id} value={p.id}>{p.name}</option>)}</select>
            <select value={selected.unit_id||''} onChange={e=>assignAsset(selected.project_id||'',e.target.value)} className="min-h-[40px] bg-white px-3 text-sm text-[#162334]"><option value="">Unité non attribuée</option>{projectUnits.map((u:any)=><option key={u.id} value={u.id}>{unitLabel(u)} · {money(u.list_price,u.currency)}</option>)}</select>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <section className="border border-[#d9e1e8] bg-white p-5">
            <div className="flex items-center gap-2"><BadgeDollarSign size={18} className="text-[#315d7c]"/><h3 className="text-lg font-semibold">Offres</h3></div>
            <form onSubmit={createOffer} className="mt-4 grid gap-2">
              <div className="grid grid-cols-2 gap-2"><input name="list_price" defaultValue={unitById[selected.unit_id]?.list_price||selected.deal_value||''} placeholder="Prix catalogue" className={input}/><input name="proposed_price" required placeholder="Prix proposé" className={input}/></div>
              <div className="grid grid-cols-2 gap-2"><select name="currency" defaultValue={selected.currency||'EUR'} className={input}><option>EUR</option><option>USD</option><option>AED</option><option>TRY</option></select><input name="floor_price" placeholder="Prix plancher" className={input}/></div>
              <input name="expires_at" type="datetime-local" className={input}/><textarea name="terms" rows={2} placeholder="Conditions / contreparties" className={input+' py-2'}/><button className="min-h-[40px] bg-[#12304a] text-sm font-semibold text-white">Créer l'offre</button>
            </form>
            <div className="mt-4 space-y-2">{selectedOffers.map((o:any)=><article key={o.id} className="border border-[#e5eaee] p-3"><div className="flex justify-between gap-3"><div><strong>{money(o.proposed_price,o.currency)}</strong><p className="mt-1 text-xs text-[#687685]">v{o.version} · remise {o.discount_pct?Number(o.discount_pct).toFixed(1)+' %':'—'}</p></div><select value={o.status} onChange={e=>offerStatus(o.id,e.target.value)} className="h-8 border border-[#cfd8e3] text-xs"><option value="draft">Brouillon</option><option value="sent">Envoyée</option><option value="countered">Contre-offre</option><option value="accepted">Acceptée</option><option value="rejected">Refusée</option><option value="expired">Expirée</option></select></div></article>)}</div>
          </section>

          <section className="border border-[#d9e1e8] bg-white p-5">
            <div className="flex items-center gap-2"><Receipt size={18} className="text-[#315d7c]"/><h3 className="text-lg font-semibold">Réservation</h3></div>
            <form onSubmit={createReservation} className="mt-4 grid gap-2">
              <div className="grid grid-cols-2 gap-2"><input name="reference" placeholder="Référence" className={input}/><input name="amount" placeholder="Montant" className={input}/></div>
              <div className="grid grid-cols-2 gap-2"><select name="currency" defaultValue={selected.currency||'EUR'} className={input}><option>EUR</option><option>USD</option><option>AED</option><option>TRY</option></select><input name="expires_at" type="datetime-local" className={input}/></div>
              <input name="payment_method" placeholder="Mode de paiement" className={input}/><input name="receipt_reference" placeholder="Référence reçu" className={input}/><textarea name="notes" rows={2} placeholder="Notes" className={input+' py-2'}/><button className="min-h-[40px] bg-[#12304a] text-sm font-semibold text-white">Créer la réservation</button>
            </form>
            <div className="mt-4 space-y-2">{selectedReservations.map((r:any)=><article key={r.id} className="border border-[#e5eaee] p-3"><div className="flex justify-between"><div><strong>{money(r.amount,r.currency)}</strong><p className="mt-1 text-xs text-[#687685]">{r.reservation_reference||'Sans référence'} · {r.status}</p></div><CheckCircle2 size={17} className={r.status==='confirmed'?'text-[#2f6d59]':'text-[#94a1aa]'}/></div></article>)}</div>
          </section>
        </div>

        <section className="border border-[#d9e1e8] bg-white p-5">
          <div className="flex items-center justify-between gap-4"><div className="flex items-center gap-2"><CalendarClock size={18} className="text-[#315d7c]"/><h3 className="text-lg font-semibold">Échéancier réel</h3></div><span className="text-sm text-[#526272]">Payé {money(paid,selected.currency)} / {money(planned,selected.currency)}</span></div>
          <form onSubmit={createPayment} className="mt-4 grid gap-2 md:grid-cols-6">
            <input name="label" required placeholder="Échéance" className={input+' md:col-span-2'}/>
            <select name="payment_type" className={input}><option value="reservation">Réservation</option><option value="deposit">Acompte</option><option value="installment">Échéance</option><option value="handover">Livraison</option><option value="fee">Frais</option><option value="tax">Taxe</option></select>
            <input name="percentage" placeholder="%" className={input}/><input name="amount" required placeholder="Montant" className={input}/><input name="due_date" type="date" className={input}/>
            <select name="currency" defaultValue={selected.currency||'EUR'} className={input}><option>EUR</option><option>USD</option><option>AED</option><option>TRY</option></select>
            <select name="reservation_id" className={input+' md:col-span-2'}><option value="">Sans réservation liée</option>{selectedReservations.map((r:any)=><option key={r.id} value={r.id}>{r.reservation_reference||r.id}</option>)}</select>
            <button className="min-h-[40px] bg-[#12304a] px-3 text-sm font-semibold text-white md:col-span-3">Ajouter l'échéance</button>
          </form>
          <div className="mt-5 overflow-x-auto"><table className="w-full min-w-[700px] text-left text-sm"><thead className="border-b border-[#e4e9ed] text-xs text-[#687685]"><tr><th className="py-2">Échéance</th><th>Due</th><th>Montant</th><th>Payé</th><th>Statut</th></tr></thead><tbody>{selectedPayments.map((p:any)=><tr key={p.id} className="border-b border-[#eef2f4]"><td className="py-3 font-medium">{p.label}</td><td className={dueTone(p.due_date,p.status)}>{p.due_date||'—'}</td><td>{money(p.amount,p.currency)}</td><td>{money(p.amount_paid,p.currency)}</td><td><select value={p.status} onChange={e=>paymentStatus(p,e.target.value)} className="h-8 border border-[#cfd8e3] bg-white text-xs"><option value="planned">Planifiée</option><option value="due">À payer</option><option value="partial">Partiel</option><option value="paid">Payée</option><option value="overdue">En retard</option><option value="cancelled">Annulée</option></select></td></tr>)}</tbody></table></div>
        </section>
      </section>

      <aside className="space-y-5">
        <section className="border border-[#d9e1e8] bg-white p-5">
          <div className="flex items-center gap-2"><FileText size={18} className="text-[#315d7c]"/><h3 className="text-lg font-semibold">Data Room</h3></div>
          <form onSubmit={uploadDocument} className="mt-4 grid gap-2">
            <input name="name" placeholder="Nom du document" className={input}/><select name="category" className={input}><option value="reservation">Réservation</option><option value="contract">Contrat / SPA</option><option value="passport">Passeport</option><option value="receipt">Reçu</option><option value="title_deed">Titre / Tapu</option><option value="floorplan">Plan</option><option value="brochure">Brochure</option><option value="bank">Banque</option><option value="other">Autre</option></select>
            <select name="visibility" className={input}><option value="internal">Interne</option><option value="partner">Partenaire</option><option value="client">Client</option></select>
            <input type="file" onChange={e=>setUploadFile(e.target.files?.[0]||null)} className="text-sm"/><button disabled={!uploadFile||busy} className="inline-flex min-h-[40px] items-center justify-center gap-2 bg-[#12304a] text-sm font-semibold text-white disabled:opacity-40"><UploadCloud size={14}/>Ajouter</button>
          </form>
          <div className="mt-4 divide-y divide-[#edf1f4]">{selectedDocs.map((d:any)=><button key={d.id} onClick={()=>openDocument(d)} className="block w-full py-3 text-left"><strong className="block text-sm">{d.name}</strong><span className="mt-1 block text-xs text-[#687685]">{d.category} · {d.visibility}</span></button>)}{!selectedDocs.length?<p className="py-5 text-sm text-[#687685]">Aucun document.</p>:null}</div>
        </section>

        <section className="border border-[#d9e1e8] bg-white p-5">
          <h3 className="text-lg font-semibold">Historique transaction</h3>
          <div className="mt-4 space-y-3">{selectedHistory.map((h:any)=><div key={h.id} className="border-l-2 border-[#b9cbd8] pl-3"><strong className="block text-sm">{h.from_stage?String(h.from_stage)+' → ':''}{h.to_stage}</strong><span className="text-xs text-[#7b8794]">{new Date(h.created_at).toLocaleString('fr-FR')}</span></div>)}{!selectedHistory.length?<p className="text-sm text-[#687685]">Aucun historique.</p>:null}</div>
        </section>

        <section className="border border-[#d9e1e8] bg-white p-5">
          <h3 className="text-lg font-semibold">Actif lié</h3>
          <div className="mt-3 text-sm leading-6 text-[#526272]"><p><strong>Projet :</strong> {projectById[selected.project_id]?.name||'—'}</p><p><strong>Unité :</strong> {unitLabel(unitById[selected.unit_id])}</p><p><strong>Annonce :</strong> {listingById[selected.listing_id]?.title?.fr||'—'}</p><p><strong>Clôture prévue :</strong> {selected.expected_close_date||'—'}</p></div>
        </section>
      </aside>
    </div>:<div className="border border-dashed border-[#cfd8e3] bg-white p-10 text-center text-sm text-[#687685]">Créez d'abord un deal dans le CRM.</div>}
  </div>;
}
