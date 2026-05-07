import { getSecondWaveMetadata, TurkeySecondWaveSeoPage } from '@/components/seo/TurkeySecondWaveSeoPage';
export const metadata = getSecondWaveMetadata('agribusiness', 'ru');
export default function Page() { return <TurkeySecondWaveSeoPage pageKey="agribusiness" locale="ru" />; }
