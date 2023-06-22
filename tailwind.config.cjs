/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				primary: ['Poppins', 'sans-serif'],
				condensed: ['Barlow Condensed', 'sans-serif']
			}
		}
	},
	plugins: [require('@tailwindcss/container-queries')]
};
