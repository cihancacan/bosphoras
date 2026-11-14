import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {investmentVentures,type InvestmentVentureCode} from '@/data/investmentVentures';
import {InternationalInvestmentPage,internationalInvestmentCopy,localizedInvestmentPaths} from '@/components/InternationalInvestmentPage';
import {buildMetadata} from '@/lib/seo';
export const revalidate=60;
export const dynamicParams=false;
const locale='ar' as const;
export function generateStaticParams(){return [{parts:[]},...['projects','investors','entrepreneurs'].map(x=>({parts:[x]})),...investmentVentures.flatMap(v=>[{parts:['projects',v.code]},{parts:['request',v.code]}])];}
function resolve(parts:string[]=[]){const [section='',code]=parts;if(parts.length>2||!['','projects','investors','entrepreneurs','request'].includes(section)||(code&&(!['projects','request'].includes(section)||!investmentVentures.some(x=>x.code===code)))||(section==='request'&&!code))notFound();return {section,code:code as InvestmentVentureCode|undefined};}
export async function generateMetadata({params}:{params:{parts?:string[]}}):Promise<Metadata>{const {section,code}=resolve(params.parts);const c=internationalInvestmentCopy[locale];const title=code?investmentVentures.find(v=>v.code===code)!.name:section==='projects'?c.projects:section==='investors'?c.investors:section==='entrepreneurs'?c.companies:c.landing;const paths=localizedInvestmentPaths(section,code);return buildMetadata({locale,path:paths[locale].replace('/'+locale,''),title:title+' | Bosphoras Investment',description:section==='entrepreneurs'?c.companyIntro:section==='investors'?c.investorIntro:c.intro,noIndex:section==='request',alternates:Object.fromEntries(Object.entries(paths).map(([k,v])=>[k,'https://www.bosphoras.com'+v]))});}
export default function Page({params}:{params:{parts?:string[]}}){const {section,code}=resolve(params.parts);return <InternationalInvestmentPage locale={locale} section={section} code={code}/>;}
