export function isAssessmentHref(href: string): boolean {
  return /(?:diagnostic-prive|private-assessment|chastnaya-konsultatsiya|تقييم-خاص)/.test(href);
}

export function withAssessmentContext(
  href: string,
  sourcePath: string,
  sourceTitle: string,
  subject?: string
): string {
  if (!isAssessmentHref(href)) return href;

  const additions: string[] = [];
  if (sourcePath && !/[?&]source=/.test(href)) additions.push('source=' + encodeURIComponent(sourcePath));
  if (sourceTitle && !/[?&]source_title=/.test(href)) additions.push('source_title=' + encodeURIComponent(sourceTitle));
  if (subject && !/[?&]subject=/.test(href)) additions.push('subject=' + encodeURIComponent(subject));

  if (!additions.length) return href;
  return href + (href.includes('?') ? '&' : '?') + additions.join('&');
}
