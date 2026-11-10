import type { Metadata } from 'next';
import { TravelPhotoCredits } from '@/components/travel/TravelPhotoCredits';
import { Header, Footer } from '@/components/travel/TravelPages';

export const metadata: Metadata = {
  title: 'Photo credits | Bosphoras Luxury Stays',
  description: 'Image attribution, authors, sources and licensing for Bosphoras Luxury Stays travel guides.',
  robots: {index:false,follow:true},
};

export default function Page() {
  return <div lang="en"><Header locale="en" slug="credits" limitedLocales /><TravelPhotoCredits locale="en" /><Footer locale="en" /></div>;
}
