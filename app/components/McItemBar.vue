<!-- components/McItemBar.vue -->
<script setup lang="ts">
import ItemBox from '../assets/images/McItem.webp'


</script>

<template>
    <div class="relative">
        <div class="absolute top-1.5 left-1.5">
            <slot name="item"></slot>
        </div>
        <img :src="ItemBox" alt="TechStackBox" class="size-12">
    </div>


</template>