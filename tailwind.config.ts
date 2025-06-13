import type { Config } from "tailwindcss"
import type { PluginAPI } from "tailwindcss/types/config"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Albert Sans", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Enhanced SiriusApp brand colors with improved dark mode optimization
        sirius: {
          // Base (Primary Purple) - Much more readable in dark mode
          base: {
            DEFAULT: "hsl(270, 100%, 20%)", // Light mode
            dark: "hsl(250, 85%, 70%)", // Dark mode - readable purple-blue
            rgb: "51, 0, 102",
            foreground: "hsl(0, 0%, 100%)",
            "foreground-dark": "hsl(240, 20%, 10%)",
          },
          // Primary (Magenta) - Softer in dark mode
          primary: {
            DEFAULT: "hsl(320, 100%, 30%)", // Light mode
            dark: "hsl(250, 85%, 70%)", // Dark mode - same as base for consistency
            rgb: "153, 0, 102",
            foreground: "hsl(0, 0%, 100%)",
            "foreground-dark": "hsl(240, 20%, 10%)",
          },
          // Secondary (Pink) - Softer for dark mode
          secondary: {
            DEFAULT: "hsl(301, 100%, 64%)",
            dark: "hsl(260, 75%, 65%)", // Softer purple for dark mode
            rgb: "255, 73, 252",
            foreground: "hsl(270, 100%, 20%)",
            "foreground-dark": "hsl(240, 20%, 10%)",
          },
          // Highlight (Cyan) - Slightly muted for dark
          highlight: {
            DEFAULT: "hsl(180, 100%, 70%)", // Light mode
            dark: "hsl(180, 90%, 65%)", // Slightly muted for dark
            rgb: "102, 255, 255",
            foreground: "hsl(270, 100%, 20%)",
            "foreground-dark": "hsl(240, 20%, 10%)",
          },
          // Enhanced neutral colors with dark variants
          neutral: {
            // Light mode backgrounds
            base: "hsl(220, 33%, 98%)", // #f8f9fc
            primary: "hsl(228, 35%, 96%)", // #f1f3f9
            secondary: "hsl(0, 0%, 12%)", // #1e1e1e
            text: "hsl(0, 0%, 12%)", // #1e1e1e

            // Dark mode backgrounds
            "base-dark": "hsl(240, 20%, 10%)", // #14151f
            "primary-dark": "hsl(240, 20%, 13%)", // #1a1c29
            "secondary-dark": "hsl(240, 20%, 18%)", // #23263a
            "text-dark": "hsl(220, 30%, 95%)", // #edf0f7

            // Muted variants for dark mode
            "muted-dark": "hsl(220, 20%, 70%)", // #a9b3cc
            "border-dark": "hsl(240, 20%, 20%)", // #2a2d45
          },
          // Enhanced gradients with improved dark mode variants
          gradient: {
            // Light mode gradients
            purple: "hsl(260, 100%, 50%)",
            pink: "hsl(280, 100%, 65%)",
            cyan: "hsl(190, 100%, 75%)",

            // Dark mode gradients - much more readable
            "purple-dark": "hsl(250, 85%, 70%)",
            "pink-dark": "hsl(260, 75%, 65%)",
            "cyan-dark": "hsl(180, 90%, 65%)",
          },
        },
      },
      fontSize: {
        // Typography sizes from the guidelines
        display: ["50px", { lineHeight: "1.2", fontWeight: "900" }], // H1
        title: ["32px", { lineHeight: "1.3", fontWeight: "700" }], // H2
        heading: ["24px", { lineHeight: "1.4", fontWeight: "700" }], // H3
        subtitle: ["18px", { lineHeight: "1.5", fontWeight: "700" }], // Subtitle
        body: ["12px", { lineHeight: "1.6", fontWeight: "400" }], // Body text
      },
      fontWeight: {
        light: "300",
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        // Light mode gradients
        "sirius-pattern":
          "linear-gradient(135deg, hsl(270, 100%, 20%) 0%, hsl(320, 100%, 30%) 50%, hsl(301, 100%, 64%) 100%)",
        "sirius-gradient": "linear-gradient(to right, hsl(270, 100%, 20%), hsl(301, 100%, 64%))",
        "sirius-radial": "radial-gradient(circle at center, hsl(301, 100%, 64%) 0%, hsl(270, 100%, 20%) 100%)",

        // Dark mode optimized gradients - much more readable
        "sirius-pattern-dark":
          "linear-gradient(135deg, hsl(250, 85%, 70%) 0%, hsl(260, 75%, 65%) 50%, hsl(270, 70%, 60%) 100%)",
        "sirius-gradient-dark": "linear-gradient(to right, hsl(250, 85%, 70%), hsl(260, 75%, 65%))",
        "sirius-radial-dark": "radial-gradient(circle at center, hsl(260, 75%, 65%) 0%, hsl(240, 20%, 10%) 100%)",

        // Subtle dark mode backgrounds
        "sirius-mesh-dark":
          "radial-gradient(at 40% 20%, hsl(250, 85%, 70%) 0px, transparent 50%), radial-gradient(at 80% 0%, hsl(260, 75%, 65%) 0px, transparent 50%), radial-gradient(at 0% 50%, hsl(180, 90%, 65%) 0px, transparent 50%)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        // Dark mode specific animations - updated colors
        "glow-pulse": {
          "0%, 100%": {
            boxShadow: "0 0 20px -5px rgba(167, 139, 250, 0.4)",
          },
          "50%": {
            boxShadow: "0 0 30px -5px rgba(167, 139, 250, 0.6)",
          },
        },
        "theme-transition": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "theme-transition": "theme-transition 0.3s ease-in-out",
      },
      boxShadow: {
        // Light mode shadows
        "sirius-primary": "0 8px 32px -4px rgba(51, 0, 102, 0.3)",
        "sirius-secondary": "0 8px 32px -4px rgba(255, 73, 252, 0.3)",

        // Dark mode optimized shadows - updated colors
        "sirius-primary-dark": "0 8px 32px -4px rgba(167, 139, 250, 0.25)",
        "sirius-glow": "0 0 20px -5px rgba(167, 139, 250, 0.4)",
        "sirius-glow-lg": "0 0 40px -10px rgba(167, 139, 250, 0.3)",

        // Subtle elevation shadows for dark mode
        "dark-sm": "0 2px 4px -1px rgba(0, 0, 0, 0.3)",
        "dark-md": "0 4px 8px -2px rgba(0, 0, 0, 0.3)",
        "dark-lg": "0 8px 16px -4px rgba(0, 0, 0, 0.3)",
        "dark-xl": "0 16px 32px -8px rgba(0, 0, 0, 0.3)",
      },
      // Dark mode specific utilities
      backdropBlur: {
        dark: "8px",
      },
      opacity: {
        "15": "0.15",
        "35": "0.35",
        "65": "0.65",
        "85": "0.85",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    // Custom plugin for dark mode utilities - updated colors
    ({ addUtilities }: PluginAPI) => {
      const newUtilities = {
        // Dark mode text utilities - updated to readable colors
        ".text-sirius-adaptive": {
          color: "hsl(270, 100%, 20%)",
          "@media (prefers-color-scheme: dark)": {
            color: "hsl(250, 85%, 70%)",
          },
        },
        ".dark .text-sirius-adaptive": {
          color: "hsl(250, 85%, 70%)",
        },

        ".text-primary-adaptive": {
          color: "hsl(320, 100%, 30%)",
          "@media (prefers-color-scheme: dark)": {
            color: "hsl(250, 85%, 70%)",
          },
        },
        ".dark .text-primary-adaptive": {
          color: "hsl(250, 85%, 70%)",
        },

        // Dark mode background utilities - updated
        ".bg-sirius-adaptive": {
          backgroundColor: "hsl(270, 100%, 20%)",
          "@media (prefers-color-scheme: dark)": {
            backgroundColor: "hsl(250, 85%, 70%)",
          },
        },
        ".dark .bg-sirius-adaptive": {
          backgroundColor: "hsl(250, 85%, 70%)",
        },

        ".bg-card-adaptive": {
          backgroundColor: "hsl(var(--card))",
        },
        ".dark .bg-card-adaptive": {
          backgroundColor: "hsl(240, 20%, 13%)",
        },

        // Dark mode gradient utilities - updated
        ".bg-gradient-adaptive": {
          backgroundImage: "linear-gradient(to right, hsl(270, 100%, 20%), hsl(301, 100%, 64%))",
        },
        ".dark .bg-gradient-adaptive": {
          backgroundImage: "linear-gradient(to right, hsl(250, 85%, 70%), hsl(260, 75%, 65%))",
        },

        ".bg-pattern-adaptive": {
          backgroundImage:
            "linear-gradient(135deg, hsl(270, 100%, 20%) 0%, hsl(320, 100%, 30%) 50%, hsl(301, 100%, 64%) 100%)",
        },
        ".dark .bg-pattern-adaptive": {
          backgroundImage:
            "linear-gradient(135deg, hsl(250, 85%, 70%) 0%, hsl(260, 75%, 65%) 50%, hsl(270, 70%, 60%) 100%)",
        },

        // Dark mode shadow utilities - updated
        ".shadow-adaptive": {
          boxShadow: "0 8px 32px -4px rgba(51, 0, 102, 0.3)",
        },
        ".dark .shadow-adaptive": {
          boxShadow: "0 8px 32px -4px rgba(167, 139, 250, 0.25)",
        },

        ".shadow-glow-adaptive": {
          boxShadow: "none",
        },
        ".dark .shadow-glow-adaptive": {
          boxShadow: "0 0 20px -5px rgba(167, 139, 250, 0.4)",
        },

        // Theme transition utility
        ".theme-transition": {
          transition: "all 0.3s ease-in-out",
        },
      }

      addUtilities(newUtilities)
    },
  ],
} satisfies Config

export default config
