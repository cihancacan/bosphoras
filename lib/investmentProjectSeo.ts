import {createIsolatedPortalSupabase} from '@/lib/portalSupabase';
import {automaticInvestmentSeo,type InvestmentSeoLocale} from '@/data/investmentProjectSeo';
import type {InvestmentVentureCode} from '@/data/investmentVentures';
export async function publicProjectSeo(code:InvestmentVentureCode,locale:InvestmentSeoLocale){
 const fallback=automaticInvestmentSeo(code,locale);
 const db=createIsolatedPortalSupabase();
 const {data,error}=await db.from('investment_project_seo').select('title,description').eq('code',code).eq('locale',locale).maybeSingle();
 if(error||!data)return fallback;
 return {title:data.title?.trim()||fallback.title,description:data.description?.trim()||fallback.description};
}
