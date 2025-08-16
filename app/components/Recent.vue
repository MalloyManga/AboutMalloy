<!-- components/Recent.vue -->
<script setup lang="ts">
import Clock from '../assets/images/Clock.webp'

interface RecentActivity {
    time: string
    activity: string
    link?: string
    nuxtLink?: string
}

const recentActivities: RecentActivity[] = [
    { time: '2025/08/05', activity: 'MC render "Endless Dream"', nuxtLink: '/renders' },
    { time: '2025/7/30', activity: 'Mc render "Nine of Swords"', nuxtLink: '/renders' },
    { time: '2025/7/15', activity: 'Launch a costum-component-library', link: 'https://malloymanga.github.io/Custom-component-library/' },
]

</script>

<template>
    <div class="mc-text border-4 size-full bg-[#5371ad] p-4 text-white flex flex-col ">
        <div class="flex gap-4 items-center mb-4">
            <img :src="Clock" alt="recent" class="inline-block size-10">
            <span class="text-2xl">
                Recent Activity
            </span>
        </div>
        <ul class="grid gap-3 overflow-auto">
            <li v-for="(item, index) in recentActivities" :key="index"
                class="recent-item bg-[#608bc1] h-fit py-1 px-2 cursor-pointer hover:bg-[#2a5298]">
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

.recent-item {
    /* clip-path: polygon(4px 0px, 4px 2px,
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
            calc(100% - 4px) 0px); */
    box-shadow: 0 -4px #2a5298 inset,
        -4px 0 #2a5298 inset,
        0 4px #cdefff inset,
        4px 0 #cdefff inset,
        -3px 0 #133e87,
        0 -3px #133e87,
        3px 0 #133e87,
        0 3px #133e87;
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