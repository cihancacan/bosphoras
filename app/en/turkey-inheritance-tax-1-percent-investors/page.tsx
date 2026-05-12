import { getInheritanceTaxTurkeyMetadata, InheritanceTaxTurkeyClientPage } from '@/components/seo/InheritanceTaxTurkeyClientPage';

export const metadata = getInheritanceTaxTurkeyMetadata('en');

export default function Page() {
  return <InheritanceTaxTurkeyClientPage locale="en" />;
}
