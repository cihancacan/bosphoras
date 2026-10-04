// @ts-nocheck
'use client';

import { useEffect, useMemo, useState } from 'react';
import { BarChart3, Download, RefreshCw } from 'lucide-react';
import { getPortalSupabase } from '@/lib/portalSupabase';

function csvCell(value:any){
  const s=value==null?'':Array.isArray(value)?value.join(' | '):typeof value==='object'?JSON.stringify(value):String(value);
  return '"'+s.replace(/"/g,'""')+'"';
}
function downloadCsv(name:string,rows:any[],columns:Array<[string,string]>){
  const head=columns.map(([label])=>csvCell(label)).join(',');
  const body=rows.map(row=>columns.map(([,key])=>csvCell(row[key])).join(',')).join('\n');
  const blob=new Blob(['\uFEFF'+head+'\n'+body],{type:'text/csv;charset=utf-8'});
  const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=name;a.click();URL.revokeObjectURL(url);
}
function money(value:any,currency='EUR'){
  const n=Number(value||0);try{return new Intl.NumberFormat('fr-FR',{style:'currency',currency,maximumFractionDigits:0}).format(Number.isFinite(n)?n:0);}catch{return String(n)+' '+currency;}
}

export function ReportsPanel({contacts=[],deals=[]}:{contacts:any[];deals:any[]}){
  const supabase=getPortalSupabase();
  const [projects,setProjects]=useState<any[]>([]);
  const [units,setUnits]=useState<any[]>([]);
  const [payments,setPayments]=useState<any[]>([]);
  const [commissions,setCommissions]=useState<any[]>([]);
  const [busy,setBusy]=useState(false);
  const [message,setMessage]=useState('');

  async function reload(){
    setBusy(true);setMessage('');
    try{
      const [p,u,pay,c]=await Promise.all([
        supabase.from('real_estate_projects').select('*').order('updated_at',{ascending:false}),
        supabase.from('project_units').select('*').order('updated_at',{ascending:false}),
        supabase.from('deal_payments').select('*').order('due_date',{ascending:true,nullsFirst:false}),
        supabase.from('commissions').select('*').order('created_at',{ascending:false}),
      ]);
      for(const x of [p,u,pay,c])if(x.error)throw x.error;
      setProjects(p.data||[]);setUnits(u.data||[]);setPayments(pay.data||[]);setCommissions(c.data||[]);
    }catch(e:any){setMessage(e?.message||'Chargement impossible.');}
    finally{setBusy(false);}
  }
  useEffect(()=>{reload();},[]);

  const bySource=useMemo(()=>{
    const m:any={};for(const c of contacts){const k=c.source||'Non renseignée';if(!m[k])m[k]={source:k,contacts:0,wins:0,value:0};m[k].contacts++;}
    for(const d of deals){if(d.stage!=='closed_won')continue;const c=contacts.find((x:any)=>x.id===d.contact_id);const k=c?.source||'Non renseignée';if(!m[k])m[k]={source:k,contacts:0,wins:0,value:0};m[k].wins++;m[k].value+=Number(d.final_sale_price||d.deal_value||0);}
    return Object.values(m).sort((a:any,b:any)=>b.contacts-a.contacts);
  },[contacts,deals]);

  const byStage=useMemo(()=>Object.fromEntries(['lead','qualified','viewing','offer','reservation','due_diligence','contract','closed_won','closed_lost'].map(stage=>[stage,deals.filter((d:any)=>d.stage===stage).length])),[deals]);
  const stockValue=units.filter((u:any)=>u.status==='available').reduce((a:number,u:any)=>a+Number(u.list_price||0),0);
  const overdue=payments.filter((p:any)=>p.status!=='paid'&&p.due_date&&new Date(p.due_date).getTime()<Date.now()).length;

  const cards=[
    ['Contacts',contacts.length],['Deals',deals.length],['Ventes gagnées',byStage.closed_won||0],['Projets',projects.length],
    ['Unités disponibles',units.filter((u:any)=>u.status==='available').length],['Échéances en retard',overdue]
  ];

  const exports=[
    ['Contacts CRM',()=>downloadCsv('bosphoras-contacts.csv',contacts,[['Prénom','first_name'],['Nom','last_name'],['Email','email'],['Téléphone','phone'],['WhatsApp','whatsapp'],['Source','source'],['Statut','status'],['Priorité','lead_priority'],['Villes','target_cities'],['Types','target_types'],['Budget max','budget_max'],['Capital','capital_available'],['Devise','currency'],['Objectif','investment_goal'],['Prochaine action','next_action_at']])],
    ['Transactions',()=>downloadCsv('bosphoras-transactions.csv',deals,[['Titre','title'],['Étape','stage'],['Valeur','deal_value'],['Devise','currency'],['Probabilité','probability'],['Commission attendue','expected_commission'],['Clôture prévue','expected_close_date'],['Prix final','final_sale_price'],['Date closing','closing_date'],['Motif perte','loss_reason']])],
    ['Projets',()=>downloadCsv('bosphoras-projets.csv',projects,[['Projet','name'],['Pays','country_code'],['Ville','city'],['Quartier','district'],['Statut','sales_status'],['Devise','currency'],['Prix min','price_min'],['Prix max','price_max'],['Capital entrée','entry_capital_min'],['Livraison','completion_date'],['Source','source_system'],['Réf externe','external_id']])],
    ['Unités',()=>downloadCsv('bosphoras-unites.csv',units,[['Projet ID','project_id'],['Unité','unit_number'],['Typologie','unit_type'],['Chambres','bedrooms'],['Étage','floor'],['Surface brute','gross_area_m2'],['Vue','view'],['Statut','status'],['Prix','list_price'],['Prix cash','cash_price'],['Capital entrée','entry_capital'],['Devise','currency']])],
    ['Paiements',()=>downloadCsv('bosphoras-paiements.csv',payments,[['Deal ID','deal_id'],['Échéance','label'],['Type','payment_type'],['Montant','amount'],['Payé','amount_paid'],['Devise','currency'],['Due','due_date'],['Statut','status'],['Référence','payment_reference']])],
    ['Commissions',()=>downloadCsv('bosphoras-commissions.csv',commissions,[['Deal ID','deal_id'],['Brut','gross_commission'],['Partenaire','partner_share'],['Bosphoras','bosphoras_share'],['Devise','currency'],['Statut','status'],['Échéance','due_date'],['Facture','invoice_reference']])],
  ];

  return <div className="space-y-6">
    <div className="flex items-end justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#315d7c]">Business intelligence</p><h2 className="mt-1 text-3xl font-semibold">Rapports & exports</h2></div><button onClick={reload} className="inline-flex items-center gap-2 border border-[#cfd8e3] bg-white px-3 py-2 text-sm"><RefreshCw size={14} className={busy?'animate-spin':''}/>Actualiser</button></div>
    {message?<div className="border border-[#d9e1e8] bg-white px-4 py-3 text-sm">{message}</div>:null}
    <div className="grid gap-px bg-[#d9e1e8] sm:grid-cols-2 xl:grid-cols-6">{cards.map(([k,v])=><article key={k as string} className="bg-white p-4"><span className="text-[0.62rem] uppercase tracking-[0.08em] text-[#687685]">{k as string}</span><strong className="mt-2 block text-3xl">{v as any}</strong></article>)}</div>

    <div className="grid gap-6 xl:grid-cols-2">
      <section className="border border-[#d9e1e8] bg-white p-5">
        <div className="flex items-center gap-2"><BarChart3 size={17} className="text-[#315d7c]"/><h3 className="text-lg font-semibold">Pipeline</h3></div>
        <div className="mt-4 space-y-3">{Object.entries(byStage).map(([stage,count]:any)=>{const max=Math.max(1,...Object.values(byStage) as number[]);return <div key={stage}><div className="flex justify-between text-xs"><span className="capitalize">{stage.replace('_',' ')}</span><strong>{count}</strong></div><div className="mt-1 h-2 bg-[#edf1f4]"><div className="h-full bg-[#315d7c]" style={{width:String(count/max*100)+'%'}}/></div></div>})}</div>
      </section>
      <section className="border border-[#d9e1e8] bg-white p-5">
        <h3 className="text-lg font-semibold">Sources de leads</h3>
        <div className="mt-4 overflow-x-auto"><table className="w-full min-w-[480px] text-sm"><thead className="border-b border-[#e5eaee] text-left text-xs text-[#687685]"><tr><th className="py-2">Source</th><th>Contacts</th><th>Ventes</th><th>Valeur gagnée</th></tr></thead><tbody>{bySource.map((r:any)=><tr key={r.source} className="border-b border-[#edf1f4]"><td className="py-3 font-medium">{r.source}</td><td>{r.contacts}</td><td>{r.wins}</td><td>{money(r.value,'EUR')}</td></tr>)}</tbody></table></div>
      </section>
    </div>

    <section className="border border-[#d9e1e8] bg-[#132538] p-5 text-white"><span className="text-xs uppercase tracking-[0.08em] text-[#a9bfd0]">Valeur indicative du stock disponible</span><strong className="mt-2 block text-3xl">{money(stockValue,units.find((u:any)=>u.status==='available')?.currency||'EUR')}</strong><p className="mt-2 text-xs text-[#a9bfd0]">Somme brute des prix catalogue disponibles ; les devises ne sont pas converties automatiquement.</p></section>

    <section className="border border-[#d9e1e8] bg-white p-5"><h3 className="text-lg font-semibold">Exports CSV</h3><div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">{exports.map(([label,fn]:any)=><button key={label} onClick={fn} className="inline-flex min-h-[44px] items-center justify-between border border-[#cfd8e3] px-4 text-left text-sm font-semibold"><span>{label}</span><Download size={15} className="text-[#315d7c]"/></button>)}</div></section>
  </div>;
}
