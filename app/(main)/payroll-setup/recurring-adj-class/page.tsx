"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Repeat, Info } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function RecurringAdjClassPage() {
  const adjustmentClasses = [
    { name: "Magistrates Courts Fines", type: "Legal", category: "Court Order" },
    { name: "Child Maintenance Order", type: "Legal", category: "Maintenance" },
    { name: "Council Tax AOE", type: "Tax", category: "Council" },
    { name: "Direct Earnings AOE (FIXED)", type: "Earnings", category: "AOE" },
    { name: "Direct Earnings AOE (Higher)", type: "Earnings", category: "AOE" },
    { name: "Direct Earnings AOE (Standard)", type: "Earnings", category: "AOE" },
    { name: "Loans and Advances", type: "Financial", category: "Loans" },
    { name: "Earning Arrestment", type: "Legal", category: "Arrestment" },
    { name: "Union Deduction", type: "Organization", category: "Union" },
    { name: "Welsh AOE Orders", type: "Earnings", category: "AOE" },
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Court Order":
        return "bg-blue-600 text-white"
      case "Maintenance":
        return "bg-purple-600 text-white"
      case "Council":
        return "bg-orange-500 text-white"
      case "AOE":
        return "bg-green-600 text-white"
      case "Loans":
        return "bg-blue-500 text-white"
      case "Arrestment":
        return "bg-red-500 text-white"
      case "Union":
        return "bg-yellow-500 text-black"
      default:
        return "bg-gray-500 text-white"
    }
  }

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="space-y-6">
        {/* Enhanced Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/30 rounded-lg blur-md transition-all duration-300 group-hover:bg-primary/40 group-hover:blur-lg" />
            <div className="relative w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-primary/25">
              <Repeat className="h-6 w-6 text-primary-foreground drop-shadow-sm group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-black text-primary">Recurring Adjustment Class Setup</h1>
            <p className="text-lg text-muted-foreground mt-1">
              Configure recurring adjustment classes for systematic deductions.
            </p>
          </div>
        </div>

        {/* Enhanced Alert */}
        <Alert className="mb-6 bg-primary/5 border-primary/20">
          <Info className="h-5 w-5 text-primary" />
          <AlertDescription className="ml-2 text-base">
            Recurring Adjustment Class Setup encompasses a range of functions where users can configure deductions of
            recurring nature based on documents like Child Support, Court order, Loan etc.
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
                  Click <span className="font-bold text-primary">Recurring Adjustment Class</span>.
                </p>
              </div>
            </div>

            <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <img
                src="/RecurringAdjustmentSetup1.png"
                alt="Step by Step guide to Recurring Adjustment Setup"
                className="w-full object-contain"
              />
            </div>
          </CardContent>
        </Card>

        {/* Default Recurring Adjustment Classes Card */}
        <Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <Repeat className="h-5 w-5 text-primary" />
              </div>
              Default Recurring Adjustment Classes
            </CardTitle>
            <p className="text-muted-foreground mt-2">
              Sirius Payroll365 provides the following default Recurring Adjustment Classes. Users can also create
              additional classes as needed.
            </p>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {adjustmentClasses.map((adjustment) => (
                <div
                  key={adjustment.name}
                  className="p-4 rounded-lg border border-border bg-card text-card-foreground shadow-sm"
                >
                  <div className="space-y-3">
                    <h3 className="font-semibold text-lg">{adjustment.name}</h3>
                    <div className="flex gap-2">
                      <Badge variant="outline">{adjustment.type}</Badge>
                      <Badge className={getCategoryColor(adjustment.category)}>{adjustment.category}</Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Setup New Recurring Adjustment Class Card */}
        <Card className="border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <Repeat className="h-5 w-5 text-primary" />
              </div>
              Setup New Recurring Adjustment Class
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <p className="text-muted-foreground">
              To setup Recurring Adjustment Class, search for the Recurring Adjustment Class in the BC search icon or
              follow the steps given below:
            </p>

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
                  Click <span className="font-bold text-primary">Recurring Adjustment Class</span>.
                </p>
              </div>
            </div>

            <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <img
                src="/RecurringAdjustmentSetup2.png"
                alt="Available Recurring Adjustment Class"
                className="w-full object-contain"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
