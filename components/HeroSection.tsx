import Link from 'next/link';
import type { Locale } from '@/lib/i18n';
import { t, localeDir } from '@/lib/i18n';
import { getLocalePath } from '@/lib/routes';
import { getSlugForPage } from '@/data/pages/types';

interface HeroSectionProps {
  locale: Locale;
}

const cityLine: Record<Locale, string> = {
  fr: 'Istanbul · Bodrum · Antalya',
  en: 'Istanbul · Bodrum · Antalya',
  ru: 'Стамбул · Бодрум · Анталья',
  ar: 'إسطنبول · بودروم · أنطاليا',
};

const presenceLine: Record<Locale, string> = {
  fr: 'Paris · Londres · Istanbul · Almaty',
  en: 'Paris · London · Istanbul · Almaty',
  ru: 'Париж · Лондон · Стамбул · Алматы',
  ar: 'باريس · لندن · إسطنبول · ألماتي',
};

const languageLine: Record<Locale, string> = {
  fr: 'Français · English · Русский · العربية',
  en: 'Français · English · Русский · العربية',
  ru: 'Français · English · Русский · العربية',
  ar: 'Français · English · Русский · العربية',
};

const trustQuote: Record<Locale, string> = {
  fr: "En Turquie, la vraie difficulté n’est pas de trouver un service. C’est de savoir à qui faire confiance.",
  en: 'In Turkey, the real challenge is not finding a service. It is knowing who to trust.',
  ru: 'В Турции настоящая сложность — не найти услугу, а понять, кому можно доверять.',
  ar: 'في تركيا، التحدي الحقيقي ليس العثور على خدمة، بل معرفة من يمكن الوثوق به.',
};

const cityCards: Record<Locale, Array<{ name: string; detail: string }>> = {
  fr: [
    { name: 'Istanbul', detail: 'Business, fiscalité, santé privée, bureaux et vie internationale.' },
    { name: 'Bodrum', detail: 'Villas, marina, yachts, lifestyle discret et résidence secondaire.' },
    { name: 'Antalya', detail: 'Famille, santé, climat, mer et installation long terme.' },
  ],
  en: [
    { name: 'Istanbul', detail: 'Business, tax, private healthcare, offices and international life.' },
    { name: 'Bodrum', detail: 'Villas, marina, yachts, discreet lifestyle and second residence.' },
    { name: 'Antalya', detail: 'Family, healthcare, climate, sea and long-term living.' },
  ],
  ru: [
    { name: 'Стамбул', detail: 'Бизнес, налоги, частная медицина, офисы и международная жизнь.' },
    { name: 'Бодрум', detail: 'Виллы, марина, яхты, сдержанный lifestyle и вторая резиденция.' },
    { name: 'Анталья', detail: 'Семья, медицина, климат, море и долгосрочная жизнь.' },
  ],
  ar: [
    { name: 'إسطنبول', detail: 'الأعمال، الضرائب، الرعاية الصحية الخاصة، المكاتب والحياة الدولية.' },
    { name: 'بودروم', detail: 'الفيلات، المارينا، اليخوت، أسلوب الحياة الهادئ والإقامة الثانية.' },
    { name: 'أنطاليا', detail: 'العائلة، الصحة، المناخ، البحر والاستقرار طويل الأمد.' },
  ],
};

