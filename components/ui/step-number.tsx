import { cn } from "@/lib/utils"

interface StepNumberProps {
  number: number
  variant?: "primary" | "sirius" | "accent" | "muted" | "sirius-primary" | "sirius-highlight"
  size?: "sm" | "md" | "lg"
  completed?: boolean
  className?: string
}

export function StepNumber({
  number,
  variant = "primary",
  size = "md",
  completed = false,
  className,
}: StepNumberProps) {
  const sizeClasses = {
    sm: "h-6 w-6 text-xs",
    md: "h-8 w-8 text-sm",
    lg: "h-10 w-10 text-base",
  }

  const variantClasses = {
    primary: "bg-primary text-primary-foreground",
    sirius: "bg-sirius-secondary text-white",
    accent: "bg-accent text-accent-foreground",
    muted: "bg-muted text-muted-foreground",
    "sirius-primary": "bg-sirius-base text-white",
    "sirius-highlight": "bg-sirius-highlight text-sirius-highlight-foreground",
  }

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center font-semibold rounded-full flex-shrink-0 transition-all duration-200 hover:scale-105",
        sizeClasses[size],
        variantClasses[variant],
        completed && "bg-green-500 text-white",
        className,
      )}
    >
      {completed ? "✓" : number}
    </span>
  )
}
