/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0F172A',
        surface: '#1E293B',
        primary: '#A78BFA',
        'text-main': '#F8FAFC',
        'text-muted': '#94A3B8',
      },
    },
  },
  plugins: [],
};
