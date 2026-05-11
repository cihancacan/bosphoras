import { getLongTailTaxMetadata, LongTailTaxSeoPage } from '@/components/seo/TaxLongTailSeoPage';
export const metadata = getLongTailTaxMetadata('nonDomTurkey', 'ru');
export default function Page() { return <LongTailTaxSeoPage pageKey="nonDomTurkey" locale="ru" />; }
