<!-- Title.vue -->
<script setup lang="ts">

const route = useRoute()
const titleMap = {
    index: 'Home',
    projects: 'Projects',
    renders: 'Renders',
    about: 'About',
    contact: 'Contact',
    music: 'Music'
}


</script>

<template>
    <div class="title inline-block text-4xl p-2 text-white m-4 font-bold drop-shadow-[0.25rem_0.25rem_#89AFFD]">
        <!-- {{ titleContent }} -->
    </div>

</template>

<style scoped>
.title {
    font-family: 'MC';
}
</style>