import { getLongTailTaxMetadata, LongTailTaxSeoPage } from '@/components/seo/TaxLongTailSeoPage';
export const metadata = getLongTailTaxMetadata('foreignPensionTax', 'ar');
export default function Page() { return <LongTailTaxSeoPage pageKey="foreignPensionTax" locale="ar" />; }
