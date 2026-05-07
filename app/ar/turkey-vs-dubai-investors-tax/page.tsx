import { getTaxClusterMetadata, TurkeyInvestmentClusterPage } from '@/components/seo/TurkeyInvestmentClusterPage';
export const metadata = getTaxClusterMetadata('turkeyVsDubai', 'ar');
export default function Page() { return <TurkeyInvestmentClusterPage pageKey="turkeyVsDubai" locale="ar" />; }
