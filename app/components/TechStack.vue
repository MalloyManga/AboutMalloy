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


</script>

<template>
    <div class="text-2xl mb-2">
        Tech stack
    </div>
    <div class="flex flex-wrap select-none">
        <McItemBar>
            <template #item>
                <Ts class="size-9" />
            </template>
        </McItemBar>
        <McItemBar>
            <template #item>
                <TailwindDark class="size-9" />
            </template>
        </McItemBar>
        <McItemBar>
            <template #item>
                <VueDark class="size-9" />
            </template>
        </McItemBar>
        <McItemBar>
            <template #item>
                <NuxtDark class="size-9" />
            </template>
        </McItemBar>
        <McItemBar>
            <template #item>
                <ReactDark class="size-9" />
            </template>
        </McItemBar>
        <McItemBar>
            <template #item>
                <NodejsDark class="size-9" />
            </template>
        </McItemBar>
    </div>

</template>