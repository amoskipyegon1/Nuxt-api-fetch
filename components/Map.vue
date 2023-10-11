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

const randomData = Array.from({ length: 10 }, () => ({
    latlng: [
        Math.random() * (90 - -90) + -90,
        Math.random() * (180 - -180) + -180,
    ],
    value: Math.floor(Math.random() * 100),
}));

function getIconUrl(value: number) {
    if (value < 25) {
        return 'https://placekitten.com/25/25';
    } else if (value < 50) {
        return 'https://placekitten.com/30/30';
    } else if (value < 75) {
        return 'https://placekitten.com/35/35';
    } else {
        return 'https://placekitten.com/40/40';
    }
}

</script>
<template>
    <div class="w-full h-full z-0">
        <l-map ref="map" :zoom="zoom" :center="[-0.289656, 36.067809]" style="z-index: inherit">
            <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" layer-type="base"
                name="OpenStreetMap"></l-tile-layer>
            <l-marker v-for="(data, index) in randomData" :key="index" :lat-lng="data.latlng">
                <l-icon :icon-size="[30, 30]" :icon-url="getIconUrl(data.value)">
                    <div class="bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center text-white">
                    </div>
                </l-icon>
            </l-marker>
        </l-map>
    </div>
</template>

s
