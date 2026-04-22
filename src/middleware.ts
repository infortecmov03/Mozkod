import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const isDevBypass = process.env.NEXT_PUBLIC_DEV_BYPASS_AUTH === 'true';
  const { pathname } = request.nextUrl;

  const protectedRoutes = ['/dashboard', '/learn', '/certifications', '/profile', '/community'];
  const isProtectedRoute = protectedRoutes.some((route) => pathname.startsWith(route));

  // No modo bypass, verificamos o localStorage no cliente, mas no middleware
  // apenas deixamos passar para evitar loops, exceto se as chaves forem placeholder
  if (isDevBypass) {
    return NextResponse.next();
  }

  let response = NextResponse.next({
    request: { headers: request.headers },
  });

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || supabaseUrl.includes('placeholder')) {
    if (isProtectedRoute) return NextResponse.redirect(new URL('/login', request.url));
    return response;
  }

  const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      get(name: string) { return request.cookies.get(name)?.value },
      set(name: string, value: string, options: CookieOptions) {
        response.cookies.set({ name, value, ...options });
      },
      remove(name: string, options: CookieOptions) {
        response.cookies.set({ name, value: '', ...options });
      },
    },
  });

  const { data: { session } } = await supabase.auth.getSession();

  if (session && (pathname === '/login' || pathname === '/register')) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  if (!session && isProtectedRoute) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};