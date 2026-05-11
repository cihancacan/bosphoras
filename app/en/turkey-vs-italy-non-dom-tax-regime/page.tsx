import { getLongTailTaxMetadata, LongTailTaxSeoPage } from '@/components/seo/TaxLongTailSeoPage';
export const metadata = getLongTailTaxMetadata('turkeyVsItalyNonDom', 'en');
export default function Page() { return <LongTailTaxSeoPage pageKey="turkeyVsItalyNonDom" locale="en" />; }
