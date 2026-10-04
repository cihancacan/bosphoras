// @ts-nocheck
'use client';

import { useEffect, useMemo, useState } from 'react';
import { AlertTriangle, CircleDollarSign, Clock3, RefreshCw, WalletCards } from 'lucide-react';
import { getPortalSupabase } from '@/lib/portalSupabase';

function money(value:any,currency='EUR'){
  const n=Number(value||0);
  try{return new Intl.NumberFormat('fr-FR',{style:'currency',currency,maximumFractionDigits:0}).format(Number.isFinite(n)?n:0);}
  catch{return n.toLocaleString('fr-FR')+' '+currency;}
}

export function FinancePanel({isAdmin,deals=[]}:{isAdmin:boolean;deals:any[]}){
  const supabase=getPortalSupabase();
  const [payments,setPayments]=useState<any[]>([]);
  const [commissions,setCommissions]=useState<any[]>([]);
  const [busy,setBusy]=useState(false);
  const [message,setMessage]=useState('');

  async function reload(){
    setBusy(true);setMessage('');
    try{
      const [p,c]=await Promise.all([
        supabase.from('deal_payments').select('*').order('due_date',{ascending:true,nullsFirst:false}),
        supabase.from('commissions').select('*').order('created_at',{ascending:false}),
      ]);
      if(p.error)throw p.error;if(c.error)throw c.error;
      setPayments(p.data||[]);setCommissions(c.data||[]);
    }catch(e:any){setMessage(e?.message||'Chargement impossible.');}
    finally{setBusy(false);}
  }
  useEffect(()=>{reload();},[]);

  const dealById=useMemo(()=>Object.fromEntries(deals.map((d:any)=>[d.id,d])),[deals]);

  async function paymentStatus(item:any,status:string){
    const patch:any={status};
    if(status==='paid'){patch.amount_paid=item.amount;patch.paid_at=new Date().toISOString();}
    const {error}=await supabase.from('deal_payments').update(patch).eq('id',item.id);
    if(error)setMessage(error.message);else reload();
  }
  async function commissionStatus(id:string,status:string){
    const patch:any={status};
    if(status==='received')patch.received_at=new Date().toISOString();
    if(status==='paid')patch.paid_at=new Date().toISOString();
    const {error}=await supabase.from('commissions').update(patch).eq('id',id);
    if(error)setMessage(error.message);else reload();
  }

  const paymentTotals=useMemo(()=>{
    const acc:any={};
    for(const p of payments){
      const cur=p.currency||'EUR';if(!acc[cur])acc[cur]={planned:0,paid:0,overdue:0,due30:0};
      acc[cur].planned+=Number(p.amount||0);acc[cur].paid+=Number(p.amount_paid||0);
      if(p.status!=='paid'&&p.due_date&&new Date(p.due_date).getTime()<Date.now())acc[cur].overdue+=Number(p.amount||0)-Number(p.amount_paid||0);
      if(p.status!=='paid'&&p.due_date&&new Date(p.due_date).getTime()<=Date.now()+30*86400000&&new Date(p.due_date).getTime()>=Date.now())acc[cur].due30+=Number(p.amount||0)-Number(p.amount_paid||0);
    }
    return acc;
  },[payments]);

  const commissionTotals=useMemo(()=>{
    const acc:any={};
    for(const c of commissions){
      const cur=c.currency||'EUR';if(!acc[cur])acc[cur]={gross:0,bosphoras:0,partner:0,received:0};
      acc[cur].gross+=Number(c.gross_commission||0);acc[cur].bosphoras+=Number(c.bosphoras_share||0);acc[cur].partner+=Number(c.partner_share||0);
      if(['received','paid'].includes(c.status))acc[cur].received+=Number(c.gross_commission||0);
    }
    return acc;
  },[commissions]);

  return <div className="space-y-6">
    {message?<div className="border border-[#d9e1e8] bg-white px-4 py-3 text-sm">{message}</div>:null}
    <div className="flex items-end justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#315d7c]">Cash management</p><h2 className="mt-1 text-3xl font-semibold">Finance</h2></div><button onClick={reload} className="inline-flex items-center gap-2 border border-[#cfd8e3] bg-white px-3 py-2 text-sm"><RefreshCw size={14} className={busy?'animate-spin':''}/>Actualiser</button></div>

    <div className="grid gap-4 xl:grid-cols-2">
      {Object.entries(paymentTotals).map(([currency,t]:any)=><section key={currency} className="border border-[#d9e1e8] bg-white p-5">
        <div className="flex items-center justify-between"><div className="flex items-center gap-2"><WalletCards size={18} className="text-[#315d7c]"/><h3 className="font-semibold">Échéanciers {currency}</h3></div><strong>{money(t.planned,currency)}</strong></div>
        <div className="mt-4 grid grid-cols-3 gap-3"><div className="bg-[#f5f8fa] p-3"><span className="text-[0.62rem] uppercase text-[#687685]">Payé</span><strong className="mt-1 block">{money(t.paid,currency)}</strong></div><div className="bg-[#fff7f2] p-3"><span className="text-[0.62rem] uppercase text-[#8c6755]">30 jours</span><strong className="mt-1 block">{money(t.due30,currency)}</strong></div><div className="bg-[#fff1f0] p-3"><span className="text-[0.62rem] uppercase text-[#9c5550]">Retard</span><strong className="mt-1 block text-[#a85656]">{money(t.overdue,currency)}</strong></div></div>
      </section>)}
      {!Object.keys(paymentTotals).length?<div className="border border-[#d9e1e8] bg-white p-6 text-sm text-[#687685]">Aucun échéancier enregistré.</div>:null}
    </div>

    <section className="overflow-x-auto border border-[#d9e1e8] bg-white p-5">
      <h3 className="text-lg font-semibold">Paiements clients</h3>
      <table className="mt-4 w-full min-w-[850px] text-left text-sm"><thead className="border-b border-[#d9e1e8] text-xs uppercase text-[#687685]"><tr><th className="py-3">Dossier</th><th>Échéance</th><th>Date</th><th>Montant</th><th>Payé</th><th>Statut</th></tr></thead><tbody>{payments.map((p:any)=>{const late=p.status!=='paid'&&p.due_date&&new Date(p.due_date).getTime()<Date.now();return <tr key={p.id} className="border-b border-[#edf1f4]"><td className="py-3 font-medium">{dealById[p.deal_id]?.title||'Transaction'}</td><td>{p.label}</td><td className={late?'font-semibold text-[#a85656]':'text-[#687685]'}>{p.due_date||'—'}</td><td>{money(p.amount,p.currency)}</td><td>{money(p.amount_paid,p.currency)}</td><td><select value={p.status} onChange={e=>paymentStatus(p,e.target.value)} className="h-8 border border-[#cfd8e3] bg-white text-xs"><option value="planned">Planifiée</option><option value="due">À payer</option><option value="partial">Partiel</option><option value="paid">Payée</option><option value="overdue">Retard</option><option value="cancelled">Annulée</option></select></td></tr>})}</tbody></table>
    </section>

    <div className="grid gap-4 xl:grid-cols-2">
      {Object.entries(commissionTotals).map(([currency,t]:any)=><section key={currency} className="border border-[#d9e1e8] bg-[#132538] p-5 text-white"><div className="flex items-center gap-2"><CircleDollarSign size={18}/><h3 className="font-semibold">Commissions {currency}</h3></div><div className="mt-4 grid grid-cols-2 gap-3 text-sm"><p><span className="block text-xs text-[#a9bfd0]">Brut</span><strong className="text-xl">{money(t.gross,currency)}</strong></p><p><span className="block text-xs text-[#a9bfd0]">Bosphoras</span><strong className="text-xl">{money(t.bosphoras,currency)}</strong></p><p><span className="block text-xs text-[#a9bfd0]">Partenaires</span><strong>{money(t.partner,currency)}</strong></p><p><span className="block text-xs text-[#a9bfd0]">Reçu</span><strong>{money(t.received,currency)}</strong></p></div></section>)}
    </div>

    <section className="border border-[#d9e1e8] bg-white p-5">
      <h3 className="text-lg font-semibold">Commissions</h3>
      <div className="mt-4 space-y-3">{commissions.map((c:any)=><article key={c.id} className="flex flex-wrap items-center justify-between gap-4 border border-[#e5eaee] p-4"><div><strong>{dealById[c.deal_id]?.title||'Commission dossier'}</strong><p className="mt-1 text-sm text-[#687685]">Brut {money(c.gross_commission,c.currency)} · Bosphoras {money(c.bosphoras_share,c.currency)} · Partenaire {money(c.partner_share,c.currency)}</p><p className="mt-1 text-xs text-[#7b8794]">Échéance {c.due_date||'—'} · Réf. {c.invoice_reference||'—'}</p></div>{isAdmin?<select value={c.status} onChange={e=>commissionStatus(c.id,e.target.value)} className="h-9 border border-[#cfd8e3] bg-white px-2 text-xs"><option value="estimated">Estimée</option><option value="approved">Approuvée</option><option value="invoiced">Facturée</option><option value="received">Reçue</option><option value="paid">Payée</option><option value="cancelled">Annulée</option></select>:<span className="text-xs font-semibold uppercase text-[#315d7c]">{c.status}</span>}</article>)}{!commissions.length?<p className="py-6 text-sm text-[#687685]">Aucune commission.</p>:null}</div>
    </section>
  </div>;
}
