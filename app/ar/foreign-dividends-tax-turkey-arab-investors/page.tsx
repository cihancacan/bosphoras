import { getForeignDividendsTaxMetadata, ForeignDividendsTaxClientPage } from '@/components/seo/ForeignDividendsTaxClientPage';

export const metadata = getForeignDividendsTaxMetadata('ar');

export default function Page() {
  return <ForeignDividendsTaxClientPage locale="ar" />;
}
