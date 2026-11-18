import type { Metadata } from 'next';
// Read the current investment terms at request time.
export const dynamic = 'force-dynamic';
export const revalidate = 0;
import { buildMetadata } from '@/lib/seo';
import { InvestmentProjectsPage } from '@/components/InvestmentProjectsPage';
export const metadata:Metadata=buildMetadata({locale:'en',path:'/investment/projects',title:'Investment Projects and Private Companies | Bosphoras Investment',description:'Explore businesses and projects with Bosphoras Investment: AQMA, Cliniqeo, Qenerzy Solar, Medsestra, LoveLockParis and Bosphoras Luxury Stays. Industry, health, energy and hospitality.',alternates:{fr:'https://www.bosphoras.com/investissement/projets',en:'https://www.bosphoras.com/en/investment/projects',ru:'https://www.bosphoras.com/ru/investment/projects',ar:'https://www.bosphoras.com/ar/investment/projects','x-default':'https://www.bosphoras.com/en/investment/projects'}});
export default function Page(){return <InvestmentProjectsPage locale="en"/>;}
