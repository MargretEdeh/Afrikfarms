'use client';

import { useState, useRef, useEffect } from 'react';
import { Search, Bell, Settings, Menu, LogOut, ChevronDown } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AuthService } from '@/services/auth.service';

// Header Component
function Header({ onMenuClick, notificationCount = 3 }: { onMenuClick: () => void; notificationCount?: number }) {
  const { user, logout } = useAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowUserMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Format role for display
  const formatRole = (role?: string) => {
    if (!role) return 'Unknown Role';
    return role
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // Get location info based on role
  const getLocationInfo = () => {
    if (!user) return { title: 'Loading...', subtitle: 'Please wait' };

    const role = user.role?.toLowerCase();
    
    if (role?.includes('super')) {
      return {
        title: 'Afrik Farm - Super Admin',
        subtitle: 'All Regions • Pan-African'
      };
    }
    
    if (role?.includes('country')) {
      return {
        title: 'Country Administration',
        subtitle: 'National Operations'
      };
    }
    
    if (role?.includes('state')) {
      return {
        title: 'State Administration',
        subtitle: 'State Operations'
      };
    }
    
    if (role?.includes('lga')) {
      return {
        title: 'LGA Administration',
        subtitle: 'Local Government Area'
      };
    }

    return {
      title: user.fullname || 'Dashboard',
      subtitle: formatRole(user.role)
    };
  };

  const locationInfo = getLocationInfo();

  const handleLogout = () => {
    logout();
    setShowUserMenu(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Menu className="w-5 h-5 text-gray-600" />
          </button>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">{locationInfo.title}</h2>
            <p className="text-xs text-gray-500">{locationInfo.subtitle}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search farmers, farms, loans..."
              className="pl-10 pr-4 py-2 w-80 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
            />
          </div>

          <button className="relative p-2.5 hover:bg-gray-100 rounded-xl transition-colors">
            <Bell className="w-5 h-5 text-gray-600" />
            {notificationCount > 0 && (
              <span className="absolute top-1 right-1 w-5 h-5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {notificationCount}
              </span>
            )}
          </button>

          <button className="p-2.5 hover:bg-gray-100 rounded-xl transition-colors">
            <Settings className="w-5 h-5 text-gray-600" />
          </button>

          {/* User Avatar with Dropdown */}
          <div className="hidden md:flex items-center gap-2 pl-3 border-l border-gray-200 relative" ref={menuRef}>
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center gap-2 hover:bg-gray-50 rounded-lg p-1.5 pr-2 transition-colors"
            >
              <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center font-bold text-primary-foreground text-sm">
                {user?.fullname?.slice(0, 2).toUpperCase() || 
                 user?.email?.slice(0, 2).toUpperCase() || 'U'}
              </div>
              <div className="text-left">
                <p className="text-xs font-semibold text-gray-900 truncate max-w-[120px]">
                  {user?.fullname || user?.email?.split('@')[0] || 'User'}
                </p>
                <p className="text-[10px] text-gray-500">
                  {user?.role ? formatRole(user.role) : 'Loading...'}
                </p>
              </div>
              <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${showUserMenu ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {showUserMenu && (
              <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50">
                <div className="px-4 py-3 border-b border-gray-100">
                  <p className="text-sm font-semibold text-gray-900 truncate">
                    {user?.fullname || user?.email?.split('@')[0] || 'User'}
                  </p>
                  <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                  <p className="text-xs text-gray-400 mt-1">
                    {user?.role ? formatRole(user.role) : 'Loading...'}
                  </p>
                </div>

                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="font-medium">Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

// Create User Page Component
export default function CreateUserPage() {
  const { createUser } = useAuth();

  const [formData, setFormData] = useState({
    fullname: '',
    username: '',
    email: '',
    phone_number: '',
    role: '',
    country_id: 0,
    state_id: 0,
    lga_id: 0,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [countries, setCountries] = useState<any[]>([]);
  const [states, setStates] = useState<any[]>([]);
  const [loadingCountries, setLoadingCountries] = useState(false);
  const [loadingStates, setLoadingStates] = useState(false);

  // Fetch countries on component mount
  useEffect(() => {
    const fetchCountries = async () => {
      setLoadingCountries(true);
      try {
        const response = await AuthService.getCountries();
        setCountries(response.data || []);
      } catch (error) {
        console.error('Error fetching countries:', error);
      } finally {
        setLoadingCountries(false);
      }
    };

    fetchCountries();
  }, []);

  // Fetch states when country is selected
  useEffect(() => {
    const fetchStates = async () => {
      if (formData.country_id > 0) {
        setLoadingStates(true);
        try {
          const response = await AuthService.getStates();
          // Filter states by selected country
          const filteredStates = response.data?.filter(
            (state: any) => state.countryId === formData.country_id
          ) || [];
          setStates(filteredStates);
        } catch (error) {
          console.error('Error fetching states:', error);
        } finally {
          setLoadingStates(false);
        }
      } else {
        setStates([]);
        setFormData(prev => ({ ...prev, state_id: 0 }));
      }
    };

    fetchStates();
  }, [formData.country_id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name.endsWith('_id') ? Number(value) : value,
    }));
  };

  const handleRoleChange = (value: string) => {
    setFormData(prev => ({ ...prev, role: value }));
  };

  const handleCountryChange = (value: string) => {
    setFormData(prev => ({ 
      ...prev, 
      country_id: Number(value),
      state_id: 0 // Reset state when country changes
    }));
  };

  const handleStateChange = (value: string) => {
    setFormData(prev => ({ ...prev, state_id: Number(value) }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      await createUser({
        ...formData,
        name: formData.username,
      });
      setMessage('✅ User created successfully!');
      setFormData({
        fullname: '',
        username: '',
        email: '',
        phone_number: '',
        role: '',
        country_id: 0,
        state_id: 0,
        lga_id: 0,
      });
      // Reset states when form is cleared
      setStates([]);
    } catch (err: any) {
      setMessage('❌ Failed to create user.');
    } finally {
      setLoading(false);
    }
  };

  const handleMenuClick = () => {
    // Handle mobile menu click if needed
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onMenuClick={handleMenuClick} />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto p-6 bg-card rounded-2xl shadow-lg">
          <h1 className="text-3xl font-bold mb-6 text-center text-foreground">Create User</h1>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div className="space-y-2">
              <Label htmlFor="fullname" className="text-foreground font-medium">
                Full Name *
              </Label>
              <Input
                id="fullname"
                type="text"
                name="fullname"
                placeholder="Enter full name"
                value={formData.fullname}
                onChange={handleChange}
                className="h-11 bg-background border-input"
                required
              />
            </div>

            {/* Username */}
            <div className="space-y-2">
              <Label htmlFor="username" className="text-foreground font-medium">
                Username *
              </Label>
              <Input
                id="username"
                type="text"
                name="username"
                placeholder="Enter username"
                value={formData.username}
                onChange={handleChange}
                className="h-11 bg-background border-input"
                required
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground font-medium">
                Email *
              </Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="Enter email address"
                value={formData.email}
                onChange={handleChange}
                className="h-11 bg-background border-input"
                required
              />
            </div>

            {/* Phone Number */}
            <div className="space-y-2">
              <Label htmlFor="phone_number" className="text-foreground font-medium">
                Phone Number
              </Label>
              <Input
                id="phone_number"
                type="text"
                name="phone_number"
                placeholder="Enter phone number"
                value={formData.phone_number}
                onChange={handleChange}
                className="h-11 bg-background border-input"
              />
            </div>

            {/* Role */}
            <div className="space-y-2">
              <Label htmlFor="role" className="text-foreground font-medium">
                Role *
              </Label>
              <Select value={formData.role} onValueChange={handleRoleChange} required>
                <SelectTrigger id="role" className="h-11 bg-background border-input">
                  <SelectValue placeholder="Select user role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="super_admin">Super Admin</SelectItem>
                  <SelectItem value="state_admin">State Admin</SelectItem>
                  <SelectItem value="lga_admin">LGA Admin</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Country Dropdown */}
            <div className="space-y-2">
              <Label htmlFor="country_id" className="text-foreground font-medium">
                Country *
              </Label>
              <Select 
                value={formData.country_id.toString()} 
                onValueChange={handleCountryChange}
                disabled={loadingCountries}
              >
                <SelectTrigger id="country_id" className="h-11 bg-background border-input">
                  <SelectValue placeholder={loadingCountries ? "Loading countries..." : "Select country"} />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((country) => (
                    <SelectItem key={country.id} value={country.id.toString()}>
                      {country.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* State Dropdown */}
            <div className="space-y-2">
              <Label htmlFor="state_id" className="text-foreground font-medium">
                State *
              </Label>
              <Select 
                value={formData.state_id.toString()} 
                onValueChange={handleStateChange}
                disabled={!formData.country_id || loadingStates}
              >
                <SelectTrigger id="state_id" className="h-11 bg-background border-input">
                  <SelectValue 
                    placeholder={
                      !formData.country_id 
                        ? "Select country first" 
                        : loadingStates 
                        ? "Loading states..." 
                        : "Select state"
                    } 
                  />
                </SelectTrigger>
                <SelectContent>
                  {states.map((state) => (
                    <SelectItem key={state.id} value={state.id.toString()}>
                      {state.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* LGA ID */}
            <div className="space-y-2">
              <Label htmlFor="lga_id" className="text-foreground font-medium">
                LGA ID
              </Label>
              <Input
                id="lga_id"
                type="number"
                name="lga_id"
                placeholder="Enter LGA ID"
                value={formData.lga_id || ''}
                onChange={handleChange}
                className="h-11 bg-background border-input"
                min="0"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={loading}
              className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base mt-6"
            >
              {loading ? 'Creating User...' : 'Create User'}
            </Button>
          </form>

          {/* Success/Error Message */}
          {message && (
            <div className={`mt-4 p-3 rounded-lg text-center text-sm font-medium ${
              message.includes('✅') 
                ? 'bg-green-100 text-green-800 border border-green-200' 
                : 'bg-red-100 text-red-800 border border-red-200'
            }`}>
              {message}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}