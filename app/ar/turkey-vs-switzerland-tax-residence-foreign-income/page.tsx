import { getTurkeyVsSwitzerlandTaxMetadata, TurkeyVsSwitzerlandTaxClientPage } from '@/components/seo/TurkeyVsSwitzerlandTaxClientPage';

export const metadata = getTurkeyVsSwitzerlandTaxMetadata('ar');

export default function Page() {
  return <TurkeyVsSwitzerlandTaxClientPage locale="ar" />;
}
