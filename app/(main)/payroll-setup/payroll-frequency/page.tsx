"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Clock, Info } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export default function PayrollFrequencyPage() {
  const frequencies = [
    { code: "BIWEEKLY", description: "Biweekly", hmrcFrequency: "W2 (Fortnightly)", epsFrequency: false },
    { code: "EPSFREQ", description: "Epsfreq", hmrcFrequency: "M1 (Calendar Monthly)", epsFrequency: true },
    { code: "FOURWEEKLY", description: "Fourweekly", hmrcFrequency: "W4 (4 Weekly)", epsFrequency: false },
    { code: "MONTHLY", description: "Monthly", hmrcFrequency: "M1 (Calendar Monthly)", epsFrequency: false },
    { code: "WEEKLY", description: "Weekly", hmrcFrequency: "W1 (Weekly)", epsFrequency: false },
  ]

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="space-y-6">
        {/* Enhanced Header - Using Sirius Typography */}
        <div className="flex items-center gap-3 mb-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/30 rounded-lg blur-md transition-all duration-300 group-hover:bg-primary/40 group-hover:blur-lg" />
            <div className="relative w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-primary/25">
              <Clock className="h-6 w-6 text-primary-foreground drop-shadow-sm group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div>
            {/* H1 - 50px, Albert Sans Black */}
            <h1 className="text-3xl font-black text-primary">Payroll Frequency Setup</h1>
            {/* Subtitle - 18px, Albert Sans Bold */}
            <p className="text-lg text-muted-foreground mt-1">
              Configure pay frequency settings for your organization.
            </p>
          </div>
        </div>

        {/* Enhanced Alert */}
        <Alert className="mb-6 bg-primary/5 border-primary/20">
          <Info className="h-5 w-5 text-primary" />
          <AlertDescription className="ml-2 text-base">
            Payroll Frequency Setup encompasses a range of functions where users can define the pay frequency which
            might be Weekly, Biweekly, Four Weekly, Monthly etc. or as per company policy.
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
                  Select <span className="font-bold text-primary">Pay Frequency Setup</span>.
                </p>
              </div>
            </div>

            <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <img
                src="/PayFrequencySetup1.png"
                alt="Step by Step guide to Pay Frequency Setup"
                className="w-full object-contain"
              />
            </div>
          </CardContent>
        </Card>

        {/* Pay Frequency Details Card */}
        <Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              Pay Frequency Configuration
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <p className="text-muted-foreground">
              Highlighted below are the available Pay Frequency in Sirius Payroll 365 which shows once it is configured
              by the user which can be selected as per requirement and is completely user-specific.
            </p>

            <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <img
                src="/PayFrequencySetup2.png"
                alt="Pay Frequency Configuration Screenshot"
                className="w-full object-contain"
              />
            </div>
          </CardContent>
        </Card>

        {/* Available Pay Frequency Table Card */}
        <Card className="border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              Available Pay Frequency
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="rounded-md border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="font-semibold">Code</TableHead>
                    <TableHead className="font-semibold">Description</TableHead>
                    <TableHead className="font-semibold">HMRC Pay Frequency</TableHead>
                    <TableHead className="font-semibold">EPS Frequency</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {frequencies.map((freq) => (
                    <TableRow key={freq.code} className="hover:bg-muted/30 transition-colors">
                      <TableCell className="font-mono font-medium">{freq.code}</TableCell>
                      <TableCell className="font-medium">{freq.description}</TableCell>
                      <TableCell>{freq.hmrcFrequency}</TableCell>
                      <TableCell>
                        <Badge
                          className={
                            freq.epsFrequency
                              ? "bg-green-600 text-white hover:bg-green-700"
                              : "bg-gray-500 text-white hover:bg-gray-600"
                          }
                        >
                          {freq.epsFrequency ? "TRUE" : "FALSE"}
                        </Badge>
                      </TableCell>
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
