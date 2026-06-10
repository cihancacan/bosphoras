import fs from 'node:fs';

const file = 'components/TransferBookingClient.tsx';
if (!fs.existsSync(file)) {
  console.log('[geoapify autocomplete] file not found, skipped');
  process.exit(0);
}

console.log('[geoapify autocomplete] placeholder ready');
