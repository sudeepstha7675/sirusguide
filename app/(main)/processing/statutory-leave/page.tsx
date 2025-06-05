"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  AlertCircle,
  Calendar,
  CalendarOff,
  Search,
  Plus,
  Trash2,
  Info,
  Edit,
  ArrowRight
} from "lucide-react"
import Link from "next/link"

export default function StatutoryLeavePage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-sirius-purple rounded-lg flex items-center justify-center">
            <CalendarOff className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-primary">Statutory Leave Entitlement Processing Guide</h1>
            <p className="text-muted-foreground text-lg mt-1">
              Configure and manage statutory leave entitlements in Sirius 365
            </p>
          </div>
        </div>

        {/* Navigation Instructions */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center gap-2">
              <CardTitle className="text-2xl">How to Access Statutory Leave</CardTitle>
            </div>
            <p className="text-muted-foreground mt-2">
              Follow these steps to access statutory leave configuration
            </p>
          </CardHeader>
          <CardContent>
            <div className="bg-muted/50 p-6 rounded-lg border">
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <span className="step-number bg-sirius-blue text-white">1</span>
                  <p className="text-muted-foreground">
                    Search for <span className="font-semibold text-primary">"Statutory Leave Entitlement"</span> in the BC search icon, or
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="step-number bg-sirius-blue text-white">2</span>
                  <p className="text-muted-foreground">
                    Navigate to <span className="font-semibold text-primary">Processing → Statutory Leave Entitlement</span>
                  </p>
                </div>
              </div>
            </div>
         <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <img
                src="/StatutoryLeave1.png"
                alt="StatutoryLeave"
                className="w-full object-contain"
              />
            </div>
            <p className="text-muted-foreground mt-2">
              Highlighted below are the available Statutory Leave Entitlement in Sirius Payroll 365 which shows once it is configured by the user which can be selected as per requirement.
            </p>

            <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <img
                src="/StatutoryLeave2.png"
                alt="StatutoryLeave"
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
              Core statutory leave management features
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
                    Find existing statutory leave records using various filters
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
                    Define new statutory leave entitlements
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
                    Modify existing statutory leave configurations
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
                    Remove statutory leave configurations
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <img
                src="/StatutoryLeave3.png"
                alt="StatutoryLeave"
                className="w-full object-contain"
              />
            </div>
          </CardContent>
        </Card>

        {/* UK Statutory Leave Types
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">UK Statutory Leave Types</CardTitle>
            <p className="text-muted-foreground mt-2">
              Overview of different statutory leave entitlements in the UK
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="bg-card border rounded-lg p-4">
                <h3 className="font-semibold text-lg flex items-center gap-2 mb-2">
                  Annual Leave (Holiday)
                  <Badge variant="outline">Statutory Minimum: 5.6 weeks</Badge>
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  All workers are entitled to 5.6 weeks' paid holiday per year (28 days for someone working 5 days a week).
                </p>
              </div>

              <div className="bg-card border rounded-lg p-4">
                <h3 className="font-semibold text-lg flex items-center gap-2 mb-2">
                  Maternity Leave
                  <Badge variant="outline">Up to 52 weeks</Badge>
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Eligible employees can take up to 52 weeks of maternity leave. The first 26 weeks is Ordinary Maternity Leave, 
                  followed by 26 weeks of Additional Maternity Leave.
                </p>
              </div>

              <div className="bg-card border rounded-lg p-4">
                <h3 className="font-semibold text-lg flex items-center gap-2 mb-2">
                  Paternity Leave
                  <Badge variant="outline">1 or 2 weeks</Badge>
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Eligible employees can choose to take either one or two weeks of paternity leave. This must be taken within 56 days of the birth.
                </p>
              </div>

              <div className="bg-card border rounded-lg p-4">
                <h3 className="font-semibold text-lg flex items-center gap-2 mb-2">
                  Shared Parental Leave
                  <Badge variant="outline">Up to 50 weeks</Badge>
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Parents can share up to 50 weeks of leave and up to 37 weeks of pay between them after their child is born.
                </p>
              </div>

              <div className="bg-card border rounded-lg p-4">
                <h3 className="font-semibold text-lg flex items-center gap-2 mb-2">
                  Adoption Leave
                  <Badge variant="outline">Up to 52 weeks</Badge>
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Similar to maternity leave, eligible adopters can take up to 52 weeks of adoption leave.
                </p>
              </div>

              <div className="bg-card border rounded-lg p-4">
                <h3 className="font-semibold text-lg flex items-center gap-2 mb-2">
                  Parental Leave
                  <Badge variant="outline">Up to 18 weeks per child</Badge>
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Each parent can take up to 18 weeks' leave for each child up to their 18th birthday. Maximum 4 weeks per year per child.
                </p>
              </div>

              <div className="bg-card border rounded-lg p-4">
                <h3 className="font-semibold text-lg flex items-center gap-2 mb-2">
                  Time Off for Dependants
                  <Badge variant="outline">Reasonable time</Badge>
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Employees can take reasonable time off to deal with emergencies involving dependants. This is typically unpaid.
                </p>
              </div>

              <div className="bg-card border rounded-lg p-4">
                <h3 className="font-semibold text-lg flex items-center gap-2 mb-2">
                  Bereavement Leave
                  <Badge variant="outline">2 weeks</Badge>
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Parents who lose a child under 18 or suffer a stillbirth after 24 weeks of pregnancy are entitled to 2 weeks of paid leave.
                </p>
              </div>
            </div>
          </CardContent>
        </Card> */}

        {/* Important Notes */}
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="divide-y divide-border">
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-sirius-blue/5 to-transparent border-l-2 border-sirius-blue hover:from-sirius-blue/10 transition-colors">
                <AlertCircle className="h-5 w-5 text-sirius-blue mt-1 shrink-0" />
                <div>
                  <p className="font-medium mb-1">Employee Eligibility</p>
                  <p className="text-sm text-muted-foreground">
                    Ensure employees meet statutory requirements before assigning leave entitlements
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-sirius-blue/5 to-transparent border-l-2 border-sirius-blue hover:from-sirius-blue/10 transition-colors">
                <AlertCircle className="h-5 w-5 text-sirius-blue mt-1 shrink-0" />
                <div>
                  <p className="font-medium mb-1">Leave Types</p>
                  <p className="text-sm text-muted-foreground">
                    Different types of statutory leave have different entitlement rules and durations
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
