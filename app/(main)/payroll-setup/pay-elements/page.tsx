"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Search, DollarSign, Info } from "lucide-react"

export default function PayElementSetupPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const payElements = [
    {
      id: "AEO",
      name: "Attachment of Earning Order",
      type: "Deduction",
      subtype: "Attachment of Earnings",
      additionalCategory: "",
      status: "Active",
    },
    {
      id: "BASIC",
      name: "Basic Salary",
      type: "Earning",
      subtype: "Basic Salary",
      additionalCategory: "",
      status: "Active",
    },
    { id: "BONUS", name: "Bonus Pay", type: "Earning", subtype: "", additionalCategory: "", status: "Active" },
    {
      id: "CAR ALLOWANCE",
      name: "Car Allowance",
      type: "Benefits In Kind",
      subtype: "Car Allowance",
      additionalCategory: "",
      status: "Active",
    },
    {
      id: "CLASS 1A NI+",
      name: "Class 1A NI Er Contribution",
      type: "Earning",
      subtype: "National Insurance",
      additionalCategory: "Employer Contribution",
      status: "Active",
    },
    {
      id: "COURT ORDER",
      name: "Court Order",
      type: "Deduction",
      subtype: "Court Orders",
      additionalCategory: "",
      status: "Active",
    },
    { id: "FURLOUGH", name: "Furlough", type: "Earning", subtype: "", additionalCategory: "", status: "Active" },
    { id: "LEAVE PAY", name: "Leave Pay", type: "Earning", subtype: "", additionalCategory: "", status: "Active" },
    {
      id: "LOAN ADVANCE",
      name: "Loan Advance",
      type: "Earning",
      subtype: "",
      additionalCategory: "",
      status: "Active",
    },
    {
      id: "LOAN REPAYMENT",
      name: "Loan Repayment",
      type: "Deduction",
      subtype: "",
      additionalCategory: "",
      status: "Active",
    },
    {
      id: "NI-",
      name: "NI Employee Contribution",
      type: "Deduction",
      subtype: "National Insurance",
      additionalCategory: "Employee Contribution",
      status: "Active",
    },
    {
      id: "NI+",
      name: "NI Employer Contribution",
      type: "Earning",
      subtype: "National Insurance",
      additionalCategory: "Employer Contribution",
      status: "Active",
    },
    {
      id: "OVERPAYMENT RECOVERY",
      name: "Overpayment Recovery",
      type: "Deduction",
      subtype: "",
      additionalCategory: "",
      status: "Active",
    },
    {
      id: "OVERTIME @ 1.0",
      name: "Overtime @ 1.00",
      type: "Earning",
      subtype: "",
      additionalCategory: "",
      status: "Active",
    },
    {
      id: "OVERTIME @ 1.5",
      name: "Overtime @ 1.50",
      type: "Earning",
      subtype: "",
      additionalCategory: "",
      status: "Active",
    },
    {
      id: "OVERTIME @ 2.0",
      name: "Overtime @ 2.00",
      type: "Earning",
      subtype: "",
      additionalCategory: "",
      status: "Active",
    },
    {
      id: "P-",
      name: "Pension Employee Contribution",
      type: "Deduction",
      subtype: "Pension",
      additionalCategory: "Employee Contribution",
      status: "Active",
    },
    {
      id: "P+",
      name: "Pension Employer Contribution",
      type: "Earning",
      subtype: "Pension",
      additionalCategory: "Employer Contribution",
      status: "Active",
    },
    {
      id: "PAY ADJUSTMENT",
      name: "Salary Adjustment",
      type: "Earning",
      subtype: "",
      additionalCategory: "",
      status: "Active",
    },
    {
      id: "PGL",
      name: "Post Graduate Loan",
      type: "Deduction",
      subtype: "Student/PG Loan",
      additionalCategory: "Post Graduate",
      status: "Active",
    },
    { id: "REDUNDANCY", name: "REDUNDANCY", type: "Earning", subtype: "", additionalCategory: "", status: "Active" },
    {
      id: "SAP",
      name: "SAP",
      type: "Earning",
      subtype: "Statutory Payment",
      additionalCategory: "Statutory Adoption Pay - SAP",
      status: "Active",
    },
    {
      id: "SHPP",
      name: "ShPP",
      type: "Earning",
      subtype: "Statutory Payment",
      additionalCategory: "Shared Parental Pay - ShPP",
      status: "Active",
    },
    {
      id: "SLP1",
      name: "Student Loan Plan 1",
      type: "Deduction",
      subtype: "Student/PG Loan",
      additionalCategory: "Plan 1",
      status: "Active",
    },
    {
      id: "SLP2",
      name: "Student Loan Plan 2",
      type: "Deduction",
      subtype: "Student/PG Loan",
      additionalCategory: "Plan 2",
      status: "Active",
    },
    {
      id: "SLP4",
      name: "Student Loan Plan 4",
      type: "Deduction",
      subtype: "Student/PG Loan",
      additionalCategory: "Plan 4",
      status: "Active",
    },
    {
      id: "SMP",
      name: "SMP",
      type: "Earning",
      subtype: "Statutory Payment",
      additionalCategory: "Statutory Maternity Pay - SMP",
      status: "Active",
    },
    {
      id: "SNCP",
      name: "SNCP",
      type: "Earning",
      subtype: "Statutory Payment",
      additionalCategory: "Statutory Neonatal Care pay - SNCP",
      status: "Active",
    },
    {
      id: "SPBP",
      name: "SPBP",
      type: "Earning",
      subtype: "Statutory Payment",
      additionalCategory: "Statutory Parental Bereavement Pay - SPBP",
      status: "Active",
    },
    {
      id: "SPP",
      name: "SPP",
      type: "Earning",
      subtype: "Statutory Payment",
      additionalCategory: "Statutory Paternity Pay - SPP",
      status: "Active",
    },
    {
      id: "SSP",
      name: "SSP",
      type: "Earning",
      subtype: "Statutory Payment",
      additionalCategory: "Statutory Sick Pay - SSP",
      status: "Active",
    },
    { id: "TAX", name: "Tax", type: "Deduction", subtype: "Tax", additionalCategory: "", status: "Active" },
    {
      id: "TERMINATION",
      name: "Termination Award",
      type: "Earning",
      subtype: "",
      additionalCategory: "",
      status: "Active",
    },
  ]

  const filteredElements = payElements.filter(
    (element) =>
      element.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      element.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      element.subtype.toLowerCase().includes(searchTerm.toLowerCase()) ||
      element.additionalCategory.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getStatusColor = (status: string) => {
    return status === "Active" ? "bg-green-600 text-white" : "bg-gray-500 text-white"
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Earning":
        return "bg-blue-600 text-white"
      case "Deduction":
        return "bg-orange-500 text-white"
      case "Allowance":
        return "bg-purple-600 text-white"
      case "Benefits In Kind":
        return "bg-green-600 text-white"
      default:
        return "bg-gray-500 text-white"
    }
  }

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="space-y-6">
        {/* Enhanced Header - Using Sirius Typography */}
        <div className="flex items-center gap-3 mb-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/30 rounded-lg blur-md transition-all duration-300 group-hover:bg-primary/40 group-hover:blur-lg" />
            <div className="relative w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-primary/25">
              <DollarSign className="h-6 w-6 text-primary-foreground drop-shadow-sm group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div>
            {/* H1 - 50px, Albert Sans Black */}
            <h1 className="text-3xl font-black text-primary">Pay Element Setup</h1>
            {/* Subtitle - 18px, Albert Sans Bold */}
            <p className="text-lg text-muted-foreground mt-1">
              Define pay elements for payroll processing like basic pay, bonus, allowances, and deductions.
            </p>
          </div>
        </div>

        {/* Enhanced Alert */}
        <Alert className="mb-6 bg-primary/5 border-primary/20">
          <Info className="h-5 w-5 text-primary" />
          <AlertDescription className="ml-2 text-base">
            Pay Element Setup encompasses a range of functions where users can define the pay elements used for payroll
            processing like basic pay, bonus, car allowance, insurance, pension, statutory leave payment, termination
            awards, and many more.
          </AlertDescription>
        </Alert>

        {/* Setup Steps Card */}
        <Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            {/* H3 - 24px, Albert Sans Bold */}
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
                {/* Body text - 12px, Albert Sans Regular */}
                <p className="text-muted-foreground pt-1">
                  Navigate to <span className="font-bold text-primary">Setup</span>.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  2
                </div>
                <p className="text-muted-foreground pt-1">
                  Click on the <span className="font-bold text-primary">Payroll Setups</span> dropdown menu.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  3
                </div>
                <p className="text-muted-foreground pt-1">
                  Select <span className="font-bold text-primary">Pay Element</span>.
                </p>
              </div>
            </div>

            <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <img
                src="/PayElementSetup1.png"
                alt="Step by Step guide to Pay Element Setup"
                className="w-full object-contain"
              />
            </div>
          </CardContent>
        </Card>

        {/* Pay Element Details Card */}
        <Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <DollarSign className="h-5 w-5 text-primary" />
              </div>
              Pay Element Details
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <p className="text-muted-foreground">
              Highlighted below are the available Pay Element in Sirius Payroll 365 which are available once the pay
              element is configured by the user and to be selected as per requirement. These can be added, edited and
              deleted as appropriate.
            </p>

            <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <img
                src="/PayElementSetup2.png"
                alt="Pay Element Configuration Screenshot"
                className="w-full object-contain"
              />
            </div>
          </CardContent>
        </Card>

        {/* Pay Elements Summary Cards - Using Original Colors */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-border/50 shadow-sm hover:shadow-md transition-all duration-300 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
            <CardContent className="p-6">
              {/* H2 - 32px, Albert Sans Bold */}
              <div className="text-2xl font-bold">33</div>
              <div className="opacity-90">Total Pay Elements</div>
            </CardContent>
          </Card>

          <Card className="border-border/50 shadow-sm hover:shadow-md transition-all duration-300 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
            <CardContent className="p-6">
              <div className="text-2xl font-bold">21</div>
              <div className="opacity-90">Earning Elements</div>
            </CardContent>
          </Card>

          <Card className="border-border/50 shadow-sm hover:shadow-md transition-all duration-300 bg-gradient-to-r from-orange-500 to-orange-700 text-white">
            <CardContent className="p-6">
              <div className="text-2xl font-bold">11</div>
              <div className="opacity-90">Deduction Elements</div>
            </CardContent>
          </Card>

          <Card className="border-border/50 shadow-sm hover:shadow-md transition-all duration-300 bg-gradient-to-r from-green-600 to-green-800 text-white">
            <CardContent className="p-6">
              <div className="text-2xl font-bold">1</div>
              <div className="opacity-90">Benefit and Kinds Elements</div>
            </CardContent>
          </Card>
        </div>

        {/* Pay Elements Table Card */}
        <Card className="border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <CardTitle className="flex items-center gap-3 text-xl text-primary">
                <div className="p-2 rounded-lg bg-primary/10">
                  <DollarSign className="h-5 w-5 text-primary" />
                </div>
                Available Pay Elements
              </CardTitle>
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search pay elements..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9 w-full"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="rounded-md border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="font-semibold">Element ID</TableHead>
                    <TableHead className="font-semibold">Name</TableHead>
                    <TableHead className="font-semibold">Type</TableHead>
                    <TableHead className="font-semibold">Subtype</TableHead>
                    <TableHead className="font-semibold">Additional Category</TableHead>
                    <TableHead className="font-semibold">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredElements.map((element) => (
                    <TableRow key={element.id} className="hover:bg-muted/30 transition-colors">
                      <TableCell className="font-mono">{element.id}</TableCell>
                      <TableCell className="font-medium">{element.name}</TableCell>
                      <TableCell>
                        <Badge className={getTypeColor(element.type)}>{element.type}</Badge>
                      </TableCell>
                      <TableCell>{element.subtype}</TableCell>
                      <TableCell>{element.additionalCategory}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(element.status)}>{element.status}</Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
