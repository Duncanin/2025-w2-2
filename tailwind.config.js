const { info } = require('sass');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './main.js',
        './pages/**/*.html',
        './layout/**/*.ejs',
        './assets/**/*.{html,js,scss}',
    ],
    theme: {
        container: {
            center: true, // 置中
            screens: {
                sm: '375px',
                md: '768px',
                lg: '992px',
                xl: '1140px',
              '2xl': '1296px' // 最大寬度
            }
        },
        extend: {
            colors: {
                primary: {
                    100: '#F5FEE7',
                    200: '#E8FEC5',
                    300: '#C0FA73',
                    400: '#57A203',
                    500: '#477A11',
                },
                neutral: {
                    0: '#FFFFFF',
                    100: '#F8F9FA',
                    200: '#E9ECEF',
                    300: '#DEE2E6',
                    400: '#CED4DA',
                    500: '#ADB5BD',
                    600: '#6C757D',
                    700: '#495057',
                    800: '#343A40',
                    900: '#212529',
                },
                danger: {
                    100: '#FCF1F1',
                    200: '#EBA7A7',
                    300: '#D74F4F',
                    },
                    success: {
                    100: '#EFF8F4',
                    200: '#9AD1BA',
                    300: '#3EA375',
                    },
                    warning: {
                    100: '#FEF6EC',
                    200: '#F9C588',
                    300: '#F3B812',
                    },
                    info: {
                    100: '#EEF5FC',
                    200: '#97C3ED',
                    300: '#3087DB',
                    },
            },
            fontFamily: {
                sans: ['"Noto Sans TC"',
                    'sans-serif'],
            letterSpacing: {
                tightest: '0.05em',
                },
            },
            borderRadius: {
                'radius-sm': '4px',
                'radius-md': '12px',
                'radius-rounded': '1000px',
            }
        },
    },
    plugins: [],
};