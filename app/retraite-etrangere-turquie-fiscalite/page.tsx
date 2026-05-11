import { getLongTailTaxMetadata, LongTailTaxSeoPage } from '@/components/seo/TaxLongTailSeoPage';
export const metadata = getLongTailTaxMetadata('foreignPensionTax', 'fr');
export default function Page() { return <LongTailTaxSeoPage pageKey="foreignPensionTax" locale="fr" />; }
