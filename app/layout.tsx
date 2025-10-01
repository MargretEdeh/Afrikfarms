import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AfrikFarm | Digital Agriculture Investment Platform",
  description:
    "AfrikFarm bridges African farmers with global investors through transparent funding, agronomic support, and data-driven market access. Empowering 120k+ farmers to thrive.",
  keywords: [
    "AfrikFarm",
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
  authors: [{ name: "AfrikFarm Team" }],
  openGraph: {
    title: "AfrikFarm | Digital Agriculture Investment Platform",
    description:
      "Transforming African agriculture by connecting farmers with investors worldwide. Transparent, sustainable, and impactful.",
    url: "https://afrikfarms.vercel.app/", 
    siteName: "AfrikFarm",
    images: [
      {
        url: "/afrikfarm.png",
        width: 1200,
        height: 630,
        alt: "AfrikFarm - Empowering African Farmers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AfrikFarm | Digital Agriculture Investment Platform",
    description:
      "AfrikFarm empowers 120k+ African farmers with global funding, agronomy, and market access.",
    images: ["/og-image.jpg"],
    creator: "@afrikfarm", 
  },
  metadataBase: new URL("https://afrikfarms.vercel.app"), 
  themeColor: "#205E0E",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
