/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Include all your React files
  ],
  theme: {
    extend: {
        colors: {
            primary: '#1103A6',
            secondary: '#00A0E3',
            light: '#F4F4FA',
            dark: '#212529'
        },
        fontFamily: {
            sans: ['Montserrat', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
        }
    }
},
  plugins: [],
}

