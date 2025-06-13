import type React from "react"
import { StepNumber } from "./step-number"
import { cn } from "@/lib/utils"

interface Step {
  number: number
  content: React.ReactNode
  completed?: boolean
}

interface StepsProps {
  steps: Step[]
  variant?: "primary" | "sirius" | "accent" | "muted"
  size?: "sm" | "md" | "lg"
  className?: string
}

export function Steps({ steps, variant = "primary", size = "md", className }: StepsProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {steps.map((step) => (
        <div key={step.number} className="flex items-start gap-3">
          <StepNumber number={step.number} variant={variant} size={size} completed={step.completed} />
          <div className="flex-1 pt-0.5">{step.content}</div>
        </div>
      ))}
    </div>
  )
}
