import type { Metadata } from 'next';
import { TravelPhotoCredits } from '@/components/travel/TravelPhotoCredits';
import { Header, Footer } from '@/components/travel/TravelPages';

export const metadata: Metadata = {
  title: 'Crédits photographiques | Bosphoras Luxury Stays',
  description: 'Attribution des images, auteurs, sources et licences des guides Bosphoras Luxury Stays.',
  robots: {index:false,follow:true},
};

export default function Page() {
  return <div lang="fr"><Header locale="fr" slug="credits" limitedLocales /><TravelPhotoCredits locale="fr" /><Footer locale="fr" /></div>;
}
