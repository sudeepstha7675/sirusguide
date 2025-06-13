import type React from "react"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

interface ProcessStepProps {
  step: number
  title: string
  description: string
  icon: LucideIcon
  children: React.ReactNode
  variant?: "default" | "warning" | "critical"
  isCompleted?: boolean
}

export function ProcessStep({
  step,
  title,
  description,
  icon: Icon,
  children,
  variant = "default",
  isCompleted = false,
}: ProcessStepProps) {
  const variants = {
    default: {
      border: "border-sirius-neutral-border-dark dark:border-sirius-neutral-border-dark",
      stepBg: "bg-sirius-secondary/10 dark:bg-sirius-secondary/20",
      stepText: "text-sirius-secondary dark:text-sirius-secondary",
      iconBg: "bg-sirius-secondary/10 dark:bg-sirius-secondary/20",
      iconColor: "text-sirius-secondary dark:text-sirius-secondary",
    },
    warning: {
      border: "border-amber-200 dark:border-amber-800",
      stepBg: "bg-amber-50 dark:bg-amber-900/20",
      stepText: "text-amber-700 dark:text-amber-300",
      iconBg: "bg-amber-50 dark:bg-amber-900/20",
      iconColor: "text-amber-600 dark:text-amber-400",
    },
    critical: {
      border: "border-red-200 dark:border-red-800",
      stepBg: "bg-red-50 dark:bg-red-900/20",
      stepText: "text-red-700 dark:text-red-300",
      iconBg: "bg-red-50 dark:bg-red-900/20",
      iconColor: "text-red-600 dark:text-red-400",
    },
  }

  const currentVariant = variants[variant]

  return (
    <div className={cn("rounded-xl border bg-card", currentVariant.border)}>
      {/* Step Header */}
      <div className="p-6 border-b">
        <div className="flex items-start gap-4">
          {/* Step Number */}
          <div
            className={cn(
              "flex items-center justify-center w-12 h-12 rounded-xl font-bold text-lg",
              currentVariant.stepBg,
              currentVariant.stepText,
            )}
          >
            {isCompleted ? "✓" : step}
          </div>

          {/* Step Content */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <div className={cn("p-2 rounded-lg", currentVariant.iconBg)}>
                <Icon className={cn("h-5 w-5", currentVariant.iconColor)} />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{title}</h3>
              {variant === "warning" && (
                <Badge variant="outline" className="text-amber-600 border-amber-300">
                  Caution
                </Badge>
              )}
              {variant === "critical" && (
                <Badge variant="destructive" className="text-xs">
                  Critical
                </Badge>
              )}
            </div>
            <p className="text-muted-foreground">{description}</p>
          </div>
        </div>
      </div>

      {/* Step Content */}
      <div className="p-6">{children}</div>
    </div>
  )
}
