import { getTurkeyVsSwitzerlandTaxMetadata, TurkeyVsSwitzerlandTaxClientPage } from '@/components/seo/TurkeyVsSwitzerlandTaxClientPage';

export const metadata = getTurkeyVsSwitzerlandTaxMetadata('ru');

export default function Page() {
  return <TurkeyVsSwitzerlandTaxClientPage locale="ru" />;
}
