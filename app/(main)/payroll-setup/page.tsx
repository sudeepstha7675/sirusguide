import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Settings2, DollarSign, CalendarDays, Repeat, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function PayrollSetupPage() {
  const setupItems = [
    {
      title: "General Payroll Setup",
      description: "Configure core payroll settings and user-specific parameters",
      href: "/payroll-setup/general",
      icon: Settings2,
      color: "bg-sirius-blue text-white",
    },
    {
      title: "Pay Element Setup",
      description: "Define pay elements like basic pay, bonus, car allowance, insurance, pension",
      href: "/payroll-setup/pay-elements",
      icon: DollarSign,
      color: "bg-sirius-orange text-white",
    },
    {
      title: "Payroll Fiscal Year",
      description: "Set up fiscal year for payroll and select active fiscal year",
      href: "/payroll-setup/payroll-fiscal-year",
      icon: CalendarDays,
      color: "bg-sirius-purple text-white",
    },
    {
      title: "Payroll Frequency",
      description: "Define pay frequency: Weekly, Biweekly, Four Weekly, Monthly",
      href: "/payroll-setup/payroll-frequency",
      icon: CalendarDays,
      color: "bg-sirius-green text-white",
    },
    {
      title: "Recurring Adjustment Class",
      description: "Configure deductions for court orders, child support, loans",
      href: "/payroll-setup/recurring-adj-class",
      icon: Repeat,
      color: "bg-gradient-to-r from-sirius-blue to-sirius-purple text-white",
    },
  ]

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-primary mb-4">Payroll Setup</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Payroll setup encompasses a range of functions that can be tailored and utilized to meet the specific needs of
          your organization. Each part offers various functions that enable customization and configuration.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {setupItems.map((item) => (
          <Link key={item.title} href={item.href}>
            <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group">
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-lg ${item.color} flex items-center justify-center mb-4`}>
                  <item.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{item.title}</CardTitle>
                <CardDescription className="text-sm">{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="w-full justify-between group-hover:bg-accent">
                  Configure Setup
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-12">
        <Card className="bg-gradient-to-r from-sirius-blue/10 to-sirius-orange/10 border-sirius-blue/20">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Setup Instructions</CardTitle>
            <CardDescription>
              After SiriusPayroll365 is installed from Microsoft App Source along with HMRC extension and setup, you
              need to configure the following components.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-sirius-blue rounded-full flex items-center justify-center text-white text-sm font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold">Navigate to Setup</h4>
                  <p className="text-sm text-muted-foreground">
                    Search for the Payroll Setup in the BC search icon or follow the navigation steps
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-sirius-orange rounded-full flex items-center justify-center text-white text-sm font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold">Click on Payroll Setups</h4>
                  <p className="text-sm text-muted-foreground">Access the drop-down menu for payroll configurations</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-sirius-purple rounded-full flex items-center justify-center text-white text-sm font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold">Select Your Setup Option</h4>
                  <p className="text-sm text-muted-foreground">
                    Choose the specific setup component you want to configure
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
