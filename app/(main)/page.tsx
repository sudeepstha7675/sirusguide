import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <Card className="max-w-4xl mx-auto shadow-xl">
        <CardHeader className="text-center border-b pb-6">
          <CardTitle className="text-3xl font-bold">
            Welcome to <span className="text-sirius-blue">Sirius Payroll 365</span>
          </CardTitle>
          <CardDescription className="text-lg mt-2 text-muted-foreground">
            Your central hub for managing payroll operations.
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-8 text-center">
          <p className="text-muted-foreground mb-6">
            Navigate through the sidebar to access various setup and processing modules.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
            <Button asChild variant="outline" className="bg-sirius-blue text-white hover:bg-sirius-blue-dark">
              <Link href="/payroll-setup/general">Go to Payroll Setup</Link>
            </Button>
            <Button asChild variant="outline" className="bg-sirius-green text-white hover:bg-sirius-green-dark">
              <Link href="/employees/manage-employees">Manage Employees</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
