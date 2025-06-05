import type { Config } from "tailwindcss"

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
        // Vibrant Sirius colors based on logo
        sirius: {
          blue: {
            DEFAULT: "hsl(210, 100%, 45%)", // Vibrant blue from logo
            dark: "hsl(210, 100%, 35%)",
            light: "hsl(210, 100%, 95%)",
            foreground: "hsl(0, 0%, 100%)",
          },
          orange: {
            DEFAULT: "hsl(25, 100%, 55%)", // Vibrant orange from logo
            dark: "hsl(25, 100%, 45%)",
            light: "hsl(25, 100%, 95%)",
            foreground: "hsl(0, 0%, 100%)",
          },
          purple: {
            DEFAULT: "hsl(260, 70%, 50%)", // Purple accent
            dark: "hsl(260, 70%, 40%)",
            light: "hsl(260, 70%, 95%)",
            foreground: "hsl(0, 0%, 100%)",
          },
          green: {
            DEFAULT: "hsl(140, 70%, 45%)", // Success green
            dark: "hsl(140, 70%, 35%)",
            light: "hsl(140, 70%, 95%)",
            foreground: "hsl(0, 0%, 100%)",
          },
          gray: {
            DEFAULT: "hsl(210, 10%, 23%)",
            medium: "hsl(210, 9%, 48%)",
            light: "hsl(210, 20%, 94%)",
            extralight: "hsl(210, 25%, 98%)",
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
