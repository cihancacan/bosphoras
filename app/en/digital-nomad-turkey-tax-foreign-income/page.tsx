import { getDigitalNomadTaxMetadata, DigitalNomadTaxClientPage } from '@/components/seo/DigitalNomadTaxClientPage';

export const metadata = getDigitalNomadTaxMetadata('en');

export default function Page() {
  return <DigitalNomadTaxClientPage locale="en" />;
}
