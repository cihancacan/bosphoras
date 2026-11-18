import {TaxRelocationPage,getTaxRelocationMetadata} from '@/components/services/TaxRelocationPage';
export const metadata=getTaxRelocationMetadata('en');
export default function Page(){return <TaxRelocationPage locale="en"/>;}
