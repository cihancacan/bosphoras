import { getTaxClusterMetadata, TurkeyInvestmentClusterPage } from '@/components/seo/TurkeyInvestmentClusterPage';
export const metadata = getTaxClusterMetadata('twentyYearExemption', 'ar');
export default function Page() { return <TurkeyInvestmentClusterPage pageKey="twentyYearExemption" locale="ar" />; }
