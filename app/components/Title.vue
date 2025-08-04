<!-- Title.vue -->
<script setup lang="ts">

const route = useRoute()
const titleMap: Record<string, string> = {
    index: 'Home',
    projects: 'Projects',
    renders: 'Renders',
    about: 'About',
    contact: 'Contact',
    music: 'Music'
}
const titleContent = computed(() => {
    return titleMap[route.name as string]
})

// 这里 route.name 是 string | undefined 
// 而只写 as string 的话 route.name 是 string， titleMap 推断为具体的字面能量类型 不能接收任意的 string 故报错
// 加上 Record<string, string> 之后 告诉 titleMap 可以接收任意 string 作为键

</script>

<template>
    <div class="title inline-block text-4xl p-2 text-white m-4 font-bold drop-shadow-[0.25rem_0.25rem_#89AFFD]">
        {{ titleContent }}
    </div>

</template>

<style scoped>
.title {
    font-family: 'MC';
}
</style>