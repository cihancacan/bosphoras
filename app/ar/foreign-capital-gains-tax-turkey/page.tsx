import { getLongTailTaxMetadata, LongTailTaxSeoPage } from '@/components/seo/TaxLongTailSeoPage';
export const metadata = getLongTailTaxMetadata('foreignCapitalGains', 'ar');
export default function Page() { return <LongTailTaxSeoPage pageKey="foreignCapitalGains" locale="ar" />; }
