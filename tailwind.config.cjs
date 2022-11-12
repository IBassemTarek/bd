/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Cairo", "sans-serif"],
                serif: ["Cairo", "serif"],
                mono: ["Cairo", "monospace"],
            },
        },
    },
    plugins: [],
};
