"use client"

import { Search, Bell, Settings, Menu, LogOut, ChevronDown } from 'lucide-react'
import { useAuth } from '@/context/AuthContext'
import { useState, useRef, useEffect } from 'react'

interface HeaderProps {
  onMenuClick: () => void
  notificationCount?: number
}

export default function Header({ onMenuClick, notificationCount = 3 }: HeaderProps) {
  const { user, logout } = useAuth()
  const [showUserMenu, setShowUserMenu] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  console.log('Authenticated User:', user)

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowUserMenu(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Format role for display
  const formatRole = (role?: string) => {
    if (!role) return 'Unknown Role'
    return role
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }

  // Get location info based on role
  const getLocationInfo = () => {
    if (!user) return { title: 'Loading...', subtitle: 'Please wait' }

    const role = user.role?.toLowerCase()
    
    if (role?.includes('super')) {
      return {
        title: 'Afrik Farm - Super Admin',
        subtitle: 'All Regions • Pan-African'
      }
    }
    
    if (role?.includes('country')) {
      return {
        title: 'Country Administration',
        subtitle: 'National Operations'
      }
    }
    
    if (role?.includes('state')) {
      return {
        title: 'State Administration',
        subtitle: 'State Operations'
      }
    }
    
    if (role?.includes('lga')) {
      return {
        title: 'LGA Administration',
        subtitle: 'Local Government Area'
      }
    }

    return {
      title: user.fullname || 'Dashboard',
      subtitle: formatRole(user.role)
    }
  }

  const locationInfo = getLocationInfo()

  const handleLogout = () => {
    logout()
    setShowUserMenu(false)
  }

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
  )
}