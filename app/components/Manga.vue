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
        <!-- <a href="https://bigcomics.jp/series/4a917e09503ce/" class="">
        </a> -->
        <!-- 这里为何加上了 flex 布局之后 -->
        <a href="https://bigcomics.jp/series/4a917e09503ce/" class="flex" target="_blank">
            <img :src="FoolNight" alt="FoolNight">
        </a>
        <a href="https://www.sunday-webry.com/episode/2550912966036194813#episode-comment" class="flex" target="_blank">
            <img :src="Frieren" alt="Frieren">
        </a>
    </div>

</template>