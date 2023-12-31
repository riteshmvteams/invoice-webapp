import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: "var(--bgPrimary)",
        bgSidebar: "var(--bgSidebar)",
        bgCard: "var(--bgCard)",
        accentColor: "var(--accentColor)",
        textPrimary: "var(--textPrimary)",
      },
    },
  },
  plugins: [],
};
export default config;
