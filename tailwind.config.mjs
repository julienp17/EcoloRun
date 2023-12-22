/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  purge: ['./src/**/*.astro'],
	theme: {
		extend: {
      fontFamily: {
        'changa': ['ChangaOne', 'sans-serif'],
        'jacques': ['JacquesFrancois', 'sans-serif'],
        'labelle': ['LaBelleAurore', 'sans-serif'],
        'open': ['OpenSans', 'sans-serif']
      }
    },
	},
	plugins: [],
}
