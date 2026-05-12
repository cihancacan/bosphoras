import { getTurkeyVsCyprusNonDomMetadata, TurkeyVsCyprusNonDomClientPage } from '@/components/seo/TurkeyVsCyprusNonDomClientPage';

export const metadata = getTurkeyVsCyprusNonDomMetadata('ar');

export default function Page() {
  return <TurkeyVsCyprusNonDomClientPage locale="ar" />;
}
