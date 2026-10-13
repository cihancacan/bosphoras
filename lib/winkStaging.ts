import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import path from 'node:path';

const IAM_TOKEN_URL = 'https://staging-iam.wink.travel/oauth2/token';
const PARTNER_HOST = 'staging-partner.wink.travel:443';
const ISTANBUL_GEONAME_ID = '745044';

type JsonRecord = Record<string, any>;

export type WinkStage = 'credentials' | 'token' | 'accounts-schema' | 'accounts' | 'search-schema' | 'search';

export class WinkStagingError extends Error {
  constructor(public readonly stage: WinkStage, public readonly grpcCode?: number) {
    super(`Wink staging failed at ${stage}`);
    this.name = 'WinkStagingError';
  }
}

async function atStage<T>(stage: WinkStage, action: () => Promise<T>) {
  try {
    return await action();
  } catch (error) {
    const grpcCode = typeof (error as { code?: unknown })?.code === 'number'
      ? (error as { code: number }).code
      : undefined;
    throw new WinkStagingError(stage, grpcCode);
  }
}

function requiredEnv(name: 'WINK_CLIENT_ID_V3' | 'WINK_CLIENT_SECRET_V3') {
  const value = process.env[name]?.trim();
  if (!value) throw new Error(`Missing ${name}`);
  return value;
}

async function getAccessToken() {
  const response = await fetch(IAM_TOKEN_URL, {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: requiredEnv('WINK_CLIENT_ID_V3'),
      client_secret: requiredEnv('WINK_CLIENT_SECRET_V3'),
      scope: 'inventory.read',
    }),
    cache: 'no-store',
  });

  if (!response.ok) throw new Error(`Wink token request failed (${response.status})`);
  const payload = (await response.json()) as { access_token?: string };
  if (!payload.access_token) throw new Error('Wink token response omitted access_token');
  return payload.access_token;
}

function unary(client: JsonRecord, methodNames: string[], request: JsonRecord, metadata: grpc.Metadata) {
  const methodName = methodNames.find((name) => typeof client[name] === 'function');
  if (!methodName) throw new Error(`Wink method unavailable: ${methodNames[0]}`);
  return new Promise<JsonRecord>((resolve, reject) => {
    client[methodName](request, metadata, { deadline: Date.now() + 45_000 }, (error: Error | null, value: JsonRecord) => {
      if (error) reject(error);
      else resolve(value);
    });
  });
}

function service(packageObject: JsonRecord, serviceName: 'Accounts' | 'Search') {
  const Constructor = packageObject?.wink?.partner?.v1?.[serviceName];
  if (typeof Constructor !== 'function') throw new Error(`Wink service unavailable: ${serviceName}`);
  return new Constructor(PARTNER_HOST, grpc.credentials.createSsl(), {
    'grpc.keepalive_time_ms': 30_000,
    'grpc.keepalive_permit_without_calls': 1,
  });
}

let cachedPackage: JsonRecord | undefined;

function partnerPackage() {
  if (cachedPackage) return cachedPackage;
  const protoRoot = path.join(process.cwd(), 'lib', 'wink-proto');
  const definition = protoLoader.loadSync(
    [
      path.join(protoRoot, 'wink', 'partner', 'v1', 'partner_account.proto'),
      path.join(protoRoot, 'wink', 'partner', 'v1', 'partner_search.proto'),
    ],
    {
      includeDirs: [protoRoot],
      keepCase: false,
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true,
    },
  );
  cachedPackage = grpc.loadPackageDefinition(definition) as JsonRecord;
  return cachedPackage;
}

function futureDate(days = 30) {
  const date = new Date();
  date.setUTCDate(date.getUTCDate() + days);
  return date.toISOString().slice(0, 10);
}

export type WinkStagingQuery = {
  scope: 'city' | 'country' | 'global';
  geoNameId?: string;
  countryCode?: string;
  checkIn: string;
  nights: number;
  adults: number;
  rooms: number;
  size?: number;
};

