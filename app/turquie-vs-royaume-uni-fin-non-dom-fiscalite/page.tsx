import { getTurkeyVsUkFigTaxMetadata, TurkeyVsUkFigTaxClientPage } from '@/components/seo/TurkeyVsUkFigTaxClientPage';

export const metadata = getTurkeyVsUkFigTaxMetadata('fr');

export default function Page() {
  return <TurkeyVsUkFigTaxClientPage locale="fr" />;
}
