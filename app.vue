<script setup lang="ts">
useHead({
    title: 'Visualize data',
    meta: [
        {
            name: 'description',
            content: 'visualize data of disasters of regions',
        },
    ],
    link: [
        { href: 'https://fonts.googleapis.com', rel: 'preconnect' },
        { href: 'https://fonts.gstatic.com', rel: 'preconnect' },
        { href: 'https://fonts.googleapis.com/css2?family=Oxygen&display=swap', rel: 'stylesheet' },
    ],
})
</script>
<template>
    <main class="flex flex-col py-6 sm:py-8">
        <NuxtPage />
    </main>
</template>

<style scoped>
html,
body {
    margin: 0%;
    padding: 0%;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    font-family: 'Oxygen', Euclid Circular A, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Ubuntu, Cantarell,
        Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    @apply bg-app-bg text-[#01051B] overflow-x-hidden;
}
</style>
