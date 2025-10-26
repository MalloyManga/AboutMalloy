<!-- components/RendersPic.vue -->
<script setup lang="ts">
import Lantern from '../assets/images/Lanter.webp'
import IronSword from '../assets/images/IronSword.webp'
import EndlessDream from '../assets/images/EndlessDream.webp'
import NineOfSwords from '../assets/images/NineOfSwords.webp'

const tabs = useTemplateRef<HTMLDivElement[]>('tabs')
const lastIndex = ref<number>()
interface Renders {
    img: string
    title: string
    icon: string
}
const renders: Renders[] = [
    { img: EndlessDream, title: 'Endless Dream', icon: Lantern },
    { img: NineOfSwords, title: 'Nine of Swords', icon: IronSword },
]
const currentTitle = ref(renders[0]?.title)
const currentImg = ref(renders[0]?.img)

const handleActive = (index: number) => {
    if (tabs.value && tabs.value[index]) {
        currentTitle.value = renders[index]?.title
        currentImg.value = renders[index]?.img
        tabs.value[index].style.backgroundColor = '#2a5298'
        tabs.value[index].style.boxShadow = "0 -3px #608bc1 inset,-3px 0px #608bc1 inset,-3px 0 #133e87,0 -3px #133e87,3px 0 #133e87,0 3px #133e87"
        lastIndex.value = index
    }
}
watch(lastIndex, (newVal, oldVal) => {
    if (oldVal !== undefined) {
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
    <div class="back_board pb-2">
        <div class="front_board py-4 px-2">
            <div class="flex gap-2 size-full">
                <div class="flex flex-col gap-2">
                    <div ref="tabs" v-for="(renderPic, index) in renders" @mousedown="() => { handleActive(index) }"
                        class="nav-page bg-[#608BC1] size-8 flex justify-center items-center active:bg-[#2a5298] select-none">
                        <img :src="renderPic.icon" alt="Lantern" class="size-7 select-none">
                    </div>
                </div>
                <div class="self-end">
                    <div class="text-lg flex justify-center items-start">
                        {{ currentTitle }}
                    </div>
                    <img :src="currentImg" alt="EndlessDream" class="select-none">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
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