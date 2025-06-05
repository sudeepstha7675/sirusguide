"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CloudUpload, Search, AlertCircle, RefreshCcw, FileCheck, FileText } from "lucide-react"

export default function HmrcUpdatesEmployeePage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-sirius-purple rounded-lg flex items-center justify-center">
            <CloudUpload className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-primary">HMRC Updates</h1>
            <p className="text-muted-foreground text-lg mt-1">
              View and manage HMRC document updates and tax code changes
            </p>
          </div>
        </div>

        <p className="text-muted-foreground mb-6 text-lg">
          Track and apply HMRC updates including tax code changes, previous tax paid information,
          and student loan updates from official HMRC documents.
        </p>

        {/* Important Notice Box */}
        <div className="mb-8 p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500">
          <div className="flex gap-2">
            <AlertCircle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-amber-700 dark:text-amber-400 block mb-1">Important:</span>
              <span className="text-amber-700 dark:text-amber-400">
                Users must have valid HMRC Employer Gateway ID and Password to fetch latest updates.
                It is recommended to apply HMRC updates before making any changes.
              </span>
            </div>
          </div>
        </div>

        {/* Step box container */}
        <div className="bg-muted/50 p-6 rounded-lg border mb-6">
          <div className="space-y-4">
            <div className="flex items-start gap-2">
              <span className="step-number2 bg-sirius-blue text-white">1</span>
              <p className="text-muted-foreground">
                Search for <span className="font-semibold text-primary">"HMRC Updates"</span> in the BC search icon, or
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="step-number2 bg-sirius-blue text-white">2</span>
              <p className="text-muted-foreground">
                Navigate to{" "}
                <span className="font-semibold text-primary">
                  Employees → HMRC Updates
                </span>
              </p>
            </div>
          </div>

          <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
            <img
              src="/HMRCUpdate1.png"
              alt="Step by Step guide to Bank Account Setup"
              className="w-full object-contain"
            />
          </div>
        </div>

        {/* HMRC Document Types */}
        <Card className="border-2">
          <CardHeader>
            <div className="flex flex-col gap-4">
              <div>
                <CardTitle className="text-2xl text-primary">Available HMRC Documents</CardTitle>
                <p className="text-muted-foreground mt-2">
                  Overview of HMRC documents and updates in Sirius 365
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-sirius-blue/10 to-sirius-blue/5 border border-sirius-blue/20 hover:border-sirius-blue/40 transition-all">
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center gap-2">
                    <Badge variant="default" className="bg-sirius-blue text-white">P6</Badge>
                    <span className="dark:text-white text-primary">Tax Code Notice</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Official HMRC notices for employee tax code changes and updates.
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    View and apply new tax codes from P6 documents.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-sirius-green/10 to-sirius-green/5 border border-sirius-green/20 hover:border-sirius-green/40 transition-all">
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center gap-2">
                    <Badge variant="default" className="bg-sirius-green text-white">P9</Badge>
                    <span className="dark:text-white text-primary">Tax Code Update</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Annual coding notices with updated tax codes for new tax year.
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Process P9 updates for tax year transitions.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-sirius-orange/10 to-sirius-orange/5 border border-sirius-orange/20 hover:border-sirius-orange/40 transition-all">
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center gap-2">
                    <Badge variant="default" className="bg-sirius-orange text-white">RTI</Badge>
                    <span className="dark:text-white text-primary">Real Time Information</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Real-time PAYE information including National Insurance Number Details.
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Review and apply RTI updates for accurate payroll processing.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-sirius-purple/10 to-sirius-purple/5 border border-sirius-purple/20 hover:border-sirius-purple/40 transition-all">
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center gap-2">
                    <Badge variant="default" className="bg-sirius-purple text-white">SL1/SL2/PG1/PG2</Badge>
                    <span className="dark:text-white text-primary">Student Loan Notices</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Student loan start and stop notices from HMRC.
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Manage student loan deductions based on HMRC notices.
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* HMRC Updates Management */}
        <Card className="mt-8 mb-8">
          <CardHeader>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <CardTitle className="text-2xl">HMRC Updates Management</CardTitle>
                <p className="text-muted-foreground mt-2">
                  Fetch and apply HMRC updates efficiently
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-sirius-blue/10 to-sirius-blue/5 border border-sirius-blue/20 hover:border-sirius-blue/40 transition-all">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-sirius-blue flex items-center justify-center mb-4">
                    <RefreshCcw className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Fetch Updates</h3>
                  <p className="text-muted-foreground text-sm">
                    Retrieve latest updates from HMRC using Gateway credentials.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-sirius-green/10 to-sirius-green/5 border border-sirius-green/20 hover:border-sirius-green/40 transition-all">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-sirius-green flex items-center justify-center mb-4">
                    <FileCheck className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Apply Updates</h3>
                  <p className="text-muted-foreground text-sm">
                    Review and apply pending HMRC updates to employee records.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-sirius-orange/10 to-sirius-orange/5 border border-sirius-orange/20 hover:border-sirius-orange/40 transition-all">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-sirius-orange flex items-center justify-center mb-4">
                    <FileText className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">View History</h3>
                  <p className="text-muted-foreground text-sm">
                    Access complete history of HMRC updates and changes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>

      <style jsx>{`
        .step-number2 {
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
  )
}