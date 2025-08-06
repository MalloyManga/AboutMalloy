<!-- components/Now.vue -->
<script setup lang="ts">
import SignIcon from '../assets/images/Sign.webp'
import Melon from '../assets/images/Melon.webp'

</script>

<template>
    <div class="mc-text absolute top-15 left-165 border-4 w-lg h-48 bg-[#5371ad] p-4 text-white">
        <div class="flex gap-4 items-center">
            <img :src="SignIcon" alt="Now" class="size-10 inline-block">
            <span class="text-2xl">
                Now
            </span>
        </div>
        <div class="ml-12 mt-2 flex gap-2 items-start">
            <img :src="Melon" alt="summer" class="size-8 inline-block">
            <!-- <span>
                    Enjoy summer!
            </span> -->
            <ul class="inline-flex flex-col gap-2 mt-1">
                <li>
                    Enjoy summer!
                </li>
                <li>
                    Learn back-end
                </li>
            </ul>
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