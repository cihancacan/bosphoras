import { getSecondWaveMetadata, TurkeySecondWaveSeoPage } from '@/components/seo/TurkeySecondWaveSeoPage';
export const metadata = getSecondWaveMetadata('residenceProperty', 'ru');
export default function Page() { return <TurkeySecondWaveSeoPage pageKey="residenceProperty" locale="ru" />; }
