"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { FileSpreadsheet, Search, Upload, CheckCircle2, History, AlertCircle } from "lucide-react"

export default function FlexibleRateSetupPage() {
  return (
    <div className="container mx-auto p-6 max-w-7xl">
      {/* Header Section */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-sirius-purple rounded-lg flex items-center justify-center">
          <FileSpreadsheet className="h-6 w-6 text-white" />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-primary">Flexible Rate Timesheet Setup</h1>
          <p className="text-muted-foreground text-lg mt-1">
            Configure timesheets for employees with dynamic pay rates
          </p>
        </div>
      </div>

      {/* Setup Note */}
      <Alert className="mb-8 border-l-4 border-l-blue-500 bg-blue-50/10">
        <Search className="h-5 w-5 text-blue-500" />
        <AlertTitle className="text-blue-700 dark:text-blue-300">Quick Access</AlertTitle>
        <AlertDescription className="mt-2 text-blue-600 dark:text-blue-400">
          You can quickly access the Timesheet Setup by searching for "Timesheet" in the BC search icon, or follow the detailed steps below.
        </AlertDescription>
      </Alert>

      {/* Step by Step Process */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <CheckCircle2 className="h-6 w-6" />
            Setup Process
          </CardTitle>
          <CardDescription>
            Follow these steps in chronological order to set up flexible rate timesheets
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Initial Setup */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Badge variant="default">1</Badge>
              <div className="space-y-2">
                <p className="text-sm font-medium">Enable Required Fields</p>
                <p className="text-sm text-muted-foreground">
                  Navigate to <span className="text-blue-500 dark:text-blue-400 font-medium">Setup → Timesheet Setups → Timesheet Setup</span> and enable the highlighted fields
                </p>
                <div className="rounded-lg overflow-hidden border mt-2">
                  <img 
                    src="/TimesheetFlexibleSetup1.png" 
                    alt="Timesheet Setup Fields" 
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Badge variant="default">2</Badge>
              <div className="space-y-2">
                <p className="text-sm font-medium">Configure Timesheet Elements</p>
                <p className="text-sm text-muted-foreground">
                  Search for <span className="text-blue-500 dark:text-blue-400 font-medium">"Timesheet Elements"</span> in BC search bar and click <span className="text-blue-500 dark:text-blue-400 font-medium">New</span> to fill in the required details
                </p>
                              </div>
            </div>

            <div className="flex items-start gap-3">
              <Badge variant="default">3</Badge>
              <div className="space-y-2">
                <p className="text-sm font-medium">Access Timesheet Interface</p>
                <p className="text-sm text-muted-foreground">
                  Search for <span className="text-blue-500 dark:text-blue-400 font-medium">"Timesheet Interface"</span> in BC search icon
                </p>
                              </div>
            </div>
          </div>

          {/* Template and Import */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Badge variant="default">4</Badge>
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
                <div className="rounded-lg overflow-hidden border mt-2">
                  <img 
                    src="/TimesheetFlexibleSetup2.png" 
                    alt="Timesheet Setup Fields" 
                    className="w-full"
                  />
                </div>
              </div>
                          </div>

            <div className="flex items-start gap-3">
              <Badge variant="default">5</Badge>
              <div className="space-y-2">
                <p className="text-sm font-medium">Import Timesheet Data</p>
                <p className="text-sm text-muted-foreground">
                  Click on "Import Timesheet" to upload your Excel file with the timesheet data
                </p>
                <div className="rounded-lg overflow-hidden border mt-2">
                  <img 
                    src="/TimesheetFlexibleSetup3.png" 
                    alt="Timesheet Setup Fields" 
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Validation and Creation */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Badge variant="default">6</Badge>
              <div className="space-y-2">
                <p className="text-sm font-medium">Validate Data</p>
                <p className="text-sm text-muted-foreground">
                  Click on "Check Data" to validate the imported timesheet information
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Badge variant="default">7</Badge>
              <div className="space-y-2">
                <p className="text-sm font-medium">Create Timesheets</p>
                <p className="text-sm text-muted-foreground">
                  Click on "Create Time Sheets" to generate the timesheets in payroll
                </p>
                 <div className="rounded-lg overflow-hidden border mt-2">
                  <img 
                    src="/TimesheetFlexibleSetup4.png" 
                    alt="Timesheet Setup Fields" 
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Badge variant="default">8</Badge>
              <div className="space-y-2">
                <p className="text-sm font-medium">Verify Upload</p>
                <p className="text-sm text-muted-foreground">
                  Navigate to <span className="text-blue-500 dark:text-blue-400 font-medium">History → Released Timesheet</span> to verify the uploaded data
                </p>
                <div className="rounded-lg overflow-hidden border mt-2">
                  <img 
                    src="/TimesheetFlexibleSetup5.png" 
                    alt="Timesheet Setup Fields" 
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Tips */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <AlertCircle className="h-5 w-5" />
            Important Notes
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-l-4 border-l-orange-500 bg-orange-50/10">
            <AlertCircle className="h-5 w-5 text-orange-500" />
            <AlertTitle className="text-orange-700 dark:text-orange-300">Template Requirements</AlertTitle>
            <AlertDescription className="mt-2 text-orange-600 dark:text-orange-400">
              Ensure all mandatory fields in the Excel template are filled out correctly to avoid import errors.
            </AlertDescription>
          </Alert>
          <Alert className="border-l-4 border-l-blue-500 bg-blue-50/10">
            <History className="h-5 w-5 text-blue-500" />
            <AlertTitle className="text-blue-700 dark:text-blue-300">Data Verification</AlertTitle>
            <AlertDescription className="mt-2 text-blue-600 dark:text-blue-400">
              Always verify the imported data in the Released Timesheet history before proceeding with payroll processing.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  )
}
