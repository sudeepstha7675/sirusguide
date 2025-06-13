"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ShieldCheck, Info, AlertTriangle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function PensionSetsPage() {
  const pensionTypes = [
    {
      name: "Basic Earnings",
      description: "Pension calculations based on base salary",
      icon: "💰",
      color: "bg-blue-600",
    },
    {
      name: "Qualifying Earnings",
      description: "Pension based on earnings within defined brackets",
      icon: "📊",
      color: "bg-purple-600",
    },
    {
      name: "Total Earnings",
      description: "Pension calculated on total compensation",
      icon: "💵",
      color: "bg-orange-600",
    },
    {
      name: "Gross Earnings",
      description: "Pension based on gross pay before deductions",
      icon: "💎",
      color: "bg-emerald-600",
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
              <ShieldCheck className="h-6 w-6 text-primary-foreground drop-shadow-sm group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-black text-primary">Pension Setup</h1>
            <p className="text-lg text-muted-foreground mt-1">
              Configure pension plans and sets for your organisation.
            </p>
          </div>
        </div>

        {/* Enhanced Alert */}
        <Alert className="mb-6 bg-primary/5 border-primary/20">
          <Info className="h-5 w-5 text-primary" />
          <AlertDescription className="ml-2 text-base">
            Pension setup in Sirius Payroll 365 can be used for configuring various pension plans, pension sets, pension rates,
            and so on, which helps in making pension contributions a hassle-free process.
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
                  Navigate to <span className="font-bold text-primary">Setup</span>.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  2
                </div>
                <p className="text-muted-foreground pt-1">
                  Click <span className="font-bold text-primary">Pension</span> drop-down menu.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  3
                </div>
                <p className="text-muted-foreground pt-1">
                  Select <span className="font-bold text-primary">Pension Sets</span>.
                </p>
              </div>
            </div>

            <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <img
                src="/PensionSetup1.png"
                alt="Step by Step guide to Pension Setup"
                className="w-full object-contain"
              />
            </div>
          </CardContent>
        </Card>

        {/* Pension Sets Card */}
        <Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <ShieldCheck className="h-5 w-5 text-primary" />
              </div>
              Pension Sets
            </CardTitle>
            <p className="text-muted-foreground mt-2">
              Users can define pension sets as required and apply based on the earning types shown below.
            </p>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            {/* Important Notice */}
            <Alert className="bg-amber-50 border-amber-200">
              <AlertTriangle className="h-5 w-5 text-amber-600" />
              <AlertDescription className="ml-2 text-base text-amber-800">
                <span className="font-semibold">Important:</span> For Qualifying earnings, start and end bracket amounts
                must be defined.
              </AlertDescription>
            </Alert>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pensionTypes.map((type, index) => (
                <Card
                  key={index}
                  className={`border-l-4 border-l-${type.color.split("-")[1]}-600 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${type.color} text-white`}
                >
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl">{type.icon}</div>
                        <h3 className="font-semibold text-lg text-white">{type.name}</h3>
                      </div>
                      <p className="text-white/90 leading-relaxed">{type.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Available Pension Sets Card */}
        <Card className="border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <ShieldCheck className="h-5 w-5 text-primary" />
              </div>
              Available Pension Sets
            </CardTitle>
            <p className="text-muted-foreground mt-2">
              Highlighted below are the available Pension Sets in Sirius Payroll 365 which shows once the pension set is
              configured by the user which can be selected as per requirement.
            </p>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="rounded-md border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="font-semibold">Code</TableHead>
                    <TableHead className="font-semibold">Description</TableHead>
                    <TableHead className="font-semibold">Earning Type</TableHead>
                    <TableHead className="text-right font-semibold">Start Amount</TableHead>
                    <TableHead className="text-right font-semibold">End Amount</TableHead>
                    <TableHead className="font-semibold">Calculation Basis</TableHead>
                    <TableHead className="font-semibold">Employee Code</TableHead>
                    <TableHead className="font-semibold">Employer Code</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="hover:bg-muted/30 transition-colors">
                    <TableCell className="font-medium">SET A</TableCell>
                    <TableCell>Set A</TableCell>
                    <TableCell>Basic Earnings</TableCell>
                    <TableCell className="text-right font-mono">0.00</TableCell>
                    <TableCell className="text-right font-mono">0.00</TableCell>
                    <TableCell>Non-Cummulative</TableCell>
                    <TableCell>P-</TableCell>
                    <TableCell>P+</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-muted/30 transition-colors">
                    <TableCell className="font-medium">SET B</TableCell>
                    <TableCell>Set B</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        Qualifying Earnings
                        <Badge className="bg-amber-600 text-white hover:bg-amber-700">Bracket defined</Badge>
                      </div>
                    </TableCell>
                    <TableCell className="text-right font-mono">6,240.00</TableCell>
                    <TableCell className="text-right font-mono">50,270.00</TableCell>
                    <TableCell>Non-Cummulative</TableCell>
                    <TableCell>P-</TableCell>
                    <TableCell>P+</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-muted/30 transition-colors">
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
                alt="Available Pension Sets Configuration"
                className="w-full object-contain"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
