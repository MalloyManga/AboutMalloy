<!-- default.vue -->
<script setup lang="ts">
import Title from '~/components/Title.vue'
import McItemBar from '~/components/McItemBar.vue'
import DiamondPickaxe from '../assets/images/DiamondPickaxe.webp'

const { isPickaxeCursorActive, setIsPickaxeCursorActive } = usePickaxeStage()
const cursorX = ref(0)
const cursorY = ref(0)


function updateCursorPosition(event: MouseEvent) {
    cursorX.value = event.clientX
    cursorY.value = event.clientY
}

watch(isPickaxeCursorActive, (isActive) => {
    if (isActive) {
        window.addEventListener('mousemove', updateCursorPosition)
    } else {
        window.removeEventListener('mousemove', updateCursorPosition)
    }
})
</script>

<template>
    <div class="body bg-cover bg-center bg-no-repeat bg-fixed grid grid-cols-[6.25rem_1fr] gap-4 h-screen w-screen"
        :class="{ 'pickaxe-cursor-active': isPickaxeCursorActive }">

        <img v-if="isPickaxeCursorActive" :src="DiamondPickaxe" alt="Pickaxe Cursor"
            class="fixed z-50 size-9 pointer-events-none"
            :style="{ left: `${cursorX}px`, top: `${cursorY}px`, transform: 'translate(-50%, -50%)' }" />

        <header class="flex flex-col justify-between size-full">
            <Nav />
            <McItemBar @click="setIsPickaxeCursorActive" class="cursor-pointer size-fit">
                <template #item>
                    <img v-if="!isPickaxeCursorActive" :src="DiamondPickaxe" alt="DiamondPickaxe" class="size-9">
                </template>
            </McItemBar>
        </header>

        <main class="size-full pb-8 overflow-auto">
            <Title />
            <NuxtPage />
        </main>
    </div>
</template>

<style scoped>
.body {
    background-image: url('../assets/images/EndlessDream.webp');
}

.body.pickaxe-cursor-active,
.body.pickaxe-cursor-active * {
    cursor: none;
}
</style>