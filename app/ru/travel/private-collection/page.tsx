import type { Metadata } from 'next';
import { PrivateTravelCollection } from '@/components/travel/PrivateTravelCollection';
export const metadata: Metadata = { title:'Частные путешествия | Виллы, шале, самолёты | Bosphoras', description:'Роскошные отели, виллы, шале, частные самолёты, вертолёты и яхты. Персональный подбор путешествий.', robots:{index:false,follow:true} };
export default function Page() {return <PrivateTravelCollection locale="ru"/>;}
