"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Scale } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function PensionEnrollmentPage() {
  const configurationCriteria = [
    { name: "Age Criteria", value: "22 to State Pension Age", category: "Configuration" },
    {
      name: "Qualifying Earnings",
      value: "Threshold: £10,000 per year.",
      category: "Configuration"
    }
  ]

  const postponementCriteria = [
    { name: "Initial Auto Enrollment Term", value: "3 months", category: "Postponement" },
    { name: "Auto Enrollment Duration", value: "1 month", category: "Postponement" },
  ]
  const reassessmentCriteria = [
    { name: "Re-Assessment Duration", value: "3 years", category: "Reassessment" }
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Configuration":
        return "bg-sirius-blue text-white"
      case "Postponement":
        return "bg-sirius-orange text-white"
      case "Reassessment":
        return "bg-sirius-orange text-white"
      default:
        return "bg-gray-500 text-white"
    }
  }

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-sirius-purple rounded-lg flex items-center justify-center">
            <Scale className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-primary">Pension Enrollment Setup</h1>
            <p className="text-muted-foreground text-lg mt-1">
              Setup and configure automatic pension enrollment according to HMRC guidelines
            </p>
          </div>
        </div>

        <div className="bg-muted/50 p-6 rounded-lg border mb-6">
          <Card className="bg-muted/40">
            <CardHeader>
              <CardTitle className="text-xl text-primary">Overview</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <p>
                Configure employee pension enrollment settings in compliance with HMRC guidelines.
                This setup ensures proper pension contributions for eligible employees who have not
                yet enrolled in a pension scheme.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-muted/40">
            <CardHeader>
              <CardTitle className="text-xl text-primary">Key Functions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="mt-1 text-primary">→</span>
                  <p className="text-muted-foreground">
                    Assesses employee <span className="font-medium text-primary">Pension Eligibility Status</span> based on HMRC criteria
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 text-primary">→</span>
                  <p className="text-muted-foreground">
                    Manages <span className="font-medium text-primary">Automatic Enrollment</span> for qualifying employees
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 text-primary">→</span>
                  <p className="text-muted-foreground">
                    Provides customizable enrollment criteria configuration
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 text-primary">→</span>
                  <p className="text-muted-foreground">
                    Performs <span className="font-medium text-primary">Re-assessment</span> at fixed intervals to ensure continued HMRC compliance
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-muted/50 p-6 rounded-lg border mb-6">
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="step-number bg-sirius-blue text-white">1</span>
              <p className="text-muted-foreground">
                Navigate to <span className="font-semibold text-primary">Setup</span>
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="step-number bg-sirius-blue text-white">2</span>
              <p className="text-muted-foreground">
                Click on <span className="font-semibold text-primary">Pension</span> drop-down menu
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="step-number bg-sirius-blue text-white">3</span>
              <p className="text-muted-foreground">
                Select <span className="font-semibold text-primary">Pension Enrollment Setup</span>
              </p>
            </div>
          </div>

          <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
            <img
              src="/PensionEnrollmentSetup1.png"
              alt="Step by Step guide to Pension Enrollment Setup"
              className="w-full object-contain hover:brightness-105 transition-all duration-300"
            />
          </div>
        </div>
      </div>

      <Card className="mt-8">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl">Enrollment Configuration</CardTitle>
              <p className="text-muted-foreground mt-1">
                Define core enrollment parameters according to HMRC guidelines
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {configurationCriteria.map((criteria, index) => (
              <Card key={index} className="border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-md">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-lg text-primary">{criteria.name}</h3>
                      <Badge className={`${getCategoryColor(criteria.category)} text-xs`}>
                        {criteria.category}
                      </Badge>
                    </div>
                    <div className="h-px bg-muted" />
                    <p className="text-muted-foreground font-medium whitespace-pre-line">{criteria.value}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8">
            <div className="mb-6">
              <h3 className="text-2xl">Postponement and Re-assessment</h3>
              <p className="text-muted-foreground mt-2">
                Configure duration settings for enrollment postponement and regular re-assessment periods
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {postponementCriteria.map((criteria, index) => (
                <Card key={index} className="border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-md">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-lg text-primary">{criteria.name}</h3>
                        <Badge className={`${getCategoryColor(criteria.category)} text-xs`}>
                          {criteria.category}
                        </Badge>
                      </div>
                      <div className="h-px bg-muted" />
                      <p className="text-muted-foreground font-medium">{criteria.value}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
              {reassessmentCriteria.map((criteria, index) => (
                <Card key={index} className="border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-md">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-lg text-primary">{criteria.name}</h3>
                        <Badge className={`${getCategoryColor(criteria.category)} text-xs`}>
                          {criteria.category}
                        </Badge>
                      </div>
                      <div className="h-px bg-muted" />
                      <p className="text-muted-foreground font-medium">{criteria.value}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
            <img
              src="/PensionEnrollmentSetup2.png"
              alt="Available Pension Enrollment Criteria"
              className="w-full object-contain hover:brightness-105 transition-all duration-300"
            />
          </div>
        </CardContent>
      </Card>

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
