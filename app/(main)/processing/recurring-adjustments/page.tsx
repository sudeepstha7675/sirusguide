"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, RefreshCw, Search, Plus, Trash2, Info, Edit, Repeat } from "lucide-react"

export default function RecurringAdjustmentsPage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="space-y-6">
        {/* Enhanced Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/30 rounded-lg blur-md transition-all duration-300 group-hover:bg-primary/40 group-hover:blur-lg" />
            <div className="relative w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-primary/25">
              <Repeat className="h-6 w-6 text-primary-foreground drop-shadow-sm group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-black text-primary">Recurring Adjustments Processing Guide</h1>
            <p className="text-lg text-muted-foreground mt-1">Process and manage recurring adjustments in Sirius 365</p>
          </div>
        </div>

        {/* Overview */}
        <Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <Info className="h-5 w-5 text-primary" />
              </div>
              About Recurring Adjustments
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Recurring Adjustments allow you to set up automatic adjustments that repeat in every pay period until
                they are exhausted. These adjustments can be created for various document types including:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                  <div>
                    <span className="font-semibold text-primary">Court Order</span>
                    <p className="text-sm text-muted-foreground mt-1">Regular deductions mandated by court decisions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                  <div>
                    <span className="font-semibold text-primary">Child Support</span>
                    <p className="text-sm text-muted-foreground mt-1">Recurring child maintenance payments</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                  <div>
                    <span className="font-semibold text-primary">Attachment</span>
                    <p className="text-sm text-muted-foreground mt-1">Ongoing salary attachments</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                  <div>
                    <span className="font-semibold text-primary">Advance</span>
                    <p className="text-sm text-muted-foreground mt-1">Repayment of salary advances</p>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground">
                Once configured, these adjustments will automatically apply in each pay period without requiring manual
                entry.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Navigation Instructions */}
        <Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <Info className="h-5 w-5 text-primary" />
              </div>
              How to Access Recurring Adjustments
            </CardTitle>
            <p className="text-muted-foreground mt-2">
              Follow these steps to access recurring adjustments configuration
            </p>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  1
                </div>
                <p className="text-muted-foreground pt-1">
                  Search for <span className="font-semibold text-primary">"Recurring Adjustments"</span> in the BC
                  search icon, or
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  2
                </div>
                <p className="text-muted-foreground pt-1">
                  Navigate to <span className="font-semibold text-primary">Processing → Recurring Adjustments</span>
                </p>
              </div>
            </div>

            <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <img src="/RecurringAdjustment1.png" alt="RecurringAdjustment" className="w-full object-contain" />
            </div>
            <p className="text-muted-foreground mt-2">
              Highlighted below are the available Recurring Adjustments in Sirius Payroll 365 which shows once it is
              configured by the user which can be selected as per requirement.
            </p>
            <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <img src="/RecurringAdjustment2.png" alt="RecurringAdjustment" className="w-full object-contain" />
            </div>
          </CardContent>
        </Card>

        {/* Available Functions */}
        <Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <RefreshCw className="h-5 w-5 text-primary" />
              </div>
              Available Functions
            </CardTitle>
            <p className="text-muted-foreground mt-2">Core recurring adjustment management features</p>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200 shadow-sm">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center mb-4">
                    <Search className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-blue-700">Search</h3>
                  <p className="text-sm text-muted-foreground">
                    Find existing recurring adjustment records using various filters
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-purple-100/50 border-purple-200 shadow-sm">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-purple-600 flex items-center justify-center mb-4">
                    <Plus className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-purple-700">Create New</h3>
                  <p className="text-sm text-muted-foreground">Create new recurring adjustment entries</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-50 to-orange-100/50 border-orange-200 shadow-sm">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center mb-4">
                    <Edit className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-orange-700">Edit</h3>
                  <p className="text-sm text-muted-foreground">Modify existing recurring adjustment entries</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-green-100/50 border-green-200 shadow-sm">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-green-600 flex items-center justify-center mb-4">
                    <Trash2 className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-green-700">Delete</h3>
                  <p className="text-sm text-muted-foreground">Remove recurring adjustment entries</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <img src="/RecurringAdjustment3.png" alt="RecurringAdjustment" className="w-full object-contain" />
            </div>
          </CardContent>
        </Card>

        {/* Important Notes */}
        <Card className="border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <AlertCircle className="h-5 w-5 text-primary" />
              </div>
              Important Notes
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-border">
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-primary/5 to-transparent border-l-2 border-primary">
                <AlertCircle className="h-5 w-5 text-primary mt-1 shrink-0" />
                <div>
                  <p className="font-medium mb-1">Automatic Processing</p>
                  <p className="text-sm text-muted-foreground">
                    Recurring adjustments will automatically apply in each pay period until they are exhausted
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-primary/5 to-transparent border-l-2 border-primary">
                <AlertCircle className="h-5 w-5 text-primary mt-1 shrink-0" />
                <div>
                  <p className="font-medium mb-1">Document Types</p>
                  <p className="text-sm text-muted-foreground">
                    Select the appropriate document type to ensure proper categorization and processing of recurring
                    adjustments
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
