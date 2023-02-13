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
            href: 'https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&family=Nunito:wght@200;400;500;600;700;800;900&display=swap" rel="stylesheet',
        },
    ],
})
</script>
<template>
    <main class="flex flex-col w-full">
        <NuxtPage />
    </main>
</template>
