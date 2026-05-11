import { getLongTailTaxMetadata, LongTailTaxSeoPage } from '@/components/seo/TaxLongTailSeoPage';
export const metadata = getLongTailTaxMetadata('taxResidenceForeignIncome', 'en');
export default function Page() { return <LongTailTaxSeoPage pageKey="taxResidenceForeignIncome" locale="en" />; }
