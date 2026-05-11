import { getMarketExpatTurkeyTaxMetadata, MarketExpatTurkeyTaxClientPage } from '@/components/seo/MarketExpatTurkeyTaxClientPage';

export const metadata = getMarketExpatTurkeyTaxMetadata('en');

export default function Page() {
  return <MarketExpatTurkeyTaxClientPage locale="en" />;
}
