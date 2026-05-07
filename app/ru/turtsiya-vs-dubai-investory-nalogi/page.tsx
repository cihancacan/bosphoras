import { getTaxClusterMetadata, TurkeyInvestmentClusterPage } from '@/components/seo/TurkeyInvestmentClusterPage';
export const metadata = getTaxClusterMetadata('turkeyVsDubai', 'ru');
export default function Page() { return <TurkeyInvestmentClusterPage pageKey="turkeyVsDubai" locale="ru" />; }
