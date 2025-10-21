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
    <div class="back_board pb-2 bg-[#3A4F7F]">
        <div class="mc-text border-4 bg-[#5371ad] py-4 px-2 text-white">
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
.mc-text {
    font-family: 'MC';
    border-image: url("data:image/svg+xml,%3Csvg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_1310_2574)'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M4 0H3V1H2V2H1V3H0V4V5H1V6H2V7H3V8H4H5V7H6V6H7V5H8V4V3H7V2H6V1H5V0H4ZM5 1V2H6V3H7V4V5H6V6H5V7H4H3V6H2V5H1V4V3H2V2H3V1H4H5Z' fill='%23475569'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_1310_2574'%3E%3Crect width='8' height='8' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A") 3 / 6px / 0px stretch;
    clip-path: polygon(6px 0px, 6px 2px, 4px 2px, 4px 4px, 2px 4px, 2px 6px, 0px 6px, 0px 8px, 0px calc(100% - 6px), 2px calc(100% - 6px), 2px calc(100% - 4px), 4px calc(100% - 4px), 4px calc(100% - 2px), 6px calc(100% - 2px), 6px calc(100% + 0px), 8px calc(100% + 0px), calc(100% - 6px) calc(100% + 0px), calc(100% - 6px) calc(100% - 2px), calc(100% - 4px) calc(100% - 2px), calc(100% - 4px) calc(100% - 4px), calc(100% - 2px) calc(100% - 4px), calc(100% - 2px) calc(100% - 6px), calc(100% + 0px) calc(100% - 6px), calc(100% + 0px) calc(100% - 8px), calc(100% + 0px) 6px, calc(100% - 2px) 6px, calc(100% - 2px) 4px, calc(100% - 4px) 4px, calc(100% - 4px) 2px, calc(100% - 6px) 2px, calc(100% - 6px) 0px, calc(100% - 8px) 0px);
    /* box-shadow: 0 -4px rgb(12 24 44 / 50%) inset,
        0 4px rgb(255 255 255 / 25%) inset, -4px 0 rgb(12 24 44 / 50%) inset,
        4px 0 rgb(255 255 255 / 25%) inset; */
}

.back_board {
    border-image: url("data:image/svg+xml,%3Csvg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_1310_2574)'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M4 0H3V1H2V2H1V3H0V4V5H1V6H2V7H3V8H4H5V7H6V6H7V5H8V4V3H7V2H6V1H5V0H4ZM5 1V2H6V3H7V4V5H6V6H5V7H4H3V6H2V5H1V4V3H2V2H3V1H4H5Z' fill='%23475569'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_1310_2574'%3E%3Crect width='8' height='8' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A") 3 / 6px / 0px stretch;
    clip-path: polygon(6px 0px, 6px 2px, 4px 2px, 4px 4px, 2px 4px, 2px 6px, 0px 6px, 0px 8px, 0px calc(100% - 6px), 2px calc(100% - 6px), 2px calc(100% - 4px), 4px calc(100% - 4px), 4px calc(100% - 2px), 6px calc(100% - 2px), 6px calc(100% + 0px), 8px calc(100% + 0px), calc(100% - 6px) calc(100% + 0px), calc(100% - 6px) calc(100% - 2px), calc(100% - 4px) calc(100% - 2px), calc(100% - 4px) calc(100% - 4px), calc(100% - 2px) calc(100% - 4px), calc(100% - 2px) calc(100% - 6px), calc(100% + 0px) calc(100% - 6px), calc(100% + 0px) calc(100% - 8px), calc(100% + 0px) 6px, calc(100% - 2px) 6px, calc(100% - 2px) 4px, calc(100% - 4px) 4px, calc(100% - 4px) 2px, calc(100% - 6px) 2px, calc(100% - 6px) 0px, calc(100% - 8px) 0px);
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