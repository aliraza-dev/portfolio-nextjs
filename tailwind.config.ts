import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      colors: {
        "primary-color": "#2978b5",
        "primary-shadow": "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
        "primary-background": "#fcfcfc",
        "secondary-color": "#555",
      },
    },
  },
  plugins: [],
};
export default config
