/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                inter: [
                    "Inter",
                    "sans-serif"
                ],
                cookie: ["Cookie"]
            },
            colors: {
                accent: "#28a745",
                primary: "#28a745",
                "primary-light":
                    "#050a33",
                secondary: "#0174BE",
                third: "#f8f9fa"
            }
        },
        container: {
            center: true,
            padding: {
                DEFAULT: "15px"
            }
        }
    },
    plugins: []
};
