/* Tailwind CSS configuration for dmnd.labs - Updated with lighter theme */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Updated color palette with lighter options
        'primary-purple': '#8B5CF6',
        'primary-blue': '#3B82F6',
        'primary-teal': '#14B8A6',
        'primary-pink': '#EC4899',
        
        // New lighter background colors
        'background-light': '#FFFFFF',
        'background-light-alt': '#F9FAFB',
        'background-gradient-start': '#F0F4FF',
        'background-gradient-end': '#F0FDFA',
        
        // Original dark theme colors (kept for dark mode)
        'background-dark': '#0A0B14',
        'background-card': '#111827',
        'secondary-dark': '#1F2937',
        
        // Accent colors
        'accent-yellow': '#FBBF24',
        'accent-green': '#10B981',
        'accent-red': '#EF4444',
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'display': ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'glow-purple': '0 0 15px rgba(139, 92, 246, 0.5)',
        'glow-blue': '0 0 15px rgba(59, 130, 246, 0.5)',
        'glow-teal': '0 0 15px rgba(20, 184, 166, 0.5)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
        },
        'gradient-y': {
          '0%, 100%': {
            'background-position': '50% 0%',
          },
          '50%': {
            'background-position': '50% 100%',
          },
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-position': '0% 0%',
          },
          '25%': {
            'background-position': '100% 0%',
          },
          '50%': {
            'background-position': '100% 100%',
          },
          '75%': {
            'background-position': '0% 100%',
          },
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
      },
    },
  },
  plugins: [],
}
