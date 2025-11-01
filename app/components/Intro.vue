<!-- components/Intro.vue -->
<script setup lang="ts">
import MePic from './MePic.vue'
import TechStack from './TechStack.vue'
import Manga from './Manga.vue'
import NameTag from '../assets/images/NameTag.webp'

</script>

<template>
    <div class="back_board size-full pb-2">
        <div class="front_board p-4 grid grid-cols-[1fr_7.5rem]">
            <div class="text-lg flex flex-col">
                <div>
                    <img :src="NameTag" alt="Malloy" class="mc-icon size-8 inline-block">
                    Hi, I'm Malloy
                </div>
                <div class="mt-2">
                    A 18yo front-end novice, loves Web, MC & manga
                </div>
            </div>
            <MePic />
            <div class="self-center col-start-1 col-end-3 pb-12">
                <TechStack />
            </div>
            <div class="col-start-1 col-end-3 self-end">
                <Manga />
            </div>
        </div>
    </div>
</template>
