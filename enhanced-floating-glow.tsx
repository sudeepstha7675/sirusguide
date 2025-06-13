import { Settings2 } from "lucide-react"

// Enhanced Floating Glow Button with improved Sirius colors
export function EnhancedFloatingGlow() {
  return (
    <div className="relative group cursor-pointer">
      {/* Enhanced outer glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-sirius-secondary/40 via-sirius-primary/30 to-sirius-base/40 rounded-xl blur-md transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-sirius-secondary/50 group-hover:via-sirius-primary/40 group-hover:to-sirius-base/50 group-hover:blur-lg" />

      {/* Main button with enhanced gradient */}
      <div className="relative w-12 h-12 bg-gradient-to-br from-sirius-secondary via-sirius-primary to-sirius-base rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-sirius-secondary/30 group-hover:-translate-y-1">
        {/* Inner highlight overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/20 rounded-xl opacity-50" />

        {/* Icon with enhanced animation */}
        <Settings2 className="h-5 w-5 text-white drop-shadow-md transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg" />
      </div>

      {/* Subtle bottom reflection */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-sirius-secondary/20 blur-sm rounded-full transition-all duration-300 group-hover:w-10 group-hover:bg-sirius-secondary/30" />
    </div>
  )
}

// Dark mode optimized version
export function EnhancedFloatingGlowDark() {
  return (
    <div className="relative group cursor-pointer">
      {/* Enhanced outer glow effect for dark mode */}
      <div className="absolute inset-0 bg-gradient-to-br from-sirius-secondary/60 via-sirius-primary-dark/50 to-sirius-base-dark/60 rounded-xl blur-md transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-sirius-secondary/70 group-hover:via-sirius-primary-dark/60 group-hover:to-sirius-base-dark/70 group-hover:blur-lg" />

      {/* Main button with enhanced gradient for dark mode */}
      <div className="relative w-12 h-12 bg-gradient-to-br from-sirius-secondary via-sirius-primary-dark to-sirius-base-dark rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-sirius-secondary/40 group-hover:-translate-y-1">
        {/* Inner highlight overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10 rounded-xl opacity-30" />

        {/* Icon with enhanced animation */}
        <Settings2 className="h-5 w-5 text-white drop-shadow-md transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg" />
      </div>

      {/* Subtle bottom reflection */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-sirius-secondary/30 blur-sm rounded-full transition-all duration-300 group-hover:w-10 group-hover:bg-sirius-secondary/40" />
    </div>
  )
}

// Adaptive version that works in both light and dark modes
export function AdaptiveFloatingGlow() {
  return (
    <div className="relative group cursor-pointer">
      {/* Adaptive outer glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-sirius-secondary/40 via-sirius-primary/30 to-sirius-base/40 dark:from-sirius-secondary/60 dark:via-sirius-primary-dark/50 dark:to-sirius-base-dark/60 rounded-xl blur-md transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-sirius-secondary/50 group-hover:via-sirius-primary/40 group-hover:to-sirius-base/50 dark:group-hover:from-sirius-secondary/70 dark:group-hover:via-sirius-primary-dark/60 dark:group-hover:to-sirius-base-dark/70 group-hover:blur-lg" />

      {/* Adaptive main button */}
      <div className="relative w-12 h-12 bg-gradient-to-br from-sirius-secondary via-sirius-primary to-sirius-base dark:from-sirius-secondary dark:via-sirius-primary-dark dark:to-sirius-base-dark rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-sirius-secondary/30 dark:group-hover:shadow-sirius-secondary/40 group-hover:-translate-y-1">
        {/* Adaptive inner highlight */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/20 dark:to-white/10 rounded-xl opacity-50 dark:opacity-30" />

        {/* Icon */}
        <Settings2 className="h-5 w-5 text-white drop-shadow-md transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg" />
      </div>

      {/* Adaptive bottom reflection */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-sirius-secondary/20 dark:bg-sirius-secondary/30 blur-sm rounded-full transition-all duration-300 group-hover:w-10 group-hover:bg-sirius-secondary/30 dark:group-hover:bg-sirius-secondary/40" />
    </div>
  )
}

// Color variations showcase
export function ColorVariations() {
  return (
    <div className="p-8 space-y-8 bg-background">
      <h2 className="text-2xl font-bold mb-6">Enhanced Floating Glow Buttons</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Variation 1: Vibrant Pink-Purple */}
        <div className="flex flex-col items-center gap-3">
          <div className="relative group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-sirius-secondary/50 via-sirius-secondary/30 to-sirius-primary/40 rounded-xl blur-md transition-all duration-300 group-hover:blur-lg group-hover:from-sirius-secondary/60" />
            <div className="relative w-12 h-12 bg-gradient-to-br from-sirius-secondary via-sirius-secondary/90 to-sirius-primary rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-sirius-secondary/30 group-hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/20 rounded-xl opacity-50" />
              <Settings2 className="h-5 w-5 text-white drop-shadow-md transition-all duration-300 group-hover:scale-110" />
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-sirius-secondary/30 blur-sm rounded-full transition-all duration-300 group-hover:w-10" />
          </div>
          <span className="text-sm text-muted-foreground">Vibrant Pink-Purple</span>
        </div>

        {/* Variation 2: Royal Purple */}
        <div className="flex flex-col items-center gap-3">
          <div className="relative group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-sirius-base/50 via-sirius-base/40 to-sirius-primary/30 rounded-xl blur-md transition-all duration-300 group-hover:blur-lg group-hover:from-sirius-base/60" />
            <div className="relative w-12 h-12 bg-gradient-to-br from-sirius-base via-sirius-base/90 to-sirius-primary/80 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-sirius-base/40 group-hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/20 rounded-xl opacity-50" />
              <Settings2 className="h-5 w-5 text-white drop-shadow-md transition-all duration-300 group-hover:scale-110" />
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-sirius-base/30 blur-sm rounded-full transition-all duration-300 group-hover:w-10" />
          </div>
          <span className="text-sm text-muted-foreground">Royal Purple</span>
        </div>

        {/* Variation 3: Cyan Accent */}
        <div className="flex flex-col items-center gap-3">
          <div className="relative group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-sirius-highlight/40 via-sirius-secondary/30 to-sirius-primary/40 rounded-xl blur-md transition-all duration-300 group-hover:blur-lg group-hover:from-sirius-highlight/50" />
            <div className="relative w-12 h-12 bg-gradient-to-br from-sirius-highlight/90 via-sirius-secondary/80 to-sirius-primary rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-sirius-highlight/30 group-hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/20 rounded-xl opacity-50" />
              <Settings2 className="h-5 w-5 text-sirius-base drop-shadow-md transition-all duration-300 group-hover:scale-110" />
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-sirius-highlight/30 blur-sm rounded-full transition-all duration-300 group-hover:w-10" />
          </div>
          <span className="text-sm text-muted-foreground">Cyan Accent</span>
        </div>

        {/* Variation 4: Magenta Glow */}
        <div className="flex flex-col items-center gap-3">
          <div className="relative group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-sirius-primary/50 via-sirius-primary/30 to-sirius-base/40 rounded-xl blur-md transition-all duration-300 group-hover:blur-lg group-hover:from-sirius-primary/60" />
            <div className="relative w-12 h-12 bg-gradient-to-br from-sirius-primary via-sirius-primary/90 to-sirius-base rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-sirius-primary/30 group-hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/20 rounded-xl opacity-50" />
              <Settings2 className="h-5 w-5 text-white drop-shadow-md transition-all duration-300 group-hover:scale-110" />
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-sirius-primary/30 blur-sm rounded-full transition-all duration-300 group-hover:w-10" />
          </div>
          <span className="text-sm text-muted-foreground">Magenta Glow</span>
        </div>

        {/* Variation 5: Tri-Color Blend */}
        <div className="flex flex-col items-center gap-3">
          <div className="relative group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-sirius-secondary/40 via-sirius-highlight/30 to-sirius-base/40 rounded-xl blur-md transition-all duration-300 group-hover:blur-lg group-hover:from-sirius-secondary/50" />
            <div className="relative w-12 h-12 bg-gradient-to-br from-sirius-secondary via-sirius-highlight/80 to-sirius-base rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-sirius-secondary/30 group-hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/20 rounded-xl opacity-50" />
              <Settings2 className="h-5 w-5 text-white drop-shadow-md transition-all duration-300 group-hover:scale-110" />
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-sirius-secondary/30 blur-sm rounded-full transition-all duration-300 group-hover:w-10" />
          </div>
          <span className="text-sm text-muted-foreground">Tri-Color Blend</span>
        </div>

        {/* Variation 6: Adaptive (Light/Dark) */}
        <div className="flex flex-col items-center gap-3">
          <AdaptiveFloatingGlow />
          <span className="text-sm text-muted-foreground">Adaptive (Light/Dark)</span>
        </div>
      </div>
    </div>
  )
}

export default function ButtonShowcase() {
  return <ColorVariations />
}
