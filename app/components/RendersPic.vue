<!-- components/RendersPic.vue -->
<script setup lang="ts">
import Lantern from '../assets/images/Lantern.webp'
import EndlessDream from '../assets/images/EndlessDream.webp'

const tabs = useTemplateRef<HTMLDivElement[]>('tabs')
const lastIndex = ref<number>()
interface Renders {
    img: string
    title: string
    icon: string
}
const renders: Renders[] = [
    { img: EndlessDream, title: 'EndlessDream', icon: Lantern }
]
const currentTitle = ref(renders[0]?.title)
const currentImg = ref(renders[0]?.img)

const handleActive = (index: number) => {
    if (tabs.value && tabs.value[index]) {
        currentTitle.value = renders[index]?.title
        currentImg.value = renders[index]?.img
        // 这里一开始没有 tabs.value[index] 会报错说不存在
        tabs.value[index].style.backgroundColor = '#2a5298'
        tabs.value[index].style.boxShadow = "0 -3px #608bc1 inset,-3px 0px #608bc1 inset,-3px 0 #133e87,0 -3px #133e87,3px 0 #133e87,0 3px #133e87"
        // 给样式完成 清楚其他的未完成样式
        lastIndex.value = index
    }
}
watch(lastIndex, (newVal, oldVal) => {
    if (oldVal !== undefined) {
        // 这里第一次直接写的 oldVal 但是0的话 会被当成false 故切换判断
        if (tabs.value && tabs.value[oldVal]) {
            tabs.value[oldVal].style.backgroundColor = ''
            tabs.value[oldVal].style.boxShadow = ''
        }
    }
})

onMounted(() => {
    handleActive(0)
})



</script>

<template>
    <div class="mc-text border-4 w-6xl h-170 absolute top-32 left-40 bg-[#5371ad] py-4 px-2 text-white">
        <div class="flex gap-2 size-full">
            <div class="flex flex-col gap-2">
                <div ref="tabs" v-for="(renderPic, index) in renders" @mousedown="() => { handleActive(index) }"
                    class="nav-page bg-[#608BC1] size-8 flex justify-center items-center active:bg-[#2a5298] select-none">
                    <!-- 这里由于 clippath 导致超出不显示 遂外包div -->
                    <img :src="renderPic.icon" alt="Lantern" class="size-7">
                    <!-- 这里想要抽象成 一个 v-for 但是感觉不可行 -->
                </div>
            </div>
            <div class="self-end">
                <div class="text-lg flex justify-center items-start">
                    {{ currentTitle }}
                </div>
                <img :src="currentImg" alt="EndlessDream">
            </div>
        </div>
    </div>
</template>

<style scoped>
.mc-text {
    font-family: 'MC';
    border-image: url(../assets/images/PixelBorder.svg) 2;
    box-shadow: 0 -4px rgb(12 24 44 / 50%) inset,
        0 4px rgb(255 255 255 / 25%) inset, -4px 0 rgb(12 24 44 / 50%) inset,
        4px 0 rgb(255 255 255 / 25%) inset;
    clip-path: polygon(4px 0px, 4px 2px,
            2px 2px, 2px 4px,
            0px 4px, 0px calc(100% - 4px),
            2px calc(100% - 4px), 2px calc(100% - 2px),
            4px calc(100% - 2px), 4px 100%,
            calc(100% - 4px) 100%, calc(100% - 4px) calc(100% - 2px),
            calc(100% - 2px) calc(100% - 2px),
            calc(100% - 2px) calc(100% - 4px),
            100% calc(100% - 4px), 100% calc(100% - 4px),
            100% 4px, calc(100% - 2px) 4px,
            calc(100% - 2px) 2px, calc(100% - 4px) 2px,
            calc(100% - 4px) 0px);
}

.nav-page {
    box-shadow: 0 -3px #2a5298 inset,
        -3px 0 #2a5298 inset,
        0 2px #cdefff inset,
        2px 0 #cdefff inset,
        -3px 0 #133e87,
        0 -3px #133e87,
        3px 0 #133e87,
        0 3px #133e87;
}
</style>