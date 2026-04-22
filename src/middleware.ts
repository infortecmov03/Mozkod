import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

const publicRoutes = [
  '/', 
  '/login', 
  '/register', 
  '/auth/callback', 
  '/terms', 
  '/privacy', 
  '/security', 
  '/modules', 
  '/leaderboard',
  '/documentation',
  '/partners'
];
const protectedRoutes = ['/dashboard', '/learn', '/certifications', '/settings', '/profile', '/community'];

export async function middleware(request: NextRequest) {
  // BYPASS DE DESENVOLVIMENTO
  const isDevBypass = process.env.NEXT_PUBLIC_DEV_BYPASS_AUTH === 'true';
  
  if (isDevBypass) {
    return NextResponse.next();
  }

  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    console.error('Middleware: Supabase env vars not set!');
    return response;
  }

  const supabase = createServerClient(
    supabaseUrl,
    supabaseAnonKey,
    {
      cookies: {
        get(name: string) {
          const cookie = request.cookies.get(name);
          if (cookie && cookie.value.startsWith('base64-')) {
            response.cookies.delete(name);
            return undefined;
          }
          return cookie?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          response.cookies.set({ name, value, ...options });
        },
        remove(name: string, options: CookieOptions) {
          response.cookies.set({ name, value: '', ...options });
        },
      },
    }
  );

  const { data: { session } } = await supabase.auth.getSession();

  const { pathname } = request.nextUrl;

  const isProtectedRoute = protectedRoutes.some((route) => pathname.startsWith(route));

  if (session && publicRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  if (!session && isProtectedRoute) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return response;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
