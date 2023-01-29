// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	css: ["~/assets/css/tailwind.css"],
	modules: ["@nuxtjs/tailwindcss", "@nuxt/image-edge"],
	buildModules: ["@nuxtjs/pwa"],
	app: {
		pageTransition: { name: "page", mode: "out-in" },
	},
	pwa: {
		meta: {
			/* meta options */
			name: "monitor",
		},
		manifest: {
			name: "Monitor App",
			lang: "en",
			useWebmanifestExtension: false,
			short_name: "monitor",
		},
	},
});
