'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import type { FAQ } from '@/data/faqs';
import type { Locale } from '@/lib/i18n';
import { t } from '@/lib/i18n';

interface FAQSectionProps {
  faqs: FAQ[];
  locale: Locale;
}

export function FAQSection({ faqs, locale }: FAQSectionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="py-24 md:py-32 bg-[hsl(45,30%,96%)]" aria-labelledby="faq-heading">
      <div className="container-editorial">
        <header className="mb-14 max-w-2xl">
          <p className="text-[hsl(42,65%,45%)] text-xs tracking-[0.3em] uppercase font-medium mb-4">FAQ</p>
          <h2
            id="faq-heading"
            className="font-serif text-3xl md:text-4xl text-[hsl(220,45%,12%)] leading-tight"
          >
            {t(locale, 'faq.title')}
          </h2>
        </header>

        <dl className="divide-y divide-[hsl(42,15%,88%)]">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id}>
                <dt>
                  <button
                    className="w-full flex items-center justify-between gap-4 py-6 text-left group"
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                    id={`faq-question-${faq.id}`}
                  >
                    <span className="text-[hsl(220,45%,12%)] font-serif text-lg leading-snug group-hover:text-[hsl(42,65%,40%)] transition-colors duration-200">
                      {faq.questions[locale]}
                    </span>
                    <span className="flex-shrink-0 text-[hsl(42,65%,45%)]">
                      {isOpen ? <Minus size={18} strokeWidth={1.5} /> : <Plus size={18} strokeWidth={1.5} />}
                    </span>
                  </button>
                </dt>
                <dd
                  id={`faq-answer-${faq.id}`}
                  role="region"
                  aria-labelledby={`faq-question-${faq.id}`}
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-96 pb-6' : 'max-h-0'
                  }`}
                >
                  <p className="text-[hsl(220,10%,45%)] text-sm md:text-base leading-relaxed max-w-3xl pr-10">
                    {faq.answers[locale]}
                  </p>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
