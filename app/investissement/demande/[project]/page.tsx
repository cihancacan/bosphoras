import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {investmentVentures} from '@/data/investmentVentures';
import {InvestmentRequestPage} from '@/components/InvestmentRequestPage';
export const dynamicParams=false;
export const metadata:Metadata={title:'Demande de placement ou accès à un projet | Bosphoras Investment',robots:{index:false,follow:false,noarchive:true}};
export function generateStaticParams(){return investmentVentures.map(p=>({project:p.code}));}
export default function Page({params}:{params:{project:string}}){if(!investmentVentures.some(p=>p.code===params.project))notFound();return <InvestmentRequestPage locale="fr" code={params.project}/>;}
