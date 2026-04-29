import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import { getLocalePath } from '@/lib/routes';
import { getSlugForPage } from '@/data/pages/types';

const copy: Record<Locale, { eyebrow: string; title: string; text: string; cta: string }> = {
  fr: {
    eyebrow: 'Bosphoras Private Desk',
    title: 'Accompagnement complet Private Desk à partir de 6 000 USD pour une année.',
    text:
      'Pour les clients qui souhaitent organiser une demande structurée sans accéder au cercle membre, Bosphoras Private Desk permet de cadrer, coordonner et suivre une mission sur 12 mois, ou sur devis personnalisé selon la complexité, l’urgence et les services demandés.',
    cta: 'Demander un accompagnement Private Desk',
  },
  en: {
    eyebrow: 'Bosphoras Private Desk',
    title: 'Complete Private Desk support from 6,000 USD for one year.',
    text:
      'For clients who need structured support without member access, Bosphoras Private Desk can frame, coordinate and follow a 12-month mission, or work on a tailored quote depending on complexity, urgency and requested services.',
    cta: 'Request Private Desk support',
  },
  ru: {
    eyebrow: 'Bosphoras Private Desk',
    title: 'Полное сопровождение Private Desk от 6 000 USD за один год.',
    text:
      'Для клиентов, которым нужна структурированная поддержка без статуса участника, Bosphoras Private Desk позволяет выстроить, координировать и сопровождать миссию в течение 12 месяцев или работать по индивидуальному расчёту в зависимости от сложности, срочности и запрошенных услуг.',
    cta: 'Запросить сопровождение Private Desk',
  },
  ar: {
    eyebrow: 'Bosphoras Private Desk',
    title: 'مرافقة كاملة عبر Private Desk ابتداءً من 6,000 USD لمدة سنة.',
    text:
      'للعملاء الذين يحتاجون إلى دعم منظم دون عضوية، يتيح Bosphoras Private Desk تحديد المهمة وتنسيقها ومتابعتها لمدة 12 شهراً، أو وفق عرض مخصص حسب مستوى التعقيد والاستعجال والخدمات المطلوبة.',
    cta: 'طلب مرافقة Private Desk',
  },
};

export function PrivateDeskYearlySupport({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const href = getLocalePath(locale, getSlugForPage('private-assessment', locale) ?? '/diagnostic-prive');

  return (
    <article className="border border-[#d8c7a1] bg-[#f8f1e7] p-7 md:col-span-2">
      <p className="text-[0.62rem] font-bold uppercase tracking-[0.22em] text-[#8a6728]">
        {c.eyebrow}
      </p>
      <p className="mt-4 font-serif text-3xl leading-tight text-[#121826]">{c.title}</p>
      <p className="mt-5 text-sm leading-7 text-[#3e4857]">{c.text}</p>
      <Link
        href={href}
        className="mt-6 inline-flex items-center justify-center gap-3 border border-[#8a6728] px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-[#8a6728] transition hover:bg-[#fffaf0]"
      >
        {c.cta}
        <ArrowRight size={14} />
      </Link>
    </article>
  );
}
