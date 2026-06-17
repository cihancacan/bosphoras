import type { Locale } from '@/lib/i18n';

const fallback = {
  title: 'The value of an organization already in place',
  intro: 'Private Access brings together a private secretariat, premium access, coordination concierge and a discreet business circle in one relationship.',
  items: [
    'Private secretariat: meetings, schedule, confirmations, follow-ups',
    'Premium access: The Peninsula Istanbul, fitness, spa, pools, Golden Horn',
    'Concierge: reservations, transport, events, private requests',
    'Circle: introductions, meetings, member evenings',
  ],
};

const copy: Record<Locale, typeof fallback> = {
  fr: {
    title: 'La valeur d’une organisation déjà en place',
    intro: 'Private Access réunit un secrétariat privé, un accès premium, une conciergerie de coordination et un cercle d’affaires discret dans une seule relation.',
    items: [
      'Secrétariat privé : rendez-vous, planning, confirmations, relances',
      'Accès premium : The Peninsula Istanbul, fitness, spa, piscines, Corne d’Or',
      'Conciergerie : réservations, transport, événements, demandes privées',
      'Cercle : introductions, rencontres, soirées membres',
    ],
  },
  en: fallback,
  ru: fallback,
  ar: fallback,
};

export function PrivateAccessValueBlock({ locale }: { locale: Locale }) {
  const value = copy[locale];
  return (
    <section className="border-y border-[#d8c7a1] bg-[#fffaf0] px-5 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] text-[#121826] md:text-5xl">{value.title}</h2>
        <p className="mt-6 max-w-4xl text-base leading-8 text-[#3e4857] md:text-lg">{value.intro}</p>
        <div className="mt-8 grid gap-3 md:grid-cols-2">
          {value.items.map((item) => <div key={item} className="border border-[#d8c7a1] bg-[#f8f1e7] p-5 text-sm leading-7 text-[#3e4857]">{item}</div>)}
        </div>
      </div>
    </section>
  );
}
