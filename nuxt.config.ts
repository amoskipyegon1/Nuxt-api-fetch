// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	css: ["~/assets/css/tailwind.css"],
	modules: ["@nuxtjs/tailwindcss", "@nuxt/image-edge", "@kevinmarrec/nuxt-pwa"],
	app: {
		pageTransition: { name: "page", mode: "out-in" },
	},
	pwa: {
		icon: {
			fileName: "icon.png",
			splash: {
				backgroundColor: "#F7F1E9",
				targetDir: "/",
				devices: [],
			},
		},
	},
});
