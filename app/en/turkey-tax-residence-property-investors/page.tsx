import { getSecondWaveMetadata, TurkeySecondWaveSeoPage } from '@/components/seo/TurkeySecondWaveSeoPage';
export const metadata = getSecondWaveMetadata('residenceProperty', 'en');
export default function Page() { return <TurkeySecondWaveSeoPage pageKey="residenceProperty" locale="en" />; }
