import { getInheritanceTaxTurkeyMetadata, InheritanceTaxTurkeyClientPage } from '@/components/seo/InheritanceTaxTurkeyClientPage';

export const metadata = getInheritanceTaxTurkeyMetadata('ar');

export default function Page() {
  return <InheritanceTaxTurkeyClientPage locale="ar" />;
}
