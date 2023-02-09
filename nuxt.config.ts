export default defineNuxtConfig({
    css: ['~/assets/css/tailwind.css', '~/assets/css/global.css'],
    modules: ['@nuxtjs/tailwindcss', '@nuxt/image-edge', '@kevinmarrec/nuxt-pwa'],
    // buildModules: ['@nuxtjs/pwa'],
    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
    },
    pwa: {
        icon: {
            fileName: 'icon.png',
        },
        meta: {
            /* meta options */
            name: 'Monitor Data Insights',
            theme_color: '#101010',
        },
        manifest: {
            name: 'Monitor Data Insights',
            short_name: 'Monitor',
            lang: 'en',
            theme_color: '#101010',
            useWebmanifestExtension: false,
        },
    },
    routeRules: {
        '/home': { ssr: false },
    },
})
