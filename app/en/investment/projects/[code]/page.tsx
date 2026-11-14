import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {investmentVentures,type InvestmentVentureCode} from '@/data/investmentVentures';
import {InvestmentProjectDetail} from '@/components/InvestmentProjectDetail';
import {publicInvestmentListing,publicCoverUrl} from '@/lib/investmentListings';
import {buildMetadata} from '@/lib/seo';
export const revalidate=120;
export const dynamicParams=false;
export function generateStaticParams(){return investmentVentures.map(v=>({code:v.code}));}
export async function generateMetadata({params}:{params:{code:string}}):Promise<Metadata>{
 const v=investmentVentures.find(x=>x.code===params.code);if(!v)return {};
 const p=await publicInvestmentListing(v.code);
 return buildMetadata({locale:'en',path:'/investment/projects/'+v.code,
  title:(p.title_en||v.name)+' — Investment Opportunity | Bosphoras',
  description:(p.short_en||v.englishSummary).slice(0,160),
  image:p.cover_path?publicCoverUrl(p.cover_path):undefined,
  alternates:{fr:'https://www.bosphoras.com/investissement/projets/'+v.code,en:'https://www.bosphoras.com/en/investment/projects/'+v.code,'x-default':'https://www.bosphoras.com/en/investment/projects/'+v.code}
 });
}
export default function Page({params}:{params:{code:string}}){
 if(!investmentVentures.some(v=>v.code===params.code))notFound();
 return <InvestmentProjectDetail locale="en" code={params.code as InvestmentVentureCode}/>;
}
