"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { BookUser, Search, Plus, Trash2, Info } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function StudentLoanPage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="space-y-6">
        {/* Enhanced Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/30 rounded-lg blur-md transition-all duration-300 group-hover:bg-primary/40 group-hover:blur-lg" />
            <div className="relative w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-primary/25">
              <BookUser className="h-6 w-6 text-primary-foreground drop-shadow-sm group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-black text-primary">Student Loan Setup Guide</h1>
            <p className="text-lg text-muted-foreground mt-1">
              Learn how to configure and manage student loan information in Sirius Payroll 365.
            </p>
          </div>
        </div>

        {/* Enhanced Alert */}
        <Alert className="mb-6 bg-primary/5 border-primary/20">
          <Info className="h-5 w-5 text-primary" />
          <AlertDescription className="ml-2 text-base">
            This guide walks you through the student loan setup process, showing you how to configure various aspects
            including loan types, payment plans, and date configurations.
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
                  Search for <span className="font-bold text-primary">"Student Loan Details"</span> in the BC search
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
                  1
                </div>
                <p className="text-muted-foreground pt-1">
                  Navigate to <span className="font-bold text-primary">Employees → Student Loan</span>.
                </p>
              </div>
            </div>

            <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <img
                src="/StudentLoan1.png"
                alt="Step by Step guide to Student Loan Setup"
                className="w-full object-contain"
              />
            </div>
          </CardContent>
        </Card>

        {/* Available Student Loan Plans Card */}
        <Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <BookUser className="h-5 w-5 text-primary" />
              </div>
              Available Student Loan Plans
            </CardTitle>
            <p className="text-muted-foreground mt-2">Overview of the student loan plans available in Sirius Payroll 365</p>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-lg text-primary flex items-center gap-2">
                    <Badge className="bg-blue-600 text-white">PGL</Badge>
                    Postgraduate Loan
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Click "Add New Student Loan" to create a new PGL record with start and end dates.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] bg-gradient-to-br from-green-50 to-green-100/50 border-green-200">
                <CardHeader>
                  <CardTitle className="text-lg text-primary flex items-center gap-2">
                    <Badge className="bg-green-600 text-white">SLP1</Badge>
                    Student Loan Plan 1
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Create a new SLP1 record by clicking "Add New Student Loan" and selecting the loan type and dates.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] bg-gradient-to-br from-orange-50 to-orange-100/50 border-orange-200">
                <CardHeader>
                  <CardTitle className="text-lg text-primary flex items-center gap-2">
                    <Badge className="bg-orange-500 text-white">SLP2</Badge>
                    Student Loan Plan 2
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Set up an SLP2 loan by using the "Add New Student Loan" button to specify loan dates and type.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] bg-gradient-to-br from-purple-50 to-purple-100/50 border-purple-200">
                <CardHeader>
                  <CardTitle className="text-lg text-primary flex items-center gap-2">
                    <Badge className="bg-purple-600 text-white">SLP4</Badge>
                    Student Loan Plan 4
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Add an SLP4 loan through the "Add New Student Loan" option, where you can define the loan type and
                    date range.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <img src="/StudentLoan2.png" alt="Student Loan Details Page" className="w-full object-contain" />
            </div>
          </CardContent>
        </Card>

        {/* Student Loan Management Card */}
        <Card className="border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <BookUser className="h-5 w-5 text-primary" />
              </div>
              Student Loan Management
            </CardTitle>
            <p className="text-muted-foreground mt-2">Search, create, and manage student loan records efficiently</p>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center mb-4">
                    <Search className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Search Student Loans</h3>
                  <p className="text-muted-foreground text-sm">
                    Search student loans by employee, loan type, and status. Use filters for refined results.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] bg-gradient-to-br from-green-50 to-green-100/50 border-green-200">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-green-600 flex items-center justify-center mb-4">
                    <Plus className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Add New Student Loan</h3>
                  <p className="text-muted-foreground text-sm">
                    Add a new student loan record with detailed information and payment schedule.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] bg-gradient-to-br from-red-50 to-red-100/50 border-red-200">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-red-500 flex items-center justify-center mb-4">
                    <Trash2 className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Delete Student Loan</h3>
                  <p className="text-muted-foreground text-sm">
                    Remove a student loan record. Please note this action cannot be undone.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <img src="/StudentLoan3.png" alt="Student Loan Management Actions" className="w-full object-contain" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
