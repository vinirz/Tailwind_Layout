/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        'deepgray': '#17192a',
        'midgray': '#1e2333',
        'lowgray': '#5d6784',
      }
    },
  },
  plugins: [],
}

