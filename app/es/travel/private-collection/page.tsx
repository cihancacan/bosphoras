import { collectionMetadata } from '@/lib/travel/collectionMetadata';
import { CollectionPage } from '@/components/travel/CollectionPage';

export const metadata = collectionMetadata('es');
export default function Page() {
  return <CollectionPage locale="es"/>;
}
