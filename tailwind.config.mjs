/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A', // Dark Navy Blue
        secondary: '#3B82F6', // Sky Blue
        accent: '#60A5FA', // Lighter Sky Blue
        background: '#FFFFFF', // White
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}