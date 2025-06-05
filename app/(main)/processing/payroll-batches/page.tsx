"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Users,
  FileCheck,
  Calculator,
  Play,
  CheckCircle,
  ArrowRight,
  AlertCircle,
  ClipboardList,
  Info,
  Clock,
  ChevronRight,
  ChevronDown,
  ArrowUpRight,
  Bookmark,
  Eye,
  X
} from "lucide-react"

export default function PayrollBatchFlowPage() {
  const processSteps = [
    {
      step: 1,
      title: "Fill General Details",
      description: "Complete payroll batch card with period and basic information",
      icon: ClipboardList,
      color: "bg-slate-800 dark:bg-slate-700",
      substeps: [
        "Fill in all required fields in General Section",
      ],
      images: ["/PayrollBatch1.png"],
      tips: ["Double-check period dates", "Ensure correct frequency is selected"]
    },
    {
      step: 2,
      title: "Add Employees",
      description: "Import employees for the payroll period",
      icon: Users,
      color: "bg-slate-800 dark:bg-slate-700",
      substeps: [
        "Navigate to Prepare tab",
        "Click Add Employees",
        "Confirm employee import in pop-up"
      ],
      images: ["/PayrollBatch2.png"],
      tips: ["Verify employee count matches expected", "Check for any import errors"]
    },
    {
      step: 3,
      title: "Get Pay Elements",
      description: "Pull all employee elements and timesheets",
      icon: Calculator,
      color: "bg-slate-800 dark:bg-slate-700",
      substeps: [
        "1. Navigate to Prepare tab",
        "2. Click Get Pay Elements",
        "3. System pulls:",
        "   • Employee Elements",
        "   • Timesheet Details",
        "   • Released Pay Elements"
      ],
      images: ["/PayrollBatch3.png"],
      tips: ["Ensure all timesheets are submitted", "Check for pending adjustments"]
    },
    {
      step: 4,
      title: "Process Pay Elements",
      description: "Process and validate pay elements with error handling",
      icon: Play,
      color: "bg-blue-700 dark:bg-blue-800",
      scenarios: [
        {
          title: "Successful Processing",
          steps: [
            "1. Navigate to Prepare tab",
            "2. Click Process Pay Elements",
            "3. Success popup appears",
            "4. Click OK to continue",
          ],
          images: ["/PayrollBatch4.png", "/PayrollBatch5.png"],
          outcome: "Proceed to Step 5"
        },
        {
          title: "Error Handling - Autocorrect",
          steps: [
            "1. Review Payroll Error Logs",
            "2. Enable Autocorrect function",
            "3. Click Process → Update Records",
            "4. Review and confirm updates",
            "5. Return to Step 3 (Get Pay Elements)",
            "6. Reprocess all elements"
          ],
          images: ["/PayrollBatch6.png", "/PayrollBatch7.png"],
          outcome: "Must restart from Step 3"
        },
        {
          title: "Error Handling - Manual Update",
          steps: [
            "1. Review Payroll Error Logs",
            "2. Locate error fields",
            "3. Make manual corrections",
            "4. Return to Step 3 (Get Pay Elements)",
            "5. Reprocess all elements"
          ],
          outcome: "Must restart from Step 3"
        }
      ],
      substeps: [
        "Scenario 1: No Errors",
        "• Process Pay Elements → Success popup → Continue",
        "",
        "Scenario 2: Using Autocorrect",
        "• View Error Logs → Enable Autocorrect → Update Records",
        "• Return to Step 3 → Reprocess",
        "",
        "Scenario 3: Manual Updates",
        "• View Error Logs → Fix Manually → Return to Step 3",
        "• Reprocess all elements"
      ],
      warning: "ANY modifications (autocorrect or manual) require restarting from Step 3 (Get Pay Elements)",
      tips: [
        "Check error logs before choosing correction method",
        "Prefer Autocorrect for multiple similar errors",
        "Use manual updates for specific cases",
        "Always reprocess after any changes"
      ]
    },
    {
      step: 5,
      title: "Calculate & Release",
      description: "Perform tax calculations and generate net pay",
      icon: Calculator,
      color: "bg-slate-800 dark:bg-slate-700",
      substeps: [
        "1. Navigate to Prepare tab",
        "2. Click Calculate and Release",
        "3. System performs:",
        "   • Tax calculations",
        "   • Net pay generation",
        "   • Final validation checks"
      ],
      images: ["/PayrollBatch8.png"]
    },
    {
      step: 6,
      title: "Post Payroll Batch",
      description: "Final posting - cannot be modified after this step",
      icon: CheckCircle,
      color: "bg-slate-800 dark:bg-slate-700",
      substeps: [
        "Click Post to finalize batch",
        "Confirm posting action",
        "Batch moves to Posted Payroll Batch under History"
      ],
      warning: "This step cannot be undone. Changes after posting require full batch reversal.",
      tips: ["Run pre-posting validation", "Generate draft reports before posting"],
      images: ["/PayrollBatch9.png"]
    }
  ]

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="mb-8">
        {/* Header Section with Key Information Cards */}
        <div className="mb-8 space-y-6">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 p-8 text-white">
            <div className="absolute inset-0 bg-grid-white/10 mix-blend-soft-light" />
            <div className="relative">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/10">
                  <Calculator className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold mb-1">Payroll Batch Processing</h1>
                  <p className="text-lg text-white/80">
                    Complete guide to process your payroll batch efficiently
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <Card className="bg-blue-600/20 backdrop-blur-sm border-white/10 hover:bg-blue-600/30 transition-colors">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-white/10 backdrop-blur-sm">
                        <CheckCircle className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-white/80">Total Steps</p>
                        <p className="text-sm text-white/80">6 Major Steps</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-blue-600/20 backdrop-blur-sm border-white/10 hover:bg-blue-600/30 transition-colors">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-white/10 backdrop-blur-sm">
                        <AlertCircle className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-white/80">Attention Level</p>
                        <p className="text-sm text-white/80">High Priority</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Overview Section */}
          <Card className="border-slate-200 dark:border-slate-800">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-xl">
                <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/30">
                  <Info className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                Payroll Batches Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl border border-blue-100 dark:border-blue-900 bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/20 dark:to-slate-900">
                    <h3 className="font-medium text-blue-900 dark:text-blue-200 mb-3 flex items-center gap-2">
                      <Info className="h-4 w-4" />
                      About
                    </h3>
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      Payroll Batches is the comprehensive processing of payroll that calculates employees' net pay after adjusting taxes and deductions. This includes automatic pay slip generation, BACS file creation for salary payments, and general ledger posting.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-green-100 dark:border-green-900 bg-gradient-to-br from-green-50 to-white dark:from-green-900/20 dark:to-slate-900">
                    <h3 className="font-medium text-green-900 dark:text-green-200 mb-3 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      Prerequisites
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                        <ArrowRight className="h-4 w-4 mt-0.5 text-green-500" />
                        Timesheets processed and released
                      </li>
                      <li className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                        <ArrowRight className="h-4 w-4 mt-0.5 text-green-500" />
                        All Statutory Leave Entitlement Cards are released                      </li>
                      <li className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                        <ArrowRight className="h-4 w-4 mt-0.5 text-green-500" />
                        All Pay and Recurring Adjustments are released
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl border border-amber-100 dark:border-amber-900 bg-gradient-to-br from-amber-50 to-white dark:from-amber-900/20 dark:to-slate-900">
                    <h3 className="font-medium text-amber-900 dark:text-amber-200 mb-3 flex items-center gap-2">
                      <ChevronRight className="h-4 w-4" />
                      How to Access
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                        <ArrowRight className="h-4 w-4 mt-0.5 text-amber-500" />
                        Use BC search icon to find "Payroll Batches"
                      </li>
                      <li className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                        <ArrowRight className="h-4 w-4 mt-0.5 text-amber-500" />
                        Or navigate to Processing section
                      </li>
                      <li className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                        <ArrowRight className="h-4 w-4 mt-0.5 text-amber-500" />
                        Click on Payroll Batches
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02] w-full md:w-3/4 lg:w-2/3 mx-auto">
                <img
                  src="/PayrollBatch10.png"
                  alt="Step by Step guide to Payroll Batch"
                  className="w-full object-contain hover:brightness-105 transition-all duration-300"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Process Steps */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Process Steps</h2>
            <Badge variant="outline" className="text-sm">
              Follow in Sequence
            </Badge>
          </div>

          <Accordion type="multiple" className="space-y-4">
            {processSteps.map((step, index) => (
              <AccordionItem key={step.step} value={`step-${step.step}`} className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800">
                <div className="relative">
                  {/* Progress Indicator - Made more subtle */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400/40 to-blue-500/40 dark:from-blue-500/30 dark:to-blue-600/30" />

                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors group">
                    <div className="flex items-center gap-4 w-full">
                      {/* Step Number with enhanced visual */}
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/20 dark:to-slate-900 border border-blue-100 dark:border-blue-800/50 shadow-sm">
                        <span className="text-base font-semibold text-blue-700 dark:text-blue-300">{step.step}</span>
                      </div>

                      <div className="flex-1 text-left">
                        <div className="flex items-center gap-3 mb-1">
                          {/* Step Icon */}
                          <div className={`p-1.5 rounded-md ${step.warning
                            ? 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400'
                            : 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                            }`}>
                            <step.icon className="h-4 w-4" />
                          </div>
                          <h3 className="text-lg font-semibold flex items-center gap-3 text-slate-900 dark:text-slate-100">
                            {step.title}
                            {step.warning && (
                              <Badge variant="destructive" className="text-xs">
                                Caution Required
                              </Badge>
                            )}
                          </h3>
                        </div>
                        <div className="flex items-center gap-4">
                          <p className="text-sm text-slate-500 dark:text-slate-400">{step.description}</p>
                        </div>
                      </div>

                      {/* Custom Chevron */}
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors">
                        <ChevronDown className="h-4 w-4 text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-transform group-data-[state=open]:rotate-180" />
                      </div>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent>
                    <div className="px-6 pb-6 pt-2">
                      <div className="grid gap-6">
                        {/* Action Steps */}
                        <div className="space-y-4">
                          {step.scenarios ? (
                            // Special handling for Step 4 scenarios
                            <div className="space-y-4">
                              {/* Warning Section */}
                              {step.warning && (
                                <div className="bg-red-50/50 dark:bg-red-900/20 rounded-lg p-4 border border-red-100 dark:border-red-900/50 mb-6">
                                  <div className="flex gap-3">
                                    <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 shrink-0" />
                                    <p className="text-sm text-red-800 dark:text-red-200 font-medium">{step.warning}</p>
                                  </div>
                                </div>
                              )}

                              {/* Scenarios */}
                              {step.scenarios.map((scenario, i) => (
                                <Accordion type="single" collapsible key={i}>
                                  <AccordionItem value="scenario">
                                    <div className={`rounded-lg overflow-hidden shadow-sm ${i === 0
                                      ? 'border border-green-200 dark:border-green-800 bg-white dark:bg-slate-900'
                                      : 'border border-amber-200 dark:border-amber-800 bg-white dark:bg-slate-900'
                                      }`}>
                                      <AccordionTrigger className="hover:no-underline w-full">
                                        <div className={`py-2 px-4 border-b w-full ${i === 0
                                          ? 'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800'
                                          : 'bg-amber-50 border-amber-200 dark:bg-amber-900/20 dark:border-amber-800'
                                          }`}>
                                          <div className="flex items-center gap-3">
                                            {i === 0 ? (
                                              <>
                                                <div className="p-1.5 rounded-full bg-green-100 dark:bg-green-900/50">
                                                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                                                </div>
                                                <h4 className="font-medium text-green-900 dark:text-green-300">
                                                  {scenario.title}
                                                </h4>
                                              </>
                                            ) : (
                                              <>
                                                <div className="p-1.5 rounded-full bg-amber-100 dark:bg-amber-900/50">
                                                  <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                                                </div>
                                                <h4 className="font-medium text-amber-900 dark:text-amber-300">
                                                  {scenario.title}
                                                </h4>
                                              </>
                                            )}
                                          </div>
                                        </div>
                                      </AccordionTrigger>
                                      <AccordionContent>
                                        <div className="p-4">
                                          <div className="space-y-3">
                                            {scenario.steps.map((step, j) => (
                                              <div key={j} className="flex items-start gap-3">
                                                <div className="rounded-full bg-blue-50 dark:bg-blue-900/20 p-1 mt-0.5">
                                                  <Play className="h-3 w-3 text-blue-600 dark:text-blue-400" />
                                                </div>
                                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                                  {step}
                                                </p>
                                              </div>
                                            ))}
                                            {scenario.outcome && (
                                              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                                                <p className="text-sm font-medium text-slate-900 dark:text-slate-200">
                                                  Outcome: <span className="text-slate-600 dark:text-slate-400 font-normal">{scenario.outcome}</span>
                                                </p>
                                              </div>
                                            )}
                                          </div>
                                        </div>

                                        {/* Scenario Screenshots if available */}
                                        {scenario.images && scenario.images.length > 0 && (
                                          <div className="mt-6 space-y-4">
                                            {scenario.images.map((image, imageIndex) => (
                                              <div
                                                key={imageIndex}
                                                className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02] w-full md:w-3/4 lg:w-2/3 mx-auto">
                                                <img
                                                  src={image}
                                                  alt={`${scenario.title} - Step ${imageIndex + 1}`}
                                                  className="w-full h-auto"
                                                />
                                              </div>
                                            ))}
                                          </div>
                                        )}
                                      </AccordionContent>
                                    </div>
                                  </AccordionItem>
                                </Accordion>
                              ))}

                              {/* Tips Section */}
                              {step.tips && (
                                <div className="bg-amber-50/50 dark:bg-amber-900/20 rounded-lg p-4 border border-amber-100 dark:border-amber-900/50 mt-6">
                                  <h4 className="font-medium text-amber-900 dark:text-amber-300 flex items-center gap-2 mb-3">
                                    <Info className="h-4 w-4" />
                                    Pro Tips
                                  </h4>
                                  <ul className="space-y-2">
                                    {step.tips.map((tip, i) => (
                                      <li key={i} className="flex items-start gap-2 text-sm text-amber-800 dark:text-amber-200">
                                        <ArrowRight className="h-4 w-4 shrink-0 mt-0.5 text-amber-500" />
                                        {tip}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          ) : (
                            // Regular step layout
                            <div className="space-y-4">
                              <div className="grid gap-4">
                                {step.substeps && (
                                  <div className="space-y-3">
                                    {step.substeps.map((substep, i) => (
                                      <div key={i} className="flex items-start gap-3">
                                        <div className="rounded-full bg-blue-50 dark:bg-blue-900/20 p-1.5 mt-0.5">
                                          <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                                        </div>
                                        <span className="text-slate-700 dark:text-slate-300">{substep}</span>
                                      </div>
                                    ))}
                                  </div>
                                )}

                                {step.tips && (
                                  <div className="bg-amber-50/50 dark:bg-amber-900/20 rounded-lg p-4 border border-amber-100 dark:border-amber-900/50">
                                    <h4 className="font-medium text-amber-900 dark:text-amber-300 flex items-center gap-2 mb-3">
                                      <Info className="h-4 w-4" />
                                      Pro Tips
                                    </h4>
                                    <ul className="space-y-2">
                                      {step.tips.map((tip, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-amber-800 dark:text-amber-200">
                                          <ArrowUpRight className="h-4 w-4 shrink-0 mt-0.5 text-amber-500" />
                                          {tip}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}

                                {step.warning && (
                                  <div className="bg-red-50/50 dark:bg-red-900/20 rounded-lg p-4 border border-red-100 dark:border-red-900/50">
                                    <div className="flex gap-3">
                                      <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 shrink-0" />
                                      <p className="text-sm text-red-800 dark:text-red-200">{step.warning}</p>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Screenshots if available */}
                        {step.images && step.images.length > 0 && (
                          <div className="space-y-6">
                            {step.images.map((image, imageIndex) => (
                              <div
                                key={imageIndex}
                                className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02] w-full md:w-3/4 lg:w-2/3 mx-auto">
                                  <img
                                  src={image}
                                  alt={`${step.title} Interface ${step.images.length > 1 ? `(${imageIndex + 1}/${step.images.length})` : ''}`}
                                  className="w-full h-auto"
                                />
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </AccordionContent>
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Critical Reminders */}
        <Card className="mt-8 border-red-100 dark:border-red-900 bg-gradient-to-br from-red-50 to-slate-50 dark:from-red-900/20 dark:to-slate-900">
          <CardHeader>
            <CardTitle className="text-xl text-red-900 dark:text-red-300 flex items-center gap-2">
              <AlertCircle className="h-5 w-5" />
              Critical Process Reminders
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="p-4 rounded-xl border border-red-100 dark:border-red-900/50 bg-white/80 dark:bg-slate-900/50">
                <h4 className="font-medium text-red-900 dark:text-red-300 mb-3">Process Integrity</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-red-700 dark:text-red-400">
                    <X className="h-4 w-4 shrink-0 mt-0.5" />
                    Never skip steps or alter sequence
                  </li>
                  <li className="flex items-start gap-2 text-sm text-red-700 dark:text-red-400">
                    <X className="h-4 w-4 shrink-0 mt-0.5" />
                    Don't proceed with unresolved errors
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-xl border border-red-100 dark:border-red-900/50 bg-white/80 dark:bg-slate-900/50">
                <h4 className="font-medium text-red-900 dark:text-red-300 mb-3">Data Safety</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-red-700 dark:text-red-400">
                    <X className="h-4 w-4 shrink-0 mt-0.5" />
                    No changes after final posting
                  </li>
                  <li className="flex items-start gap-2 text-sm text-red-700 dark:text-red-400">
                    <X className="h-4 w-4 shrink-0 mt-0.5" />
                    Whole Batch Reversals needed for corrections
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}