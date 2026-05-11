import { getLongTailTaxMetadata, LongTailTaxSeoPage } from '@/components/seo/TaxLongTailSeoPage';
export const metadata = getLongTailTaxMetadata('inheritanceOnePercent', 'ru');
export default function Page() { return <LongTailTaxSeoPage pageKey="inheritanceOnePercent" locale="ru" />; }
