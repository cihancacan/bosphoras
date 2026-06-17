import type { Locale } from '@/lib/i18n';

const copy: Record<Locale, { title: string; text: string; points: string[] }> = {
  fr: {
    title: 'Service Bosphoras inclus. Frais exterieurs a part.',
    text: 'Private Access donne acces a un bureau prive en Turquie : secretariat, organisation des rendez-vous, planning, confirmations, relances, coordination des demandes, acces premium et suivi prioritaire. Le membre demande, Bosphoras organise.',
    points: ['Retainer mensuel 2026 : 3,500 USD / mois', 'Fitness, spa, piscines et ancrage premium au Peninsula Istanbul selon le cadre valide', 'Prestataires, frais officiels, hotels, chauffeurs, assurances, achats et honoraires de tiers factures separement'],
  },
  en: {
    title: 'Bosphoras service included. External costs separate.',
    text: 'Private Access gives access to a private office in Turkey: secretariat, meeting organization, planning, confirmations, follow-ups, request coordination, premium access and priority handling. The member asks, Bosphoras organizes.',
    points: ['Monthly retainer 2026: 3,500 USD / month', 'Fitness, spa, pools and premium Peninsula Istanbul anchor point subject to validated access conditions', 'Providers, official fees, hotels, chauffeurs, insurance, purchases and third-party fees billed separately'],
  },
  ru: {
    title: 'Сервис Bosphoras включен. Внешние расходы отдельно.',
    text: 'Private Access дает доступ к частному офису в Турции: секретариат, организация встреч, планирование, подтверждения, follow-up, координация запросов, премиальный доступ и приоритетное сопровождение. Участник обращается, Bosphoras организует.',
    points: ['Ежемесячный retainer 2026: 3,500 USD / месяц', 'Fitness, spa, бассейны и премиальная точка Peninsula Istanbul согласно утвержденным условиям доступа', 'Поставщики, официальные сборы, отели, водители, страховки, покупки и гонорары третьих лиц оплачиваются отдельно'],
  },
  ar: {
    title: 'خدمة Bosphoras مشمولة. المصاريف الخارجية منفصلة.',
    text: 'Private Access يمنح الوصول إلى مكتب خاص في تركيا: سكرتارية، تنظيم المواعيد، الجدول، التأكيدات، المتابعة، تنسيق الطلبات، وصول مميز ومعالجة ذات أولوية. العضو يطلب وBosphoras ينظم.',
    points: ['الرسوم الشهرية 2026: 3,500 USD / شهر', 'Fitness وspa والمسابح ونقطة ارتكاز مميزة في Peninsula Istanbul حسب شروط الوصول المعتمدة', 'المزودون والرسوم الرسمية والفنادق والسائقون والتأمين والمشتريات وأتعاب الأطراف الثالثة تُفوتر بشكل منفصل'],
  },
};

export function PrivateAccessApplicationNotice({ locale }: { locale: Locale }) {
  const content = copy[locale];
  return (
    <section dir={locale === 'ar' ? 'rtl' : 'ltr'} className="bg-[#f8f1e7] px-5 pb-12 md:px-8">
      <div className="mx-auto max-w-[980px] border border-[#d8c7a1] bg-[#fffaf0] p-7 shadow-[0_18px_55px_rgba(16,24,39,0.045)]">
        <h2 className="font-serif text-3xl leading-tight text-[#121826]">{content.title}</h2>
        <p className="mt-4 text-sm leading-7 text-[#3e4857]">{content.text}</p>
        <div className="mt-6 grid gap-3">
          {content.points.map((item) => <p key={item} className="text-xs font-semibold uppercase leading-6 tracking-[0.12em] text-[#5c6676]">{item}</p>)}
        </div>
      </div>
    </section>
  );
}
