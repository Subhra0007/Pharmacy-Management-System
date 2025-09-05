/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enables dark mode using the 'dark' class on <html>
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scans all JS/JSX/TS/TSX files in src for Tailwind classes
  ],
  theme: {
    extend: {
      // Optional: Extend Tailwind's default theme if needed
      colors: {
        // Add custom colors if you want to define specific shades
        // Example:
        // 'custom-gray': '#1f2937',
      },
    },
  },
  plugins: [], // Add plugins if needed (e.g., forms, typography)
};