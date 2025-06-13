"use client"

import { Download, FileText, FileUp, Printer } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, Info } from "lucide-react"

const reportActions = [
  {
    name: "Final Payslips",
    description: "Preview and print final payslips for all employees",
    icon: <FileText className="h-5 w-5 text-white" />,
    color: "bg-blue-600",
    textColor: "text-blue-700",
  },
  {
    name: "Bulk Payslip Print",
    description: "Generate and print payslips in bulk for distribution",
    icon: <Printer className="h-5 w-5 text-white" />,
    color: "bg-green-600",
    textColor: "text-green-700",
  },
  {
    name: "Bulk P45",
    description: "Generate and print P45 forms for leaving employees",
    icon: <Printer className="h-5 w-5 text-white" />,
    color: "bg-purple-600",
    textColor: "text-purple-700",
  },
  {
    name: "Pension Report",
    description: "Export pension contribution reports for providers",
    icon: <FileUp className="h-5 w-5 text-white" />,
    color: "bg-orange-600",
    textColor: "text-orange-700",
  },
  {
    name: "Vendor BACS",
    description: "Export BACS payment file for pension providers and vendors",
    icon: <Download className="h-5 w-5 text-white" />,
    color: "bg-pink-600",
    textColor: "text-pink-700",
  },
  {
    name: "Employee BACS",
    description: "Export BACS payment file for employee salary payments",
    icon: <Download className="h-5 w-5 text-white" />,
    color: "bg-indigo-600",
    textColor: "text-indigo-700",
  },
]

export default function AfterPostingReportsPage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="space-y-6">
        {/* Enhanced Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/30 rounded-lg blur-md transition-all duration-300 group-hover:bg-primary/40 group-hover:blur-lg" />
            <div className="relative w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-primary/25">
              <FileText className="h-6 w-6 text-primary-foreground drop-shadow-sm group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-black text-primary">After Posting Reports</h1>
            <p className="text-lg text-muted-foreground mt-1">
              Access and manage payroll reports after the payroll batch has been posted
            </p>
          </div>
        </div>

        {/* Important Notice */}
        <Alert className="mb-6 bg-amber-50 border-amber-200">
          <AlertCircle className="h-5 w-5 text-amber-600" />
          <AlertDescription className="ml-2 text-amber-800">
            These reports are available only after the payroll batch has been successfully posted. Make sure all
            validations are complete before generating final reports.
          </AlertDescription>
        </Alert>

        <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
          <img
            src="/ReportafterPosting1.png"
            alt="Step by Step guide to Report Posting"
            className="w-full object-contain"
          />
        </div>

        {/* Report Actions Grid */}
        <Card className="mb-6 border-border/50 shadow-sm">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              Available Reports & Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reportActions.map((action, index) => (
                <Card key={index} className="border-border/50">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 ${action.color} rounded-lg flex items-center justify-center`}>
                        {action.icon}
                      </div>
                      <div>
                        <CardTitle className={`text-xl ${action.textColor}`}>{action.name}</CardTitle>
                        <CardDescription className="text-sm text-muted-foreground mt-1">
                          {action.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Processing Notes */}
        <Card className="border-border/50 shadow-sm">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <Info className="h-5 w-5 text-primary" />
              </div>
              Processing Notes
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                1
              </div>
              <p className="text-muted-foreground pt-1">
                Generate and review final payslips before distribution to ensure all calculations are correct.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                2
              </div>
              <p className="text-muted-foreground pt-1">
                Export pension reports and BACS files according to your payment schedule to ensure timely processing.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                3
              </div>
              <p className="text-muted-foreground pt-1">
                Process P45s for any employees who have left during this pay period.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
