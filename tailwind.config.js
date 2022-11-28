/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: "Inter",
				mono: "JetBrains Mono",
			},
		},
	},
	plugins: [],
};
