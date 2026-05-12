import { getTurkeyVsItalyNonDomMetadata, TurkeyVsItalyNonDomClientPage } from '@/components/seo/TurkeyVsItalyNonDomClientPage';

export const metadata = getTurkeyVsItalyNonDomMetadata('fr');

export default function Page() {
  return <TurkeyVsItalyNonDomClientPage locale="fr" />;
}
