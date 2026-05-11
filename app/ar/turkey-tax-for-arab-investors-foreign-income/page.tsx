import { getMarketExpatTurkeyTaxMetadata, MarketExpatTurkeyTaxClientPage } from '@/components/seo/MarketExpatTurkeyTaxClientPage';

export const metadata = getMarketExpatTurkeyTaxMetadata('ar');

export default function Page() {
  return <MarketExpatTurkeyTaxClientPage locale="ar" />;
}
