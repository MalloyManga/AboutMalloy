<!-- components/Now.vue -->
<script setup lang="ts">
import SignIcon from '../assets/images/Sign.webp'
import Melon from '../assets/images/Melon.webp'

</script>

<template>
    <div class="back_board size-full pb-2">
        <div class="front_board p-4">
            <div class="flex gap-4 items-center">
                <img :src="SignIcon" alt="Now" class="mc-icon size-10 inline-block">
                <span class="text-2xl px-1 bg-[#2A5298] inline-block">
                    Now
                </span>
            </div>
            <div class="ml-12 mt-2 flex gap-2 items-start">
                <img :src="Melon" alt="summer" class="mc-icon size-8 inline-block">
                <ul class="inline-flex flex-col gap-2 mt-1">
                    <li>
                        > Working on a project named EasyTailwind,a tool that helps Tailwind users save time
                    </li>
                    <li>
                        > Learning back-end
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
