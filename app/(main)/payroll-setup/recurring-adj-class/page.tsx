"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Repeat } from "lucide-react"
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
    { name: "Welsh AOE Orders", type: "Earnings", category: "AOE" }
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Court Order":
        return "bg-sirius-blue text-white"
      case "Maintenance":
        return "bg-sirius-purple text-white"
      case "Council":
        return "bg-sirius-orange text-white"
      case "AOE":
        return "bg-sirius-green text-white"
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
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-sirius-purple rounded-lg flex items-center justify-center">
            <Repeat className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-primary">Recurring Adjustment Class Setup</h1>
            <p className="text-muted-foreground text-lg mt-1">
              Configure recurring adjustment classes for systematic deductions.
            </p>
          </div>
        </div>

        <p className="text-muted-foreground mb-6 text-lg">
          Recurring Adjustment Class Setup encompasses a range of functions where users can configure deductions of recurring nature based on documents like Child
          Support, Court order, Loan etc.
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
                Click on <span className="font-semibold text-primary">Recurring Adjustment Class</span>.
              </p>
            </div>
          </div>

          <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
            <img
              src="/RecurringAdjustmentSetup1.png"
              alt="Step by Step guide to Recurring Adjustment Setup"
              className="w-full object-contain hover:brightness-105 transition-all duration-300"
            />
          </div>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Default Recurring Adjustment Classes</CardTitle>
          <p className="text-muted-foreground text-lg mt-2">
            Sirius Payroll365 provides the following default Recurring Adjustment Classes. Users can also create additional classes as needed.
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {adjustmentClasses.map((adjustment, index) => (
              <Card key={index} className="transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <h3 className="font-semibold text-lg">{adjustment.name}</h3>
                    <div className="flex gap-2">
                      <Badge variant="outline">{adjustment.type}</Badge>
                      <Badge className={getCategoryColor(adjustment.category)}>{adjustment.category}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
                 </CardContent>
      </Card>

      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Setup New Recurring Adjustment Class</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6 text-lg">
              To setup Recurring Adjustment Class, search for the Recurring Adjustment Class in the BC search icon or follow the steps given below:
            </p>
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
                  Click on <span className="font-semibold text-primary">Recurring Adjustment Class</span>
                </p>
              </div>
            </div>
            <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
            <img
              src="/RecurringAdjustmentSetup2.png"
              alt="Availanble Recurring Adjustment Class"
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
