import { getTaxClusterMetadata, TurkeyInvestmentClusterPage } from '@/components/seo/TurkeyInvestmentClusterPage';
export const metadata = getTaxClusterMetadata('manufacturingTax', 'fr');
export default function Page() { return <TurkeyInvestmentClusterPage pageKey="manufacturingTax" locale="fr" />; }
