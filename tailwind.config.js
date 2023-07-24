/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            fontSize: {
                navBar: '14px',
                mainTitle: '40px',
                desc: '18px',
                title: '36px',
                minMainTitle: '30px',
                minDesc: '16px',
                minTitle: '36px',
            },
            lineHeight: {
                mainTitle: '48px',
                desc: '28px',
                title: '40px',
                minMainTitle: '48px',
                minDesc: '24px',
                minTitle: '36px',
            },

            colors: {
                primary: {
                    lighter: '#FAFAF9',
                    light: '#FAFAF9',
                    main: '#44403C',
                    dark: '#3D9866',
                    footer: '#0C0A09',
                    desc: '#FAFAF9CC',
                    background: '#1C1917',
                },
                secondary: {
                    main: '#F4C377',
                    dark: '#F4C377',
                },
            },
            boxShadow: {
                card: '0px 12px 24px -4px rgba(145, 158, 171, 0.12), 0px 0px 2px 0px rgba(145, 158, 171, 0.20)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: 0 },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: 0 },
                },
                ping: {
                    '75%, 100%': {
                        transform: 'scale(1.5)',
                        opacity: 0,
                    },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
};
