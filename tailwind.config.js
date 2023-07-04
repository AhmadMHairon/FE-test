/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    lighter: '#c8facd',
                    light: '#5ce585',
                    main: '#55D48E',
                    dark: '#3D9866'
                },
            },
        },
    },
    plugins: [
        plugin(({ addBase, theme }) => {
            console.log(theme)
            addBase({
                'html': { color: "#4CBE7F" },
            });
        })
    ],
};
