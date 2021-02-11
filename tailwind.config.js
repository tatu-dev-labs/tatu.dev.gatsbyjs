const colors = require('tailwindcss/colors')

module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		container: {
			center: true
		},
		backgroundColor: theme => ({
			transparent: 'transparent',
			current: 'currentColor',
			primary: '#012840',
			secondary: '#ffd34e',
			white: colors.white
		}),
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			primary: '#012840',
			secondary: '#ffd34e',
			white: colors.white
		},
		
		extend: {},
	},
	variants: {
		extend: {},
	},
};
