import type React from "react"
import type { Metadata } from "next"
import { Bebas_Neue, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Suncrest Roleplay",
  description: "The most immersive FiveM roleplay experience. Join the streets today.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
        type: "image/png",
        sizes: "32x32",
      },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Suncrest Roleplay",
    description: "The most immersive FiveM roleplay experience. Join the streets today.",
    url: "https://YOURDOMAIN.com", // ← update to your real domain
    siteName: "Suncrest Roleplay",
    images: [
      {
        url: "/card.png", // ← make sure this file exists in /public
        width: 1200,
        height: 630,
        alt: "Suncrest Roleplay",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suncrest Roleplay",
    description: "The most immersive FiveM roleplay experience. Join the streets today.",
    images: ["/card.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${bebas.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
