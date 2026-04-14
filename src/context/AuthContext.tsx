'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

type User = {
  name: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  register: (name: string, email: string, password: string) => boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// This is a mock implementation and should be replaced with a real database
const USERS_STORAGE_KEY = 'mozcod-users';
const CURRENT_USER_STORAGE_KEY = 'mozcod-currentUser';

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
    try {
      const storedUser = localStorage.getItem(CURRENT_USER_STORAGE_KEY);
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (e) {
      console.error("Failed to parse user from localStorage", e);
      localStorage.removeItem(CURRENT_USER_STORAGE_KEY);
    }
  }, []);
  
  const register = (name: string, email: string, password: string): boolean => {
    if (!isMounted) return false;
    try {
      const storedUsers = localStorage.getItem(USERS_STORAGE_KEY);
      const users = storedUsers ? JSON.parse(storedUsers) : [];
      
      const userExists = users.some((u: any) => u.email === email);
      if (userExists) {
        return false;
      }
      
      // WARNING: Storing passwords in localStorage is very insecure.
      const newUser = { name, email, password };
      users.push(newUser);
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
      
      const userToStore = { name, email };
      localStorage.setItem(CURRENT_USER_STORAGE_KEY, JSON.stringify(userToStore));
      setUser(userToStore);
      router.push('/dashboard');
      return true;

    } catch(e) {
      console.error(e);
      return false;
    }
  };

  const login = (email: string, password: string): boolean => {
    if (!isMounted) return false;
    try {
        const storedUsers = localStorage.getItem(USERS_STORAGE_KEY);
        const users = storedUsers ? JSON.parse(storedUsers) : [];
        const foundUser = users.find((u: any) => u.email === email && u.password === password);
        
        if (foundUser) {
            const userToStore = { name: foundUser.name, email: foundUser.email };
            localStorage.setItem(CURRENT_USER_STORAGE_KEY, JSON.stringify(userToStore));
            setUser(userToStore);
            const redirectPath = localStorage.getItem('redirectAfterLogin');
            if (redirectPath) {
              localStorage.removeItem('redirectAfterLogin');
              router.push(redirectPath);
            } else {
              router.push('/dashboard');
            }
            return true;
        }
        return false;
    } catch(e) {
        console.error(e);
        return false;
    }
  };

  const logout = () => {
    if (!isMounted) return;
    localStorage.removeItem(CURRENT_USER_STORAGE_KEY);
    setUser(null);
    router.push('/');
  };

  if (!isMounted) {
    return (
        <div className="flex min-h-screen items-center justify-center bg-background">
            <p className="text-muted-foreground">A carregar autenticação...</p>
        </div>
    );
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
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
