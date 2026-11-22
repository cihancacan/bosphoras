import type { Metadata } from 'next';
import { PrivateTravelCollection } from '@/components/travel/PrivateTravelCollection';
export const metadata: Metadata = { title:'Voyages privés | Villas, chalets, jets, yachts | Bosphoras', description:'Séjours remarquables, villas, chalets, jets privés, hélicoptères et yachts. Préparez votre voyage avec Bosphoras.', robots:{index:false,follow:true} };
export default function Page() {return <PrivateTravelCollection locale="fr"/>;}
