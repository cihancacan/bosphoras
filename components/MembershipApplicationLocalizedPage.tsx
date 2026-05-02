import Link from 'next/link';
import {
  ArrowRight,
  BadgeCheck,
  Globe,
  Lock,
  ShieldCheck,
  Sparkles,
  UserCheck,
} from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BosphorasMembershipForm } from '@/components/BosphorasForms';

type Copy = {
  currentPath: string;
  eyebrow: string;
  h1: string;
  intro: string;
  oneMembership: string;
  oneMembershipText: string;
  keyPoints: string[];
  confidential: string;
  locations: string;
  accessEyebrow: string;
  accessTitle: string;
  accessParagraphs: string[];
  cards: Array<{ title: string; text: string; icon: 'user' | 'shield' | 'sparkles' }>;
  classicTitle: string;
  classicText: string;
  classicButton: string;
  classicHref: string;
};

const copies: Record<Locale, Copy> = {
  fr: {
    currentPath: '/adhesion/demande-membre',
    eyebrow: 'Bosphoras Private Access',
    h1: 'Demande d’adhésion privée',
    intro: 'Bosphoras Private Access est réservé aux profils sélectionnés recherchant un accès discret, fiable et prioritaire en Turquie.',
    oneMembership: 'Une seule adhésion. Un seul niveau de service.',
    oneMembershipText: 'Nous ne sélectionnons pas uniquement un budget. Nous sélectionnons un profil, une intention et une compatibilité avec notre réseau.',
    keyPoints: [
      'Sur parrainage, recommandation ou validation du profil.',
      'Une seule adhésion. Un seul niveau de service.',
      'Admission annuelle : 10 000 USD.',
      'Retainer mensuel : 1 000 USD / mois.',
      'Prestations externes, honoraires professionnels et réservations facturés séparément.',
    ],
    confidential: 'Candidature confidentielle',
    locations: 'Paris · Istanbul · Londres · Almaty · Moscou · Dubai',
    accessEyebrow: 'Accès membre',
    accessTitle: 'Ce n’est pas une carte de réduction.',
    accessParagraphs: [
      'Bosphoras Private Access est un accès privé à un bureau de coordination, d’introduction et d’exécution en Turquie.',
      'L’adhésion donne accès au traitement prioritaire, aux introductions qualifiées et à la coordination confidentielle. Les prestations externes, honoraires de professionnels, réservations, transports, hôtels, événements et frais spécifiques sont facturés séparément.',
      'Pour les clients qui souhaitent un accompagnement sans statut membre, Bosphoras Private Desk peut être proposé à partir de 6 000 USD / an ou sur devis personnalisé.',
    ],
    cards: [
      { icon: 'user', title: 'Sélection', text: 'La candidature est étudiée selon le profil, l’intention et la compatibilité avec notre réseau.' },
      { icon: 'shield', title: 'Confidentialité', text: 'Les demandes sont traitées avec discrétion, limitation des accès et partage strictement nécessaire.' },
      { icon: 'sparkles', title: 'Accès', text: 'Un bureau privé pour coordonner les bons interlocuteurs en Turquie avec priorité et continuité.' },
    ],
    classicTitle: 'Une demande classique ?',
    classicText: 'Si vous souhaitez un accompagnement sans accès membre, le Private Desk démarre à partir de 6 000 USD / an ou sur devis personnalisé.',
    classicButton: 'Demande classique',
    classicHref: '/diagnostic-prive',
  },
  en: {
    currentPath: '/en/membership/application',
    eyebrow: 'Bosphoras Private Access',
    h1: 'Private membership application',
    intro: 'Bosphoras Private Access is reserved for selected profiles seeking discreet, reliable and priority access in Turkey.',
    oneMembership: 'One membership. One level of service.',
    oneMembershipText: 'We do not select only a budget. We select a profile, an intention and compatibility with our network.',
    keyPoints: [
      'By referral, recommendation or profile validation.',
      'One membership. One level of service.',
      'Annual admission: 10,000 USD.',
      'Monthly retainer: 1,000 USD / month.',
      'External services, professional fees and reservations are billed separately.',
    ],
    confidential: 'Confidential application',
    locations: 'Paris · Istanbul · London · Almaty · Moscow · Dubai',
    accessEyebrow: 'Member access',
    accessTitle: 'This is not a discount card.',
    accessParagraphs: [
      'Bosphoras Private Access is private access to a coordination, introduction and execution office in Turkey.',
      'Membership gives access to priority handling, qualified introductions and confidential coordination. External services, professional fees, reservations, transport, hotels, events and specific costs are billed separately.',
      'For clients who want support without member status, Bosphoras Private Desk can be offered from 6,000 USD / year or by tailored quote.',
    ],
    cards: [
      { icon: 'user', title: 'Selection', text: 'The application is reviewed according to profile, intention and compatibility with our network.' },
      { icon: 'shield', title: 'Confidentiality', text: 'Requests are handled with discretion, limited access and strictly necessary sharing.' },
      { icon: 'sparkles', title: 'Access', text: 'A private office to coordinate the right contacts in Turkey with priority and continuity.' },
    ],
    classicTitle: 'A classic request?',
    classicText: 'If you want support without member access, Private Desk starts from 6,000 USD / year or by tailored quote.',
    classicButton: 'Classic request',
    classicHref: '/en/private-assessment',
  },
  ru: {
    currentPath: '/ru/chlenstvo/zayavka',
    eyebrow: 'Bosphoras Private Access',
    h1: 'Заявка на частное членство',
    intro: 'Bosphoras Private Access предназначен для отобранных профилей, которым нужен дискретный, надёжный и приоритетный доступ в Турции.',
    oneMembership: 'Одно членство. Один уровень сервиса.',
    oneMembershipText: 'Мы выбираем не только бюджет. Мы оцениваем профиль, намерение и совместимость с нашей сетью.',
    keyPoints: [
      'По рекомендации, представлению или после валидации профиля.',
      'Одно членство. Один уровень сервиса.',
      'Ежегодный вступительный взнос: 10 000 USD.',
      'Ежемесячный retainer: 1 000 USD / месяц.',
      'Внешние услуги, гонорары специалистов и бронирования оплачиваются отдельно.',
    ],
    confidential: 'Конфиденциальная заявка',
    locations: 'Париж · Стамбул · Лондон · Алматы · Москва · Дубай',
    accessEyebrow: 'Доступ участника',
    accessTitle: 'Это не скидочная карта.',
    accessParagraphs: [
      'Bosphoras Private Access — это частный доступ к офису координации, интродукций и исполнения в Турции.',
      'Членство даёт доступ к приоритетной обработке, квалифицированным знакомствам и конфиденциальной координации. Внешние услуги, гонорары профессионалов, бронирования, транспорт, отели, мероприятия и специальные расходы оплачиваются отдельно.',
      'Для клиентов, которым нужно сопровождение без статуса участника, Bosphoras Private Desk может быть предложен от 6 000 USD / год или по индивидуальному предложению.',
    ],
    cards: [
      { icon: 'user', title: 'Отбор', text: 'Заявка рассматривается по профилю, намерению и совместимости с нашей сетью.' },
      { icon: 'shield', title: 'Конфиденциальность', text: 'Запросы обрабатываются дискретно, с ограничением доступа и только необходимым обменом информацией.' },
      { icon: 'sparkles', title: 'Доступ', text: 'Частный офис для координации правильных контактов в Турции с приоритетом и непрерывностью.' },
    ],
    classicTitle: 'Классический запрос?',
    classicText: 'Если вам нужно сопровождение без членского доступа, Private Desk начинается от 6 000 USD / год или по индивидуальному предложению.',
    classicButton: 'Классический запрос',
    classicHref: '/ru/chastnaya-konsultatsiya',
  },
  ar: {
    currentPath: '/ar/عضوية/طلب',
    eyebrow: 'Bosphoras Private Access',
    h1: 'طلب عضوية خاصة',
    intro: 'Bosphoras Private Access مخصص للملفات المختارة التي تبحث عن وصول سري وموثوق وأولوية في تركيا.',
    oneMembership: 'عضوية واحدة. مستوى خدمة واحد.',
    oneMembershipText: 'نحن لا نختار ميزانية فقط. نختار ملفاً ونية وتوافقاً مع شبكتنا.',
    keyPoints: [
      'عن طريق مُرشح أو توصية أو اعتماد الملف.',
      'عضوية واحدة. مستوى خدمة واحد.',
      'رسوم القبول السنوية: 10,000 USD.',
      'Retainer شهري: 1,000 USD / شهر.',
      'الخدمات الخارجية وأتعاب المهنيين والحجوزات تُفوتر بشكل منفصل.',
    ],
    confidential: 'طلب سري',
    locations: 'باريس · إسطنبول · لندن · ألماتي · موسكو · دبي',
    accessEyebrow: 'وصول الأعضاء',
    accessTitle: 'هذه ليست بطاقة خصم.',
    accessParagraphs: [
      'Bosphoras Private Access هو وصول خاص إلى مكتب تنسيق وتعارف وتنفيذ في تركيا.',
      'تمنح العضوية إمكانية الوصول إلى معالجة أولوية وتعارفات مؤهلة وتنسيق سري. الخدمات الخارجية وأتعاب المهنيين والحجوزات والنقل والفنادق والفعاليات والمصاريف الخاصة تُفوتر بشكل منفصل.',
      'للعملاء الذين يريدون دعماً بدون صفة عضو، يمكن تقديم Bosphoras Private Desk ابتداءً من 6,000 USD / سنة أو بعرض مخصص.',
    ],
    cards: [
      { icon: 'user', title: 'الاختيار', text: 'تتم دراسة الطلب حسب الملف والنية ومدى التوافق مع شبكتنا.' },
      { icon: 'shield', title: 'السرية', text: 'تتم معالجة الطلبات بسرية، مع وصول محدود ومشاركة ضرورية فقط.' },
      { icon: 'sparkles', title: 'الوصول', text: 'مكتب خاص لتنسيق الجهات المناسبة في تركيا بأولوية واستمرارية.' },
    ],
    classicTitle: 'طلب كلاسيكي؟',
    classicText: 'إذا كنتم ترغبون في دعم بدون وصول عضو، يبدأ Private Desk من 6,000 USD / سنة أو بعرض مخصص.',
    classicButton: 'طلب كلاسيكي',
    classicHref: '/ar/تقييم-خاص',
  },
};

