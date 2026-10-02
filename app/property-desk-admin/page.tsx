import type { Metadata } from 'next';
import { PropertyAdminForm } from '@/components/PropertyAdminForm';

export const metadata: Metadata = {
  title: 'Property Desk Admin | Bosphoras',
  robots: { index: false, follow: false, noarchive: true, nocache: true },
};

export default function PropertyDeskAdminPage() {
  return (
    <main className="min-h-screen bg-[#f7f1e8] px-5 py-12 text-[#121826] md:px-8">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-10 border-b border-[#d8c7a1] pb-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#8a6728]">Bosphoras · Internal</p>
          <h1 className="mt-4 font-serif text-5xl tracking-[-0.04em] md:text-6xl">Property Desk Admin</h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[#58616d]">
            Création des fiches immobilières, photos, prix, capital nécessaire aujourd’hui, textes multilingues, analyse technique et publication.
            Cette page n’est pas liée dans la navigation publique et reste protégée à l’écriture par le token administrateur.
          </p>
        </div>
        <PropertyAdminForm />
      </div>
    </main>
  );
}
