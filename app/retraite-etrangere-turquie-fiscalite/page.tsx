import { getForeignPensionTaxMetadata, ForeignPensionTaxClientPage } from '@/components/seo/ForeignPensionTaxClientPage';

export const metadata = getForeignPensionTaxMetadata('fr');

export default function Page() {
  return <ForeignPensionTaxClientPage locale="fr" />;
}
