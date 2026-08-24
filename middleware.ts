import { type NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/middleware'
import { getBlockedIps, reportVisit } from '@/utils/siem'

// ─── Paths that should NOT be logged / blocked (internal / API routes) ────
const SIEM_EXCLUDED_PREFIXES = ['/admin', '/login', '/api/', '/_next/']

function isExcludedFromSiem(pathname: string): boolean {
  return SIEM_EXCLUDED_PREFIXES.some((prefix) => pathname.startsWith(prefix))
}

/** Extract best-effort real IP from Next.js / Edge headers */
function getClientIp(req: NextRequest): string {
  return (
    req.headers.get('x-real-ip') ??
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    '0.0.0.0'
  )
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const isPublicRoute = !isExcludedFromSiem(pathname)

  // ── Mini-SIEM: IP blocking check (public routes only) ──────────────────
  if (isPublicRoute) {
    const ip = getClientIp(request)

    // getBlockedIps() uses a 5-min in-memory cache — no round-trip every request
    const blockedIps = await getBlockedIps()

    if (blockedIps.has(ip)) {
      return new NextResponse(
        JSON.stringify({ error: 'Access denied', code: 'IP_BLOCKED' }),
        {
          status: 403,
          headers: { 'Content-Type': 'application/json' },
        }
      )
    }

    // ── Mini-SIEM: Fire-and-forget visitor logging ─────────────────────
    // Do NOT await — this must never add latency to the visitor's response
    reportVisit({
      ipAddress: ip,
      userAgent: request.headers.get('user-agent') ?? '',
      path: pathname,
      method: request.method,
    }).catch(() => {
      // reportVisit already swallows errors internally, but catch here too
      // in case the function itself throws synchronously
    })
  }

  // ── 1. Supabase session refresh ────────────────────────────────────────
  const response = await createClient(request)

  // ── 2. Protect /admin routes ───────────────────────────────────────────
  const { createServerClient } = await import('@supabase/ssr')
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!

  const supabase = createServerClient(supabaseUrl, supabaseKey, {
    cookies: {
      getAll: () => request.cookies.getAll(),
      setAll: () => {}, // Handled by createClient above
    },
  })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (pathname.startsWith('/admin') && !user) {
    const redirectUrl = request.nextUrl.clone()
    redirectUrl.pathname = '/login'
    return NextResponse.redirect(redirectUrl)
  }

  return response
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
