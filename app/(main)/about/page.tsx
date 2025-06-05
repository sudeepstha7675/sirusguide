// Create this new page for company details
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import Image from "next/image"
import { Building, Mail, Phone, Globe, Info, Users, MapPin } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6 max-w-4xl">
      <Card className="shadow-xl">
        <CardHeader className="text-center border-b pb-6">
          <div className="flex justify-center mb-4">
            <Image
              src="/sirius.svg"
              alt="SiriusApp Logo"
              width={80}
              height={80}
              className="rounded-lg" // Removed specific background
            />
          </div>
          <h1 className="text-4xl font-bold">
            <span className="text-primary dark:text-primary-foreground">About Sirius Payroll 365</span>
          </h1>
          <CardDescription className="text-lg mt-2 text-muted-foreground">
            Automating payroll, reducing errors, and ensuring HMRC compliance.
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-primary dark:text-primary-foreground mb-3 flex items-center">
              <Info className="mr-2 h-6 w-6" /> Our Mission
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              SiriusPayroll365 is an ERP payroll solution designed to automate manual paperwork and significantly reduce
              human errors. We empower users to efficiently process payments related to pensions, overtime, sickness,
              contracted hours, insurance, maternity & paternity, and much more. Our system ensures that users submit
              the correct data to HMRC, meet Real Time Information (RTI) requirements, avoid common pitfalls, and
              effectively manage pending payments.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary dark:text-primary-foreground mb-4 flex items-center">
              <Users className="mr-2 h-6 w-6" /> Part of the Dogma Group
            </h2>
            <div className="flex items-center gap-4 p-4 border rounded-lg bg-muted/30">
              <Image
                src="/dogma.svg" // REMINDER: Replace
                alt="Dogma Group Logo"
                width={60}
                height={60}
                className="rounded-md"
              />
              <div>
                <p className="text-muted-foreground leading-relaxed">
                  Sirius App is a proud company under the{" "}
                  <strong className="text-foreground">Dogma Group Limited</strong>.
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Registered at: 6 Portal Business Park, Suite 3 & 4, Eaton Lane, Tarporley, CW6 9DL
                </p>
              </div>
            </div>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              <p className="text-muted-foreground">
                <strong>VAT Registration No:</strong> 330460638
              </p>
              <p className="text-muted-foreground">
                <strong>Company No:</strong> 12096627
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary dark:text-primary-foreground mb-3 flex items-center">
              <Building className="mr-2 h-6 w-6" /> Contact Information
            </h2>
            <div className="space-y-3 text-muted-foreground">
              <p className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-secondary" />
                <a href="tel:01296328689" className="hover:text-secondary transition-colors">
                  01296 328689
                </a>
              </p>
              <p className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-secondary" />
                <a href="mailto:info@siriusapp.co.uk" className="hover:text-secondary transition-colors">
                  info@siriusapp.co.uk
                </a>
              </p>
              <p className="flex items-center">
                <Globe className="mr-3 h-5 w-5 text-secondary" />
                <a
                  href="https://www.siriusapp.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                >
                  www.siriusapp.co.uk
                </a>
              </p>
              <p className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                <span>
                  Sirius App (London Office):
                  <br />
                  483 Green Lanes, London, N13 4BS
                </span>
              </p>
            </div>
          </section>
        </CardContent>
      </Card>
    </div>
  )
}
