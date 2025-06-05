import { Mail, FileText, FileClock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"

const emailActions = [
  {
    name: "Email Payslips",
    description: "Send final payslips to employees via email",
    icon: <Mail className="h-5 w-5 text-white" />,
    color: "bg-blue-600"
  },
  {
    name: "Email P45",
    description: "Send P45 forms to leaving employees via email",
    icon: <FileText className="h-5 w-5 text-white" />,
    color: "bg-purple-600"
  }
]

export default function EmailFunctionsPage() {
  return (
    <div className="container mx-auto p-6 max-w-7xl">
      {/* Header Section */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-sirius-purple rounded-lg flex items-center justify-center">
          <Mail className="h-6 w-6 text-white" />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-primary">Email Functions</h1>
          <p className="text-muted-foreground text-lg mt-1">
            Send payroll documents to employees via email
          </p>
        </div>
      </div>

      {/* Important Notice */}
      <Alert className="mb-8 border-l-4 border-amber-500 bg-amber-50">
        <AlertDescription className="text-amber-800">
          Ensure all employee email addresses are up to date before sending payroll documents. 
          Emails will be sent securely with password protection.
        </AlertDescription>
      </Alert>

       <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
            <img
              src="/EmailafterPosting1.png"
              alt="Step by Step guide to Pension Setup"
              className="w-full object-contain hover:brightness-105 transition-all duration-300"
            />
          </div>

      {/* Email Actions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {emailActions.map((action, index) => (
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
          <CardTitle className="text-2xl">Email Guidelines</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-sirius-purple text-white flex items-center justify-center flex-shrink-0">
              1
            </div>
            <p className="text-muted-foreground">Payslips are automatically password protected. The password will be sent to employees separately.</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-sirius-purple text-white flex items-center justify-center flex-shrink-0">
              2
            </div>
            <p className="text-muted-foreground">You can schedule emails to be sent at a specific time or send them immediately.</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-sirius-purple text-white flex items-center justify-center flex-shrink-0">
              3
            </div>
            <p className="text-muted-foreground">Failed email deliveries will be automatically retried and reported in the scheduled emails section.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
