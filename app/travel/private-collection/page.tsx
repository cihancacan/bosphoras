import { collectionMetadata } from '@/lib/travel/collectionMetadata';
import { CollectionPage } from '@/components/travel/CollectionPage';

export const metadata = collectionMetadata('fr');
export default function Page() {
  return <CollectionPage locale="fr"/>;
}
