import { getSecondWaveMetadata, TurkeySecondWaveSeoPage } from '@/components/seo/TurkeySecondWaveSeoPage';
export const metadata = getSecondWaveMetadata('fintech', 'ru');
export default function Page() { return <TurkeySecondWaveSeoPage pageKey="fintech" locale="ru" />; }
