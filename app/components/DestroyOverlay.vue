<!-- DestroyOverlay.vue -->
<script setup lang="ts">
import DestroySprite from '../assets/images/destroy_css_sprite.png'

interface Prop {
    stage?: number
}

const { stage = 0 } = defineProps<Prop>()

const backgroundPosition = computed(() => {
    // 这里 从最左边开始 
    const offset = (stage - 1) * 26
    return `${offset}px 0px`
})
</script>

<template>
    <div class="absolute top-0 left-0 w-full h-full bg-no-repeat pointer-events-none" :class="{ 'hidden': stage === 0 }"
        :style="{
            backgroundImage: `url(${DestroySprite})`,
            backgroundPosition: backgroundPosition
        }">
    </div>

</template>
