"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, CalendarOff, Search, Plus, Trash2, Edit } from "lucide-react"

export default function StatutoryLeavePage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px:6">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/30 rounded-lg blur-md transition-all duration-300 group-hover:bg-primary/40 group-hover:blur-lg" />
            <div className="relative w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-primary/25">
              <CalendarOff className="h-6 w-6 text-primary-foreground drop-shadow-sm group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-black text-primary">Statutory Leave Entitlement Processing Guide</h1>
            <p className="text-muted-foreground text-lg mt-1">
              Configure and manage statutory leave entitlements in Sirius Payroll 365
            </p>
          </div>
        </div>

        {/* Navigation Instructions */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center gap-2">
              <CardTitle className="text-2xl">How to Access Statutory Leave</CardTitle>
            </div>
            <p className="text-muted-foreground mt-2">Follow these steps to access statutory leave configuration</p>
          </CardHeader>
          <CardContent>
            <div className="bg-muted/50 p-6 rounded-lg border">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    1
                  </div>
                  <p className="text-muted-foreground">
                    Search for <span className="font-semibold text-primary">"Statutory Leave Entitlement"</span> in the
                    BC search icon
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
                  <p className="text-muted-foreground">
                    Navigate to{" "}
                    <span className="font-semibold text-primary">Processing → Statutory Leave Entitlement</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <img src="/StatutoryLeave1.png" alt="StatutoryLeave" className="w-full object-contain" />
            </div>
            <p className="text-muted-foreground mt-2">
              Highlighted below are the available Statutory Leave Entitlement in Sirius Payroll 365 which shows once it
              is configured by the user which can be selected as per requirement.
            </p>

            <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <img src="/StatutoryLeave2.png" alt="StatutoryLeave" className="w-full object-contain" />
            </div>
          </CardContent>
        </Card>

        {/* Available Functions */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Available Functions</CardTitle>
            <p className="text-muted-foreground mt-2">Core statutory leave management features</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200 shadow-sm">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center mb-4">
                    <Search className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Search</h3>
                  <p className="text-sm text-muted-foreground">
                    Find existing statutory leave records using various filters
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-purple-100/50 border-purple-200 shadow-sm">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-purple-600 flex items-center justify-center mb-4">
                    <Plus className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Create New</h3>
                  <p className="text-sm text-muted-foreground">Define new statutory leave entitlements</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-50 to-orange-100/50 border-orange-200 shadow-sm">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center mb-4">
                    <Edit className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Edit</h3>
                  <p className="text-sm text-muted-foreground">Modify existing statutory leave configurations</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-green-100/50 border-green-200 shadow-sm">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-green-600 flex items-center justify-center mb-4">
                    <Trash2 className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Delete</h3>
                  <p className="text-sm text-muted-foreground">Remove statutory leave configurations</p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <img src="/StatutoryLeave3.png" alt="StatutoryLeave" className="w-full object-contain" />
            </div>
          </CardContent>
        </Card>

        {/* Important Notes */}
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="divide-y divide-border">
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-transparent border-l-2 border-blue-600">
                <AlertCircle className="h-5 w-5 text-blue-600 mt-1 shrink-0" />
                <div>
                  <p className="font-medium mb-1">Employee Eligibility</p>
                  <p className="text-sm text-muted-foreground">
                    Ensure employees meet statutory requirements before assigning leave entitlements
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-transparent border-l-2 border-blue-600">
                <AlertCircle className="h-5 w-5 text-blue-600 mt-1 shrink-0" />
                <div>
                  <p className="font-medium mb-1">Leave Types</p>
                  <p className="text-sm text-muted-foreground">
                    Different types of statutory leave have different entitlement rules and durations
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
