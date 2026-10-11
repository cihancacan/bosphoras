import { notFound } from 'next/navigation';
import { TravelExperiencePage, travelPageMetadata } from '@/components/travel/TravelPages';
import type { TravelLocale } from '@/lib/travel/i18n';
type Props = { params: { locale: string; slug?: string[] } };
function checkedLocale(value: string): TravelLocale {
  if (value !== 'en' && value !== 'ru' && value !== 'ar') notFound();
  return value as TravelLocale;
}
export function generateMetadata({ params }: Props) { return travelPageMetadata(checkedLocale(params.locale), params.slug || []); }
export default function Page({ params }: Props) { return <TravelExperiencePage locale={checkedLocale(params.locale)} parts={params.slug || []} />; }
