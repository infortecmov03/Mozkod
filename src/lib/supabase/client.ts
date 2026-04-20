import { createBrowserClient } from '@supabase/ssr'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';

export const supabase = createBrowserClient(
  supabaseUrl,
  supabaseAnonKey
)

export async function getCurrentSession() {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) return null;
  const { data: { session }, error } = await supabase.auth.getSession()
  if (error) throw error
  return session
}

export async function getCurrentUser() {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) return null;
  const { data: { user }, error } = await supabase.auth.getUser()
  if (error) throw error
  return user
}
