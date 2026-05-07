import { getTaxClusterMetadata, TurkeyInvestmentClusterPage } from '@/components/seo/TurkeyInvestmentClusterPage';
export const metadata = getTaxClusterMetadata('transitTrade', 'ar');
export default function Page() { return <TurkeyInvestmentClusterPage pageKey="transitTrade" locale="ar" />; }
