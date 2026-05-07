import { getSecondWaveMetadata, TurkeySecondWaveSeoPage } from '@/components/seo/TurkeySecondWaveSeoPage';
export const metadata = getSecondWaveMetadata('holding', 'ru');
export default function Page() { return <TurkeySecondWaveSeoPage pageKey="holding" locale="ru" />; }
