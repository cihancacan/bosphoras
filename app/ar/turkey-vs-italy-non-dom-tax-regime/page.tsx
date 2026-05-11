import { getLongTailTaxMetadata, LongTailTaxSeoPage } from '@/components/seo/TaxLongTailSeoPage';
export const metadata = getLongTailTaxMetadata('turkeyVsItalyNonDom', 'ar');
export default function Page() { return <LongTailTaxSeoPage pageKey="turkeyVsItalyNonDom" locale="ar" />; }
