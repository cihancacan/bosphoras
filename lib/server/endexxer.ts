const DEFAULT_ENDEXXER_API_URL = 'https://endexer-api.cnkylmz35.workers.dev';

type EndexxerQueryValue = string | number | boolean | null | undefined;

export class EndexxerApiError extends Error {
  constructor(
    message: string,
    readonly status: number,
  ) {
    super(message);
    this.name = 'EndexxerApiError';
  }
}

export function isEndexxerConfigured() {
  return Boolean(process.env.ENDEXXER_API_KEY);
}

export async function endexxerGet<T>(
  path: `/api/${string}`,
  query: Record<string, EndexxerQueryValue> = {},
): Promise<T> {
  const apiKey = process.env.ENDEXXER_API_KEY;
  if (!apiKey) {
    throw new Error('ENDEXXER_API_KEY is not configured.');
  }

  const baseUrl = process.env.ENDEXXER_API_URL || DEFAULT_ENDEXXER_API_URL;
  const url = new URL(path, baseUrl);

  for (const [name, value] of Object.entries(query)) {
    if (value !== null && value !== undefined) {
      url.searchParams.set(name, String(value));
    }
  }

  const apiKeyHeader = process.env.ENDEXXER_API_KEY_HEADER || 'x-api-key';
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      [apiKeyHeader]: apiKey,
    },
    cache: 'no-store',
    signal: AbortSignal.timeout(10_000),
  });

  const payload = await response.json().catch(() => null);
  if (!response.ok) {
    const detail = payload && typeof payload === 'object' && 'message' in payload
      ? `: ${String(payload.message)}`
      : '';
    throw new EndexxerApiError(`Endexxer API returned ${response.status}${detail}`, response.status);
  }

  return payload as T;
}
