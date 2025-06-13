"use client"

import type { LucideIcon } from "lucide-react"
import { IconButton } from "./icon-button"

interface PageHeaderProps {
  icon: LucideIcon
  title: string
  description: string
  subtitle?: string
  iconVariant?: "primary" | "secondary" | "accent" | "royal" | "adaptive"
  iconSize?: "sm" | "md" | "lg"
}

export function PageHeader({
  icon,
  title,
  description,
  subtitle,
  iconVariant = "adaptive",
  iconSize = "md",
}: PageHeaderProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-4">
        <IconButton icon={icon} variant={iconVariant} size={iconSize} />
        <div>
          <h1 className="text-4xl font-bold text-primary">{title}</h1>
          <p className="text-muted-foreground text-lg mt-1">{description}</p>
        </div>
      </div>

      {subtitle && <p className="text-muted-foreground mb-6 text-lg">{subtitle}</p>}
    </div>
  )
}
