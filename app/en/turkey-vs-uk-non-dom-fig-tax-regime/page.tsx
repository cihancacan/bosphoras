import { getTurkeyVsUkFigTaxMetadata, TurkeyVsUkFigTaxClientPage } from '@/components/seo/TurkeyVsUkFigTaxClientPage';

export const metadata = getTurkeyVsUkFigTaxMetadata('en');

export default function Page() {
  return <TurkeyVsUkFigTaxClientPage locale="en" />;
}
