import { getTaxClusterMetadata, TurkeyInvestmentClusterPage } from '@/components/seo/TurkeyInvestmentClusterPage';
export const metadata = getTaxClusterMetadata('turkeyVsDubai', 'en');
export default function Page() { return <TurkeyInvestmentClusterPage pageKey="turkeyVsDubai" locale="en" />; }
