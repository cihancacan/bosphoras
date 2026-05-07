import { getTaxClusterMetadata, TurkeyInvestmentClusterPage } from '@/components/seo/TurkeyInvestmentClusterPage';
export const metadata = getTaxClusterMetadata('qualifiedServiceCenters', 'ar');
export default function Page() { return <TurkeyInvestmentClusterPage pageKey="qualifiedServiceCenters" locale="ar" />; }
