// @ts-nocheck
'use client';

import { useEffect, useMemo, useState } from 'react';
import { AlertTriangle, Building2, CalendarClock, CircleDollarSign, Target, UsersRound } from 'lucide-react';
import { getPortalSupabase } from '@/lib/portalSupabase';

function money(value:any,currency='EUR'){
  const n=Number(value||0);
  try{return new Intl.NumberFormat('fr-FR',{style:'currency',currency,maximumFractionDigits:0}).format(Number.isFinite(n)?n:0);}
  catch{return n.toLocaleString('fr-FR')+' '+currency;}
}

export function ExecutiveDashboardMetrics({contacts=[],deals=[]}:{contacts:any[];deals:any[]}){
  const supabase=getPortalSupabase();
  const [activities,setActivities]=useState<any[]>([]);
  const [viewings,setViewings]=useState<any[]>([]);
  const [payments,setPayments]=useState<any[]>([]);
  const [commissions,setCommissions]=useState<any[]>([]);
  const [projects,setProjects]=useState<any[]>([]);
  const [units,setUnits]=useState<any[]>([]);

  useEffect(()=>{(async()=>{
    const [a,v,p,c,pr,u]=await Promise.all([
      supabase.from('crm_activities').select('id,due_at,completed_at,activity_type'),
      supabase.from('viewings').select('id,starts_at,status'),
      supabase.from('deal_payments').select('amount,amount_paid,currency,due_date,status'),
      supabase.from('commissions').select('gross_commission,bosphoras_share,currency,status'),
      supabase.from('real_estate_projects').select('id,sales_status'),
      supabase.from('project_units').select('id,status'),
    ]);
    setActivities(a.data||[]);setViewings(v.data||[]);setPayments(p.data||[]);setCommissions(c.data||[]);setProjects(pr.data||[]);setUnits(u.data||[]);
  })();},[]);

  const now=Date.now();
  const lateTasks=activities.filter((x:any)=>!x.completed_at&&x.due_at&&new Date(x.due_at).getTime()<now).length;
  const nextViewings=viewings.filter((x:any)=>x.status==='scheduled'&&new Date(x.starts_at).getTime()>=now&&new Date(x.starts_at).getTime()<now+7*86400000).length;
  const staleDeals=deals.filter((d:any)=>!['closed_won','closed_lost'].includes(d.stage)&&d.last_stage_changed_at&&new Date(d.last_stage_changed_at).getTime()<now-7*86400000).length;
  const won=deals.filter((d:any)=>d.stage==='closed_won').length;
  const conversion=contacts.length?won/contacts.length*100:0;
  const availableUnits=units.filter((u:any)=>u.status==='available').length;
  const limitedProjects=projects.filter((p:any)=>p.sales_status==='limited').length;

  const paymentByCurrency=useMemo(()=>{
    const a:any={};for(const p of payments){if(p.status==='paid')continue;const cur=p.currency||'EUR';if(!a[cur])a[cur]={overdue:0,due30:0};const remain=Number(p.amount||0)-Number(p.amount_paid||0);if(p.due_date&&new Date(p.due_date).getTime()<now)a[cur].overdue+=remain;else if(p.due_date&&new Date(p.due_date).getTime()<now+30*86400000)a[cur].due30+=remain;}return a;
  },[payments]);

  return <section className="mt-7 space-y-4">
    <div className="flex items-center justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#315d7c]">Pilotage opérationnel</p><h2 className="mt-1 text-2xl font-semibold">Santé commerciale</h2></div></div>
    <div className="grid gap-px bg-[#d9e1e8] sm:grid-cols-2 xl:grid-cols-6">
      {[
        ['Relances en retard',lateTasks,AlertTriangle,lateTasks?'text-[#a85656]':'text-[#2f6d59]'],
        ['Visites 7 jours',nextViewings,CalendarClock,'text-[#315d7c]'],
        ['Deals bloqués >7j',staleDeals,Target,staleDeals?'text-[#a85656]':'text-[#2f6d59]'],
        ['Conversion contacts',conversion.toFixed(1)+' %',UsersRound,'text-[#315d7c]'],
        ['Unités disponibles',availableUnits,Building2,'text-[#315d7c]'],
        ['Projets stock limité',limitedProjects,Building2,limitedProjects?'text-[#a66a32]':'text-[#2f6d59]'],
      ].map(([k,v,Icon,t]:any)=><article key={k} className="bg-white p-4"><Icon size={16} className={t}/><span className="mt-3 block text-[0.62rem] uppercase tracking-[0.07em] text-[#687685]">{k}</span><strong className={'mt-1 block text-2xl '+t}>{v}</strong></article>)}
    </div>
    {Object.keys(paymentByCurrency).length?<div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">{Object.entries(paymentByCurrency).map(([cur,t]:any)=><article key={cur} className="border border-[#d9e1e8] bg-white p-4"><div className="flex items-center gap-2"><CircleDollarSign size={15} className="text-[#315d7c]"/><strong className="text-sm">Encaissements {cur}</strong></div><div className="mt-3 grid grid-cols-2 gap-3 text-sm"><p><span className="block text-xs text-[#7b8794]">30 jours</span>{money(t.due30,cur)}</p><p><span className="block text-xs text-[#7b8794]">En retard</span><strong className="text-[#a85656]">{money(t.overdue,cur)}</strong></p></div></article>)}</div>:null}
  </section>;
}
