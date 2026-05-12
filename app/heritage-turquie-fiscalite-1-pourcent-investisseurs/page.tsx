import { getInheritanceTaxTurkeyMetadata, InheritanceTaxTurkeyClientPage } from '@/components/seo/InheritanceTaxTurkeyClientPage';

export const metadata = getInheritanceTaxTurkeyMetadata('fr');

export default function Page() {
  return <InheritanceTaxTurkeyClientPage locale="fr" />;
}
