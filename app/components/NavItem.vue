<!-- NavItem.vue -->
<script setup lang="ts">



</script>

<template>
    <div>
        <div>
            <slot name="icon">
                icon slot
            </slot>
        </div>
        <div class="slot-text pt-1 text-white flex justify-center items-center">
            <slot name="text" v-if="$slots.text">
                text slot
            </slot>
        </div>
    </div>



</template>

<style scoped>
.slot-text {
    font-family: 'MC';
}
</style>