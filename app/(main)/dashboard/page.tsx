"use client"

import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Users, Settings2, Building2, Terminal, UserCircle, Gift,
  Calculator, CircleDollarSign, BarChart3, HeadphonesIcon,
  BookOpen, Clock, Bell, ArrowRight, CheckCircle2, ShieldCheck
} from "lucide-react"
import Link from "next/link"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

interface ActionCardProps {
  title: string
  description: string
  href: string
  icon: React.ElementType
  status?: 'required' | 'recommended' | 'optional'
}

const ActionCard: React.FC<ActionCardProps> = ({
  title,
  description,
  href,
  icon: Icon,
  status = 'optional'
}) => {
  const statusColors = {
    required: 'text-red-500 dark:text-red-400',
    recommended: 'text-amber-500 dark:text-amber-400',
    optional: 'text-emerald-500 dark:text-emerald-400'
  }

  return (
    <Link href={href} className="block h-full group">
      <Card className="relative h-full transition-all duration-300 border-l-4 hover:border-l-8
        data-[status=required]:border-l-red-500/50 data-[status=recommended]:border-l-amber-500/50 
        data-[status=optional]:border-l-emerald-500/50"
        data-status={status}>
        <div className="absolute right-4 top-4">
          <div className={`text-xs font-medium uppercase ${statusColors[status]}`}>
            {status}
          </div>
        </div>
        <CardHeader>
          <div className="flex items-start gap-4">
            <div className="mt-1 p-2 rounded-md bg-gradient-to-br from-background to-muted/50 
              ring-1 ring-border shadow-sm">
              <Icon className="h-5 w-5 text-foreground/70" />
            </div>
            <div>
              <CardTitle className="text-lg font-semibold text-foreground/90 group-hover:text-primary">
                {title}
              </CardTitle>
              <CardDescription className="text-sm mt-1.5 line-clamp-2">
                {description}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-2">
          <div className="flex items-center text-sm text-muted-foreground group-hover:text-primary">
            Configure now <ArrowRight className="h-4 w-4 ml-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

const StatCard: React.FC<{ title: string; value: string; icon: React.ElementType }> = ({
  title,
  value,
  icon: Icon
}) => (
  <Card className="relative overflow-hidden">
    <CardHeader className="pb-2">
      <div className="flex items-center justify-between">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </div>
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold text-foreground">{value}</div>
    </CardContent>
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
  </Card>
)

export default function DashboardPage() {
  return (
    <div className="container max-w-7xl mx-auto space-y-8 p-8">
      {/* Header with Setup Progress */}
      <div className="relative space-y-6 pb-8 border-b">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold tracking-tight">Payroll Setup Dashboard</h1>
            <p className="text-muted-foreground max-w-2xl">
              Complete your payroll configuration to ensure accurate processing and compliance.
              Follow the guided setup process below.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="gap-2">
              <Bell className="h-4 w-4" />
              <span className="hidden sm:inline">Notifications</span>
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <ShieldCheck className="h-4 w-4" />
              <span className="hidden sm:inline">Compliance Check</span>
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard 
            title="Setup Progress" 
            value="60%" 
            icon={CheckCircle2}
          />
          <StatCard 
            title="Active Employees" 
            value="124" 
            icon={Users}
          />
          <StatCard 
            title="Next Payroll" 
            value="Jun 15" 
            icon={CircleDollarSign}
          />
          <StatCard 
            title="Open Tasks" 
            value="3" 
            icon={Clock}
          />
        </div>
      </div>

      {/* Required Setup Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold tracking-tight">Required Setup</h2>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
            View Setup Guide
          </Button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <ActionCard
            title="Company Configuration"
            description="Set up your company details, tax information, and fiscal year settings."
            href="/setup/company"
            icon={Building2}
            status="required"
          />
          <ActionCard
            title="HMRC Integration"
            description="Configure HMRC settings for RTI submissions and tax calculations."
            href="/setup/hmrc"
            icon={ShieldCheck}
            status="required"
          />
          <ActionCard
            title="Payroll Settings"
            description="Define pay periods, elements, and processing rules."
            href="/setup/payroll"
            icon={Settings2}
            status="required"
          />
        </div>
      </div>

      {/* Additional Setup */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Additional Configuration</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <ActionCard
            title="Employee Benefits"
            description="Set up pension schemes, insurance, and other employee benefits."
            href="/setup/benefits"
            icon={Gift}
            status="recommended"
          />
          <ActionCard
            title="Timesheet Templates"
            description="Configure timesheet layouts and approval workflows."
            href="/setup/timesheets"
            icon={Clock}
            status="recommended"
          />
          <ActionCard
            title="Custom Reports"
            description="Create and customize payroll reports and analytics."
            href="/setup/reports"
            icon={BarChart3}
            status="optional"
          />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <Card className="bg-primary/5 hover:bg-primary/10 transition-colors cursor-pointer">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-md bg-primary/10">
                <HeadphonesIcon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <CardTitle className="text-lg">Need Help?</CardTitle>
                <CardDescription>Connect with our support team</CardDescription>
              </div>
            </div>
          </CardHeader>
        </Card>
        <Card className="bg-primary/5 hover:bg-primary/10 transition-colors cursor-pointer">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-md bg-primary/10">
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
              <div>
                <CardTitle className="text-lg">Documentation</CardTitle>
                <CardDescription>Browse guides and tutorials</CardDescription>
              </div>
            </div>
          </CardHeader>
        </Card>
      </div>
    </div>
  )
}
