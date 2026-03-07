/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#104c91',
                    dark: '#0a356b',
                    light: '#256ebf',
                    50: '#f0f7ff',
                    100: '#e0efff',
                    200: '#bae0ff',
                    300: '#7cc7ff',
                    400: '#38a8ff',
                    500: '#0e8fff',
                    600: '#006fee',
                    700: '#005bc4',
                    800: '#004da3',
                    900: '#064187',
                },
                secondary: {
                    DEFAULT: '#00a651',
                    dark: '#00823e',
                    light: '#1ecb73',
                    50: '#ecfdf5',
                    100: '#d1fae5',
                    200: '#a7f3d0',
                    300: '#6ee7b7',
                    400: '#34d399',
                    500: '#10b981',
                    600: '#059669',
                    700: '#047857',
                    800: '#065f46',
                    900: '#064e3b',
                },
                accent: {
                    DEFAULT: '#3AAFA9',
                    dark: '#2D908B',
                    light: '#4DC9C3',
                    50: '#f0fdfa',
                    100: '#ccfbf1',
                    200: '#99f6e4',
                    300: '#5eead4',
                    400: '#2dd4bf',
                    500: '#14b8a6',
                    600: '#0d9488',
                    700: '#0f766e',
                    800: '#115e59',
                    900: '#134e4a',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['Outfit', 'sans-serif'],
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
                'drift': 'drift 10s ease-in-out infinite',
                'float': 'float 6s ease-in-out infinite',
            },
            boxShadow: {
                'premium': '0 20px 50px -12px rgba(0, 0, 0, 0.05)',
                'premium-hover': '0 30px 60px -12px rgba(0, 0, 0, 0.12)',
                'btn-primary': '0 10px 25px -5px rgba(16, 76, 145, 0.4)',
                'btn-primary-hover': '0 15px 35px -5px rgba(16, 76, 145, 0.5)',
                'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                pulseSoft: {
                    '0%, 100%': { opacity: '0.8' },
                    '50%': { opacity: '1' },
                },
                drift: {
                    '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
                    '50%': { transform: 'translate(30px, -30px) scale(1.05)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            }
        },
    },
    plugins: [],
}
