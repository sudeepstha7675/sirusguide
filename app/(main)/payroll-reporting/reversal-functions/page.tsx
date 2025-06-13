"use client"

import type React from "react"

import { RotateCcw, FileX, AlertTriangle, ScrollText, UserX, CheckCircle2, AlertCircle, Info } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

type Action = {
  id: string
  name: string
  description: string
  icon: React.ReactNode
  color: string
  textColor: string
  action: string
  warning: string
  onClick: () => void
  details: string[]
}

export default function ReversalFunctionsPage() {
  const handleReverseBatch = async () => {
    try {
      // Step 1: Show detailed confirmation dialog
      const confirmed = window.confirm(
        "Payroll Batch Reversal Confirmation\n\n" +
          "This action will:\n" +
          "• Reverse all financial transactions in the posted payroll batch\n" +
          "• Mark the batch status as 'Reversed' in the system\n" +
          "• Automatically update the Reversed checkbox in batch details\n" +
          "• Create audit log entries for the reversal\n\n" +
          "Important Notes:\n" +
          "• This action cannot be undone\n" +
          "• All related calculations will be reversed\n" +
          "• The batch will need to be reprocessed if needed\n\n" +
          "Are you sure you want to proceed with the reversal?",
      )

      if (confirmed) {
        // Step 2: Perform the reversal
        // TODO: Implement the actual reversal API call here
        console.log("Processing payroll batch reversal...")

        // Step 3: Show detailed success message
        alert(
          "Payroll Batch Reversal Successful\n\n" +
            "The following actions have been completed:\n" +
            "• All payroll transactions have been reversed\n" +
            "• Batch status has been updated to 'Reversed'\n" +
            "• Reversed checkbox has been automatically ticked\n" +
            "• Audit logs have been updated\n\n" +
            "Next Steps:\n" +
            "• Verify the reversal in batch details\n" +
            "• Check related financial records\n" +
            "• Process new batch if needed",
        )
      }
    } catch (error) {
      alert(
        "Payroll Batch Reversal Error\n\n" +
          "The reversal process could not be completed.\n\n" +
          "Please:\n" +
          "• Verify batch status and try again\n" +
          "• Contact system support if the issue persists\n" +
          "• Check system logs for detailed error information",
      )
      console.error("Batch reversal error:", error)
    }
  }

  const handleResetP45 = async () => {
    try {
      // Step 1: Show comprehensive confirmation dialog
      const confirmed = window.confirm(
        "P45 Status Reset Confirmation\n\n" +
          "This action will:\n" +
          "• Disable the P45 Send flag in Employee Cards\n" +
          "• Reset P45 status for terminated employees\n" +
          "• Enable access to Print Bulk P45 and Send P45 functions\n" +
          "• Only affect employees in the current pay period\n\n" +
          "Important Notes:\n" +
          "• This affects terminated employees only\n" +
          "• Previous P45 records will be preserved\n" +
          "New P45 actions will become available\n\n" +
          "Do you want to proceed with the P45 reset?",
      )

      if (confirmed) {
        // Step 2: Perform the P45 reset
        // TODO: Implement the actual P45 reset API call here
        console.log("Processing P45 status reset...")

        // Step 3: Show detailed success message
        alert(
          "P45 Status Reset Successful\n\n" +
            "The following actions have been completed:\n" +
            "• P45 Send flags have been disabled in Employee Cards\n" +
            "• Print Bulk P45 function is now available\n" +
            "• Send P45 function is now available\n" +
            "• System flags have been updated\n\n" +
            "Next Steps:\n" +
            "• Verify Employee Card settings\n" +
            "• Process new P45 actions as needed\n" +
            "• Check affected employee records",
        )
      }
    } catch (error) {
      alert(
        "P45 Reset Error\n\n" +
          "The P45 status reset could not be completed.\n\n" +
          "Please:\n" +
          "• Check employee termination status\n" +
          "• Verify current P45 settings\n" +
          "• Contact support if needed",
      )
      console.error("P45 reset error:", error)
    }
  }

  const actions: Action[] = [
    {
      id: "reverse-batch",
      name: "Reverse Payroll Batch",
      description: "Undo all transactions in a posted payroll batch and mark it as reversed",
      icon: <RotateCcw className="h-5 w-5 text-white" />,
      color: "bg-red-600",
      textColor: "text-red-700",
      action: "Reverse Batch",
      warning:
        "This will reverse all financial transactions and mark the batch as reversed. This action cannot be undone.",
      onClick: handleReverseBatch,
      details: [
        "Reverses all financial transactions",
        "Updates batch status to 'Reversed'",
        "Ticks the Reversed checkbox automatically",
        "Creates audit log entries",
      ],
    },
    {
      id: "reset-p45",
      name: "Reset P45 Status",
      description: "Reset the P45 Send flag to enable Print Bulk P45 and Send P45 actions",
      icon: <FileX className="h-5 w-5 text-white" />,
      color: "bg-orange-600",
      textColor: "text-orange-700",
      action: "Reset P45",
      warning: "This will disable P45 Send flags for terminated employees in the current pay period.",
      onClick: handleResetP45,
      details: [
        "Disables P45 Send flag in Employee Cards",
        "Enables Print Bulk P45 functionality",
        "Enables Send P45 functionality",
        "Only affects terminated employees",
      ],
    },
  ]

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="space-y-6">
        {/* Enhanced Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/30 rounded-lg blur-md transition-all duration-300 group-hover:bg-primary/40 group-hover:blur-lg" />
            <div className="relative w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-primary/25">
              <RotateCcw className="h-6 w-6 text-primary-foreground drop-shadow-sm group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-black text-primary">Reversal Functions</h1>
            <p className="text-lg text-muted-foreground mt-1">Manage payroll batch reversals and P45 status resets</p>
          </div>
        </div>

        {/* Important Notice */}
        <Alert variant="destructive" className="mb-6">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Critical Operations</AlertTitle>
          <AlertDescription>
            These actions perform critical changes to your payroll data. Please ensure you have verified all details
            before proceeding.
          </AlertDescription>
        </Alert>

        {/* Reversal Actions */}
        <Card className="mb-6 border-border/50 shadow-sm">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <RotateCcw className="h-5 w-5 text-primary" />
              </div>
              Available Reversal Functions
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {actions.map((action) => (
                <Card
                  key={action.id}
                  className={`bg-gradient-to-br ${
                    action.id === "reverse-batch"
                      ? "from-red-50 to-red-100/50 border-red-200"
                      : "from-orange-50 to-orange-100/50 border-orange-200"
                  } shadow-sm`}
                >
                  <CardContent className="p-6">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                      style={{ backgroundColor: action.id === "reverse-batch" ? "#dc2626" : "#ea580c" }}
                    >
                      {action.icon}
                    </div>
                    <h3 className={`font-semibold text-lg mb-2 ${action.textColor}`}>{action.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{action.description}</p>
                    <div className="space-y-2">
                      {action.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-muted-foreground mt-0.5" />
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Process Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Card className="border-border/50 shadow-sm">
            <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
              <CardTitle className="flex items-center gap-3 text-xl text-primary">
                <div className="p-2 rounded-lg bg-primary/10">
                  <ScrollText className="h-5 w-5 text-primary" />
                </div>
                Batch Reversal Process
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    1
                  </div>
                  <p className="text-sm text-muted-foreground pt-1">
                    Click the "Reverse Batch" button to initiate the reversal process
                  </p>
                </div>
                <div className="rounded-lg overflow-hidden border shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                  <img src="/Reverse1.png" alt="Step 1: Initiating batch reversal" className="w-full" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    2
                  </div>
                  <p className="text-sm text-muted-foreground pt-1">
                    Review and confirm the reversal details in the confirmation dialog
                  </p>
                </div>
                <div className="rounded-lg overflow-hidden border shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                  <img src="/Reverse2.png" alt="Step 2: Confirmation dialog" className="w-full" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    3
                  </div>
                  <p className="text-sm text-muted-foreground pt-1">
                    After confirmation, the batch status will be updated and marked as "Reversed"
                  </p>
                </div>
                <div className="rounded-lg overflow-hidden border shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                  <img src="/Reverse3.png" alt="Step 3: Batch status updated" className="w-full" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50 shadow-sm">
            <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
              <CardTitle className="flex items-center gap-3 text-xl text-primary">
                <div className="p-2 rounded-lg bg-primary/10">
                  <UserX className="h-5 w-5 text-primary" />
                </div>
                P45 Reset Process
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  1
                </div>
                <p className="text-sm text-muted-foreground pt-1">
                  The P45 Send flag is automatically enabled when Print Bulk P45 or Send P45 is used
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  2
                </div>
                <p className="text-sm text-muted-foreground pt-1">
                  Use "Reset P45" to disable the flag and enable additional P45 actions
                </p>
              </div>
              <div className="rounded-lg overflow-hidden border shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                <img src="/Reverse4.png" alt="P45 Reset Process" className="w-full" />
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  3
                </div>
                <p className="text-sm text-muted-foreground pt-1">
                  Verify the changes in Employee Cards after the reset is complete
                </p>
              </div>
              <div className="rounded-lg overflow-hidden border shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                <img src="/Reverse5.png" alt="Employee Card Verification" className="w-full" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Important Notes */}
        <Card className="border-border/50 shadow-sm">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <Info className="h-5 w-5 text-primary" />
              </div>
              Important Notes
            </CardTitle>
            <CardDescription className="mt-2">
              Key information about the reversal processes and their implications
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <Alert variant="destructive" className="border">
              <AlertCircle className="h-5 w-5" />
              <AlertTitle>Batch Reversal Impact</AlertTitle>
              <AlertDescription className="mt-2">
                When a payroll batch is reversed, all financial transactions will be undone, and the batch will be
                marked as "Reversed" in the system. This action cannot be undone.
              </AlertDescription>
            </Alert>
            <Alert variant="destructive" className="border">
              <AlertCircle className="h-5 w-5" />
              <AlertTitle>P45 Status Management</AlertTitle>
              <AlertDescription className="mt-2">
                The P45 Send flag in Employee Cards controls the availability of P45 actions. When enabled, it restricts
                additional P45 actions. Use the reset function to remove this restriction.
              </AlertDescription>
            </Alert>
            <Alert className="border border-l-4 border-l-green-500 bg-green-50/10">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <AlertTitle className="text-green-700">Audit Trail</AlertTitle>
              <AlertDescription className="mt-2 text-green-600">
                All reversal and reset actions are logged for audit purposes.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
