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
    <div class="back_board size-full pb-2 bg-[#3A4F7F]">
        <div class="mc-text size-full border-4 bg-[#5371ad] p-4 text-white flex flex-col">
            <div class="flex gap-4 items-center mb-4">
                <img :src="Clock" alt="recent" class="mc-icon inline-block size-10">
                <span class="text-2xl px-1 bg-[#2A5298] inline-block">
                    Recent Activity
                </span>
            </div>
            <ul class="grid gap-3 max-h-[40vh] overflow-auto py-1">
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
    </div>
</template>

<style scoped>
.mc-text {
    font-family: 'MC';
    /* box-shadow: 0 -4px rgb(12 24 44 / 50%) inset,
        0 4px rgb(255 255 255 / 25%) inset, -4px 0 rgb(12 24 44 / 50%) inset,
        4px 0 rgb(255 255 255 / 25%) inset; */
    border-image: url("data:image/svg+xml,%3Csvg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_1310_2574)'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M4 0H3V1H2V2H1V3H0V4V5H1V6H2V7H3V8H4H5V7H6V6H7V5H8V4V3H7V2H6V1H5V0H4ZM5 1V2H6V3H7V4V5H6V6H5V7H4H3V6H2V5H1V4V3H2V2H3V1H4H5Z' fill='%23475569'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_1310_2574'%3E%3Crect width='8' height='8' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A") 3 / 6px / 0px stretch;
    clip-path: polygon(6px 0px, 6px 2px, 4px 2px, 4px 4px, 2px 4px, 2px 6px, 0px 6px, 0px 8px, 0px calc(100% - 6px), 2px calc(100% - 6px), 2px calc(100% - 4px), 4px calc(100% - 4px), 4px calc(100% - 2px), 6px calc(100% - 2px), 6px calc(100% + 0px), 8px calc(100% + 0px), calc(100% - 6px) calc(100% + 0px), calc(100% - 6px) calc(100% - 2px), calc(100% - 4px) calc(100% - 2px), calc(100% - 4px) calc(100% - 4px), calc(100% - 2px) calc(100% - 4px), calc(100% - 2px) calc(100% - 6px), calc(100% + 0px) calc(100% - 6px), calc(100% + 0px) calc(100% - 8px), calc(100% + 0px) 6px, calc(100% - 2px) 6px, calc(100% - 2px) 4px, calc(100% - 4px) 4px, calc(100% - 4px) 2px, calc(100% - 6px) 2px, calc(100% - 6px) 0px, calc(100% - 8px) 0px);
}

.back_board {
    border-image: url("data:image/svg+xml,%3Csvg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_1310_2574)'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M4 0H3V1H2V2H1V3H0V4V5H1V6H2V7H3V8H4H5V7H6V6H7V5H8V4V3H7V2H6V1H5V0H4ZM5 1V2H6V3H7V4V5H6V6H5V7H4H3V6H2V5H1V4V3H2V2H3V1H4H5Z' fill='%23475569'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_1310_2574'%3E%3Crect width='8' height='8' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A") 3 / 6px / 0px stretch;
    clip-path: polygon(6px 0px, 6px 2px, 4px 2px, 4px 4px, 2px 4px, 2px 6px, 0px 6px, 0px 8px, 0px calc(100% - 6px), 2px calc(100% - 6px), 2px calc(100% - 4px), 4px calc(100% - 4px), 4px calc(100% - 2px), 6px calc(100% - 2px), 6px calc(100% + 0px), 8px calc(100% + 0px), calc(100% - 6px) calc(100% + 0px), calc(100% - 6px) calc(100% - 2px), calc(100% - 4px) calc(100% - 2px), calc(100% - 4px) calc(100% - 4px), calc(100% - 2px) calc(100% - 4px), calc(100% - 2px) calc(100% - 6px), calc(100% + 0px) calc(100% - 6px), calc(100% + 0px) calc(100% - 8px), calc(100% + 0px) 6px, calc(100% - 2px) 6px, calc(100% - 2px) 4px, calc(100% - 4px) 4px, calc(100% - 4px) 2px, calc(100% - 6px) 2px, calc(100% - 6px) 0px, calc(100% - 8px) 0px);
}

.recent-item {
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