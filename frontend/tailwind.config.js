/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        warm: {
          bg: '#FDF5E6',
          text: '#6B4226',
          gold: '#C4A35A',
          sage: '#9CAF88',
          dark: '#2C1E16'
        }
      },
      boxShadow: {
        'warm': '0 1px 2px rgba(107, 66, 38, 0.04), 0 2px 4px rgba(107, 66, 38, 0.04), 0 4px 8px rgba(107, 66, 38, 0.04), 0 8px 16px rgba(107, 66, 38, 0.04)',
        'warm-sm': '0 1px 2px rgba(107, 66, 38, 0.04), 0 2px 4px rgba(107, 66, 38, 0.03)',
        'warm-lg': '0 2px 4px rgba(107, 66, 38, 0.06), 0 4px 8px rgba(107, 66, 38, 0.06), 0 8px 16px rgba(107, 66, 38, 0.06), 0 16px 32px rgba(107, 66, 38, 0.05)',
        'card': '0 0 0 1px rgba(107, 66, 38, 0.08), 0 1px 2px rgba(107, 66, 38, 0.04), 0 4px 8px rgba(107, 66, 38, 0.04)',
        'btn': 'inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 2px 4px rgba(107, 66, 38, 0.1)',
        'btn-hover': 'inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 4px 8px rgba(107, 66, 38, 0.15)'
      }
    }
  },
  plugins: [],
}
