import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import type { Locale } from '@/lib/i18n';

export interface LegalSection {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
}

interface LegalContentPageProps {
  locale: Locale;
  currentPath: string;
  eyebrow: string;
  title: string;
  intro: string;
  updatedAt?: string;
  sections: LegalSection[];
}

export function LegalContentPage({
  locale,
  currentPath,
  eyebrow,
  title,
  intro,
  updatedAt = '28 avril 2026',
  sections,
}: LegalContentPageProps) {
  return (
    <>
      <Header locale={locale} currentPath={currentPath} />
      <main className="bg-[#f8f1e7] pt-28 text-[#101827] md:pt-32">
        <section className="relative overflow-hidden border-b border-[#d8c7a1] bg-[radial-gradient(circle_at_82%_10%,rgba(196,151,84,0.20),transparent_28%),linear-gradient(135deg,#f8f1e7_0%,#fffaf0_55%,#efe4d2_100%)]">
          <div className="absolute inset-0 opacity-[0.22]" style={{ backgroundImage: 'linear-gradient(#d8c7a1 1px, transparent 1px), linear-gradient(90deg, #d8c7a1 1px, transparent 1px)', backgroundSize: '72px 72px' }} />
          <div className="container-editorial relative z-10 py-16 md:py-24">
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.28em] text-[#8a6728]">{eyebrow}</p>
            <h1 className="max-w-5xl font-serif text-4xl leading-tight tracking-[-0.04em] text-[#121826] md:text-6xl">
              {title}
            </h1>
            <p className="mt-8 max-w-4xl text-lg leading-9 text-[#3e4857]">{intro}</p>
            <p className="mt-6 text-sm uppercase tracking-[0.16em] text-[#7c6b56]">Dernière mise à jour : {updatedAt}</p>
          </div>
        </section>

        <section className="container-editorial py-14 md:py-20">
          <div className="grid gap-6">
            {sections.map((section, index) => (
              <article key={section.title} className="border border-[#d8c7a1] bg-[#fffaf0] p-7 shadow-[0_18px_55px_rgba(16,24,39,0.045)] md:p-9">
                <div className="flex flex-col gap-5 md:flex-row md:gap-10">
                  <p className="font-serif text-3xl text-[#8a6728] md:w-16">{String(index + 1).padStart(2, '0')}</p>
                  <div className="flex-1">
                    <h2 className="font-serif text-3xl leading-tight tracking-[-0.025em] text-[#121826] md:text-4xl">
                      {section.title}
                    </h2>
                    {section.paragraphs && (
                      <div className="mt-6 space-y-4 text-base leading-8 text-[#3e4857]">
                        {section.paragraphs.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    )}
                    {section.bullets && (
                      <ul className="mt-6 grid gap-3 text-base leading-8 text-[#3e4857]">
                        {section.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3">
                            <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8a6728]" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
