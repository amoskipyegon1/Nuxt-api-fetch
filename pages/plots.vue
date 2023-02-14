<script setup lang="ts">
import Datepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

const toggle = ref<'map' | 'chart' | 'about'>('map')

const disaster = ref<boolean>(false)
const selected_disaster = ref<string>('Select Disasters to Monitor')
const selectDisaster = (payload: string): void => {
    selected_disaster.value = payload
    disaster.value = !disaster.value
}
const year = ref(new Date().getFullYear())
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
            <h1 class="font-black text-4xl tracking-normal">
                Explore the Impacts of <span class="text-[#ffb86b]">Natural Disasters</span>
            </h1>

            <div class="w-full flex flex-row justify-between items-center mt-3.5 border-b border-[#db95f9]">
                <ul class="flex flex-wrap gap-x-4 -mb-px border-b border-gray-200 text-lg">
                    <li @click="() => (toggle = 'map')" class="mr-2">
                        <a
                            href="#"
                            class="inline-block px-4 py-2 border-b-2 rounded-t-lg hover:border-[#ffb86b] hover:text-[#ffb86b] transition duration-200"
                            :class="
                                toggle === 'map' ? 'text-[#ffb86b] border-[#ffb86b]' : 'text-inherit border-transparent'
                            "
                            >Map</a
                        >
                    </li>
                    <li class="mr-2">
                        <a
                            href="#"
                            class="inline-block px-4 py-2 border-b-2 hover:border-[#ffb86b] hover:text-[#ffb86b] rounded-t-lg transition duration-200"
                            aria-current="page"
                            :class="
                                toggle === 'chart'
                                    ? 'text-[#ffb86b] border-[#ffb86b]'
                                    : 'text-inherit border-transparent'
                            "
                            >Charts</a
                        >
                    </li>
                    <li @click="() => (toggle = 'about')" class="mr-2">
                        <a
                            href="#"
                            class="inline-block px-4 py-2 border-b-2 rounded-t-lg hover:text-[#ffb86b] hover:border-[#ffb86b] transition duration-200"
                            :class="
                                toggle === 'about'
                                    ? 'text-[#ffb86b] border-[#ffb86b]'
                                    : 'text-inherit border-transparent'
                            "
                            >About</a
                        >
                    </li>
                </ul>
            </div>
            <div class="w-full h-[80vh]">
                <Transition mode="out-in">
                    <div v-if="toggle === 'map'" class="w-full h-full">
                        <Map />
                    </div>
                    <div v-else-if="toggle === 'about'" class="w-full h-full flex flex-col gap-y-2 py-2">
                        <article class="mt-6 text-lg flex flex-col gap-y-3">
                            <p>
                                Welcome to our platform that provides a comprehensive view of the impact of natural
                                disasters on our world. With an interactive map and rich data visualization, our web app
                                offers a unique way to understand the frequency, magnitude, and consequences of these
                                devastating events.
                            </p>
                            <p>
                                As you navigate our platform, you'll have access to a wealth of information and
                                insights, including maps and graphs that help you visualize the impact of each disaster
                                type. Whether you're a student, researcher, or simply interested in learning more,
                                you'll find our web app to be a valuable resource.
                            </p>
                        </article>
                    </div>
                    <div v-else class="w-full h-full flex flex-col gap-y-2 py-2">
                        <article class="mt-6 text-lg flex flex-col gap-y-3">
                            <p>
                                Welcome to our platform that provides a comprehensive view of the impact of natural
                                disasters on our world. With an interactive map and rich data visualization, our web app
                                offers a unique way to understand the frequency, magnitude, and consequences of these
                                devastating events.
                            </p>
                            <p>
                                As you navigate our platform, you'll have access to a wealth of information and
                                insights, including maps and graphs that help you visualize the impact of each disaster
                                type. Whether you're a student, researcher, or simply interested in learning more,
                                you'll find our web app to be a valuable resource.
                            </p>
                        </article>
                    </div>
                </Transition>
            </div>
            <div
                class="w-full flex flex-col sm:flex-row items-center justify-between gap-x-2 gap-y-6 border-t border-[#db95f9] py-6"
            >
                <div class="flex flex-col gap-y-1 relative w-full">
                    <button
                        @click="() => (disaster = !disaster)"
                        class="bg-[#414558] capitalize w-full flex flex-row items-center justify-between gap-x-4 text-start text-base sm:text-lg text-zinc-300 border border-zinc-500 rounded py-2.5 sm:py-3.5 px-4 focus:outline-none focus:ring-[#db95f9] focus:ring-2 transition duration-200"
                    >
                        {{ selected_disaster }}
                        <div class="w-5 h-5">
                            <IconsChevronDown />
                        </div>
                    </button>
                    <div
                        v-if="disaster"
                        class="absolute bottom-[120%] left-0 right-0 bg-[#414558] ring-1 ring-zinc-500 rounded-sm"
                    >
                        <ul class="w-full flex flex-col gap-y-2 px-2 py-2">
                            <li
                                @click="selectDisaster('Covid-19')"
                                class="w-full py-2.5 px-2 text-base text-zinc-200 tracking-wide capitalize cursor-pointer hover:bg-[#db95f9] hover:text-[#220052] rounded-md transition duration-200 truncate"
                            >
                                Covid-19
                            </li>
                            <li
                                @click="selectDisaster('drought & Famine')"
                                class="w-full py-2.5 px-2 text-base text-zinc-200 tracking-wide capitalize cursor-pointer hover:bg-[#db95f9] hover:text-[#220052] rounded-md transition duration-200 truncate"
                            >
                                drought & Famine
                            </li>
                            <li
                                @click="selectDisaster('Forest Fires')"
                                class="w-full py-2.5 px-2 text-base text-zinc-200 tracking-wide capitalize cursor-pointer hover:bg-[#db95f9] hover:text-[#220052] rounded-md transition duration-200 truncate"
                            >
                                Forest Fires
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="flex flex-col gap-y-1 w-full">
                    <button
                        class="bg-[#414558] w-full flex flex-row items-center justify-between gap-x-4 text-start text-base sm:text-lg text-zinc-300 border border-zinc-500 rounded py-2.5 sm:py-3.5 px-4 focus:outline-none focus:ring-[#db95f9] focus:ring-2 transition duration-200"
                    >
                        Select Regions to Monitor
                        <div class="w-5 h-5">
                            <IconsChevronDown />
                        </div>
                    </button>
                </div>
                <div class="flex flex-col gap-y-1 w-full">
                    <!-- <button
                        class="bg-[#414558] w-full flex flex-row items-center justify-between gap-x-4 text-start text-base sm:text-lg text-zinc-300 border border-zinc-500 rounded py-2.5 sm:py-3.5 px-4 focus:outline-none focus:ring-[#db95f9] focus:ring-2 transition duration-200"
                    >
                        Select periods to Monitor
                        <div class="w-5 h-5">
                            <IconsChevronDown />
                        </div>
                    </button> -->
                    <Datepicker
                        v-model="year"
                        year-picker
                        :dark="true"
                        input-class-name="custom-input"
                        placeholder="Select periods to Monitor"
                    />
                </div>
                <div class="">
                    <button
                        class="py-2.5 sm:py-3.5 px-10 text-base sm:text-lg bg-[#db95f9] hover:bg-violet-600 rounded uppercase font-medium tracking-wider text-[#220052] transition-colors duration-200"
                    >
                        ANAlyze
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.custom-input {
    @apply bg-[#414558] w-full flex flex-row items-center justify-between gap-x-4 text-start text-base sm:text-lg text-zinc-300 border border-zinc-500 rounded py-2.5 sm:py-3.5 px-4 focus:outline-none focus:ring-[#db95f9] focus:ring-2 transition duration-200;
}
</style>
