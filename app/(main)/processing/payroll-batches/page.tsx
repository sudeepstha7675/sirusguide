"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Calculator,
  Users,
  FileCheck,
  Play,
  CheckCircle,
  ClipboardList,
  ArrowRight,
  AlertCircle,
  Info,
  Clock,
  ChevronRight,
  Home,
  BookOpen,
} from "lucide-react"

export default function PayrollBatchFlowPage() {
  const [activeStep, setActiveStep] = useState(1)

  const navigationItems = [
    { id: "overview", label: "Overview", icon: Home },
    { id: "prerequisites", label: "Prerequisites", icon: CheckCircle },
    { id: "process", label: "Process Steps", icon: BookOpen },
  ]

  const processSteps = [
    {
      step: 1,
      title: "Fill General Details",
      description: "Complete payroll batch card with period and basic information",
      icon: ClipboardList,
      content: [
        "Fill in all required fields in General Section",
        "Double-check period dates",
        "Ensure correct frequency is selected",
      ],
      image: "/PayrollBatch1.png",
    },
    {
      step: 2,
      title: "Add Employees",
      description: "Import employees for the payroll period",
      icon: Users,
      content: [
        "Navigate to Prepare tab",
        "Click Add Employees",
        "Confirm employee import in pop-up",
        "Verify employee count matches expected",
        "Check for any import errors",
      ],
      image: "/PayrollBatch2.png",
    },
    {
      step: 3,
      title: "Get Pay Elements",
      description: "Pull all employee elements and timesheets",
      icon: Calculator,
      content: [
        "Navigate to Prepare tab",
        "Click Get Pay Elements",
        "System pulls Employee Elements",
        "System pulls Timesheet Details",
        "System pulls Released Pay Elements",
        "Ensure all timesheets are submitted",
        "Check for pending adjustments",
      ],
      image: "/PayrollBatch3.png",
    },
    {
      step: 4,
      title: "Process Pay Elements",
      description: "Process and validate pay elements with error handling",
      icon: Play,
      isComplex: true,
      scenarios: [
        {
          title: "Successful Processing",
          type: "success",
          steps: [
            "Navigate to Prepare tab",
            "Click Process Pay Elements",
            "Success popup appears",
            "Click OK to continue",
          ],
          images: ["/PayrollBatch4.png", "/PayrollBatch5.png"],
          outcome: "Proceed to Step 5",
        },
        {
          title: "Error Handling - Autocorrect",
          type: "warning",
          steps: [
            "Review Payroll Error Logs",
            "Enable Autocorrect function",
            "Click Process → Update Records",
            "Review and confirm updates",
            "Return to Step 3 (Get Pay Elements)",
            "Reprocess all elements",
          ],
          images: ["/PayrollBatch6.png", "/PayrollBatch7.png"],
          outcome: "Must restart from Step 3",
        },
        {
          title: "Error Handling - Manual Update",
          type: "error",
          steps: [
            "Review Payroll Error Logs",
            "Locate error fields",
            "Make manual corrections",
            "Return to Step 3 (Get Pay Elements)",
            "Reprocess all elements",
          ],
          outcome: "Must restart from Step 3",
        },
      ],
      warning: "ANY modifications (autocorrect or manual) require restarting from Step 3 (Get Pay Elements)",
    },
    {
      step: 5,
      title: "Calculate & Release",
      description: "Perform tax calculations and generate net pay",
      icon: Calculator,
      content: [
        "Navigate to Prepare tab",
        "Click Calculate and Release",
        "System performs tax calculations",
        "System generates net pay",
        "System runs final validation checks",
      ],
      image: "/PayrollBatch8.png",
    },
    {
      step: 6,
      title: "Post Payroll Batch",
      description: "Final posting - cannot be modified after this step",
      icon: CheckCircle,
      content: [
        "Click Post to finalize batch",
        "Confirm posting action",
        "Batch moves to Posted Payroll Batch under History",
      ],
      warning: "This step cannot be undone. Changes after posting require full batch reversal.",
      image: "/PayrollBatch9.png",
      isCritical: true,
    },
  ]

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="relative group cursor-pointer">
            <div className="absolute inset-0 bg-primary/30 rounded-xl blur-md transition-all duration-300 group-hover:bg-primary/40 group-hover:blur-lg" />
            <div className="relative w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-primary/30 group-hover:-translate-y-1">
              <Calculator className="h-5 w-5 text-primary-foreground transition-all duration-300 group-hover:scale-110" />
            </div>
          </div>
          <div>
            <h1 className="text-4xl font-bold text-primary">Payroll Batch Processing</h1>
            <p className="text-muted-foreground text-lg mt-1">
              Complete guide to process your payroll batch efficiently
            </p>
          </div>
        </div>
        <p className="text-muted-foreground mb-6 text-lg">
          Follow this comprehensive step-by-step guide to ensure accurate and efficient payroll processing for your
          organization.
        </p>
      </div>

      {/* Navigation Tabs */}
      <Tabs defaultValue="overview" className="w-full">
        {/* Enhanced Navigation Tabs with Clear Call-to-Action */}
        <div className="mb-8">
          <div className="text-center mb-4">
            <h2 className="text-lg font-semibold text-primary mb-2">Choose a Section to Get Started</h2>
            <p className="text-sm text-muted-foreground">Click on any tab below to navigate through the guide</p>
          </div>

          <TabsList className="grid w-full grid-cols-3 mb-4 h-auto p-2 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border-2 border-primary/20 rounded-xl shadow-lg">
            {navigationItems.map((item) => (
              <TabsTrigger
                key={item.id}
                value={item.id}
                className="flex flex-col items-center gap-2 p-4 rounded-lg transition-all duration-300 hover:bg-primary/20 hover:shadow-md hover:scale-105 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-xl data-[state=active]:scale-105 group cursor-pointer"
              >
                <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 group-data-[state=active]:bg-primary-foreground/20 transition-all duration-300">
                  <item.icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="text-sm font-medium text-center leading-tight">{item.label}</span>
                <div className="w-full h-0.5 bg-primary/20 group-data-[state=active]:bg-primary-foreground/50 rounded-full transition-all duration-300" />
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Visual indicator */}
          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <div className="w-2 h-2 bg-primary/50 rounded-full animate-pulse" />
            <span>Click tabs above to navigate</span>
            <div className="w-2 h-2 bg-primary/50 rounded-full animate-pulse" />
          </div>
        </div>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Info className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-primary">About Payroll Batches</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Payroll Batches is the comprehensive processing of payroll that calculates employees' net pay after
                  adjusting taxes and deductions. This includes automatic pay slip generation, BACS file creation for
                  salary payments, and general ledger posting.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-primary">Process Details</h3>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Total Steps:</span>
                    <span className="font-semibold text-primary">6 Major Steps</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Estimated Time:</span>
                    <span className="font-semibold text-primary">30-45 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Priority Level:</span>
                    <span className="font-semibold text-primary">High</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <ChevronRight className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-primary">How to Access</h3>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>
                    Search for <span className="font-semibold text-primary">"Payroll Batches"</span> in the BC search
                    icon, or
                  </p>
                  <p>
                    Navigate to <span className="font-semibold text-primary">Processing section → Payroll Batches</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                <img src="/PayrollBatch10.png" alt="How to access Payroll Batches" className="w-full object-contain" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Prerequisites Tab */}
        <TabsContent value="prerequisites" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                Prerequisites Checklist
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Before starting the payroll batch process, ensure all the following items are completed:
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-medium text-primary">1</span>
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Timesheets Processed</p>
                      <p className="text-muted-foreground text-sm">
                        All employee timesheets must be processed and released
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-medium text-primary">2</span>
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Leave Entitlement Cards</p>
                      <p className="text-muted-foreground text-sm">
                        All Statutory Leave Entitlement Cards are released
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-medium text-primary">3</span>
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Pay Adjustments</p>
                      <p className="text-muted-foreground text-sm">All Pay and Recurring Adjustments are released</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-medium text-primary">4</span>
                    </div>
                    <div>
                      <p className="font-semibold text-primary">System Access</p>
                      <p className="text-muted-foreground text-sm">Proper permissions to access Payroll Batches</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Critical Reminders moved to Prerequisites */}
          <Card className="border-destructive/50">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                Critical Process Reminders
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-primary mb-4 flex items-center gap-2">
                    <FileCheck className="h-5 w-5" />
                    Process Integrity
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-destructive font-bold">×</span>
                      <span className="text-muted-foreground text-sm">Never skip steps or alter sequence</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-destructive font-bold">×</span>
                      <span className="text-muted-foreground text-sm">Don't proceed with unresolved errors</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-4 flex items-center gap-2">
                    <AlertCircle className="h-5 w-5" />
                    Data Safety
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-destructive font-bold">×</span>
                      <span className="text-muted-foreground text-sm">No changes after final posting</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-destructive font-bold">×</span>
                      <span className="text-muted-foreground text-sm">
                        Whole Batch Reversals needed for corrections
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Process Steps Tab */}
        <TabsContent value="process" className="space-y-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-primary">Process Steps</h2>
            <Badge variant="outline" className="border-primary/30 text-primary">
              Follow in Sequence
            </Badge>
          </div>

          {/* Step Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-2 mb-8">
            {processSteps.map((step) => (
              <Button
                key={step.step}
                variant={activeStep === step.step ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveStep(step.step)}
                className="flex items-center gap-2"
              >
                <step.icon className="h-4 w-4" />
                <span className="hidden sm:inline">Step {step.step}</span>
                <span className="sm:hidden">{step.step}</span>
              </Button>
            ))}
          </div>

          {/* Active Step Content */}
          {processSteps.map((step) => (
            <div key={step.step} className={activeStep === step.step ? "block" : "hidden"}>
              <Card className={step.isCritical ? "border-destructive/50" : ""}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <span className="text-xl font-bold text-primary-foreground">{step.step}</span>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-primary flex items-center gap-2">
                        <step.icon className="h-5 w-5" />
                        {step.title}
                        {step.isCritical && (
                          <Badge variant="destructive" className="text-xs">
                            Critical
                          </Badge>
                        )}
                      </CardTitle>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Warning */}
                  {step.warning && (
                    <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                      <div className="flex gap-3">
                        <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0" />
                        <p className="text-sm text-destructive font-medium">{step.warning}</p>
                      </div>
                    </div>
                  )}

                  {/* Complex Step with Scenarios - Fixed for Dark Mode */}
                  {step.isComplex && step.scenarios ? (
                    <div className="space-y-6">
                      {step.scenarios.map((scenario, index) => (
                        <Card
                          key={index}
                          className={
                            scenario.type === "success"
                              ? "border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-900/20"
                              : scenario.type === "warning"
                                ? "border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-900/20"
                                : "border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-900/20"
                          }
                        >
                          <CardHeader>
                            <CardTitle className="text-lg flex items-center gap-2">
                              {scenario.type === "success" && (
                                <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                              )}
                              {scenario.type === "warning" && (
                                <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                              )}
                              {scenario.type === "error" && (
                                <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                              )}
                              <span
                                className={
                                  scenario.type === "success"
                                    ? "text-green-800 dark:text-green-300"
                                    : scenario.type === "warning"
                                      ? "text-amber-800 dark:text-amber-300"
                                      : "text-red-800 dark:text-red-300"
                                }
                              >
                                {scenario.title}
                              </span>
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-3 mb-4">
                              {scenario.steps.map((stepItem, stepIndex) => (
                                <div key={stepIndex} className="flex items-start gap-3">
                                  <div
                                    className={
                                      scenario.type === "success"
                                        ? "w-6 h-6 rounded-full bg-green-100 dark:bg-green-800/50 flex items-center justify-center flex-shrink-0 mt-0.5"
                                        : scenario.type === "warning"
                                          ? "w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-800/50 flex items-center justify-center flex-shrink-0 mt-0.5"
                                          : "w-6 h-6 rounded-full bg-red-100 dark:bg-red-800/50 flex items-center justify-center flex-shrink-0 mt-0.5"
                                    }
                                  >
                                    <span
                                      className={
                                        scenario.type === "success"
                                          ? "text-xs font-medium text-green-800 dark:text-green-200"
                                          : scenario.type === "warning"
                                            ? "text-xs font-medium text-amber-800 dark:text-amber-200"
                                            : "text-xs font-medium text-red-800 dark:text-red-200"
                                      }
                                    >
                                      {stepIndex + 1}
                                    </span>
                                  </div>
                                  <span
                                    className={
                                      scenario.type === "success"
                                        ? "text-green-700 dark:text-green-200"
                                        : scenario.type === "warning"
                                          ? "text-amber-700 dark:text-amber-200"
                                          : "text-red-700 dark:text-red-200"
                                    }
                                  >
                                    {stepItem}
                                  </span>
                                </div>
                              ))}
                            </div>

                            {scenario.outcome && (
                              <div className="pt-3 border-t border-current/20">
                                <p
                                  className={
                                    scenario.type === "success"
                                      ? "text-sm text-green-700 dark:text-green-200"
                                      : scenario.type === "warning"
                                        ? "text-sm text-amber-700 dark:text-amber-200"
                                        : "text-sm text-red-700 dark:text-red-200"
                                  }
                                >
                                  <span className="font-semibold">Outcome:</span> {scenario.outcome}
                                </p>
                              </div>
                            )}

                            {scenario.images && (
                              <div className="mt-4 grid gap-4">
                                {scenario.images.map((image, imageIndex) => (
                                  <div
                                    key={imageIndex}
                                    className="border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                                  >
                                    <img
                                      src={image || "/placeholder.svg"}
                                      alt={`${scenario.title} - ${imageIndex + 1}`}
                                      className="w-full object-contain"
                                    />
                                  </div>
                                ))}
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    /* Regular Step Content */
                    <div className="space-y-4">
                      {step.content && (
                        <div className="space-y-3">
                          {step.content.map((item, index) => (
                            <div key={index} className="flex items-start gap-3">
                              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <ArrowRight className="h-3 w-3 text-primary" />
                              </div>
                              <span className="text-muted-foreground">{item}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {step.image && (
                        <div className="border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                          <img
                            src={step.image || "/placeholder.svg"}
                            alt={step.title}
                            className="w-full object-contain"
                          />
                        </div>
                      )}
                    </div>
                  )}

                  {/* Navigation */}
                  <div className="flex justify-between pt-4 border-t">
                    <Button
                      variant="outline"
                      onClick={() => setActiveStep(Math.max(1, activeStep - 1))}
                      disabled={activeStep === 1}
                    >
                      Previous Step
                    </Button>
                    <Button
                      onClick={() => setActiveStep(Math.min(6, activeStep + 1))}
                      disabled={activeStep === 6}
                      className="bg-primary hover:bg-primary/90"
                    >
                      Next Step
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}
