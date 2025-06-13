import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, AlertCircle, XCircle } from "lucide-react"
import { StepList } from "./step-list"

interface ScenarioCardProps {
  title: string
  steps: string[]
  outcome?: string
  images?: string[]
  type?: "success" | "warning" | "error"
}

export function ScenarioCard({ title, steps, outcome, images, type = "success" }: ScenarioCardProps) {
  const types = {
    success: {
      icon: CheckCircle,
      bg: "bg-green-50 dark:bg-green-900/20",
      border: "border-green-200 dark:border-green-800",
      iconColor: "text-green-600 dark:text-green-400",
      titleColor: "text-green-900 dark:text-green-200",
      badge: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
    },
    warning: {
      icon: AlertCircle,
      bg: "bg-amber-50 dark:bg-amber-900/20",
      border: "border-amber-200 dark:border-amber-800",
      iconColor: "text-amber-600 dark:text-amber-400",
      titleColor: "text-amber-900 dark:text-amber-200",
      badge: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
    },
    error: {
      icon: XCircle,
      bg: "bg-red-50 dark:bg-red-900/20",
      border: "border-red-200 dark:border-red-800",
      iconColor: "text-red-600 dark:text-red-400",
      titleColor: "text-red-900 dark:text-red-200",
      badge: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
    },
  }

  const currentType = types[type]
  const Icon = currentType.icon

  return (
    <Card className={`border ${currentType.border} ${currentType.bg}`}>
      <CardContent className="p-4">
        <div className="flex items-center gap-3 mb-4">
          <div className={`p-2 rounded-lg bg-white/50 dark:bg-black/20`}>
            <Icon className={`h-5 w-5 ${currentType.iconColor}`} />
          </div>
          <h4 className={`font-semibold ${currentType.titleColor}`}>{title}</h4>
          <Badge className={currentType.badge}>{type}</Badge>
        </div>

        <StepList steps={steps} variant="numbered" />

        {outcome && (
          <div className="mt-4 pt-4 border-t border-current/20">
            <p className="text-sm font-medium">
              <span className={currentType.titleColor}>Outcome:</span>{" "}
              <span className="text-muted-foreground">{outcome}</span>
            </p>
          </div>
        )}

        {images && images.length > 0 && (
          <div className="mt-4 space-y-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <img src={image || "/placeholder.svg"} alt={`${title} - Step ${index + 1}`} className="w-full h-auto" />
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
