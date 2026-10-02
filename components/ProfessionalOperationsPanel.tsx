// @ts-nocheck
'use client';

import { FormEvent, useEffect, useMemo, useState } from 'react';
import {
  CalendarDays, CheckCircle2, CircleDollarSign, Download, FileText, Plus,
  RefreshCw, UploadCloud, Video, MapPin, Clock3
} from 'lucide-react';
import { getPortalSupabase } from '@/lib/portalSupabase';

type Area = 'viewings' | 'documents' | 'commissions';

function money(value:any,currency='EUR'){
  const amount=Number(value||0);
  return new Intl.NumberFormat('fr-FR',{style:'currency',currency,maximumFractionDigits:0}).format(Number.isFinite(amount)?amount:0);
}

function niceDate(value?:string){
  if(!value)return '—';
  try{return new Date(value).toLocaleString('fr-FR',{dateStyle:'medium',timeStyle:'short'});}catch{return value;}
}

function contactName(contact:any){
  return [contact?.first_name,contact?.last_name].filter(Boolean).join(' ')||contact?.company||contact?.email||'Contact';
}

function listingName(listing:any){
  return listing?.title?.fr||listing?.external_id||'Bien';
}

export function ProfessionalOperationsPanel({
  user,
  profile,
  isAdmin,
  contacts,
  deals,
  listings,
  partners,
  partnerUsers,
}:{
  user:any;
  profile:any;
  isAdmin:boolean;
  contacts:any[];
  deals:any[];
  listings:any[];
  partners:any[];
  partnerUsers:any[];
}) {
  const supabase=getPortalSupabase();
  const [area,setArea]=useState<Area>('viewings');
  const [busy,setBusy]=useState(false);
  const [message,setMessage]=useState('');
  const [viewings,setViewings]=useState<any[]>([]);
  const [documents,setDocuments]=useState<any[]>([]);
  const [commissions,setCommissions]=useState<any[]>([]);
  const [uploadFile,setUploadFile]=useState<File|null>(null);
  const [docPartnerId,setDocPartnerId]=useState(profile?.partner_id||'');

  async function reload(){
    setBusy(true);
    const [v,d,c]=await Promise.all([
      supabase.from('viewings').select('*').order('starts_at',{ascending:true}),
      supabase.from('partner_documents').select('*').order('created_at',{ascending:false}),
      supabase.from('commissions').select('*').order('created_at',{ascending:false}),
    ]);
    setViewings(v.data||[]);
    setDocuments(d.data||[]);
    setCommissions(c.data||[]);
    setBusy(false);
  }

  useEffect(()=>{reload();},[]);

  const contactById=useMemo(()=>Object.fromEntries(contacts.map((x:any)=>[x.id,x])),[contacts]);
  const listingById=useMemo(()=>Object.fromEntries(listings.map((x:any)=>[x.id,x])),[listings]);
  const dealById=useMemo(()=>Object.fromEntries(deals.map((x:any)=>[x.id,x])),[deals]);
  const partnerById=useMemo(()=>Object.fromEntries(partners.map((x:any)=>[x.id,x])),[partners]);
  const userById=useMemo(()=>Object.fromEntries(partnerUsers.map((x:any)=>[x.user_id,x])),[partnerUsers]);

  async function createViewing(event:FormEvent<HTMLFormElement>){
    event.preventDefault();
    setBusy(true);setMessage('');
    try{
      const fd=new FormData(event.currentTarget);
      const contactId=String(fd.get('contact_id')||'');
      const contact=contacts.find((x:any)=>x.id===contactId);
      if(!contact)throw new Error('Choisissez un contact CRM.');
      const ownerUserId=isAdmin ? (contact.owner_user_id||user.id) : user.id;
      const partnerId=isAdmin ? (contact.partner_id||null) : profile.partner_id;
      const startsAt=String(fd.get('starts_at')||'');
      if(!startsAt)throw new Error('Date et heure obligatoires.');
      const {error}=await supabase.from('viewings').insert({
        contact_id:contactId,
        deal_id:String(fd.get('deal_id')||'')||null,
        listing_id:String(fd.get('listing_id')||'')||null,
        owner_user_id:ownerUserId,
        partner_id:partnerId,
        starts_at:new Date(startsAt).toISOString(),
        viewing_type:String(fd.get('viewing_type')||'physical'),
        status:'scheduled',
        meeting_point:String(fd.get('meeting_point')||'').trim()||null,
        notes:String(fd.get('notes')||'').trim()||null,
      });
      if(error)throw error;
      event.currentTarget.reset();
      setMessage('Visite ajoutée.');
      await reload();
    }catch(error){setMessage(error instanceof Error?error.message:'Création impossible.');}
    finally{setBusy(false);}
  }

  async function updateViewingStatus(id:string,status:string){
    const {error}=await supabase.from('viewings').update({status}).eq('id',id);
    if(error)setMessage(error.message); else reload();
  }

  async function uploadDocument(event:FormEvent<HTMLFormElement>){
    event.preventDefault();
    if(!uploadFile){setMessage('Choisissez un fichier.');return;}
    const partnerId=isAdmin?docPartnerId:profile.partner_id;
    if(!partnerId){setMessage('Sélectionnez un partenaire.');return;}
    setBusy(true);setMessage('');
    try{
      const fd=new FormData(event.currentTarget);
      const safe=uploadFile.name.toLowerCase().replace(/[^a-z0-9._-]+/g,'-');
      const path=`${partnerId}/${crypto.randomUUID()}-${safe}`;
      const {error:uploadError}=await supabase.storage.from('partner-documents').upload(path,uploadFile,{
        cacheControl:'3600',
        upsert:false,
        contentType:uploadFile.type||'application/octet-stream',
      });
      if(uploadError)throw uploadError;
      const {error}=await supabase.from('partner_documents').insert({
        partner_id:partnerId,
        uploaded_by:user.id,
        category:String(fd.get('category')||'other'),
        name:String(fd.get('name')||'').trim()||uploadFile.name,
        storage_path:path,
        mime_type:uploadFile.type||null,
        size_bytes:uploadFile.size,
        status:'active',
        expires_at:String(fd.get('expires_at')||'')||null,
      });
      if(error)throw error;
      event.currentTarget.reset();
      setUploadFile(null);
      setMessage('Document ajouté au coffre partenaire.');
      await reload();
    }catch(error){setMessage(error instanceof Error?error.message:'Upload impossible.');}
    finally{setBusy(false);}
  }

  async function openDocument(document:any){
    const {data,error}=await supabase.storage.from('partner-documents').createSignedUrl(document.storage_path,120);
    if(error){setMessage(error.message);return;}
    if(data?.signedUrl)window.open(data.signedUrl,'_blank','noopener,noreferrer');
  }

  async function createCommission(event:FormEvent<HTMLFormElement>){
    event.preventDefault();
    if(!isAdmin)return;
    setBusy(true);setMessage('');
    try{
      const fd=new FormData(event.currentTarget);
      const dealId=String(fd.get('deal_id')||'');
      const deal=deals.find((x:any)=>x.id===dealId);
      if(!deal)throw new Error('Choisissez un deal.');
      const gross=Number(fd.get('gross_commission')||0);
      const partnerShare=Number(fd.get('partner_share')||0);
      const bosphorasShare=Number(fd.get('bosphoras_share')||0);
      const {error}=await supabase.from('commissions').insert({
        deal_id:dealId,
        partner_id:String(fd.get('partner_id')||deal.partner_id||'')||null,
        listing_id:String(fd.get('listing_id')||deal.listing_id||'')||null,
        currency:String(fd.get('currency')||deal.currency||'EUR'),
        gross_commission:gross||null,
        partner_share:partnerShare||null,
        bosphoras_share:bosphorasShare||null,
        status:'estimated',
        due_date:String(fd.get('due_date')||'')||null,
        invoice_reference:String(fd.get('invoice_reference')||'').trim()||null,
        admin_notes:String(fd.get('admin_notes')||'').trim()||null,
      });
      if(error)throw error;
      event.currentTarget.reset();
      setMessage('Commission enregistrée.');
      await reload();
    }catch(error){setMessage(error instanceof Error?error.message:'Enregistrement impossible.');}
    finally{setBusy(false);}
  }

  async function commissionStatus(id:string,status:string){
    const payload:any={status};
    if(status==='received')payload.received_at=new Date().toISOString();
    if(status==='paid')payload.paid_at=new Date().toISOString();
    const {error}=await supabase.from('commissions').update(payload).eq('id',id);
    if(error)setMessage(error.message);else reload();
  }

  const input='min-h-[43px] w-full border border-[#cfd8e3] bg-white px-3 text-sm text-[#162334] outline-none focus:border-[#315d7c]';
  const label='grid gap-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-[#526272]';

  const commissionTotals=commissions.reduce((acc:any,item:any)=>{
    const cur=item.currency||'EUR';
    if(!acc[cur])acc[cur]={gross:0,partner:0,bosphoras:0};
    acc[cur].gross+=Number(item.gross_commission||0);
    acc[cur].partner+=Number(item.partner_share||0);
    acc[cur].bosphoras+=Number(item.bosphoras_share||0);
    return acc;
  },{});

  return (
    <div className="space-y-7 [font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif]">
      <div className="flex flex-wrap gap-2 border-b border-[#d9e1e8] pb-4">
        {[
          ['viewings','Visites',CalendarDays],
          ['documents','Documents',FileText],
          ['commissions','Commissions',CircleDollarSign],
        ].map(([value,title,Icon]:any)=>(
          <button key={value} onClick={()=>setArea(value)} className={`inline-flex min-h-[42px] items-center gap-2 px-4 text-sm font-semibold ${area===value?'bg-[#12304a] text-white':'border border-[#cfd8e3] bg-white text-[#526272]'}`}>
            <Icon size={16}/>{title}
          </button>
        ))}
        <button onClick={reload} className="ml-auto inline-flex h-10 w-10 items-center justify-center border border-[#cfd8e3] bg-white text-[#526272]" aria-label="Actualiser">
          <RefreshCw size={15} className={busy?'animate-spin':''}/>
        </button>
      </div>

      {message?<div className="border border-[#d9e1e8] bg-white px-4 py-3 text-sm text-[#526272]">{message}</div>:null}

      {area==='viewings'&&(
        <section className="space-y-6">
          <div className="grid gap-6 xl:grid-cols-[0.88fr_1.12fr]">
            <form onSubmit={createViewing} className="border border-[#d9e1e8] bg-white p-6">
              <div className="flex items-center gap-3"><CalendarDays size={19} className="text-[#315d7c]"/><h2 className="text-xl font-semibold">Planifier une visite</h2></div>
              <p className="mt-2 text-sm leading-6 text-[#687685]">Visite physique, vidéo, rendez-vous promoteur ou remise des clés. Le rendez-vous reste lié au contact CRM.</p>
              <div className="mt-5 grid gap-4">
                <label className={label}>Contact CRM
                  <select name="contact_id" required className={input}><option value="">Choisir…</option>{contacts.map((c:any)=><option key={c.id} value={c.id}>{contactName(c)}</option>)}</select>
                </label>
                <div className="grid gap-4 md:grid-cols-2">
                  <label className={label}>Bien / projet
                    <select name="listing_id" className={input}><option value="">Non défini</option>{listings.map((l:any)=><option key={l.id} value={l.id}>{listingName(l)}</option>)}</select>
                  </label>
                  <label className={label}>Deal
                    <select name="deal_id" className={input}><option value="">Non défini</option>{deals.map((d:any)=><option key={d.id} value={d.id}>{d.title}</option>)}</select>
                  </label>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <label className={label}>Date et heure<input name="starts_at" type="datetime-local" required className={input}/></label>
                  <label className={label}>Type
                    <select name="viewing_type" className={input}><option value="physical">Visite physique</option><option value="video">Visite vidéo</option><option value="developer_meeting">Rendez-vous promoteur</option><option value="handover">Remise des clés</option></select>
                  </label>
                </div>
                <label className={label}>Point de rendez-vous / lien vidéo<input name="meeting_point" className={input}/></label>
                <label className={label}>Notes<textarea name="notes" rows={3} className="border border-[#cfd8e3] px-3 py-3 text-sm"/></label>
                <button disabled={busy} className="inline-flex min-h-[45px] items-center justify-center gap-2 bg-[#12304a] px-5 text-sm font-semibold text-white disabled:opacity-50"><Plus size={15}/>Ajouter la visite</button>
              </div>
            </form>

            <div className="border border-[#d9e1e8] bg-white p-6">
              <h2 className="text-xl font-semibold">Agenda des visites</h2>
              <div className="mt-5 space-y-3">
                {viewings.map((v:any)=>{
                  const contact=contactById[v.contact_id];
                  const listing=listingById[v.listing_id];
                  return <article key={v.id} className="border border-[#e2e8ee] p-4">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-[#315d7c]">
                          <span>{v.viewing_type}</span><span>·</span><span>{v.status}</span>
                        </div>
                        <h3 className="mt-1 text-base font-semibold">{contactName(contact)}</h3>
                        <p className="mt-1 text-sm text-[#687685]">{listing?listingName(listing):'Bien non défini'}</p>
                        <div className="mt-3 flex flex-wrap gap-4 text-xs text-[#5f6e7d]"><span className="inline-flex items-center gap-1"><Clock3 size={13}/>{niceDate(v.starts_at)}</span>{v.meeting_point?<span className="inline-flex items-center gap-1"><MapPin size={13}/>{v.meeting_point}</span>:null}</div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {v.status!=='completed'&&<button onClick={()=>updateViewingStatus(v.id,'completed')} className="border border-[#2f6d59] px-3 py-2 text-xs font-semibold text-[#2f6d59]">Terminée</button>}
                        {v.status!=='cancelled'&&<button onClick={()=>updateViewingStatus(v.id,'cancelled')} className="border border-[#a85656] px-3 py-2 text-xs font-semibold text-[#a85656]">Annuler</button>}
                      </div>
                    </div>
                  </article>;
                })}
                {!viewings.length?<p className="py-7 text-sm text-[#687685]">Aucune visite planifiée.</p>:null}
              </div>
            </div>
          </div>
        </section>
      )}

      {area==='documents'&&(
        <section className="grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
          <form onSubmit={uploadDocument} className="border border-[#d9e1e8] bg-white p-6">
            <div className="flex items-center gap-3"><UploadCloud size={19} className="text-[#315d7c]"/><h2 className="text-xl font-semibold">Coffre documentaire</h2></div>
            <p className="mt-2 text-sm leading-6 text-[#687685]">Licences, conventions, KYC, tarifs et documents commerciaux. Le stockage est privé ; l’accès suit les droits du partenaire.</p>
            <div className="mt-5 grid gap-4">
              {isAdmin?<label className={label}>Partenaire
                <select value={docPartnerId} onChange={(e)=>setDocPartnerId(e.target.value)} required className={input}><option value="">Choisir…</option>{partners.map((p:any)=><option key={p.id} value={p.id}>{p.name}</option>)}</select>
              </label>:null}
              <label className={label}>Catégorie
                <select name="category" className={input}><option value="agreement">Convention</option><option value="license">Licence</option><option value="kyc">KYC</option><option value="company">Société</option><option value="bank">Banque</option><option value="price_list">Liste de prix</option><option value="brochure">Brochure</option><option value="other">Autre</option></select>
              </label>
              <label className={label}>Nom du document<input name="name" className={input} placeholder="Ex. Accord partenaire 2026"/></label>
              <label className={label}>Expiration <span className="normal-case font-normal tracking-normal text-[#7b8794]">(si le document doit être renouvelé)</span><input name="expires_at" type="date" className={input}/></label>
              <label className={label}>Fichier<input type="file" required onChange={(e)=>setUploadFile(e.target.files?.[0]||null)} className="text-sm normal-case tracking-normal"/></label>
              <button disabled={busy||!uploadFile} className="inline-flex min-h-[45px] items-center justify-center gap-2 bg-[#12304a] px-5 text-sm font-semibold text-white disabled:opacity-50"><UploadCloud size={15}/>Ajouter au coffre</button>
            </div>
          </form>

          <div className="border border-[#d9e1e8] bg-white p-6">
            <h2 className="text-xl font-semibold">Documents disponibles</h2>
            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-[650px] text-left text-sm">
                <thead className="border-b border-[#d9e1e8] text-[0.68rem] uppercase tracking-[0.08em] text-[#687685]"><tr><th className="py-3 pr-4">Document</th><th className="py-3 pr-4">Partenaire</th><th className="py-3 pr-4">Catégorie</th><th className="py-3 pr-4">Expiration</th><th className="py-3"></th></tr></thead>
                <tbody>{documents.map((d:any)=><tr key={d.id} className="border-b border-[#eef2f5]"><td className="py-4 pr-4 font-medium">{d.name}</td><td className="py-4 pr-4 text-[#687685]">{partnerById[d.partner_id]?.name||'Votre société'}</td><td className="py-4 pr-4 text-[#687685]">{d.category}</td><td className="py-4 pr-4 text-[#687685]">{d.expires_at||'—'}</td><td className="py-4 text-right"><button onClick={()=>openDocument(d)} className="inline-flex items-center gap-2 text-xs font-semibold text-[#315d7c]"><Download size={14}/>Ouvrir</button></td></tr>)}</tbody>
              </table>
              {!documents.length?<p className="py-7 text-sm text-[#687685]">Aucun document.</p>:null}
            </div>
          </div>
        </section>
      )}

      {area==='commissions'&&(
        <section className="space-y-6">
          <div className="grid gap-px bg-[#d9e1e8] sm:grid-cols-2 lg:grid-cols-4">
            {Object.entries(commissionTotals).flatMap(([currency,totals]:any)=>[
              <article key={`${currency}-gross`} className="bg-[#132538] p-5 text-white"><span className="text-[0.65rem] uppercase tracking-[0.08em] text-[#a9bfd0]">Commissions brutes {currency}</span><strong className="mt-2 block text-2xl font-semibold">{money(totals.gross,currency)}</strong></article>,
              <article key={`${currency}-partner`} className="bg-white p-5"><span className="text-[0.65rem] uppercase tracking-[0.08em] text-[#687685]">Part partenaires {currency}</span><strong className="mt-2 block text-2xl font-semibold">{money(totals.partner,currency)}</strong></article>,
            ]).slice(0,4)}
            {!Object.keys(commissionTotals).length?<article className="bg-white p-5 sm:col-span-2 lg:col-span-4"><span className="text-sm text-[#687685]">Aucune commission enregistrée.</span></article>:null}
          </div>

          {isAdmin?<form onSubmit={createCommission} className="grid gap-4 border border-[#d9e1e8] bg-white p-6 md:grid-cols-4">
            <label className={label}>Deal<select name="deal_id" required className={input}><option value="">Choisir…</option>{deals.map((d:any)=><option key={d.id} value={d.id}>{d.title}</option>)}</select></label>
            <label className={label}>Partenaire<select name="partner_id" className={input}><option value="">Selon le deal</option>{partners.map((p:any)=><option key={p.id} value={p.id}>{p.name}</option>)}</select></label>
            <label className={label}>Bien<select name="listing_id" className={input}><option value="">Selon le deal</option>{listings.map((l:any)=><option key={l.id} value={l.id}>{listingName(l)}</option>)}</select></label>
            <label className={label}>Devise<select name="currency" className={input}><option>EUR</option><option>USD</option><option>TRY</option><option>GBP</option><option>CHF</option></select></label>
            <label className={label}>Commission brute<input name="gross_commission" inputMode="decimal" className={input}/></label>
            <label className={label}>Part partenaire<input name="partner_share" inputMode="decimal" className={input}/></label>
            <label className={label}>Part Bosphoras<input name="bosphoras_share" inputMode="decimal" className={input}/></label>
            <label className={label}>Échéance<input name="due_date" type="date" className={input}/></label>
            <label className={label}>Référence facture<input name="invoice_reference" className={input}/></label>
            <label className={`${label} md:col-span-2`}>Note admin<input name="admin_notes" className={input}/></label>
            <button disabled={busy} className="inline-flex min-h-[43px] items-center justify-center gap-2 bg-[#12304a] px-4 text-sm font-semibold text-white"><Plus size={15}/>Ajouter commission</button>
          </form>:null}

          <div className="border border-[#d9e1e8] bg-white p-6">
            <h2 className="text-xl font-semibold">{isAdmin?'Suivi des commissions':'Vos commissions'}</h2>
            <div className="mt-5 space-y-3">{commissions.map((c:any)=>{
              const deal=dealById[c.deal_id];
              return <article key={c.id} className="border border-[#e2e8ee] p-4"><div className="flex flex-wrap items-start justify-between gap-4"><div><span className="text-[0.67rem] font-semibold uppercase tracking-[0.09em] text-[#315d7c]">{c.status}</span><h3 className="mt-1 font-semibold">{deal?.title||'Commission dossier'}</h3><p className="mt-2 text-sm text-[#687685]">Brut {money(c.gross_commission,c.currency)} · Part partenaire {money(c.partner_share,c.currency)}{isAdmin?` · Bosphoras ${money(c.bosphoras_share,c.currency)}`:''}</p><p className="mt-2 text-xs text-[#7b8794]">Échéance {c.due_date||'—'} · Réf. {c.invoice_reference||'—'}</p></div>{isAdmin?<select value={c.status} onChange={(e)=>commissionStatus(c.id,e.target.value)} className="min-h-[38px] border border-[#cfd8e3] bg-white px-2 text-xs"><option value="estimated">Estimée</option><option value="approved">Approuvée</option><option value="invoiced">Facturée</option><option value="received">Reçue</option><option value="paid">Payée</option><option value="cancelled">Annulée</option></select>:<CheckCircle2 size={18} className={c.status==='paid'?'text-[#2f6d59]':'text-[#91a2b2]'}/>}</div></article>;
            })}</div>
          </div>
        </section>
      )}
    </div>
  );
}
