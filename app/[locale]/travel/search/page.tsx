import { notFound } from 'next/navigation';
import { HotelSearchPreparationPage, hotelSearchMetadata } from '@/components/travel/HotelSearchPreparationPage';

export const dynamic = 'force-dynamic';
type Props = { params: { locale: string } };
export function generateMetadata({ params }: Props) { return params.locale === 'en' ? hotelSearchMetadata('en') : { robots: { index: false, follow: false } }; }
export default function Page({ params }: Props) {
  if (params.locale !== 'en') notFound();
  return <HotelSearchPreparationPage locale="en" />;
}
