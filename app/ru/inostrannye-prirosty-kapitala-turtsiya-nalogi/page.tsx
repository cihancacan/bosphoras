import { getForeignCapitalGainsTaxMetadata, ForeignCapitalGainsTaxClientPage } from '@/components/seo/ForeignCapitalGainsTaxClientPage';

export const metadata = getForeignCapitalGainsTaxMetadata('ru');

export default function Page() {
  return <ForeignCapitalGainsTaxClientPage locale="ru" />;
}
