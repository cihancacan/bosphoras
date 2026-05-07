import { getSecondWaveMetadata, TurkeySecondWaveSeoPage } from '@/components/seo/TurkeySecondWaveSeoPage';
export const metadata = getSecondWaveMetadata('residenceProperty', 'ar');
export default function Page() { return <TurkeySecondWaveSeoPage pageKey="residenceProperty" locale="ar" />; }
