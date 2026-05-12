import { getForeignPensionTaxMetadata, ForeignPensionTaxClientPage } from '@/components/seo/ForeignPensionTaxClientPage';

export const metadata = getForeignPensionTaxMetadata('en');

export default function Page() {
  return <ForeignPensionTaxClientPage locale="en" />;
}
