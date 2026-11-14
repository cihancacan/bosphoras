import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { InvestmentProjectsPage } from '@/components/InvestmentProjectsPage';
export const metadata:Metadata=buildMetadata({locale:'fr',path:'/investissement/projets',title:'Projets d’investissement dans les entreprises | Bosphoras Investment',description:'Découvrez les projets et entreprises Bosphoras Investment : AQMA, Cliniqeo, Qenerzy, Medsestra, LoveLockParis et Bosphoras Luxury Stays. Industrie, énergie, santé et innovation.',alternates:{fr:'https://www.bosphoras.com/investissement/projets',en:'https://www.bosphoras.com/en/investment/projects','x-default':'https://www.bosphoras.com/en/investment/projects'}});
export default function Page(){return <InvestmentProjectsPage locale="fr"/>;}
