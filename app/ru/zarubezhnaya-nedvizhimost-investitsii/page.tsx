import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { GlobalPropertyInvestmentPage } from '@/components/GlobalPropertyInvestmentPage';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = buildMetadata({
  locale:'ru',
  path:'/zarubezhnaya-nedvizhimost-investitsii',
  title:'Зарубежная недвижимость и инвестиции | Bosphoras',
  description:'Отобранная зарубежная недвижимость: Турция, Дубай, Батуми, Алматы, Париж и другие рынки с планами оплаты и инвестиционным анализом Bosphoras.',
  alternates:{
    fr:'https://www.bosphoras.com/investissement-immobilier-international',
    en:'https://www.bosphoras.com/en/international-property-investment',
    ru:'https://www.bosphoras.com/ru/zarubezhnaya-nedvizhimost-investitsii',
    ar:'https://www.bosphoras.com/ar/الاستثمار-العقاري-الدولي',
  },
});
export default function Page(){return <GlobalPropertyInvestmentPage locale="ru"/>;}
