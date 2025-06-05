import type React from "react"
import { AppSidebar } from "@/components/layout/app-sidebar"
import { AppNavbar } from "@/components/layout/app-navbar"
import { SidebarInset } from "@/components/ui/sidebar" // Assuming sidebar.tsx is in components/ui

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen w-full">
      <AppSidebar />
      <SidebarInset className="flex flex-col flex-1">
        <AppNavbar />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 bg-muted/40 dark:bg-muted/20">{children}</main>
      </SidebarInset>
    </div>
  )
}
