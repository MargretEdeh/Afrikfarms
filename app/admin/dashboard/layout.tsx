'use client'

import { useState } from 'react'
import Sidebar from '@/app/dashboard/_components/Sidebar'
import Header from '@/app/dashboard/_components/Header'
import { AdminProvider } from '@/context/AdminContext'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleLogout = () => {
    if (confirm('Are you sure you want to logout?')) {
      // Clear all cookies in the browser before redirecting
      clearStorage()
      clearCookies()
      window.location.href = '/'
    }
  }

  // Clear all cookies for the current site (client-side)
  const clearCookies = () => {
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

  // Clear localStorage and sessionStorage (client-side)
  const clearStorage = () => {
    if (typeof window === 'undefined') return
    try {
      window.localStorage.clear()
      window.sessionStorage.clear()
    } catch (e) {
      // ignore errors (e.g., in some privacy modes)
    }
  }

  return (
    <AdminProvider>
    <div className="min-h-screen bg-gray-50 flex">
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300 ${
          sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={`fixed lg:sticky top-0 z-50 transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <Sidebar
          onLogout={handleLogout}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} notificationCount={3} />
        <main className="flex-1 p-6 lg:p-8">{children}</main>
      </div>
    </div>
    </AdminProvider>
  )
}
