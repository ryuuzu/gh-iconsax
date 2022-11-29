/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: "Inter",
				mono: "JetBrains Mono",
			},
			colors: {
				crayola: "#1C3738",
				dgreen: "#000F08",
			},
		},
	},
	plugins: [],
};
