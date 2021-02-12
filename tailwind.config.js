const colors = require('tailwindcss/colors')

module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontWeight: {
			thin: 100,
			light: 300,
			normal: 400,
			bold: 700,
			black: 900,
		},
		container: {
			center: true
		},
		backgroundColor: theme => ({
			transparent: 'transparent',
			current: 'currentColor',
			primary: '#012840',
			secondary: '#ffd34e',
			color3: '#80939f',
			white: colors.white
		}),
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			primary: '#012840',
			secondary: '#ffd34e',
			color3: '#80939f',
			white: colors.white
		},
		
		extend: {},
	},
	variants: {
		extend: {},
	},
};
