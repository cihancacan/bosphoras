import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { GlobalPropertyInvestmentPage } from '@/components/GlobalPropertyInvestmentPage';

export const revalidate = 60;

export const metadata: Metadata = buildMetadata({
  locale:'fr',
  path:'/investissement-immobilier-international',
  title:'Investissement immobilier international | Bosphoras',
  description:'Opportunités immobilières internationales sélectionnées hors de Turquie par Bosphoras : programmes neufs, plans de paiement promoteurs et analyse d’investissement.',
  alternates:{
    fr:'https://www.bosphoras.com/investissement-immobilier-international',
    en:'https://www.bosphoras.com/en/international-property-investment',
    ru:'https://www.bosphoras.com/ru/zarubezhnaya-nedvizhimost-investitsii',
    ar:'https://www.bosphoras.com/ar/الاستثمار-العقاري-الدولي',
  },
});
export default function Page(){return <GlobalPropertyInvestmentPage locale="fr"/>;}
