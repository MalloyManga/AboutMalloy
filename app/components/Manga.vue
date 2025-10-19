<!-- components/Manga.vue -->
<script setup lang="ts">
import FoolNight from '../assets/images/FoolNight.webp'
import Frieren from '../assets/images/Frieren.webp'

</script>

<template>
    <span class="text-lg mb-2 px-1 bg-[#2A5298] inline-block">
        Manga I'm into lately
    </span>
    <div class="h-36 flex overflow-hidden select-none">
        <a href="https://bigcomics.jp/series/4a917e09503ce/" class="flex" target="_blank">
            <img :src="FoolNight" alt="FoolNight">
        </a>
        <a href="https://www.sunday-webry.com/episode/2550912966036194813#episode-comment" class="flex" target="_blank">
            <img :src="Frieren" alt="Frieren">
        </a>
    </div>

</template>