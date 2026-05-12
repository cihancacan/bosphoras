import { getTurkeyVsMonacoTaxMetadata, TurkeyVsMonacoTaxClientPage } from '@/components/seo/TurkeyVsMonacoTaxClientPage';

export const metadata = getTurkeyVsMonacoTaxMetadata('ru');

export default function Page() {
  return <TurkeyVsMonacoTaxClientPage locale="ru" />;
}
