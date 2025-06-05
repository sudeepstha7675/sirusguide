"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, Building2, Settings2, CheckCircle, ArrowRight, Search, MessageSquare, FileText, RefreshCw } from "lucide-react"

export default function MultiCompanySetupPage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-sirius-purple rounded-lg flex items-center justify-center">
            <Building2 className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-primary">Multi-Company HMRC Setup</h1>
            <p className="text-muted-foreground text-lg mt-1">
              Configure HMRC integration for multiple companies
            </p>
          </div>
        </div>

        <div className="mb-8 p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500">
          <div className="flex gap-2">
            <AlertCircle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-amber-700 dark:text-amber-400 block mb-1">Important:</span>
              <span className="text-amber-700 dark:text-amber-400">
                Multi-company setup requires enabling specific features first. Follow this guide carefully.
              </span>
            </div>
          </div>
        </div>

        {/* Initial Setup Section */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl">Enable Multi-Company Mode</CardTitle>
                <p className="text-muted-foreground mt-2">
                  Follow these steps to activate multi-company support
                </p>
              </div>
              <Badge variant="default" className="bg-sirius-blue">Step 1</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="bg-muted/50 p-6 rounded-lg border">
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <span className="step-number bg-sirius-blue text-white">1</span>
                    <p className="text-muted-foreground">
                      Navigate to <span className="font-semibold text-primary">Payroll Setup</span> page
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="step-number bg-sirius-blue text-white">2</span>
                    <p className="text-muted-foreground">
                      Locate the <span className="font-semibold text-primary">Reporting Section</span>
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="step-number bg-sirius-blue text-white">3</span>
                    <p className="text-muted-foreground">
                      Enable <span className="font-semibold text-primary">Multi-Company</span> field
                    </p>
                  </div>
                </div>
              </div>

             <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                <img
                  src="/HMRCSetup3.png"
                  alt="Multi-company setup activation"
                  className="w-full object-contain"
                />
              </div>

            </div>
          </CardContent>
        </Card>

        {/* Company Configuration Section */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl">Configure Company Details</CardTitle>
                <p className="text-muted-foreground mt-2">
                  Set up individual company information
                </p>
              </div>
              <Badge variant="default" className="bg-sirius-blue">Step 2</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="bg-muted/50 p-6 rounded-lg border">
                <h3 className="font-semibold text-lg mb-4">Access Company Setup</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <span className="step-number bg-sirius-blue text-white">1</span>
                    <p className="text-muted-foreground">
                      Click on <span className="font-semibold text-primary">Payroll Companies</span> at the top of Payroll Setup page
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="step-number bg-sirius-blue text-white">2</span>
                    <p className="text-muted-foreground">
                      Click <span className="font-semibold text-primary">New</span> to add a company
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="step-number bg-sirius-blue text-white">3</span>
                    <p className="text-muted-foreground">
                      Fill in required details for each company (same as Single Company setup)
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                <img
                  src="/HMRCSetup4.png"
                  alt="Company configuration screen"
                  className="w-full object-contain"
                />
              </div>

              <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                <img
                  src="/HMRCSetup5.png"
                  alt="Company configuration screen"
                  className="w-full object-contain"
                />
              </div>

            </div>
          </CardContent>
        </Card>

        {/* Additional Information */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center gap-3">
              <CardTitle className="text-2xl">Additional Setup Information</CardTitle>
              <Badge variant="secondary">Reference Guide</Badge>
            </div>
            <p className="text-muted-foreground mt-2">
              Key information for managing multiple company configurations
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-sirius-blue/10 to-sirius-blue/5 border-sirius-blue/20 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-sirius-blue flex items-center justify-center">
                      <MessageSquare className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Communication & Payment Details</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-sirius-green mt-1 shrink-0" />
                          Configure unique settings per company
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-sirius-green mt-1 shrink-0" />
                          Set up individual payment arrangements
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-sirius-green mt-1 shrink-0" />
                          Manage contact preferences independently
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-sirius-purple/10 to-sirius-purple/5 border-sirius-purple/20 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-sirius-purple flex items-center justify-center">
                      <FileText className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">FPS Details</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-sirius-green mt-1 shrink-0" />
                          Unified FPS settings across all companies
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-sirius-green mt-1 shrink-0" />
                          Standardized submission format
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-sirius-green mt-1 shrink-0" />
                          Consistent reporting structure
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-sirius-orange/10 to-sirius-orange/5 border-sirius-orange/20 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-sirius-orange flex items-center justify-center">
                      <Search className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Accessing Companies</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-sirius-green mt-1 shrink-0" />
                          Access HMRC Setup via BC search bar
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-sirius-green mt-1 shrink-0" />
                          Direct navigation through HMRC Setup
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-sirius-green mt-1 shrink-0" />
                          Easy switching between companies
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-sirius-green/10 to-sirius-green/5 border-sirius-green/20 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-sirius-green flex items-center justify-center">
                      <RefreshCw className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Updates & Maintenance</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-sirius-green mt-1 shrink-0" />
                          Automatic HMRC updates
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-sirius-green mt-1 shrink-0" />
                          Regular compliance checks
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-sirius-green mt-1 shrink-0" />
                          Bulk update capabilities
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <img
                src="/HMRCSetup6.png"
                alt="Multi-company setup activation"
                className="w-full object-contain"
              />
            </div>

            <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <img
                src="/HMRCSetup7.png"
                alt="Multi-company setup activation"
                className="w-full object-contain"
              />
            </div>
          </CardContent>
        </Card>

        <style jsx>{`
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
        `}</style>
      </div>
    </div>
  )
}