"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Key, AlertCircle, CheckCircle2, CreditCard, Mail } from "lucide-react"

export default function ActivationLicensingPage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="space-y-6">
        {/* Enhanced Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/30 rounded-lg blur-md transition-all duration-300 group-hover:bg-primary/40 group-hover:blur-lg" />
            <div className="relative w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-primary/25">
              <Key className="h-6 w-6 text-primary-foreground drop-shadow-sm group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-black text-primary">Activation & Licensing</h1>
            <p className="text-muted-foreground text-lg mt-1">
              This guide will help you understand the licensing requirements and activation process for Sirius Payroll
              365.
            </p>
          </div>
        </div>

        {/* License Requirement Alert */}
        <Alert className="mb-6 bg-primary/5 border-primary/20">
          <AlertCircle className="h-5 w-5 text-primary" />
          <AlertDescription className="ml-2 text-base">
            You will need either{" "}
            <span className="font-semibold text-primary">Dynamics 365 Business Central Essential</span> or{" "}
            <span className="font-semibold text-primary">Premium</span> license to use the Sirius Payroll 365 extension.
          </AlertDescription>
        </Alert>

        {/* Licensing Options Card */}
        <Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <CreditCard className="h-5 w-5 text-primary" />
              </div>
              Licensing Options
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-6">
              <p className="text-muted-foreground text-base">
                Sirius Payroll 365 operates on a Pay-As-You-Go subscription model. The subscription cost is based on the
                number of employee payrolls you process per month.
              </p>

              {/* Pay-As-You-Go Details */}
              <div className="group flex items-start gap-4 p-4 rounded-lg border border-border/50 bg-card hover:bg-primary/5 hover:border-primary/20 transition-all duration-200">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/30 rounded-lg blur-md transition-all duration-300 group-hover:blur-lg" />
                  <div className="relative p-2.5 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-sm">
                    <CreditCard className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-primary">Subscription Details</h3>
                    <p className="text-muted-foreground text-sm">Pay based on your monthly usage</p>
                  </div>
                  <div className="space-y-4 pl-4 border-l-2 border-primary/20">
                    <p className="text-muted-foreground text-base">
                      Start using Sirius Payroll 365 immediately and pay based on your usage. New users get a{" "}
                      <span className="text-primary font-medium">30-day free trial period</span> in sandbox environments
                      to explore all features.
                    </p>
                    <p className="text-muted-foreground text-base">
                      To extend your trial period, please contact your partner or reseller.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Success Alert */}
        <Alert className="mb-6 bg-primary/5 border-primary/20">
          <CheckCircle2 className="h-5 w-5 text-primary" />
          <AlertDescription className="text-primary ml-2 text-base font-medium">
            After following all these steps, Sirius Payroll 365 is ready for use!
          </AlertDescription>
        </Alert>

        {/* Support Contact Card */}
        <Card className="border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              Support
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="relative group">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-md transition-all duration-300 group-hover:blur-xl" />
                <div className="relative w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-sm">
                  <Mail className="h-5 w-5 text-primary-foreground" />
                </div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Need help?</p>
                <a
                  href="mailto:Siriusupport@dogmagroup.co.uk"
                  className="text-primary hover:text-primary/80 font-semibold transition-colors duration-200"
                >
                  Siriusupport@dogmagroup.co.uk
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
