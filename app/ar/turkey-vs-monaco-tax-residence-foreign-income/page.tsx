import { getTurkeyVsMonacoTaxMetadata, TurkeyVsMonacoTaxClientPage } from '@/components/seo/TurkeyVsMonacoTaxClientPage';

export const metadata = getTurkeyVsMonacoTaxMetadata('ar');

export default function Page() {
  return <TurkeyVsMonacoTaxClientPage locale="ar" />;
}
