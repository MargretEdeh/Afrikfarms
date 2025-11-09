import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

import QueryProvider from "@/providers/queryProvider"
import { AuthProvider } from "@/context/AuthContext"
import { LGAProvider } from "@/context/LgaContext"
import { AdminProvider } from "@/context/AdminContext"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Afrik Farm | Digital Agriculture Investment Platform",
  description:
    "Afrik Farm bridges African farmers with global investors through transparent funding, agronomic support, and data-driven market access. Empowering 120k+ farmers to thrive.",
  keywords: [
    "Afrik Farm",
    "agriculture investment",
    "African farmers",
    "impact investing",
    "agribusiness",
    "sustainable farming",
    "farm funding",
    "agritech",
    "diaspora investment",
    "rural development",
  ],
  authors: [{ name: "Afrik Farm Team" }],
  openGraph: {
    title: "Afrik Farm | Digital Agriculture Investment Platform",
    description:
      "Transforming African agriculture by connecting farmers with investors worldwide. Transparent, sustainable, and impactful.",
    url: "https://afrikfarms.vercel.app/",
    siteName: "Afrik Farm",
    images: [
      {
        url: "/afrikfarm.png",
        width: 1200,
        height: 630,
        alt: "Afrik Farm - Empowering African Farmers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Afrik Farm | Digital Agriculture Investment Platform",
    description:
      "Afrik Farm empowers 120k+ African farmers with global funding, agronomy, and market access.",
    images: ["/og-image.jpg"],
    creator: "@AfrikFarm",
  },
  metadataBase: new URL("https://afrikfarms.vercel.app"),
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
}

// ✅ NEW: Move themeColor here instead
export const viewport: Viewport = {
  themeColor: "#205E0E",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryProvider>
          <AuthProvider>
            <AdminProvider>
            <LGAProvider>{children}</LGAProvider>
            </AdminProvider>
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  )
}
