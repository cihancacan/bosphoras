import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { InvestmentEntrepreneursPage } from '@/components/InvestmentEntrepreneursPage';
export const metadata:Metadata = buildMetadata({locale:'fr',path:'/investissement/entrepreneurs',title:'Financer son entreprise : étude, business plan et levée de fonds | Bosphoras',description:'Vous cherchez un financement pour votre PME, usine, startup IA ou projet énergétique ? Préparez un dossier investisseurs, comparez dette et actions, soumettez votre projet à Bosphoras.',alternates:{ fr: 'https://www.bosphoras.com/investissement/entrepreneurs', en: 'https://www.bosphoras.com/en/investment/entrepreneurs', 'x-default': 'https://www.bosphoras.com/en/investment/entrepreneurs' }});
export default function Page(){return <InvestmentEntrepreneursPage locale="fr"/>;}
