const colors = require('tailwindcss/colors')

module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
        fontFamily: {
            'sans': ['Lato', 'sans-serif', 'ui-sans-serif'],
            'body': ['Lato', 'sans-serif', 'ui-sans-serif'],
        },
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
        colors: {
			transparent: 'transparent',
			current: 'currentColor',
			primary: '#094b73',
			secondary: '#ffd34e',
			white: colors.white
		},
		backgroundColor: theme => ({
			transparent: 'transparent',
			current: 'currentColor',
			primary: '#094b73',
			secondary: '#ffd34e',
			white: colors.white
		}),
        textColor: {
            transparent: 'transparent',
			current: 'currentColor',
			primary: '#094b73',
			secondary: '#ffd34e',
			white: colors.white
        },		
		extend: {},
	},
	variants: {
		extend: {},
	},
};
