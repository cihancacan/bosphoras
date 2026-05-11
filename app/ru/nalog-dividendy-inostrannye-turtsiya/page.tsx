import { getLongTailTaxMetadata, LongTailTaxSeoPage } from '@/components/seo/TaxLongTailSeoPage';
export const metadata = getLongTailTaxMetadata('foreignDividends', 'ru');
export default function Page() { return <LongTailTaxSeoPage pageKey="foreignDividends" locale="ru" />; }
