import { getTurkeyVsSwitzerlandTaxMetadata, TurkeyVsSwitzerlandTaxClientPage } from '@/components/seo/TurkeyVsSwitzerlandTaxClientPage';

export const metadata = getTurkeyVsSwitzerlandTaxMetadata('fr');

export default function Page() {
  return <TurkeyVsSwitzerlandTaxClientPage locale="fr" />;
}
