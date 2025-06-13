"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Building2, Settings2, CheckCircle, Search, MessageSquare, FileText, RefreshCw, Info } from "lucide-react"

export default function MultiCompanySetupPage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="space-y-6">
        {/* Enhanced Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/30 rounded-lg blur-md transition-all duration-300 group-hover:bg-primary/40 group-hover:blur-lg" />
            <div className="relative w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-primary/25">
              <Building2 className="h-6 w-6 text-primary-foreground drop-shadow-sm group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-black text-primary">Multi-Company HMRC Setup</h1>
            <p className="text-lg text-muted-foreground mt-1">
              Configure HMRC integration for multiple companies in your organization
            </p>
          </div>
        </div>

        {/* Important Notice */}
        <Alert className="mb-6 bg-primary/5 border-primary/20">
          <Info className="h-5 w-5 text-primary" />
          <AlertDescription className="ml-2 text-base">
            Multi-company setup requires enabling specific features first. Follow this guide carefully to ensure proper
            configuration.
          </AlertDescription>
        </Alert>

        {/* Step 1: Enable Multi-Company Mode */}
        <Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-3 text-xl text-primary">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Settings2 className="h-5 w-5 text-primary" />
                  </div>
                  Enable Multi-Company Mode
                </CardTitle>
                <p className="text-muted-foreground mt-2">Activate multi-company support in your payroll system</p>
              </div>
              <Badge className="bg-primary text-primary-foreground">Step 1</Badge>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    1
                  </div>
                  <p className="text-muted-foreground pt-1">
                    Navigate to <span className="font-semibold text-primary">Payroll Setup</span> page
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    2
                  </div>
                  <p className="text-muted-foreground pt-1">
                    Locate the <span className="font-semibold text-primary">Reporting Section.</span>
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    3
                  </div>
                  <p className="text-muted-foreground pt-1">
                    Enable <span className="font-semibold text-primary">Multi-Company</span> field.
                  </p>
                </div>
              </div>

              <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                <img src="/HMRCSetup3.png" alt="Multi-company setup activation" className="w-full object-contain" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Step 2: Configure Company Details */}
        <Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-3 text-xl text-primary">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Building2 className="h-5 w-5 text-primary" />
                  </div>
                  Configure Company Details
                </CardTitle>
                <p className="text-muted-foreground mt-2">Set up individual company information</p>
              </div>
              <Badge className="bg-primary text-primary-foreground">Step 2</Badge>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    1
                  </div>
                  <p className="text-muted-foreground pt-1">
                    Click <span className="font-semibold text-primary">Payroll Companies</span> at the top of Payroll
                    Setup page
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    2
                  </div>
                  <p className="text-muted-foreground pt-1">
                    Click <span className="font-semibold text-primary">New</span> to add a company
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    3
                  </div>
                  <p className="text-muted-foreground pt-1">
                    Fill in required details for each company (same as Single Company setup)
                  </p>
                </div>
              </div>

              <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                <img src="/HMRCSetup4.png" alt="Company configuration screen" className="w-full object-contain" />
              </div>

              <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                <img src="/HMRCSetup5.png" alt="Company details configuration" className="w-full object-contain" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Additional Setup Information */}
        <Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <Info className="h-5 w-5 text-primary" />
              </div>
              Additional Setup Information
            </CardTitle>
            <p className="text-muted-foreground mt-2">Key information for managing multiple company configurations</p>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02]">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MessageSquare className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Communication & Payment Details</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-1 shrink-0" />
                          Configure unique settings per company
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-1 shrink-0" />
                          Set up individual payment arrangements
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-1 shrink-0" />
                          Manage contact preferences independently
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02]">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">FPS Details</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-1 shrink-0" />
                          Unified FPS settings across all companies
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-1 shrink-0" />
                          Standardised submission format
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-1 shrink-0" />
                          Consistent reporting structure
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02]">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Search className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Accessing Companies</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-1 shrink-0" />
                          Access HMRC Setup via BC search bar
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-1 shrink-0" />
                          Direct navigation through HMRC Setup
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-1 shrink-0" />
                          Easy switching between companies
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02]">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <RefreshCw className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Updates & Maintenance</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-1 shrink-0" />
                          Automatic HMRC updates
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-1 shrink-0" />
                          Regular compliance checks
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-1 shrink-0" />
                          Bulk update capabilities
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <img src="/HMRCSetup6.png" alt="Multi-company management interface" className="w-full object-contain" />
            </div>

            <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <img src="/HMRCSetup7.png" alt="Company selection and configuration" className="w-full object-contain" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
