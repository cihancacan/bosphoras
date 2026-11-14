import {publicInvestmentListings} from '@/lib/investmentListings';
import {InvestmentProjectCard} from '@/components/InvestmentProjectCard';
export async function InvestmentProjectGrid({locale,limit}:{locale:'fr'|'en';limit?:number}){
 const listings=await publicInvestmentListings();
 const items=typeof limit==='number'?listings.slice(0,limit):listings;
 return <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{items.map((p,i)=><InvestmentProjectCard key={p.code} project={p} locale={locale} priority={i===0}/>)}</div>;
}
