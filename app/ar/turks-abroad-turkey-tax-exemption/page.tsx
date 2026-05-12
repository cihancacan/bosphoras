import { getTurksAbroadTaxExemptionMetadata, TurksAbroadTaxExemptionClientPage } from '@/components/seo/TurksAbroadTaxExemptionClientPage';

export const metadata = getTurksAbroadTaxExemptionMetadata('ar');

export default function Page() {
  return <TurksAbroadTaxExemptionClientPage locale="ar" />;
}
