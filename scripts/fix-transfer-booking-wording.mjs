import fs from 'node:fs';

const file = 'components/TransferBookingClient.tsx';

if (!fs.existsSync(file)) {
  console.log('[transfer patch] file not found, skipped');
  process.exit(0);
}

let content = fs.readFileSync(file, 'utf8');

function replaceAll(from, to) {
  content = content.split(from).join(to);
}

replaceAll('Book your private chauffeur in Istanbul', 'Book your private driver in Istanbul');
replaceAll('Buchen Sie Ihren privaten Chauffeur in Istanbul', 'Buchen Sie Ihren privaten Fahrer in Istanbul');
replaceAll('Math.round(oneWayPrice * 2 * 0.85)', 'Math.round(oneWayPrice * 2)');
replaceAll('Offre aller-retour : -15% sur le global', '');
replaceAll('Aller-retour : retour ajouté au total', '');
replaceAll('Round trip offer: 15% off the total', '');
replaceAll('Round trip: return added to total', '');
replaceAll('Remise aller-retour -15%', 'Aller-retour');
replaceAll('Round trip discount -15%', 'Round trip');

// Real dezoom: object-contain shows the full home.driver.jpg instead of cropping it.
replaceAll('className="hidden object-cover md:block"', 'className="hidden object-contain object-center md:block"');
replaceAll('className="hidden object-cover object-center scale-[0.92] md:block"', 'className="hidden object-contain object-center md:block"');
replaceAll('className="object-cover" sizes="100vw"', 'className="object-contain object-center" sizes="100vw"');
replaceAll('className="object-cover object-center scale-[0.92]" sizes="100vw"', 'className="object-contain object-center" sizes="100vw"');
replaceAll('className="object-cover object-center scale-[0.92]"', 'className="object-contain object-center"');

const premiumPaymentUi = content.includes("type Currency = 'EUR' | 'USD' | 'GBP' | 'CHF'") && content.includes("type PaymentMode = 'online_full' | 'deposit_onboard'");

if (premiumPaymentUi) {
  fs.writeFileSync(file, content, 'utf8');
  console.log('[transfer booking] premium payment UI detected; legacy round-trip patch skipped');
  process.exit(0);
}

replaceAll('className="object-cover"', 'className="object-contain object-center"');

fs.writeFileSync(file, content, 'utf8');
console.log('[transfer booking] hero image uses object-contain and no crop');
