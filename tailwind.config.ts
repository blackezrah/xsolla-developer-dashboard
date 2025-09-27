import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    // Sidebar + Sheet colors and layouts
    "bg-black",
    "bg-black/70",
    "bg-black/80",
    "text-white",
    "text-gray-300",
    "text-pink-600",
    "text-pink-500",
    "hover:text-pink-400",
    "hover:text-white",
    "bg-pink-900/40",
    "text-pink-300",
    "border-white/10",
    "backdrop-blur-md",
    "backdrop-blur-sm",
    "shadow-lg",

    // Utilities used conditionally
    "flex",
    "items-center",
    "justify-between",
    "justify-center",
    "gap-2",
    "gap-3",
    "gap-4",
    "p-4",
    "p-6",
    "px-3",
    "py-2",
    "rounded-lg",
    "space-y-1",
    "space-y-2",
    "space-y-6",
    "w-64",
    "sm:w-80",
  ],
}

export default config
