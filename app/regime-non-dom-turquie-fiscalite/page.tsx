import { getNonDomTurkeyClientMetadata, NonDomTurkeyClientPage } from '@/components/seo/NonDomTurkeyClientPage';

export const metadata = getNonDomTurkeyClientMetadata('fr');

export default function Page() {
  return <NonDomTurkeyClientPage locale="fr" />;
}
