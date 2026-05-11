import { getLongTailTaxMetadata, LongTailTaxSeoPage } from '@/components/seo/TaxLongTailSeoPage';
export const metadata = getLongTailTaxMetadata('foreignCapitalGains', 'fr');
export default function Page() { return <LongTailTaxSeoPage pageKey="foreignCapitalGains" locale="fr" />; }
