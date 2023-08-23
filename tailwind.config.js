/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			borderRadius: {
				primary: '20px',
				small: '10px',
			},
			colors: {
				primary: '#FFC400',
				secondary: '#121212',
				greyCol: '#576974',
				yellowSecondary: '#CC8700',
			},
			keyframes: {
				dropDown: {
					from: {
						opacity: 0,
						transform:
							'translateX(-10px) scale(0.9) translateY(-10px)',
					},
					to: {
						opacity: 100,
						transform: 'translateX(0px) scale(1) translateY(0px)',
					},
				},
				dropDownOut: {
					from: {
						opacity: 100,
						transform: 'translateX(0px) scale(1) translateY(0px)',
					},
					to: {
						opacity: 0,
						transform:
							'translateX(-10px) scale(0.9) translateY(-10px)',
					},
				},
				navDown: {
					from: { transform: ' translateY(-100px)' },
					to: { transform: ' translateY(0px)' },
				},
				carouselImage: {
					from: {},
					to: {},
				},
			},
			animation: {
				dropDown: 'dropDown .25s ease',
				dropDownOut: 'dropDownOut .25s ease',
				navDown: 'navDown .25s ease',
			},
		},
	},
	plugins: [],
};
