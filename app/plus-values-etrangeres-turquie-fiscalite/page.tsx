import { getForeignCapitalGainsTaxMetadata, ForeignCapitalGainsTaxClientPage } from '@/components/seo/ForeignCapitalGainsTaxClientPage';

export const metadata = getForeignCapitalGainsTaxMetadata('fr');

export default function Page() {
  return <ForeignCapitalGainsTaxClientPage locale="fr" />;
}
