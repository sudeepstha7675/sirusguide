import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileText, Download, Mail, Filter, Calendar, Users, DollarSign } from "lucide-react"

export default function ReportsPage() {
  const reportTypes = [
    {
      title: "P45 Forms",
      description: "Generate P45 forms for leaving employees",
      icon: FileText,
      color: "bg-sirius-blue",
      count: "3 Available",
    },
    {
      title: "P60 Forms",
      description: "Year-end summary forms for all employees",
      icon: FileText,
      color: "bg-sirius-orange",
      count: "160 Available",
    },
    {
      title: "Payslips",
      description: "Individual and bulk payslip generation",
      icon: FileText,
      color: "bg-sirius-purple",
      count: "160 Current",
    },
    {
      title: "Payroll Summary",
      description: "Comprehensive payroll summary reports",
      icon: DollarSign,
      color: "bg-sirius-green",
      count: "Monthly",
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
        return "bg-sirius-green text-white"
      case "Sent":
        return "bg-sirius-blue text-white"
      case "Downloaded":
        return "bg-sirius-purple text-white"
      default:
        return "bg-gray-500 text-white"
    }
  }

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-sirius-blue rounded-lg flex items-center justify-center">
            <FileText className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-primary">General Reports</h1>
            <p className="text-muted-foreground">
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
            className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group"
          >
            <CardContent className="p-6">
              <div className={`w-12 h-12 rounded-lg ${report.color} flex items-center justify-center mb-4`}>
                <report.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{report.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{report.description}</p>
              <Badge variant="secondary" className="text-xs">
                {report.count}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Report Generation */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Generate New Report</CardTitle>
            <CardDescription>Create and customize reports with filters</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="report-type">Report Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select report type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="payslips">Payslips</SelectItem>
                  <SelectItem value="p45">P45 Forms</SelectItem>
                  <SelectItem value="p60">P60 Forms</SelectItem>
                  <SelectItem value="summary">Payroll Summary</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="start-date">Start Date</Label>
                <Input type="date" id="start-date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="end-date">End Date</Label>
                <Input type="date" id="end-date" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="employees">Employee Filter</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="All employees" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Employees</SelectItem>
                  <SelectItem value="active">Active Only</SelectItem>
                  <SelectItem value="department">By Department</SelectItem>
                  <SelectItem value="custom">Custom Selection</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex space-x-2 pt-4">
              <Button className="flex-1 bg-sirius-blue hover:bg-sirius-blue-dark">
                <FileText className="h-4 w-4 mr-2" />
                Generate Report
              </Button>
              <Button variant="outline" className="flex-1">
                <Filter className="h-4 w-4 mr-2" />
                Advanced Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Quick Actions</CardTitle>
            <CardDescription>Common report generation tasks</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full justify-start bg-sirius-orange hover:bg-sirius-orange-dark text-white">
              <Users className="h-4 w-4 mr-2" />
              Generate Current Month Payslips
            </Button>
            <Button className="w-full justify-start bg-sirius-purple hover:bg-sirius-purple-dark text-white">
              <Calendar className="h-4 w-4 mr-2" />
              Generate Year-End P60s
            </Button>
            <Button className="w-full justify-start bg-sirius-green hover:bg-sirius-green-dark text-white">
              <DollarSign className="h-4 w-4 mr-2" />
              Monthly Payroll Summary
            </Button>
            <div className="pt-4 border-t">
              <h4 className="font-semibold mb-3">Bulk Actions</h4>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <Mail className="h-4 w-4 mr-2" />
                  Email Payslips to All Employees
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Download className="h-4 w-4 mr-2" />
                  Download All P45 Forms
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Reports */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Recent Reports</CardTitle>
          <CardDescription>View and manage recently generated reports</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentReports.map((report, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-sirius-blue/10 rounded-lg flex items-center justify-center">
                    <FileText className="h-5 w-5 text-sirius-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium">{report.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {report.type} • Generated {report.generated} • {report.recipients} recipients
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge className={getStatusColor(report.status)}>{report.status}</Badge>
                  <div className="flex space-x-1">
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Report Information */}
      <div className="mt-8">
        <Card className="bg-gradient-to-r from-sirius-blue/10 to-sirius-orange/10 border-sirius-blue/20">
          <CardHeader>
            <CardTitle className="text-xl text-primary">Report Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Available Report Formats</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• PDF - For printing and official documents</li>
                  <li>• Excel - For data analysis and manipulation</li>
                  <li>• CSV - For data import/export</li>
                  <li>• Email - Direct delivery to employees</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Report Features</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Bulk generation and distribution</li>
                  <li>• Custom date range filtering</li>
                  <li>• Department and employee filtering</li>
                  <li>• Automated email delivery</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
