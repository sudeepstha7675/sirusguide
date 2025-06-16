"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { UserCircle, Info } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function PensionenrolmentPage() {
  const configurationCriteria = [
    { name: "Age Criteria", value: "22 to State Pension Age", category: "Configuration" },
    {
      name: "Qualifying Earnings",
      value: "Threshold: £10,000 per year.",
      category: "Configuration",
    },
  ]

  const postponementCriteria = [
    { name: "Initial Auto enrolment Term", value: "1 month", category: "Postponement" },
    { name: "Auto enrolment Duration", value: "3 months", category: "Postponement" },
  ]

  const reassessmentCriteria = [{ name: "Re-Assessment Duration", value: "3 years", category: "Reassessment" }]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Configuration":
        return "bg-blue-600 text-white"
      case "Postponement":
        return "bg-orange-500 text-white"
      case "Reassessment":
        return "bg-purple-600 text-white"
      default:
        return "bg-gray-500 text-white"
    }
  }

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="space-y-6">
        {/* Enhanced Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/30 rounded-lg blur-md transition-all duration-300 group-hover:bg-primary/40 group-hover:blur-lg" />
            <div className="relative w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-primary/25">
              <UserCircle className="h-6 w-6 text-primary-foreground drop-shadow-sm group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-black text-primary">Pension Enrolment Setup</h1>
            <p className="text-lg text-muted-foreground mt-1">
              Setup and configure automatic pension enrolment according to HMRC guidelines.
            </p>
          </div>
        </div>

        {/* Enhanced Alert */}
        <Alert className="mb-6 bg-primary/5 border-primary/20">
          <Info className="h-5 w-5 text-primary" />
          <AlertDescription className="ml-2 text-base">
            Configure employee pension enrolment settings in compliance with HMRC guidelines. This setup ensures proper
            pension contributions for eligible employees who have not yet enrolled in a pension scheme.
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
                  Navigate to <span className="font-bold text-primary">Setup</span>.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  2
                </div>
                <p className="text-muted-foreground pt-1">
                  Click <span className="font-bold text-primary">Pension</span> drop-down menu.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  3
                </div>
                <p className="text-muted-foreground pt-1">
                  Select <span className="font-bold text-primary">Pension Enrolment Setup</span>.
                </p>
              </div>
            </div>

            <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <img
                src="/PensionEnrolmentSetup1.png"
                alt="Step by Step guide to Pension enrolment Setup"
                className="w-full object-contain"
              />
            </div>
          </CardContent>
        </Card>

        {/* Key Functions Card */}
        <Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <UserCircle className="h-5 w-5 text-primary" />
              </div>
              Key Functions
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="flex items-start gap-3">
              <span className="mt-1 text-primary">→</span>
              <p className="text-muted-foreground">
                Assesses employee <span className="font-semibold text-primary">Pension Eligibility Status</span> based
                on HMRC criteria
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1 text-primary">→</span>
              <p className="text-muted-foreground">
                Manages <span className="font-semibold text-primary">Automatic Enrolment</span> for qualifying
                employees
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1 text-primary">→</span>
              <p className="text-muted-foreground">Provides customisable enrolment criteria configuration</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1 text-primary">→</span>
              <p className="text-muted-foreground">
                Performs <span className="font-semibold text-primary">Re-assessment</span> at fixed intervals to ensure
                continued HMRC compliance
              </p>
            </div>
          </CardContent>
        </Card>

        {/* enrolment Configuration Card */}
        <Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <UserCircle className="h-5 w-5 text-primary" />
              </div>
              Enrolment Configuration
            </CardTitle>
            <p className="text-muted-foreground mt-2">Define core enrolment parameters according to HMRC guidelines</p>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {configurationCriteria.map((criteria, index) => (
                <Card
                  key={index}
                  className="border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02]"
                >
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-lg text-primary">{criteria.name}</h3>
                        <Badge className={getCategoryColor(criteria.category)}>{criteria.category}</Badge>
                      </div>
                      <div className="h-px bg-muted" />
                      <p className="text-muted-foreground font-medium whitespace-pre-line">{criteria.value}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Postponement and Re-assessment Card */}
        <Card className="border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <UserCircle className="h-5 w-5 text-primary" />
              </div>
              Postponement and Re-assessment
            </CardTitle>
            <p className="text-muted-foreground mt-2">
              Configure duration settings for enrolment postponement and regular re-assessment periods
            </p>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {postponementCriteria.map((criteria, index) => (
                <Card
                  key={index}
                  className="border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02]"
                >
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-lg text-primary">{criteria.name}</h3>
                        <Badge className={getCategoryColor(criteria.category)}>{criteria.category}</Badge>
                      </div>
                      <div className="h-px bg-muted" />
                      <p className="text-muted-foreground font-medium">{criteria.value}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
              {reassessmentCriteria.map((criteria, index) => (
                <Card
                  key={index}
                  className="border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02]"
                >
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-lg text-primary">{criteria.name}</h3>
                        <Badge className={getCategoryColor(criteria.category)}>{criteria.category}</Badge>
                      </div>
                      <div className="h-px bg-muted" />
                      <p className="text-muted-foreground font-medium">{criteria.value}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <img
                src="/PensionEnrolmentSetup2.png"
                alt="Available Pension enrolment Criteria"
                className="w-full object-contain"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
