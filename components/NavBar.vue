<script setup lang="ts">
import { Collapse } from 'vue-collapsed'
const navbarstate = ref<boolean>(true)

const handleScroll = (): void => {
    if (process.client) {
        let currentposition = window.scrollY
        if (currentposition >= 5) {
            navbarstate.value = true
        } else {
            navbarstate.value = false
        }
    }
}

if (process.client) {
    window.addEventListener('scroll', handleScroll)
}

const isExpanded = ref<boolean>(false)
function handleCollapse() {
    isExpanded.value = !isExpanded.value
    if (navbarstate.value === false) {
        navbarstate.value = true
    } else {
        return
    }
}

const toggleAttrs = computed(() => ({
    id: 'toggle',
    'aria-expanded': isExpanded.value,
    'aria-controls': 'collapse',
}))
const collapseAttrs = {
    'aria-labelledby': 'toggle',
    id: 'collapse',
    role: 'region',
}
</script>
<template>
    <nav class="w-full fixed top-6 md:top-8 rounded-3xl flex flex-row items-center px-4 md:px-8 lg:px-20 xl:px-32">
        <div
            class="w-full flex flex-col gap-y-2 py-2.5 md:py-2 px-6 transition duration-200"
            :class="navbarstate ? 'scale-[1.025] md:scale-105 shadow ring-1 ring-gray-200 bg-white' : 'bg-app-bg'"
        >
            <div class="w-full flex flex-row items-center justify-between">
                <div class="flex flex-row items-center gap-x-8">
                    <!-- <NuxtImg src="/logo.svg" class="flex items-center justify-center -ml-4" /> -->
                    <div class="w-9 h-5 flex items-center justify-center -ml-4">
                        <IconsLogo />
                    </div>
                    <span class="text-base font-semibold tracking-wide uppercase text-neutral-800 flex flex-row"
                        >monito<span class="text-[#66dc4c]">r</span></span
                    >
                </div>
                <div class="hidden md:flex flex-row items-center gap-x-12">
                    <div class="flex flex-row gap-x-1.5 items-center cursor-pointer" @click="handleCollapse">
                        <span class="text-base text-neutral-700 tracking-wide font-semibold">About</span>
                        <div class="w-3 h-3">
                            <IconsChevronDown />
                        </div>
                    </div>
                    <button
                        type="button"
                        class="text-white tracking-wide bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center"
                    >
                        Try search
                    </button>
                </div>
                <div class="flex md:hidden flex-row items-center">
                    <button @click="handleCollapse"><IconsMenu /></button>
                </div>
            </div>
            <Collapse v-bind="collapseAttrs" :when="isExpanded" class="v-collapse">
                <div class="flex flex-col gap-y-1 border-t border-neutral-200 py-3">
                    <div class="w-full hidden md:flex flex-col gap-y-2 flex-wrap">
                        <small class="text-neutral-500 text-sm font-medium">About</small>
                        <p class="text-xs font-medium">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae repellat amet id fuga
                            natus laborum, asperiores debitis odio fugit rem expedita!
                        </p>
                    </div>
                    <ul class="md:hidden flex flex-col gap-y-1 w-full">
                        <li class="w-full py-4 flex flex-row justify-between items-center cursor-pointer">
                            <span class="text-base text-neutral-700 tracking-wide font-semibold">About</span>
                            <div class="w-3 h-3">
                                <IconsChevronDown />
                            </div>
                        </li>
                        <li class="w-full flex flex-col items-center">
                            <button
                                type="button"
                                class="w-full text-white tracking-wide bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center"
                            >
                                Try search
                            </button>
                        </li>
                    </ul>
                </div>
            </Collapse>
        </div>
    </nav>
</template>
