import { getTurksAbroadTaxExemptionMetadata, TurksAbroadTaxExemptionClientPage } from '@/components/seo/TurksAbroadTaxExemptionClientPage';

export const metadata = getTurksAbroadTaxExemptionMetadata('fr');

export default function Page() {
  return <TurksAbroadTaxExemptionClientPage locale="fr" />;
}
