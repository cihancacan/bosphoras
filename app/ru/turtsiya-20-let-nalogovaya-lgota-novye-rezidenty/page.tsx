import { getTaxClusterMetadata, TurkeyInvestmentClusterPage } from '@/components/seo/TurkeyInvestmentClusterPage';
export const metadata = getTaxClusterMetadata('twentyYearExemption', 'ru');
export default function Page() { return <TurkeyInvestmentClusterPage pageKey="twentyYearExemption" locale="ru" />; }
