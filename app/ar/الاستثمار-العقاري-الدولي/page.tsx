import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { GlobalPropertyInvestmentPage } from '@/components/GlobalPropertyInvestmentPage';

export const metadata: Metadata = buildMetadata({
  locale:'ar',
  path:'/الاستثمار-العقاري-الدولي',
  title:'الاستثمار العقاري الدولي | Bosphoras',
  description:'فرص عقارية دولية مختارة في تركيا ودبي وباتومي وألماتي وباريس وأسواق أخرى مع خطط دفع وتحليل استثماري من Bosphoras.',
  alternates:{
    fr:'https://www.bosphoras.com/investissement-immobilier-international',
    en:'https://www.bosphoras.com/en/international-property-investment',
    ru:'https://www.bosphoras.com/ru/zarubezhnaya-nedvizhimost-investitsii',
    ar:'https://www.bosphoras.com/ar/الاستثمار-العقاري-الدولي',
  },
});
export default function Page(){return <GlobalPropertyInvestmentPage locale="ar"/>;}
