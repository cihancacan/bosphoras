import { getForeignPensionTaxMetadata, ForeignPensionTaxClientPage } from '@/components/seo/ForeignPensionTaxClientPage';

export const metadata = getForeignPensionTaxMetadata('ru');

export default function Page() {
  return <ForeignPensionTaxClientPage locale="ru" />;
}
