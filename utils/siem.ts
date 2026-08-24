/**
 * utils/siem.ts
 * Mini-SIEM integration client for portfolio-basic.
 *
 * Provides two functions used by middleware.ts:
 *  - reportVisit()   → fire-and-forget visitor log to SIEM
 *  - getBlockedIps() → cached blocked IP list from SIEM
 *
 * Auth: API key passed as "Authorization: Bearer <key>" header.
 * Both endpoints are SDK-facing and accept API key auth (not JWT).
 */

const SIEM_URL = process.env.MINI_SIEM_URL ?? "https://microgaze.vercel.app";
const SIEM_API_KEY = process.env.MINI_SIEM_API_KEY ?? "";

/** Shared auth headers for every SIEM request */
const siemHeaders = () => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${SIEM_API_KEY}`,
});

// ─── Visitor / Threat Reporting ────────────────────────────────────────────

export interface VisitPayload {
  ipAddress: string;
  userAgent: string;
  /** The URL path being visited, e.g. "/", "/projects" */
  path: string;
  /** HTTP method, defaults to GET */
  method?: string;
}

/**
 * Reports a portfolio page visit to Mini-SIEM as a security log entry.
 * This is fire-and-forget — the promise is intentionally NOT awaited by callers
 * so it never blocks the response to the visitor.
 */
export async function reportVisit(payload: VisitPayload): Promise<void> {
  if (!SIEM_API_KEY) return; // Silently skip if key is not configured

  try {
    await fetch(`${SIEM_URL}/api/detection/threats`, {
      method: "POST",
      headers: siemHeaders(),
      body: JSON.stringify({
        ipAddress: payload.ipAddress,
        action: `PORTFOLIO_VISIT:${payload.method ?? "GET"}:${payload.path}`,
        severity: "Info",
        userAgent: payload.userAgent,
        decision: "LOG",
        score: 0,
        accumulatedScore: 0,
        matchedRules: [],
      }),
    });
  } catch {
    // Silent fail — SIEM unavailability must never affect portfolio visitors
  }
}

// ─── Blocked IP List (with in-memory cache) ────────────────────────────────

interface BlocklistCache {
  ips: Set<string>;
  fetchedAt: number;
}

/** In-memory cache; lives for the lifetime of the Edge runtime instance */
let blocklistCache: BlocklistCache | null = null;

/** Cache TTL: 5 minutes in milliseconds */
const CACHE_TTL_MS = 5 * 60 * 1000;

/**
 * Returns the current set of blocked IPs from Mini-SIEM.
 * Results are cached in-memory for CACHE_TTL_MS to avoid a SIEM round-trip
 * on every single portfolio request.
 *
 * Returns an empty Set on failure — fail-open to avoid blocking real visitors
 * if SIEM is temporarily unreachable.
 */
export async function getBlockedIps(): Promise<Set<string>> {
  if (!SIEM_API_KEY) return new Set();

  const now = Date.now();

  // Return cached result if still fresh
  if (blocklistCache && now - blocklistCache.fetchedAt < CACHE_TTL_MS) {
    return blocklistCache.ips;
  }

  try {
    const res = await fetch(`${SIEM_URL}/api/blocked/list`, {
      headers: siemHeaders(),
      // Edge runtime cache: bypass Next.js data cache, always hit SIEM directly
      cache: "no-store",
    });

    if (!res.ok) return blocklistCache?.ips ?? new Set();

    const data = (await res.json()) as { blocked_ips?: string[] };
    const ipSet = new Set<string>(data.blocked_ips ?? []);

    blocklistCache = { ips: ipSet, fetchedAt: now };
    return ipSet;
  } catch {
    // Fail-open: if SIEM is down, don't block anyone
    return blocklistCache?.ips ?? new Set();
  }
}
