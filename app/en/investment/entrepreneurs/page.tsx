import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { InvestmentEntrepreneursPage } from '@/components/InvestmentEntrepreneursPage';
export const metadata:Metadata = buildMetadata({locale:'en',path:'/investment/entrepreneurs',title:'Business Funding: Investor Dossiers, Debt and Equity Preparation | Bosphoras',description:'Submit your company for funding review. Bosphoras prepares financial studies, business plans, investor presentations and structures for manufacturing, energy, technology and growing enterprises.',alternates:{ fr: 'https://www.bosphoras.com/investissement/entrepreneurs', en: 'https://www.bosphoras.com/en/investment/entrepreneurs', 'x-default': 'https://www.bosphoras.com/en/investment/entrepreneurs' }});
export default function Page(){return <InvestmentEntrepreneursPage locale="en"/>;}
