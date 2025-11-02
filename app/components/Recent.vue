<!-- components/Recent.vue -->
<script setup lang="ts">
import { RECENT_ACTIVITIES } from '~/constants/recent-activities'
import Clock from '../assets/images/Clock.webp'

const recentActivities = RECENT_ACTIVITIES

</script>

<template>
    <div class="back_board size-full pb-2">
        <div class="front_board p-4 flex flex-col">
            <div class="flex gap-4 items-center mb-4">
                <img :src="Clock" alt="recent" class="mc-icon inline-block size-10">
                <span class="text-2xl px-1 bg-[#2A5298] inline-block">
                    Recent Activity
                </span>
            </div>
            <ul class="grid gap-3 max-h-[40vh] overflow-auto py-1">
                <li v-for="(item, index) in recentActivities" :key="index"
                    class="recent-item border-4 border-[#133e87] bg-[#608bc1] h-fit py-1 px-2 cursor-pointer hover:bg-[#2a5298]">
                    <a v-if="item.link" :href="item.link" class="flex flex-col" target="_blank">
                        <span class="bg-[#2a5298] size-fit px-1 my-1">
                            {{ item.time }}
                        </span>
                        <span class="px-1 underline">
                            {{ item.activity }}
                        </span>
                    </a>
                    <NuxtLink v-if="item.nuxtLink" :to="item.nuxtLink" class="flex flex-col">
                        <span class="bg-[#2a5298] size-fit px-1 my-1">
                            {{ item.time }}
                        </span>
                        <span class="px-1 underline">
                            {{ item.activity }}
                        </span>
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.recent-item {
    box-shadow: 0 -4px #2a5298 inset,
        -4px 0 #2a5298 inset,
        0 4px #cdefff inset,
        4px 0 #cdefff inset;
    clip-path: polygon(0px 4px,
            4px 4px,
            4px 0px,
            calc(100% - 4px) 0px,
            calc(100% - 4px) 4px,
            100% 4px,
            100% calc(100% - 4px),
            calc(100% - 4px) calc(100% - 4px),
            calc(100% - 4px) 100%,
            4px 100%,
            4px calc(100% - 4px),
            0px calc(100% - 4px));

}

.recent-item:hover {
    box-shadow: 0 -4px #608bc1 inset,
        -4px 0px #608bc1 inset,
        -3px 0 #133e87,
        0 -3px #133e87,
        3px 0 #133e87,
        0 3px #133e87;
}
</style>