export function trackConversion(event: string, parameters: Record<string, string>) {
  if (typeof window === 'undefined') return;
  try {
    const analytics = window as typeof window & { gtag?: (...args: unknown[]) => void };
    analytics.gtag?.('event', event, parameters);
  } catch { /* Analytics must not interrupt the visitor's task. */ }
}
