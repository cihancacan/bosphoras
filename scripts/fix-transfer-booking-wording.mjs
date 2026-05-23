import fs from 'node:fs';

const file = 'components/TransferBookingClient.tsx';

if (!fs.existsSync(file)) {
  console.log('[transfer wording] file not found, skipped');
  process.exit(0);
}

let content = fs.readFileSync(file, 'utf8');

const replacements = [
  ['Book your private chauffeur in Istanbul', 'Book your private driver in Istanbul'],
  ['Buchen Sie Ihren privaten Chauffeur in Istanbul', 'Buchen Sie Ihren privaten Fahrer in Istanbul'],
];

for (const [from, to] of replacements) {
  content = content.split(from).join(to);
}

fs.writeFileSync(file, content, 'utf8');
console.log('[transfer wording] EN/DE hero wording fixed');
