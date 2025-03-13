/** @type {import('tailwindcss').Config} */
import type {Config} from 'tailwindcss'


const config: Config = {
    darkMode: "class", // Ensures dark mode works using the "class" strategy
    content: [
      "./app/**/*.{js,jsx,ts,tsx}",
      "./components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "var(--foreground)",
          secondary: "var(--background)",
        },
      },
    },
    plugins: [],
  };
  
  export default config;