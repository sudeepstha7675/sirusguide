"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ShieldCheck } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function PensionSetsPage() {
  const pensionTypes = [
    { 
      name: "Basic Earnings", 
      description: "Pension calculations based on base salary",
      icon: "💰",
      color: "bg-blue-600"
    },
    { 
      name: "Qualifying Earnings", 
      description: "Pension based on earnings within defined brackets",
      icon: "📊",
      color: "bg-purple-600"
    },
    { 
      name: "Total Earnings", 
      description: "Pension calculated on total compensation",
      icon: "💵",
      color: "bg-orange-600"
    },
    { 
      name: "Gross Earnings", 
      description: "Pension based on gross pay before deductions",
      icon: "💎",
      color: "bg-emerald-600"
    }
  ]

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-sirius-purple rounded-lg flex items-center justify-center">
            <ShieldCheck className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-primary">Pension Setup</h1>
            <p className="text-muted-foreground text-lg mt-1">
              Configure pension plans and sets for your organization
            </p>
          </div>
        </div>

        <p className="text-muted-foreground mb-6 text-lg">
          Pension setup in Sirius 365 can be used for configuring various pension plans, pension sets, pension rates, and so on, which helps in making pension 
          contributions a hassle-free process.
        </p>

        {/* Pension Types Cards */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Pension Sets</CardTitle>
            <p className="text-muted-foreground text-lg mt-2">
              Users can define pension sets as required and apply based on the earning types shown below.
            </p>
            <div className="mt-4 p-4 bg-amber-50 border-l-4 border-amber-500 rounded">
              <p className="text-amber-800 font-medium">
                ⚠️ Important: For Qualifying earnings, start and end bracket amounts must be defined.
              </p>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pensionTypes.map((type, index) => (
                <Card key={index} className={`border-l-4 ${type.color} ${type.color} transition-all duration-300 hover:shadow-lg hover:scale-[1.02]`}>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl">{type.icon}</div>
                        <h3 className="font-semibold text-lg text-white">{type.name}</h3>
                      </div>
                      <p className="text-white/90 text-base leading-relaxed pl-1">
                        {type.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Setup Steps */}
        <div className="bg-muted/50 p-6 rounded-lg border mb-8">
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="step-number bg-sirius-blue text-white">1</span>
              <p className="text-muted-foreground">
                Navigate to <span className="font-semibold text-primary">Setup</span>
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="step-number bg-sirius-blue text-white">2</span>
              <p className="text-muted-foreground">
                Click on <span className="font-semibold text-primary">Pension</span> drop-down menu
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="step-number bg-sirius-blue text-white">3</span>
              <p className="text-muted-foreground">
                Select <span className="font-semibold text-primary">Pension Sets</span>
              </p>
            </div>
          </div>

          <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
            <img
              src="/PensionSetup1.png"
              alt="Step by Step guide to Pension Setup"
              className="w-full object-contain hover:brightness-105 transition-all duration-300"
            />
          </div>
        </div>

        {/* Available Pension Sets */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Available Pension Sets</CardTitle>
            <p className="text-muted-foreground text-lg mt-2">
              Highlighted below are the available Pension Sets in Sirius Payroll 365 which shows once the pension set is configured by the user which can be selected 
              as per requirement.
            </p>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead>Code</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Earning Type</TableHead>
                    <TableHead className="text-right">Start Amount</TableHead>
                    <TableHead className="text-right">End Amount</TableHead>
                    <TableHead>Calculation Basis</TableHead>
                    <TableHead>Employee Code</TableHead>
                    <TableHead>Employer Code</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">SET A</TableCell>
                    <TableCell>Set A</TableCell>
                    <TableCell>Basic Earnings</TableCell>
                    <TableCell className="text-right font-mono">0.00</TableCell>
                    <TableCell className="text-right font-mono">0.00</TableCell>
                    <TableCell>Non-Cummulative</TableCell>
                    <TableCell>P-</TableCell>
                    <TableCell>P+</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">SET B</TableCell>
                    <TableCell>Set B</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        Qualifying Earnings
                        <Badge className="bg-amber-600 text-white font-medium hover:bg-amber-700">Bracket defined</Badge>
                      </div>
                    </TableCell>
                    <TableCell className="text-right font-mono">6,240.00</TableCell>
                    <TableCell className="text-right font-mono">50,270.00</TableCell>
                    <TableCell>Non-Cummulative</TableCell>
                    <TableCell>P-</TableCell>
                    <TableCell>P+</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">SET C</TableCell>
                    <TableCell>Set C</TableCell>
                    <TableCell>Total Earnings</TableCell>
                    <TableCell className="text-right font-mono">0.00</TableCell>
                    <TableCell className="text-right font-mono">0.00</TableCell>
                    <TableCell>Non-Cummulative</TableCell>
                    <TableCell>P-</TableCell>
                    <TableCell>P+</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
            <img
              src="/PensionSetup2.png"
              alt="Step by Step guide to Pension Setup"
              className="w-full object-contain hover:brightness-105 transition-all duration-300"
            />
          </div>
          </CardContent>
        </Card>
      </div>

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