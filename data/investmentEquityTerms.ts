import type {InvestmentListing} from '@/lib/investmentListings';
export function investmentEquityTerms(p:InvestmentListing){
 const raised=Number(p.target_amount),share=Number(p.equity_share_percent),ticket=Number(p.minimum_ticket);
 if(p.investment_type!=='equity'||!Number.isFinite(raised)||raised<=0||!Number.isFinite(share)||share<=0||share>100||!Number.isFinite(ticket)||ticket<=0||ticket>raised)return null;
 const post=raised/(share/100),pre=post-raised;
 return {raised,share,ticket,post,pre,currency:p.currency||'USD'};
}
export function equityProjection(amount:number,post:number,future:number){const share=amount/post;return {share,value:share*future,gain:share*future-amount,multiple:future/post};}
