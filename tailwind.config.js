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
            fontFamily: {
                sans: ['"Noto Sans TC"',
                    'sans-serif'],
            },
        },
    },
    plugins: [],
};