/** @type {import('tailwindcss').Config} */
// Get theme defaults.
const defaultTheme = require('tailwindcss/defaultTheme');
// Build the config.
module.exports = {
  content: [
    './index.html',
  ],
  theme: {
	screens: {
		'sm': '640px',
		'md': '768px',
		'lg': '1024px',
		'xl': '1280px',
	},
    extend: {
		fontFamily: {
			'sans': ['Merriweather', ...defaultTheme.fontFamily.serif],
			'bitter' : ['Bitter', ...defaultTheme.fontFamily.serif],
			'merriweather' : ['Merriweather', ...defaultTheme.fontFamily.serif],
		},
		colors : {
			'scorpion': {
				'50': '#f7f7f7',
				'100': '#e3e3e3',
				'200': '#c8c8c8',
				'300': '#a4a4a4',
				'400': '#818181',
				'500': '#666666',
				DEFAULT : '#595959',
				'700': '#434343',
				'800': '#383838',
				'900': '#313131',
			},
			'titan-white': {
				'50': '#f3f4ff',
				DEFAULT: '#e7e8fe',
				'200': '#d6d8fe',
				'300': '#b5b7fd',
				'400': '#8d8bfa',
				'500': '#675bf7',
				'600': '#5239ee',
				'700': '#4327da',
				'800': '#3820b7',
				'900': '#301d95',
			},
			'blue': {
				'50': '#f2f5ff',
				'100': '#e7ecff',
				'200': '#d2dbff',
				'300': '#aebdff',
				'400': '#8092ff',
				'500': '#4d5eff',
				DEFAULT : '#242dfe',
				'700': '#171cea',
				'800': '#1317c4',
				'900': '#1214a0',
			},
			'sunglow': {
				'50': '#fefbe8',
				'100': '#fdf6c4',
				'200': '#fde88b',
				DEFAULT: '#fbcf32',
				'400': '#f8be17',
				'500': '#e8a50a',
				'600': '#c87d06',
				'700': '#a05908',
				'800': '#84460f',
				'900': '#703913',
			},

		},
		borderWidth: {
			'20' : '20px',
		}
	},
  },
  plugins: [],
}
