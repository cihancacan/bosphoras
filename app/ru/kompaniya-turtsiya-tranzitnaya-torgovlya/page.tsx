import { getTaxClusterMetadata, TurkeyInvestmentClusterPage } from '@/components/seo/TurkeyInvestmentClusterPage';
export const metadata = getTaxClusterMetadata('transitTrade', 'ru');
export default function Page() { return <TurkeyInvestmentClusterPage pageKey="transitTrade" locale="ru" />; }
