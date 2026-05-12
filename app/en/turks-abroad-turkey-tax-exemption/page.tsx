import { getTurksAbroadTaxExemptionMetadata, TurksAbroadTaxExemptionClientPage } from '@/components/seo/TurksAbroadTaxExemptionClientPage';

export const metadata = getTurksAbroadTaxExemptionMetadata('en');

export default function Page() {
  return <TurksAbroadTaxExemptionClientPage locale="en" />;
}
