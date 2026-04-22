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
  app_metadata: {},
  user_metadata: { display_name: 'Dev Master' },
  aud: 'authenticated',
  created_at: new Date().toISOString(),
} as any;

const DEV_PROFILE: Profile = {
  id: 'dev-user-123',
  email: 'engenheiro@codworks.mz',
  display_name: 'Engenheiro de Elite (Dev)',
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
                               process.env.NEXT_PUBLIC_SUPABASE_URL !== 'https://placeholder.supabase.co' &&
                               !process.env.NEXT_PUBLIC_SUPABASE_URL.includes('placeholder');
  
  const isDevBypass = process.env.NEXT_PUBLIC_DEV_BYPASS_AUTH === 'true' || !isSupabaseConfigured;

  const fetchProfile = async (userId: string) => {
    if (isDevBypass) {
      setProfile(DEV_PROFILE);
      return DEV_PROFILE;
    }

    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();
      
      if (!error && data) {
        setProfile(data);
      }
      return data;
    } catch (e) {
      console.warn("Middleware: Perfil não encontrado.");
      return null;
    }
  };

  const signInWithPassword = async (email: string, password: string) => {
    if (isDevBypass) {
      setUser(DEV_USER);
      setProfile(DEV_PROFILE);
      setSession({ user: DEV_USER, access_token: 'dev-token' } as any);
      setLoading(false);
      return;
    }
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
  };

  const signOut = async () => {
    if (isDevBypass) {
      setUser(null);
      setProfile(null);
      setSession(null);
      setLoading(false);
      router.replace('/login');
      return;
    }
    await supabase.auth.signOut();
    setUser(null);
    setProfile(null);
    setSession(null);
    router.replace('/login');
  };

  const updateProfile = async (data: Partial<Profile>) => {
    if (isDevBypass) {
      setProfile(prev => prev ? { ...prev, ...data } : null);
      return;
    }
    if (!user) return;
    const { error } = await supabase.from('profiles').update(data).eq('id', user.id);
    if (!error) await fetchProfile(user.id);
    else throw error;
  };

  const refreshProfile = async () => {
    if (user) await fetchProfile(user.id);
  };

  const signInWithGoogle = async () => {
    if (isDevBypass) {
      await signInWithPassword('', '');
      router.push('/dashboard');
      return;
    }
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: `${window.location.origin}/auth/callback` }
    });
  };

  const signInWithGithub = async () => {
    if (isDevBypass) {
      await signInWithPassword('', '');
      router.push('/dashboard');
      return;
    }
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: { redirectTo: `${window.location.origin}/auth/callback` }
    });
  };

  const signInWithEmail = async (email: string) => {
    if (isDevBypass) return;
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${window.location.origin}/auth/callback` }
    });
    if (error) throw error;
  };

  const signUp = async (email: string, password: string, displayName: string) => {
    if (isDevBypass) return;
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { display_name: displayName } },
    });
    if (error) throw error;
  };

  const resetPassword = async (email: string) => {
    if (isDevBypass) return;
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/callback?next=/profile#password-reset`,
    });
    if (error) throw error;
  };

  const updatePassword = async (newPassword: string) => {
    if (isDevBypass) return;
    const { error } = await supabase.auth.updateUser({ password: newPassword });
    if (error) throw error;
  };

  const unlinkIdentity = async (provider: string) => {
    if (isDevBypass) return;
    if (!user) return;
    const identity = user.identities?.find(i => i.provider === provider);
    if (identity) {
      const { error } = await supabase.auth.unlinkIdentity(identity);
      if (error) throw error;
      const { data: { user: newUser } } = await supabase.auth.getUser();
      setUser(newUser);
    }
  };

  useEffect(() => {
    const initializeAuth = async () => {
      if (isDevBypass) {
        setUser(DEV_USER);
        setProfile(DEV_PROFILE);
        setSession({ user: DEV_USER } as any);
        setLoading(false);
        return;
      }

      try {
        const { data: { session: currentSession } } = await supabase.auth.getSession();
        setSession(currentSession);
        setUser(currentSession?.user ?? null);
        if (currentSession?.user) await fetchProfile(currentSession.user.id);
      } catch (e) {
        console.warn("Falha ao inicializar Supabase.");
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();

    if (!isDevBypass) {
      const { data: { subscription } } = supabase.auth.onAuthStateChange(
        async (event, newSession) => {
          setSession(newSession);
          setUser(newSession?.user ?? null);
          if (newSession?.user) await fetchProfile(newSession.user.id);
          else setProfile(null);
          setLoading(false);
        }
      );
      return () => subscription.unsubscribe();
    }
  }, [isDevBypass]);

  return (
    <AuthContext.Provider value={{
      user, profile, session, loading,
      signInWithGoogle, signInWithGithub, signInWithEmail, signInWithPassword,
      signUp, signOut, resetPassword, updatePassword, updateProfile, refreshProfile, unlinkIdentity
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};