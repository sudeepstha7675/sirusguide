"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Users, Search, UserPlus, Trash2, Info, AlertTriangle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function ManageEmployeesPage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="space-y-6">
        {/* Enhanced Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/30 rounded-lg blur-md transition-all duration-300 group-hover:bg-primary/40 group-hover:blur-lg" />
            <div className="relative w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-primary/25">
              <Users className="h-6 w-6 text-primary-foreground drop-shadow-sm group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-black text-primary">Employee Setup Guide</h1>
            <p className="text-lg text-muted-foreground mt-1">
              Learn how to set up and configure employee information in Sirius Payroll 365.
            </p>
          </div>
        </div>

        {/* Enhanced Alert */}
        <Alert className="mb-6 bg-primary/5 border-primary/20">
          <Info className="h-5 w-5 text-primary" />
          <AlertDescription className="ml-2 text-base">
            This guide walks you through the employee setup process in Sirius Payroll 365, showing you how to configure various
            aspects of employee information including general details, payroll settings, calendar configurations, and
            HMRC-required information.
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
                  Search for <span className="font-bold text-primary">"Employees"</span> in the BC search icon
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
                  Navigate to <span className="font-bold text-primary">Employees → Manage Employees</span>.
                </p>
              </div>
            </div>

            <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <img
                src="/EmployeeSetup1.png"
                alt="Step by Step guide to Employee Setup"
                className="w-full object-contain"
              />
            </div>
          </CardContent>
        </Card>

        {/* Configuration Sections Card */}
        <Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <Users className="h-5 w-5 text-primary" />
              </div>
              Available Configuration Sections
            </CardTitle>
            <p className="text-muted-foreground mt-2">
              Overview of the key sections available for employee setup in Sirius Payroll 365
            </p>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-lg text-primary flex items-center gap-2">
                    <Badge className="bg-blue-600 text-white">01</Badge>
                    General Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Personal Information</li>
                    <li>Contact Details</li>
                    <li>Address Information</li>
                    <li>Emergency Contacts</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] bg-gradient-to-br from-green-50 to-green-100/50 border-green-200">
                <CardHeader>
                  <CardTitle className="text-lg text-primary flex items-center gap-2">
                    <Badge className="bg-green-600 text-white">02</Badge>
                    Payroll Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Bank Account Information</li>
                    <li>Payment Methods</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] bg-gradient-to-br from-orange-50 to-orange-100/50 border-orange-200">
                <CardHeader>
                  <CardTitle className="text-lg text-primary flex items-center gap-2">
                    <Badge className="bg-orange-500 text-white">03</Badge>
                    HMRC Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Tax Codes</li>
                    <li>NI Category</li>
                    <li>Student Loan Information</li>
                    <li>Tax Status</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] bg-gradient-to-br from-purple-50 to-purple-100/50 border-purple-200">
                <CardHeader>
                  <CardTitle className="text-lg text-primary flex items-center gap-2">
                    <Badge className="bg-purple-600 text-white">04</Badge>
                    Calendar Setup
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Work Pattern</li>
                    <li>Payroll Calendar</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <img src="/EmployeeSetup2.png" alt="Employee Management Features" className="w-full object-contain" />
            </div>
          </CardContent>
        </Card>

        {/* Employee Actions Card */}
        <Card className="border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <Users className="h-5 w-5 text-primary" />
              </div>
              Employee Actions
            </CardTitle>
            <p className="text-muted-foreground mt-2">Search, create, and manage employee records efficiently</p>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center mb-4">
                    <Search className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Search Employees</h3>
                  <p className="text-muted-foreground text-sm">
                    Search employees by name, ID, department, or status. Use filters for refined results.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] bg-gradient-to-br from-green-50 to-green-100/50 border-green-200">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-green-600 flex items-center justify-center mb-4">
                    <UserPlus className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Add New Employee</h3>
                  <p className="text-muted-foreground text-sm">
                    Create new employee records with comprehensive details and configurations.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] bg-gradient-to-br from-red-50 to-red-100/50 border-red-200">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-red-500 flex items-center justify-center mb-4">
                    <Trash2 className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Delete Employee</h3>
                  <p className="text-muted-foreground text-sm">Remove the Employee from database.</p>
                </CardContent>
              </Card>
            </div>

            {/* Important Notice */}
            <Alert className="bg-amber-50 border-amber-200">
              <AlertTriangle className="h-5 w-5 text-amber-600" />
              <AlertDescription className="ml-2 text-base text-amber-800">
                <span className="font-semibold">Important:</span> Employee deletions are permanent and cannot be undone.
                Please ensure proper backup before proceeding.
              </AlertDescription>
            </Alert>

            <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <img src="/EmployeeSetup3.png" alt="Employee Management Actions" className="w-full object-contain" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
