<script setup lang="ts">
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

const mapelement = ref<HTMLDivElement>()

let mymap: L.Map | L.LayerGroup<any>
onMounted(() => {
    console.log('Page launched')
    launchMap()
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
    <div
        id="mapid"
        ref="mapelement"
        style="height: 100%; width: 100%"
        class="z-0 border border-neutral-300 w-full h-full"
    >
        <l-map :center="[-0.28572, 36.063389]" :zoom="10">
            <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></l-tile-layer>
        </l-map>
    </div>
</template>
