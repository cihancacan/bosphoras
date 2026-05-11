import { getLongTailTaxMetadata, LongTailTaxSeoPage } from '@/components/seo/TaxLongTailSeoPage';
export const metadata = getLongTailTaxMetadata('foreignDividends', 'ar');
export default function Page() { return <LongTailTaxSeoPage pageKey="foreignDividends" locale="ar" />; }
