/**
 * Bosphoras wordmark — unified across the public site.
 *
 * Uses the site's Inter typeface rather than an image: crisp at every size,
 * selectable, accessible and matched to the reference #2 visual direction.
 * The travel signature has two lines with the same optical width.
 */
export function BrandWordmark({ variant = 'primary' }: { variant?: 'primary' | 'travel' }) {
  return (
    <span className="inline-flex max-w-full shrink-0 flex-col items-stretch whitespace-nowrap text-[#193344]">
      <span className="block font-sans text-[1.3rem] font-light uppercase leading-none tracking-[0.19em] md:text-[1.48rem]">
        Bosphoras
      </span>
      {variant === 'travel' && (
        <>
          <span className="sr-only">Luxury Stays</span>
          <span aria-hidden="true" className="mt-[0.37rem] flex w-full justify-between font-sans text-[0.57rem] font-normal uppercase leading-none text-[#53616b] md:text-[0.65rem]">
            {Array.from('LUXURYSTAYS').map((letter, index) => (
              <span key={index}>{letter}</span>
            ))}
          </span>
        </>
      )}
    </span>
  );
}
