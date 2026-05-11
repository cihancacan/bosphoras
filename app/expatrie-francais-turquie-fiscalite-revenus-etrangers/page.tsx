import { getMarketExpatTurkeyTaxMetadata, MarketExpatTurkeyTaxClientPage } from '@/components/seo/MarketExpatTurkeyTaxClientPage';

export const metadata = getMarketExpatTurkeyTaxMetadata('fr');

export default function Page() {
  return <MarketExpatTurkeyTaxClientPage locale="fr" />;
}
