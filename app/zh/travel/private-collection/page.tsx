import type { Metadata } from 'next';
import { collectionMetadata } from '@/lib/travel/collectionMetadata';
import { PrivateTravelCollection } from '@/components/travel/PrivateTravelCollection';
export const metadata:Metadata={
 description:"通过 Bosphoras 探索酒店、国际航班、海滨别墅、山间木屋、租车和当地体验。",
 ...collectionMetadata('zh')
};
export default function Page(){return <PrivateTravelCollection locale="zh"/>;}
