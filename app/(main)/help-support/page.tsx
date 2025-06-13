"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HelpCircle, Search, AlertCircle, CheckCircle2, FileQuestion } from "lucide-react"

export default function FAQPage() {
  // Expanded FAQ items with more detailed answers and categories
  const faqCategories = [
    {
      title: "Getting Started",
      items: [
        {
          question: "How do I set up payroll for the first time?",
          answer:
            "Navigate to Setup > Payroll Setups > Payroll Setup. Configure your company details, pay elements, fiscal year, and frequency. Follow the step-by-step guide in our documentation for comprehensive setup instructions. Make sure to complete all required fields and verify your configuration before proceeding to employee setup.",
        },
        {
          question: "How do I add a new employee to the system?",
          answer:
            "Go to Employees > Employees and click 'Add New Employee'. Fill in the general details, payroll information, HMRC details, and bank account information. Make sure to configure their pay elements and work sites if applicable. For bulk employee imports, use the Data Import functionality under the Tools menu.",
        },
        {
          question: "What are the system requirements for SiriusPayroll365?",
          answer:
            "SiriusPayroll365 requires Dynamics 365 Business Central (Essential or Premium license). It works with all modern browsers including Chrome, Firefox, Edge, and Safari. For optimal performance, we recommend a stable internet connection with at least 10Mbps download speed and 5Mbps upload speed.",
        },
      ],
    },
    {
      title: "Payroll Processing",
      items: [
        {
          question: "How do I process a payroll batch?",
          answer:
            "Payroll batch processing follows a 6-step workflow: 1) Fill general details, 2) Add employees, 3) Get pay elements, 4) Process pay elements, 5) Calculate and release, 6) Post the batch. Each step must be completed in order. The system will guide you through each step and validate your entries before allowing you to proceed to the next step.",
        },
        {
          question: "How do I handle HMRC submissions?",
          answer:
            "Set up your HMRC integration with your Employer Gateway ID and password. The system will handle FPS (Full Payment Submission) and EPS (Employer Payment Summary) submissions automatically during payroll processing. You can view submission history and status in the HMRC Submissions log. For troubleshooting failed submissions, check the error logs and verify your HMRC credentials.",
        },
        {
          question: "How do I reverse a posted payroll batch?",
          answer:
            "Navigate to the Posted Payroll Batch and use the 'Reverse' action button. Note that this is a significant action and should only be done when necessary. You may also need to reset P45 flags if applicable. The system will create a reversal batch that negates all entries in the original batch. Both the original and reversal batches will remain in the system for audit purposes.",
        },
      ],
    },
    {
      title: "Configuration & Setup",
      items: [
        {
          question: "What's the difference between flexible and fixed rate timesheets?",
          answer:
            "Flexible rate timesheets allow dynamic pay rates that can change with each upload via Excel import. Fixed rate timesheets use constant rates defined at the company level and employee work sites. Choose flexible rates when employees have varying pay rates based on job type or location. Use fixed rates when employees have consistent pay rates across all work.",
        },
        {
          question: "How do I set up pension auto-enrollment?",
          answer:
            "Go to Setup > Pension > Pension Enrollment Setup. Configure age criteria, qualifying earnings thresholds, auto-enrollment terms, and re-assessment durations according to HMRC guidelines. You'll need to set up pension providers, contribution rates, and assessment rules. The system will automatically assess employees during payroll processing and flag those eligible for enrollment.",
        },
        {
          question: "What are the different student loan plan types?",
          answer:
            "SiriusPayroll365 supports four student loan plans: PGL (Postgraduate Loan), SLP1 (Plan 1), SLP2 (Plan 2), and SLP4 (Plan 4). Each has different thresholds and repayment rates as per HMRC guidelines. The system automatically calculates deductions based on the plan type and employee earnings. You can find current thresholds in the HMRC Configuration section.",
        },
      ],
    },
    {
      title: "Reporting & Compliance",
      items: [
        {
          question: "How do I generate payroll reports?",
          answer:
            "Navigate to Reports > Payroll Reports and select the report type you need. You can filter by date range, employee, department, or other criteria. Reports can be exported to PDF, Excel, or CSV formats. For recurring reports, you can save report configurations and schedule automatic generation and distribution via email.",
        },
        {
          question: "How do I handle year-end processing?",
          answer:
            "The Year-End Processing wizard guides you through the steps: 1) Verify all payrolls are processed, 2) Generate P60 forms, 3) Submit final FPS and EPS, 4) Close the tax year, 5) Set up the new tax year. The system will automatically apply HMRC's new tax year rates and thresholds when you set up the new tax year.",
        },
        {
          question: "How do I ensure GDPR compliance with employee data?",
          answer:
            "SiriusPayroll365 includes built-in GDPR compliance features: data encryption, access controls, audit trails, and data retention policies. Use the Security Roles feature to limit access to sensitive information. The Data Subject Access Request tool helps you respond to employee requests for their personal data. Regular system updates ensure ongoing compliance with changing regulations.",
        },
      ],
    },
  ]

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="space-y-6">
        {/* Enhanced Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/30 rounded-lg blur-md transition-all duration-300 group-hover:bg-primary/40 group-hover:blur-lg" />
            <div className="relative w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-primary/25">
              <FileQuestion className="h-6 w-6 text-primary-foreground drop-shadow-sm group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-black text-primary">Frequently Asked Questions</h1>
            <p className="text-lg text-muted-foreground mt-1">
              Find answers to common questions about SiriusPayroll365
            </p>
          </div>
        </div>

        {/* Introduction Alert */}
        <Alert className="mb-6 bg-primary/5 border-primary/20">
          <HelpCircle className="h-5 w-5 text-primary" />
          <AlertDescription className="ml-2 text-base">
            Browse through our comprehensive FAQ section to find answers to the most common questions about
            SiriusPayroll365. If you can't find what you're looking for, please contact our support team.
          </AlertDescription>
        </Alert>

        {/* FAQ Categories */}
        {faqCategories.map((category, categoryIndex) => (
          <Card
            key={categoryIndex}
            className="mb-6 border-border/50 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
              <CardTitle className="flex items-center gap-3 text-xl text-primary">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Search className="h-5 w-5 text-primary" />
                </div>
                {category.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {category.items.map((item, itemIndex) => (
                  <AccordionItem
                    key={itemIndex}
                    value={`item-${categoryIndex}-${itemIndex}`}
                    className="border-b border-border/40 last:border-0"
                  >
                    <AccordionTrigger className="text-left py-4 hover:text-primary transition-colors text-base font-medium">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pt-1">
                      <div className="pl-4 border-l-2 border-primary/20">{item.answer}</div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        ))}

        {/* Still Need Help Section */}
        <Card className="border-border/50 shadow-sm hover:shadow-md transition-all duration-300 bg-gradient-to-r from-primary/5 to-transparent">
          <CardHeader className="border-b border-border/50">
            <CardTitle className="flex items-center gap-3 text-xl text-primary">
              <div className="p-2 rounded-lg bg-primary/10">
                <AlertCircle className="h-5 w-5 text-primary" />
              </div>
              Still Need Help?
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-muted-foreground">
                  If you couldn't find the answer to your question, please contact our support team at{" "}
                  <a href="mailto:support@siriusapp.co.uk" className="text-primary hover:underline">
                    support@siriusapp.co.uk
                  </a>{" "}
                  or call us at{" "}
                  <a href="tel:01296328689" className="text-primary hover:underline">
                    01296 328689
                  </a>
                  .
                </p>
                <p className="text-muted-foreground mt-2">
                  Our support hours are Monday to Friday, 9am to 5pm UK time.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
