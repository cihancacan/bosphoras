import { getDigitalNomadTaxMetadata, DigitalNomadTaxClientPage } from '@/components/seo/DigitalNomadTaxClientPage';

export const metadata = getDigitalNomadTaxMetadata('fr');

export default function Page() {
  return <DigitalNomadTaxClientPage locale="fr" />;
}
