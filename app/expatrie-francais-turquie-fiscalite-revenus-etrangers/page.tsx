import { getExpatTurkeyTaxClientMetadata, ExpatTurkeyTaxClientPage } from '@/components/seo/ExpatTurkeyTaxClientPage';

export const metadata = getExpatTurkeyTaxClientMetadata('fr');

export default function Page() {
  return <ExpatTurkeyTaxClientPage locale="fr" />;
}
