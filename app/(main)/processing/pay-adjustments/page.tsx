"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, Calculator, DollarSign, Search, Plus, Trash2, Info, Edit } from "lucide-react"

export default function PayAdjustmentsPage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="space-y-6">
        {/* Enhanced Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/30 rounded-lg blur-md transition-all duration-300 group-hover:bg-primary/40 group-hover:blur-lg" />
            <div className="relative w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-primary/25">
              <DollarSign className="h-6 w-6 text-primary-foreground drop-shadow-sm group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-black text-primary">Pay Adjustments Processing Guide</h1>
            <p className="text-lg text-muted-foreground mt-1">Configure and manage pay adjustments in Sirius Payroll 365</p>
          </div>
        </div>

        {/* Overview */}
        <Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <Info className="h-5 w-5 text-primary" />
              </div>
              About Pay Adjustments
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Pay Adjustments in Sirius Payroll 365 allow you to create various types of adjustments to employee compensation.
                Available adjustment types include:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                  <div>
                    <span className="font-semibold text-primary">Salary Adjustment</span>
                    <p className="text-sm text-muted-foreground mt-1">
                      Modifications to base salary or regular pay rate
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                  <div>
                    <span className="font-semibold text-primary">Expenses</span>
                    <p className="text-sm text-muted-foreground mt-1">Employee expense reimbursements and allowances</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                  <div>
                    <span className="font-semibold text-primary">Holiday Adjustment</span>
                    <p className="text-sm text-muted-foreground mt-1">Leave-related pay modifications</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                  <div>
                    <span className="font-semibold text-primary">Termination</span>
                    <p className="text-sm text-muted-foreground mt-1">Final payments and notice period adjustments</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                  <div>
                    <span className="font-semibold text-primary">Sporting</span>
                    <p className="text-sm text-muted-foreground mt-1">Sports-related benefits and special allowances</p>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground">
                Each adjustment can be associated with specific employees by selecting their Employee Code in the Pay
                Adjustment Sub-form.
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
              How to Access Pay Adjustments
            </CardTitle>
            <p className="text-muted-foreground mt-2">Follow these steps to access pay adjustments configuration</p>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  1
                </div>
                <p className="text-muted-foreground pt-1">
                  Search for <span className="font-semibold text-primary">"Pay Adjustments"</span> in the BC search
                  icon
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
                  Navigate to <span className="font-semibold text-primary">Processing → Pay Adjustments</span>
                </p>
              </div>
            </div>

            <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <img src="/PayAdjustment1.png" alt="PayAdjustment" className="w-full object-contain" />
            </div>
            <p className="text-muted-foreground mt-2">
              Highlighted below are the available Pay Adjustments in Sirius Payroll 365, which shows once it is
              configured by the user which can be selected as per requirement.
            </p>
            <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <img src="/PayAdjustment2.png" alt="PayAdjustment" className="w-full object-contain" />
            </div>
          </CardContent>
        </Card>

        {/* Available Functions */}
        <Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <Calculator className="h-5 w-5 text-primary" />
              </div>
              Available Functions
            </CardTitle>
            <p className="text-muted-foreground mt-2">Core pay adjustment management features</p>
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
                    Find existing pay adjustment records using various filters
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-purple-100/50 border-purple-200 shadow-sm">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-purple-600 flex items-center justify-center mb-4">
                    <Plus className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-purple-700">Create New</h3>
                  <p className="text-sm text-muted-foreground">Create new pay adjustment entries for employees</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-50 to-orange-100/50 border-orange-200 shadow-sm">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center mb-4">
                    <Edit className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-orange-700">Edit</h3>
                  <p className="text-sm text-muted-foreground">Modify existing pay adjustment entries</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-green-100/50 border-green-200 shadow-sm">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-green-600 flex items-center justify-center mb-4">
                    <Trash2 className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-green-700">Delete</h3>
                  <p className="text-sm text-muted-foreground">Remove pay adjustment entries</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <img src="/PayAdjustment3.png" alt="PayAdjustment" className="w-full object-contain" />
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
                  <p className="font-medium mb-1">Employee Selection</p>
                  <p className="text-sm text-muted-foreground">
                    Select Employee Code on Pay Adjustment Sub-form to associate adjustments with specific employees
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-primary/5 to-transparent border-l-2 border-primary">
                <AlertCircle className="h-5 w-5 text-primary mt-1 shrink-0" />
                <div>
                  <p className="font-medium mb-1">Adjustment Configuration</p>
                  <p className="text-sm text-muted-foreground">
                    Ensure proper configuration of adjustment types and amounts before processing
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
