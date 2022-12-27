/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,ts,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [require("@tailwindcss/typography")],
};
