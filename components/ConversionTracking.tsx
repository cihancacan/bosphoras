'use client';
import { useEffect } from 'react';
import { trackConversion } from '@/lib/conversionAnalytics';
export function ConversionTracking() {
  useEffect(() => {
    const click = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest('a');
      if (!link) return;
      const href = link.getAttribute('href') || '';
      if (href.startsWith('tel:') || href.startsWith('mailto:')) {
        trackConversion('contact_click', { contact_method: href.startsWith('tel:') ? 'phone' : 'email' });
      } else if (link.dataset.ctaId) {
        trackConversion('assessment_cta_click', { cta_id: link.dataset.ctaId });
      }
    };
    document.addEventListener('click', click);
    return () => document.removeEventListener('click', click);
  }, []);
  return null;
}
