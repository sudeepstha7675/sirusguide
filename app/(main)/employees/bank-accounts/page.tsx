"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Landmark, Search, Plus, Trash2, Edit, Building2, Phone, CreditCard } from "lucide-react"

export default function BankAccountsPage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-sirius-purple rounded-lg flex items-center justify-center">
            <Landmark className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-primary">Bank Account Setup Guide</h1>
            <p className="text-muted-foreground text-lg mt-1">
              Configure and manage employee bank account details in Sirius 365
            </p>
          </div>
        </div>

        <p className="text-muted-foreground mb-6 text-lg">
          This guide helps you manage employee bank account information, including multiple bank accounts,
          account preferences, and payment details.
        </p>

        {/* Step box container */}
        <div className="bg-muted/50 p-6 rounded-lg border mb-6">
          <div className="space-y-4">
            <div className="flex items-start gap-2">
              <span className="step-number2 bg-sirius-blue text-white">1</span>
              <p className="text-muted-foreground">
                Search for <span className="font-semibold text-primary">"Bank Accounts"</span> in the BC search icon, or
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="step-number2 bg-sirius-blue text-white">2</span>
              <p className="text-muted-foreground">
                Navigate to{" "}
                <span className="font-semibold text-primary">
                  Employees → Bank Accounts
                </span>
              </p>
            </div>
          </div>

          <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
            <img
              src="/BankAccount1.png"
              alt="Step by Step guide to Bank Account Setup"
              className="w-full object-contain"
            />
          </div>
        </div>

        {/* Bank Account Types */}
        <Card className="border-2">
          <CardHeader>
            <div className="flex flex-col gap-4">
              <div>
                <CardTitle className="text-2xl text-primary">Bank Account Preference</CardTitle>
                <p className="text-muted-foreground mt-2">
                  Overview of the bank account types and preferences available in Sirius 365
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-sirius-blue/10 to-sirius-blue/5 border border-sirius-blue/20 hover:border-sirius-blue/40 transition-all">
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center gap-2">
                    <Badge variant="default" className="bg-sirius-blue text-white">Primary</Badge>
                    <span className="dark:text-white text-primary">Primary Account</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Main bank account for salary disbursement and primary payments.
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Set up primary account details with full banking information and contact details.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-sirius-green/10 to-sirius-green/5 border border-sirius-green/20 hover:border-sirius-green/40 transition-all">
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center gap-2">
                    <Badge variant="default" className="bg-sirius-green text-white">Secondary</Badge>
                    <span className="dark:text-white text-primary">Secondary Account</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Additional bank accounts for split payments or specific allowances.
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Configure payment splits and account preferences for multiple banks.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 p-4 rounded-lg bg-sirius-blue/10 border-l-4 border-sirius-blue">
              <span className="font-semibold text-sirius-blue block mb-1">Note:</span>
              <span className="text-sm text-muted-foreground">
                You can set up multiple bank accounts for each employee and specify an account preference. Payments are prioritized to the <b>Primary Account</b>. If any one account is marked as <b>Inactive</b>, payments will be directed to the another <b>Active</b> account instead.
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Bank Account Management */}
        <Card className="mt-8 mb-8">
          <CardHeader>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <CardTitle className="text-2xl">Bank Account Management</CardTitle>
                <p className="text-muted-foreground mt-2">
                  Search, create, and manage employee bank account records efficiently
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
                  <h3 className="font-semibold text-lg mb-2">Search Bank Accounts</h3>
                  <p className="text-muted-foreground text-sm">
                    Search accounts by employee, bank name, or account type. Use filters for refined results.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-sirius-green/10 to-sirius-green/5 border border-sirius-green/20 hover:border-sirius-green/40 transition-all">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-sirius-green flex items-center justify-center mb-4">
                    <Plus className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Add New Account</h3>
                  <p className="text-muted-foreground text-sm">
                    Add new bank account with full details including sort code, account number, and preferences.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-red-500/10 to-red-500/5 border border-red-500/20 hover:border-red-500/40 transition-all">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-red-500 flex items-center justify-center mb-4">
                    <Trash2 className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Delete Account</h3>
                  <p className="text-muted-foreground text-sm">
                    Remove bank account records that are no longer needed. This action cannot be undone.
                  </p>
                </CardContent>
              </Card>
            </div>

           <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <img
                src="/BankAccount2.png"
                alt="Bank Account Management Actions"
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