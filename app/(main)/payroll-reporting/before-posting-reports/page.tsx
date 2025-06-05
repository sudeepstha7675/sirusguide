"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Info,
  AlertCircle,
  ArrowRight,
  FileCheck,
  FileText,
  Mail,
  CheckCircle,
  Eye,
  Download
} from "lucide-react"

const reportActions = [
  {
    name: "BACS Export",
    description: "Generate BACS file for salary payments",
    icon: <Download className="h-5 w-5" />,
    color: "bg-blue-600",
    action: "Export BACS"
  },
  {
    name: "Pre-Payroll Summary",
    description: "Review complete payroll summary before posting",
    icon: <FileCheck className="h-5 w-5" />,
    color: "bg-purple-600",
    action: "Generate Summary"
  },
  {
    name: "Draft Payslip",
    description: "Preview payslips before final generation",
    icon: <Eye className="h-5 w-5" />,
    color: "bg-orange-600",
    action: "View Draft"
  },
  {
    name: "Send Draft Payslip",
    description: "Send draft payslips for review",
    icon: <Mail className="h-5 w-5" />,
    color: "bg-emerald-600",
    action: "Send Draft"
  }
]

export default function BeforePostingReportsPage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-sirius-purple rounded-lg flex items-center justify-center">
            <FileText className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-primary">Before Posting Reports</h1>
            <p className="text-muted-foreground text-lg mt-1">
              Generate and review reports before finalizing payroll posting
            </p>
          </div>
        </div>

        <p className="text-muted-foreground mb-6 text-lg">
          After the payroll batch has been released, several important reports and actions are available for review and verification before final posting.
        </p>

        {/* Preview Posting Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Preview Posting</CardTitle>
            <p className="text-muted-foreground text-lg mt-2">
              This action populates the processed payroll batch in Detail Payroll Ledger Buffer Entries.
            </p>
            <div className="mt-4 p-4 bg-amber-50 border-l-4 border-amber-500 rounded">
              <p className="text-amber-800 font-medium">
                ⚠️ Important: Preview Posting must be completed before accessing any reports or actions below.
              </p>
            </div>
          </CardHeader>
          <CardContent>
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
        <Card className="border-purple-100 dark:border-purple-900">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-xl">
              <div className="p-2 rounded-lg bg-purple-50 dark:bg-purple-900/30">
                <FileText className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </div>
              Available Reports & Actions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-4">
                {/* BACS Export */}
                <div className="p-4 rounded-xl border border-green-100 dark:border-green-900 bg-gradient-to-br from-green-50/50 to-white dark:from-green-900/20 dark:to-slate-900">
                  <div className="flex items-center gap-3 mb-3">
                    <Download className="h-5 w-5 text-green-600 dark:text-green-400" />
                    <h3 className="font-medium text-green-900 dark:text-green-300">Export BACS File</h3>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Generate BACS file for salary payments
                  </p>
                </div>

                {/* Pre-Payroll Summary */}
                <div className="p-4 rounded-xl border border-blue-100 dark:border-blue-900 bg-gradient-to-br from-blue-50/50 to-white dark:from-blue-900/20 dark:to-slate-900">
                  <div className="flex items-center gap-3 mb-3">
                    <FileCheck className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    <h3 className="font-medium text-blue-900 dark:text-blue-300">Pre-Payroll Summary</h3>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Review complete payroll summary before posting
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {/* Draft Payslip */}
                <div className="p-4 rounded-xl border border-purple-100 dark:border-purple-900 bg-gradient-to-br from-purple-50/50 to-white dark:from-purple-900/20 dark:to-slate-900">
                  <div className="flex items-center gap-3 mb-3">
                    <Eye className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    <h3 className="font-medium text-purple-900 dark:text-purple-300">Draft Payslip</h3>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Preview payslips before final generation
                  </p>
                </div>

                {/* Send Draft Payslip */}
                <div className="p-4 rounded-xl border border-amber-100 dark:border-amber-900 bg-gradient-to-br from-amber-50/50 to-white dark:from-amber-900/20 dark:to-slate-900">
                  <div className="flex items-center gap-3 mb-3">
                    <Mail className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                    <h3 className="font-medium text-amber-900 dark:text-amber-300">Send Draft Payslip</h3>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Send draft payslips for review
                  </p>
                </div>
              </div>
            </div>

          </CardContent>
        </Card>
      </div>
    </div>


  )
}
