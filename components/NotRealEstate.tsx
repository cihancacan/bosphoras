import type { Locale } from '@/lib/i18n';
import { localeDir } from '@/lib/i18n';

interface NotRealEstateProps {
  locale: Locale;
}

const copy: Record<
  Locale,
  {
    eyebrow: string;
    headline: string;
    body: string;
    pillars: { label: string; description: string }[];
    quote: string;
  }
> = {
  fr: {
    eyebrow: 'Ce que Bosphoras n’est pas',
    headline:
      "Ni agence immobilière. Ni agence de voyage.\nUn bureau privé, et c'est tout.",
    body:
      "En Turquie, le vrai défi n'est pas de trouver un service. C'est de savoir à qui faire confiance. Bosphoras commence par la stratégie, pas par un appartement : quelle ville, quelle structure légale, quelle position fiscale, quelle assurance, quel médecin, quel avocat. L'immobilier ne vient qu'après — si pertinent.",
    pillars: [
      {
        label: 'Stratégie d’abord',
        description:
          "Ville, structure, fiscalité, assurance et professionnels indépendants — avant toute décision patrimoniale.",
      },
      {
        label: 'Coordination, pas vente',
        description:
          "Nous orchestrons, filtrons et exécutons. Nous ne vendons ni biens, ni promesses.",
      },
      {
        label: 'Discrétion absolue',
        description:
          "Présentations privées sur consentement mutuel. Pas de remises. Pas de bruit. Seulement l'accès.",
      },
    ],
    quote:
      "Un appel. Un interlocuteur de confiance. Toute la Turquie.",
  },
  en: {
    eyebrow: 'What Bosphoras is not',
    headline:
      'Not a real-estate agency. Not a travel agency.\nA private desk, nothing else.',
    body:
      'In Turkey, the real challenge is not finding a service. It is knowing who to trust. Bosphoras begins with strategy, not with an apartment: which city, which legal structure, which tax position, which insurance, which doctor, which lawyer. Property is only considered later — if relevant.',
    pillars: [
      {
        label: 'Strategy first',
        description:
          'City, structure, tax, insurance and independent professionals — before any property decision.',
      },
      {
        label: 'Coordination, not selling',
        description:
          'We orchestrate, filter and execute. We do not sell apartments or promises.',
      },
      {
        label: 'Absolute discretion',
        description:
          'Private introductions on mutual consent only. No discounts. No noise. Just access.',
      },
    ],
    quote: 'One call. One trusted desk. Everything Turkey.',
  },
  ru: {
    eyebrow: 'Чем Bosphoras не является',
    headline:
      'Не агентство недвижимости. Не туристическое агентство.\nЧастный офис — и всё.',
    body:
      'В Турции главная задача — не найти услугу, а знать, кому доверять. Bosphoras начинает со стратегии, а не с квартиры: какой город, какая юридическая структура, какая налоговая позиция, какая страховка, какой врач, какой юрист. Недвижимость рассматривается позже — если уместна.',
    pillars: [
      {
        label: 'Сначала стратегия',
        description:
          'Город, структура, налоги, страхование и независимые специалисты — до любого имущественного решения.',
      },
      {
        label: 'Координация, а не продажа',
        description:
          'Мы организуем, фильтруем и исполняем. Мы не продаём ни квартиры, ни обещания.',
      },
      {
        label: 'Абсолютная сдержанность',
        description:
          'Частные знакомства только по взаимному согласию. Без скидок. Без шума. Только доступ.',
      },
    ],
    quote: 'Один звонок. Один доверенный офис. Вся Турция.',
  },
  ar: {
    eyebrow: 'ما لا تكونه بوسفوراس',
    headline:
      'ليست وكالة عقارية. ليست وكالة سفر.\nمكتب خاص فقط.',
    body:
      'في تركيا، التحدي الحقيقي ليس في إيجاد الخدمة، بل في معرفة بمن تثق. تبدأ بوسفوراس بالاستراتيجية لا بشقة: أي مدينة، أي هيكل قانوني، أي وضع ضريبي، أي تأمين، أي طبيب، أي محامٍ. لا يُنظر في العقار إلا لاحقاً — إذا كان ملائماً.',
    pillars: [
      {
        label: 'الاستراتيجية أولاً',
        description:
          'المدينة والهيكل والضرائب والتأمين والمهنيون المستقلون — قبل أي قرار عقاري.',
      },
      {
        label: 'تنسيق لا بيع',
        description:
          'نُنسّق ونُصفّي ونُنفّذ. لا نبيع شققاً ولا وعوداً.',
      },
      {
        label: 'سرية مطلقة',
        description:
          'تعارف خاص بموافقة متبادلة فقط. بلا خصومات. بلا ضجيج. الوصول فقط.',
      },
    ],
    quote: 'مكالمة واحدة. مكتب موثوق واحد. تركيا بأكملها.',
  },
};

export function NotRealEstate({ locale }: NotRealEstateProps) {
  const c = copy[locale];
  const isRtl = localeDir[locale] === 'rtl';

  return (
    <section
      className="py-24 md:py-32 bg-[hsl(45,30%,98%)] border-y border-[hsl(42,15%,86%)]"
      dir={localeDir[locale]}
      aria-labelledby="not-real-estate-heading"
    >
      <div className="container-editorial">
        <div className={`max-w-3xl mb-16 ${isRtl ? 'mr-0' : ''}`}>
          <p className="text-[hsl(42,65%,45%)] text-[0.7rem] tracking-[0.35em] uppercase font-medium mb-5">
            {c.eyebrow}
          </p>
          <h2
            id="not-real-estate-heading"
            className="text-[hsl(220,45%,12%)] font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.08] tracking-tight mb-7"
          >
            {c.headline.split('\n').map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="text-[hsl(220,15%,28%)] text-base md:text-lg leading-relaxed font-light">
            {c.body}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-[hsl(42,15%,86%)] border-y border-[hsl(42,15%,86%)]">
          {c.pillars.map((pillar, idx) => (
            <article
              key={idx}
              className="bg-[hsl(45,30%,98%)] p-8 md:p-10"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-[hsl(42,65%,45%)] text-xs tracking-[0.3em] font-medium">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span className="w-8 h-px bg-[hsl(42,65%,52%)]/60" aria-hidden="true" />
              </div>
              <h3 className="text-[hsl(220,45%,12%)] font-serif text-xl mb-3 leading-snug">
                {pillar.label}
              </h3>
              <p className="text-[hsl(220,15%,32%)] text-sm md:text-base leading-relaxed">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>

        <blockquote className="mt-16 text-center max-w-3xl mx-auto">
          <p className="text-[hsl(220,45%,12%)] font-serif text-2xl md:text-3xl italic leading-snug">
            “{c.quote}”
          </p>
        </blockquote>
      </div>
    </section>
  );
}