export async function searchStagingInventory(query: WinkStagingQuery) {
  if (query.scope === 'city' && !/^\d{3,12}$/.test(query.geoNameId ?? '')) throw new WinkStagingError('search');
  if (query.scope === 'country' && !/^[A-Z]{2}$/.test(query.countryCode ?? '')) throw new WinkStagingError('search');
  if (!['city', 'country', 'global'].includes(query.scope)) throw new WinkStagingError('search');
  if (!/^\d{4}-\d{2}-\d{2}$/.test(query.checkIn)) throw new WinkStagingError('search');
  if (!(query.nights >= 1 && query.nights <= 14 && query.adults >= 1 && query.adults <= 4 && query.rooms >= 1 && query.rooms <= 2)) throw new WinkStagingError('search');
  const token = await atStage('token', getAccessToken);
  const auth = new grpc.Metadata();
  auth.set('authorization', `Bearer ${token}`);

  const pkg = await atStage('accounts-schema', async () => partnerPackage());
  const accountsClient = service(pkg, 'Accounts');
  let accountsResponse: JsonRecord;
  try {
    await atStage('accounts', () => new Promise<void>((resolve, reject) =>
      accountsClient.waitForReady(Date.now() + 15_000, (error: Error | undefined) => error ? reject(error) : resolve())));
    accountsResponse = await atStage('accounts', () => unary(accountsClient, ['listAccounts', 'ListAccounts'], {}, auth));
  } finally { accountsClient.close(); }

  const accounts = Array.isArray(accountsResponse.accounts) ? accountsResponse.accounts : [];
  const account = accounts.find((item: JsonRecord) => /bosphoras luxury stays/i.test(String(item.name || '')));
  if (!account?.accountId) throw new WinkStagingError('accounts');

  const metadata = new grpc.Metadata();
  metadata.set('authorization', `Bearer ${token}`);
  metadata.set('managing-entity-id', String(account.accountId));

  const methodNames = query.scope === 'city' ? ['searchByCity', 'SearchByCity']
    : query.scope === 'country' ? ['rankByCountry', 'RankByCountry'] : ['rankGlobal', 'RankGlobal'];
  const region = query.scope === 'city' ? { geoNameId: query.geoNameId }
    : query.scope === 'country' ? { countryCode: query.countryCode } : {};
  const searchClient = service(pkg, 'Search');
  let response: JsonRecord;
  try {
    await atStage('search', () => new Promise<void>((resolve, reject) =>
      searchClient.waitForReady(Date.now() + 15_000, (error: Error | undefined) => error ? reject(error) : resolve())));
    response = await atStage('search', () => unary(searchClient, methodNames, {
      ...region,
      userSession: {
        itinerary: { startDate: query.checkIn, nights: query.nights, room: { adults: query.adults, quantity: query.rooms } },
        currencyCode: 'EUR', languageCode: 'en',
      },
      // No optional searchFilters; only itinerary required by Wink.
      page: 0, size: Math.min(5, Math.max(1, query.size ?? 5)), imageFormat: 'image/webp',
    }, metadata));
  } finally { searchClient.close(); }

  // Do not turn an unexpected gRPC payload into a misleading "0 hotels" result.
  const page = response.page ?? response;
  if (!page || typeof page !== 'object' || !Array.isArray(page.content)) {
    throw new WinkStagingError('search');
  }
  const hotels = page.content as JsonRecord[];
  const total = Number(page.totalElements ?? hotels.length);
  const numberOfElements = Number(page.numberOfElements ?? hotels.length);
  return {
    query,
    searchedAt: new Date().toISOString(),
    accountConfirmed: true,
    method: methodNames[1],
    resultCount: hotels.length,
    totalElements: Number.isFinite(total) ? total : hotels.length,
    totalPages: Number(page.totalPages ?? 0),
    pageNumberOfElements: Number.isFinite(numberOfElements) ? numberOfElements : hotels.length,
    pageSize: Number(page.size ?? query.size ?? 5),
    responseShapeValid: true,
    currency: String(response.currencyCode || 'EUR'),
    hotels: hotels.map((hotel: JsonRecord) => ({
      name: String(hotel.name || ''),
      city: String(hotel.city?.name || ''),
      starRating: Number(hotel.starRating || 0),
      available: hotel.available === true,
      roomTypesCount: Array.isArray(hotel.roomTypes) ? hotel.roomTypes.length : 0,
      heroImageUrl: typeof hotel.heroImageUrl === 'string' && /^https:\/\//.test(hotel.heroImageUrl) ? hotel.heroImageUrl : null,
    })),
  };
}

export async function searchIstanbulInventory() {
  const token = await atStage('token', getAccessToken);
  const auth = new grpc.Metadata();
  auth.set('authorization', `Bearer ${token}`);

  const accountsPackage = await atStage('accounts-schema', async () => partnerPackage());
  const accountsClient = service(accountsPackage, 'Accounts');
  const accountsResponse = await atStage('accounts', () => unary(accountsClient, ['listAccounts', 'ListAccounts'], {}, auth));
  accountsClient.close();

  const accounts = Array.isArray(accountsResponse.accounts) ? accountsResponse.accounts : [];
  const account = accounts.find((item: JsonRecord) => /bosphoras luxury stays/i.test(String(item.name || ''))) || accounts[0];
  if (!account?.accountId) throw new Error('No usable Wink account was returned');

  const metadata = new grpc.Metadata();
  metadata.set('authorization', `Bearer ${token}`);
  metadata.set('managing-entity-id', String(account.accountId));

  const searchPackage = await atStage('search-schema', async () => partnerPackage());
  const searchClient = service(searchPackage, 'Search');
  const response = await atStage('search', () =>
    unary(
      searchClient,
      ['searchByCity', 'SearchByCity'],
      {
        geoNameId: ISTANBUL_GEONAME_ID,
        userSession: {
          itinerary: { startDate: futureDate(), nights: 2, room: { adults: 2, quantity: 1 } },
          currencyCode: 'EUR',
          languageCode: 'en',
        },
        page: 0,
        size: 20,
        imageFormat: 'image/webp',
      },
      metadata,
    ),
  );
  searchClient.close();

  return {
    account: { accountId: String(account.accountId), name: String(account.name || '') },
    searchedAt: new Date().toISOString(),
    checkIn: futureDate(),
    page: response.page || response,
  };
}
