<script setup lang="ts">
const toggle = ref<'map' | 'chart' | 'about'>('map')
</script>
<template>
    <section class="w-full min-h-screen bg-[#414558] py-4 flex flex-col items-center px-2 sm:px-64">
        <div class="absolute top-0 left-0 right-0 hidden sm:flex flex-row items-center py-2 px-2 lg:px-8">
            <NuxtLink
                to="/"
                class="flex flex-row items-center gap-x-2 cursor-pointer py-2 px-2.5 bg-[#414558] opacity-75 rounded shadow ring-1 ring-zinc-600"
            >
                <NuxtImg src="/icons/monitoring2.png" class="w-8 sm:w-11 h-8 sm:h-11" />
            </NuxtLink>
        </div>
        <div class="w-full ring-[#db95f9] flex flex-col gap-y-2">
            <h1 class="font-black text-4xl tracking-normal text-center">
                Explore the Impacts of <span class="text-[#ffb86b]">Natural Disasters</span>
            </h1>

            <div class="w-full flex flex-row justify-center items-center mt-0 rounded-sm border-y border-[#db95f9]/50">
                <ul class="flex flex-wrap gap-x-10 -mb-px text-lg">
                    <li @click="() => (toggle = 'map')">
                        <a
                            href="#"
                            class="inline-block px-2 py-2.5 text-base tracking-wide hover:text-[#ffb86b] transition duration-200"
                            :class="toggle === 'map' ? 'text-[#ffb86b]' : 'text-inherit'"
                            >Map</a
                        >
                    </li>
                    <li>
                        <a
                            href="#"
                            class="inline-block px-2 py-2.5 text-base tracking-wide hover:text-[#ffb86b] transition duration-200"
                            aria-current="page"
                            :class="toggle === 'chart' ? 'text-[#ffb86b]' : 'text-inherit'"
                            >Charts</a
                        >
                    </li>
                    <li @click="() => (toggle = 'about')">
                        <a
                            href="#"
                            class="inline-block px-2 py-2.5 text-base tracking-wide hover:text-[#ffb86b] transition duration-200"
                            :class="toggle === 'about' ? 'text-[#ffb86b]' : 'text-inherit'"
                            >About</a
                        >
                    </li>
                </ul>
            </div>
            <div class="w-full h-[80vh] mt-4">
                <Transition mode="out-in">
                    <div v-if="toggle === 'map'" class="w-full h-full z-0">
                        <Map />
                    </div>
                    <div v-else-if="toggle === 'about'" class="w-full h-full flex flex-col gap-y-2 py-2">
                        <About />
                    </div>
                    <div v-else class="w-full h-full flex flex-col gap-y-2 py-2">
                        <Charts />
                    </div>
                </Transition>
            </div>
            <div v-if="toggle != 'about'" class="w-full">
                <Options />
            </div>
        </div>
    </section>
</template>

<style scoped>
.custom-input {
    @apply bg-[#414558] w-full flex flex-row items-center justify-between gap-x-4 text-start text-base sm:text-lg text-zinc-300 border border-zinc-500 rounded py-2.5 sm:py-3.5 px-4 focus:outline-none focus:ring-[#db95f9] focus:ring-2 transition duration-200;
}
</style>
