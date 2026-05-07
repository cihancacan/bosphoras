import { getTaxClusterMetadata, TurkeyInvestmentClusterPage } from '@/components/seo/TurkeyInvestmentClusterPage';
export const metadata = getTaxClusterMetadata('qualifiedServiceCenters', 'ru');
export default function Page() { return <TurkeyInvestmentClusterPage pageKey="qualifiedServiceCenters" locale="ru" />; }
