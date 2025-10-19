<!-- components/Intro.vue -->
<script setup lang="ts">
import MePic from './MePic.vue'
import TechStack from './TechStack.vue'
import Manga from './Manga.vue'
import NameTag from '../assets/images/NameTag.webp'

</script>

<template>
    <div class="back_board size-full bg-[#3A4F7F]">
        <div class="mc-text border-4 w-full h-[99%] bg-[#5371ad] p-4 grid grid-cols-[1fr_7.5rem] text-white">
            <div class="bg-pink-30 text-lg flex flex-col">
                <div>
                    <img :src="NameTag" alt="Malloy" class="mc-icon size-8 inline-block">
                    Hi, I'm Malloy
                </div>
                <div class="mt-2">
                    A 18yo front-end novice, loves Web, MC & manga
                </div>
            </div>
            <MePic />
            <div class="self-center col-start-1 col-end-3">
                <TechStack />
            </div>
            <div class="col-start-1 col-end-3 self-end">
                <Manga />
            </div>
        </div>
    </div>
</template>

<style scoped>
.mc-text {
    font-family: 'MC';
    border-image: url("data:image/svg+xml,%3Csvg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_1310_2574)'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M4 0H3V1H2V2H1V3H0V4V5H1V6H2V7H3V8H4H5V7H6V6H7V5H8V4V3H7V2H6V1H5V0H4ZM5 1V2H6V3H7V4V5H6V6H5V7H4H3V6H2V5H1V4V3H2V2H3V1H4H5Z' fill='%23475569'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_1310_2574'%3E%3Crect width='8' height='8' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A") 3 / 6px / 0px stretch;
    clip-path: polygon(6px 0px, 6px 2px, 4px 2px, 4px 4px, 2px 4px, 2px 6px, 0px 6px, 0px 8px, 0px calc(100% - 6px), 2px calc(100% - 6px), 2px calc(100% - 4px), 4px calc(100% - 4px), 4px calc(100% - 2px), 6px calc(100% - 2px), 6px calc(100% + 0px), 8px calc(100% + 0px), calc(100% - 6px) calc(100% + 0px), calc(100% - 6px) calc(100% - 2px), calc(100% - 4px) calc(100% - 2px), calc(100% - 4px) calc(100% - 4px), calc(100% - 2px) calc(100% - 4px), calc(100% - 2px) calc(100% - 6px), calc(100% + 0px) calc(100% - 6px), calc(100% + 0px) calc(100% - 8px), calc(100% + 0px) 6px, calc(100% - 2px) 6px, calc(100% - 2px) 4px, calc(100% - 4px) 4px, calc(100% - 4px) 2px, calc(100% - 6px) 2px, calc(100% - 6px) 0px, calc(100% - 8px) 0px);
}

.back_board {
    border-image: url("data:image/svg+xml,%3Csvg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_1310_2574)'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M4 0H3V1H2V2H1V3H0V4V5H1V6H2V7H3V8H4H5V7H6V6H7V5H8V4V3H7V2H6V1H5V0H4ZM5 1V2H6V3H7V4V5H6V6H5V7H4H3V6H2V5H1V4V3H2V2H3V1H4H5Z' fill='%23475569'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_1310_2574'%3E%3Crect width='8' height='8' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A") 3 / 6px / 0px stretch;
    clip-path: polygon(6px 0px, 6px 2px, 4px 2px, 4px 4px, 2px 4px, 2px 6px, 0px 6px, 0px 8px, 0px calc(100% - 6px), 2px calc(100% - 6px), 2px calc(100% - 4px), 4px calc(100% - 4px), 4px calc(100% - 2px), 6px calc(100% - 2px), 6px calc(100% + 0px), 8px calc(100% + 0px), calc(100% - 6px) calc(100% + 0px), calc(100% - 6px) calc(100% - 2px), calc(100% - 4px) calc(100% - 2px), calc(100% - 4px) calc(100% - 4px), calc(100% - 2px) calc(100% - 4px), calc(100% - 2px) calc(100% - 6px), calc(100% + 0px) calc(100% - 6px), calc(100% + 0px) calc(100% - 8px), calc(100% + 0px) 6px, calc(100% - 2px) 6px, calc(100% - 2px) 4px, calc(100% - 4px) 4px, calc(100% - 4px) 2px, calc(100% - 6px) 2px, calc(100% - 6px) 0px, calc(100% - 8px) 0px);
}
</style>