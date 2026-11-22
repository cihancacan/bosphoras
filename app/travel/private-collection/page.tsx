import type { Metadata } from 'next';
import { PrivateTravelCollection } from '@/components/travel/PrivateTravelCollection';
export const metadata: Metadata = { title:'Voyages | Vols, hôtels, villas, chalets, jets, yachts et activités | Bosphoras', description:'Vols commerciaux, hôtels remarquables, villas, chalets, jets privés, hélicoptères, yachts et activités. Préparez votre voyage avec Bosphoras.', robots:{index:false,follow:true} };
export default function Page() {return <PrivateTravelCollection locale="fr"/>;}
