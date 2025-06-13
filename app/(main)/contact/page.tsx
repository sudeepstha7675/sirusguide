"use client"
import { Phone, Mail, MapPin, Globe } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Professional Header with Subtle Background */}
      <div className="bg-gradient-to-b from-primary/5 to-white border-b">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Contact Us</h1>
            <div className="w-20 h-1.5 bg-primary mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-2xl">
              We welcome you to contact us for more information about any of our products or services.
            </p>
          </div>
        </div>
      </div>

      {/* Question Section with Enhanced Design */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="h-px bg-primary/30 w-16"></div>
              <div className="px-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div className="h-px bg-primary/30 w-16"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Do you have a question for us?</h2>
            <p className="text-lg text-muted-foreground mb-4">We would be happy to hear from you.</p>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Contact us if you need an app/solution customised to fit your business requirements.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information with Enhanced Cards */}
      <div className="py-16 bg-gradient-to-b from-white to-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* UK Office */}
            <div className="bg-white p-8 rounded-lg border border-primary/20 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-start">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 shadow-md">
                  <MapPin className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-6">UNITED KINGDOM</h3>

                <div className="flex items-center gap-3 mb-4 w-full">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <a href="tel:+4401296328689" className="text-primary font-medium hover:underline transition-colors">
                    +4401296328689
                  </a>
                </div>

                <div className="flex items-center gap-3 mb-6 w-full">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <a
                    href="mailto:sales@dogmagroup.co.uk"
                    className="text-primary hover:underline transition-colors break-all"
                  >
                    sales@dogmagroup.co.uk
                  </a>
                </div>

                <div className="flex items-start gap-3 w-full">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-muted-foreground">
                    <p className="mb-1">483 Green Lanes,</p>
                    <p className="mb-1">London,</p>
                    <p>N13 4BS</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Nepal Office */}
            <div className="bg-white p-8 rounded-lg border border-primary/20 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-start">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 shadow-md">
                  <MapPin className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-6">NEPAL</h3>

                <div className="flex items-center gap-3 mb-4 w-full">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <a href="tel:+97701-4030768" className="text-primary font-medium hover:underline transition-colors">
                    +977-01-4030768
                  </a>
                </div>

                <div className="flex items-center gap-3 mb-6 w-full">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <a
                    href="mailto:sales@dogmagroup.co.uk"
                    className="text-primary hover:underline transition-colors break-all"
                  >
                    sales@dogmagroup.co.uk
                  </a>
                </div>

                <div className="flex items-start gap-3 w-full">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-muted-foreground">
                    <p className="mb-1">NE79, Khola Pravesh Marg,</p>
                    <p>Bafal, Kathmandu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
