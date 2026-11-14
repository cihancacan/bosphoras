import type { Metadata } from 'next';
export const revalidate = 60;
import { buildMetadata } from '@/lib/seo';
import { InvestmentInvestorsPage } from '@/components/InvestmentInvestorsPage';
export const metadata:Metadata = buildMetadata({locale:'en',path:'/investment/investors',title:'Invest in Private Companies: Equity, Debt & Venture Research | Bosphoras',description:'Learn about private-company investing, debt, equity, repayment schedules, risk and illiquidity. Explore six international ventures in preparation and create an investor watchlist.',alternates:{ fr: 'https://www.bosphoras.com/investissement/investisseurs', en: 'https://www.bosphoras.com/en/investment/investors', 'x-default': 'https://www.bosphoras.com/en/investment/investors' }});
export default function Page(){return <InvestmentInvestorsPage locale="en"/>;}
