import type { Metadata } from 'next';
import { collectionMetadata } from '@/lib/travel/collectionMetadata';
import { PrivateTravelCollection } from '@/components/travel/PrivateTravelCollection';
export const metadata: Metadata = { description:'Авиабилеты, отели, виллы, шале, частные самолёты, вертолёты, яхты и экскурсии. Планируйте путешествие с Bosphoras.', ...collectionMetadata('ru') };
export default function Page() {return <PrivateTravelCollection locale="ru"/>;}
