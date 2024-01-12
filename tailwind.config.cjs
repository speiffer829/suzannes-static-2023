const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				primary: ['Poppins', 'sans-serif'],
				condensed: [
					'Barlow Condensed',
					'Roboto Condensed',
					'Bahnschrift',
					'DIN Alternate',
					'Franklin Gothic Medium',
					'Nimbus Sans Narrow',
					'sans-serif-condensed',
					'sans-serif'
				],
				fancy: ['moranga', 'serif']
			}
		},
		screens: {
			xs: '350px',
			...defaultTheme.screens
		}
	},
	plugins: [require('@tailwindcss/container-queries')]
};
