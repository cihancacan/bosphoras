import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { InvestmentAccountAccess } from '@/components/InvestmentAccountAccess';
export const metadata:Metadata={title:'Private Investor and Entrepreneur Access | Bosphoras Investment',description:'Private account registration and login for Bosphoras investors and entrepreneurs.',robots:{index:false,follow:false,noarchive:true}};
export const dynamicParams=false;
export function generateStaticParams(){return [{type:'investor'},{type:'entrepreneur'}];}
export default function Page({params}:{params:{type:string}}){if(params.type!=='investor'&&params.type!=='entrepreneur')notFound();return <InvestmentAccountAccess locale="en" role={params.type as 'investor'|'entrepreneur'}/>;}
