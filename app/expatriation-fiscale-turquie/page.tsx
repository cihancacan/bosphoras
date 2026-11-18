import {TaxRelocationPage,getTaxRelocationMetadata} from '@/components/services/TaxRelocationPage';
export const metadata=getTaxRelocationMetadata('fr');
export default function Page(){return <TaxRelocationPage locale="fr"/>;}
