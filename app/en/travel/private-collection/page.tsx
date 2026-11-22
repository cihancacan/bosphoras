import type { Metadata } from 'next';
import { PrivateTravelCollection } from '@/components/travel/PrivateTravelCollection';
export const metadata: Metadata = { title:'Private Travel | Villas, chalets, jets, yachts | Bosphoras', description:'Exceptional stays, villas, chalets, private jets, helicopters and yachts. Plan a tailored journey with Bosphoras.', robots:{index:false,follow:true} };
export default function Page() {return <PrivateTravelCollection locale="en"/>;}
