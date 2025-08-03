<!-- default.vue -->
<script setup lang="ts">



</script>

<template>
    <div class="body bg-cover h-[100vh] w-[100vw] grid grid-cols-[6.25rem_1fr]">
        <header class="inline-block size-full bg-sky-300">
            <Nav />
        </header>
        <main class="size-full">
            <NuxtPage />
        </main>
    </div>



</template>

<style scoped>
.body {
    background-image: url('../assets/images/EndlessDream.png');
}
</style>