<script setup lang="ts">
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

const currentpin = ref<number[]>([-0.28572, 36.053389])
const mapelement = ref<HTMLDivElement>()

let mymap: L.Map | L.LayerGroup<any>
onMounted(() => {
    console.log('Page launched')
    launchMap()
    // mymap.on('click', function (e) {
    //     coords.value = { lat: e.latlng.lat, long: e.latlng.lng };
    // });
    setTimeout(function () {
        window.dispatchEvent(new Event('resize'))
    }, 500)
})

const launchMap = (): void => {
    mymap = L.map(mapelement.value as HTMLElement).setView([-0.28572, 36.063389], 15)
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 6,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(mymap)
}
</script>
<template>
    <section class="w-full flex flex-col gap-y-2">
        <NavBar />
        <div class="px-4 md:px-8 lg:px-12 xl:px-32 flex flex-col lg:grid grid-cols-10 gap-x-0 mt-24">
            <div class="col-span-3 flex flex-col gap-y-8 border border-neutral-300 lg:border-r-0">
                <div class="w-full flex flex-row items-center py-3 px-2 bg-teal-600 shadow-sm border border-teal-600">
                    <h3 class="text-lg sm:text-xl text-white font-medium tracking-wide">
                        Track insights happening by Regions
                    </h3>
                </div>
                <div class="flex flex-col gap-y-5 sm:gap-y-6 w-full px-6 lg:px-2.5">
                    <div class="flex flex-col gap-y-1 w-full">
                        <label for="region" class="text-base xl:text-lg text-neutral-800 font-normal"
                            >Find By Region</label
                        >
                        <input
                            id="location"
                            type="text"
                            class="block w-full py-2.5 sm:py-3 pl-4 tracking-wide text-sm md:text-base xl:text-lg text-gray-900 border border-gray-200 rounded-sm bg-gray-50 focus:ring-1 focus:ring-green-500 focus:border-green-500 focus:outline-none transition duration-200"
                            placeholder="Enter location"
                        />
                    </div>
                    <div class="flex flex-col gap-y-1 w-full">
                        <label for="disaster" class="text-base xl:text-lg text-neutral-800 font-normal"
                            >Find By Disaster</label
                        >
                        <input
                            id="disaster"
                            type="text"
                            class="block w-full py-2.5 sm:py-3 pl-4 tracking-wide text-sm md:text-base xl:text-lg text-gray-900 border border-gray-200 rounded-sm bg-gray-50 focus:ring-1 focus:ring-green-500 focus:border-green-500 focus:outline-none transition duration-200"
                            placeholder="Select type"
                        />
                    </div>
                    <div class="flex flex-col gap-y-1 w-full">
                        <label for="period" class="text-base xl:text-lg text-neutral-800 font-normal"
                            >Find during this period</label
                        >
                        <input
                            id="period"
                            type="text"
                            class="block w-full py-2.5 sm:py-3 pl-4 tracking-wide text-sm md:text-base xl:text-lg text-gray-900 border border-gray-200 rounded-sm bg-gray-50 focus:ring-1 focus:ring-green-500 focus:border-green-500 focus:outline-none transition duration-200"
                            placeholder="Select this time"
                        />
                    </div>
                    <div class="w-full flex flex-row items-center pt-1 pb-8">
                        <button
                            class="py-2 px-8 text-base sm:text-lg tracking-wide bg-green-500 rounded-md text-white font-medium shadow-lg hover:shadow-2xl hover:bg-green-600 focus:bg-green-600 focus:shadow-2xl transition duration-200"
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>
            <div
                class="relative col-span-7 flex flex-col items-center gap-y-14 bg-custom-color rounded-3xl h-[80vh] sm:h-[80vh]"
            >
                <div
                    id="mapid"
                    ref="mapelement"
                    style="height: 100%; width: 100%"
                    class="m-0 p-0 z-0 border border-neutral-300"
                >
                    <l-map :center="[-0.28572, 36.063389]" :zoom="10">
                        <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></l-tile-layer>
                    </l-map>
                </div>
                <div class="legend backdrop-blur absolute top-0 right-0 py-1.5 sm:py-3 px-3 flex flex-col gap-y-1 z-40">
                    <div class="">
                        <span class="text-sm text-neutral-700">High</span>
                    </div>
                    <div class="flex flex-col w-full relative">
                        <div class="absolute top-0 translate-y-0 left-0 -translate-x-[110%]">
                            <span class="text-sm text-neutral-700 backdrop-blur">10000</span>
                        </div>
                        <button class="h-7 w-full bg-orange-500"></button>
                        <button class="h-7 w-full bg-orange-300"></button>
                        <button class="h-7 w-full bg-orange-200"></button>
                        <button class="h-7 w-full bg-yellow-200"></button>
                        <button class="h-7 w-full bg-yellow-50"></button>
                        <div class="absolute backdrop-blur bottom-0 translate-y-0 left-0 -translate-x-[110%]">
                            <span class="text-sm text-neutral-700">800</span>
                        </div>
                    </div>
                    <div class="">
                        <span class="text-sm text-neutral-700">Low</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
