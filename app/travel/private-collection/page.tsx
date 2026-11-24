import type { Metadata } from 'next';
import { collectionMetadata } from '@/lib/travel/collectionMetadata';
import { PrivateTravelCollection } from '@/components/travel/PrivateTravelCollection';
export const metadata: Metadata = { description:'Vols commerciaux, hôtels remarquables, villas, chalets, jets privés, hélicoptères, yachts et activités. Préparez votre voyage avec Bosphoras.', ...collectionMetadata('fr') };
export default function Page() {return <PrivateTravelCollection locale="fr"/>;}
