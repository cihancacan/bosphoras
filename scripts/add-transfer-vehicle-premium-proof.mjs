import fs from 'node:fs';

const file = 'components/TransferBookingClient.tsx';

if (!fs.existsSync(file)) {
  console.log('[transfer premium proof] file not found, skipped');
  process.exit(0);
}

let content = fs.readFileSync(file, 'utf8');

function replaceAll(from, to) {
  content = content.split(from).join(to);
}

replaceAll(
  "  const c = copy[l];\n  const vehicles = vehicleBase.map((car) => ({ ...car, ...vehicleMeta[l][car.id] }));",
  "  const c = copy[l];\n  const vehicleTrustLabel = l === 'fr'\n    ? 'Véhicule récent non-fumeur · chauffeur licencié · assistance jusqu’à la prise en charge'\n    : l === 'en'\n      ? 'Recent non-smoking vehicle · licensed driver · assistance until pickup'\n      : l === 'ru'\n        ? 'Новый автомобиль для некурящих · лицензированный водитель · поддержка до посадки'\n        : l === 'ar'\n          ? 'سيارة حديثة لغير المدخنين · سائق مرخص · مساعدة حتى الاستلام'\n          : l === 'de'\n            ? 'Neues Nichtraucherfahrzeug · lizenzierter Fahrer · Assistenz bis zur Abholung'\n            : l === 'es'\n              ? 'Vehículo reciente para no fumadores · chófer con licencia · asistencia hasta la recogida'\n              : l === 'it'\n                ? 'Veicolo recente non fumatori · autista autorizzato · assistenza fino al prelievo'\n                : l === 'pt'\n                  ? 'Veículo recente não fumador · motorista licenciado · assistência até à recolha'\n                  : 'Recent non-smoking vehicle · licensed driver · assistance until pickup';\n  const vehicles = vehicleBase.map((car) => ({ ...car, ...vehicleMeta[l][car.id] }));"
);

replaceAll(
  '<span>{quote?.tollPrice ? `${c.toll} ${eur(quote.tollPrice)} ${c.included}` : c.accordingRoute}</span></div></div><div className="md:text-right">',
  '<span>{quote?.tollPrice ? `${c.toll} ${eur(quote.tollPrice)} ${c.included}` : c.accordingRoute}</span></div></div><div className="md:text-right">'
);

replaceAll(
  '<p className="text-4xl font-black tracking-[-0.06em]">{quoteLoading ? \'...\' : eur(price)}</p><span className="mt-4 inline-flex rounded-full border border-black px-5 py-3 text-xs font-black uppercase tracking-[0.12em] text-black">{c.choose}</span>',
  '<p className="text-4xl font-black tracking-[-0.06em]">{quoteLoading ? \'...\' : eur(price)}</p><p className="mt-3 max-w-[260px] rounded-2xl bg-gray-50 px-4 py-3 text-[11px] font-bold leading-relaxed text-gray-700 md:ml-auto">{vehicleTrustLabel}</p><span className="mt-4 inline-flex rounded-full border border-black px-5 py-3 text-xs font-black uppercase tracking-[0.12em] text-black">{c.choose}</span>'
);

fs.writeFileSync(file, content);
console.log('[transfer premium proof] vehicle card proof line applied under price');
