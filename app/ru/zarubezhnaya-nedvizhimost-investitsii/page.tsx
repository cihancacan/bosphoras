import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { GlobalPropertyInvestmentPage } from '@/components/GlobalPropertyInvestmentPage';

export const revalidate = 60;

export const metadata: Metadata = buildMetadata({
  locale:'ru',
  path:'/zarubezhnaya-nedvizhimost-investitsii',
  title:'Зарубежная недвижимость и инвестиции | Bosphoras',
  description:'Отобранные международные проекты за пределами Турции: новостройки, планы оплаты от застройщиков и инвестиционный анализ Bosphoras.',
  alternates:{
    fr:'https://www.bosphoras.com/investissement-immobilier-international',
    en:'https://www.bosphoras.com/en/international-property-investment',
    ru:'https://www.bosphoras.com/ru/zarubezhnaya-nedvizhimost-investitsii',
    ar:'https://www.bosphoras.com/ar/الاستثمار-العقاري-الدولي',
  },
});
export default function Page(){return <GlobalPropertyInvestmentPage locale="ru"/>;}
