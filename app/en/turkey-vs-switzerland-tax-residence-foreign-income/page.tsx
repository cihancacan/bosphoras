import { getTurkeyVsSwitzerlandTaxMetadata, TurkeyVsSwitzerlandTaxClientPage } from '@/components/seo/TurkeyVsSwitzerlandTaxClientPage';

export const metadata = getTurkeyVsSwitzerlandTaxMetadata('en');

export default function Page() {
  return <TurkeyVsSwitzerlandTaxClientPage locale="en" />;
}
