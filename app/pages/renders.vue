<!-- renders.vue -->
<script setup lang="ts">
const { isPickaxeCursorActive } = usePickaxeStage()

const cardStages = ref({
    renders: 0
})

function handleCardClick(cardName: 'renders') {
    if (!isPickaxeCursorActive.value) return

    if (cardStages.value[cardName] <= 10) {
        cardStages.value[cardName]++
    }
}
</script>

<template>
    <div class="lg:h-6/7 lg:px-16 sm:px-8 px-2" @click="handleCardClick('renders')"
        :class="{ 'opacity-0': cardStages.renders > 10 }">
        <div class="relative">
            <RendersPic />
            <DestroyOverlay :stage="cardStages.renders" />
        </div>
    </div>
</template>