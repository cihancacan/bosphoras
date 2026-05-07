import { getTaxClusterMetadata, TurkeyInvestmentClusterPage } from '@/components/seo/TurkeyInvestmentClusterPage';
export const metadata = getTaxClusterMetadata('turkeyVsDubai', 'fr');
export default function Page() { return <TurkeyInvestmentClusterPage pageKey="turkeyVsDubai" locale="fr" />; }
