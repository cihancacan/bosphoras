import { getMarketExpatTurkeyTaxMetadata, MarketExpatTurkeyTaxClientPage } from '@/components/seo/MarketExpatTurkeyTaxClientPage';

export const metadata = getMarketExpatTurkeyTaxMetadata('ru');

export default function Page() {
  return <MarketExpatTurkeyTaxClientPage locale="ru" />;
}
