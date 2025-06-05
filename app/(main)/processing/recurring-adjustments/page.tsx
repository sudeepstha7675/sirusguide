"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  AlertCircle,
  RefreshCw,
  Search,
  Plus,
  Trash2,
  Info,
  Edit,
  Repeat,
  ArrowRight
} from "lucide-react"
import Link from "next/link"

export default function RecurringAdjustmentsPage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-sirius-purple rounded-lg flex items-center justify-center">
            <Repeat className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-primary">Recurring Adjustments Processing Guide</h1>
            <p className="text-muted-foreground text-lg mt-1">
              Process and manage recurring adjustments in Sirius 365
            </p>
          </div>
        </div>

        {/* Overview */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center gap-2">
              <CardTitle className="text-2xl">About Recurring Adjustments</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Recurring Adjustments allow you to set up automatic adjustments that repeat in every pay period until they are exhausted.
                These adjustments can be created for various document types including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><span className="font-medium text-primary">Court Order</span> - Regular deductions mandated by court decisions</li>
                <li><span className="font-medium text-primary">Child Support</span> - Recurring child maintenance payments</li>
                <li><span className="font-medium text-primary">Attachment</span> - Ongoing salary attachments</li>
                <li><span className="font-medium text-primary">Advance</span> - Repayment of salary advances</li>
              </ul>
              <p className="text-muted-foreground">
                Once configured, these adjustments will automatically apply in each pay period without requiring manual entry.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Navigation Instructions */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center gap-2">
              <CardTitle className="text-2xl">How to Access Recurring Adjustments</CardTitle>
            </div>
            <p className="text-muted-foreground mt-2">
              Follow these steps to access recurring adjustments configuration
            </p>
          </CardHeader>
          <CardContent>
            <div className="bg-muted/50 p-6 rounded-lg border">
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <span className="step-number bg-sirius-blue text-white">1</span>
                  <p className="text-muted-foreground">
                    Search for <span className="font-semibold text-primary">"Recurring Adjustments"</span> in the BC search icon, or
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="step-number bg-sirius-blue text-white">2</span>
                  <p className="text-muted-foreground">
                    Navigate to <span className="font-semibold text-primary">Processing → Recurring Adjustments</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <img
                src="/RecurringAdjustment1.png"
                alt="RecurringAdjustment"
                className="w-full object-contain"
              />
            </div>
            <p className="text-muted-foreground mt-2">
              Highlighted below are the available Recurring Adjustments in Sirius Payroll 365 which shows once it is configured by the user which can be selected as per requirement.
            </p>
            <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <img
                src="/RecurringAdjustment2.png"
                alt="RecurringAdjustment"
                className="w-full object-contain"
              />
            </div>
          </CardContent>
        </Card>

        {/* Available Functions */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Available Functions</CardTitle>
            <p className="text-muted-foreground mt-2">
              Core recurring adjustment management features
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="bg-gradient-to-br from-sirius-blue/10 to-sirius-blue/5 border-sirius-blue/20">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-sirius-blue flex items-center justify-center mb-4">
                    <Search className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Search</h3>
                  <p className="text-sm text-muted-foreground">
                    Find existing recurring adjustment records using various filters
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-sirius-purple/10 to-sirius-purple/5 border-sirius-purple/20">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-sirius-purple flex items-center justify-center mb-4">
                    <Plus className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Create New</h3>
                  <p className="text-sm text-muted-foreground">
                    Create new recurring adjustment entries
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-sirius-orange/10 to-sirius-orange/5 border-sirius-orange/20">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-sirius-orange flex items-center justify-center mb-4">
                    <Edit className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Edit</h3>
                  <p className="text-sm text-muted-foreground">
                    Modify existing recurring adjustment entries
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-sirius-green/10 to-sirius-green/5 border-sirius-green/20">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-sirius-green flex items-center justify-center mb-4">
                    <Trash2 className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Delete</h3>
                  <p className="text-sm text-muted-foreground">
                    Remove recurring adjustment entries
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <img
                src="/RecurringAdjustment3.png"
                alt="RecurringAdjustment"
                className="w-full object-contain"
              />
            </div>
          </CardContent>
        </Card>

        {/* Important Notes */}
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="divide-y divide-border">
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-sirius-blue/5 to-transparent border-l-2 border-sirius-blue hover:from-sirius-blue/10 transition-colors">
                <AlertCircle className="h-5 w-5 text-sirius-blue mt-1 shrink-0" />
                <div>
                  <p className="font-medium mb-1">Automatic Processing</p>
                  <p className="text-sm text-muted-foreground">
                    Recurring adjustments will automatically apply in each pay period until they are exhausted
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-sirius-blue/5 to-transparent border-l-2 border-sirius-blue hover:from-sirius-blue/10 transition-colors">
                <AlertCircle className="h-5 w-5 text-sirius-blue mt-1 shrink-0" />
                <div>
                  <p className="font-medium mb-1">Document Types</p>
                  <p className="text-sm text-muted-foreground">
                    Select the appropriate document type to ensure proper categorization and processing of recurring adjustments
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <style jsx>{`
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
        `}</style>
      </div>
    </div>
  )
}