import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SidebarProvider } from "@/components/ui/sidebar" // Assuming sidebar.tsx is in components/ui
import { Toaster } from "@/components/ui/toaster"
import { cookies } from "next/headers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sirius Payroll 365",
  description: "Comprehensive Payroll Management System",
    generator: 'sharp'
}

export default async function RootLayout({
  // Make the function async
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const cookieStore = await cookies() // Await the cookies() call
  const sidebarCookie = cookieStore.get("sidebar:state")
  const defaultOpen = sidebarCookie ? sidebarCookie.value === "true" : true // Default to true if cookie not set

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <SidebarProvider defaultOpen={defaultOpen}>{children}</SidebarProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
