'use client';
import {InvestmentInvestorDashboard} from '@/components/InvestmentInvestorDashboard';
import {InvestmentEntrepreneurDashboard} from '@/components/InvestmentEntrepreneurDashboard';
export function InvestmentMemberDashboard({role,locale}:{role:'investor'|'entrepreneur';locale:'fr'|'en'}){
 return role==='investor'?<InvestmentInvestorDashboard locale={locale}/>:<InvestmentEntrepreneurDashboard locale={locale}/>;
}
