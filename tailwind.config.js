const colors = require('tailwindcss/colors');

module.exports = {
	content: [
		'./index.html',
		'./src/**/*.html',
		'./src/**/*.php',
		'./src/js/**/*.js'
	],
	theme: {
		extend: {
			colors: {
				teal:colors.teal,
			},
		},
	},
	plugins: [],
}
