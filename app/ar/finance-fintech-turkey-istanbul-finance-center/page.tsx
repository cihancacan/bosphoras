import { getSecondWaveMetadata, TurkeySecondWaveSeoPage } from '@/components/seo/TurkeySecondWaveSeoPage';
export const metadata = getSecondWaveMetadata('fintech', 'ar');
export default function Page() { return <TurkeySecondWaveSeoPage pageKey="fintech" locale="ar" />; }
