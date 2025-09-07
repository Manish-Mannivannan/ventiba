import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })
  const { data: { session } } = await supabase.auth.getSession()

  const url = req.nextUrl
  const isProtected =
    url.pathname.startsWith('/dashboard') ||
    url.pathname.startsWith('/api/secure')

  if (isProtected && !session) {
    const redirect = new URL('/signin', req.url)
    redirect.searchParams.set('redirect', url.pathname + url.search)
    return NextResponse.redirect(redirect)
  }
  return res
}

export const config = {
  matcher: ['/dashboard/:path*', '/api/secure/:path*'],
}
