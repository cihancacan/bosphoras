import { getLongTailTaxMetadata, LongTailTaxSeoPage } from '@/components/seo/TaxLongTailSeoPage';
export const metadata = getLongTailTaxMetadata('turkishDiaspora', 'ar');
export default function Page() { return <LongTailTaxSeoPage pageKey="turkishDiaspora" locale="ar" />; }
