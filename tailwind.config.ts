import type { Config } from 'tailwindcss';

const config: Config = {
  variants: {
    extend: {},
  },
  corePlugins: {
    preflight: false,
  },
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {},
  plugins: [],
};
export default config;
