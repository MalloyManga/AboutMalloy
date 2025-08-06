<!-- components/Intro.vue -->
<script setup lang="ts">
import MePic from './MePic.vue'
import TechStack from './TechStack.vue'
import Manga from './Manga.vue'
import NameTag from '../assets/images/NameTag.webp'

</script>

<template>
    <!-- 怎么全是div？ -->
    <div
        class="mc-text border-4 w-md h-140 absolute top-32 left-40 bg-[#5371ad] p-4 grid grid-cols-[1fr_7.5rem] grid-rows-[7.5rem_1fr] text-white">
        <div class="text-lg flex flex-col justify-center">
            <div class="">
                <img :src="NameTag" alt="Me" class="size-8 inline-block">
                Hi, I'm Malloy
            </div>
            <div class="mt-2">
                A 18yo front-end novice, loves Web, MC & manga
            </div>
        </div>
        <MePic />
        <div>
            <TechStack />
        </div>
        <div class="col-start-1 col-end-3">
            <!-- 这里我只是 指定了 col 但是 row 没指定 所以会出现第三行的情况 -->
            <Manga />
        </div>
    </div>


</template>

<style scoped>
.mc-text {
    font-family: 'MC';
    border-image: url(../assets/images/PixelBorder.svg) 2;
    box-shadow: 0 -4px rgb(12 24 44 / 50%) inset,
        0 4px rgb(255 255 255 / 25%) inset, -4px 0 rgb(12 24 44 / 50%) inset,
        4px 0 rgb(255 255 255 / 25%) inset;
    clip-path: polygon(4px 0px, 4px 2px,
            2px 2px, 2px 4px,
            0px 4px, 0px calc(100% - 4px),
            2px calc(100% - 4px), 2px calc(100% - 2px),
            4px calc(100% - 2px), 4px 100%,
            calc(100% - 4px) 100%, calc(100% - 4px) calc(100% - 2px),
            calc(100% - 2px) calc(100% - 2px),
            calc(100% - 2px) calc(100% - 4px),
            100% calc(100% - 4px), 100% calc(100% - 4px),
            100% 4px, calc(100% - 2px) 4px,
            calc(100% - 2px) 2px, calc(100% - 4px) 2px,
            calc(100% - 4px) 0px);
}
</style>