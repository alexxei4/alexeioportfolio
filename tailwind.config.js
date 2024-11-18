/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        ppMori: ['PP Mori', 'sans-serif'],
        helvetica: ['Helvetica Neue', 'sans-serif'],
        geist: ['Geist', 'sans-serif'],
        connect: ['ABC Connect', 'sans-serif'],
        asfaltcondensed : ['ABC Asfalt Condensed', 'sans-serif'],
        asfaltcompressed : ['ABC Asfalt Compressed', 'sans-serif'],
      },
      colors: {
        primaryBlue: '#1e3a8a',   // Rich Blue
        primaryGreen: '#10b981',  // Rich Green
        primaryPurple: '#7c3aed', // Rich Purple
        neutralGray: {
          light: '#d1d5db',       // Light Gray for content
          DEFAULT: '#9ca3af',     // Medium Gray
          dark: '#4b5563',        // Dark Gray for backgrounds
        },
        background: '#1f2937',    // Very Dark Gray/Black
        accentWhite: '#f9fafb',   // Off-White for text on dark backgrounds
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
    },
  },
  plugins: [],
};
