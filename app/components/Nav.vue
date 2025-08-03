<!-- Nav.vue -->
<script setup lang="ts">
import NavItem from './NavItem.vue'

</script>

<template>
    <ul class="size-full bg-pink-200 inline-flex flex-col">
        <li class="flex justify-center items-center bg-green-300 size-[6.25rem]">
            <NavItem class="size-[5rem]" />
        </li>
        <li class="flex justify-center items-center bg-green-300 size-[6.25rem]">2</li>
        <li class="flex justify-center items-center bg-green-300 size-[6.25rem]">3</li>
        <li class="flex justify-center items-center bg-green-300 size-[6.25rem]">4</li>
        <li class="flex justify-center items-center bg-green-300 size-[6.25rem]">5</li>
    </ul>

</template>