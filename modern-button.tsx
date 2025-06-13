import { Settings2 } from "lucide-react"

// Option 1: Modern Glassmorphism Button
export function ModernGlassButton() {
  return (
    <div className="relative group cursor-pointer">
      <div className="relative w-12 h-12 bg-gradient-to-br from-primary/90 via-primary to-primary/80 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg border border-white/10 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/25 group-hover:-translate-y-0.5">
        <Settings2 className="h-5 w-5 text-white transition-transform duration-300 group-hover:rotate-90" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </div>
  )
}

// Option 2: Elegant Minimal Button
export function ElegantMinimalButton() {
  return (
    <div className="relative group cursor-pointer">
      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shadow-md transition-all duration-200 group-hover:shadow-lg group-hover:bg-primary/90 group-hover:scale-[1.02]">
        <Settings2 className="h-5 w-5 text-primary-foreground transition-transform duration-200 group-hover:rotate-45" />
      </div>
    </div>
  )
}

// Option 3: Floating Glow Button
export function FloatingGlowButton() {
  return (
    <div className="relative group cursor-pointer">
      <div className="absolute inset-0 bg-primary/30 rounded-xl blur-md transition-all duration-300 group-hover:bg-primary/40 group-hover:blur-lg" />
      <div className="relative w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-primary/30 group-hover:-translate-y-1">
        <Settings2 className="h-5 w-5 text-primary-foreground transition-all duration-300 group-hover:scale-110" />
      </div>
    </div>
  )
}

// Option 4: Neumorphism Button
export function NeumorphismButton() {
  return (
    <div className="relative group cursor-pointer">
      <div className="w-12 h-12 bg-gradient-to-br from-card to-muted rounded-xl flex items-center justify-center transition-all duration-300 shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.7),inset_2px_2px_6px_rgba(0,0,0,0.1)] group-hover:shadow-[inset_-1px_-1px_3px_rgba(255,255,255,0.7),inset_1px_1px_3px_rgba(0,0,0,0.1)]">
        <Settings2 className="h-5 w-5 text-primary transition-transform duration-300 group-hover:rotate-180" />
      </div>
    </div>
  )
}

// Option 5: Animated Ring Button
export function AnimatedRingButton() {
  return (
    <div className="relative group cursor-pointer">
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] animate-pulse opacity-75 blur-sm group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-105">
        <Settings2 className="h-5 w-5 text-primary-foreground transition-transform duration-500 group-hover:rotate-[360deg]" />
      </div>
    </div>
  )
}

// Option 6: Subtle Professional Button
export function SubtleProfessionalButton() {
  return (
    <div className="relative group cursor-pointer">
      <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 border border-primary/20 rounded-lg flex items-center justify-center transition-all duration-200 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 group-hover:border-primary/30">
        <Settings2 className="h-5 w-5 text-primary transition-transform duration-200 group-hover:rotate-90" />
      </div>
    </div>
  )
}

// Option 7: Morphing Button
export function MorphingButton() {
  return (
    <div className="relative group cursor-pointer">
      <div className="w-12 h-12 bg-gradient-to-br from-primary via-primary/90 to-primary/80 rounded-lg flex items-center justify-center shadow-md transition-all duration-500 ease-out group-hover:rounded-2xl group-hover:shadow-lg group-hover:shadow-primary/25 group-hover:scale-110">
        <Settings2 className="h-5 w-5 text-primary-foreground transition-all duration-500 group-hover:h-6 group-hover:w-6 group-hover:rotate-180" />
      </div>
    </div>
  )
}

// Demo Component
export default function ButtonShowcase() {
  return (
    <div className="p-8 space-y-8 bg-background">
      <h2 className="text-2xl font-bold mb-6">Button Variations</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-center gap-3">
          <ModernGlassButton />
          <span className="text-sm text-muted-foreground">Modern Glass</span>
        </div>

        <div className="flex flex-col items-center gap-3">
          <ElegantMinimalButton />
          <span className="text-sm text-muted-foreground">Elegant Minimal</span>
        </div>

        <div className="flex flex-col items-center gap-3">
          <FloatingGlowButton />
          <span className="text-sm text-muted-foreground">Floating Glow</span>
        </div>

        <div className="flex flex-col items-center gap-3">
          <NeumorphismButton />
          <span className="text-sm text-muted-foreground">Neumorphism</span>
        </div>

        <div className="flex flex-col items-center gap-3">
          <AnimatedRingButton />
          <span className="text-sm text-muted-foreground">Animated Ring</span>
        </div>

        <div className="flex flex-col items-center gap-3">
          <SubtleProfessionalButton />
          <span className="text-sm text-muted-foreground">Subtle Professional</span>
        </div>

        <div className="flex flex-col items-center gap-3">
          <MorphingButton />
          <span className="text-sm text-muted-foreground">Morphing</span>
        </div>
      </div>
    </div>
  )
}
