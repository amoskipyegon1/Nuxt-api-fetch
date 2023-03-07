<script setup lang="ts">
import 'leaflet/dist/leaflet.css'
import { LMap, LTileLayer, LIcon, LMarker } from '@vue-leaflet/vue-leaflet'

onMounted(() => {
    setTimeout(function () {
        window.dispatchEvent(new Event('resize'))
    }, 500)
})

const zoom = ref<number>(5)
const iconWidth = ref<number>(25)
const iconHeight = ref<number>(40)
const iconUrl = ref<string>(`https://placekitten.com/${iconWidth.value}/${iconHeight.value}`)
</script>
<template>
    <div class="w-full h-full z-0">
        <l-map ref="map" :zoom="zoom" :center="[-0.289656, 36.067809]" style="z-index: inherit">
            <l-tile-layer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                layer-type="base"
                name="OpenStreetMap"
            ></l-tile-layer>
            <l-marker :lat-lng="[-0.289656, 36.067806]">
                <l-icon class="flex items-center justify-center">
                    <button class="w-6 h-6 bg-orange-500/90 rounded-full -translate-x-1/4 -translate-y-1/4"></button>
                </l-icon>
            </l-marker>
            <l-marker :lat-lng="[-0.489644, 35.06782]">
                <l-icon :icon-size="[10, 10]">
                    <button class="w-6 h-6 bg-blue-500/90 rounded-full -translate-x-1/4 -translate-y-1/4"></button>
                </l-icon>
            </l-marker>
            <l-marker :lat-lng="[-0.289656, 36.067806]">
                <l-icon class="flex items-center justify-center">
                    <button class="w-6 h-6 bg-orange-500/90 rounded-full -translate-x-1/4 -translate-y-1/4"></button>
                </l-icon>
            </l-marker>
            <l-marker :lat-lng="[1.9644, 38.06782]">
                <l-icon :icon-size="[10, 10]">
                    <button class="w-6 h-6 bg-green-500/90 rounded-full -translate-x-1/4 -translate-y-1/4"></button>
                </l-icon>
            </l-marker>
        </l-map>
    </div>
</template>

s
