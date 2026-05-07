import { getTaxClusterMetadata, TurkeyInvestmentClusterPage } from '@/components/seo/TurkeyInvestmentClusterPage';
export const metadata = getTaxClusterMetadata('twentyYearExemption', 'en');
export default function Page() { return <TurkeyInvestmentClusterPage pageKey="twentyYearExemption" locale="en" />; }
