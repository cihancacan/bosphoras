import { getLongTailTaxMetadata, LongTailTaxSeoPage } from '@/components/seo/TaxLongTailSeoPage';
export const metadata = getLongTailTaxMetadata('frenchExpatTax', 'en');
export default function Page() { return <LongTailTaxSeoPage pageKey="frenchExpatTax" locale="en" />; }
