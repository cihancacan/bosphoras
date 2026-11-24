import type { Metadata } from 'next';
import { collectionMetadata } from '@/lib/travel/collectionMetadata';
import { PrivateTravelCollection } from '@/components/travel/PrivateTravelCollection';
export const metadata: Metadata = { description:'رحلات جوية وفنادق وفلل وشاليهات وطائرات خاصة ومروحيات ويخوت وأنشطة. خطط لرحلتك مع بوسفوراس.', ...collectionMetadata('ar') };
export default function Page() {return <PrivateTravelCollection locale="ar"/>;}
