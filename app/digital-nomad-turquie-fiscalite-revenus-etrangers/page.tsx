import { getLongTailTaxMetadata, LongTailTaxSeoPage } from '@/components/seo/TaxLongTailSeoPage';
export const metadata = getLongTailTaxMetadata('digitalNomadTax', 'fr');
export default function Page() { return <LongTailTaxSeoPage pageKey="digitalNomadTax" locale="fr" />; }
