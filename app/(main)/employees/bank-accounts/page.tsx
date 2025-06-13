"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Landmark, Search, Plus, Trash2, Info } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function BankAccountsPage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="space-y-6">
        {/* Enhanced Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/30 rounded-lg blur-md transition-all duration-300 group-hover:bg-primary/40 group-hover:blur-lg" />
            <div className="relative w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-primary/25">
              <Landmark className="h-6 w-6 text-primary-foreground drop-shadow-sm group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-black text-primary">Bank Account Setup Guide</h1>
            <p className="text-lg text-muted-foreground mt-1">
              Configure and manage employee bank account details in Sirius 365.
            </p>
          </div>
        </div>

        {/* Enhanced Alert */}
        <Alert className="mb-6 bg-primary/5 border-primary/20">
          <Info className="h-5 w-5 text-primary" />
          <AlertDescription className="ml-2 text-base">
            This guide helps you manage employee bank account information, including multiple bank accounts, account
            preferences, and payment details.
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
                  Search for <span className="font-bold text-primary">"Bank Accounts"</span> in the BC search icon, or
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  2
                </div>
                <p className="text-muted-foreground pt-1">
                  Navigate to <span className="font-bold text-primary">Employees → Bank Accounts</span>.
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
          </CardContent>
        </Card>

        {/* Bank Account Preference Card */}
        <Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <Landmark className="h-5 w-5 text-primary" />
              </div>
              Bank Account Preference
            </CardTitle>
            <p className="text-muted-foreground mt-2">
              Overview of the bank account types and preferences available in Sirius 365
            </p>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-lg text-primary flex items-center gap-2">
                    <Badge className="bg-blue-600 text-white">Primary</Badge>
                    Primary Account
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Main bank account for salary disbursement and primary payments.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Set up primary account details with full banking information and contact details.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] bg-gradient-to-br from-green-50 to-green-100/50 border-green-200">
                <CardHeader>
                  <CardTitle className="text-lg text-primary flex items-center gap-2">
                    <Badge className="bg-green-600 text-white">Secondary</Badge>
                    Secondary Account
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Additional bank accounts for split payments or specific allowances.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Configure payment splits and account preferences for multiple banks.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Important Notice */}
            <Alert className="bg-blue-50 border-blue-200">
              <Info className="h-5 w-5 text-blue-600" />
              <AlertDescription className="ml-2 text-base text-blue-800">
                <span className="font-semibold">Note:</span> You can set up multiple bank accounts for each employee and
                specify an account preference. Payments are prioritized to the{" "}
                <span className="font-semibold">Primary Account</span>. If any one account is marked as{" "}
                <span className="font-semibold">Inactive</span>, payments will be directed to another{" "}
                <span className="font-semibold">Active</span> account instead.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Bank Account Management Card */}
        <Card className="border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <Landmark className="h-5 w-5 text-primary" />
              </div>
              Bank Account Management
            </CardTitle>
            <p className="text-muted-foreground mt-2">
              Search, create, and manage employee bank account records efficiently
            </p>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center mb-4">
                    <Search className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Search Bank Accounts</h3>
                  <p className="text-muted-foreground text-sm">
                    Search accounts by employee, bank name, or account type. Use filters for refined results.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] bg-gradient-to-br from-green-50 to-green-100/50 border-green-200">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-green-600 flex items-center justify-center mb-4">
                    <Plus className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Add New Account</h3>
                  <p className="text-muted-foreground text-sm">
                    Add new bank account with full details including sort code, account number, and preferences.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] bg-gradient-to-br from-red-50 to-red-100/50 border-red-200">
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
              <img src="/BankAccount2.png" alt="Bank Account Management Actions" className="w-full object-contain" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
