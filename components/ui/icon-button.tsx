"use client"

import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface IconButtonProps {
  icon: LucideIcon
  size?: "sm" | "md" | "lg"
  variant?: "primary" | "secondary" | "accent" | "royal" | "adaptive"
  className?: string
  onClick?: () => void
  disabled?: boolean
}

export function IconButton({
  icon: Icon,
  size = "md",
  variant = "adaptive",
  className,
  onClick,
  disabled = false,
}: IconButtonProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  }

  const iconSizes = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-7 w-7",
  }

  const variants = {
    primary: {
      glow: "bg-gradient-to-br from-sirius-secondary/40 via-sirius-primary/30 to-sirius-base/40 group-hover:from-sirius-secondary/50 group-hover:via-sirius-primary/40 group-hover:to-sirius-base/50",
      button: "bg-gradient-to-br from-sirius-secondary via-sirius-primary to-sirius-base",
      shadow: "group-hover:shadow-sirius-secondary/30",
      reflection: "bg-sirius-secondary/20 group-hover:bg-sirius-secondary/30",
    },
    secondary: {
      glow: "bg-gradient-to-br from-sirius-secondary/50 via-sirius-secondary/30 to-sirius-primary/40 group-hover:from-sirius-secondary/60",
      button: "bg-gradient-to-br from-sirius-secondary via-sirius-secondary/90 to-sirius-primary",
      shadow: "group-hover:shadow-sirius-secondary/30",
      reflection: "bg-sirius-secondary/30 group-hover:bg-sirius-secondary/40",
    },
    accent: {
      glow: "bg-gradient-to-br from-sirius-highlight/40 via-sirius-secondary/30 to-sirius-primary/40 group-hover:from-sirius-highlight/50",
      button: "bg-gradient-to-br from-sirius-highlight/90 via-sirius-secondary/80 to-sirius-primary",
      shadow: "group-hover:shadow-sirius-highlight/30",
      reflection: "bg-sirius-highlight/30 group-hover:bg-sirius-highlight/40",
    },
    royal: {
      glow: "bg-gradient-to-br from-sirius-base/50 via-sirius-base/40 to-sirius-primary/30 group-hover:from-sirius-base/60",
      button: "bg-gradient-to-br from-sirius-base via-sirius-base/90 to-sirius-primary/80",
      shadow: "group-hover:shadow-sirius-base/40",
      reflection: "bg-sirius-base/30 group-hover:bg-sirius-base/40",
    },
    adaptive: {
      glow: "bg-gradient-to-br from-sirius-secondary/40 via-sirius-primary/30 to-sirius-base/40 dark:from-sirius-secondary/60 dark:via-sirius-primary-dark/50 dark:to-sirius-base-dark/60 group-hover:from-sirius-secondary/50 group-hover:via-sirius-primary/40 group-hover:to-sirius-base/50 dark:group-hover:from-sirius-secondary/70 dark:group-hover:via-sirius-primary-dark/60 dark:group-hover:to-sirius-base-dark/70",
      button:
        "bg-gradient-to-br from-sirius-secondary via-sirius-primary to-sirius-base dark:from-sirius-secondary dark:via-sirius-primary-dark dark:to-sirius-base-dark",
      shadow: "group-hover:shadow-sirius-secondary/30 dark:group-hover:shadow-sirius-secondary/40",
      reflection:
        "bg-sirius-secondary/20 dark:bg-sirius-secondary/30 group-hover:bg-sirius-secondary/30 dark:group-hover:bg-sirius-secondary/40",
    },
  }

  const currentVariant = variants[variant]

  return (
    <div
      className={cn("relative group cursor-pointer", disabled && "opacity-50 cursor-not-allowed", className)}
      onClick={disabled ? undefined : onClick}
    >
      {/* Enhanced outer glow effect */}
      <div
        className={cn(
          "absolute inset-0 rounded-xl blur-md transition-all duration-300 group-hover:blur-lg",
          currentVariant.glow,
          disabled && "group-hover:blur-md",
        )}
      />

      {/* Main button with enhanced gradient */}
      <div
        className={cn(
          "relative rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1",
          sizeClasses[size],
          currentVariant.button,
          currentVariant.shadow,
          disabled && "group-hover:translate-y-0 group-hover:shadow-lg",
        )}
      >
        {/* Inner highlight overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/20 dark:to-white/10 rounded-xl opacity-50 dark:opacity-30" />

        {/* Icon with enhanced animation */}
        <Icon
          className={cn(
            "text-white drop-shadow-md transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg",
            iconSizes[size],
            variant === "accent" && "text-sirius-base",
            disabled && "group-hover:scale-100",
          )}
        />
      </div>

      {/* Subtle bottom reflection */}
      <div
        className={cn(
          "absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 blur-sm rounded-full transition-all duration-300 group-hover:w-10",
          currentVariant.reflection,
          size === "sm" && "w-6 group-hover:w-8",
          size === "lg" && "w-12 group-hover:w-14",
          disabled && "group-hover:w-8",
        )}
      />
    </div>
  )
}
