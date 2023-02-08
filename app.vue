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
        {
            href: 'https://fonts.googleapis.com/css2?family=Inter:wght@200;400;600;800&display=swaphttps://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet',
        },
    ],
})
</script>
<template>
    <main class="flex flex-col py-6 sm:py-8">
        <NuxtPage />
    </main>
</template>
