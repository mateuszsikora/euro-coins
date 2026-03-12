/** Result of a fetch operation. Discriminated union on `ok`. */
export type FetchResult<T = undefined> = { ok: true; data: T } | { ok: false; error: Error };

async function request(url: string, method: 'GET' | 'HEAD'): Promise<Response> {
  try {
    return await fetch(url, { method });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    throw new Error(`Failed to fetch ${url}: ${message}`);
  }
}

/**
 * Fetches an image and returns the raw buffer.
 * Never throws — returns `{ ok: false, error }` on failure.
 */
export async function fetchImage(url: string): Promise<FetchResult<Buffer>> {
  try {
    const response = await request(url, 'GET');
    if (!response.ok) {
      return { ok: false, error: new Error(`HTTP ${response.status} for ${url}`) };
    }
    const data = Buffer.from(await response.arrayBuffer());
    return { ok: true, data };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err : new Error(String(err)) };
  }
}

/**
 * HEAD-checks a URL to verify it's reachable.
 * Never throws — returns `{ ok: false, error }` on failure.
 */
export async function checkImage(url: string): Promise<FetchResult> {
  try {
    const response = await request(url, 'HEAD');
    if (!response.ok) {
      return { ok: false, error: new Error(`HTTP ${response.status} for ${url}`) };
    }
    return { ok: true, data: undefined };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err : new Error(String(err)) };
  }
}
