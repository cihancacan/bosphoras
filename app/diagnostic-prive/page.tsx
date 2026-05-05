import type { Metadata } from 'next';
import {
  PrivateAssessmentLocalizedPage,
  buildPrivateAssessmentMetadata,
} from '@/components/PrivateAssessmentLocalizedPage';

export const metadata: Metadata = buildPrivateAssessmentMetadata('fr');

export default function DiagnosticPrivePage() {
  return <PrivateAssessmentLocalizedPage locale="fr" />;
}
