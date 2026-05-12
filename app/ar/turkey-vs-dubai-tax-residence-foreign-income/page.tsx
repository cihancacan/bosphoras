import { getTurkeyVsDubaiTaxMetadata, TurkeyVsDubaiTaxClientPage } from '@/components/seo/TurkeyVsDubaiTaxClientPage';

export const metadata = getTurkeyVsDubaiTaxMetadata('ar');

export default function Page() {
  return <TurkeyVsDubaiTaxClientPage locale="ar" />;
}
