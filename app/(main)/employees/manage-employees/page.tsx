"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Users, Search, UserPlus, Trash2 } from "lucide-react"

export default function ManageEmployeesPage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-sirius-purple rounded-lg flex items-center justify-center">
            <Users className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-primary">Employee Setup Guide</h1>
            <p className="text-muted-foreground text-lg mt-1">
              Learn how to set up and configure employee information in Sirius 365
            </p>
          </div>
        </div>

        <p className="text-muted-foreground mb-6 text-lg">
          This guide walks you through the employee setup process in Sirius 365, showing you how to configure
          various aspects of employee information including general details, payroll settings, calendar configurations,
          and HMRC-required information.
        </p>

        {/* Step box container */}
        <div className="bg-muted/50 p-6 rounded-lg border mb-6">
          <div className="space-y-4">
            <div className="flex items-start gap-2">
              <span className="step-number bg-sirius-blue text-white">1</span>
              <p className="text-muted-foreground">
                Search for <span className="font-semibold text-primary">"Employees"</span> in the BC search icon, or
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="step-number bg-sirius-blue text-white">2</span>
              <p className="text-muted-foreground">
                Navigate to{" "}
                <span className="font-semibold text-primary">
                  Employees → Manage Employees
                </span>
              </p>
            </div>
          </div>

          <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
            <img
              src="/EmployeeSetup1.png"
              alt="Step by Step guide to Payroll Setup"
              className="w-full object-contain"
            />
          </div>
        </div>
      </div>


      <Card className="border-2">
        <CardHeader>
          <div className="flex flex-col gap-4">
            <div>
              <CardTitle className="text-2xl text-primary">Available Configuration Sections</CardTitle>
              <p className="text-muted-foreground mt-2">
                Overview of the key sections available for employee setup in Sirius 365
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-sirius-blue/10 to-sirius-blue/5 border border-sirius-blue/20 hover:border-sirius-blue/40 transition-all">
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center gap-2">
                    <Badge variant="default" className="bg-sirius-blue text-white">01</Badge>
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

              <Card className="bg-gradient-to-br from-sirius-green/10 to-sirius-green/5 border border-sirius-green/20 hover:border-sirius-green/40 transition-all">
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center gap-2">
                    <Badge variant="default" className="bg-sirius-green text-white">02</Badge>
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

              <Card className="bg-gradient-to-br from-sirius-orange/10 to-sirius-orange/5 border border-sirius-orange/20 hover:border-sirius-orange/40 transition-all">
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center gap-2">
                    <Badge variant="default" className="bg-sirius-orange text-white">03</Badge>
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

              <Card className="bg-gradient-to-br from-sirius-purple/10 to-sirius-purple/5 border border-sirius-purple/20 hover:border-sirius-purple/40 transition-all">
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center gap-2">
                    <Badge variant="default" className="bg-sirius-purple text-white">04</Badge>
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
              <img
                src="/EmployeeSetup2.png"
                alt="Employee Management Features"
                className="w-full object-contain hover:brightness-105 transition-all duration-300"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Employee Actions */}
      <Card className="mt-8">
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <CardTitle className="text-2xl">Employee Actions</CardTitle>
              <p className="text-muted-foreground mt-2">
                Search, create, and manage employee records efficiently
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-sirius-blue/10 to-sirius-blue/5 border border-sirius-blue/20 hover:border-sirius-blue/40 transition-all">
              <CardContent className="p-6">
                <div className="w-10 h-10 rounded-lg bg-sirius-blue flex items-center justify-center mb-4">
                  <Search className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Search Employees</h3>
                <p className="text-muted-foreground text-sm">
                  Search employees by name, ID, department, or status. Use filters for refined results.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-sirius-green/10 to-sirius-green/5 border border-sirius-green/20 hover:border-sirius-green/40 transition-all">
              <CardContent className="p-6">
                <div className="w-10 h-10 rounded-lg bg-sirius-green flex items-center justify-center mb-4">
                  <UserPlus className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Add New Employee</h3>
                <p className="text-muted-foreground text-sm">
                  Create new employee records with comprehensive details and configurations.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-red-500/10 to-red-500/5 border border-red-500/20 hover:border-red-500/40 transition-all">
              <CardContent className="p-6">
                <div className="w-10 h-10 rounded-lg bg-red-500 flex items-center justify-center mb-4">
                  <Trash2 className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Delete Employee</h3>
                <p className="text-muted-foreground text-sm">
                  Remove the Employee from database.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6 p-4 bg-amber-50 border-l-4 border-amber-500 rounded">
            <p className="text-amber-800 font-medium">
              ⚠️ Important: Employee deletions are permanent and cannot be undone. Please ensure proper backup before proceeding.
            </p>
          </div>
          <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
            <img
              src="/EmployeeSetup3.png"
              alt="Step by Step guide to Payroll Setup"
              className="w-full object-contain"
            />
          </div>
        </CardContent>
      </Card>


      {/* Step number style */}
      <style>
        {`
          .step-number {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            height: 1.75rem;
            width: 1.75rem;
            font-size: 0.875rem;
            font-weight: 600;
            border-radius: 9999px;
            flex-shrink: 0;
          }
        `}
      </style>
    </div>
  )
}
