export const siteLanguages = ['fr','en','ru','ar'] as const;
export type SiteLanguage = typeof siteLanguages[number];
export const siteLanguageCookie = 'bosphoras_language';

export function isSiteLanguage(value: string | undefined): value is SiteLanguage {
  return siteLanguages.includes(value as SiteLanguage);
}

export function preferredSiteLanguage(acceptLanguage: string | null, saved?: string): SiteLanguage {
  if (isSiteLanguage(saved)) return saved;
  const preferences = (acceptLanguage || '').split(',').map((entry,index)=>{
    const [tag,...parameters] = entry.trim().toLowerCase().split(';');
    const qualityParameter = parameters.find(parameter=>parameter.trim().startsWith('q='));
    const quality = qualityParameter === undefined ? 1 : Number(qualityParameter.trim().slice(2));
    return {language:tag.split('-')[0],quality,index};
  }).filter(item=>Number.isFinite(item.quality) && item.quality>0 && item.quality<=1)
    .sort((a,b)=>b.quality-a.quality || a.index-b.index);
  for (const preference of preferences) {
    if (isSiteLanguage(preference.language)) return preference.language;
  }
  return 'fr';
}

export function rememberSiteLanguage(language: SiteLanguage) {
  try {
    document.cookie = `${siteLanguageCookie}=${language}; Path=/; Max-Age=31536000; SameSite=Lax${window.location.protocol==='https:'?'; Secure':''}`;
  } catch { /* A blocked preference cookie must not prevent language navigation. */ }
}
