"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Info, BookOpen, CheckCircle } from "lucide-react"

export default function IntroductionPage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="space-y-6">
        {/* Enhanced Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/30 rounded-lg blur-md transition-all duration-300 group-hover:bg-primary/40 group-hover:blur-lg" />
            <div className="relative w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-primary/25">
              <BookOpen className="h-6 w-6 text-primary-foreground drop-shadow-sm group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-black text-primary">Sirius Payroll 365 Guide</h1>
            <p className="text-muted-foreground text-lg mt-1">
              Complete guide to understanding and using Sirius Payroll 365 effectively.
            </p>
          </div>
        </div>

        {/* Enhanced Alert */}
        <Alert className="mb-6 bg-primary/5 border-primary/20">
          <Info className="h-5 w-5 text-primary" />
          <AlertDescription className="ml-2 text-base">
            This guide is structured to make it easy to find what you need. Use the navigation menu on the left to jump
            to specific sections, or simply follow along step by step.
          </AlertDescription>
        </Alert>

        {/* What is Sirius Section */}
        <Card className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <Info className="h-5 w-5 text-primary" />
              </div>
              What is Sirius Payroll 365?
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <p className="text-muted-foreground text-base leading-relaxed">
              Sirius Payroll 365 is a comprehensive payroll solution for UK businesses that automates manual paperwork
              and reduces human error. It handles everything from basic pay to bonuses, allowances, insurance,
              maternity/paternity, and more, while ensuring accurate HMRC Real Time Information (RTI) reporting.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-primary/5 p-4 rounded-lg border border-primary/10 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium text-primary mb-1">Rich Functionality</h3>
                <p className="text-sm text-muted-foreground">Complete payroll processing with advanced features</p>
              </div>
              <div className="bg-primary/5 p-4 rounded-lg border border-primary/10 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium text-primary mb-1">Easy to Use</h3>
                <p className="text-sm text-muted-foreground">Intuitive interface designed for efficiency</p>
              </div>
              <div className="bg-primary/5 p-4 rounded-lg border border-primary/10 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium text-primary mb-1">Affordable</h3>
                <p className="text-sm text-muted-foreground">Cost-effective solution for businesses of all sizes</p>
              </div>
            </div>

            {/* Images with proper aspect ratio control */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 shadow-sm">
                <div className="relative w-full h-0 pb-[56.25%]">
                  <Image
                    src="/Overview1.png"
                    alt="Sirius Payroll 365 Features"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 shadow-sm">
                <div className="relative w-full h-0 pb-[56.25%]">
                  <Image
                    src="/Overview2.png"
                    alt="Sirius Payroll 365 Dashboard"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>

            {/* Integration Information */}
            <div className="mt-8 bg-muted/30 p-6 rounded-lg border border-border">
              <h3 className="text-lg font-medium text-primary mb-3">Seamless Integration</h3>
              <p className="text-muted-foreground mb-4">
                Sirius Payroll 365 integrates perfectly with Microsoft Dynamics 365 Business Central and Human
                Resources, making payroll management a breeze while maintaining compliance with HMRC requirements.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-md shadow-sm">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">D</span>
                  </div>
                  <span className="text-sm font-medium">Dynamics 365</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-md shadow-sm">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">HR</span>
                  </div>
                  <span className="text-sm font-medium">Human Resources</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-md shadow-sm">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">BC</span>
                  </div>
                  <span className="text-sm font-medium">Business Central</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
