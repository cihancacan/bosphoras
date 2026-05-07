import { getSecondWaveMetadata, TurkeySecondWaveSeoPage } from '@/components/seo/TurkeySecondWaveSeoPage';
export const metadata = getSecondWaveMetadata('residenceProperty', 'fr');
export default function Page() { return <TurkeySecondWaveSeoPage pageKey="residenceProperty" locale="fr" />; }
