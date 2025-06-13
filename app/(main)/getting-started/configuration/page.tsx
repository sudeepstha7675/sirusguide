"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Settings2 } from "lucide-react"

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
    result = result.split(marker).join(`<span class="text-primary font-medium">${highlight}</span>`)
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
            <span key={i} className="text-primary font-medium">
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
      <div className="mb-8">
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

        {/* Enhanced Configuration Steps Card */}
        <Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <Settings2 className="h-5 w-5 text-primary" />
              </div>
              Configuration Steps
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-6">
              {configurationSteps.map((step, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-4 p-4 rounded-lg border border-border/50 bg-card hover:bg-primary/5 hover:border-primary/20 transition-all duration-200"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/30 rounded-full blur-md transition-all duration-300 group-hover:blur-lg" />
                    <span className="relative flex-none w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/80 text-primary-foreground flex items-center justify-center font-semibold shadow-sm">
                      {index + 1}
                    </span>
                  </div>
                  <div className="space-y-3 flex-1">
                    <h3 className="text-lg font-semibold text-primary">
                      <HighlightedText text={step.title} highlights={step.highlight || []} />
                    </h3>
                    <div className="text-muted-foreground text-base">
                      <HighlightedText text={step.description} highlights={step.highlight || []} />
                    </div>
                    {step.image && (
                      <div className="mt-4 rounded-lg border-2 border-border overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/30">
                        <img src={step.image || "/placeholder.svg"} alt={step.title} className="w-full" />
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
