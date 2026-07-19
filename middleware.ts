import { type NextRequest } from 'next/server'
import { createClient } from '@/utils/supabase/middleware'

export async function middleware(request: NextRequest) {
  // 1. Refresh the session (this also returns a response object)
  const response = await createClient(request)

  // 2. We need to check if the user is authenticated to protect /admin routes
  // But we have to create a server client to read the user state reliably
  const { createServerClient } = await import('@supabase/ssr')
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
  
  const supabase = createServerClient(supabaseUrl, supabaseKey, {
    cookies: {
      getAll: () => request.cookies.getAll(),
      setAll: () => {}, // Handled by createClient above
    }
  })

  const { data: { user } } = await supabase.auth.getUser()

  // 3. If accessing /admin and NOT logged in, redirect to /login
  if (request.nextUrl.pathname.startsWith('/admin') && !user) {
    const redirectUrl = request.nextUrl.clone()
    redirectUrl.pathname = '/login'
    return import('next/server').then(m => m.NextResponse.redirect(redirectUrl))
  }

  return response
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
