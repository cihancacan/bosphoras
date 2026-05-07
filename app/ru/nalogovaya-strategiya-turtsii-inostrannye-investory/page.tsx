import { getTaxClusterMetadata, TurkeyInvestmentClusterPage } from '@/components/seo/TurkeyInvestmentClusterPage';
export const metadata = getTaxClusterMetadata('taxStrategy', 'ru');
export default function Page() { return <TurkeyInvestmentClusterPage pageKey="taxStrategy" locale="ru" />; }
