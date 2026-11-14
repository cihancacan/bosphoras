import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { InvestmentAccountAccess } from '@/components/InvestmentAccountAccess';
export const metadata:Metadata={title:'Accès privé Investisseur ou Entrepreneur | Bosphoras Investment',description:'Création de compte et connexion privée pour les investisseurs et entrepreneurs Bosphoras Investment.',robots:{index:false,follow:false,noarchive:true}};
export const dynamicParams=false;
export function generateStaticParams(){return [{type:'investisseur'},{type:'entrepreneur'}];}
export default function Page({params}:{params:{type:string}}){if(params.type!=='investisseur'&&params.type!=='entrepreneur')notFound();return <InvestmentAccountAccess locale="fr" role={params.type==='investisseur'?'investor':'entrepreneur'}/>;}
