"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, Clock, Search, Plus, Trash2, FileSpreadsheet, DollarSign, Info } from "lucide-react"
import Link from "next/link"

export default function TimesheetSetupPage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="space-y-6">
        {/* Enhanced Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/30 rounded-lg blur-md transition-all duration-300 group-hover:bg-primary/40 group-hover:blur-lg" />
            <div className="relative w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-primary/25">
              <Clock className="h-6 w-6 text-primary-foreground drop-shadow-sm group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-black text-primary">Timesheet Processing Guide</h1>
            <p className="text-lg text-muted-foreground mt-1">
              Learn how to configure and manage timesheets in Sirius Payroll 365
            </p>
          </div>
        </div>

        {/* Navigation Instructions */}
        <Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <Info className="h-5 w-5 text-primary" />
              </div>
              How to Access Timesheets
            </CardTitle>
            <p className="text-muted-foreground mt-2">Follow these steps to access the timesheet configuration</p>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  1
                </div>
                <p className="text-muted-foreground pt-1">
                  Search for <span className="font-semibold text-primary">"Timesheet"</span> in the BC search icon
                </p>
              </div>

              <div className="flex justify-start pl-10">
                <div className="inline-flex items-center justify-center px-4 py-2 bg-primary/10 rounded-full">
                  <span className="text-primary font text-medium">OR</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  2
                </div>
                <p className="text-muted-foreground pt-1">
                  Navigate to <span className="font-semibold text-primary">Processing → Timesheet</span>
                </p>
              </div>
            </div>

            <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <img src="/TimesheetSetup1.png" alt="Timesheet Navigation" className="w-full object-contain" />
            </div>

            <p className="text-muted-foreground mt-4">
              Highlighted below are the available timesheet in Sirius Payroll 365, which shows once it is configured by
              the user which can be selected as per requirement.
            </p>

            <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <img src="/TimesheetSetup2.png" alt="Available Timesheets" className="w-full object-contain" />
            </div>
          </CardContent>
        </Card>

        {/* Available Functions */}
        <Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              Available Functions
            </CardTitle>
            <p className="text-muted-foreground mt-2">Core timesheet management features</p>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200 shadow-sm">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center mb-4">
                    <Search className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-blue-700">Search Timesheets</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Find existing timesheets using various filters including employee, date range, and status
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                      Filter by employee name or ID
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                      Search by date range
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                      Filter by approval status
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-purple-100/50 border-purple-200 shadow-sm">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-purple-600 flex items-center justify-center mb-4">
                    <Plus className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-purple-700">Create New Timesheet</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Create a new timesheet entry with detailed time tracking
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-600"></div>
                      Manual entry or Excel import
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-600"></div>
                      Multiple pay elements support
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-600"></div>
                      Bulk creation options
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-red-50 to-red-100/50 border-red-200 shadow-sm">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-red-500 flex items-center justify-center mb-4">
                    <Trash2 className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-red-700">Delete Timesheets</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Remove existing timesheet entries with proper validation
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                      Single or bulk deletion
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                      Confirmation prompts
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                      Audit trail maintenance
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-green-100/50 border-green-200 shadow-sm">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-green-600 flex items-center justify-center mb-4">
                    <Info className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-green-700">View Details</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Access comprehensive timesheet information and analytics
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-600"></div>
                      Detailed time breakdowns
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-600"></div>
                      Pay calculations preview
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-600"></div>
                      Export and reporting options
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <img src="/TimesheetSetup3.png" alt="Timesheet Functions" className="w-full object-contain" />
            </div>
          </CardContent>
        </Card>

        {/* Important Notes */}
        <Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <AlertCircle className="h-5 w-5 text-primary" />
              </div>
              Important Notes
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <Alert className="bg-primary/5 border-primary/20">
              <AlertCircle className="h-5 w-5 text-primary" />
              <AlertDescription className="ml-2">
                <span className="font-medium">Excel Import Format:</span> For flexible rate timesheets, ensure your
                Excel file matches the required format
              </AlertDescription>
            </Alert>

            <Alert className="bg-primary/5 border-primary/20">
              <AlertCircle className="h-5 w-5 text-primary" />
              <AlertDescription className="ml-2">
                <span className="font-medium">Employee Setup:</span> Fixed rate timesheets require employee work sites
                and rates to be configured first
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Timesheet Types */}
        <Card className="border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <FileSpreadsheet className="h-5 w-5 text-primary" />
              </div>
              Choose Your Timesheet Type
            </CardTitle>
            <p className="text-muted-foreground mt-2">
              Select the appropriate timesheet type based on your payment structure
            </p>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/timesheet-setup/flexible-rate-setup" className="group">
                <Card className="bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200 shadow-sm cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
                        <FileSpreadsheet className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-lg text-blue-700 group-hover:text-blue-800 transition-colors">
                            Flexible Rate Timesheet
                          </h4>
                          <Badge className="bg-blue-600 text-white group-hover:bg-blue-700">Configure →</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          For employees with dynamic pay rates in each pay run
                        </p>
                        <p className="text-xs text-muted-foreground">Import timesheets using defined Excel format</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/timesheet-setup/fixed-rate-setup" className="group">
                <Card className="bg-gradient-to-br from-purple-50 to-purple-100/50 border-purple-200 shadow-sm cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-purple-600 flex items-center justify-center">
                        <DollarSign className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-lg text-purple-700 group-hover:text-purple-800 transition-colors">
                            Fixed Rate Timesheet
                          </h4>
                          <Badge className="bg-purple-600 text-white group-hover:bg-purple-700">Configure →</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          For employees with fixed rates in each pay run
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Use predefined rates from Employee Work Site Pay Elements
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
