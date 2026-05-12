import { getTurkeyVsPortugalTaxMetadata, TurkeyVsPortugalTaxClientPage } from '@/components/seo/TurkeyVsPortugalTaxClientPage';

export const metadata = getTurkeyVsPortugalTaxMetadata('ar');

export default function Page() {
  return <TurkeyVsPortugalTaxClientPage locale="ar" />;
}