export function HeroSection({ locale }: HeroSectionProps) {
  const isRtl = localeDir[locale] === 'rtl';

  return (
    <section
      className="relative overflow-hidden bg-[hsl(45,30%,96%)] pt-32 pb-16 md:pt-40 md:pb-24"
      aria-label="Bosphoras — Bureau privé en Turquie"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[hsl(42,65%,52%)]/40 to-transparent" aria-hidden="true" />
      <div className="absolute -top-40 right-[-12rem] h-[32rem] w-[32rem] rounded-full bg-[hsl(42,65%,52%)]/10 blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 left-[-14rem] h-[28rem] w-[28rem] rounded-full bg-[hsl(220,45%,12%)]/5 blur-3xl" aria-hidden="true" />

      <div className="container-editorial relative z-10">
        <div className="grid gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20 items-center">
          <div className={isRtl ? 'text-right' : ''}>
            <div className={`mb-8 flex items-center gap-4 ${isRtl ? 'justify-end' : ''}`}>
              <div className="h-px w-10 bg-[hsl(42,65%,45%)]" aria-hidden="true" />
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-[hsl(42,65%,38%)]">
                {cityLine[locale]}
              </p>
            </div>

            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[hsl(220,14%,42%)]">
              {t(locale, 'hero.tagline')}
            </p>

            <h1 className="font-serif text-[3.6rem] leading-[0.95] tracking-[-0.04em] text-[hsl(220,45%,12%)] md:text-7xl lg:text-8xl">
              Bosphoras
            </h1>

            <h2 className="mt-5 max-w-3xl font-serif text-3xl leading-tight tracking-[-0.025em] text-[hsl(220,28%,24%)] md:text-5xl">
              {t(locale, 'hero.title').replace(/\.$/, '')}
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-8 text-[hsl(220,12%,42%)] md:text-lg">
              {t(locale, 'hero.subtitle')}
            </p>

            <div className={`mt-10 flex flex-col gap-3 sm:flex-row ${isRtl ? 'sm:flex-row-reverse' : ''}`}>
              <Link
                href={getLocalePath(locale, getSlugForPage('private-assessment', locale) ?? '/')}
                className="inline-flex items-center justify-center border border-[hsl(220,45%,12%)] bg-[hsl(220,45%,12%)] px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[hsl(45,30%,96%)] transition-all duration-300 hover:bg-[hsl(220,35%,20%)]"
              >
                {t(locale, 'hero.cta')}
              </Link>
              <Link
                href={getLocalePath(locale, getSlugForPage('services', locale) ?? '/services')}
                className="inline-flex items-center justify-center border border-[hsl(42,20%,78%)] bg-white/40 px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[hsl(220,45%,12%)] transition-all duration-300 hover:border-[hsl(42,65%,45%)] hover:text-[hsl(42,65%,35%)]"
              >
                {t(locale, 'hero.cta_secondary')}
              </Link>
            </div>

            <div className="mt-10 grid gap-2 border-l border-[hsl(42,65%,45%)]/35 pl-5 text-xs uppercase tracking-[0.2em] text-[hsl(220,14%,42%)] md:grid-cols-1">
              <span>{presenceLine[locale]}</span>
              <span>{languageLine[locale]}</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 border border-[hsl(42,25%,80%)]/70" aria-hidden="true" />
            <div className="relative bg-white p-3 shadow-[0_35px_90px_rgba(20,28,46,0.14)]">
              <div className="relative aspect-[4/5] overflow-hidden bg-[hsl(220,45%,12%)]">
                <img
                  src="https://images.pexels.com/photos/2042109/pexels-photo-2042109.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="Bosphore à Istanbul, symbole du passage privé vers la Turquie"
                  className="h-full w-full object-cover object-center opacity-95"
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,45%,8%)]/55 via-transparent to-transparent" aria-hidden="true" />
                <div className="absolute bottom-0 left-0 right-0 p-7 text-[hsl(45,30%,98%)]">
                  <p className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-[hsl(42,65%,70%)]">
                    Private Passage
                  </p>
                  <p className="max-w-sm font-serif text-2xl leading-tight">
                    {locale === 'fr' && 'Un point d’entrée privé entre l’Europe, l’Asie et la Turquie.'}
                    {locale === 'en' && 'A private point of entry between Europe, Asia and Turkey.'}
                    {locale === 'ru' && 'Частная точка входа между Европой, Азией и Турцией.'}
                    {locale === 'ar' && 'نقطة دخول خاصة بين أوروبا وآسيا وتركيا.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative mt-8 bg-[hsl(220,45%,12%)] px-7 py-6 text-[hsl(45,30%,96%)] shadow-[0_20px_60px_rgba(20,28,46,0.16)]">
              <p className="font-serif text-xl leading-snug md:text-2xl">“{trustQuote[locale]}”</p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-px bg-[hsl(42,18%,82%)] md:grid-cols-3">
          {cityCards[locale].map((card) => (
            <article key={card.name} className="bg-[hsl(45,30%,96%)] p-7 transition-colors duration-300 hover:bg-white">
              <p className="mb-3 font-serif text-2xl text-[hsl(220,45%,12%)]">{card.name}</p>
              <p className="text-sm leading-7 text-[hsl(220,12%,45%)]">{card.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
