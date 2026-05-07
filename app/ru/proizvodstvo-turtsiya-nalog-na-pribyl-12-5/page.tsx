import { getTaxClusterMetadata, TurkeyInvestmentClusterPage } from '@/components/seo/TurkeyInvestmentClusterPage';
export const metadata = getTaxClusterMetadata('manufacturingTax', 'ru');
export default function Page() { return <TurkeyInvestmentClusterPage pageKey="manufacturingTax" locale="ru" />; }
