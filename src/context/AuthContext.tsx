'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { 
    getAuth, 
    onAuthStateChanged, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut,
    updateProfile,
    type User as FirebaseUser
} from 'firebase/auth';
import { app } from '@/firebase/config';

type User = {
  uid: string;
  name: string | null;
  email: string | null;
};

type AuthContextType = {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser: FirebaseUser | null) => {
        if (firebaseUser) {
            setUser({
                uid: firebaseUser.uid,
                name: firebaseUser.displayName,
                email: firebaseUser.email
            });
        } else {
            setUser(null);
        }
        setLoading(false);
    });
    return () => unsubscribe();
  }, [auth]);

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        if (userCredential.user) {
            await updateProfile(userCredential.user, { displayName: name });
            setUser({ 
                uid: userCredential.user.uid, 
                name: name, 
                email: email 
            });
            const redirectPath = localStorage.getItem('redirectAfterLogin');
            if (redirectPath) {
                localStorage.removeItem('redirectAfterLogin');
                router.push(redirectPath);
            } else {
                router.push('/dashboard');
            }
        }
        return true;
    } catch (error) {
        console.error("Erro no registro:", error);
        return false;
    }
  };

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        const redirectPath = localStorage.getItem('redirectAfterLogin');
        if (redirectPath) {
          localStorage.removeItem('redirectAfterLogin');
          router.push(redirectPath);
        } else {
          router.push('/dashboard');
        }
        return true;
    } catch (error) {
        console.error("Erro no login:", error);
        return false;
    }
  };

  const logout = async () => {
    try {
        await signOut(auth);
        router.push('/');
    } catch (error) {
        console.error("Erro no logout:", error);
    }
  };
  
  if (loading) {
    // This can be replaced with a beautiful loading spinner component
    return (
        <div className="flex min-h-screen items-center justify-center bg-background">
            <p className="text-muted-foreground">A carregar autenticação...</p>
        </div>
    )
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
