'use client';

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

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
    } catch (err: any) {
      setMessage('❌ Failed to create user.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-card rounded-2xl shadow-lg mt-10">
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

        {/* Country ID */}
        <div className="space-y-2">
          <Label htmlFor="country_id" className="text-foreground font-medium">
            Country ID
          </Label>
          <Input
            id="country_id"
            type="number"
            name="country_id"
            placeholder="Enter country ID"
            value={formData.country_id || ''}
            onChange={handleChange}
            className="h-11 bg-background border-input"
            min="0"
          />
        </div>

        {/* State ID */}
        <div className="space-y-2">
          <Label htmlFor="state_id" className="text-foreground font-medium">
            State ID
          </Label>
          <Input
            id="state_id"
            type="number"
            name="state_id"
            placeholder="Enter state ID"
            value={formData.state_id || ''}
            onChange={handleChange}
            className="h-11 bg-background border-input"
            min="0"
          />
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
  );
}