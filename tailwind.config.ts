import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        logo: "#748cab"
      },
      fontFamily: {
        'serif': ['"DM Serif Text"', 'serif'],
        'roboto': ["Roboto Condensed", "serif"]
      },
      screens: {
        'custom-767': '767px'
      }
    },
  },
  plugins: [],
} satisfies Config;
