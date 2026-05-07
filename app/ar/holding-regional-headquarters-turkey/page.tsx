import { getSecondWaveMetadata, TurkeySecondWaveSeoPage } from '@/components/seo/TurkeySecondWaveSeoPage';
export const metadata = getSecondWaveMetadata('holding', 'ar');
export default function Page() { return <TurkeySecondWaveSeoPage pageKey="holding" locale="ar" />; }
