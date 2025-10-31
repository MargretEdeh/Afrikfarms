'use client';
import { createContext, useState, ReactNode, useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AuthService } from '@/services/auth.service';
import { useQueryClient } from '@tanstack/react-query';

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
  login: (identifier: string, password: string, type: 'admin' | 'user') => Promise<void>;
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
    const savedUser = localStorage.getItem('user');
    if (savedUser) setUser(JSON.parse(savedUser));
    setLoading(false);
  }, []);

  const login = async (identifier: string, password: string, type: 'admin' | 'user') => {
    const data =
      type === 'admin'
        ? await AuthService.loginAdmin(identifier, password)
        : await AuthService.loginUser(identifier, password);

    console.log('Raw login response:', data);

    // Extract user data based on response structure
    const responseUser = data.user || data.admin;
    const userData: User = { ...responseUser, token: data.token };

    setUser(userData);
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(userData));

    // Role-based routing - get role directly from response
    const userRole = responseUser?.role;
    
    console.log('User role for routing:', userRole);
    
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
    
    // Redirect to admin dashboard after registration
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

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    queryClient.clear();
    setUser(null);
    AuthService.logout();
    window.location.href = '/login';
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