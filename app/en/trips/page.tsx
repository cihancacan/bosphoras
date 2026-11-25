import { collectionMetadata } from '@/lib/travel/collectionMetadata';
import { CollectionPage } from '@/components/travel/CollectionPage';

export const metadata = collectionMetadata('en');
export default function Page() {
  return <CollectionPage locale="en"/>;
}
