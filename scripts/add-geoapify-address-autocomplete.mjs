import fs from 'node:fs';

const file = 'components/TransferBookingClient.tsx';
if (!fs.existsSync(file)) process.exit(0);
let s = fs.readFileSync(file, 'utf8');
if (s.includes('type AddressSuggestion =')) {
  console.log('[geoapify autocomplete] already installed');
  process.exit(0);
}

s = s.replace(
  "type Quote = { source: string; estimatedMinutes: number; billedMinutes: number; distanceKm: number; googleStatus?: number; googleError?: string };",
  "type Quote