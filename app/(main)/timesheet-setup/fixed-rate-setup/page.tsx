"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { FileSpreadsheet, Search, Settings2, CheckCircle2, Building2, AlertCircle, Info } from "lucide-react"

export default function FixedRateSetupPage() {
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
            <h1 className="text-3xl font-black text-primary">Fixed Rate Timesheet Setup</h1>
            <p className="text-lg text-muted-foreground mt-1">Set up timesheets for employees with fixed pay rates</p>
          </div>
        </div>

        {/* Quick Access */}
        <Alert className="mb-6 bg-primary/5 border-primary/20">
          <Search className="h-5 w-5 text-primary" />
          <AlertTitle className="text-primary">Quick Access</AlertTitle>
          <AlertDescription className="mt-2 text-muted-foreground">
            You can quickly access the Timesheet Setup by searching for "Timesheet Setup" in the BC search icon, or
            follow the detailed steps below.
          </AlertDescription>
        </Alert>

        {/* Initial Timesheet Setup */}
        <Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <Settings2 className="h-5 w-5 text-primary" />
              </div>
              Initial Setup
            </CardTitle>
            <CardDescription className="mt-2">
              Configure the basic timesheet settings and general information
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  1
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Access Timesheet Setup</p>
                  <p className="text-sm text-muted-foreground">
                    Navigate to{" "}
                    <span className="font-semibold text-primary">Setup → Timesheet Setups → Timesheet Setup</span>
                  </p>
                  <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                    <img
                      src="/TimesheetFixedSetup1.png"
                      alt="Timesheet Setup Navigation"
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
                  <p className="text-sm font-medium">Configure General Information</p>
                  <p className="text-sm text-muted-foreground">
                    Fill in the general information on the General tab. Click{" "}
                    <span className="font-semibold text-primary">Edit</span> to modify settings.
                  </p>
                  <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                    <img
                      src="/TimesheetFixedSetup2.png"
                      alt="General Information Setup"
                      className="w-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Field Configuration */}
        <Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <CheckCircle2 className="h-5 w-5 text-primary" />
              </div>
              Timesheet Field Configuration
            </CardTitle>
            <CardDescription className="mt-2">Set up and configure timesheet fields and pay elements</CardDescription>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  3
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Access Field Configuration</p>
                  <p className="text-sm text-muted-foreground">
                    After completing the initial setup, select{" "}
                    <span className="font-semibold text-primary">Timesheet Field Configuration</span>
                  </p>
                  <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                    <img
                      src="/TimesheetFixedSetup3.png"
                      alt="Field Configuration Access"
                      className="w-full object-contain"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  4
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Create New Fields</p>
                  <p className="text-sm text-muted-foreground">
                    Click <span className="font-semibold text-primary">New</span> to create fields and select the
                    appropriate custom fields from the available options
                  </p>
                  <div className="mt-3 space-y-3">
                    <Alert className="bg-primary/5 border-primary/20">
                      <AlertCircle className="h-5 w-5 text-primary" />
                      <AlertTitle className="text-primary">Basic Pay Configuration</AlertTitle>
                      <AlertDescription className="mt-2 text-muted-foreground">
                        When a field is marked as "Basic", it will be linked with Basic Pay and use the Unit of Measure
                        multiplier for calculations.
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
                    <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                      <img
                        src="/TimesheetFixedSetup4.png"
                        alt="Field Configuration Access"
                        className="w-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  5
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Map Pay Elements</p>
                  <p className="text-sm text-muted-foreground">
                    Navigate to <span className="font-semibold text-primary">Setup → Pay Elements</span> and map the
                    created fields with pay elements
                  </p>
                  <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                    <img
                      src="/TimesheetFixedSetup5.png"
                      alt="Field Configuration Access"
                      className="w-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Work Sites Setup */}
        <Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <Building2 className="h-5 w-5 text-primary" />
              </div>
              Work Sites Configuration
            </CardTitle>
            <CardDescription className="mt-2">Configure work sites and assign pay elements</CardDescription>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  6
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Create Work Sites</p>
                  <p className="text-sm text-muted-foreground">
                    Go to <span className="font-semibold text-primary">Work Sites</span> on Timesheet Setups and click{" "}
                    <span className="font-semibold text-primary">New</span> to create sites
                  </p>
                  <Alert className="mt-2 bg-amber-50 border-amber-200">
                    <AlertCircle className="h-5 w-5 text-amber-600" />
                    <AlertDescription className="ml-2 text-amber-800">
                      Create at least one default site if there are no multiple sites or departments
                    </AlertDescription>
                  </Alert>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  7
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Configure Site Pay Elements</p>
                  <p className="text-sm text-muted-foreground">
                    Click <span className="font-semibold text-primary">Actions</span> to set up pay elements for each
                    site
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
                  <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                    <img
                      src="/TimesheetFixedSetup6.png"
                      alt="Field Configuration Access"
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
                  <p className="text-sm font-medium">Configure Employee Work Sites and Rates</p>
                  <p className="text-sm text-muted-foreground">
                    Navigate to{" "}
                    <span className="font-semibold text-primary">Employees → Process → Employee Work Sites</span> to set
                    up sites and rates
                  </p>
                  <Alert className="mt-2 bg-primary/5 border-primary/20">
                    <AlertCircle className="h-5 w-5 text-primary" />
                    <AlertTitle className="text-primary">Important Setup Steps</AlertTitle>
                    <AlertDescription className="mt-2 text-muted-foreground">
                      <ol className="list-decimal list-inside pl-4 space-y-1">
                        <li>Select Site Code to automatically load work site and mapped pay elements</li>
                        <li>For multiple sites - add all relevant sites and mark one as default</li>
                        <li>Fill in rates for each pay element in Employee Site Pay Elements</li>
                      </ol>
                    </AlertDescription>
                  </Alert>
                  <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                    <img
                      src="/TimesheetFixedSetup7.png"
                      alt="Field Configuration Access"
                      className="w-full object-contain"
                    />
                  </div>
                  <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                    <img
                      src="/TimesheetFixedSetup8.png"
                      alt="Field Configuration Access"
                      className="w-full object-contain"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  9
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Create and Upload Timesheet</p>
                  <p className="text-sm text-muted-foreground">
                    On the Processing Tab, click <span className="font-semibold text-primary">Create Timesheet</span> to
                    generate and upload the configuration
                  </p>
                  <Alert className="mt-2 bg-primary/5 border-primary/20">
                    <AlertCircle className="h-5 w-5 text-primary" />
                    <AlertTitle className="text-primary">Upload Options</AlertTitle>
                    <AlertDescription className="mt-2 text-muted-foreground">
                      Choose one of the following methods:
                      <div className="mt-3 space-y-3">
                        <div className="bg-muted/50 p-3 rounded-md">
                          <p className="font-medium">Configuration Package</p>
                          <p className="text-sm mt-1">
                            Upload the generated timesheet through the configuration package system
                          </p>
                        </div>
                        <div className="bg-muted/50 p-3 rounded-md">
                          <p className="font-medium">API Integration</p>
                          <p className="text-sm mt-1">
                            If using the Timesheet app, integrate directly through the API interface
                          </p>
                        </div>
                      </div>
                    </AlertDescription>
                  </Alert>
                  <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                    <img
                      src="/TimesheetFixedSetup9.png"
                      alt="Field Configuration Access"
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
            <Alert variant="destructive" className="mb-6">
              <AlertCircle className="h-5 w-5" />
              <AlertTitle>Basic Pay Configuration</AlertTitle>
              <AlertDescription className="mt-2">
                When a field is marked as "Basic", its rate will be calculated as: Base Rate × Multiplier (e.g., 10 ×
                1.5 for overtime = 15)
              </AlertDescription>
            </Alert>
            <Alert className="bg-primary/5 border-primary/20">
              <AlertCircle className="h-5 w-5 text-primary" />
              <AlertTitle className="text-primary">Multi-Site Setup</AlertTitle>
              <AlertDescription className="mt-2 text-muted-foreground">
                For employees working at multiple sites, assign all relevant sites and designate a default site in the
                Employee Work Sites configuration.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
