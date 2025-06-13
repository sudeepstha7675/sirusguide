"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, AlertCircle, Mail } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Link from "next/link"
import { useMemo } from "react"

const installationSteps = [
  {
    title: "Search for <Microsoft AppSource apps>",
    description:
      "Open Business Central and in the search bar, type <Microsoft AppSource apps> and click on the result.",
    highlight: ["Microsoft AppSource apps"],
  },
  {
    title: "Search for <SiriusPayroll365>",
    description: "In the search bar, type <SiriusPayroll365>, locate the result and click on <View on AppSource>.",
    image: "/Installation1.png",
    highlight: ["SiriusPayroll365", "View on AppSource"],
  },
  {
    title: "Install from <Microsoft AppSource>",
    description: "Microsoft AppSource will open in a new tab. Click on 'Free Trial' to begin the installation process.",
    highlight: ["Microsoft AppSource"],
  },
  {
    title: "Select <Business Central Environment>",
    description:
      "You'll be guided to select which Business Central environment you want to install Sirius Payroll 365 in <(e.g., Production, Sandbox)>.",
    highlight: ["Business Central Environment", "(e.g., Production, Sandbox)"],
  },
  {
    title: "Select <Language and Install>",
    description:
      "Choose your preferred language and click <Install>. You'll see a message that the extension has been installed.",
    highlight: ["Language and Install", "Install"],
  },
]

function HighlightedText({
  text,
  highlights,
}: {
  text: string
  highlights: string[]
}) {
  const parts = useMemo(() => {
    let parts = text
    highlights.forEach((highlight) => {
      parts = parts.replace(`<${highlight}>`, `<span class="text-primary font-semibold">${highlight}</span>`)
    })

    return parts
  }, [text, highlights])

  return <span dangerouslySetInnerHTML={{ __html: parts }} />
}

export default function InstallationPage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="space-y-6">
        {/* Enhanced Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/30 rounded-lg blur-md transition-all duration-300 group-hover:bg-primary/40 group-hover:blur-lg" />
            <div className="relative w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-primary/25">
              <Download className="h-6 w-6 text-primary-foreground drop-shadow-sm group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-black text-primary">Installation Guide</h1>
            <p className="text-muted-foreground text-lg mt-1">
              Complete guide to install Sirius Payroll 365 in your Business Central environment.
            </p>
          </div>
        </div>

        {/* Enhanced Alert */}
        <Alert className="mb-6 bg-primary/5 border-primary/20">
          <AlertCircle className="h-5 w-5 text-primary" />
          <AlertDescription className="ml-2 text-base">
            This guide will walk you through the installation process of SiriusPayroll365 in your Business Central
            environment. Follow these steps carefully to ensure proper installation.
          </AlertDescription>
        </Alert>

        {/* Installation Steps Card */}
        <Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <Download className="h-5 w-5 text-primary" />
              </div>
              Installation Process
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="space-y-8">
              {installationSteps.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 pb-6 border-b border-border/30 last:border-b-0 last:pb-0"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    {index + 1}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-primary">
                      <HighlightedText text={step.title} highlights={step.highlight || []} />
                    </h3>
                    <p className="text-muted-foreground">
                      <HighlightedText text={step.description} highlights={step.highlight || []} />
                    </p>
                    {step.image && (
                      <div className="mt-6 mb-8 border rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                        <img
                          src={step.image || "/placeholder.svg"}
                          alt={step.title}
                          className="w-full object-contain"
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Next Step Card */}
        <Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <AlertCircle className="h-5 w-5 text-primary" />
              </div>
              Next Steps
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-muted-foreground">
              After installation, proceed to{" "}
              <Link
                href="/getting-started/configuration"
                className="text-primary hover:text-primary/80 underline-offset-2 hover:underline font-semibold inline-flex items-center group transition-colors duration-200"
              >
                Initial Configuration
                <span className="inline-block transition-transform group-hover:translate-x-1 ml-1">→</span>
              </Link>
            </p>
          </CardContent>
        </Card>

        {/* Support Contact Card */}
        <Card className="border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              Support
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="relative group">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-md transition-all duration-300 group-hover:blur-xl" />
                <div className="relative w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-sm">
                  <Mail className="h-5 w-5 text-primary-foreground" />
                </div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Need help?</p>
                <a
                  href="mailto:Siriusupport@dogmagroup.co.uk"
                  className="text-primary hover:text-primary/80 font-semibold transition-colors duration-200"
                >
                  Siriusupport@dogmagroup.co.uk
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
