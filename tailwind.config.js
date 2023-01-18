/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,jsx,ts,tsx}",
        "./src/components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "blue-dark": "var(--color-blue-dark)",
                "blue-darker": "var(--color-blue-darker)",
                "blue-special": "var(--color-blue-special)",
                "grey-main": "var(--color-grey-main)",
                "blue-grey": "var(--color-blue-grey)",
                "grey-dark": "var(--color-grey-dark)",
            },
        },
    },
    plugins: [],
};
