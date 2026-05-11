import { getLongTailTaxMetadata, LongTailTaxSeoPage } from '@/components/seo/TaxLongTailSeoPage';
export const metadata = getLongTailTaxMetadata('nonDomTurkey', 'fr');
export default function Page() { return <LongTailTaxSeoPage pageKey="nonDomTurkey" locale="fr" />; }
