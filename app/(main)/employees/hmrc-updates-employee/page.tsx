"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CloudUpload, RefreshCcw, FileCheck, FileText, Info, AlertTriangle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function HmrcUpdatesEmployeePage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="space-y-6">
        {/* Enhanced Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/30 rounded-lg blur-md transition-all duration-300 group-hover:bg-primary/40 group-hover:blur-lg" />
            <div className="relative w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-primary/25">
              <CloudUpload className="h-6 w-6 text-primary-foreground drop-shadow-sm group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-black text-primary">HMRC Updates</h1>
            <p className="text-lg text-muted-foreground mt-1">
              View and manage HMRC document updates and tax code changes.
            </p>
          </div>
        </div>

        {/* Enhanced Alert */}
        <Alert className="mb-6 bg-primary/5 border-primary/20">
          <Info className="h-5 w-5 text-primary" />
          <AlertDescription className="ml-2 text-base">
            Track and apply HMRC updates including tax code changes, previous tax paid information, and student loan
            updates from official HMRC documents.
          </AlertDescription>
        </Alert>

        {/* Important Notice */}
        <Alert className="mb-6 bg-amber-50 border-amber-200">
          <AlertTriangle className="h-5 w-5 text-amber-600" />
          <AlertDescription className="ml-2 text-base text-amber-800">
            <span className="font-semibold">Important:</span> Users must have valid HMRC Employer Gateway ID and
            Password to fetch latest updates. It is recommended to apply HMRC updates before making any changes.
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
                  Search for <span className="font-bold text-primary">"HMRC Updates"</span> in the BC search icon
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
                  Navigate to <span className="font-bold text-primary">Employees → HMRC Updates</span>.
                </p>
              </div>
            </div>

            <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <img
                src="/HMRCUpdate1.png"
                alt="Step by Step guide to HMRC Updates Setup"
                className="w-full object-contain"
              />
            </div>
          </CardContent>
        </Card>

        {/* Available HMRC Documents Card */}
        <Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <CloudUpload className="h-5 w-5 text-primary" />
              </div>
              Available HMRC Documents
            </CardTitle>
            <p className="text-muted-foreground mt-2">Overview of HMRC documents and updates in Sirius Payroll 365</p>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-border/50 rounded-lg p-4 bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200">
                <div className="flex items-center gap-3 mb-3">
                  <Badge className="bg-blue-600 text-white">P6</Badge>
                  <h3 className="font-semibold text-lg text-foreground">Tax Code Notice</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Official HMRC notices for employee tax code changes and updates.
                  </p>
                  <p className="text-sm text-muted-foreground">View and apply new tax codes from P6 documents.</p>
                </div>
              </div>

              <div className="border border-border/50 rounded-lg p-4 bg-gradient-to-br from-green-50 to-green-100/50 border-green-200">
                <div className="flex items-center gap-3 mb-3">
                  <Badge className="bg-green-600 text-white">P9</Badge>
                  <h3 className="font-semibold text-lg text-foreground">Tax Code Update</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Annual coding notices with updated tax codes for new tax year.
                  </p>
                  <p className="text-sm text-muted-foreground">Process P9 updates for tax year transitions.</p>
                </div>
              </div>

              <div className="border border-border/50 rounded-lg p-4 bg-gradient-to-br from-orange-50 to-orange-100/50 border-orange-200">
                <div className="flex items-center gap-3 mb-3">
                  <Badge className="bg-orange-500 text-white">RTI</Badge>
                  <h3 className="font-semibold text-lg text-foreground">Real Time Information</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Real-time PAYE information including National Insurance Number Details.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Review and apply RTI updates for accurate payroll processing.
                  </p>
                </div>
              </div>

              <div className="border border-border/50 rounded-lg p-4 bg-gradient-to-br from-purple-50 to-purple-100/50 border-purple-200">
                <div className="flex items-center gap-3 mb-3">
                  <Badge className="bg-purple-600 text-white">SL1/SL2/PG1/PG2</Badge>
                  <h3 className="font-semibold text-lg text-foreground">Student Loan Notices</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Student loan start and stop notices from HMRC.</p>
                  <p className="text-sm text-muted-foreground">Manage student loan deductions based on HMRC notices.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* HMRC Updates Management Card */}
        <Card className="border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <CloudUpload className="h-5 w-5 text-primary" />
              </div>
              HMRC Updates Management
            </CardTitle>
            <p className="text-muted-foreground mt-2">Available functions for managing HMRC updates</p>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-border/50 rounded-lg p-6 bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200">
                <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center mb-4">
                  <RefreshCcw className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Fetch Updates</h3>
                <p className="text-muted-foreground text-sm">
                  Function to retrieve latest updates from HMRC using Gateway credentials.
                </p>
              </div>

              <div className="border border-border/50 rounded-lg p-6 bg-gradient-to-br from-green-50 to-green-100/50 border-green-200">
                <div className="w-10 h-10 rounded-lg bg-green-600 flex items-center justify-center mb-4">
                  <FileCheck className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Apply Updates</h3>
                <p className="text-muted-foreground text-sm">
                  Feature to review and apply pending HMRC updates to employee records.
                </p>
              </div>

              <div className="border border-border/50 rounded-lg p-6 bg-gradient-to-br from-orange-50 to-orange-100/50 border-orange-200">
                <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center mb-4">
                  <FileText className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">View History</h3>
                <p className="text-muted-foreground text-sm">
                  Option to access complete history of HMRC updates and changes.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
