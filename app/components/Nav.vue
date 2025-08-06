<!-- Nav.vue -->
<script setup lang="ts">
import HomeIcon from '../assets/images/MalloyHead.webp'
import MusicIcon from '../assets/images/JukeBox.webp'
import ContactIcon from '../assets/images/WritaBook.webp'
import ProjectIcon from '../assets/images/WorkBench.webp'
import AboutIcon from '../assets/images/LightGrayBed.webp'
import RendersIcon from '../assets/images/Painting.webp'
import NavItem from './NavItem.vue'

</script>

<template>
    <nav>
        <ul class="size-full inline-flex flex-col gap-4 mx-2">
            <!-- 这里发现 当内部的内容比较多的时间 在搭配 v-for 时 插槽反而是一种更好的办法 -->
            <li class="flex justify-center items-center size-25">
                <NuxtLink to="/">
                    <NavItem class="size-[4rem]">
                        <template #icon>
                            <img :src="HomeIcon" alt="HomeIcon">
                        </template>
                        <template #text>
                            Home
                        </template>
                    </NavItem>
                </NuxtLink>
            </li>
            <li class="flex justify-center items-center size-[6.25rem]">
                <NuxtLink to="/projects">
                    <NavItem class="size-[3.75rem]">
                        <template #icon>
                            <img :src="ProjectIcon" alt="HomeIcon">
                        </template>
                        <template #text>
                            Projects
                        </template>
                    </NavItem>
                </NuxtLink>
            </li>
            <li class="flex justify-center items-center size-[6.25rem]">
                <NuxtLink to="/renders">
                    <NavItem class="size-[3.75rem]">
                        <template #icon>
                            <img :src="RendersIcon" alt="HomeIcon">
                        </template>
                        <template #text>
                            Renders
                        </template>
                    </NavItem>
                </NuxtLink>
            </li>
            <li class="flex justify-center items-center size-[6.25rem]">
                <NuxtLink to="/about">
                    <NavItem class="size-[3.75rem]">
                        <template #icon>
                            <img :src="AboutIcon" alt="HomeIcon">
                        </template>
                        <template #text>
                            About
                        </template>
                    </NavItem>
                </NuxtLink>
            </li>
            <li class="flex justify-center items-center size-[6.25rem]">
                <NuxtLink to="/Contact">
                    <NavItem class="size-[3.75rem]">
                        <template #icon>
                            <img :src="ContactIcon" alt="HomeIcon">
                        </template>
                        <template #text>
                            Contact
                        </template>
                    </NavItem>
                </NuxtLink>
            </li>
            <li class="flex justify-center items-center size-[6.25rem]">
                <NuxtLink to="/music">
                    <NavItem class="size-[3.75rem]">
                        <template #icon>
                            <img :src="MusicIcon" alt="HomeIcon">
                        </template>
                        <template #text>
                            Music
                        </template>
                    </NavItem>
                </NuxtLink>
            </li>
        </ul>
    </nav>

</template>