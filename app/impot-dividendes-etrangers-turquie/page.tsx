import { getForeignDividendsTaxMetadata, ForeignDividendsTaxClientPage } from '@/components/seo/ForeignDividendsTaxClientPage';

export const metadata = getForeignDividendsTaxMetadata('fr');

export default function Page() {
  return <ForeignDividendsTaxClientPage locale="fr" />;
}
