import { createIsolatedPortalSupabase, portalSupabaseUrl } from '@/lib/portalSupabase';
import { investmentVentures, type InvestmentVentureCode } from '@/data/investmentVentures';

export type InvestmentListing = {
 code:InvestmentVentureCode;title_fr:string;title_en:string;tagline_fr:string;tagline_en:string;
 short_fr:string;short_en:string;story_fr:string;story_en:string;highlights_fr:string;highlights_en:string;
 sector:string;location:string;issuer_name:string;currency:string;
 target_amount:number|null;minimum_ticket:number|null;maximum_ticket:number|null;
 investment_type:string;annual_rate:number|null;term_months:number|null;first_payment_month:number|null;
 payment_frequency:string;exit_terms_fr:string;exit_terms_en:string;use_of_funds_fr:string;use_of_funds_en:string;
 risk_summary_fr:string;risk_summary_en:string;cover_path:string;featured:boolean;display_order:number;publication_status:string;
 published_at:string|null;
};
export type InvestmentMediaPublic={id:string;listing_code:string;category:string;public_path:string;sort_order:number};
export const publicCoverUrl=(path:string)=>{
 if(!path || path.includes('..') || path.startsWith('/')) return '';
 return portalSupabaseUrl+'/storage/v1/object/public/investment-listing-public/'+path.split('/').map(encodeURIComponent).join('/');
};
export const moneyLabel=(amount:number|null|undefined,cur='EUR',locale='fr')=>{
 if(amount===null||amount===undefined||!Number.isFinite(Number(amount)))return null;
 return new Intl.NumberFormat(locale==='fr'?'fr-FR':'en-GB',{style:'currency',currency:cur,maximumFractionDigits:0}).format(Number(amount));
};
export function mergedInvestmentListing(code:InvestmentVentureCode,row?:Partial<InvestmentListing>|null):InvestmentListing {
 const v=investmentVentures.find(x=>x.code===code)!;
 return {
  code,title_fr:v.name,title_en:v.name,tagline_fr:'',tagline_en:'',
  short_fr:v.summary,short_en:v.englishSummary,story_fr:'',story_en:'',highlights_fr:'',highlights_en:'',
  sector:v.sector,location:v.region,issuer_name:'',currency:'EUR',
  target_amount:null,minimum_ticket:null,maximum_ticket:null,
  investment_type:'',annual_rate:null,term_months:null,first_payment_month:null,payment_frequency:'',
  exit_terms_fr:'',exit_terms_en:'',use_of_funds_fr:'',use_of_funds_en:'',
  risk_summary_fr:'',risk_summary_en:'',cover_path:'',featured:false,display_order:50,publication_status:'draft',published_at:null,
  ...row
 };
}
export async function publicInvestmentListings():Promise<InvestmentListing[]>{
 const db=createIsolatedPortalSupabase();
 const {data,error}=await db.from('investment_listings').select('*').eq('publication_status','published').order('display_order');
 if(error)return investmentVentures.map(p=>mergedInvestmentListing(p.code));
 const map=new Map((data||[]).map(p=>[p.code,p]));
 return investmentVentures.map(p=>mergedInvestmentListing(p.code,map.get(p.code) as Partial<InvestmentListing> |undefined))
   .sort((a,b)=>(a.featured===b.featured?0:a.featured?-1:1)||a.display_order-b.display_order);
}
export async function publicInvestmentListing(code:InvestmentVentureCode):Promise<InvestmentListing>{
 const db=createIsolatedPortalSupabase();
 const {data}=await db.from('investment_listings').select('*').eq('code',code).eq('publication_status','published').maybeSingle();
 return mergedInvestmentListing(code,data as InvestmentListing|null);
}
export async function publicInvestmentImages():Promise<InvestmentMediaPublic[]>{
 const db=createIsolatedPortalSupabase();
 const {data}=await db.from('investment_listing_media').select('id,listing_code,category,public_path,sort_order').eq('status','approved').order('sort_order');
 return (data||[]) as InvestmentMediaPublic[];
}
