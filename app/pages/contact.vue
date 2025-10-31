<!-- pages/contact.vue -->
<script setup lang="ts">
const { isPickaxeCursorActive } = usePickaxeStage()

const cardStages = ref({
    contact1: 0
})

function handleCardClick(cardName: 'contact1') {
    if (!isPickaxeCursorActive.value) return

    if (cardStages.value[cardName] <= 10) {
        cardStages.value[cardName]++
    }
}
</script>

<template>
    <div class="lg:h-6/7 grid lg:grid-cols-[min(40%,40rem)_1fr] gap-4 lg:px-16 sm:px-8 px-2">
        <div class="relative lg:row-start-1 lg:row-end-2 lg:h-5/6" @click="handleCardClick('contact1')"
            :class="{ 'opacity-0': cardStages.contact1 > 10 }">
            <Contact1 />
            <DestroyOverlay :stage="cardStages.contact1" />
        </div>
    </div>

</template>