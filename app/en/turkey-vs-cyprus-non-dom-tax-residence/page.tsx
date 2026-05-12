import { getTurkeyVsCyprusNonDomMetadata, TurkeyVsCyprusNonDomClientPage } from '@/components/seo/TurkeyVsCyprusNonDomClientPage';

export const metadata = getTurkeyVsCyprusNonDomMetadata('en');

export default function Page() {
  return <TurkeyVsCyprusNonDomClientPage locale="en" />;
}
