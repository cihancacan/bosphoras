import fs from 'node:fs';

const file = 'components/TransferBookingClient.tsx';

if (!fs.existsSync(file)) {
  console.log('[transfer desktop google proof] file not found, skipped');
  process.exit(0);
}

let content = fs.readFileSync(file, 'utf8');

const oldDesktopTrust = '<p className="mt-5 max-w-xl text-sm font-semibold leading-7 text-white/70">{c.instant} · {c.tollIncluded} · {c.refundable}</p>';
const newDesktopTrust = '<div className="mt-5 grid gap-2 text-sm font-extrabold leading-6 text-white/85"><span>✓ {c.instant}</span><span>✓ {c.refundable}</span><span className="mt-1 inline-flex w-fit items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-[12px] font-black text-slate-950 shadow-lg"><span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-[13px] font-black"><span className="text-[#4285F4]">G</span></span><span className="text-[#fbbc04]">★★★★★</span><span>4,9/5 · 3 358 avis Google</span></span></div>';

const oldDesktopTrustAfterMobilePatch = '<div className="mt-5 grid gap-2 text-sm font-extrabold leading-5 text-white"><span>✓ {c.instant}</span><span>✓ {c.refundable}</span><span>✓ {c.tollIncluded}</span></div>';

content = content.split(oldDesktopTrust).join(newDesktopTrust);
content = content.split(oldDesktopTrustAfterMobilePatch).join(newDesktopTrust);

fs.writeFileSync(file, content, 'utf8');
console.log('[transfer desktop google proof] desktop trust points replaced with Google rating proof');
