'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase/client';
import { User, Session } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';

export type Profile = {
  id: string;
  email: string;
  display_name: string;
  avatar_url: string | null;
  preferred_language: string;
  preferred_theme: string;
  total_points: number;
  streak: number;
  last_active: string;
  created_at: string;
};

type AuthContextType = {
  user: User | null;
  profile: Profile | null;
  session: Session | null;
  loading: boolean;
  isBypassMode: boolean;
  signInWithGoogle: () => Promise<void>;
  signInWithGithub: () => Promise<void>;
  signInWithEmail: (email: string) => Promise<void>;
  signInWithPassword: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, displayName: string) => Promise<void>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  updatePassword: (newPassword: string) => Promise<void>;
  updateProfile: (data: Partial<Profile>) => Promise<void>;
  refreshProfile: () => Promise<void>;
  unlinkIdentity: (provider: string) => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const DEV_USER: User = {
  id: 'dev-user-123',
  email: 'engenheiro@codworks.mz',
  user_metadata: { display_name: 'Engenheiro de Elite' },
  aud: 'authenticated',
} as any;

const DEV_PROFILE: Profile = {
  id: 'dev-user-123',
  email: 'engenheiro@codworks.mz',
  display_name: 'Engenheiro de Elite',
  avatar_url: 'https://picsum.photos/seed/dev/200',
  preferred_language: 'pt',
  preferred_theme: 'dark',
  total_points: 1250,
  streak: 7,
  last_active: new Date().toISOString(),
  created_at: new Date().toISOString(),
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const isSupabaseConfigured = process.env.NEXT_PUBLIC_SUPABASE_URL && 
                               !process.env.NEXT_PUBLIC_SUPABASE_URL.includes('placeholder');
  
  const isDevBypass = process.env.NEXT_PUBLIC_DEV_BYPASS_AUTH === 'true' || !isSupabaseConfigured;

  const fetchProfile = async (userId: string) => {
    if (isDevBypass) {
      setProfile(DEV_PROFILE);
      return;
    }
    const { data } = await supabase.from('profiles').select('*').eq('id', userId).single();
    if (data) setProfile(data);
  };

  const signInWithPassword = async (email: string, password: string) => {
    if (isDevBypass) {
      localStorage.setItem('cwm_logged_in', 'true');
      setUser(DEV_USER);
      setProfile(DEV_PROFILE);
      setSession({ user: DEV_USER, access_token: 'fake-token' } as any);
      router.push('/dashboard');
      return;
    }
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
  };

  const signOut = async () => {
    if (isDevBypass) {
      localStorage.removeItem('cwm_logged_in');
      setUser(null);
      setProfile(null);
      setSession(null);
      router.replace('/login');
      return;
    }
    await supabase.auth.signOut();
    router.replace('/login');
  };

  const signUp = async (email: string, password: string, displayName: string) => {
    if (isDevBypass) return;
    const { error } = await supabase.auth.signUp({
      email, password, options: { data: { display_name: displayName } }
    });
    if (error) throw error;
  };

  const updateProfile = async (data: Partial<Profile>) => {
    if (isDevBypass) {
      setProfile(prev => prev ? { ...prev, ...data } : null);
      return;
    }
    if (!user) return;
    const { error } = await supabase.from('profiles').update(data).eq('id', user.id);
    if (error) throw error;
    await fetchProfile(user.id);
  };

  useEffect(() => {
    const init = async () => {
      if (isDevBypass) {
        const wasLoggedIn = localStorage.getItem('cwm_logged_in') === 'true';
        if (wasLoggedIn) {
          setUser(DEV_USER);
          setProfile(DEV_PROFILE);
        }
        setLoading(false);
        return;
      }

      const { data: { session: s } } = await supabase.auth.getSession();
      setSession(s);
      setUser(s?.user ?? null);
      if (s?.user) await fetchProfile(s.user.id);
      setLoading(false);

      const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        if (session?.user) fetchProfile(session.user.id);
      });

      return () => subscription.unsubscribe();
    };
    init();
  }, [isDevBypass]);

  return (
    <AuthContext.Provider value={{
      user, profile, session, loading, isBypassMode: isDevBypass,
      signInWithGoogle: async () => {}, signInWithGithub: async () => {},
      signInWithEmail: async () => {}, signInWithPassword, signUp, signOut,
      resetPassword: async () => {}, updatePassword: async () => {}, 
      updateProfile, refreshProfile: async () => { if(user) fetchProfile(user.id) },
      unlinkIdentity: async () => {}
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);