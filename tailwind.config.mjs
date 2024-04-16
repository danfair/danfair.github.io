import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      'light-purple': '#F2F1F9',
      purple: '#5B46C7',
      orange: '#E4803E',
      white: '#FFFFFF',
      'light-gray': '#DFDFDF',
    },
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
