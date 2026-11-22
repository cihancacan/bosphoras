import type { Metadata } from 'next';
import { PrivateTravelCollection } from '@/components/travel/PrivateTravelCollection';
export const metadata: Metadata = { title:'Путешествия | Авиабилеты, отели, виллы, яхты и экскурсии | Bosphoras', description:'Авиабилеты, отели, виллы, шале, частные самолёты, вертолёты, яхты и экскурсии. Планируйте путешествие с Bosphoras.', robots:{index:false,follow:true} };
export default function Page() {return <PrivateTravelCollection locale="ru"/>;}
