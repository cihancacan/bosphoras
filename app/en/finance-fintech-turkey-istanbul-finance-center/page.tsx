import { getSecondWaveMetadata, TurkeySecondWaveSeoPage } from '@/components/seo/TurkeySecondWaveSeoPage';
export const metadata = getSecondWaveMetadata('fintech', 'en');
export default function Page() { return <TurkeySecondWaveSeoPage pageKey="fintech" locale="en" />; }
