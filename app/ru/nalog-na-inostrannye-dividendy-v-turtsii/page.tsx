import { getForeignDividendsTaxMetadata, ForeignDividendsTaxClientPage } from '@/components/seo/ForeignDividendsTaxClientPage';

export const metadata = getForeignDividendsTaxMetadata('ru');

export default function Page() {
  return <ForeignDividendsTaxClientPage locale="ru" />;
}
