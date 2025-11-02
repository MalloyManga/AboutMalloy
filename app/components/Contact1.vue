<!-- Contact1.vue -->
<script setup lang="ts">
import { SOCIAL_LINKS } from '~/constants/social-links'
import feather from '../assets/images/Feather.webp'

const rotationAngle = ref<number>(0)
const discordText = ref<string>(SOCIAL_LINKS.discord)

const handleDiscordClick = async () => {
    await navigator.clipboard.writeText(SOCIAL_LINKS.discord)
    discordText.value = 'Copied!'
    rotationAngle.value += 360
}

watch(discordText, () => {
    setTimeout(() => {
        discordText.value = SOCIAL_LINKS.discord
    }, 1000)
})
</script>

<template>
    <div class="relative size-full">
        <img :src="feather" class="mc-icon absolute z-20 inline-block size-10 right-2 -top-4">
        <div class="back_board size-full pb-2">
            <div class="front_board p-4">
                <div>
                    <span class="text-2xl mb-2 px-1 bg-[#2A5298] inline-block">
                        DM me
                    </span>
                </div>
                <div class="text-lg px-1 mb-4">
                    Whether it's about code, Minecraft, or just something interesting —
                    you're always welcome to drop by and say hi :)
                    <!-- <a href="#" class="underline underline-offset-2">
                    (e.com)
                </a> -->
                </div>
                <div class="mb-4">
                    I'm currently focused on improving my language skills and may be busy with schoolwork but I
                    will do my best to reply to every email(no spam) as soon as possible.
                </div>
                <div class="inline-block bg-[#2A5298] mb-2">
                    I'm also active on these platforms:
                </div>
                <div class="flex gap-2">
                    <a :href="SOCIAL_LINKS.github" target="_blank" class="inline-block" aria-label="GitHub Profile">
                        <IconGithub class="size-12" />
                    </a>
                    <a :href="SOCIAL_LINKS.jike" target="_blank" class="inline-block" aria-label="Jike Profile">
                        <IconJike class="size-12" />
                    </a>
                    <span class="group inline-block relative cursor-pointer" @click="handleDiscordClick" 
                        role="button" aria-label="Copy Discord username">
                        <IconDiscord class="size-12 transition-transform duration-500"
                            :style="{ transform: `rotate(${rotationAngle}deg)` }" />
                        <span
                            class="text-xs absolute -left-1/12 bg-gray-700 pl-1 rounded-sm opacity-0 transition-all duration-300 group-hover:opacity-100">
                            {{ discordText }}
                        </span>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
