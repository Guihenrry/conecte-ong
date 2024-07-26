import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          '50': '#edefff',
          '100': '#dfe1ff',
          '200': '#c5c8ff',
          '300': '#a2a3ff',
          '400': '#867dfc',
          '500': '#745ef6',
          '600': '#623cea',
          '700': '#5833cf',
          '800': '#482ca7',
          '900': '#3c2b84',
          '950': '#25194d',
        },
      },
    },
  },
  plugins: [],
}
export default config
