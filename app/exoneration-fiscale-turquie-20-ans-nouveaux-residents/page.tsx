import { getTaxClusterMetadata, TurkeyInvestmentClusterPage } from '@/components/seo/TurkeyInvestmentClusterPage';
export const metadata = getTaxClusterMetadata('twentyYearExemption', 'fr');
export default function Page() { return <TurkeyInvestmentClusterPage pageKey="twentyYearExemption" locale="fr" />; }
