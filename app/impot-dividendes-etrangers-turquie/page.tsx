import { getLongTailTaxMetadata, LongTailTaxSeoPage } from '@/components/seo/TaxLongTailSeoPage';
export const metadata = getLongTailTaxMetadata('foreignDividends', 'fr');
export default function Page() { return <LongTailTaxSeoPage pageKey="foreignDividends" locale="fr" />; }
