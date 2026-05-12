import { getTurkeyVsDubaiTaxMetadata, TurkeyVsDubaiTaxClientPage } from '@/components/seo/TurkeyVsDubaiTaxClientPage';

export const metadata = getTurkeyVsDubaiTaxMetadata('fr');

export default function Page() {
  return <TurkeyVsDubaiTaxClientPage locale="fr" />;
}
