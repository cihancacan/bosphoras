import { getTaxClusterMetadata, TurkeyInvestmentClusterPage } from '@/components/seo/TurkeyInvestmentClusterPage';
export const metadata = getTaxClusterMetadata('qualifiedServiceCenters', 'en');
export default function Page() { return <TurkeyInvestmentClusterPage pageKey="qualifiedServiceCenters" locale="en" />; }
