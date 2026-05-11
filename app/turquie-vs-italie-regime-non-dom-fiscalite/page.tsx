import { getLongTailTaxMetadata, LongTailTaxSeoPage } from '@/components/seo/TaxLongTailSeoPage';
export const metadata = getLongTailTaxMetadata('turkeyVsItalyNonDom', 'fr');
export default function Page() { return <LongTailTaxSeoPage pageKey="turkeyVsItalyNonDom" locale="fr" />; }
