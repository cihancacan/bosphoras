import { getTaxClusterMetadata, TurkeyInvestmentClusterPage } from '@/components/seo/TurkeyInvestmentClusterPage';
export const metadata = getTaxClusterMetadata('manufacturingTax', 'en');
export default function Page() { return <TurkeyInvestmentClusterPage pageKey="manufacturingTax" locale="en" />; }
