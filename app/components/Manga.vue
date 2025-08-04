<!-- components/Manga.vue -->
<script setup lang="ts">
import FoolNight from '../assets/images/FoolNight.jpeg'
import Frieren from '../assets/images/Frieren.jpg'

</script>

<template>
    <span class="text-lg">
        Manga I'm into lately
    </span>
    <div class="h-36 flex overflow-hidden">
        <img :src="FoolNight" alt="FoolNight" class="object-contain transition-all duration-300 ease-in-out">
        <img :src="Frieren" alt="Frieren" class="object-contain transition-all duration-300 ease-in-out">
    </div>


</template>