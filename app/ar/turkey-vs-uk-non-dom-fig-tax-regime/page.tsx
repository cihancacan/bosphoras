import { getTurkeyVsUkFigTaxMetadata, TurkeyVsUkFigTaxClientPage } from '@/components/seo/TurkeyVsUkFigTaxClientPage';

export const metadata = getTurkeyVsUkFigTaxMetadata('ar');

export default function Page() {
  return <TurkeyVsUkFigTaxClientPage locale="ar" />;
}
