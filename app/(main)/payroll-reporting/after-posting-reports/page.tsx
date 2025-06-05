import { Download, FileText, FileUp, Printer } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"

const reportActions = [
  {
    name: "Final Payslips",
    description: "Preview and print final payslips for all employees",
    icon: <FileText className="h-5 w-5 text-white" />,
    color: "bg-blue-600",
  },
  {
    name: "Bulk Payslip Print",
    description: "Generate and print payslips in bulk for distribution",
    icon: <Printer className="h-5 w-5 text-white" />,
    color: "bg-green-600",
  },
  {
    name: "Bulk P45",
    description: "Generate and print P45 forms for leaving employees",
    icon: <Printer className="h-5 w-5 text-white" />,
    color: "bg-purple-600",
  },
  {
    name: "Pension Report",
    description: "Export pension contribution reports for providers",
    icon: <FileUp className="h-5 w-5 text-white" />,
    color: "bg-orange-600",
  },
  {
    name: "Vendor BACS",
    description: "Export BACS payment file for pension providers and vendors",
    icon: <Download className="h-5 w-5 text-white" />,
    color: "bg-pink-600",
  },
  {
    name: "Employee BACS",
    description: "Export BACS payment file for employee salary payments",
    icon: <Download className="h-5 w-5 text-white" />,
    color: "bg-indigo-600",
  }
]

export default function AfterPostingReportsPage() {
  return (
    <div className="container mx-auto p-6 max-w-7xl">
      {/* Header Section */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-sirius-purple rounded-lg flex items-center justify-center">
          <FileText className="h-6 w-6 text-white" />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-primary">After Posting Reports</h1>
          <p className="text-muted-foreground text-lg mt-1">
            Access and manage payroll reports after the payroll batch has been posted
          </p>
        </div>
      </div>

      {/* Important Notice */}
      <Alert className="mb-8 border-l-4 border-amber-500 bg-amber-50">
        <AlertDescription className="text-amber-800">
          These reports are available only after the payroll batch has been successfully posted.
          Make sure all validations are complete before generating final reports.
        </AlertDescription>
      </Alert>

       <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
            <img
              src="/ReportafterPosting1.png"
              alt="Step by Step guide to Report Posting"
              className="w-full object-contain hover:brightness-105 transition-all duration-300"
            />
          </div>

      {/* Report Actions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {reportActions.map((action, index) => (
          <Card key={index} className="group hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 ${action.color} rounded-lg flex items-center justify-center`}>
                  {action.icon}
                </div>
                <div>
                  <CardTitle className="text-xl">{action.name}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground mt-1">
                    {action.description}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
                      </Card>
        ))}
      </div>

      {/* Additional Information */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl">Processing Notes</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-sirius-purple text-white flex items-center justify-center flex-shrink-0">
              1
            </div>
            <p className="text-muted-foreground">Generate and review final payslips before distribution to ensure all calculations are correct.</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-sirius-purple text-white flex items-center justify-center flex-shrink-0">
              2
            </div>
            <p className="text-muted-foreground">Export pension reports and BACS files according to your payment schedule to ensure timely processing.</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-sirius-purple text-white flex items-center justify-center flex-shrink-0">
              3
            </div>
            <p className="text-muted-foreground">Process P45s for any employees who have left during this pay period.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
