/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'deep-blue': '#121a2f',
        'darker-blue': '#0a101e',
        'dark-purple': '#1e1a34',
        'neon-cyan': '#00eeff',
        'neon-magenta': '#ff00ff',
        'neon-green': '#00ff9d',
        'glass-bg': 'rgba(15, 23, 42, 0.6)',
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0, 238, 255, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 238, 255, 0.8), 0 0 30px rgba(0, 238, 255, 0.6), 0 0 40px rgba(0, 238, 255, 0.4)' },
        },
      },
    },
  },
  plugins: [],
}; 