import { getForeignPensionTaxMetadata, ForeignPensionTaxClientPage } from '@/components/seo/ForeignPensionTaxClientPage';

export const metadata = getForeignPensionTaxMetadata('ar');

export default function Page() {
  return <ForeignPensionTaxClientPage locale="ar" />;
}
