import type { Metadata } from 'next';
import { LegalContentPage } from '@/components/LegalContentPage';
import { buildMetadata } from '@/lib/seo';

const locale = 'fr' as const;

export const metadata: Metadata = buildMetadata({
  locale,
  path: '/confidentialite',
  title: 'Politique de confidentialité | Bosphoras',
  description:
    'Politique de confidentialité Bosphoras : données collectées, finalités, bases légales, destinataires, conservation, sécurité, droits RGPD et contact.',
});

const sections = [
  {
    title: 'Objet de la politique',
    paragraphs: [
      'La présente Politique de confidentialité explique comment Panorama Grup, exploitant la marque Bosphoras, collecte, utilise, conserve, protège et partage les données personnelles transmises via le site, par email, téléphone, WhatsApp ou tout autre canal de communication.',
      'Bosphoras accompagne des clients internationaux dans des demandes pouvant concerner l’installation en Turquie, la création d’entreprise, la fiscalité, le juridique, la santé, l’assurance, l’immobilier, les bureaux, le transport VIP, l’hôtellerie, les événements et les services privés.',
    ],
  },
  {
    title: 'Responsable du traitement',
    paragraphs: [
      'Le responsable du traitement est Panorama Grup, exploitant la marque Bosphoras.',
      'Adresse : 88 Avenue des Ternes, 75017 Paris, France.',
      'SIRET : 80962988400036.',
      'Email de contact : contact@bosphoras.com.',
      'Téléphone : 01 88 84 22 22.',
    ],
  },
  {
    title: 'Données collectées',
    paragraphs: [
      'Selon la nature de la demande, Bosphoras peut collecter différentes catégories de données personnelles.',
      'Seules les données nécessaires à l’analyse, la coordination, la réponse ou l’exécution de la demande sont recherchées, dans une logique de minimisation.',
    ],
    bullets: [
      'Identité : nom, prénom, nationalité, pays de résidence, langue préférée.',
      'Coordonnées : email, téléphone, adresse, identifiants de messagerie professionnelle.',
      'Informations professionnelles : société, fonction, projet, secteur, pays d’activité.',
      'Informations familiales : composition familiale, besoins d’installation, scolarité, résidence.',
      'Informations patrimoniales ou financières lorsque nécessaires : budget, objectifs, capacité d’investissement, contraintes bancaires ou fiscales.',
      'Documents transmis volontairement : passeport, justificatifs, documents de société, informations de voyage, documents nécessaires à une analyse ou mise en relation.',
      'Informations de santé uniquement lorsque le client les transmet volontairement pour une orientation vers des professionnels médicaux ou d’assurance.',
      'Données techniques : adresse IP, logs, navigateur, pages consultées, cookies selon les choix de l’utilisateur.',
    ],
  },
  {
    title: 'Données sensibles',
    paragraphs: [
      'Certaines demandes peuvent impliquer la transmission d’informations sensibles, notamment santé, situation familiale, données patrimoniales, origine des fonds, documents d’identité ou informations fiscales.',
      'Bosphoras ne demande ces informations que lorsqu’elles sont pertinentes pour comprendre la demande, préparer une mise en relation ou faciliter une coordination avec un professionnel habilité.',
      'Le client doit éviter de transmettre des données sensibles non nécessaires. Lorsque ces données sont transmises, elles sont traitées avec une vigilance renforcée.',
    ],
  },
  {
    title: 'Finalités du traitement',
    paragraphs: [
      'Les données personnelles sont utilisées pour répondre aux demandes, organiser les échanges, préparer un diagnostic privé, coordonner les prestations et assurer le suivi de la relation client.',
    ],
    bullets: [
      'Répondre aux demandes de contact et de diagnostic privé.',
      'Comprendre le profil, les objectifs et les contraintes du client.',
      'Préparer une proposition, un devis, une mission ou une orientation.',
      'Coordonner des rendez-vous, introductions, prestataires ou partenaires.',
      'Assurer la relation commerciale et administrative.',
      'Gérer la facturation, les paiements et la comptabilité.',
      'Respecter les obligations légales, fiscales, comptables ou de conformité.',
      'Protéger Bosphoras, Panorama Grup, ses clients, partenaires et prestataires contre les risques de fraude, abus, demande illicite ou atteinte à la sécurité.',
      'Améliorer le site, les contenus, l’expérience utilisateur et les services proposés.',
    ],
  },
  {
    title: 'Bases légales',
    paragraphs: [
      'Selon les cas, les traitements peuvent reposer sur plusieurs bases légales prévues par le RGPD.',
    ],
    bullets: [
      'L’exécution de mesures précontractuelles ou contractuelles lorsque le client sollicite une prestation.',
      'L’intérêt légitime de Panorama Grup à répondre aux demandes, sécuriser ses services, organiser ses relations commerciales et protéger ses droits.',
      'Le consentement du client lorsque celui-ci transmet volontairement certaines informations ou accepte certains cookies.',
      'Le respect d’obligations légales, fiscales, comptables ou réglementaires.',
    ],
  },
  {
    title: 'Destinataires des données',
    paragraphs: [
      'Les données peuvent être accessibles aux personnes autorisées au sein de Bosphoras et Panorama Grup, strictement selon leurs besoins opérationnels.',
      'Lorsque nécessaire, certaines données peuvent être transmises à des professionnels ou prestataires tiers impliqués dans la demande du client.',
    ],
    bullets: [
      'Avocats, fiscalistes, comptables, assureurs, médecins, cliniques ou professionnels de santé.',
      'Prestataires immobiliers, bureaux, hôteliers, transporteurs, organisateurs d’événements, conciergeries et partenaires opérationnels.',
      'Prestataires techniques : hébergement, email, outils de gestion, sécurité, analytics ou CRM.',
      'Autorités administratives, judiciaires, fiscales ou réglementaires lorsque la loi l’exige.',
    ],
  },
  {
    title: 'Transferts internationaux',
    paragraphs: [
      'Compte tenu de l’activité internationale de Bosphoras, certaines données peuvent être traitées ou transmises hors de l’Union européenne, notamment en Turquie ou dans le pays d’intervention d’un partenaire ou prestataire.',
      'Ces transferts sont limités à ce qui est nécessaire à la demande du client et peuvent être encadrés par des garanties appropriées lorsque la réglementation l’exige.',
      'Le client reconnaît que certaines démarches internationales nécessitent par nature l’échange d’informations avec des professionnels situés hors de son pays de résidence.',
    ],
  },
  {
    title: 'Durée de conservation',
    paragraphs: [
      'Les données sont conservées pendant une durée proportionnée à la finalité poursuivie.',
      'Les demandes non suivies d’une relation commerciale peuvent être conservées pendant une durée raisonnable à des fins de suivi, preuve ou sécurité.',
      'Les données liées à une relation contractuelle, facturation ou obligation légale peuvent être conservées pendant les durées nécessaires au respect des obligations comptables, fiscales, légales et contentieuses.',
      'Les données confidentielles ou sensibles peuvent être supprimées ou anonymisées plus rapidement lorsqu’elles ne sont plus nécessaires.',
    ],
  },
  {
    title: 'Sécurité et confidentialité',
    paragraphs: [
      'Bosphoras met en œuvre des mesures raisonnables pour protéger les données contre l’accès non autorisé, la perte, l’altération, la divulgation ou l’utilisation abusive.',
      'L’accès aux données est limité aux personnes et prestataires ayant besoin d’en connaître pour traiter la demande.',
      'Aucun système n’étant totalement infaillible, Bosphoras ne peut garantir une sécurité absolue mais s’engage à appliquer une vigilance proportionnée à la sensibilité des informations traitées.',
    ],
  },
  {
    title: 'Droits des personnes',
    paragraphs: [
      'Conformément au RGPD, toute personne concernée peut, selon les conditions légales applicables, exercer ses droits d’accès, rectification, effacement, limitation, opposition, portabilité et retrait du consentement.',
      'Les demandes peuvent être adressées à : contact@bosphoras.com.',
      'Une pièce justificative d’identité peut être demandée en cas de doute raisonnable sur l’identité du demandeur.',
      'La personne concernée peut également introduire une réclamation auprès de l’autorité de contrôle compétente, notamment la CNIL en France.',
    ],
  },
  {
    title: 'Cookies et traceurs',
    paragraphs: [
      'Le site peut utiliser des cookies ou technologies similaires pour assurer son fonctionnement, mesurer l’audience ou améliorer l’expérience utilisateur.',
      'Les modalités détaillées sont précisées dans la Politique cookies du site.',
    ],
  },
  {
    title: 'Modification de la politique',
    paragraphs: [
      'Panorama Grup peut modifier la présente politique afin de l’adapter à l’évolution du site, des services, des outils utilisés ou de la réglementation.',
      'La version applicable est celle publiée sur le site à la date de consultation.',
    ],
  },
  {
    title: 'Validation juridique',
    paragraphs: [
      'Cette politique constitue une base de travail juridique destinée au site Bosphoras. Une validation par un professionnel du droit est recommandée avant publication définitive.',
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalContentPage
      locale={locale}
      currentPath="/confidentialite"
      eyebrow="Bosphoras · Données personnelles"
      title="Politique de confidentialité"
      intro="Cette politique explique comment Bosphoras, marque de Panorama Grup, traite les données personnelles et informations transmises dans le cadre de ses services de bureau privé."
      sections={sections}
    />
  );
}
