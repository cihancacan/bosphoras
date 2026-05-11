import { getLongTailTaxMetadata, LongTailTaxSeoPage } from '@/components/seo/TaxLongTailSeoPage';
export const metadata = getLongTailTaxMetadata('inheritanceOnePercent', 'en');
export default function Page() { return <LongTailTaxSeoPage pageKey="inheritanceOnePercent" locale="en" />; }
