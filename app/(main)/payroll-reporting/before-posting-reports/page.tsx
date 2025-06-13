"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Info, AlertCircle, FileCheck, FileText, Mail, Eye, Download } from "lucide-react"

export default function BeforePostingReportsPage() {
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
            <h1 className="text-3xl font-black text-primary">Before Posting Reports</h1>
            <p className="text-lg text-muted-foreground mt-1">
              Generate and review reports before finalizing payroll posting
            </p>
          </div>
        </div>

        <p className="text-muted-foreground mb-6 text-lg">
          After the payroll batch has been released, several important reports and actions are available for review and
          verification before final posting.
        </p>

        {/* Preview Posting Section */}
        <Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <Info className="h-5 w-5 text-primary" />
              </div>
              Preview Posting
            </CardTitle>
            <p className="text-muted-foreground text-lg mt-2">
              This action populates the processed payroll batch in Detail Payroll Ledger Buffer Entries.
            </p>
          </CardHeader>
          <CardContent className="p-6">
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg mb-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 shrink-0" />
                <p className="text-amber-800 font-medium">
                  Important: Preview Posting must be completed before accessing any reports or actions below.
                </p>
              </div>
            </div>

            <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <img
                src="/ReportbeforePost1.png"
                alt="Step by Step guide to Pension Setup"
                className="w-full object-contain hover:brightness-105 transition-all duration-300"
              />
            </div>
          </CardContent>
        </Card>

        {/* Available Reports and Actions */}
        <Card className="border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              Available Reports & Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-6">
                {/* BACS Export */}
                <Card className="bg-gradient-to-br from-green-50/50 to-white border-green-100 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Download className="h-5 w-5 text-green-600" />
                      <h3 className="font-medium text-green-900">Export BACS File</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">Generate BACS file for salary payments</p>
                  </CardContent>
                </Card>

                {/* Pre-Payroll Summary */}
                <Card className="bg-gradient-to-br from-blue-50/50 to-white border-blue-100 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <FileCheck className="h-5 w-5 text-blue-600" />
                      <h3 className="font-medium text-blue-900">Pre-Payroll Summary</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">Review complete payroll summary before posting</p>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                {/* Draft Payslip */}
                <Card className="bg-gradient-to-br from-purple-50/50 to-white border-purple-100 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Eye className="h-5 w-5 text-purple-600" />
                      <h3 className="font-medium text-purple-900">Draft Payslip</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">Preview payslips before final generation</p>
                  </CardContent>
                </Card>

                {/* Send Draft Payslip */}
                <Card className="bg-gradient-to-br from-amber-50/50 to-white border-amber-100 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Mail className="h-5 w-5 text-amber-600" />
                      <h3 className="font-medium text-amber-900">Send Draft Payslip</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">Send draft payslips for review</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
