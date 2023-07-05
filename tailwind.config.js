const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
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
            boxShadow: {
                card: '0px 12px 24px -4px rgba(145, 158, 171, 0.12), 0px 0px 2px 0px rgba(145, 158, 171, 0.20)'
            }
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
