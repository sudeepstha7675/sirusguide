import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Building } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <Card className="max-w-4xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-primary dark:text-primary-foreground">
            Contact Sirius Payroll 365
          </CardTitle>
          <CardDescription className="text-lg">
            We&apos;re here to help. Reach out to us with any questions or concerns.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-8 pt-6">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-sirius-gray dark:text-sirius-gray-light">Get in Touch</h3>
            <form className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" />
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="john.doe@example.com" />
              </div>
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="e.g., Payroll Inquiry" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message..." rows={5} />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Send Message
              </Button>
            </form>
          </div>
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4 text-sirius-gray dark:text-sirius-gray-light">
              Our Contact Information
            </h3>
            <div className="flex items-start gap-4">
              <div className="bg-secondary/10 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h4 className="font-semibold">Office Address</h4>
                <p className="text-muted-foreground">
                  123 Payroll Plaza, Suite 500
                  <br />
                  Business City, ST 98765
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-secondary/10 p-3 rounded-full">
                <Phone className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h4 className="font-semibold">Phone Support</h4>
                <p className="text-muted-foreground">(555) 123-4567 (Mon-Fri, 9am-5pm)</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-secondary/10 p-3 rounded-full">
                <Mail className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h4 className="font-semibold">Email Support</h4>
                <p className="text-muted-foreground">support@siriuspayroll365.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-secondary/10 p-3 rounded-full">
                <Building className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h4 className="font-semibold">Corporate Headquarters</h4>
                <p className="text-muted-foreground">
                  Sirius Solutions Inc.
                  <br />
                  45 Innovation Drive, Tech Park, CA 12345
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
