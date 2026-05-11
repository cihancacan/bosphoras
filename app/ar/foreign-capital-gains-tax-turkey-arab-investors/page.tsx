import { getForeignCapitalGainsTaxMetadata, ForeignCapitalGainsTaxClientPage } from '@/components/seo/ForeignCapitalGainsTaxClientPage';

export const metadata = getForeignCapitalGainsTaxMetadata('ar');

export default function Page() {
  return <ForeignCapitalGainsTaxClientPage locale="ar" />;
}
