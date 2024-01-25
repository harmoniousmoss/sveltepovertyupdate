/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#1DAAC8',
				secondary: '#FBB116',
				kuningmuda: '#fffaeb',
				tertiary: '#3C9950',
				hijaumuda: '#f2fbf4',
				forthly: '#FECF07',
				fifthly: '#f9fafb',
				gelap: '#111827',
				dongker: '#005E7F',
				dongkermuda: '#e7ffff',
				blueshade20: '#136678',
				greenshade20: '#377a48',
				yellowshade20: '#cba607'
			}
			// screens: {
			//   'sm': '640px',
			//   'md': '768px',
			//   'lg': '1024px',
			//   'xl': '1280px',
			//   '2xl': '1536px',
			//   '3xl': '1920px'
			// },
		}
	},
	plugins: []
};
