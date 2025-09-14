import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Suspense } from "react"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})


export const metadata: Metadata = {
  title: "Gupta Fruits - Fresh Fruits Delivered",
  description:
    "Premium quality fresh fruits delivered to your doorstep. Wide variety of seasonal and exotic fruits available.",
    icons: {
    icon: "/fruit.png", // or .png
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>
          <Navigation />
          {children}
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
