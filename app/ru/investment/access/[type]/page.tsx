import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {InvestmentAccountAccess} from '@/components/InvestmentAccountAccess';
export const metadata:Metadata={title:"Вход для инвесторов и предпринимателей | Bosphoras Investment",description:"Закрытый кабинет Bosphoras Investment.",robots:{index:false,follow:false,noarchive:true,nocache:true}};
export const dynamicParams=false;
export function generateStaticParams(){return [{type:'investor'},{type:'entrepreneur'}];}
export default function Page({params}:{params:{type:string}}){if(params.type!=='investor'&&params.type!=='entrepreneur')notFound();return <InvestmentAccountAccess locale="ru" role={params.type}/>;}
