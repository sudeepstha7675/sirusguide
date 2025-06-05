"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Search, Edit, Trash2, DollarSign } from "lucide-react"
import { useState } from "react"

export default function PayElementSetupPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const payElements = [
  { id: "AEO", name: "Attachment of Earning Order", type: "Deduction", subtype: "Attachment of Earnings", additionalCategory: "", status: "Active" },
  { id: "BASIC", name: "Basic Salary", type: "Earning", subtype: "Basic Salary", additionalCategory: "", status: "Active" },
  { id: "BONUS", name: "Bonus Pay", type: "Earning", subtype: "", additionalCategory: "", status: "Active" },
  { id: "CAR ALLOWANCE", name: "Car Allowance", type: "Benefits In Kind", subtype: "Car Allowance", additionalCategory: "", status: "Active" },

  { id: "CLASS 1A NI+", name: "Class 1A NI Er Contribution", type: "Earning", subtype: "National Insurance", additionalCategory: "Employer Contribution", status: "Active" },
  { id: "COURT ORDER", name: "Court Order", type: "Deduction", subtype: "Court Orders", additionalCategory: "", status: "Active" },
  { id: "FURLOUGH", name: "Furlough", type: "Earning", subtype: "", additionalCategory: "", status: "Active" },
  { id: "LEAVE PAY", name: "Leave Pay", type: "Earning", subtype: "", additionalCategory: "", status: "Active" },
  { id: "LOAN ADVANCE", name: "Loan Advance", type: "Earning", subtype: "", additionalCategory: "", status: "Active" },
  { id: "LOAN REPAYMENT", name: "Loan Repayment", type: "Deduction", subtype: "", additionalCategory: "", status: "Active" },
  { id: "NI-", name: "NI Employee Contribution", type: "Deduction", subtype: "National Insurance", additionalCategory: "Employee Contribution", status: "Active" },
  { id: "NI+", name: "NI Employer Contribution", type: "Earning", subtype: "National Insurance", additionalCategory: "Employer Contribution", status: "Active" },
  { id: "OVERPAYMENT RECOVERY", name: "Overpayment Recovery", type: "Deduction", subtype: "", additionalCategory: "", status: "Active" },
  { id: "OVERTIME @ 1.0", name: "Overtime @ 1.00", type: "Earning", subtype: "", additionalCategory: "", status: "Active" },
  { id: "OVERTIME @ 1.5", name: "Overtime @ 1.50", type: "Earning", subtype: "", additionalCategory: "", status: "Active" },
  { id: "OVERTIME @ 2.0", name: "Overtime @ 2.00", type: "Earning", subtype: "", additionalCategory: "", status: "Active" },
  { id: "P-", name: "Pension Employee Contribution", type: "Deduction", subtype: "Pension", additionalCategory: "Employee Contribution", status: "Active" },
  { id: "P+", name: "Pension Employer Contribution", type: "Earning", subtype: "Pension", additionalCategory: "Employer Contribution", status: "Active" },
  { id: "PAY ADJUSTMENT", name: "Salary Adjustment", type: "Earning", subtype: "", additionalCategory: "", status: "Active" },
  { id: "PGL", name: "Post Graduate Loan", type: "Deduction", subtype: "Student/PG Loan", additionalCategory: "Post Graduate", status: "Active" },
  { id: "REDUNDANCY", name: "REDUNDANCY", type: "Earning", subtype: "", additionalCategory: "", status: "Active" },
  { id: "SAP", name: "SAP", type: "Earning", subtype: "Statutory Payment", additionalCategory: "Statutory Adoption Pay - SAP", status: "Active" },
  { id: "SHPP", name: "ShPP", type: "Earning", subtype: "Statutory Payment", additionalCategory: "Shared Parental Pay - ShPP", status: "Active" },
  { id: "SLP1", name: "Student Loan Plan 1", type: "Deduction", subtype: "Student/PG Loan", additionalCategory: "Plan 1", status: "Active" },
  { id: "SLP2", name: "Student Loan Plan 2", type: "Deduction", subtype: "Student/PG Loan", additionalCategory: "Plan 2", status: "Active" },
  { id: "SLP4", name: "Student Loan Plan 4", type: "Deduction", subtype: "Student/PG Loan", additionalCategory: "Plan 4", status: "Active" },
  { id: "SMP", name: "SMP", type: "Earning", subtype: "Statutory Payment", additionalCategory: "Statutory Maternity Pay - SMP", status: "Active" },
  { id: "SNCP", name: "SNCP", type: "Earning", subtype: "Statutory Payment", additionalCategory: "Statutory Neonatal Care pay - SNCP", status: "Active" },
  { id: "SPBP", name: "SPBP", type: "Earning", subtype: "Statutory Payment", additionalCategory: "Statutory Parental Bereavement Pay - SPBP", status: "Active" },
  { id: "SPP", name: "SPP", type: "Earning", subtype: "Statutory Payment", additionalCategory: "Statutory Paternity Pay - SPP", status: "Active" },
  { id: "SSP", name: "SSP", type: "Earning", subtype: "Statutory Payment", additionalCategory: "Statutory Sick Pay - SSP", status: "Active" },
  { id: "TAX", name: "Tax", type: "Deduction", subtype: "Tax", additionalCategory: "", status: "Active" },
  { id: "TERMINATION", name: "Termination Award", type: "Earning", subtype: "", additionalCategory: "", status: "Active" },
]


  const filteredElements = payElements.filter(
    (element) =>
      element.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      element.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      element.subtype.toLowerCase().includes(searchTerm.toLowerCase()) ||
      element.additionalCategory.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getStatusColor = (status: string) => {
    return status === "Active" ? "bg-sirius-green text-white" : "bg-gray-500 text-white"
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Earning":
        return "bg-sirius-blue text-white"
      case "Deduction":
        return "bg-sirius-orange text-white"
      case "Allowance":
        return "bg-sirius-purple text-white"
        case "Benefits In Kind":
         return "bg-sirius-green text-white"
      default:
        return "bg-gray-500 text-white"
    }
  }

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-sirius-purple rounded-lg flex items-center justify-center">
            <DollarSign className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-primary">Pay Element Setup</h1>
            <p className="text-muted-foreground text-lg mt-1">
              Define pay elements for payroll processing like basic pay, bonus, allowances, and deductions.
            </p>
          </div>
        </div>
         <p className="text-muted-foreground mb-6 text-lg">
         Pay Element Setup encompasses a range of functions where users can define the pay elements used for payroll processing like basic pay, bonus, car 
