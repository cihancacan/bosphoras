import { getForeignDividendsTaxMetadata, ForeignDividendsTaxClientPage } from '@/components/seo/ForeignDividendsTaxClientPage';

export const metadata = getForeignDividendsTaxMetadata('en');

export default function Page() {
  return <ForeignDividendsTaxClientPage locale="en" />;
}
