/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {


	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['Josefin Sans', ...defaultTheme.fontFamily.sans],
			},

			keyframes: {
				float: {
					'0%': { transform: 'translatey(0)' },
					'50%': { transform: 'translatey(-25px)' },
					'100%': { transform: 'translatey(0)' }
				}
			},
			animation: {
				float: 'float 8s ease-in-out infinite',
			}

		},
	},
	plugins: [require("daisyui"), require("tailwindcss-animation-delay")],
	daisyui: {
		themes: ["light", "dark", "cupcake", {
			mytheme: {

				"primary": "#7c159e",

				"secondary": "#c04be7",

				"accent": "#4338ca",

				"neutral": "#f5f5f4",

				"base-100": "#1d232a",

				"info": "#3abff8",

				"success": "#4ade80",

				"warning": "#fbbd23",

				"error": "#be123c",
			}
		}],
		extend: {

		},
	},
}
