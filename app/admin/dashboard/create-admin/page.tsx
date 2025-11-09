'use client';

import { useState, useRef, useEffect } from 'react';
import { Search, Bell, Settings, Menu, LogOut, ChevronDown } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AuthService } from '@/services/auth.service';
import Sidebar from '@/app/dashboard/_components/Sidebar';
import Header from '@/app/dashboard/_components/Header';

// Header Component

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
  const [lgas, setLgas] = useState<any[]>([]);
  const [loadingCountries, setLoadingCountries] = useState(false);
  const [loadingStates, setLoadingStates] = useState(false);
  const [loadingLgas, setLoadingLgas] = useState(false);

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
        setFormData(prev => ({ ...prev, state_id: 0, lga_id: 0 }));
      }
    };

    fetchStates();
  }, [formData.country_id]);

  // Fetch LGAs when state is selected
  useEffect(() => {
    const fetchLgas = async () => {
      if (formData.state_id > 0) {
        setLoadingLgas(true);
        try {
          const response = await AuthService.getLgas();
          // Filter LGAs by selected state
          const filteredLgas = response.data?.filter(
            (lga: any) => lga.stateId === formData.state_id
          ) || [];
          setLgas(filteredLgas);
        } catch (error) {
          console.error('Error fetching LGAs:', error);
        } finally {
          setLoadingLgas(false);
        }
      } else {
        setLgas([]);
        setFormData(prev => ({ ...prev, lga_id: 0 }));
      }
    };

    fetchLgas();
  }, [formData.state_id]);

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
      state_id: 0,
      lga_id: 0
    }));
  };

  const handleStateChange = (value: string) => {
    setFormData(prev => ({ ...prev, state_id: Number(value), lga_id: 0 }));
  };

  const handleLgaChange = (value: string) => {
    setFormData(prev => ({ ...prev, lga_id: Number(value) }));
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
      // Reset states and LGAs when form is cleared
      setStates([]);
      setLgas([]);
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
                <SelectTrigger id="role" className="h-11 bg-background border-input w-full">
                  <SelectValue placeholder="Select user role" />
                </SelectTrigger>
                <SelectContent className="bg-background">
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
                <SelectTrigger id="country_id" className="h-11 bg-background border-input w-full">
                  <SelectValue placeholder={loadingCountries ? "Loading countries..." : "Select country"} />
                </SelectTrigger>
                <SelectContent className="bg-background">
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
                <SelectTrigger id="state_id" className="h-11 bg-background border-input w-full">
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
                <SelectContent className="bg-background">
                  {states.map((state) => (
                    <SelectItem key={state.id} value={state.id.toString()}>
                      {state.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* LGA Dropdown */}
            <div className="space-y-2">
              <Label htmlFor="lga_id" className="text-foreground font-medium">
                LGA
              </Label>
              <Select 
                value={formData.lga_id.toString()} 
                onValueChange={handleLgaChange}
                disabled={!formData.state_id || loadingLgas}
              >
                <SelectTrigger id="lga_id" className="h-11 bg-background border-input w-full">
                  <SelectValue 
                    placeholder={
                      !formData.state_id 
                        ? "Select state first" 
                        : loadingLgas 
                        ? "Loading LGAs..." 
                        : "Select LGA"
                    } 
                  />
                </SelectTrigger>
                <SelectContent className="bg-background">
                  {lgas.map((lga) => (
                    <SelectItem key={lga.id} value={lga.id.toString()}>
                      {lga.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
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