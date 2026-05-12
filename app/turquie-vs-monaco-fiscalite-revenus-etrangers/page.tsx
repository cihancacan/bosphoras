import { getTurkeyVsMonacoTaxMetadata, TurkeyVsMonacoTaxClientPage } from '@/components/seo/TurkeyVsMonacoTaxClientPage';

export const metadata = getTurkeyVsMonacoTaxMetadata('fr');

export default function Page() {
  return <TurkeyVsMonacoTaxClientPage locale="fr" />;
}
