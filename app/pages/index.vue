<!-- pages/index.vue -->
<script setup lang="ts">



</script>

<template>
    <div
        class="lg:h-6/7 grid lg:grid-cols-[min(40%,40rem)_1fr] lg:grid-rows-[16rem_1fr] gap-4 lg:px-16 sm:px-8 px-2">
        <div class="lg:row-start-1 lg:row-end-3 lg:h-5/6">
            <Intro />
        </div>
        <div class="lg:relative lg:pl-12">
            <Now class="lg:absolute lg:-top-16" />
        </div>
        <div class="lg:pl-8">
            <Recent />
        </div>
    </div>

</template>