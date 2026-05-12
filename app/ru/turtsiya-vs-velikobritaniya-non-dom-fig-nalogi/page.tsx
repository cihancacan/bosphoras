import { getTurkeyVsUkFigTaxMetadata, TurkeyVsUkFigTaxClientPage } from '@/components/seo/TurkeyVsUkFigTaxClientPage';

export const metadata = getTurkeyVsUkFigTaxMetadata('ru');

export default function Page() {
  return <TurkeyVsUkFigTaxClientPage locale="ru" />;
}
