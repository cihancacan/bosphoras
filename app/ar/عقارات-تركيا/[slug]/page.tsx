import { notFound, permanentRedirect } from 'next/navigation';
import { fetchPropertyBySlug } from '@/lib/propertyStore';
import { getPropertyPath } from '@/data/propertyDesk';
import { getLocalePath } from '@/lib/routes';

export const dynamic = 'force-dynamic';

export default async function Page({ params }: { params: { slug: string } }) {
  const property = await fetchPropertyBySlug('ar' as const, decodeURIComponent(params.slug));
  if (!property) notFound();
  permanentRedirect(getLocalePath('ar' as const, getPropertyPath('ar' as const, property, true)));
}
