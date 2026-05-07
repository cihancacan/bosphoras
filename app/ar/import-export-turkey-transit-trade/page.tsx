import { getSecondWaveMetadata, TurkeySecondWaveSeoPage } from '@/components/seo/TurkeySecondWaveSeoPage';
export const metadata = getSecondWaveMetadata('importExport', 'ar');
export default function Page() { return <TurkeySecondWaveSeoPage pageKey="importExport" locale="ar" />; }
