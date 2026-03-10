/** @type {import('tailwindcss').Config} */

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            extend: {
                fontFamily: {
                    // sans: ['Outfit', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
                },
                colors: {
                    orangeColor: "#FFB96A",
                    blueColor: "#003D99",
                    bgColor: "#FFFAF5",
                    lightBlueTextColor: "#E8EBFF",
                    blackColor: "#242424",
                },
            },
        },
    },
    plugins: [],
}