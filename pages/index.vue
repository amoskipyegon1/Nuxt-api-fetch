<script setup lang="ts">
import { useAuthStore } from '~/store/user';
import VueDatepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { storeToRefs } from 'pinia';

const toggle_options = ref<boolean>(true);
const show_disaster = ref<boolean>(false);
const userStore = useAuthStore();
const { email } = storeToRefs(userStore);

const selectDisaster = (): void => {
    show_disaster.value = !show_disaster.value
    setTimeout(() => (toggle_options.value = !toggle_options.value), 200)
}
const year = ref(new Date().getFullYear())
</script>
<template>
    <section class="w-full relative flex flex-col z-0">
        <div
            class="w-full px-2 sm:px-8 z-0 h-screen relative flex flex-col items-center justify-center bg-[#414558] backdrop-blur bg-[hsl('250 10 15')]">
            <div
                class="absolute top-0 left-0 right-0 flex flex-row items-center justify-between py-2 px-2 lg:px-8 z-[9999]">
                <div
                    class="flex flex-row items-center gap-x-2 py-2 px-2.5 bg-[#414558] opacity-75 rounded shadow ring-1 ring-zinc-600">
                    <NuxtImg src="/icons/monitoring2.png" class="w-8 sm:w-11 h-8 sm:h-11" />
                </div>
                <transition>
                    <div v-if="email !== ''" class="flex items-center gap-x-2">
                        <UserIcon class="w-8 h-8" />
                        {{ email }}
                    </div>
                    <div v-else class="flex items-center gap-x-2 sm:gap-x-4">
                        <NuxtLink to="/login"
                            class="px-4 sm:px-6 py-1.5 border border-neutral-200 rounded-md text-sm sm:text-lg">Login
                        </NuxtLink>

                        <NuxtLink to="/register"
                            class="px-4 sm:px-6 py-1.5 border bg-[#db95f9] rounded-md text-sm sm:text-lg text-white">
                            Register
                            Admin</NuxtLink>
                    </div>
                </transition>
            </div>
            <div class="absolute top-0 bottom-0 right-0 left-0 -z-10">
                <NuxtImg src="/dal.png" class="w-full h-full" />
            </div>
            <div class="w-full h-full z-10 flex flex-col items-center justify-center gap-y-10">
                <div class="max-w-3xl flex flex-col -mt-28 sm:-mt-24 mb-16 sm:mb-20 md:px-8">
                    <h3
                        class="text-4xl sm:text-7xl tracking-tight font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#ffb86b]/80 to-[#db95f9] text-center">
                        Visualizing Disasters
                    </h3>
                    <p class="text-zinc-300 text-base sm:text-lg font-medium text-center">
                        Welcome to our platform that provides a comprehensive view of natural disasters and their impact
                        on the world. Explore the past, present, and future of natural disasters.
                    </p>
                </div>
                <div class="w-full max-w-2xl px-1 sm:px-4 flex flex-col items-center justify-center">
                    <div class="flex w-full flex-row items-center justify-center gap-x-4">
                        <div class="relative w-full">
                            <div class="absolute -top-14 left-2 sm:-left-3.5 -rotate-6 -translate-x-1/2">
                                <span class="text-base text-zinc-300/75">Visualize data</span>
                            </div>
                            <svg viewBox="0 0 415.262 415.261"
                                class="absolute -top-6 -left-2 w-7 h-7 fill-base-content rotate-[20deg]">
                                <g>
                                    <path
                                        d="M414.937,374.984c-7.956-24.479-20.196-47.736-30.601-70.992c-1.224-3.06-6.12-3.06-7.956-1.224 c-10.403,11.016-22.031,22.032-28.764,35.496h-0.612c-74.664,5.508-146.88-58.141-198.288-104.652 c-59.364-53.244-113.22-118.116-134.64-195.84c-1.224-9.792-2.448-20.196-2.448-30.6c0-4.896-6.732-4.896-7.344,0 c0,1.836,0,3.672,0,5.508C1.836,12.68,0,14.516,0,17.576c0.612,6.732,2.448,13.464,3.672,20.196 C8.568,203.624,173.808,363.356,335.376,373.76c-5.508,9.792-10.403,20.195-16.523,29.988c-3.061,4.283,1.836,8.567,6.12,7.955 c30.6-4.283,58.14-18.972,86.292-29.987C413.712,381.104,416.16,378.656,414.937,374.984z M332.928,399.464 c3.673-7.956,6.12-15.912,10.404-23.868c1.225-3.061-0.612-5.508-2.448-6.12c0-1.836-1.224-3.061-3.06-3.672 c-146.268-24.48-264.996-124.236-309.06-259.489c28.764,53.244,72.828,99.756,116.28,138.924 c31.824,28.765,65.484,54.468,102.204,75.888c28.764,16.524,64.872,31.824,97.92,21.421l0,0c-1.836,4.896,5.508,7.344,7.956,3.672 c7.956-10.404,15.912-20.196,24.48-29.376c8.567,18.972,17.748,37.943,24.479,57.527 C379.44,382.94,356.796,393.956,332.928,399.464z">
                                    </path>
                                </g>
                            </svg>
                            <Transition name="slide-down" mode="out-in">
                                <div v-if="toggle_options" class="w-full relative">
                                    <button @click="() => (show_disaster = !show_disaster)"
                                        class="bg-[#414558] w-full flex flex-row items-center justify-between text-start text-sm sm:text-lg text-zinc-300 border border-zinc-500 rounded py-2.5 sm:py-3.5 px-4 focus:outline-none focus:ring-[#db95f9] focus:ring-2 transition duration-200">
                                        <span class="flex items-center">Select Disasters <span class="hidden sm:block">to
                                                Monitor</span></span>
                                        <div class="w-5 h-5">
                                            <IconsChevronDown />
                                        </div>
                                    </button>
                                    <Transition name="drop-down">
                                        <div v-if="show_disaster"
                                            class="absolute top-[120%] left-0 right-0 bg-[#414558] ring-1 ring-zinc-500 rounded-sm">
                                            <ul class="w-full flex flex-col gap-y-2 px-2 py-2">
                                                <li @click="selectDisaster"
                                                    class="w-full py-2.5 px-2 text-base text-zinc-200 tracking-wide capitalize cursor-pointer hover:bg-[#db95f9] hover:text-[#220052] rounded-md transition duration-200">
                                                    Covid-19
                                                </li>
                                                <li @click="selectDisaster"
                                                    class="w-full py-2.5 px-2 text-base text-zinc-200 tracking-wide capitalize cursor-pointer hover:bg-[#db95f9] hover:text-[#220052] rounded-md transition duration-200">
                                                    drought & Famine
                                                </li>
                                                <li @click="selectDisaster"
                                                    class="w-full py-2.5 px-2 text-base text-zinc-200 tracking-wide capitalize cursor-pointer hover:bg-[#db95f9] hover:text-[#220052] rounded-md transition duration-200">
                                                    Forest Fires
                                                </li>
                                            </ul>
                                        </div>
                                    </Transition>
                                </div>
                                <div v-else class="w-full relative">
                                    <VueDatepicker v-model="year" year-picker :dark="true">
                                        <template #trigger>
                                            <button
                                                class="bg-[#414558] w-full flex flex-row items-center justify-between text-start text-sm sm:text-lg text-zinc-300 border border-zinc-500 rounded py-2.5 sm:py-3.5 px-4 focus:outline-none focus:ring-[#db95f9] focus:ring-2 transition duration-200">
                                                {{ year || 'Select periods to Monitor' }}
                                                <div class="w-5 h-5">
                                                    <IconsChevronDown />
                                                </div>
                                            </button>
                                        </template>
                                    </VueDatepicker>
                                    <!-- <button
                                        @click="() => (show_disaster = !show_disaster)"
                                        class="bg-[#414558] w-full flex flex-row items-center justify-between text-start text-base sm:text-lg text-zinc-300 border border-zinc-500 rounded py-2.5 sm:py-3.5 px-4 focus:outline-none focus:ring-[#db95f9] focus:ring-2 transition duration-200"
                                    >
                                        Select Period to Monitor
                                        <div class="w-5 h-5">
                                            <IconsChevronDown />
                                        </div>
                                    </button> -->
                                    <Transition name="drop-down">
                                        <div v-if="show_disaster"
                                            class="absolute top-[120%] left-0 right-0 bg-[#414558] ring-1 ring-zinc-500 rounded-sm">
                                            <ul class="w-full flex flex-col gap-y-2 px-2 py-2">
                                                <li @click="selectDisaster"
                                                    class="w-full py-2.5 px-2 text-base text-zinc-200 tracking-wide capitalize cursor-pointer hover:bg-[#db95f9] hover:text-[#220052] rounded-md transition duration-200">
                                                    Covid-19
                                                </li>
                                                <li @click="selectDisaster"
                                                    class="w-full py-2.5 px-2 text-base text-zinc-200 tracking-wide capitalize cursor-pointer hover:bg-[#db95f9] hover:text-[#220052] rounded-md transition duration-200">
                                                    drought & Famine
                                                </li>
                                                <li @click="selectDisaster"
                                                    class="w-full py-2.5 px-2 text-base text-zinc-200 tracking-wide capitalize cursor-pointer hover:bg-[#db95f9] hover:text-[#220052] rounded-md transition duration-200">
                                                    Forest Fires
                                                </li>
                                            </ul>
                                        </div>
                                    </Transition>
                                </div>
                            </Transition>
                        </div>
                        <button @click="() => useRouter().push('/plots')"
                            class="py-2.5 sm:py-3.5 px-6 text-sm sm:text-lg bg-[#db95f9] hover:bg-violet-600 rounded uppercase font-medium tracking-wide text-[#220052] transition-colors duration-200">
                            Search
                        </button>
                    </div>
                    <div class="w-full flex flex-row items-center justify-start gap-x-2 py-3.5 sm:pr-32">
                        <p class="text-base sm:text-xl font-medium text-zinc-200">Or explore a deeper understanding</p>
                        <div
                            class="w-5 h-5 text-zinc-50 cursor-pointer hover:translate-x-1 origin-left hover:text-[#db95f9] transition duration-200">
                            <IconsArrowRight />
                        </div>
                    </div>
                </div>
            </div>
            <div class="absolute top-0 bottom-0 left-0 right-0 z-0 bg-[#414558] opacity-25"></div>
        </div>
        <div
            class="absolute px-4 py-2 left-0 sm:left-1/2 sm:-translate-x-1/2 bottom-2 flex flex-row items-center gap-x-12 z-0">
            <div class="flex flex-col gap-y-2 opacity-80">
                <div class="flex flex-row items-center gap-x-2">
                    <NuxtImg src="/icons/bacteria.png" class="w-7 sm:w-10 h-7 sm:h-10" />
                    <span
                        class="text-sm sm:text-xl font-mono text-zinc-400 font-semibold truncate tracking-wide uppercase">Covid-19</span>
                </div>
                <div class="flex flex-row items-center">
                    <NuxtImg src="3.png" class="w-28 sm:w-56 scale-110 opacity-50" />
                </div>
            </div>
            <div class="flex flex-col gap-y-2 opacity-80">
                <div class="flex flex-row items-center gap-x-2">
                    <NuxtImg src="/icons/drought.png" class="w-7 sm:w-10 h-7 sm:h-10" />
                    <span
                        class="text-sm sm:text-xl font-mono text-zinc-400 font-semibold truncate tracking-wide uppercase">Drought</span>
                </div>
                <div class="flex flex-row items-center">
                    <NuxtImg src="2.png" class="w-28 sm:w-56 scale-110 opacity-50" />
                </div>
            </div>
            <div class="flex flex-col gap-y-2 opacity-80">
                <div class="flex flex-row items-center gap-x-2">
                    <NuxtImg src="/icons/burning-tree.png" class="w-7 sm:w-10 h-7 sm:h-10" />
                    <span
                        class="text-sm sm:text-xl font-mono text-zinc-400 font-semibold truncate tracking-wide uppercase">Forest
                        Fires</span>
                </div>
                <div class="flex flex-row items-center">
                    <NuxtImg src="1.png" class="w-28 sm:w-56 scale-110 opacity-50" />
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.drop-down-enter-from {
    @apply -translate-y-2 opacity-0;
}

.drop-down-enter-active,
.drop-down-leave-active {
    @apply transition duration-200;
}

.drop-down-leave-to {
    @apply opacity-0;
}

.slide-down-enter-active,
.slide-down-leave-active {
    transition: all 0.25s ease-out;
}

.slide-down-enter-from {
    opacity: 0;
    transform: translateY(-12px);
}

.slide-down-leave-to {
    opacity: 0;
    transform: translateY(12px);
}
</style>
