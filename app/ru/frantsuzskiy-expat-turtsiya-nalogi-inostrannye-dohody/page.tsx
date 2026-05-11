import { getLongTailTaxMetadata, LongTailTaxSeoPage } from '@/components/seo/TaxLongTailSeoPage';
export const metadata = getLongTailTaxMetadata('frenchExpatTax', 'ru');
export default function Page() { return <LongTailTaxSeoPage pageKey="frenchExpatTax" locale="ru" />; }
