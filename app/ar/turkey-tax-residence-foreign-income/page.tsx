import { getLongTailTaxMetadata, LongTailTaxSeoPage } from '@/components/seo/TaxLongTailSeoPage';
export const metadata = getLongTailTaxMetadata('taxResidenceForeignIncome', 'ar');
export default function Page() { return <LongTailTaxSeoPage pageKey="taxResidenceForeignIncome" locale="ar" />; }
