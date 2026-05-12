import { getTurksAbroadTaxExemptionMetadata, TurksAbroadTaxExemptionClientPage } from '@/components/seo/TurksAbroadTaxExemptionClientPage';

export const metadata = getTurksAbroadTaxExemptionMetadata('ru');

export default function Page() {
  return <TurksAbroadTaxExemptionClientPage locale="ru" />;
}
