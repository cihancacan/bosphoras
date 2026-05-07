import { getTaxClusterMetadata, TurkeyInvestmentClusterPage } from '@/components/seo/TurkeyInvestmentClusterPage';
export const metadata = getTaxClusterMetadata('transitTrade', 'en');
export default function Page() { return <TurkeyInvestmentClusterPage pageKey="transitTrade" locale="en" />; }
