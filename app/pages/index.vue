<!-- pages/index.vue -->
<script setup lang="ts">
const { isPickaxeCursorActive } = usePickaxeStage()

// 为每个卡片创建一个破坏状态
const cardStages = ref({
    intro: 0,
    now: 0,
    recent: 0,
})

function handleCardClick(cardName: 'intro' | 'now' | 'recent') {
    if (!isPickaxeCursorActive.value) return

    if (cardStages.value[cardName] <= 10) {
        cardStages.value[cardName]++
    }
}

</script>

<template>
    <div class="lg:h-6/7 grid lg:grid-cols-[min(40%,40rem)_1fr] lg:grid-rows-[16rem_1fr] gap-4 lg:px-16 sm:px-8 px-2">
        <div class="relative lg:row-start-1 lg:row-end-3 lg:h-5/6" @click="handleCardClick('intro')"
            :class="{ 'opacity-0': cardStages.intro > 10 }">
            <Intro />
            <DestroyOverlay :stage="cardStages.intro" />
        </div>
        <div class="lg:relative lg:pl-12" @click="handleCardClick('now')" :class="{ 'opacity-0': cardStages.now > 10 }">
            <div class="size-full lg:absolute relative lg:-top-16">
                <Now />
                <DestroyOverlay :stage="cardStages.now" />
            </div>
        </div>
        <div class="relative lg:pl-8" @click="handleCardClick('recent')"
            :class="{ 'opacity-0': cardStages.recent > 10 }">
            <div class="size-full relative">
                <Recent />
                <DestroyOverlay :stage="cardStages.recent" />
            </div>
        </div>
    </div>

</template>