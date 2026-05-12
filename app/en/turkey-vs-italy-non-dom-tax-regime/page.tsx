import { getTurkeyVsItalyNonDomMetadata, TurkeyVsItalyNonDomClientPage } from '@/components/seo/TurkeyVsItalyNonDomClientPage';

export const metadata = getTurkeyVsItalyNonDomMetadata('en');

export default function Page() {
  return <TurkeyVsItalyNonDomClientPage locale="en" />;
}
