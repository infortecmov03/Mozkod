import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export function createClient() {
  const cookieStore = cookies()
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';

  return createServerClient(
    supabaseUrl,
    supabaseAnonKey,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: any) {
          try {
            cookieStore.set({ name, value, ...options })
          } catch (error) {
            // Silently handle cookie errors during SSR
          }
        },
        remove(name: string, options: any) {
          try {
            cookieStore.set({ name, value: '', ...options })
          } catch (error) {
            // Silently handle cookie errors during SSR
          }
        },
      },
    }
  )
}

export async function getServerSession() {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) return null;
  const supabase = createClient()
  const { data: { session } } = await supabase.auth.getSession()
  return session
}

export async function getServerUser() {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) return null;
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  return user
}
