"use client"

import Image from "next/image"
import { Building, Mail, Phone, Globe, Info, Users, MapPin } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function AboutPage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="space-y-6">
        {/* Enhanced Header - Matching Reports Page */}
        <div className="flex items-center gap-3 mb-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/30 rounded-lg blur-md transition-all duration-300 group-hover:bg-primary/40 group-hover:blur-lg" />
            <div className="relative w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-primary/25">
              <Info className="h-6 w-6 text-primary-foreground drop-shadow-sm group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-black text-primary">About Sirius Payroll 365</h1>
            <p className="text-lg text-muted-foreground mt-1">
              Sirius Payroll 365: HMRC-Recognised, Cloud-Hosted, Dynamics 365-Integrated Payroll Management
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4 flex items-center">
            <div className="p-2 rounded-lg bg-primary/10 mr-2">
              <Info className="h-5 w-5 text-primary" />
            </div>
            Our Mission
          </h2>
          <Alert className="mb-6 bg-primary/5 border-primary/20">
            <Info className="h-5 w-5 text-primary" />
            <AlertDescription className="ml-2 text-base">
             Sirius Payroll 365 is an HMRC-recognised, cloud-hosted payroll solution designed to bring your entire UK payroll ecosystem under one roof. Built on Microsoft Azure and seamlessly integrated with Dynamics 365 Business Central and Dynamics 365 Human Resources, it consolidates HR and finance data to ensure precision, compliance and end-to-end visibility.
            </AlertDescription>
          </Alert>
          <p className="text-muted-foreground leading-relaxed">
            We empower users to efficiently process payments related to pensions, overtime, sickness, contracted hours,
            insurance, maternity & paternity, and much more. Our system ensures that users submit the correct data to
            HMRC, meet Real Time Information (RTI) requirements, avoid common pitfalls, and effectively manage pending
            payments.
          </p>
        </div>

        {/* Dogma Group Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4 flex items-center">
            <div className="p-2 rounded-lg bg-primary/10 mr-2">
              <Users className="h-5 w-5 text-primary" />
            </div>
            Part of the Dogma Group
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
            <div className="col-span-1 flex justify-center items-center bg-muted/30 p-6 rounded-lg border">
              <Image src="/sirius.svg" alt="SiriusApp Logo" width={120} height={120} className="rounded-lg" />
            </div>
            <div className="col-span-2 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Sirius Payroll 365 is a product of SiriusApp—part of the <strong className="text-foreground">Dogma Group.</strong>
                             </p>
              <div className="p-4 border rounded-lg bg-muted/30">
                <p className="text-sm text-muted-foreground">
                  <strong>Registered at:</strong> 6 Portal Business Park, Suite 3 & 4, Eaton Lane, Tarporley, CW6 9DL
                </p>
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                  <p className="text-muted-foreground">
                    <strong>VAT Registration No:</strong> 330460638
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Company No:</strong> 12096627
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4 flex items-center">
            <div className="p-2 rounded-lg bg-primary/10 mr-2">
              <Building className="h-5 w-5 text-primary" />
            </div>
            Contact Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4 p-6 border rounded-lg bg-muted/10 hover:bg-muted/20 transition-colors">
              <h3 className="text-lg font-medium text-primary">Get in Touch</h3>
              <div className="space-y-3 text-muted-foreground">
                <p className="flex items-center">
                  <Phone className="mr-3 h-5 w-5 text-primary" />
                  <a href="tel:01296328689" className="hover:text-primary transition-colors">
                    01296 328689
                  </a>
                </p>
                <p className="flex items-center">
                  <Mail className="mr-3 h-5 w-5 text-primary" />
                  <a href="mailto:info@siriusapp.co.uk" className="hover:text-primary transition-colors">
                    info@siriusapp.co.uk
                  </a>
                </p>
                <p className="flex items-center">
                  <Globe className="mr-3 h-5 w-5 text-primary" />
                  <a
                    href="https://www.siriusapp.co.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    www.siriusapp.co.uk
                  </a>
                </p>
              </div>
            </div>
            <div className="space-y-4 p-6 border rounded-lg bg-muted/10 hover:bg-muted/20 transition-colors">
              <h3 className="text-lg font-medium text-primary">London Office</h3>
              <p className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Sirius App (London Office):
                  <br />
                  483 Green Lanes, London, N13 4BS
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
