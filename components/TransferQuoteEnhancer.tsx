'use client';

// Legacy DOM enhancer disabled.
// The transfer booking component now calculates quotes directly with /api/transfer/quote.
// Keeping this component as a no-op prevents the old French-only DOM recalculation
// from overwriting round-trip prices on the first attempt.
export function TransferQuoteEnhancer() {
  return null;
}
