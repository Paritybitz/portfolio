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
        url: '/portfolio/images/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/portfolio/images/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/portfolio/images/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/portfolio/images/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
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
