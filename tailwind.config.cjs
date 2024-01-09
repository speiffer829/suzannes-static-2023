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
					'ui-monospace',
					'Cascadia Code',
					'Source Code Pro',
					'Menlo',
					'Consolas',
					'DejaVu Sans Mono',
					'monospace'
				],
				fancy: ['moranga', 'serif']
			},
			screens: {
				'3xl': '1920px'
			}
		},
		screens: {
			xs: '350px',
			...defaultTheme.screens
		}
	},
	plugins: [require('@tailwindcss/container-queries')]
};
