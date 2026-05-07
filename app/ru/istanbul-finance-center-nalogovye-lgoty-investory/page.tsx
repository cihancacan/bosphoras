import { getTaxClusterMetadata, TurkeyInvestmentClusterPage } from '@/components/seo/TurkeyInvestmentClusterPage';
export const metadata = getTaxClusterMetadata('istanbulFinanceCenter', 'ru');
export default function Page() { return <TurkeyInvestmentClusterPage pageKey="istanbulFinanceCenter" locale="ru" />; }
