import type { Metadata } from 'next';
import { LegalContentPage } from '@/components/LegalContentPage';
import { buildMetadata } from '@/lib/seo';

const locale = 'fr' as const;

export const metadata: Metadata = buildMetadata({
  locale,
  path: '/confidentialite',
  title: 'Politique de confidentialité | Bosphoras',
  description:
    'Politique de confidentialité Bosphoras : données collectées, finalités, bases légales, destinataires, durée de conservation, sécurité, transferts internationaux et droits RGPD.',
});

const sections = [
  {
    title: 'Responsable du traitement',
    paragraphs: [
      'La présente Politique de confidentialité explique comment Panorama Grup, exploitant la marque Bosphoras, collecte, utilise, conserve et protège les données personnelles transmises dans le cadre du site et des services Bosphoras.',
      'Responsable du traitement : Panorama Grup.',
      'Adresse : 88 Avenue des Ternes, 75017 Paris, France.',
      'SIRET : 80962988400036.',
      'Email de contact : contact@bosphoras.com.',
      'Téléphone : 01 88 84 22 22.',
    ],
  },
  {
    title: 'Données susceptibles d’être collectées',
    paragraphs: [
      'Dans le cadre d’une demande de contact, d’un diagnostic privé, d’un accompagnement ou d’une prestation, Bosphoras peut collecter des données personnelles nécessaires à la compréhension et au traitement de la demande.',
      'Les données collectées dépendent de la nature du service demandé et du niveau d’accompagnement souhaité.',
    ],
    bullets: [
      'Données d’identification : nom, prénom, nationalité, date de naissance si nécessaire, documents d’identité lorsque requis.',
      'Données de contact : email, téléphone, adresse, pays de résidence, ville de résidence.',
      'Données familiales ou professionnelles : situation familiale, activité, société, fonction, projet de résidence, projet d’installation ou d’investissement.',
      'Données patrimoniales ou financières lorsque nécessaires à l’analyse du projet : budget, capacité d’investissement, origine déclarée des fonds, préférences de structuration.',
      'Données relatives aux demandes : ville ciblée, type de service recherché, préférences, contraintes, calendrier, niveau de confidentialité attendu.',
      'Données techniques : adresse IP, type de navigateur, pages consultées, données de navigation, cookies ou traceurs selon les choix de l’utilisateur.',
    ],
  },
  {
    title: 'Données sensibles',
    paragraphs: [
      'Certaines demandes peuvent conduire le client à transmettre volontairement des informations sensibles, notamment liées à la santé, à la situation familiale, à la fiscalité, au patrimoine, à la sécurité personnelle, à la résidence, aux documents d’identité ou à l’origine des fonds.',
      'Bosphoras limite la collecte de ces informations au strict nécessaire et les traite avec une exigence renforcée de confidentialité.',
      'Lorsque la demande implique un professionnel réglementé, les données nécessaires peuvent être transmises uniquement aux professionnels concernés et dans la limite de la mission demandée.',
    ],
  },
  {
    title: 'Finalités du traitement',
    paragraphs: [
      'Les données personnelles sont traitées pour permettre à Bosphoras de répondre aux demandes, organiser les échanges, analyser les besoins et coordonner les services sollicités.',
    ],
    bullets: [
      'Répondre aux demandes de contact, diagnostic privé, information ou rendez-vous.',
      'Analyser la situation du client et déterminer les services pertinents.',
      'Préparer une proposition commerciale, un devis, une lettre de mission ou un accompagnement.',
      'Coordonner les prestataires, professionnels ou partenaires nécessaires à l’exécution de la demande.',
      'Assurer le suivi de la relation client, la qualité du service et la continuité de l’accompagnement.',
      'Respecter les obligations légales, fiscales, comptables, contractuelles ou de conformité applicables.',
      'Prévenir les fraudes, abus, demandes illicites, risques réputationnels ou risques de non-conformité.',
      'Améliorer le site, la sécurité, l’expérience utilisateur et la pertinence des services proposés.',
    ],
  },
  {
    title: 'Bases légales',
    paragraphs: [
      'Selon les cas, les traitements reposent sur l’une ou plusieurs des bases légales suivantes.',
    ],
    bullets: [
      'Le consentement de la personne concernée, notamment lorsqu’elle transmet volontairement des informations dans un formulaire ou lors d’un échange.',
      'L’exécution de mesures précontractuelles ou contractuelles lorsque la demande vise une prestation ou une proposition commerciale.',
      'L’intérêt légitime de Panorama Grup à répondre aux demandes, sécuriser ses services, organiser son activité et protéger ses intérêts.',
      'Le respect d’une obligation légale lorsque certaines données doivent être conservées pour des raisons comptables, fiscales, réglementaires ou de conformité.',
    ],
  },
  {
    title: 'Destinataires des données',
    paragraphs: [
      'Les données sont destinées aux équipes habilitées de Bosphoras / Panorama Grup et, lorsque cela est nécessaire, à certains prestataires, partenaires ou professionnels intervenant dans le traitement de la demande.',
      'Les données ne sont pas vendues à des tiers. Elles ne sont transmises que lorsque cela est utile, nécessaire, autorisé ou imposé par la loi.',
    ],
    bullets: [
      'Professionnels indépendants : avocats, fiscalistes, comptables, assureurs, médecins, cliniques, banques, agents immobiliers ou consultants spécialisés.',
      'Prestataires opérationnels : chauffeurs, hôtels, bureaux, transporteurs, organisateurs d’événements, conciergeries, services de réservation.',
      'Prestataires techniques : hébergeur, outils de communication, outils de sécurité, outils CRM, outils de mesure d’audience ou prestataires informatiques.',
      'Autorités compétentes, administrations ou organismes lorsque la loi l’exige ou lorsque la demande du client implique une démarche officielle.',
    ],
  },
  {
    title: 'Transferts hors Union européenne',
    paragraphs: [
      'Bosphoras intervient notamment en Turquie et peut coordonner des partenaires ou prestataires situés hors de l’Union européenne.',
      'Des données peuvent donc être transférées ou consultées depuis des pays tiers lorsque cela est nécessaire à l’exécution de la demande, notamment pour organiser un service, transmettre un dossier à un professionnel ou préparer un déplacement.',
      'Bosphoras veille à limiter ces transferts aux informations nécessaires et à privilégier des prestataires présentant des garanties de confidentialité adaptées.',
    ],
  },
  {
    title: 'Durée de conservation',
    paragraphs: [
      'Les données sont conservées pour une durée proportionnée aux finalités poursuivies, à la nature de la relation et aux obligations légales applicables.',
    ],
    bullets: [
      'Demandes de contact non suivies d’une relation commerciale : durée raisonnable nécessaire au suivi de la demande, sauf opposition ou obligation contraire.',
      'Dossiers clients : durée de la relation commerciale puis durée nécessaire au respect des obligations légales, fiscales, comptables ou probatoires.',
      'Documents contractuels, factures et pièces comptables : durée légale applicable.',
      'Données de prospection : jusqu’au retrait du consentement ou opposition de la personne concernée.',
      'Cookies et traceurs : selon la durée indiquée dans la Politique cookies.',
    ],
  },
  {
    title: 'Sécurité et confidentialité',
    paragraphs: [
      'Bosphoras met en œuvre des mesures raisonnables pour protéger les données contre l’accès non autorisé, la perte, l’altération, la divulgation ou l’usage abusif.',
      'L’accès aux données est limité aux personnes ou prestataires ayant besoin d’en connaître pour traiter la demande ou assurer le suivi de la relation.',
      'Malgré ces mesures, aucun système informatique ou canal de communication ne peut garantir une sécurité absolue. Les utilisateurs sont invités à éviter l’envoi d’informations sensibles inutiles par des canaux non sécurisés.',
    ],
  },
  {
    title: 'Droits des personnes concernées',
    paragraphs: [
      'Conformément à la réglementation applicable, les personnes concernées peuvent exercer leurs droits sur leurs données personnelles.',
    ],
    bullets: [
      'Droit d’accès aux données les concernant.',
      'Droit de rectification des données inexactes ou incomplètes.',
      'Droit d’effacement lorsque les conditions légales sont réunies.',
      'Droit à la limitation du traitement.',
      'Droit d’opposition pour motifs légitimes ou à la prospection.',
      'Droit à la portabilité lorsque ce droit est applicable.',
      'Droit de retirer un consentement à tout moment, sans remettre en cause la licéité du traitement antérieur.',
    ],
  },
  {
    title: 'Exercice des droits',
    paragraphs: [
      'Toute demande relative aux données personnelles peut être envoyée à : contact@bosphoras.com.',
      'Afin de protéger les données, Bosphoras peut demander une vérification d’identité avant de traiter une demande sensible ou ambiguë.',
      'La personne concernée peut également introduire une réclamation auprès de l’autorité de contrôle compétente, notamment la CNIL en France, si elle estime que ses droits ne sont pas respectés.',
    ],
  },
  {
    title: 'Modification de la politique',
    paragraphs: [
      'Panorama Grup peut modifier la présente Politique de confidentialité pour tenir compte de l’évolution du site, des services, des outils utilisés, des obligations légales ou de l’organisation de Bosphoras.',
      'La version applicable est celle publiée sur le site à la date de consultation.',
    ],
  },
  {
    title: 'Validation juridique',
    paragraphs: [
      'Cette Politique de confidentialité constitue une base de travail juridique. Une validation par un professionnel du droit est recommandée avant publication définitive, notamment si les outils, prestataires ou pays d’intervention évoluent.',
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
      intro="Cette politique explique comment Bosphoras, marque de Panorama Grup, collecte, utilise, protège et conserve les données personnelles transmises dans le cadre de ses services."
      sections={sections}
    />
  );
}
