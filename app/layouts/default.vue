<!-- default.vue -->
<script setup lang="ts">
import Title from '~/components/Title.vue'


</script>

<template>
    <div class="body bg-cover bg-center bg-no-repeat bg-fixed grid grid-cols-[6.25rem_1fr] gap-4 h-screen w-screen">
        <header class="inline-block size-full">
            <Nav />
        </header>
        <main class="size-full pb-8 overflow-auto">
            <Title />
            <NuxtPage />
        </main>
    </div>

</template>

<style scoped>
.body {
    background-image: url('../assets/images/EndlessDream.webp');
}
</style>