"use client"

import { Mail, FileText, AlertCircle, Info } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"

const emailActions = [
  {
    name: "Email Payslips",
    description: "Send final payslips to employees via email",
    icon: <Mail className="h-5 w-5 text-white" />,
    color: "bg-blue-600",
    textColor: "text-blue-700",
  },
  {
    name: "Email P45",
    description: "Send P45 forms to leaving employees via email",
    icon: <FileText className="h-5 w-5 text-white" />,
    color: "bg-purple-600",
    textColor: "text-purple-700",
  },
]

export default function EmailFunctionsPage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="space-y-6">
        {/* Enhanced Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/30 rounded-lg blur-md transition-all duration-300 group-hover:bg-primary/40 group-hover:blur-lg" />
            <div className="relative w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-primary/25">
              <Mail className="h-6 w-6 text-primary-foreground drop-shadow-sm group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-black text-primary">Email Functions</h1>
            <p className="text-lg text-muted-foreground mt-1">Send payroll documents to employees via email</p>
          </div>
        </div>

        {/* Important Notice */}
        <Alert className="mb-6 bg-amber-50 border-amber-200">
          <AlertCircle className="h-5 w-5 text-amber-600" />
          <AlertDescription className="ml-2 text-amber-800">
            Ensure all employee email addresses are up to date before sending payroll documents. Emails will be sent
            securely with password protection.
          </AlertDescription>
        </Alert>

        <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
          <img
            src="/EmailafterPosting1.png"
            alt="Step by Step guide to Email Functions"
            className="w-full object-contain"
          />
        </div>

        {/* Email Actions Grid */}
        <Card className="mb-6 border-border/50 shadow-sm">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              Available Email Functions
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {emailActions.map((action, index) => (
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

        {/* Email Guidelines */}
        <Card className="border-border/50 shadow-sm">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <Info className="h-5 w-5 text-primary" />
              </div>
              Email Guidelines
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                1
              </div>
              <p className="text-muted-foreground pt-1">
                Payslips are automatically password protected. The password will be sent to employees separately.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                2
              </div>
              <p className="text-muted-foreground pt-1">
                You can schedule emails to be sent at a specific time or send them immediately.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                3
              </div>
              <p className="text-muted-foreground pt-1">
                Failed email deliveries will be automatically retried and reported in the scheduled emails section.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
