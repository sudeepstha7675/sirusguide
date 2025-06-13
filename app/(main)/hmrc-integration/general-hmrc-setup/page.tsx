"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Link from "next/link"
import { CloudCog, Key, AlertCircle, Check, ArrowRight, Building2, Info } from "lucide-react"

export default function GeneralHmrcSetupPage() {
  const submissionTypes = [
    {
      type: "Full Payment Submission (FPS)",
      timing: "On/After Pay Run",
      frequency: "Every pay period",
      details: "Contains employee payment and deduction details",
    },
    {
      type: "Employer Payment Summary (EPS)",
      timing: "Before 19th of Following Month",
      frequency: "Monthly",
      details: "For statutory recoveries, NIL declarations",
    },
  ]

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="space-y-6">
        {/* Enhanced Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/30 rounded-lg blur-md transition-all duration-300 group-hover:bg-primary/40 group-hover:blur-lg" />
            <div className="relative w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-primary/25">
              <CloudCog className="h-6 w-6 text-primary-foreground drop-shadow-sm group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-black text-primary">HMRC Setup Guide</h1>
            <p className="text-lg text-muted-foreground mt-1">
              Configure HMRC integration and RTI submissions in Sirius Payroll 365.
            </p>
          </div>
        </div>

        {/* Enhanced Alert */}
        <Alert className="mb-6 bg-primary/5 border-primary/20">
          <Info className="h-5 w-5 text-primary" />
          <AlertDescription className="ml-2 text-base">
            This guide explains the HMRC integration setup process, including required credentials, company settings,
            and submission preferences for compliant RTI integration.
          </AlertDescription>
        </Alert>

        {/* Navigation Instructions Card */}
        <Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <Info className="h-5 w-5 text-primary" />
              </div>
              How to Access HMRC Setup
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  1
                </div>
                <p className="text-muted-foreground pt-1">
                  Search for <span className="font-bold text-primary">"HMRC Setup"</span> in the BC search icon, or
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
                  Navigate to <span className="font-bold text-primary">Setup → HMRC Integration → HMRC Setup</span>
                </p>
              </div>
            </div>

            <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <img src="/HMRCSetup1.png" alt="Step by Step guide to HMRC Setup" className="w-full object-contain" />
            </div>
          </CardContent>
        </Card>

        {/* Prerequisites Card */}
        <Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <AlertCircle className="h-5 w-5 text-primary" />
              </div>
              Before You Begin
            </CardTitle>
            <p className="text-muted-foreground mt-2">Essential prerequisites for HMRC integration setup</p>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center mb-4">
                    <Key className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Gateway Access</h3>
                  <p className="text-sm text-muted-foreground">
                    Valid HMRC Gateway credentials with RTI submission access enabled
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] bg-gradient-to-br from-orange-50 to-orange-100/50 border-orange-200">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center mb-4">
                    <Building2 className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">PAYE Reference</h3>
                  <p className="text-sm text-muted-foreground">Your company's unique PAYE reference number from HMRC</p>
                </CardContent>
              </Card>

              <Card className="border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] bg-gradient-to-br from-purple-50 to-purple-100/50 border-purple-200">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-purple-600 flex items-center justify-center mb-4">
                    <AlertCircle className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Tax Office Details</h3>
                  <p className="text-sm text-muted-foreground">Your assigned tax office number for HMRC submissions</p>
                </CardContent>
              </Card>

              <Card className="border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] bg-gradient-to-br from-green-50 to-green-100/50 border-green-200">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-green-600 flex items-center justify-center mb-4">
                    <ArrowRight className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Submission Schedule</h3>
                  <p className="text-sm text-muted-foreground">
                    Understanding of your payroll and submission frequency
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <img src="/HMRCUpdate1.png" alt="HMRC Setup Overview" className="w-full object-contain" />
            </div>
          </CardContent>
        </Card>

        {/* Gateway Credentials Setup */}
        <Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <Key className="h-5 w-5 text-primary" />
              </div>
              Gateway Credentials Setup
            </CardTitle>
            <p className="text-muted-foreground mt-2">
              Required HMRC Gateway access details for secure RTI submissions
            </p>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="rounded-md border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="font-semibold">Configuration Field</TableHead>
                    <TableHead className="font-semibold">Example Format</TableHead>
                    <TableHead className="font-semibold">Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="hover:bg-muted/30 transition-colors">
                    <TableCell className="font-medium">Gateway ID</TableCell>
                    <TableCell className="font-mono">ABC123456789</TableCell>
                    <TableCell>Your HMRC Online Services ID</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-muted/30 transition-colors">
                    <TableCell className="font-medium">Gateway Password</TableCell>
                    <TableCell className="font-mono">••••••••••••</TableCell>
                    <TableCell>Your HMRC portal password</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            {/* Company Setup Type */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">Company Setup Type</h3>
              <p className="text-sm text-muted-foreground">
                Select your company type below to continue with the detailed setup process. Click a card to proceed:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link href="/hmrc-integration/single-company-setup" className="group">
                  <Card className="border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200 group-hover:from-blue-100 group-hover:to-blue-200/50 cursor-pointer relative">
                    <div className="absolute right-2 top-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      Select →
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Building2 className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg group-hover:text-blue-600 transition-colors">
                            Single Company
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Set up HMRC integration for a single legal entity
                          </p>
                          <div className="mt-2 text-xs text-muted-foreground opacity-75">
                            Best for organisations with one PAYE reference
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/hmrc-integration/multi-company-setup" className="group">
                  <Card className="border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] bg-gradient-to-br from-purple-50 to-purple-100/50 border-purple-200 group-hover:from-purple-100 group-hover:to-purple-200/50 cursor-pointer relative">
                    <div className="absolute right-2 top-2 bg-purple-600 text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      Select →
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Building2 className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg group-hover:text-purple-600 transition-colors">
                            Multi-Company Setup
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Configure HMRC integration for multiple legal entities
                          </p>
                          <div className="mt-2 text-xs text-muted-foreground opacity-75">
                            Ideal for groups with multiple PAYE references
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </div>

            {/* Gateway Setup Tips */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-primary">Gateway Setup Tips</h3>
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    Ensure your Gateway account has RTI submission permissions
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    Keep your credentials secure and update them regularly
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                  <p className="text-sm text-muted-foreground">Test your connection after setup</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Important Notices */}
        <div className="space-y-3 mb-6">
          <Alert className="bg-amber-50 border-amber-200">
            <AlertCircle className="h-5 w-5 text-amber-600" />
            <AlertDescription className="ml-2 text-base text-amber-800">
              <span className="font-semibold">Important:</span> Ensure your PAYE reference matches exactly with HMRC
              records
            </AlertDescription>
          </Alert>

          <Alert className="bg-amber-50 border-amber-200">
            <AlertCircle className="h-5 w-5 text-amber-600" />
            <AlertDescription className="ml-2 text-base text-amber-800">
              <span className="font-semibold">Note:</span> Tax office numbers are required for all HMRC submissions
            </AlertDescription>
          </Alert>
        </div>

        {/* Submission Types */}
        <Card className="border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <CloudCog className="h-5 w-5 text-primary" />
              </div>
              Submission Types
            </CardTitle>
            <p className="text-muted-foreground mt-2">Types of HMRC submissions and their requirements</p>
          </CardHeader>
          <CardContent className="p-6">
            <div className="rounded-md border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="font-semibold">Type</TableHead>
                    <TableHead className="font-semibold">When</TableHead>
                    <TableHead className="font-semibold">Frequency</TableHead>
                    <TableHead className="font-semibold">Details</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {submissionTypes.map((item, index) => (
                    <TableRow key={index} className="hover:bg-muted/30 transition-colors">
                      <TableCell className="font-medium">{item.type}</TableCell>
                      <TableCell>{item.timing}</TableCell>
                      <TableCell>
                        <Badge className="bg-blue-600 text-white hover:bg-blue-700">{item.frequency}</Badge>
                      </TableCell>
                      <TableCell>{item.details}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
