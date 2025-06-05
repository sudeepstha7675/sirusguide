"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CalendarDays } from "lucide-react"

export default function PayrollFiscalYearPage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-sirius-purple rounded-lg flex items-center justify-center">
            <CalendarDays className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-primary">Payroll Fiscal Year Setup</h1>
            <p className="text-muted-foreground text-lg mt-1">
              Configure fiscal year settings for payroll processing.
            </p>
          </div>
        </div>

        <p className="text-muted-foreground mb-6 text-lg">
          Payroll Fiscal Year Setup encompasses a range of functions where users can define the Fiscal Year for payroll and select the active fiscal year or create or
          edit the Fiscal year by clicking at New or Edit.
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
                Select <span className="font-semibold text-primary">Payroll Fiscal Year</span>.
              </p>
            </div>
          </div>

          <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
            <img
              src="/FiscalYearSetup1.png"
              alt="Step by Step guide to Fiscal Year Setup"
              className="w-full object-contain hover:brightness-105 transition-all duration-300"
            />
          </div>
        </div>
      </div>

      <Card>
        <CardContent>
          <p className="text-muted-foreground mb-6 text-lg">
            Highlighted below are the available fiscal year in Sirius Payroll 365 which shows once the Payroll Fiscal Year is configured by the user to be selected as per
            requirement.
          </p>
          <div className="border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
            <img
              src="/FiscalYearSetup2.png"
              alt="Available Fiscal Years"
              className="w-full object-contain hover:brightness-105 transition-all duration-300"
            />
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