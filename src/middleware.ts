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
  const isDevBypass = process.env.NEXT_PUBLIC_DEV_BYPASS_AUTH === 'true';
  const { pathname } = request.nextUrl;

  // BYPASS DE DESENVOLVIMENTO: Redireciona sempre para o dashboard se tentar entrar em rotas de entrada
  if (isDevBypass) {
    if (pathname === '/' || pathname === '/login' || pathname === '/register') {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
    return NextResponse.next();
  }

  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey || supabaseUrl.includes('placeholder')) {
    // Se não estiver configurado e não houver bypass, redireciona para o login por segurança
    if (protectedRoutes.some((route) => pathname.startsWith(route))) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
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

  const isProtectedRoute = protectedRoutes.some((route) => pathname.startsWith(route));

  if (session && (pathname === '/login' || pathname === '/register' || pathname === '/')) {
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