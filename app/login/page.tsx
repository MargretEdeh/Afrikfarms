"use client"

import type React from "react"
import Image from "next/image"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sprout, Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const adminTypes = [
  { value: "super", label: "Super Admin" },
  { value: "country", label: "Country Admin" },
  { value: "state", label: "State Admin" },
  { value: "lga", label: "LGA Admin" },
]

export default function LoginPage() {
  const [loginType, setLoginType] = useState<"investor" | "admin">("admin")
  const [selectedAdmin, setSelectedAdmin] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate login
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsLoading(false)
    window.location.href = `/dashboard?type=${loginType}&admin=${selectedAdmin}`
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Side - Branding */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="lg:w-1/2 bg-primary relative overflow-hidden flex items-center justify-center p-8 lg:p-16"
      >
        {/* Decorative Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-secondary rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-xl">

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-4xl flex gap-5  lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight text-balance"
          >
         <Image src="/afrikfarms.png" alt="AfrikFarm Logo" width={100} height={100} />
            Cultivating Africa's Agricultural Future
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-lg text-primary-foreground/90 mb-8 leading-relaxed text-pretty"
          >
            Bridge the gap between farmers across Africa and investors worldwide. Experience transparent, traceable, and
            sustainable agriculture investment where capital meets cultivation.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { label: "Countries", value: "12+" },
              { label: "Active Farms", value: "500+" },
              { label: "Investors", value: "10K+" },
              { label: "Success Rate", value: "98%" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4 border border-primary-foreground/20"
              >
                <div className="text-3xl font-bold text-secondary mb-1">{stat.value}</div>
                <div className="text-sm text-primary-foreground/80">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Right Side - Login Form */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="lg:w-1/2 flex items-center justify-center p-8 lg:p-16 bg-background"
      >
        <div className="w-full max-w-md">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-foreground mb-2">Login to Your Account</h2>
            <p className="text-muted-foreground">Sign in to access your dashboard</p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex gap-2 mb-6 p-1 bg-muted rounded-lg"
          >
            <button
              type="button"
              onClick={() => {
                setLoginType("investor")
                setSelectedAdmin("")
              }}
              className={`flex-1 py-2.5 px-4 rounded-md font-medium transition-all duration-300 ${
                loginType === "investor"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Investor
            </button>
            <button
              type="button"
              onClick={() => {
                setLoginType("admin")
                setSelectedAdmin("")
              }}
              className={`flex-1 py-2.5 px-4 rounded-md font-medium transition-all duration-300 ${
                loginType === "admin"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Admin
            </button>
          </motion.div>

          <motion.form
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            onSubmit={handleLogin}
            className="space-y-6"
          >
            <AnimatePresence mode="wait">
              {loginType === "admin" && (
                <motion.div
                  key="admin-type"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-2"
                >
                  <Label htmlFor="admin-type" className="text-foreground font-medium">
                    Admin Type
                  </Label>
                  <Select value={selectedAdmin} onValueChange={setSelectedAdmin}>
                    <SelectTrigger
                      id="admin-type"
                      className="w-full h-12 bg-card border-input hover:border-primary transition-colors"
                    >
                      <SelectValue placeholder="Select your admin role" />
                    </SelectTrigger>
                    <SelectContent>
                      {adminTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Email/Phone Input */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground font-medium">
                Email or Phone Number
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="email"
                  type="text"
                  placeholder="Enter your email or phone number"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-11 h-12 bg-card border-input hover:border-primary focus:border-primary transition-colors"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground font-medium">
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-11 pr-11 h-12 bg-card border-input hover:border-primary focus:border-primary transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end">
              <button
                type="button"
                className="text-sm text-primary hover:text-primary/80 font-medium transition-colors"
              >
                Forgot Password?
              </button>
            </div>

            {/* Login Button */}
            <Button
              type="submit"
              disabled={isLoading || !email || !password}
              className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isLoading ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                    />
                    Signing in...
                  </>
                ) : (
                  <>
                    Login
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </span>
              <motion.div
                className="absolute inset-0 bg-secondary"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-8 text-center"
          >
            <p className="text-sm text-muted-foreground">
              Don't have an account?{" "}
              <button className="text-primary hover:text-primary/80 font-medium transition-colors">
                Contact Support
              </button>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