allowance, insurance, pension, statutory leave payment, termination awards, and many more.
        </p>
        <div className="bg-muted/50 p-6 rounded-lg border mb-6">
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="step-number bg-sirius-blue text-white">1</span>
              <p className="text-muted-foreground">
                Navigate to <span className="font-semibold text-primary">Setup</span>.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="step-number bg-sirius-blue text-white">2</span>
              <p className="text-muted-foreground">
                Click on the <span className="font-semibold text-primary">Payroll Setups</span> dropdown menu.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="step-number bg-sirius-blue text-white">3</span>
              <p className="text-muted-foreground">
                Select <span className="font-semibold text-primary">Pay Element</span>.
              </p>
            </div>
          </div>
       <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
            <img
              src="/PayElementSetup1.png"
              alt="Step by Step guide to Payroll Setup"
              className="w-full object-contain"
            />
          </div>
        </div>
      </div>

       <p className="text-muted-foreground mb-6 text-lg">
         Highlighted below are the available Pay Element in Sirius Payroll 365 which are available once the pay element is configured by the user and to be 
selected as per requirement. These can be added, edited and deleted as appropriate.
        </p>
          <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
            <img
              src="/PayElementSetup2.png"
              alt="Step by Step guide to Payroll Setup"
              className="w-full object-contain"
            />
          </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <CardTitle className="text-2xl">Available Pay Elements</CardTitle>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
        <Card className="bg-gradient-to-r from-sirius-purple to-sirius-purple-dark text-white">
          <CardContent className="p-6">
            <div className="text-2xl font-bold">33</div>
            <div className="text-sm opacity-90">Total Pay Elements</div>
          </CardContent>
        </Card>
          <Card className="bg-gradient-to-r from-sirius-blue to-sirius-blue-dark text-white ">
          <CardContent className="p-6">
            <div className="text-2xl font-bold">21</div>
            <div className="text-sm opacity-90">Earning Elements</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-r from-sirius-orange to-sirius-orange-dark text-white">
          <CardContent className="p-6">
            <div className="text-2xl font-bold">11</div>
            <div className="text-sm opacity-90">Deduction Elements</div>
          </CardContent>
        </Card>
         <Card className="bg-gradient-to-r from-sirius-green to-sirius-green-dark text-white">
          <CardContent className="p-6">
            <div className="text-2xl font-bold">1</div>
            <div className="text-sm opacity-90">Benefit and Kinds Elements</div>
          </CardContent>
        </Card>
      </div>
        </CardHeader>
        <CardContent>
                  <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Element ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Subtype</TableHead>
                  <TableHead>Additional Category</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredElements.map((element) => (
                  <TableRow key={element.id}>
                    <TableCell className="font-mono text-sm">{element.id}</TableCell>
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
