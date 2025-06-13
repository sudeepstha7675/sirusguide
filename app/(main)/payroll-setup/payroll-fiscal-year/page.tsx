"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CalendarDays, Info } from "lucide-react"

export default function PayrollFiscalYearPage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="space-y-6">
        {/* Enhanced Header - Using Sirius Typography */}
        <div className="flex items-center gap-3 mb-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/30 rounded-lg blur-md transition-all duration-300 group-hover:bg-primary/40 group-hover:blur-lg" />
            <div className="relative w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-primary/25">
              <CalendarDays className="h-6 w-6 text-primary-foreground drop-shadow-sm group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div>
            {/* H1 - 50px, Albert Sans Black */}
            <h1 className="text-3xl font-black text-primary">Payroll Fiscal Year Setup</h1>
            {/* Subtitle - 18px, Albert Sans Bold */}
            <p className="text-lg text-muted-foreground mt-1">Configure fiscal year settings for payroll processing.</p>
          </div>
        </div>

        {/* Enhanced Alert */}
        <Alert className="mb-6 bg-primary/5 border-primary/20">
          <Info className="h-5 w-5 text-primary" />
          <AlertDescription className="ml-2 text-base">
            Payroll Fiscal Year Setup encompasses a range of functions where users can define the Fiscal Year for
            payroll and select the active fiscal year or create or edit the Fiscal year by clicking at New or Edit.
          </AlertDescription>
        </Alert>

        {/* Setup Steps Card */}
        <Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            {/* H3 - 24px, Albert Sans Bold */}
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <Info className="h-5 w-5 text-primary" />
              </div>
              Setup Steps
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  1
                </div>
                {/* Body text - 12px, Albert Sans Regular */}
                <p className="text-muted-foreground pt-1">
                  Navigate to <span className="font-bold text-primary">Setup</span>.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  2
                </div>
                <p className="text-muted-foreground pt-1">
                  Click on the <span className="font-bold text-primary">Payroll Setups</span> dropdown menu.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  3
                </div>
                <p className="text-muted-foreground pt-1">
                  Select <span className="font-bold text-primary">Payroll Fiscal Year</span>.
                </p>
              </div>
            </div>

            <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <img
                src="/FiscalYearSetup1.png"
                alt="Step by Step guide to Fiscal Year Setup"
                className="w-full object-contain"
              />
            </div>
          </CardContent>
        </Card>

        {/* Fiscal Year Details Card */}
        <Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <CalendarDays className="h-5 w-5 text-primary" />
              </div>
              Available Fiscal Years
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <p className="text-muted-foreground">
              Highlighted below are the available fiscal year in Sirius Payroll 365 which shows once the Payroll Fiscal
              Year is configured by the user to be selected as per requirement.
            </p>

            <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <img
                src="/FiscalYearSetup2.png"
                alt="Available Fiscal Years Configuration"
                className="w-full object-contain"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
