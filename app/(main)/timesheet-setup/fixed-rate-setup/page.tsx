"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { FileSpreadsheet, Search, Settings2, CheckCircle2, Building2, AlertCircle } from "lucide-react"

export default function FixedRateSetupPage() {
  return (
    <div className="container mx-auto p-6 max-w-7xl">
      {/* Header Section */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-sirius-purple rounded-lg flex items-center justify-center">
          <FileSpreadsheet className="h-6 w-6 text-white" />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-primary">Fixed Rate Timesheet Setup</h1>
          <p className="text-muted-foreground text-lg mt-1">
            Set up timesheets for employees with fixed pay rates
          </p>
        </div>
      </div>

      {/* Setup Note */}
      <Alert className="mb-8 border-l-4 border-l-blue-500 bg-blue-50/10">
        <Search className="h-5 w-5 text-blue-500" />
        <AlertTitle className="text-blue-700 dark:text-blue-300">Quick Access</AlertTitle>
        <AlertDescription className="mt-2 text-blue-600 dark:text-blue-400">
          You can quickly access the Timesheet Setup by searching for "Timesheet Setup" in the BC search icon, or follow the detailed steps below.
        </AlertDescription>
      </Alert>

      {/* Main Setup Process */}
      <div className="space-y-8 mb-8">
        {/* Initial Timesheet Setup */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Settings2 className="h-6 w-6" />
              Initial Setup
            </CardTitle>
            <CardDescription>
              Configure the basic timesheet settings and general information
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Badge variant="default">1</Badge>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Access Timesheet Setup</p>
                  <p className="text-sm text-muted-foreground">
                    Navigate to <span className="text-blue-500 dark:text-blue-400 font-medium">Setup → Timesheet Setups → Timesheet Setup</span>
                  </p>
                  <div className="rounded-lg overflow-hidden border mt-2">
                    <img
                      src="/TimesheetFixedSetup1.png"
                      alt="Timesheet Setup Navigation"
                      className="w-full"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Badge variant="default">2</Badge>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Configure General Information</p>
                  <p className="text-sm text-muted-foreground">
                    Fill in the general information on the General tab. Click <span className="text-blue-500 dark:text-blue-400 font-medium">Edit</span> to modify settings.
                  </p>
                  <div className="rounded-lg overflow-hidden border mt-2">
                    <img
                      src="/TimesheetFixedSetup2.png"
                      alt="General Information Setup"
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Field Configuration */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <CheckCircle2 className="h-6 w-6" />
              Timesheet Field Configuration
            </CardTitle>
            <CardDescription>
              Set up and configure timesheet fields and pay elements
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Badge variant="default">3</Badge>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Access Field Configuration</p>
                  <p className="text-sm text-muted-foreground">
                    After completing the initial setup, select <span className="text-blue-500 dark:text-blue-400 font-medium">Timesheet Field Configuration</span>
                  </p>
                  <div className="rounded-lg overflow-hidden border mt-2">
                    <img
                      src="/TimesheetFixedSetup3.png"
                      alt="Field Configuration Access"
                      className="w-full"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Badge variant="default">4</Badge>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Create New Fields</p>
                  <p className="text-sm text-muted-foreground">
                    Click <span className="text-blue-500 dark:text-blue-400 font-medium">New</span> to create fields and select the appropriate custom fields from the available options
                  </p>
                  <div className="mt-3 space-y-3">
                    <Alert className="border-l-4 border-l-blue-500 bg-blue-50/10">
                      <AlertCircle className="h-4 w-4 text-blue-500" />
                      <AlertTitle className="text-blue-700 dark:text-blue-300">Basic Pay Configuration</AlertTitle>
                      <AlertDescription className="mt-2 text-blue-600 dark:text-blue-400">
                        When a field is marked as "Basic", it will be linked with Basic Pay and use the Unit of Measure multiplier for calculations.
                      </AlertDescription>
                    </Alert>

                    <Alert className="bg-muted/50">
                      <AlertCircle className="h-4 w-4" />
                      <AlertTitle>Example Calculation</AlertTitle>
                      <AlertDescription className="mt-2 space-y-2">
                        <ul className="list-disc list-inside pl-4 space-y-1">
                          <li>Basic rate: £10</li>
                          <li>Overtime multiplier: 1.5</li>
                          <li>Calculated rate: £10 × 1.5 = £15</li>
                        </ul>
                      </AlertDescription>
                    </Alert>
                    <div className="rounded-lg overflow-hidden border mt-2">
                      <img
                        src="/TimesheetFixedSetup4.png"
                        alt="Field Configuration Access"
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Badge variant="default">5</Badge>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Map Pay Elements</p>
                  <p className="text-sm text-muted-foreground">
                    Navigate to <span className="text-blue-500 dark:text-blue-400 font-medium">Setup → Pay Elements</span> and map the created fields with pay elements
                  </p>
                  <div className="rounded-lg overflow-hidden border mt-2">
                    <img
                      src="/TimesheetFixedSetup5.png"
                      alt="Field Configuration Access"
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Work Sites Setup */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Building2 className="h-6 w-6" />
              Work Sites Configuration
            </CardTitle>
            <CardDescription>
              Configure work sites and assign pay elements
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Badge variant="default">6</Badge>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Create Work Sites</p>
                  <p className="text-sm text-muted-foreground">
                    Go to <span className="text-blue-500 dark:text-blue-400 font-medium">Work Sites</span> on Timesheet Setups and click <span className="text-blue-500 dark:text-blue-400 font-medium">New</span> to create sites
                  </p>
                  <Alert className="mt-2">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      Create at least one default site if there are no multiple sites or departments
                    </AlertDescription>
                  </Alert>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Badge variant="default">7</Badge>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Configure Site Pay Elements</p>
                  <p className="text-sm text-muted-foreground">
                    Click <span className="text-blue-500 dark:text-blue-400 font-medium">Actions</span> to set up pay elements for each site
                  </p>
                  <Alert className="mt-2 bg-muted/50">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription className="mt-2 space-y-2">
                      <p>When configuring pay elements:</p>
                      <ul className="list-disc list-inside pl-4 space-y-1">
                        <li>Select the Pay Element and its Pay Unit</li>
                        <li>For special rates (fixed rates), mark as True (Checked)</li>
                        <li>Do not set specific rates - these will vary by employee</li>
                      </ul>
                    </AlertDescription>
                  </Alert>
                  <div className="rounded-lg overflow-hidden border mt-2">
                    <img
                      src="/TimesheetFixedSetup6.png"
                      alt="Field Configuration Access"
                      className="w-full"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Badge variant="default">8</Badge>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Configure Employee Work Sites and Rates</p>
                  <p className="text-sm text-muted-foreground">
                    Navigate to <span className="text-blue-500 dark:text-blue-400 font-medium">Employees → Process → Employee Work Sites</span> to set up sites and rates
                  </p>
                  <Alert className="mt-2 border-l-4 border-l-blue-500 bg-blue-50/10">
                    <AlertCircle className="h-4 w-4 text-blue-500" />
                    <AlertTitle className="text-blue-700 dark:text-blue-300">Important Setup Steps</AlertTitle>
                    <AlertDescription className="mt-2 text-blue-600 dark:text-blue-400">
                      <ol className="list-decimal list-inside pl-4 space-y-1">
                        <li>Select Site Code to automatically load work site and mapped pay elements</li>
                        <li>For multiple sites - add all relevant sites and mark one as default</li>
                        <li>Fill in rates for each pay element in Employee Site Pay Elements</li>
                      </ol>
                    </AlertDescription>
                  </Alert>
                  <div className="rounded-lg overflow-hidden border mt-2">
                    <img
                      src="/TimesheetFixedSetup7.png"
                      alt="Field Configuration Access"
                      className="w-full"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden border mt-2">
                    <img
                      src="/TimesheetFixedSetup8.png"
                      alt="Field Configuration Access"
                      className="w-full"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Badge variant="default">9</Badge>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Create and Upload Timesheet</p>
                  <p className="text-sm text-muted-foreground">
                    On the Processing Tab, click <span className="text-blue-500 dark:text-blue-400 font-medium">Create Timesheet</span> to generate and upload the configuration
                  </p>
                  <Alert className="mt-2 border-l-4 border-l-blue-500 bg-blue-50/10">
                    <AlertCircle className="h-4 w-4 text-blue-500" />
                    <AlertTitle className="text-blue-700 dark:text-blue-300">Upload Options</AlertTitle>
                    <AlertDescription className="mt-2 text-blue-600 dark:text-blue-400">
                      Choose one of the following methods:
                      <div className="mt-3 space-y-3">
                        <div className="bg-muted/50 p-3 rounded-md">
                          <p className="font-medium">Configuration Package</p>
                          <p className="text-sm mt-1">Upload the generated timesheet through the configuration package system</p>
                        </div>
                        <div className="bg-muted/50 p-3 rounded-md">
                          <p className="font-medium">API Integration</p>
                          <p className="text-sm mt-1">If using the Timesheet app, integrate directly through the API interface</p>
                        </div>
                      </div>
                    </AlertDescription>
                  </Alert>
                  <div className="rounded-lg overflow-hidden border mt-2">
                    <img
                      src="/TimesheetFixedSetup9.png"
                      alt="Field Configuration Access"
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Additional Notes */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <AlertCircle className="h-5 w-5" />
            Important Notes
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert variant="destructive" className="border dark:border-red-900">
            <AlertCircle className="h-5 w-5" />
            <AlertTitle>Basic Pay Configuration</AlertTitle>
            <AlertDescription className="mt-2">
              When a field is marked as "Basic", its rate will be calculated as: Base Rate × Multiplier (e.g., 10 × 1.5 for overtime = 15)
            </AlertDescription>
          </Alert>
          <Alert className="border-l-4 border-l-blue-500 bg-blue-50/10">
            <AlertCircle className="h-5 w-5 text-blue-500" />
            <AlertTitle className="text-blue-700 dark:text-blue-300">Multi-Site Setup</AlertTitle>
            <AlertDescription className="mt-2 text-blue-600 dark:text-blue-400">
              For employees working at multiple sites, assign all relevant sites and designate a default site in the Employee Work Sites configuration.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  )
}
