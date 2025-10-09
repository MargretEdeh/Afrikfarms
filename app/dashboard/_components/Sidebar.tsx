"use client"

import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { LayoutDashboard, Users, Tractor, FileText, DollarSign, CheckCircle2, BarChart3, LogOut } from "lucide-react"

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: Users, label: "Farmers", href: "/dashboard/farmers" },
  { icon: Tractor, label: "Farms", href: "/dashboard/farms" },
  { icon: FileText, label: "Farm Updates", href: "/dashboard/updates" },
  { icon: DollarSign, label: "Loan Applications", href: "/dashboard/loans" },
  { icon: CheckCircle2, label: "Verification", href: "/dashboard/verification" },
  { icon: BarChart3, label: "Reports", href: "/dashboard/reports" },
]

export default function Sidebar({ onLogout }: { onLogout: () => void }) {
  const pathname = usePathname() || "/dashboard"

  return (
    <aside className="w-72 bg-sidebar border-r border-sidebar-border flex flex-col h-screen sticky top-0 shadow-sm">
      {/* Logo Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-6 border-b border-sidebar-border"
      >
        <div className="flex items-center gap-3">
          <motion.a
            href="/"
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link href="/" className="flex items-center gap-3 group">
                          <Image src="/AfrikFarms.png" alt="Afrik Farm Logo" width={100} height={100} />
                        
                      </Link>
            <div>
              {/* <h1 className="text-lg font-bold text-sidebar-foreground">Afrik Farm</h1> */}
              <p className="text-xs text-muted-foreground">LGA Portal</p>
            </div>
          </motion.a>
        </div>
      </motion.div>

      {/* User Profile Section */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="p-6 border-b border-sidebar-border bg-muted/30"
      >
        <div className="flex items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center font-bold text-primary-foreground shadow-md"
          >
            BL
          </motion.div>
          <div>
            <h3 className="text-sm font-bold text-sidebar-foreground">Bwari LGA</h3>
            <p className="text-xs text-muted-foreground font-medium">Coordinator</p>
          </div>
        </div>
      </motion.div>

      {/* Navigation Menu */}
      <nav className="flex-1 p-4 overflow-y-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05,
              },
            },
          }}
          className="space-y-2"
        >
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <motion.div
                key={item.href}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <a
                  href={item.href}
                  className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-200 group ${
                    isActive
                      ? "bg-sidebar-accent text-sidebar-accent-foreground font-semibold shadow-sm border border-primary/20"
                      : "text-muted-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                  }`}
                >
                  <div className={`transition-transform duration-200 ${isActive ? '' : 'group-hover:scale-110'}`}>
                    <Icon className={`w-5 h-5 ${isActive ? "text-primary" : ""}`} />
                  </div>
                  <span className="text-sm font-medium">{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="ml-auto w-2 h-2 rounded-full bg-primary"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </a>
              </motion.div>
            )
          })}
        </motion.div>
      </nav>

      {/* Logout Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="p-4 border-t border-sidebar-border"
      >
        <motion.button
          onClick={onLogout}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-all duration-200 group border border-transparent hover:border-destructive/20"
        >
          <LogOut className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
          <span className="text-sm font-semibold">Logout</span>
        </motion.button>
      </motion.div>
    </aside>
  )
}