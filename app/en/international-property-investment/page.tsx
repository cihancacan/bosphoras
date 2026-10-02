import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { GlobalPropertyInvestmentPage } from '@/components/GlobalPropertyInvestmentPage';

export const metadata: Metadata = buildMetadata({
  locale:'en',
  path:'/international-property-investment',
  title:'International Property Investment | Bosphoras',
  description:'Selected international property opportunities across Turkey, Dubai, Batumi, Almaty, Paris and other markets, with payment terms and investment analysis.',
  alternates:{
    fr:'https://www.bosphoras.com/investissement-immobilier-international',
    en:'https://www.bosphoras.com/en/international-property-investment',
    ru:'https://www.bosphoras.com/ru/zarubezhnaya-nedvizhimost-investitsii',
    ar:'https://www.bosphoras.com/ar/الاستثمار-العقاري-الدولي',
  },
});
export default function Page(){return <GlobalPropertyInvestmentPage locale="en"/>;}
