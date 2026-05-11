import { getLongTailTaxMetadata, LongTailTaxSeoPage } from '@/components/seo/TaxLongTailSeoPage';
export const metadata = getLongTailTaxMetadata('digitalNomadTax', 'ru');
export default function Page() { return <LongTailTaxSeoPage pageKey="digitalNomadTax" locale="ru" />; }
