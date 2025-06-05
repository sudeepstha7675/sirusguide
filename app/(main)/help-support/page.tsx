import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { LifeBuoy, Search, FileText, Video, MessageCircle, Phone, Mail, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function HelpSupportPage() {
  const faqItems = [
    {
      question: "How do I set up payroll for the first time?",
      answer:
        "Navigate to Setup > Payroll Setups > Payroll Setup. Configure your company details, pay elements, fiscal year, and frequency. Follow the step-by-step guide in our documentation for comprehensive setup instructions.",
    },
    {
      question: "How do I add a new employee to the system?",
      answer:
        "Go to Employees > Employees and click 'Add New Employee'. Fill in the general details, payroll information, HMRC details, and bank account information. Make sure to configure their pay elements and work sites if applicable.",
    },
    {
      question: "What are the different student loan plan types?",
      answer:
        "SiriusPayroll365 supports four student loan plans: PGL (Postgraduate Loan), SLP1 (Plan 1), SLP2 (Plan 2), and SLP4 (Plan 4). Each has different thresholds and repayment rates as per HMRC guidelines.",
    },
    {
      question: "How do I process a payroll batch?",
      answer:
        "Payroll batch processing follows a 6-step workflow: 1) Fill general details, 2) Add employees, 3) Get pay elements, 4) Process pay elements, 5) Calculate and release, 6) Post the batch. Each step must be completed in order.",
    },
    {
      question: "How do I handle HMRC submissions?",
      answer:
        "Set up your HMRC integration with your Employer Gateway ID and password. The system will handle FPS (Full Payment Submission) and EPS (Employer Payment Summary) submissions automatically during payroll processing.",
    },
    {
      question: "What's the difference between flexible and fixed rate timesheets?",
      answer:
        "Flexible rate timesheets allow dynamic pay rates that can change with each upload via Excel import. Fixed rate timesheets use constant rates defined at the company level and employee work sites.",
    },
    {
      question: "How do I reverse a posted payroll batch?",
      answer:
        "Navigate to the Posted Payroll Batch and use the 'Reverse' action button. Note that this is a significant action and should only be done when necessary. You may also need to reset P45 flags if applicable.",
    },
    {
      question: "How do I set up pension auto-enrollment?",
      answer:
        "Go to Setup > Pension > Pension Enrollment Setup. Configure age criteria, qualifying earnings thresholds, auto-enrollment terms, and re-assessment durations according to HMRC guidelines.",
    },
  ]

  const supportChannels = [
    {
      title: "Phone Support",
      description: "Speak directly with our support team",
      contact: "01296 328689",
      hours: "Mon-Fri, 9am-5pm",
      icon: Phone,
      color: "bg-sirius-blue",
    },
    {
      title: "Email Support",
      description: "Send us your questions via email",
      contact: "info@siriusapp.co.uk",
      hours: "24/7 - Response within 24 hours",
      icon: Mail,
      color: "bg-sirius-orange",
    },
    {
      title: "Live Chat",
      description: "Chat with our support team online",
      contact: "Available on website",
      hours: "Mon-Fri, 9am-6pm",
      icon: MessageCircle,
      color: "bg-sirius-purple",
    },
  ]

  const resources = [
    {
      title: "User Documentation",
      description: "Complete setup and user guides",
      icon: FileText,
      link: "#",
    },
    {
      title: "Video Tutorials",
      description: "Step-by-step video guides",
      icon: Video,
      link: "#",
    },
    {
      title: "SiriusApp Website",
      description: "Visit our main website for more information",
      icon: ExternalLink,
      link: "https://www.siriusapp.co.uk",
    },
  ]

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-sirius-blue rounded-lg flex items-center justify-center">
            <LifeBuoy className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-primary">Help & Support</h1>
            <p className="text-muted-foreground">
              Get help with SiriusPayroll365 setup, configuration, and daily operations
            </p>
          </div>
        </div>
      </div>

      {/* Search Help */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <Search className="h-5 w-5 text-muted-foreground" />
            <Input placeholder="Search help articles, FAQs, and documentation..." className="flex-1" />
            <Button className="bg-sirius-blue hover:bg-sirius-blue-dark">Search</Button>
          </div>
        </CardContent>
      </Card>

      {/* Support Channels */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-primary">Contact Support</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {supportChannels.map((channel) => (
            <Card key={channel.title} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-lg ${channel.color} flex items-center justify-center mb-4`}>
                  <channel.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{channel.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{channel.description}</p>
                <div className="space-y-1">
                  <p className="font-medium text-primary">{channel.contact}</p>
                  <p className="text-xs text-muted-foreground">{channel.hours}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-primary">Frequently Asked Questions</h2>
        <Card>
          <CardContent className="p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>

      {/* Resources */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-primary">Additional Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <Link key={resource.title} href={resource.link}>
              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group">
                <CardContent className="p-6">
                  <resource.icon className="h-8 w-8 text-primary mb-3 group-hover:text-secondary transition-colors" />
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{resource.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Quick Setup Guide */}
      <Card className="bg-gradient-to-r from-sirius-blue/10 to-sirius-orange/10 border-sirius-blue/20">
        <CardHeader>
          <CardTitle className="text-2xl text-primary">Quick Setup Guide</CardTitle>
          <CardDescription>New to SiriusPayroll365? Follow these essential setup steps to get started</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-primary">Initial Configuration</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-sirius-blue rounded-full mt-2"></div>
                  <span>Set up general payroll configuration</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-sirius-orange rounded-full mt-2"></div>
                  <span>Configure pay elements and frequencies</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-sirius-purple rounded-full mt-2"></div>
                  <span>Set up fiscal year and reporting periods</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-sirius-green rounded-full mt-2"></div>
                  <span>Configure HMRC integration settings</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-primary">Employee Setup</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-sirius-blue rounded-full mt-2"></div>
                  <span>Add employee records and details</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-sirius-orange rounded-full mt-2"></div>
                  <span>Configure payroll elements per employee</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-sirius-purple rounded-full mt-2"></div>
                  <span>Set up bank account details</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-sirius-green rounded-full mt-2"></div>
                  <span>Configure pension enrollment if applicable</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
