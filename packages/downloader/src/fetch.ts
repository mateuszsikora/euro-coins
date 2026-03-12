/** Result of a fetch operation. Discriminated union on `ok`. */
export type FetchResult<T = undefined> = { ok: true; data: T } | { ok: false; error: Error };

const DEFAULT_TIMEOUT = 30_000;

async function request(url: string, method: 'GET' | 'HEAD'): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), DEFAULT_TIMEOUT);
  try {
    return await fetch(url, { method, signal: controller.signal });
  } catch (err) {
    if (controller.signal.aborted) {
      throw new Error(`Request timed out after ${DEFAULT_TIMEOUT}ms for ${url}`);
    }
    const message = err instanceof Error ? err.message : String(err);
    throw new Error(`Failed to fetch ${url}: ${message}`);
  } finally {
    clearTimeout(timer);
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
