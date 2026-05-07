import { getTaxClusterMetadata, TurkeyInvestmentClusterPage } from '@/components/seo/TurkeyInvestmentClusterPage';
export const metadata = getTaxClusterMetadata('qualifiedServiceCenters', 'fr');
export default function Page() { return <TurkeyInvestmentClusterPage pageKey="qualifiedServiceCenters" locale="fr" />; }
