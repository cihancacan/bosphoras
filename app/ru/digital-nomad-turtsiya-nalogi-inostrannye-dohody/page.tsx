import { getDigitalNomadTaxMetadata, DigitalNomadTaxClientPage } from '@/components/seo/DigitalNomadTaxClientPage';

export const metadata = getDigitalNomadTaxMetadata('ru');

export default function Page() {
  return <DigitalNomadTaxClientPage locale="ru" />;
}
