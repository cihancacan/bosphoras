import { getLongTailTaxMetadata, LongTailTaxSeoPage } from '@/components/seo/TaxLongTailSeoPage';
export const metadata = getLongTailTaxMetadata('inheritanceOnePercent', 'ar');
export default function Page() { return <LongTailTaxSeoPage pageKey="inheritanceOnePercent" locale="ar" />; }
