"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { FileSpreadsheet, Search, CheckCircle2, History, AlertCircle, Info } from "lucide-react"

export default function FlexibleRateSetupPage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="space-y-6">
        {/* Enhanced Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/30 rounded-lg blur-md transition-all duration-300 group-hover:bg-primary/40 group-hover:blur-lg" />
            <div className="relative w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-primary/25">
              <FileSpreadsheet className="h-6 w-6 text-primary-foreground drop-shadow-sm group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-black text-primary">Flexible Rate Timesheet Setup</h1>
            <p className="text-lg text-muted-foreground mt-1">
              Configure timesheets for employees with dynamic pay rates
            </p>
          </div>
        </div>

        {/* Quick Access */}
        <Alert className="mb-6 bg-primary/5 border-primary/20">
          <Search className="h-5 w-5 text-primary" />
          <AlertTitle className="text-primary">Quick Access</AlertTitle>
          <AlertDescription className="mt-2 text-muted-foreground">
            You can quickly access the Timesheet Setup by searching for "Timesheet" in the BC search icon, or follow the
            detailed steps below.
          </AlertDescription>
        </Alert>

        {/* Setup Process */}
        <Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <CheckCircle2 className="h-5 w-5 text-primary" />
              </div>
              Setup Process
            </CardTitle>
            <CardDescription className="mt-2">
              Follow these steps in chronological order to set up flexible rate timesheets
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 space-y-8">
            {/* Initial Setup */}
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  1
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Enable Required Fields</p>
                  <p className="text-sm text-muted-foreground">
                    Navigate to{" "}
                    <span className="font-semibold text-primary">Setup → Timesheet Setups → Timesheet Setup</span> and
                    enable the highlighted fields
                  </p>
                  <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                    <img
                      src="/TimesheetFlexibleSetup1.png"
                      alt="Timesheet Setup Fields"
                      className="w-full object-contain"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  2
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Configure Timesheet Elements</p>
                  <p className="text-sm text-muted-foreground">
                    Search for <span className="font-semibold text-primary">"Timesheet Elements"</span> in BC search bar
                    and click <span className="font-semibold text-primary">New</span> to fill in the required details
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  3
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Access Timesheet Interface</p>
                  <p className="text-sm text-muted-foreground">
                    Search for <span className="font-semibold text-primary">"Timesheet Interface"</span> in BC search
                    icon
                  </p>
                </div>
              </div>
            </div>

            {/* Template and Import */}
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  4
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Create Excel Template</p>
                  <p className="text-sm text-muted-foreground">
                    Create a Timesheet Template file in Excel with all mandatory fields as shown below
                  </p>
                  <Alert variant="destructive" className="mt-2">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      All fields in the template are mandatory and must be filled correctly
                    </AlertDescription>
                  </Alert>
                  <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                    <img
                      src="/TimesheetFlexibleSetup2.png"
                      alt="Excel Template Fields"
                      className="w-full object-contain"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  5
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Import Timesheet Data</p>
                  <p className="text-sm text-muted-foreground">
                    Click on "Import Timesheet" to upload your Excel file with the timesheet data
                  </p>
                  <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                    <img
                      src="/TimesheetFlexibleSetup3.png"
                      alt="Import Timesheet Interface"
                      className="w-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Validation and Creation */}
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  6
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Validate Data</p>
                  <p className="text-sm text-muted-foreground">
                    Click on "Check Data" to validate the imported timesheet information
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  7
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Create Timesheets</p>
                  <p className="text-sm text-muted-foreground">
                    Click on "Create Time Sheets" to generate the timesheets in payroll
                  </p>
                  <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                    <img
                      src="/TimesheetFlexibleSetup4.png"
                      alt="Create Timesheets Interface"
                      className="w-full object-contain"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  8
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Verify Upload</p>
                  <p className="text-sm text-muted-foreground">
                    Navigate to <span className="font-semibold text-primary">History → Released Timesheet</span> to
                    verify the uploaded data
                  </p>
                  <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                    <img
                      src="/TimesheetFlexibleSetup5.png"
                      alt="Released Timesheet History"
                      className="w-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Important Notes */}
        <Card className="border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <Info className="h-5 w-5 text-primary" />
              </div>
              Important Notes
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <Alert className="bg-amber-50 border-amber-200">
              <AlertCircle className="h-5 w-5 text-amber-600" />
              <AlertTitle className="text-amber-800">Template Requirements</AlertTitle>
              <AlertDescription className="mt-2 text-amber-700">
                Ensure all mandatory fields in the Excel template are filled out correctly to avoid import errors.
              </AlertDescription>
            </Alert>
            <Alert className="bg-primary/5 border-primary/20">
              <History className="h-5 w-5 text-primary" />
              <AlertTitle className="text-primary">Data Verification</AlertTitle>
              <AlertDescription className="mt-2 text-muted-foreground">
                Always verify the imported data in the Released Timesheet history before proceeding with payroll
                processing.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