const icons = { user: UserCheck, shield: ShieldCheck, sparkles: Sparkles };

export function MembershipApplicationLocalizedPage({ locale }: { locale: Locale }) {
  const copy = copies[locale];
  return (
    <>
      <Header locale={locale} currentPath={copy.currentPath} />
      <main className="bg-[#f8f1e7] pt-24 text-[#101827] md:pt-28">
        <section className="relative overflow-hidden border-b border-[#d8c7a1] bg-[radial-gradient(circle_at_82%_8%,rgba(196,151,84,0.20),transparent_28%),linear-gradient(135deg,#f8f1e7_0%,#fffaf0_55%,#efe4d2_100%)]">
          <div className="absolute inset-0 opacity-[0.16]" style={{ backgroundImage: 'linear-gradient(#d8c7a1 1px, transparent 1px), linear-gradient(90deg, #d8c7a1 1px, transparent 1px)', backgroundSize: '72px 72px' }} />
          <div className="container-editorial relative z-10 grid gap-12 py-12 md:py-20 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
            <div className="lg:pt-8">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-[#8a6728]">{copy.eyebrow}</p>
              <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.04em] text-[#121826] md:text-6xl">{copy.h1}</h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#3e4857] md:text-lg">{copy.intro}</p>
              <div className="mt-8 border border-[#d8c7a1] bg-[#fffaf0]/85 p-6 shadow-[0_18px_55px_rgba(16,24,39,0.045)]"><p className="font-serif text-2xl leading-tight text-[#121826]">{copy.oneMembership}</p><p className="mt-4 text-sm leading-7 text-[#3e4857]">{copy.oneMembershipText}</p></div>
              <div className="mt-6 grid gap-3">{copy.keyPoints.map((point) => <div key={point} className="flex items-start gap-3 text-sm leading-7 text-[#3e4857]"><ShieldCheck className="mt-1 h-4 w-4 shrink-0 text-[#8a6728]" strokeWidth={1.5} /><span>{point}</span></div>)}</div>
              <div className="mt-8 grid gap-3 sm:grid-cols-2"><div className="border border-[#d8c7a1] bg-[#fffaf0]/80 p-5"><Lock className="mb-4 h-5 w-5 text-[#8a6728]" /><p className="text-[0.62rem] uppercase leading-6 tracking-[0.16em] text-[#5c6676]">{copy.confidential}</p></div><div className="border border-[#d8c7a1] bg-[#fffaf0]/80 p-5"><Globe className="mb-4 h-5 w-5 text-[#8a6728]" /><p className="text-[0.62rem] uppercase leading-6 tracking-[0.16em] text-[#5c6676]">{copy.locations}</p></div></div>
            </div>
            <div className="relative"><div className="absolute -inset-4 hidden border border-[#d8c7a1] md:block" /><BosphorasMembershipForm locale={locale} embedded /></div>
          </div>
        </section>
        <section className="bg-[#121826] px-5 py-16 text-[#fffaf0] md:px-8 md:py-24"><div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20"><div><p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#d2a863]">{copy.accessEyebrow}</p><h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] md:text-6xl">{copy.accessTitle}</h2></div><div className="space-y-6 text-base leading-8 text-[#d8cfbf]">{copy.accessParagraphs.map((p) => <p key={p}>{p}</p>)}</div></div></section>
        <section className="container-editorial py-16 md:py-24"><div className="grid gap-6 md:grid-cols-3">{copy.cards.map((item) => { const Icon = icons[item.icon]; return <article key={item.title} className="border border-[#d8c7a1] bg-[#fffaf0] p-8 shadow-[0_18px_55px_rgba(16,24,39,0.045)]"><Icon className="h-7 w-7 text-[#8a6728]" strokeWidth={1.4} /><h3 className="mt-8 font-serif text-3xl text-[#121826]">{item.title}</h3><p className="mt-5 text-base leading-8 text-[#3e4857]">{item.text}</p></article>; })}</div><div className="mt-12 border border-[#d8c7a1] bg-[#fffaf0] p-7"><div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between"><div><p className="font-serif text-3xl text-[#121826]">{copy.classicTitle}</p><p className="mt-3 max-w-2xl text-sm leading-7 text-[#3e4857]">{copy.classicText}</p></div><Link href={copy.classicHref} className="inline-flex items-center justify-center gap-3 bg-[#121826] px-7 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#fffaf0] transition hover:bg-[#263246]">{copy.classicButton}<ArrowRight size={15} /></Link></div></div></section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
