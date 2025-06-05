"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from "next/link"
import {
  CloudCog,
  Key,
  AlertCircle,
  Check,
  ArrowRight,
  Building2
} from "lucide-react"

export default function GeneralHmrcSetupPage() {
  const submissionTypes = [
    {
      type: "Full Payment Submission (FPS)",
      timing: "On/After Pay Run",
      frequency: "Every pay period",
      details: "Contains employee payment and deduction details"
    },
    {
      type: "Employer Payment Summary (EPS)",
      timing: "Before 19th of Following Month",
      frequency: "Monthly",
      details: "For statutory recoveries, NIL declarations"
    }
  ]

  const companyConfig = [
    { field: "Gateway ID", example: "ABC123456789" },
    { field: "Gateway Password", example: "••••••••••••" },
    { field: "Company Type", example: "Single Company" },
    { field: "Tax Office Number", example: "123" },
    { field: "PAYE Reference", example: "123/AB12345" }
  ]

  const testResults = [
    { test: "Gateway Credentials", status: "Success", lastTested: "Today at 14:30" },
    { test: "Test FPS Submission", status: "Accepted", lastTested: "Today at 14:35" },
    { test: "Test EPS Submission", status: "Accepted", lastTested: "Today at 14:40" }
  ]

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-sirius-purple rounded-lg flex items-center justify-center">
            <CloudCog className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-primary">HMRC Setup Guide</h1>
            <p className="text-muted-foreground text-lg mt-1">
              Learn how to configure HMRC integration and RTI submissions in Sirius 365
            </p>
          </div>
        </div>

        <p className="text-muted-foreground mb-6 text-lg">
          This guide explains the HMRC integration setup process in Sirius 365, showing you the required credentials,
          company settings, and submission preferences for compliant RTI integration.
        </p>

        {/* Navigation Instructions Card */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center gap-2">
              <CardTitle className="text-2xl text-primary">How to Access HMRC Setup</CardTitle>
            </div>
            <p className="text-muted-foreground mt-2">
              Follow these steps to navigate to the HMRC setup page
            </p>
          </CardHeader>
          <CardContent>
            <div className="bg-muted/50 p-6 rounded-lg border">
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <span className="step-number bg-sirius-blue text-white">1</span>
                  <p className="text-muted-foreground">
                    Search for <span className="font-semibold text-primary">"HMRC Setup"</span> in the BC search icon
                  </p>
                </div>

                <div className="relative pl-4 before:absolute before:left-4 before:top-0 before:h-full before:w-px before:bg-border">
                  <p className="text-sm text-muted-foreground">OR</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="step-number bg-sirius-blue text-white">1</span>
                    <p className="text-muted-foreground">
                      Navigate to <span className="font-semibold text-primary">Setup</span>
                    </p>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="step-number bg-sirius-blue text-white">2</span>
                    <p className="text-muted-foreground">
                      Click on <span className="font-semibold text-primary">HMRC Integration</span>
                    </p>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="step-number bg-sirius-blue text-white">3</span>
                    <p className="text-muted-foreground">
                      Select <span className="font-semibold text-primary">HMRC Setup</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
           <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <img
                src="/HMRCSetup1.png"
                alt="Step by Step guide to Bank Account Setup"
                className="w-full object-contain"
              />
            </div>
          </CardContent>
        </Card>

        {/* Prerequisites Card */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Before You Begin</CardTitle>
            <p className="text-muted-foreground mt-2">
              Essential prerequisites for HMRC integration setup
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="bg-gradient-to-br from-sirius-blue/10 to-sirius-blue/5 border border-sirius-blue/20">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-sirius-blue flex items-center justify-center mb-4">
                    <Key className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Gateway Access</h3>
                  <p className="text-sm text-muted-foreground">
                    Valid HMRC Gateway credentials with RTI submission access enabled
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-sirius-orange/10 to-sirius-orange/5 border border-sirius-orange/20">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-sirius-orange flex items-center justify-center mb-4">
                    <Building2 className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">PAYE Reference</h3>
                  <p className="text-sm text-muted-foreground">
                    Your company's unique PAYE reference number from HMRC
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-sirius-purple/10 to-sirius-purple/5 border border-sirius-purple/20">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-sirius-purple flex items-center justify-center mb-4">
                    <AlertCircle className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Tax Office Details</h3>
                  <p className="text-sm text-muted-foreground">
                    Your assigned tax office number for HMRC submissions
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-sirius-green/10 to-sirius-green/5 border border-sirius-green/20">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-sirius-green flex items-center justify-center mb-4">
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
              <img
                src="/HMRCUpdate1.png"
                alt="HMRC Setup Overview"
                className="w-full object-contain"
              />
            </div>
          </CardContent>
        </Card>

        {/* Step 1: Gateway Setup */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center gap-2">
              <CardTitle className="text-2xl text-primary">Gateway Credentials Setup</CardTitle>
            </div>
            <p className="text-muted-foreground mt-2">
              Required HMRC Gateway access details for secure RTI submissions
            </p>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Configuration Field</TableHead>
                  <TableHead>Example Format</TableHead>
                  <TableHead>Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Gateway ID</TableCell>
                  <TableCell>ABC123456789</TableCell>
                  <TableCell>Your HMRC Online Services ID</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Gateway Password</TableCell>
                  <TableCell>••••••••••••</TableCell>
                  <TableCell>Your HMRC portal password</TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <div className="mt-6 mb-6">
              <h3 className="text-lg font-semibold mb-2">Company Setup Type</h3>
              <p className="text-sm text-muted-foreground mb-4">Select your company type below to continue with the detailed setup process. Click on a card to proceed:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/hmrc-integration/single-company-setup" className="group">
                  <Card className="bg-gradient-to-br from-sirius-blue/10 to-sirius-blue/5 border border-sirius-blue/20 group-hover:from-sirius-blue/20 group-hover:to-sirius-blue/10 group-hover:border-sirius-blue/40 group-hover:shadow-md transition-all cursor-pointer relative">
                    <div className="absolute right-2 top-2 bg-sirius-blue text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      Select →
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-sirius-blue flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Building2 className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg group-hover:text-sirius-blue transition-colors">Single Company</h4>
                          <p className="text-sm text-muted-foreground">
                            Set up HMRC integration for a single legal entity
                          </p>
                          <div className="mt-2 text-xs text-muted-foreground opacity-75">
                            Best for organizations with one PAYE reference
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/hmrc-integration/multi-company-setup" className="group">
                  <Card className="bg-gradient-to-br from-sirius-purple/10 to-sirius-purple/5 border border-sirius-purple/20 group-hover:from-sirius-purple/20 group-hover:to-sirius-purple/10 group-hover:border-sirius-purple/40 group-hover:shadow-md transition-all cursor-pointer relative">
                    <div className="absolute right-2 top-2 bg-sirius-purple text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      Select →
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-sirius-purple flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Building2 className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg group-hover:text-sirius-purple transition-colors">Multi-Company Setup</h4>
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

            <div className="mt-6">
              <h3 className="text-lg font-semibold">Gateway Setup Tips</h3>
              <ul className="space-y-2 text-sm text-muted-foreground mt-2">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-sirius-green mt-0.5 shrink-0" />
                  Ensure your Gateway account has RTI submission permissions
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-sirius-green mt-0.5 shrink-0" />
                  Keep your credentials secure and update them regularly
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-sirius-green mt-0.5 shrink-0" />
                  Test your connection after setup
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8 overflow-hidden">
          <CardContent className="p-0">
            <div className="divide-y divide-border">
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-sirius-orange/5 to-transparent border-l-2 border-sirius-orange hover:from-sirius-orange/10 transition-colors">
                <AlertCircle className="h-5 w-5 text-sirius-orange mt-1 shrink-0" />
                <p className="text-sm text-muted-foreground py-0.5">
                  Ensure your PAYE reference matches exactly with HMRC records
                </p>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-sirius-orange/5 to-transparent border-l-2 border-sirius-orange hover:from-sirius-orange/10 transition-colors">
                <AlertCircle className="h-5 w-5 text-sirius-orange mt-1 shrink-0" />
                <p className="text-sm text-muted-foreground py-0.5">
                  Tax office numbers are required for all HMRC submissions
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Step 3: Submission Settings */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center gap-2">
              <CardTitle className="text-2xl text-primary">Submission Types</CardTitle>
            </div>
            <p className="text-muted-foreground mt-2">
              Types of HMRC submissions and their requirements
            </p>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Type</TableHead>
                  <TableHead>When</TableHead>
                  <TableHead>Frequency</TableHead>
                  <TableHead>Details</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {submissionTypes.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.type}</TableCell>
                    <TableCell>{item.timing}</TableCell>
                    <TableCell>{item.frequency}</TableCell>
                    <TableCell>{item.details}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* Step number style */}
      <style>
        {`
          .step-number {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            height: 1.75rem;
            width: 1.75rem;
            font-size: 0.875rem;
            font-weight: 600;
            border-radius: 9999px;
            flex-shrink: 0;
          }
        `}
      </style>
    </div>
  )
}