import { getTurkeyVsMonacoTaxMetadata, TurkeyVsMonacoTaxClientPage } from '@/components/seo/TurkeyVsMonacoTaxClientPage';

export const metadata = getTurkeyVsMonacoTaxMetadata('en');

export default function Page() {
  return <TurkeyVsMonacoTaxClientPage locale="en" />;
}
