"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock } from "lucide-react"
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
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-sirius-purple rounded-lg flex items-center justify-center">
            <Clock className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-primary">Payroll Frequency Setup</h1>
            <p className="text-muted-foreground text-lg mt-1">
              Configure pay frequency settings for your organization.
            </p>
          </div>
        </div>

        <p className="text-muted-foreground mb-6 text-lg">
          Payroll Frequency Setup encompasses a range of functions where users can define the pay frequency which might be Weekly, Biweekly, Four Weekly,
          Monthly etc. or as per company policy.
        </p>

        <div className="bg-muted/50 p-6 rounded-lg border mb-6">
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="step-number bg-sirius-blue text-white">1</span>
              <p className="text-muted-foreground">
                Navigate to <span className="font-semibold text-primary">Setup</span>.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="step-number bg-sirius-blue text-white">2</span>
              <p className="text-muted-foreground">
                Click on the <span className="font-semibold text-primary">Payroll Setups</span> dropdown menu.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="step-number bg-sirius-blue text-white">3</span>
              <p className="text-muted-foreground">
                Select <span className="font-semibold text-primary">Pay Frequency Setup</span>.
              </p>
            </div>
          </div>

          <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
            <img
              src="/PayFrequencySetup1.png"
              alt="Step by Step guide to Pay Frequency Setup"
              className="w-full object-contain hover:brightness-105 transition-all duration-300"
            />
          </div>
        </div>
      </div>
      <p className="text-muted-foreground mb-6 text-lg">
        Highlighted below are the available Pay Frequency in Sirius Payroll 365 which shows once it is configured by the user which can be selected as per
        requirement and is completely user-specific.
      </p>

      <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
        <img
          src="/PayFrequencySetup2.png"
          alt="Step by Step guide to Pay Frequency Setup"
          className="w-full object-contain hover:brightness-105 transition-all duration-300"
        />
      </div>
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <CardTitle className="text-2xl">Available Pay Frequency</CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead>Code</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>HMRC Pay Frequency</TableHead>
                  <TableHead>EPS Frequency</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {frequencies.map((freq) => (
                  <TableRow key={freq.code}>
                    <TableCell className="font-mono">{freq.code}</TableCell>
                    <TableCell>{freq.description}</TableCell>
                    <TableCell>{freq.hmrcFrequency}</TableCell>
                    <TableCell>
                      <Badge variant={freq.epsFrequency ? "default" : "secondary"}>
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
