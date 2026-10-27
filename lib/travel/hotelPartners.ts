/** Public referral configuration only. Never put credentials or traveller data here. */
export type ProviderId = 'wink' | 'nuitee-connect' | 'expedia-creator' | 'travelpayouts' | 'ratehawk';
export const supplierResponsibilities = ['payment', 'confirmation', 'modification', 'cancellation', 'refund', 'customerSupport'] as const;
type Responsibility = typeof supplierResponsibilities[number];
export type HotelProvider = {
  id: ProviderId;
  name: string;
  status: 'pending' | 'approved' | 'suspended';
  mode: 'tracked-redirect' | 'supplier-hosted';
  merchantOfRecord: 'supplier';
  /** Reference to the applicable account contract, not merely a marketing page. */
  agreementReference: string;
  responsibilities: Record<Responsibility, boolean>;
  bookingHosts: readonly string[];
};

const pendingResponsibilities = Object.fromEntries(supplierResponsibilities.map(key => [key, false])) as Record<Responsibility, boolean>;
const pending = (id: ProviderId, name: string): HotelProvider => ({
  id, name, status: 'pending', mode: 'tracked-redirect', merchantOfRecord: 'supplier',
  agreementReference: '', responsibilities: { ...pendingResponsibilities }, bookingHosts: [],
});

// Public documentation is reviewed in docs/hotel-partners-batch-1.md.
// No account-specific agreement, deep link or attribution has yet been verified.
export const hotelProviders: readonly HotelProvider[] = [
  pending('wink', 'Wink'),
  { ...pending('nuitee-connect', 'Nuitée Connect'), mode: 'supplier-hosted' },
  pending('expedia-creator', 'Expedia'),
  pending('travelpayouts', 'Travelpayouts'),
  pending('ratehawk', 'RateHawk'),
];

export type HotelPartnerLink = {
  id: string;
  providerId: ProviderId;
  /** Exact editorial property identity; never infer a match from similar names. */
  hotelKey: string;
  /** Actual booking brand, especially for a network such as Travelpayouts. */
  bookingBrand: string;
  /** Required per booking brand/advertiser, even when the network is approved. */
  sellerLegalName: string;
  supplierAgreementReference: string;
  supplierResponsibilities: Record<Responsibility, boolean>;
  url: string;
  supportUrl: string;
  termsUrl: string;
  verifiedAt: string;
  reviewBy: string;
  propertyMatchEvidence: string;
  deepLinkEvidence: string;
  /** Dashboard click attribution evidence; an invented query parameter is not proof. */
  attributionEvidence: string;
};

// Deliberately empty: populate with real, account-issued links only after verification.
export const hotelPartnerLinks: readonly HotelPartnerLink[] = [];

export function hotelPartnerKey(destination: string, property: string): string {
  return `${destination}:${property}`;
}

function httpsUrl(value: string, hosts?: readonly string[]): boolean {
  try {
    const url = new URL(value);
    return url.protocol === 'https:' && !url.username && !url.password && !url.hash &&
      (!url.port || url.port === '443') && (!hosts || hosts.includes(url.hostname));
  } catch { return false; }
}

export function isVerifiedHotelLink(link: HotelPartnerLink, provider: HotelProvider | undefined, now = Date.now()): boolean {
  if (!provider || provider.id !== link.providerId || provider.status !== 'approved' ||
      !['tracked-redirect', 'supplier-hosted'].includes(provider.mode) || provider.merchantOfRecord !== 'supplier' ||
      !provider.agreementReference.trim() || !supplierResponsibilities.every(key => provider.responsibilities[key] === true)) return false;
  const verified = Date.parse(link.verifiedAt);
  const review = Date.parse(link.reviewBy);
  return Boolean(link.id.trim() && link.hotelKey.trim() && link.bookingBrand.trim() &&
    link.sellerLegalName.trim() && link.supplierAgreementReference.trim() &&
    supplierResponsibilities.every(key => link.supplierResponsibilities[key] === true) &&
    link.propertyMatchEvidence.trim() && link.deepLinkEvidence.trim() && link.attributionEvidence.trim() &&
    Number.isFinite(verified) && Number.isFinite(review) && verified <= now && review > now && review > verified &&
    httpsUrl(link.url, provider.bookingHosts) && httpsUrl(link.supportUrl) && httpsUrl(link.termsUrl));
}

export function getHotelPartnerLinks(hotelKey: string, links = hotelPartnerLinks, providers = hotelProviders, now = Date.now()): HotelPartnerLink[] {
  return links.filter(link => link.hotelKey === hotelKey &&
    isVerifiedHotelLink(link, providers.find(provider => provider.id === link.providerId), now));
}
