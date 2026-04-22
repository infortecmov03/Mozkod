import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Rotas que exigem autenticação
  const protectedRoutes = ['/dashboard', '/learn', '/certifications', '/profile', '/community'];
  const isProtectedRoute = protectedRoutes.some((route) => pathname.startsWith(route));

  // Rota de autenticação (login/registo)
  const isAuthRoute = pathname === '/login' || pathname === '/register';

  let response = NextResponse.next({
    request: { headers: request.headers },
  });

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // Se não houver configuração do Supabase, redirecionamos para uma página de erro ou login
  if (!supabaseUrl || !supabaseAnonKey || supabaseUrl.includes('placeholder')) {
    if (isProtectedRoute) {
      return NextResponse.redirect(new URL('/login?error=no_config', request.url));
    }
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

  // Importante: chamamos getSession para atualizar o token se necessário
  const { data: { session } } = await supabase.auth.getSession();

  // Redirecionamentos lógicos
  if (session && isAuthRoute) {
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
