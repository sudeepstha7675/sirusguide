"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { DollarSign, Search, Plus, Trash2, Info } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function EmployeeElementsPage() {
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
            <h1 className="text-3xl font-black text-primary">Employee Elements Guide</h1>
            <p className="text-lg text-muted-foreground mt-1">
              Learn how to configure and manage employee payroll elements in Sirius 365.
            </p>
          </div>
        </div>

        {/* Enhanced Alert */}
        <Alert className="mb-6 bg-primary/5 border-primary/20">
          <Info className="h-5 w-5 text-primary" />
          <AlertDescription className="ml-2 text-base">
            This guide helps you manage employee-specific payroll elements including basic pay, deductions, benefits in
            kind, and other payment information.
          </AlertDescription>
        </Alert>

        {/* Setup Steps Card */}
        <Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <Info className="h-5 w-5 text-primary" />
              </div>
              Setup Steps
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  1
                </div>
                <p className="text-muted-foreground pt-1">
                  Search for <span className="font-bold text-primary">"Employee Elements"</span> in the BC search icon,
                  or
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  2
                </div>
                <p className="text-muted-foreground pt-1">
                  Navigate to <span className="font-bold text-primary">Employees → Employee Elements</span>.
                </p>
              </div>
            </div>

            <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <img
                src="/EmployeeElement1.png"
                alt="Step by Step guide to Employee Elements Setup"
                className="w-full object-contain"
              />
            </div>
          </CardContent>
        </Card>

        {/* Available Payroll Elements Card */}
        <Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <DollarSign className="h-5 w-5 text-primary" />
              </div>
              Available Payroll Elements
            </CardTitle>
            <p className="text-muted-foreground mt-2">Overview of the payroll elements available in Sirius 365</p>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-lg text-primary flex items-center gap-2">
                    <Badge className="bg-blue-600 text-white">Earnings</Badge>
                    Earning Elements
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Configure employee's base salary and regular payment structure.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Click "Add New Element" to set up or modify earning element details.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] bg-gradient-to-br from-green-50 to-green-100/50 border-green-200">
                <CardHeader>
                  <CardTitle className="text-lg text-primary flex items-center gap-2">
                    <Badge className="bg-green-600 text-white">Deductions</Badge>
                    Deduction Elements
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Manage various deductions including tax, insurance, and other withholdings.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Add new deductions using the "Add New Element" option.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] bg-gradient-to-br from-orange-50 to-orange-100/50 border-orange-200">
                <CardHeader>
                  <CardTitle className="text-lg text-primary flex items-center gap-2">
                    <Badge className="bg-orange-500 text-white">Benefits</Badge>
                    Benefits in Kind
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Set up non-cash benefits such as company cars, healthcare, or other perks.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Create new benefit records through the "Add New Element" section.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] bg-gradient-to-br from-purple-50 to-purple-100/50 border-purple-200">
                <CardHeader>
                  <CardTitle className="text-lg text-primary flex items-center gap-2">
                    <Badge className="bg-purple-600 text-white">Other</Badge>
                    Non-Payment Elements
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Manage additional non-payment elements and information records.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Set up other elements using the "Add New Element" functionality.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <img src="/EmployeeElement2.png" alt="Employee Elements Details" className="w-full object-contain" />
            </div>
          </CardContent>
        </Card>

        {/* Element Management Card */}
        <Card className="border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <DollarSign className="h-5 w-5 text-primary" />
              </div>
              Element Management
            </CardTitle>
            <p className="text-muted-foreground mt-2">
              Search, create, and manage employee payroll elements efficiently
            </p>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center mb-4">
                    <Search className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Search Elements</h3>
                  <p className="text-muted-foreground text-sm">
                    Search for payroll elements by type, status, or employee. Use filters for refined results.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] bg-gradient-to-br from-green-50 to-green-100/50 border-green-200">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-green-600 flex items-center justify-center mb-4">
                    <Plus className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Add New Element</h3>
                  <p className="text-muted-foreground text-sm">
                    Create new payroll elements with detailed configuration options.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] bg-gradient-to-br from-red-50 to-red-100/50 border-red-200">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-red-500 flex items-center justify-center mb-4">
                    <Trash2 className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Delete Element</h3>
                  <p className="text-muted-foreground text-sm">
                    Remove payroll elements that are no longer needed. This action cannot be undone.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <img
                src="/EmployeeElement3.png"
                alt="Employee Elements Management Actions"
                className="w-full object-contain"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
