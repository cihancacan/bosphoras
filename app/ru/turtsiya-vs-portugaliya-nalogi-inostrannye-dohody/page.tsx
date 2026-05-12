import { getTurkeyVsPortugalTaxMetadata, TurkeyVsPortugalTaxClientPage } from '@/components/seo/TurkeyVsPortugalTaxClientPage';

export const metadata = getTurkeyVsPortugalTaxMetadata('ru');

export default function Page() {
  return <TurkeyVsPortugalTaxClientPage locale="ru" />;
}
