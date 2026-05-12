import { getTurkeyVsPortugalTaxMetadata, TurkeyVsPortugalTaxClientPage } from '@/components/seo/TurkeyVsPortugalTaxClientPage';

export const metadata = getTurkeyVsPortugalTaxMetadata('fr');

export default function Page() {
  return <TurkeyVsPortugalTaxClientPage locale="fr" />;
}
