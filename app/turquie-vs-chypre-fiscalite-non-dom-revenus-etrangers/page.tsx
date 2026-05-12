import { getTurkeyVsCyprusNonDomMetadata, TurkeyVsCyprusNonDomClientPage } from '@/components/seo/TurkeyVsCyprusNonDomClientPage';

export const metadata = getTurkeyVsCyprusNonDomMetadata('fr');

export default function Page() {
  return <TurkeyVsCyprusNonDomClientPage locale="fr" />;
}
