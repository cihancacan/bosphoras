import { getTurkeyVsPortugalTaxMetadata, TurkeyVsPortugalTaxClientPage } from '@/components/seo/TurkeyVsPortugalTaxClientPage';

export const metadata = getTurkeyVsPortugalTaxMetadata('en');

export default function Page() {
  return <TurkeyVsPortugalTaxClientPage locale="en" />;
}
