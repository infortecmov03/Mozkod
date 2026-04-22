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
  updateProfile: (data: Partial<Profile>) => Promise<void>;
  refreshProfile: () => Promise<void>;
  unlinkIdentity: (provider: string) => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

// MOCK DATA PARA DESENVOLVIMENTO (Pode ser removido em produção final)
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

  // Se esta flag for false ou inexistente, o sistema usa o Supabase real
  const isDevBypass = process.env.NEXT_PUBLIC_DEV_BYPASS_AUTH === 'true';

  const fetchProfile = async (userId: string) => {
    if (isDevBypass) {
      setProfile(DEV_PROFILE);
      return DEV_PROFILE;
    }

    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();
    
    if (!error && data) {
      setProfile(data);
    }
    return data;
  };

  const updateProfile = async (data: Partial<Profile>) => {
    if (isDevBypass) {
      setProfile(prev => prev ? { ...prev, ...data } : null);
      return;
    }

    if (!user) return;
    
    const { error } = await supabase
      .from('profiles')
      .update(data)
      .eq('id', user.id);
    
    if (!error) {
      await fetchProfile(user.id);
    } else {
      throw error;
    }
  };

  const refreshProfile = async () => {
    if (user) {
      await fetchProfile(user.id);
    }
  };

  const signInWithGoogle = async () => {
    const redirectTo = `${window.location.origin}/auth/callback`;
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo }
    });
  };

  const signInWithGithub = async () => {
    const redirectTo = `${window.location.origin}/auth/callback`;
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: { redirectTo }
    });
  };

  const signInWithEmail = async (email: string) => {
    const redirectTo = `${window.location.origin}/auth/callback`;
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: redirectTo }
    });
    
    if (error) throw error;
  };

  const signInWithPassword = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
  };

  const signUp = async (email: string, password: string, displayName: string) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          display_name: displayName,
        },
      },
    });
    if (error) throw error;
    return;
  };

  const resetPassword = async (email: string) => {
    const redirectTo = `${window.location.origin}/auth/callback?next=/profile`;
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo,
    });
    if (error) throw error;
  };

  const unlinkIdentity = async (provider: string) => {
    if (!user) return;
    const identity = user.identities?.find(i => i.provider === provider);
    if (identity) {
      const { error } = await supabase.auth.unlinkIdentity(identity);
      if (error) throw error;
      const { data: { user: newUser } } = await supabase.auth.getUser();
      setUser(newUser);
    }
  };

  const signOut = async () => {
    if (isDevBypass) {
      setUser(null);
      setProfile(null);
      setSession(null);
      router.replace('/login');
      return;
    }
    await supabase.auth.signOut();
    setUser(null);
    setProfile(null);
    setSession(null);
    router.replace('/login');
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

      const { data: { session: currentSession } } = await supabase.auth.getSession();
      setSession(currentSession);
      setUser(currentSession?.user ?? null);
      
      if (currentSession?.user) {
        await fetchProfile(currentSession.user.id);
      }
      
      setLoading(false);
    };

    initializeAuth();

    if (!isDevBypass) {
      const { data: { subscription } } = supabase.auth.onAuthStateChange(
        async (event, newSession) => {
          setSession(newSession);
          setUser(newSession?.user ?? null);
          
          if (newSession?.user) {
            await fetchProfile(newSession.user.id);
          } else {
            setProfile(null);
          }
          
          setLoading(false);
        }
      );
      return () => subscription.unsubscribe();
    }
  }, [isDevBypass]);

  return (
    <AuthContext.Provider value={{
      user,
      profile,
      session,
      loading,
      signInWithGoogle,
      signInWithGithub,
      signInWithEmail,
      signInWithPassword,
      signUp,
      signOut,
      resetPassword,
      updateProfile,
      refreshProfile,
      unlinkIdentity
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