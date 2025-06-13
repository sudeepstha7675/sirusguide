import { ArrowRight } from "lucide-react"

interface StepListProps {
  steps: string[]
  variant?: "default" | "numbered"
}

export function StepList({ steps, variant = "default" }: StepListProps) {
  return (
    <div className="space-y-3">
      {steps.map((step, index) => (
        <div key={index} className="flex items-start gap-3">
          {variant === "numbered" ? (
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-sirius-secondary/10 dark:bg-sirius-secondary/20 text-sirius-secondary dark:text-sirius-secondary text-sm font-medium flex-shrink-0 mt-0.5">
              {index + 1}
            </div>
          ) : (
            <div className="rounded-full bg-sirius-secondary/10 dark:bg-sirius-secondary/20 p-1.5 mt-0.5 flex-shrink-0">
              <ArrowRight className="h-4 w-4 text-sirius-secondary dark:text-sirius-secondary" />
            </div>
          )}
          <span className="text-foreground leading-relaxed">{step}</span>
        </div>
      ))}
    </div>
  )
}
