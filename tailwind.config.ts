import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    //'./pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      }
    },
  },
  fontFamily: {
    sans: ['Inter', 'HelveticaNeue-Light', '"Helvetica Neue Light"', '"Helvetica Neue"', 'Helvetica', 'Arial', '"Lucida Grande"', 'sans-serif']
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui:{
    themes:["winter","corporate","forest","halloween","dark","coffee"],
  },
}
export default config