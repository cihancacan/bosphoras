import { getInheritanceTaxTurkeyMetadata, InheritanceTaxTurkeyClientPage } from '@/components/seo/InheritanceTaxTurkeyClientPage';

export const metadata = getInheritanceTaxTurkeyMetadata('ru');

export default function Page() {
  return <InheritanceTaxTurkeyClientPage locale="ru" />;
}
