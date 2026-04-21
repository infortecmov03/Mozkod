import { createServerClient } from '@supabase/ssr';
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
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return response;
  }

  const supabase = createServerClient(
    supabaseUrl,
    supabaseAnonKey,
    {
      cookies: {
        get(name: string) {
          const cookie = request.cookies.get(name);
          if (!cookie) return;

          const { value } = cookie;

          try {
            const parsed = JSON.parse(value);
            if (typeof parsed === 'string') {
              return parsed;
            }
          } catch (e) {
            // ignore
          }

          return value;
        },
        set(name: string, value: string, options: any) {
          response.cookies.set({
            name,
            value,
            ...options,
          });
        },
        remove(name: string, options: any) {
          response.cookies.set({
            name,
            value: '',
            ...options,
          });
        },
      },
    }
  );

  const { data: { session } } = await supabase.auth.getSession();

  const { pathname } = request.nextUrl;

  if (session && publicRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  if (!session && protectedRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return response;
}

export const config = {
  matcher: [
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
    '/partners',
    '/dashboard',
    '/learn/:path*',
    '/certifications/:path*',
    '/settings',
    '/profile',
    '/community/:path*',
  ],
};
