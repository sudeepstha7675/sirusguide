"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Settings2, Info } from "lucide-react"

export default function GeneralPayrollSetupPage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="space-y-6">
        {/* Enhanced Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/30 rounded-lg blur-md transition-all duration-300 group-hover:bg-primary/40 group-hover:blur-lg" />
            <div className="relative w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-primary/25">
              <Settings2 className="h-6 w-6 text-primary-foreground drop-shadow-sm group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-black text-primary">General Payroll Setup</h1>
            <p className="text-muted-foreground text-lg mt-1">
              Configure the core settings for your payroll processing.
            </p>
          </div>
        </div>

        {/* Enhanced Alert */}
        <Alert className="mb-6 bg-primary/5 border-primary/20">
          <Info className="h-5 w-5 text-primary" />
          <AlertDescription className="ml-2 text-base">
            This section allows you to define fundamental payroll parameters for your organisation. As per the
            Sirius Payroll 365 setup guide, this involves configuring various options tailored to your company's needs.
          </AlertDescription>
        </Alert>

        {/* Setup Steps Card */}
        <Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
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
    <p className="text-muted-foreground pt-1">
      Search for <span className="font-semibold text-primary">"Payroll Setup"</span> in the BC search icon
    </p>
  </div>

  <div className="flex justify-start pl-10">
    <div className="inline-flex items-center justify-center px-4 py-2 bg-primary/10 rounded-full">
      <span className="text-primary font text-medium">OR</span>
    </div>
  </div>

  <div className="flex items-start gap-3">
    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
      2
    </div>
    <p className="text-muted-foreground pt-1">
      Navigate to{" "}
      <span className="font-semibold text-primary">
        Setup → Payroll Setups drop-down menu → Select Payroll Setup
      </span>
    </p>
  </div>
</div>

            <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <img
                src="/PayrollSetup1.png"
                alt="Step by Step guide to Payroll Setup"
                className="w-full object-contain"
              />
            </div>
          </CardContent>
        </Card>

        {/* Payroll Setup Details Card */}
        <Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <Settings2 className="h-5 w-5 text-primary" />
              </div>
              Payroll Setup Details
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <p className="text-muted-foreground">
              <span className="font-semibold text-primary">Payroll Setup</span> mainly consists of the following parts
              which are described in the document:
            </p>
            <p className="text-muted-foreground">
              <span className="font-semibold text-primary">User Payroll Setup</span> should be as per below screenshot:
            </p>

            <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <img src="/PayrollSetup2.png" alt="User Payroll Setup Screenshot" className="w-full object-contain" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
