import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, CalendarOff, DollarSign, Repeat, Layers, ArrowRight, PlayCircle } from "lucide-react"
import Link from "next/link"

export default function ProcessingPage() {
  const processingItems = [
    {
      title: "Timesheets",
      description: "Manage employee timesheets with flexible and fixed rate options",
      href: "/processing/timesheets",
      icon: Clock,
      color: "bg-sirius-blue text-white",
      status: "12 Pending",
    },
    {
      title: "Statutory Leave Entitlement",
      description: "Define and manage statutory leaves for entitled employees",
      href: "/processing/statutory-leave",
      icon: CalendarOff,
      color: "bg-sirius-orange text-white",
      status: "3 Active",
    },
    {
      title: "Pay Adjustments",
      description: "Create salary adjustments, expenses, holiday pay, and termination awards",
      href: "/processing/pay-adjustments",
      icon: DollarSign,
      color: "bg-sirius-purple text-white",
      status: "5 This Period",
    },
    {
      title: "Recurring Adjustments",
      description: "Manage ongoing deductions like court orders, child support, and advances",
      href: "/processing/recurring-adjustments",
      icon: Repeat,
      color: "bg-sirius-green text-white",
      status: "8 Active",
    },
    {
      title: "Payroll Batches",
      description: "Process complete payroll batches and generate net pay calculations",
      href: "/processing/payroll-batches",
      icon: Layers,
      color: "bg-gradient-to-r from-sirius-blue to-sirius-purple text-white",
      status: "Ready to Run",
    },
  ]

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-sirius-blue rounded-lg flex items-center justify-center">
            <PlayCircle className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-primary">Payroll Processing</h1>
            <p className="text-muted-foreground">Process timesheets, adjustments, and run complete payroll batches</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {processingItems.map((item) => (
          <Link key={item.title} href={item.href}>
            <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group">
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-lg ${item.color} flex items-center justify-center mb-4`}>
                  <item.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{item.title}</CardTitle>
                <CardDescription className="text-sm">{item.description}</CardDescription>
                <div className="mt-2">
                  <span className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded-full">{item.status}</span>
                </div>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="w-full justify-between group-hover:bg-accent">
                  Open Module
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Processing Workflow */}
      <div className="mt-12">
        <Card className="bg-gradient-to-r from-sirius-blue/10 to-sirius-orange/10 border-sirius-blue/20">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Payroll Processing Workflow</CardTitle>
            <CardDescription>Follow this sequence for complete payroll processing in SiriusPayroll365</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-sirius-blue rounded-full flex items-center justify-center text-white text-sm font-bold">
                  1
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg">Process Timesheets</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Import and validate employee timesheets using flexible or fixed rate configurations
                  </p>
                  <Link href="/processing/timesheets">
                    <Button variant="outline" size="sm">
                      <Clock className="h-4 w-4 mr-2" />
                      Manage Timesheets
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-sirius-orange rounded-full flex items-center justify-center text-white text-sm font-bold">
                  2
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg">Handle Leave & Adjustments</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Process statutory leave entitlements and any pay adjustments for the period
                  </p>
                  <div className="flex gap-2">
                    <Link href="/processing/statutory-leave">
                      <Button variant="outline" size="sm">
                        <CalendarOff className="h-4 w-4 mr-2" />
                        Statutory Leave
                      </Button>
                    </Link>
                    <Link href="/processing/pay-adjustments">
                      <Button variant="outline" size="sm">
                        <DollarSign className="h-4 w-4 mr-2" />
                        Pay Adjustments
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-sirius-purple rounded-full flex items-center justify-center text-white text-sm font-bold">
                  3
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg">Apply Recurring Adjustments</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Ensure all recurring deductions and adjustments are applied correctly
                  </p>
                  <Link href="/processing/recurring-adjustments">
                    <Button variant="outline" size="sm">
                      <Repeat className="h-4 w-4 mr-2" />
                      Recurring Adjustments
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-sirius-green rounded-full flex items-center justify-center text-white text-sm font-bold">
                  4
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg">Run Payroll Batch</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Execute the complete payroll batch processing with 6-step workflow
                  </p>
                  <Link href="/processing/payroll-batches">
                    <Button className="bg-sirius-green hover:bg-sirius-green-dark text-white" size="sm">
                      <Layers className="h-4 w-4 mr-2" />
                      Process Payroll
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
