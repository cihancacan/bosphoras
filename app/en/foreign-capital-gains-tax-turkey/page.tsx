import { getForeignCapitalGainsTaxMetadata, ForeignCapitalGainsTaxClientPage } from '@/components/seo/ForeignCapitalGainsTaxClientPage';

export const metadata = getForeignCapitalGainsTaxMetadata('en');

export default function Page() {
  return <ForeignCapitalGainsTaxClientPage locale="en" />;
}
