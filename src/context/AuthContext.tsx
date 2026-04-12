'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

// Define the user type
type User = {
  name: string;
  email: string;
};

// Define the context type
type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  register: (name: string, email: string, password: string) => boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    // This code runs only on the client
    try {
      const storedUser = localStorage.getItem('mozcod-currentUser');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Failed to parse user from localStorage", error);
    }
  }, []);

  const register = (name: string, email: string, password: string): boolean => {
    try {
      const storedUsers = localStorage.getItem('mozcod-users');
      const users = storedUsers ? JSON.parse(storedUsers) : [];

      if (users.find((u: any) => u.email === email)) {
        console.error("User already exists");
        return false; // User already exists
      }

      // In a real app, you should NEVER store passwords in plain text.
      users.push({ name, email, password }); 
      localStorage.setItem('mozcod-users', JSON.stringify(users));
      
      const newUser = { name, email };
      localStorage.setItem('mozcod-currentUser', JSON.stringify(newUser));
      setUser(newUser);
      return true;
    } catch (error) {
      console.error("Failed to register user", error);
      return false;
    }
  };

  const login = (email: string, password: string): boolean => {
    try {
      const storedUsers = localStorage.getItem('mozcod-users');
      const users = storedUsers ? JSON.parse(storedUsers) : [];

      const foundUser = users.find((u: any) => u.email === email && u.password === password);

      if (foundUser) {
        const currentUser = { name: foundUser.name, email: foundUser.email };
        localStorage.setItem('mozcod-currentUser', JSON.stringify(currentUser));
        setUser(currentUser);
        return true;
      }
      
      return false;
    } catch (error) {
      console.error("Failed to login user", error);
      return false;
    }
  };

  const logout = () => {
    try {
      localStorage.removeItem('mozcod-currentUser');
      setUser(null);
      router.push('/');
    } catch (error) {
       console.error("Failed to logout user", error);
    }
  };

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
