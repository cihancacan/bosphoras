import {publicProjectSeo} from '@/lib/investmentProjectSeo';
import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {investmentVentures,type InvestmentVentureCode} from '@/data/investmentVentures';
import {InvestmentProjectDetail} from '@/components/InvestmentProjectDetail';
import {publicInvestmentListing,publicCoverUrl} from '@/lib/investmentListings';
import {buildMetadata} from '@/lib/seo';
// Read the current investment terms at request time.
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const dynamicParams=false;
export function generateStaticParams(){return investmentVentures.map(v=>({code:v.code}));}
export async function generateMetadata({params}:{params:{code:string}}):Promise<Metadata>{
 const v=investmentVentures.find(x=>x.code===params.code);if(!v)return {};
 const [p,seo]=await Promise.all([publicInvestmentListing(v.code),publicProjectSeo(v.code,'fr')]);
 return buildMetadata({locale:'fr',path:'/investissement/projets/'+v.code,
  title:seo.title,
  description:seo.description,
  image:p.cover_path?publicCoverUrl(p.cover_path):undefined,
  alternates:{fr:'https://www.bosphoras.com/investissement/projets/'+v.code,en:'https://www.bosphoras.com/en/investment/projects/'+v.code,ru:'https://www.bosphoras.com/ru/investment/projects/'+v.code,ar:'https://www.bosphoras.com/ar/investment/projects/'+v.code,'x-default':'https://www.bosphoras.com/en/investment/projects/'+v.code}
 });
}
export default function Page({params}:{params:{code:string}}){
 if(!investmentVentures.some(v=>v.code===params.code))notFound();
 return <InvestmentProjectDetail locale="fr" code={params.code as InvestmentVentureCode}/>;
}
