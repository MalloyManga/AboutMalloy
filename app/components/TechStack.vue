<!-- components/TechStack.vue -->
<script setup lang="ts">
import { TECH_STACKS } from '~/constants/tech-stack'
import McItemBar from './McItemBar.vue'

const techStacks = TECH_STACKS

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