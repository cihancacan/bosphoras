import { getLongTailTaxMetadata, LongTailTaxSeoPage } from '@/components/seo/TaxLongTailSeoPage';
export const metadata = getLongTailTaxMetadata('digitalNomadTax', 'en');
export default function Page() { return <LongTailTaxSeoPage pageKey="digitalNomadTax" locale="en" />; }
