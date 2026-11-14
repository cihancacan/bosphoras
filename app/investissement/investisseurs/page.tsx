import type { Metadata } from 'next';
export const revalidate = 60;
import { buildMetadata } from '@/lib/seo';
import { InvestmentInvestorsPage } from '@/components/InvestmentInvestorsPage';
export const metadata:Metadata = buildMetadata({locale:'fr',path:'/investissement/investisseurs',title:'Investir dans les entreprises : projets, actions et obligations | Bosphoras',description:'Découvrez Bosphoras Investment : investissements en entreprises, dette et actions, risques, revenus possibles, durées et sorties. Six projets internationaux en préparation et accès investisseur.',alternates:{ fr: 'https://www.bosphoras.com/investissement/investisseurs', en: 'https://www.bosphoras.com/en/investment/investors', 'x-default': 'https://www.bosphoras.com/en/investment/investors' }});
export default function Page(){return <InvestmentInvestorsPage locale="fr"/>;}
