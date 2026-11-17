import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {InvestmentMemberDashboard} from '@/components/InvestmentMemberDashboard';
export const metadata:Metadata={title:"الحساب الخاص | Bosphoras Investment",description:"الحساب الخاص لدى بوسفوراس للاستثمار.",robots:{index:false,follow:false,noarchive:true,nocache:true}};
export const dynamicParams=false;
export function generateStaticParams(){return [{type:'investor'},{type:'entrepreneur'}];}
export default function Page({params}:{params:{type:string}}){if(params.type!=='investor'&&params.type!=='entrepreneur')notFound();return <InvestmentMemberDashboard locale="ar" role={params.type}/>;}
