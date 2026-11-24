import { collectionMetadata } from '@/lib/travel/collectionMetadata';
import { CollectionPage } from '@/components/travel/CollectionPage';

export const metadata = collectionMetadata('tr');
export default function Page() {
  return <CollectionPage locale="tr"/>;
}
