"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DollarSign, Search, Plus, Trash2, Edit, CircleDollarSign, Wallet, Receipt, Gift, FileSpreadsheet } from "lucide-react"

export default function EmployeeElementsPage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-sirius-purple rounded-lg flex items-center justify-center">
            <DollarSign className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-primary">Employee Elements Guide</h1>
            <p className="text-muted-foreground text-lg mt-1">
              Learn how to configure and manage employee payroll elements in Sirius 365
            </p>
          </div>
        </div>

        <p className="text-muted-foreground mb-6 text-lg">
          This guide helps you manage employee-specific payroll elements including basic pay, deductions,
          benefits in kind, and other payment information.
        </p>

        {/* Step box container */}
        <div className="bg-muted/50 p-6 rounded-lg border mb-6">
          <div className="space-y-4">
            <div className="flex items-start gap-2">
              <span className="step-number2 bg-sirius-blue text-white">1</span>
              <p className="text-muted-foreground">
                Search for <span className="font-semibold text-primary">"Employee Elements"</span> in the BC search icon, or
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="step-number2 bg-sirius-blue text-white">2</span>
              <p className="text-muted-foreground">
                Navigate to{" "}
                <span className="font-semibold text-primary">
                  Employees → Employee Elements
                </span>
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
        </div>

        {/* Available Element Types */}
        <Card className="border-2">
          <CardHeader>
            <div className="flex flex-col gap-4">
              <div>
                <CardTitle className="text-2xl text-primary">Available Payroll Elements</CardTitle>
                <p className="text-muted-foreground mt-2">
                  Overview of the payroll elements available in Sirius 365
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-sirius-blue/10 to-sirius-blue/5 border border-sirius-blue/20 hover:border-sirius-blue/40 transition-all">
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center gap-2">
                    <Badge variant="default" className="bg-sirius-blue text-white">Earnings</Badge>
                    <span className="dark:text-white text-primary">Earning Elements</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Configure employee's base salary and regular payment structure.
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Click "Add New Element" to set up or modify earning element details.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-sirius-green/10 to-sirius-green/5 border border-sirius-green/20 hover:border-sirius-green/40 transition-all">
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center gap-2">
                    <Badge variant="default" className="bg-sirius-green text-white">Deductions</Badge>
                    <span className="dark:text-white text-primary">Deduction Elements</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Manage various deductions including tax, insurance, and other withholdings.
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Add new deductions using the "Add New Element" option.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-sirius-orange/10 to-sirius-orange/5 border border-sirius-orange/20 hover:border-sirius-orange/40 transition-all">
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center gap-2">
                    <Badge variant="default" className="bg-sirius-orange text-white">Benefits</Badge>
                    <span className="dark:text-white text-primary">Benefits in Kind</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Set up non-cash benefits such as company cars, healthcare, or other perks.
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Create new benefit records through the "Add New Element" section.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-sirius-purple/10 to-sirius-purple/5 border border-sirius-purple/20 hover:border-sirius-purple/40 transition-all">
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center gap-2">
                    <Badge variant="default" className="bg-sirius-purple text-white">Other</Badge>
                    <span className="dark:text-white text-primary">Non-Payment Elements</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Manage additional non-payment elements and information records.
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Set up other elements using the "Add New Element" functionality.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <img
                src="/EmployeeElement2.png"
                alt="Employee Elements Details"
                className="w-full object-contain"
              />
            </div>
          </CardContent>
        </Card>

        {/* Element Management */}
        <Card className="mt-8 mb-8">
          <CardHeader>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <CardTitle className="text-2xl">Element Management</CardTitle>
                <p className="text-muted-foreground mt-2">
                  Search, create, and manage employee payroll elements efficiently
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
                  <h3 className="font-semibold text-lg mb-2">Search Elements</h3>
                  <p className="text-muted-foreground text-sm">
                    Search for payroll elements by type, status, or employee. Use filters for refined results.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-sirius-green/10 to-sirius-green/5 border border-sirius-green/20 hover:border-sirius-green/40 transition-all">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-sirius-green flex items-center justify-center mb-4">
                    <Plus className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Add New Element</h3>
                  <p className="text-muted-foreground text-sm">
                    Create new payroll elements with detailed configuration options.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-red-500/10 to-red-500/5 border border-red-500/20 hover:border-red-500/40 transition-all">
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
                className="w-full object-contain hover:brightness-105 transition-all duration-300"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      <style jsx>{`
        .step-number2 {
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
      `}</style>
    </div>
  )
}