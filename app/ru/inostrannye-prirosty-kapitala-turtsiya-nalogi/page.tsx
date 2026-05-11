import { getLongTailTaxMetadata, LongTailTaxSeoPage } from '@/components/seo/TaxLongTailSeoPage';
export const metadata = getLongTailTaxMetadata('foreignCapitalGains', 'ru');
export default function Page() { return <LongTailTaxSeoPage pageKey="foreignCapitalGains" locale="ru" />; }
