/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit", 
	// darkMode: "class", 
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./projects/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
