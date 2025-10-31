'use client';
import { useState } from 'react';
import { AlertCircle, CheckCircle2, User, Mail, Lock, Shield } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

export default function RegisterSuperAdmin() {
  const { registerSuperAdmin } = useAuth();
  type Message = { type: 'success' | 'error'; text: string } | null;
  const [message, setMessage] = useState<Message>(null);
  const [submitting, setSubmitting] = useState(false);
  const [adminForm, setAdminForm] = useState({
    fullname: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleRegisterAdmin = async () => {
    setMessage(null);

    if (!adminForm.fullname || !adminForm.email || !adminForm.password) {
      setMessage({ type: 'error', text: 'All fields are required' });
      return;
    }

    if (adminForm.password !== adminForm.confirmPassword) {
      setMessage({ type: 'error', text: 'Passwords do not match' });
      return;
    }

    if (adminForm.password.length < 6) {
      setMessage({ type: 'error', text: 'Password must be at least 6 characters' });
      return;
    }

    setSubmitting(true);

    try {
      await registerSuperAdmin({
        fullname: adminForm.fullname,
        email: adminForm.email,
        password: adminForm.password
      });
      
      setMessage({ type: 'success', text: 'Super Admin registered successfully!' });
      setAdminForm({ fullname: '', email: '', password: '', confirmPassword: '' });
    } catch (err: unknown) {
      let errorText = 'Registration failed. Please try again.';
      if (err instanceof Error) {
        errorText = err.message;
      } else if (typeof err === 'string') {
        errorText = err;
      }
      setMessage({ type: 'error', text: errorText });
    } finally {
      setSubmitting(false);
    }
  };

  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter' && !submitting) {
      handleRegisterAdmin();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-amber-50 to-yellow-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-green-800 to-amber-600 p-8 text-white">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-white/20 p-4 rounded-full">
                <Shield className="w-10 h-10" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-center">Register Super Admin</h1>
            <p className="text-green-100 mt-2 text-center">Create your administrator account</p>
          </div>

          <div className="p-8">
            {message && (
              <div className={`flex items-center space-x-2 p-4 rounded-lg mb-6 ${
                message.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'
              }`}>
                {message.type === 'success' ? <CheckCircle2 className="w-5 h-5 flex-shrink-0" /> : <AlertCircle className="w-5 h-5 flex-shrink-0" />}
                <span className="text-sm font-medium">{message.text}</span>
              </div>
            )}

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    value={adminForm.fullname}
                    onChange={(e) => setAdminForm({ ...adminForm, fullname: e.target.value })}
                    onKeyPress={handleKeyPress}
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-800 focus:border-transparent transition-all"
                    placeholder="Super Admin"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    value={adminForm.email}
                    onChange={(e) => setAdminForm({ ...adminForm, email: e.target.value })}
                    onKeyPress={handleKeyPress}
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="super.admin@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="password"
                    value={adminForm.password}
                    onChange={(e) => setAdminForm({ ...adminForm, password: e.target.value })}
                    onKeyPress={handleKeyPress}
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="password"
                    value={adminForm.confirmPassword}
                    onChange={(e) => setAdminForm({ ...adminForm, confirmPassword: e.target.value })}
                    onKeyPress={handleKeyPress}
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <button
                onClick={handleRegisterAdmin}
                disabled={submitting}
                className="w-full px-6 py-3 bg-gradient-to-r from-green-800 to-amber-600 text-white rounded-lg hover:from-green-900 hover:to-amber-700 transition-all font-semibold disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                {submitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Registering...
                  </span>
                ) : (
                  'Register Super Admin'
                )}
              </button>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{' '}
                <button className="text-green-800 font-semibold hover:text-green-900 transition-colors">
                  Sign In
                </button>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-gray-600">
          <p>© 2024 Admin Portal. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}