import type React from "react"
import type { LucideIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface InfoCardProps {
  icon: LucideIcon
  title: string
  children: React.ReactNode
  variant?: "info" | "success" | "warning" | "primary"
  className?: string
}

export function InfoCard({ icon: Icon, title, children, variant = "info", className }: InfoCardProps) {
  const variants = {
    info: {
      bg: "bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/20 dark:to-card",
      border: "border-blue-200 dark:border-blue-800",
      iconBg: "bg-blue-100 dark:bg-blue-900/30",
      iconColor: "text-blue-600 dark:text-blue-400",
      titleColor: "text-blue-900 dark:text-blue-200",
    },
    success: {
      bg: "bg-gradient-to-br from-green-50 to-white dark:from-green-900/20 dark:to-card",
      border: "border-green-200 dark:border-green-800",
      iconBg: "bg-green-100 dark:bg-green-900/30",
      iconColor: "text-green-600 dark:text-green-400",
      titleColor: "text-green-900 dark:text-green-200",
    },
    warning: {
      bg: "bg-gradient-to-br from-amber-50 to-white dark:from-amber-900/20 dark:to-card",
      border: "border-amber-200 dark:border-amber-800",
      iconBg: "bg-amber-100 dark:bg-amber-900/30",
      iconColor: "text-amber-600 dark:text-amber-400",
      titleColor: "text-amber-900 dark:text-amber-200",
    },
    primary: {
      bg: "bg-gradient-to-br from-sirius-secondary/10 to-white dark:from-sirius-secondary/20 dark:to-card",
      border: "border-sirius-secondary/30 dark:border-sirius-secondary/40",
      iconBg: "bg-sirius-secondary/20 dark:bg-sirius-secondary/30",
      iconColor: "text-sirius-secondary dark:text-sirius-secondary",
      titleColor: "text-sirius-secondary dark:text-sirius-secondary",
    },
  }

  const currentVariant = variants[variant]

  return (
    <Card className={cn("border", currentVariant.border, currentVariant.bg, className)}>
      <CardContent className="p-4">
        <h3 className={cn("font-semibold mb-3 flex items-center gap-2", currentVariant.titleColor)}>
          <div className={cn("p-1.5 rounded-lg", currentVariant.iconBg)}>
            <Icon className={cn("h-4 w-4", currentVariant.iconColor)} />
          </div>
          {title}
        </h3>
        <div className="text-sm text-muted-foreground leading-relaxed">{children}</div>
      </CardContent>
    </Card>
  )
}
