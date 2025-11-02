<!-- pages.about.vue -->
<script setup lang="ts">
const { cardStages, handleCardClick, isCardDestroyed } = useCardDestroy({
    about1: 0
})
</script>

<template>
    <div class="lg:h-6/7 grid lg:grid-cols-[1fr_min(45%,40rem)] gap-4 lg:px-16 sm:px-8 px-2">
        <div class="relative lg:row-start-1 lg:row-end-2" @click="handleCardClick('about1')"
            :class="{ 'opacity-0': isCardDestroyed('about1') }">
            <About1 />
            <DestroyOverlay :stage="cardStages.about1" />
        </div>
    </div>
</template>
