import { getNonDomTurkeyClientMetadata, NonDomTurkeyClientPage } from '@/components/seo/NonDomTurkeyClientPage';

export const metadata = getNonDomTurkeyClientMetadata('en');

export default function Page() {
  return <NonDomTurkeyClientPage locale="en" />;
}
