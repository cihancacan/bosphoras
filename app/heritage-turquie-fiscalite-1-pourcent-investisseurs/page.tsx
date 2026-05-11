import { getLongTailTaxMetadata, LongTailTaxSeoPage } from '@/components/seo/TaxLongTailSeoPage';
export const metadata = getLongTailTaxMetadata('inheritanceOnePercent', 'fr');
export default function Page() { return <LongTailTaxSeoPage pageKey="inheritanceOnePercent" locale="fr" />; }
