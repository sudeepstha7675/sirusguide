"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Download, Mail, DollarSign } from "lucide-react"

export default function ReportsPage() {
  const reportTypes = [
    {
      title: "P45 Forms",
      description: "Generate P45 forms for leaving employees",
      icon: FileText,
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "P60 Forms",
      description: "Year-end summary forms for all employees",
      icon: FileText,
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600",
    },
    {
      title: "Payslips",
      description: "Individual and bulk payslip generation",
      icon: FileText,
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      title: "Payroll Summary",
      description: "Comprehensive payroll summary reports",
      icon: DollarSign,
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
    },
  ]

  const recentReports = [
    {
      name: "January 2025 Payslips",
      type: "Payslips",
      generated: "2025-01-31",
      status: "Completed",
      recipients: 160,
    },
    {
      name: "December 2024 P60 Forms",
      type: "P60",
      generated: "2024-12-31",
      status: "Sent",
      recipients: 158,
    },
    {
      name: "Q4 2024 Payroll Summary",
      type: "Summary",
      generated: "2024-12-31",
      status: "Downloaded",
      recipients: 1,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-600 text-white"
      case "Sent":
        return "bg-blue-600 text-white"
      case "Downloaded":
        return "bg-purple-600 text-white"
      default:
        return "bg-gray-500 text-white"
    }
  }

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/30 rounded-lg blur-md transition-all duration-300 group-hover:bg-primary/40 group-hover:blur-lg" />
            <div className="relative w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-primary/25">
              <FileText className="h-6 w-6 text-primary-foreground drop-shadow-sm group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-black text-primary">General Reports</h1>
            <p className="text-lg text-muted-foreground mt-1">
              Generate, download, and send reports like P45, P60, payslips, and payroll summaries
            </p>
          </div>
        </div>
      </div>

      {/* Report Types */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {reportTypes.map((report) => (
          <Card
            key={report.title}
            className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group border-border/50 shadow-sm"
          >
            <CardContent className="p-6">
              <div className={`w-12 h-12 rounded-lg ${report.bgColor} flex items-center justify-center mb-4`}>
                <report.icon className={`h-6 w-6 ${report.iconColor}`} />
              </div>
              <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{report.title}</h3>
              <p className="text-sm text-muted-foreground">{report.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

     

      {/* Report Information */}
      <Card className="border-border/50 shadow-sm hover:shadow-md transition-all duration-300 bg-gradient-to-r from-primary/5 to-transparent">
        <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
          <CardTitle className="flex items-center gap-3 text-xl text-primary">
            <div className="p-2 rounded-lg bg-primary/10">
              <FileText className="h-5 w-5 text-primary" />
            </div>
            Report Information
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Available Report Formats</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <span>PDF - For printing and official documents</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <span>Excel - For data analysis and manipulation</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <span>CSV - For data import/export</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <span>Email - Direct delivery to employees</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Report Features</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <span>Bulk generation and distribution</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <span>Custom date range filtering</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <span>Department and employee filtering</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <span>Automated email delivery</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
