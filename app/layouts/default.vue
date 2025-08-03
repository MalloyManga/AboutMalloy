<!-- default.vue -->
<script setup lang="ts">
import Title from '~/components/Title.vue'
// layout 文件夹也需要引入



</script>

<template>
    <div class="body bg-cover bg-center bg-no-repeat bg-fixed min-h-screen w-[100vw] grid grid-cols-[6.25rem_1fr] gap-4">
        <header class="inline-block size-full">
            <Nav />
        </header>
        <main class="size-full">
            <Title />
            <!-- 这里的内容 -->
            <NuxtPage />
        </main>
    </div>

</template>

<style scoped>
.body {
    background-image: url('../assets/images/EndlessDream.png');
}
</style>