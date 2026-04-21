
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
  '/leaderboard'
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
          return request.cookies.get(name)?.value;
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
  
  // Limpar a barra final para consistência
  const path = pathname === '/' ? '/' : pathname.replace(/\/$/, '');
  
  const isPublicRoute = publicRoutes.includes(path) || 
                        path.startsWith('/auth/callback') ||
                        path.startsWith('/verify'); // Verificação de certificados é sempre pública
                        
  const isProtectedRoute = protectedRoutes.some(route => 
    path.startsWith(route)
  );

  // Redirecionar para login se tentar aceder a rota protegida sem sessão
  if (!session && isProtectedRoute) {
    const redirectUrl = new URL(`/login`, request.url);
    redirectUrl.searchParams.set('redirect', pathname);
    return NextResponse.redirect(redirectUrl);
  }

  // Redirecionar utilizadores logados para o dashboard se tentarem ir para o login
  if (session && path === '/login') {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
