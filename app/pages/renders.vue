<!-- renders.vue -->
<script setup lang="ts">
const { cardStages, handleCardClick, isCardDestroyed } = useCardDestroy({
    renders: 0
})
</script>

<template>
    <div class="lg:h-6/7 lg:px-16 sm:px-8 px-2" @click="handleCardClick('renders')"
        :class="{ 'opacity-0': isCardDestroyed('renders') }">
        <div class="relative">
            <RendersPic />
            <DestroyOverlay :stage="cardStages.renders" />
        </div>
    </div>
</template>