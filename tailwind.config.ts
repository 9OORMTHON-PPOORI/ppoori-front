import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
      fontSize: {
        "title-1": [
          "30px",
          {
            lineHeight: "38px",
            letterSpacing: "-0.5",
            fontWeight: "800",
          },
        ],
        "title-2": [
          "20px",
          {
            lineHeight: "30px",
            letterSpacing: "-1",
            fontWeight: "800",
          },
        ],
        "title-3": [
          "20px",
          {
            lineHeight: "30px",
            letterSpacing: "-0.5",
            fontWeight: "700",
          },
        ],
        "title-4": [
          "20px",
          {
            lineHeight: "30px",
            letterSpacing: "-0.5",
            fontWeight: "500",
          },
        ],
        "subtitle-1": [
          "16px",
          {
            lineHeight: "20px",
            letterSpacing: "-0.5",
            fontWeight: "700",
          },
        ],
        "text-1": [
          "16px",
          {
            lineHeight: "20px",
            letterSpacing: "-0.5",
            fontWeight: "500",
          },
        ],
        "text-2": [
          "16px",
          {
            lineHeight: "24px",
            letterSpacing: "-0.5",
            fontWeight: "400",
          },
        ],
        "text-3": [
          "14px",
          {
            lineHeight: "22px",
            letterSpacing: "-0.5",
            fontWeight: "600",
          },
        ],
        "text-4": [
          "14px",
          {
            lineHeight: "22px",
            letterSpacing: "-0.5",
            fontWeight: "500",
          },
        ],
        caption: [
          "12px",
          {
            lineHeight: "18px",
            letterSpacing: "-0.5",
            fontWeight: "500",
          },
        ],
      },
      fontFamily: {
        pretendard: ["var(--font-pretendard)"],
        allroundgothic: ["var(--font-allroundgothic)"],
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
} satisfies Config;

export default config;
