module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		backgroundColor: theme => ({
			transparent: 'transparent',
			current: 'currentColor',
			primary: '#012840',
			secondary: '#ffd34e' 
		}),
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			primary: '#012840',
			secondary: '#ffd34e' 
		},
		
		extend: {},
	},
	variants: {
		extend: {},
	},
};
