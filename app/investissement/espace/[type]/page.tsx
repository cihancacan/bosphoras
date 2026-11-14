import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { InvestmentMemberDashboard } from '@/components/InvestmentMemberDashboard';
export const metadata:Metadata={title:'Espace privé | Bosphoras Investment',description:'Portail privé des investisseurs et entrepreneurs Bosphoras Investment.',robots:{index:false,follow:false,noarchive:true,nocache:true}};
export const dynamicParams=false;
export function generateStaticParams(){return [{type:'investisseur'},{type:'entrepreneur'}];}
export default function Page({params}:{params:{type:string}}){if(params.type!=='investisseur'&&params.type!=='entrepreneur')notFound();return <InvestmentMemberDashboard locale="fr" role={params.type==='investisseur'?'investor':'entrepreneur'}/>;}
