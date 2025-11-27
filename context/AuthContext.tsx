'use client';
import { createContext, useState, ReactNode, useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AuthService } from '@/services/auth.service';
import { useQueryClient } from '@tanstack/react-query';

function setCookie(name: string, value: string, days: number = 7) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Strict`;
}

function getCookie(name: string): string | null {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return decodeURIComponent(parts.pop()?.split(';').shift() || '');
  }
  return null;
}

function deleteCookie(name: string) {
  // set expiry in the past and ensure path and SameSite are included
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Strict`;
}

function clearAllCookies() {
  // iterate all cookies and expire them
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const eqPos = cookie.indexOf('=');
    const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();
    if (name) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Strict`;
    }
  }
}

interface User {
  id?: number;
  fullname?: string;
  email?: string;
  role?: string;
  profile_image?: string;
  token?: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (identifier: string, password: string, type: 'admin' | 'lga_admin') => Promise<void>;
  logout: () => void;
  registerSuperAdmin: (data: { fullname: string; email: string; password: string }) => Promise<void>;
  createUser: (data: {
    fullname: string;
    name: string;
    username: string;
    email: string;
    phone_number: string;
    role: string;
    country_id: number;
    state_id: number;
    lga_id: number;
  }) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const queryClient = useQueryClient();
  const router = useRouter();

  useEffect(() => {
    // Check both localStorage and cookies for user data
    const savedUser = localStorage.getItem('user');
    const token = getCookie('token');
    
    if (savedUser && token) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (identifier: string, password: string, type: 'admin' | 'lga_admin') => {
    const data =
      type === 'admin'
        ? await AuthService.loginAdmin(identifier, password)
        : await AuthService.loginUser(identifier, password);

    console.log('Raw login response:', data);

    const responseUser = data.user || data.admin;
    const userData: User = { ...responseUser, token: data.token };

    setUser(userData);
    
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(userData));
    setCookie('token', data.token, 7); 

    const userRole = responseUser?.role;
    
    console.log('User role for routing:', userRole);
    setCookie('role', userRole, 7);

    
    switch (userRole) {
      case 'lga_admin':
        router.push('/dashboard');
        break;
      case 'super_admin':
        router.push('/admin/dashboard');
        break;
      case 'state_admin':
        router.push('/state/dashboard');
        break;
      default:
        router.push('/dashboard');
        break;
    }
  };

  const registerSuperAdmin = async (data: { fullname: string; email: string; password: string }) => {
    const res = await AuthService.registerSuperAdmin(data);
    const userData: User = { ...(res.admin || res.newAdmin), token: res.token };
    setUser(userData);
    
    localStorage.setItem('token', res.token);
    localStorage.setItem('user', JSON.stringify(userData));
    setCookie('token', res.token, 7); // Store in cookie for middleware
    
    router.push('/admin/dashboard');
  };

  const createUser = async (data: {
    fullname: string;
    name: string;
    username: string;
    email: string;
    password: string;
    phone_number: string;
    role: string;
    country_id: number;
    state_id: number;
    lga_id: number;
  }) => {
    await AuthService.createUser(data);
  };

  const logout = async () => {
    try {
      // attempt server-side logout but don't block local cleanup if it fails
      await AuthService.logout();
    } catch (err) {
      console.error('Error during server logout:', err);
    }

    // Clear local storage and all cookies to ensure no auth remnants remain
    try {
      localStorage.clear();
    } catch (err) {
      console.error('Error clearing localStorage:', err);
      // fallback to explicit removals
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }

    try {
      clearAllCookies();
    } catch (err) {
      console.error('Error clearing cookies:', err);
      // best effort to remove common auth cookies
      deleteCookie('token');
      deleteCookie('role');
    }

    queryClient.clear();
    setUser(null);

    // navigate to login page
    try {
      router.push('/login');
    } catch (err) {
      // final fallback
      window.location.href = '/login';
    }
  };

  return (
    <AuthContext.Provider
        value={{
            user,
            loading,
            login,
            logout,
            registerSuperAdmin,
            createUser: async (data) => await createUser(data as any),
        }}
    >
        {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider');
  return ctx;
};