import { getTurkeyVsCyprusNonDomMetadata, TurkeyVsCyprusNonDomClientPage } from '@/components/seo/TurkeyVsCyprusNonDomClientPage';

export const metadata = getTurkeyVsCyprusNonDomMetadata('ru');

export default function Page() {
  return <TurkeyVsCyprusNonDomClientPage locale="ru" />;
}
