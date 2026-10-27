/** Review surface only. Never enable this preparation page on production. */
export function isHotelSearchPreview(env: { VERCEL_ENV?: string; VERCEL_GIT_COMMIT_REF?: string; NODE_ENV?: string } = process.env): boolean {
  return env.VERCEL_ENV === 'preview'
    ? env.VERCEL_GIT_COMMIT_REF === 'feature/luxury-travel-seo-destinations-20261012'
    : !env.VERCEL_ENV && env.NODE_ENV === 'development';
}
