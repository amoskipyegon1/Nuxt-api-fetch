<script setup lang="ts">
import VueDatepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

const emits = defineEmits<{
    (e: 'searchData'): void
}>()
const disaster = ref<boolean>(false)
const selected_disaster = ref<string>('Select Disasters to Monitor')
const selectDisaster = (payload: string): void => {
    selected_disaster.value = payload
    disaster.value = !disaster.value
}
const region = ref<boolean>(false)
const selected_region = ref<string>('Select Regions to Monitor')
const selectRegion = (payload: string): void => {
    selected_region.value = payload
    region.value = !region.value
}
const toggleSelects = (): void => {
    if (disaster.value === false) {
        disaster.value = true
        return
    } else {
        region.value = true
        return
    }
}
const year = ref(new Date().getFullYear())
</script>
<template>
    <div class="w-full flex flex-col sm:flex-row items-center justify-between gap-x-2 gap-y-6 py-6">
        <div class="flex flex-col gap-y-1 relative w-full">
            <button
                @click="() => ((disaster = !disaster), (region = false))"
                class="bg-[#414558] capitalize w-full flex flex-row items-center justify-between gap-x-4 text-start text-base sm:text-lg text-zinc-300 border border-zinc-500 rounded py-2.5 sm:py-3.5 px-4 focus:outline-none focus:ring-[#db95f9] focus:ring-2 transition duration-200"
            >
                {{ selected_disaster }}
                <div class="w-5 h-5">
                    <IconsChevronDown />
                </div>
            </button>
            <div
                v-if="disaster"
                class="absolute bottom-[120%] left-0 right-0 bg-[#414558] ring-1 ring-zinc-500 rounded-sm z-20"
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
        <div class="flex flex-col gap-y-1 w-full relative">
            <button
                @click="() => ((region = !region), (disaster = false))"
                class="bg-[#414558] w-full flex flex-row items-center justify-between gap-x-4 text-start text-base sm:text-lg text-zinc-300 border border-zinc-500 rounded py-2.5 sm:py-3.5 px-4 focus:outline-none focus:ring-[#db95f9] focus:ring-2 transition duration-200"
            >
                {{ selected_region }}
                <div class="w-5 h-5">
                    <IconsChevronDown />
                </div>
            </button>
            <div
                v-if="region"
                class="absolute bottom-[120%] left-0 right-0 bg-[#414558] ring-1 ring-zinc-500 rounded-sm z-20"
            >
                <ul class="w-full flex flex-col gap-y-2 px-2 py-2">
                    <li
                        @click="selectRegion('East Asia & Pacific')"
                        class="w-full py-2.5 px-2 text-base text-zinc-200 tracking-wide capitalize cursor-pointer hover:bg-[#db95f9] hover:text-[#220052] rounded-md transition duration-200 truncate"
                    >
                        East Asia & Pacific
                    </li>
                    <li
                        @click="selectRegion('Europe & Central Asia')"
                        class="w-full py-2.5 px-2 text-base text-zinc-200 tracking-wide capitalize cursor-pointer hover:bg-[#db95f9] hover:text-[#220052] rounded-md transition duration-200 truncate"
                    >
                        Europe & Central Asia
                    </li>
                    <li
                        @click="selectRegion('Latin America & Caribbean')"
                        class="w-full py-2.5 px-2 text-base text-zinc-200 tracking-wide capitalize cursor-pointer hover:bg-[#db95f9] hover:text-[#220052] rounded-md transition duration-200 truncate"
                    >
                        Latin America & Caribbean
                    </li>

                    <li
                        @click="selectRegion('North America')"
                        class="w-full py-2.5 px-2 text-base text-zinc-200 tracking-wide capitalize cursor-pointer hover:bg-[#db95f9] hover:text-[#220052] rounded-md transition duration-200 truncate"
                    >
                        North America
                    </li>

                    <li
                        @click="selectRegion('Middle East & North Africa')"
                        class="w-full py-2.5 px-2 text-base text-zinc-200 tracking-wide capitalize cursor-pointer hover:bg-[#db95f9] hover:text-[#220052] rounded-md transition duration-200 truncate"
                    >
                        Middle East & North Africa
                    </li>
                    <li
                        @click="selectRegion('South Asia')"
                        class="w-full py-2.5 px-2 text-base text-zinc-200 tracking-wide capitalize cursor-pointer hover:bg-[#db95f9] hover:text-[#220052] rounded-md transition duration-200 truncate"
                    >
                        South Asia
                    </li>
                    <li
                        @click="selectRegion('Sub-Saharan Africa')"
                        class="w-full py-2.5 px-2 text-base text-zinc-200 tracking-wide capitalize cursor-pointer hover:bg-[#db95f9] hover:text-[#220052] rounded-md transition duration-200 truncate"
                    >
                        Sub-Saharan Africa
                    </li>
                </ul>
            </div>
        </div>
        <div class="flex flex-col gap-y-1 w-full">
            <VueDatepicker v-model="year" year-picker :dark="true">
                <template #trigger>
                    <button
                        class="bg-[#414558] w-full flex flex-row items-center justify-between gap-x-4 text-start text-base sm:text-lg text-zinc-300 border border-zinc-500 rounded py-2.5 sm:py-3.5 px-4 focus:outline-none focus:ring-[#db95f9] focus:ring-2 transition duration-200"
                    >
                        {{ year || 'Select periods to Monitor' }}
                        <div class="w-5 h-5">
                            <IconsChevronDown />
                        </div>
                    </button>
                </template>
            </VueDatepicker>
        </div>
        <div class="w-full sm:w-auto">
            <button
                @click="emits('searchData')"
                class="w-full py-3.5 px-10 text-base sm:text-lg bg-[#db95f9] hover:bg-violet-600 rounded uppercase font-medium tracking-wider text-[#220052] hover:text-white transition-colors duration-200 border border-[#db95f9]"
            >
                ANAlyze
            </button>
        </div>
    </div>
</template>
