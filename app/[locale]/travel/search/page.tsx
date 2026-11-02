import { notFound } from 'next/navigation';
import { HotelSearchPreparationPage, hotelSearchMetadata, type HotelSearchParams } from '@/components/travel/HotelSearchPreparationPage';

export const dynamic = 'force-dynamic';
type Props = { params: { locale: string }; searchParams: HotelSearchParams };
export function generateMetadata({ params }: Props) { return params.locale === 'en' ? hotelSearchMetadata('en') : { robots: { index: false, follow: false } }; }
export default function Page({ params, searchParams }: Props) {
  if (params.locale !== 'en') notFound();
  return <HotelSearchPreparationPage locale="en" searchParams={searchParams} />;
}
