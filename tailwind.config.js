/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
    ],
    theme: {
        extend: {
            colors: {
                'app-bg': '#FBF8F4',
                'custom-color': '#F7F1E9',
            },
            transitionProperty: {
                length: 'height, width',
                spacing: 'margin, padding',
            },
        },
    },
    darkMode: 'class',
    plugins: [require('@tailwindcss/line-clamp')],
}
