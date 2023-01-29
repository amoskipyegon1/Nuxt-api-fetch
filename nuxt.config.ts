// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	css: ["~/assets/css/tailwind.css"],
	modules: ["@nuxtjs/tailwindcss", "@nuxt/image-edge", "@kevinmarrec/nuxt-pwa"],
	app: {
		pageTransition: { name: "page", mode: "out-in" },
	},
	// pwa: {
	// 	workbox: {
	// 		enabled: true,
	// 	},
	// },
	pwa: {
		icon: {
			fileName: "icon.png",
			splash: {
				backgroundColor: "#F7F1E9",
				targetDir: "/",
				devices: [],
			},
		},
		// workbox: {
		// 	enabled: true,
		// },
	},
	// pwa: {
	// 	manifest: {
	// 		name: "Monitor App",
	// 		short_name: "monitor",
	// 		lang: "en",
	// 		theme_color: "#F7F1E9",
	// 		background_color: "#F7F1E9",
	// 		start_url: `/`,
	// 		prefer_related_applications: true,
	// 	},
	// 	icon: {
	// 		fileName: "icon.png",
	// 	},
	// },
	// pwa: {
	// },
});
