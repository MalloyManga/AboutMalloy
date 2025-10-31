<!-- DestroyOverlay.vue -->
<script setup lang="ts">
import DestroySprite from '../assets/images/destroy_css_sprite.png'

interface Prop {
    stage?: number
}

const { stage = 0 } = defineProps<Prop>()

const backgroundPosition = computed(() => {
    // 这里 从最左边开始 
    const offset = ((stage - 1) / 9) * 100
    return `${offset}% 0%`
})
</script>

<template>
    <div class="pixelated absolute inset-0 w-full h-full bg-no-repeat pointer-events-none"
        :class="{ 'hidden': stage === 0 }" :style="{
            backgroundImage: `url(${DestroySprite})`,
            backgroundPosition: backgroundPosition,
            backgroundSize: 'calc(100% * 10) 100%'
        }">
    </div>

</template>
