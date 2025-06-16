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
    icon: [
      {
        url: '/portfolio/images/rocket.png',
        sizes: '96x96',
        type: 'image/jpeg',
      },
      {
        url: '/portfolio/images/rocket.png',
        sizes: '192x192',
        type: 'image/jpeg',
      },
      {
        url: '/portfolio/images/rocket.png',
        sizes: '256x256',
        type: 'image/jpeg',
      }
    ],
    shortcut: '/portfolio/images/rocket.png',
    apple: '/portfolio/images/rocket.png',
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
