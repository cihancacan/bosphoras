import { getLongTailTaxMetadata, LongTailTaxSeoPage } from '@/components/seo/TaxLongTailSeoPage';
export const metadata = getLongTailTaxMetadata('foreignCapitalGains', 'en');
export default function Page() { return <LongTailTaxSeoPage pageKey="foreignCapitalGains" locale="en" />; }
