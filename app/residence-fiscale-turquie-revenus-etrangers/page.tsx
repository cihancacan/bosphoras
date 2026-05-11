import { getLongTailTaxMetadata, LongTailTaxSeoPage } from '@/components/seo/TaxLongTailSeoPage';
export const metadata = getLongTailTaxMetadata('taxResidenceForeignIncome', 'fr');
export default function Page() { return <LongTailTaxSeoPage pageKey="taxResidenceForeignIncome" locale="fr" />; }
