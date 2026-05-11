import { getTaxResidenceForeignIncomeMetadata, TaxResidenceForeignIncomeFullPage } from '@/components/seo/TaxResidenceForeignIncomeFullPage';

export const metadata = getTaxResidenceForeignIncomeMetadata('fr');

export default function Page() {
  return <TaxResidenceForeignIncomeFullPage locale="fr" />;
}
