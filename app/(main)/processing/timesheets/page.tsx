"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  AlertCircle, 
  Clock, 
  Search, 
  Plus, 
  Trash2, 
  FileSpreadsheet,
  ArrowRight,
  DollarSign,
  ClipboardList,
  Info
} from "lucide-react"
import Link from "next/link"

export default function TimesheetSetupPage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-sirius-purple rounded-lg flex items-center justify-center">
            <Clock className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-primary">Timesheet Processing Guide</h1>
            <p className="text-muted-foreground text-lg mt-1">
              Learn how to configure and manage timesheets in Sirius 365
            </p>
          </div>
        </div>

        {/* Navigation Instructions */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center gap-2">
              <CardTitle className="text-2xl">How to Access Timesheets</CardTitle>
            </div>
            <p className="text-muted-foreground mt-2">
              Follow these steps to access the timesheet configuration
            </p>
          </CardHeader>
          <CardContent>
            <div className="bg-muted/50 p-6 rounded-lg border">
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <span className="step-number bg-sirius-blue text-white">1</span>
                  <p className="text-muted-foreground">
                    Search for <span className="font-semibold text-primary">"Timesheet"</span> in the BC search icon, or
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="step-number bg-sirius-blue text-white">2</span>
                  <p className="text-muted-foreground">
                    Navigate to <span className="font-semibold text-primary">Processing → Timesheet</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <img
                src="/TimesheetSetup1.png"
                alt="Timesheet Navigation"
                className="w-full object-contain"
              />
            </div>

            <p className="text-muted-foreground mt-2">
              Highlighted below are the available timesheet in Sirius Payroll 365 which shows once it is configured by the user which can be selected as per requirement. 
            </p>

            <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <img
                src="/TimesheetSetup2.png"
                alt="Timesheet Navigation"
                className="w-full object-contain"
              />
            </div>

          </CardContent>
        </Card>

        {/* Available Functions */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Available Functions</CardTitle>
            <p className="text-muted-foreground mt-2">
              Core timesheet management features
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="bg-gradient-to-br from-sirius-blue/10 to-sirius-blue/5 border-sirius-blue/20">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-sirius-blue flex items-center justify-center mb-4">
                    <Search className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Search</h3>
                  <p className="text-sm text-muted-foreground">
                    Find existing timesheets using various filters
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-sirius-purple/10 to-sirius-purple/5 border-sirius-purple/20">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-sirius-purple flex items-center justify-center mb-4">
                    <Plus className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Create New</h3>
                  <p className="text-sm text-muted-foreground">
                    Create a new timesheet entry
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-sirius-orange/10 to-sirius-orange/5 border-sirius-orange/20">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-sirius-orange flex items-center justify-center mb-4">
                    <Trash2 className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Delete</h3>
                  <p className="text-sm text-muted-foreground">
                    Remove existing timesheet entries
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-sirius-green/10 to-sirius-green/5 border-sirius-green/20">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-sirius-green flex items-center justify-center mb-4">
                    <Info className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">View Details</h3>
                  <p className="text-sm text-muted-foreground">
                    Access detailed timesheet information
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <img
                src="/TimesheetSetup3.png"
                alt="Timesheet Functions"
                className="w-full object-contain"
              />
            </div>
          </CardContent>
        </Card>

                {/* Important Notes */}
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="divide-y divide-border">
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-sirius-blue/5 to-transparent border-l-2 border-sirius-blue hover:from-sirius-blue/10 transition-colors">
                <AlertCircle className="h-5 w-5 text-sirius-blue mt-1 shrink-0" />
                <div>
                  <p className="font-medium mb-1">Excel Import Format</p>
                  <p className="text-sm text-muted-foreground">
                    For flexible rate timesheets, ensure your Excel file matches the required format
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-sirius-blue/5 to-transparent border-l-2 border-sirius-blue hover:from-sirius-blue/10 transition-colors">
                <AlertCircle className="h-5 w-5 text-sirius-blue mt-1 shrink-0" />
                <div>
                  <p className="font-medium mb-1">Employee Setup</p>
                  <p className="text-sm text-muted-foreground">
                    Fixed rate timesheets require employee work sites and rates to be configured first
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Timesheet Types */}
        <Card className="mb-8">
          <CardHeader className="pb-8">
            <CardTitle className="text-2xl">Choose Your Timesheet Type</CardTitle>
            <p className="text-muted-foreground mt-2">
              Select the appropriate timesheet type based on your payment structure
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-6 py-4">
              <Link href="/timesheet-setup/flexible-rate-setup" className="group">
                <Card className="bg-gradient-to-br from-sirius-blue/10 to-sirius-blue/5 border border-sirius-blue/20 group-hover:from-sirius-blue/20 group-hover:to-sirius-blue/10 group-hover:border-sirius-blue/40 group-hover:shadow-md transition-all cursor-pointer relative">
                  <div className="absolute right-2 top-2 bg-sirius-blue text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    Configure →
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-sirius-blue flex items-center justify-center group-hover:scale-110 transition-transform">
                        <FileSpreadsheet className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg group-hover:text-sirius-blue transition-colors">Flexible Rate Timesheet</h4>
                        <p className="text-sm text-muted-foreground">
                          For employees with dynamic pay rates in each pay run
                        </p>
                        <div className="mt-2 text-xs text-muted-foreground opacity-75">
                          Import timesheets using defined Excel format
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/timesheet-setup/fixed-rate-setup" className="group">
                <Card className="bg-gradient-to-br from-sirius-purple/10 to-sirius-purple/5 border border-sirius-purple/20 group-hover:from-sirius-purple/20 group-hover:to-sirius-purple/10 group-hover:border-sirius-purple/40 group-hover:shadow-md transition-all cursor-pointer relative">
                  <div className="absolute right-2 top-2 bg-sirius-purple text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    Configure →
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-sirius-purple flex items-center justify-center group-hover:scale-110 transition-transform">
                        <DollarSign className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg group-hover:text-sirius-purple transition-colors">Fixed Rate Timesheet</h4>
                        <p className="text-sm text-muted-foreground">
                          For employees with fixed rates in each pay run
                        </p>
                        <div className="mt-2 text-xs text-muted-foreground opacity-75">
                          Use predefined rates from Employee Work Site Pay Elements
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
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