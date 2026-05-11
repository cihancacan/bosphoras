import { getLongTailTaxMetadata, LongTailTaxSeoPage } from '@/components/seo/TaxLongTailSeoPage';
export const metadata = getLongTailTaxMetadata('turkishDiaspora', 'fr');
export default function Page() { return <LongTailTaxSeoPage pageKey="turkishDiaspora" locale="fr" />; }
