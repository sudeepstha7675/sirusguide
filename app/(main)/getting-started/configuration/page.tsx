"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Settings2, AlertCircle, Mail } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Link from "next/link"

interface HighlightedTextProps {
  text: string
  highlights: string[]
}

const HighlightedText = ({ text, highlights }: HighlightedTextProps) => {
  // Split the text by the highlight markers and create an array of regular and highlighted segments
  let result = text

  // Replace each highlight marker with a span (not using dangerouslySetInnerHTML)
  highlights.forEach((highlight) => {
    const marker = `<${highlight}>`
    result = result.split(marker).join(`<span class="text-primary font-semibold">${highlight}</span>`)
  })

  // Create segments by splitting on HTML tags
  const segments = result.split(/(<span.*?<\/span>)/g)

  return (
    <>
      {segments.map((segment, i) => {
        if (segment.startsWith("<span")) {
          // Extract the content between the span tags
          const content = segment.match(/>([^<]*)</)?.[1] || ""
          return (
            <span key={i} className="text-primary font-semibold">
              {content}
            </span>
          )
        }
        return segment
      })}
    </>
  )
}

const configurationSteps = [
  {
    title: "Change profile to <Payroll Processor>",
    description: "Go to <Settings> > <My Settings> in Business Central and change your profile to <Payroll Processor>.",
    image: "/InitialConfugration1.png",
    highlight: ["Settings", "My Settings", "Payroll Processor"],
  },
  {
    title: "Access the configuration page",
    description:
      "In your profile role center, you'll see a notification. Click on <Click here to configure> to open the Welcome Page.",
    image: "/InitialConfiguration2.png",
    highlight: ["Click here to configure"],
  },
  {
    title: "Accept terms and continue",
    description:
      "Review the documentation and terms of use, then mark <I understand and accept these terms> and click <Next>.",
    highlight: ["I understand and accept these terms", "Next"],
  },
  {
    title: "Apply HMRC Settings",
    description:
      "Mark <Apply HMRC Settings> as true. This will create all the settings required to run payroll. Click <Start update> to configure the system.",
    image: "/InitialConfiguration3.png",
    highlight: ["Apply HMRC Settings", "Start update"],
  },
]

export default function ConfigurationPage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="space-y-6">
        {/* Enhanced Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/30 rounded-lg blur-md transition-all duration-300 group-hover:bg-primary/40 group-hover:blur-lg" />
            <div className="relative w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-primary/25">
              <Settings2 className="h-6 w-6 text-primary-foreground drop-shadow-sm group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-black text-primary">Initial Configuration</h1>
            <p className="text-muted-foreground text-lg mt-1">
              Follow these steps to configure your Sirius Payroll 365 installation.
            </p>
          </div>
        </div>

        {/* Enhanced Alert */}
        <Alert className="mb-6 bg-primary/5 border-primary/20">
          <AlertCircle className="h-5 w-5 text-primary" />
          <AlertDescription className="ml-2 text-base">
            Complete these configuration steps to set up your payroll system properly. Make sure to follow each step
            carefully to ensure optimal functionality.
          </AlertDescription>
        </Alert>

        {/* Configuration Steps Card */}
        <Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <Settings2 className="h-5 w-5 text-primary" />
              </div>
              Configuration Steps
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="space-y-8">
              {configurationSteps.map((step, index) => (
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
      </div>
    </div>
  )
}
