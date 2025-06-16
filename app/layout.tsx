import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Ali Mohsin | AI/ML Engineer & Software Developer",
  description:
    "Personal portfolio of Ali Mohsin, Computer Science student at George Mason University specializing in AI/ML and software development",
  generator: "v0.dev",
  icons: {
    icon: '/portfolio/images/brand.jpg',
    shortcut: '/portfolio/images/brand.jpg',
    apple: '/portfolio/images/brand.jpg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
