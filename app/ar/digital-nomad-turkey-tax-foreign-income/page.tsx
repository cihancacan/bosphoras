import { getDigitalNomadTaxMetadata, DigitalNomadTaxClientPage } from '@/components/seo/DigitalNomadTaxClientPage';

export const metadata = getDigitalNomadTaxMetadata('ar');

export default function Page() {
  return <DigitalNomadTaxClientPage locale="ar" />;
}
