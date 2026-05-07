import { getTaxClusterMetadata, TurkeyInvestmentClusterPage } from '@/components/seo/TurkeyInvestmentClusterPage';
export const metadata = getTaxClusterMetadata('transitTrade', 'fr');
export default function Page() { return <TurkeyInvestmentClusterPage pageKey="transitTrade" locale="fr" />; }
