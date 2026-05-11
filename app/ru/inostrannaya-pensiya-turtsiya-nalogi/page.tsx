import { getLongTailTaxMetadata, LongTailTaxSeoPage } from '@/components/seo/TaxLongTailSeoPage';
export const metadata = getLongTailTaxMetadata('foreignPensionTax', 'ru');
export default function Page() { return <LongTailTaxSeoPage pageKey="foreignPensionTax" locale="ru" />; }
