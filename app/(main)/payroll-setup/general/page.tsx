"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Settings2 } from "lucide-react"

export default function GeneralPayrollSetupPage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      {/* Header section with icon and title */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-sirius-purple rounded-lg flex items-center justify-center">
            <Settings2 className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-primary">General Payroll Setup</h1>
            <p className="text-muted-foreground text-lg mt-1">
              Configure the core settings for your payroll processing.
            </p>
          </div>
        </div>

        <p className="text-muted-foreground mb-6 text-lg">
          This section allows you to define fundamental payroll parameters for your organization. As per the
          SiriusPayroll365 setup guide, this involves configuring various options tailored to your company's needs.
        </p>

        {/* Step box container */}
        <div className="bg-muted/50 p-6 rounded-lg border mb-6">
          <div className="space-y-4">
            <div className="flex items-start gap-2">
              <span className="step-number bg-sirius-blue text-white">1</span>
              <p className="text-muted-foreground">
                Search for <span className="font-semibold text-primary">"Payroll Setup"</span> in the BC search icon, or
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="step-number bg-sirius-blue text-white">2</span>
              <p className="text-muted-foreground">
                Navigate to{" "}
                <span className="font-semibold text-primary">
                  Setup → Payroll Setups drop-down menu → Select Payroll Setup
                </span>
              </p>
            </div>
          </div>

          <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
            <img
              src="/PayrollSetup1.png"
              alt="Step by Step guide to Payroll Setup"
              className="w-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Another card for payroll setup parts description */}
      <Card className="mb-8">
        <CardContent>
          <p className="text-muted-foreground mb-4">
            <span className="font-semibold text-primary">Payroll Setup</span> mainly consists of the following parts which are described in the document:
          </p>
          <p className="text-muted-foreground mb-6">
            <span className="font-semibold text-primary">User Payroll Setup</span> should be as per below screenshot:
          </p>

          <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
            <img
              src="/PayrollSetup2.png"
              alt="Step by Step guide to Payroll Setup"
              className="w-full object-contain"
            />
          </div>
        </CardContent>
      </Card>

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
