<!-- components/TechStack.vue -->
<script setup lang="ts">
import McItemBar from './McItemBar.vue'
import NodejsDark from './icon/NodejsDark.vue'
import NodejsLight from './icon/NodejsLight.vue'
import NuxtDark from './icon/NuxtDark.vue'
import NuxtLight from './icon/NuxtLight.vue'
import ReactDark from './icon/ReactDark.vue'
import ReactLight from './icon/ReactLight.vue'
import TailwindDark from './icon/TailwindDark.vue'
import TailwindLight from './icon/TailwindLight.vue'
import Ts from './icon/Ts.vue'
import VueDark from './icon/VueDark.vue'
import VueLight from './icon/VueLight.vue'
import ExpressDark from './icon/ExpressDark.vue'
import NestDark from './icon/NestDark.vue'

interface TechStack {
    stack: Component,
    link: string
}

const techStacks: TechStack[] = [
    { stack: Ts, link: 'https://www.typescriptlang.org/' },
    { stack: TailwindDark, link: 'https://tailwindcss.com/' },
    { stack: VueDark, link: 'https://vuejs.org/' },
    { stack: NuxtDark, link: 'https://nuxt.com/' },
    { stack: ReactDark, link: 'https://react.dev/' },
    { stack: NodejsDark, link: 'https://nodejs.org/' },
    { stack: NestDark, link: 'https://nestjs.com/' },
    { stack: ExpressDark, link: 'https://expressjs.com/' }
]

</script>

<template>
    <div class="text-2xl mb-2 px-1 bg-[#2A5298] inline-block">
        Tech stack
    </div>
    <div class="flex flex-wrap select-none">
        <McItemBar v-for="techStack in techStacks">
            <template #item>
                <a :href="techStack.link" target="_blank">
                    <component :is="techStack.stack" class="size-9" />
                </a>
            </template>
        </McItemBar>
    </div>

</template>