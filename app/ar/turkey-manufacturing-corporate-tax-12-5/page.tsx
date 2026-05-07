import { getTaxClusterMetadata, TurkeyInvestmentClusterPage } from '@/components/seo/TurkeyInvestmentClusterPage';
export const metadata = getTaxClusterMetadata('manufacturingTax', 'ar');
export default function Page() { return <TurkeyInvestmentClusterPage pageKey="manufacturingTax" locale="ar" />; }
