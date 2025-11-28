// Tech stack configuration
import type { TechStack } from '~/types'
import Ts from '~/components/icon/Ts.vue'
import TailwindDark from '~/components/icon/TailwindDark.vue'
import VueDark from '~/components/icon/VueDark.vue'
import NuxtDark from '~/components/icon/NuxtDark.vue'
import ReactDark from '~/components/icon/ReactDark.vue'
import NodejsDark from '~/components/icon/NodejsDark.vue'
import NestDark from '~/components/icon/NestDark.vue'
import ExpressDark from '~/components/icon/ExpressDark.vue'
import Electron from '~/components/icon/Electron.vue'
import Three from '~/components/icon/Three.vue'

export const TECH_STACKS: TechStack[] = [
    // add new tech stack icon and link
    { stack: Ts, link: 'https://www.typescriptlang.org/' },
    { stack: TailwindDark, link: 'https://tailwindcss.com/' },
    { stack: VueDark, link: 'https://vuejs.org/' },
    { stack: NuxtDark, link: 'https://nuxt.com/' },
    { stack: ReactDark, link: 'https://react.dev/' },
    { stack: NodejsDark, link: 'https://nodejs.org/' },
    { stack: NestDark, link: 'https://nestjs.com/' },
    { stack: ExpressDark, link: 'https://expressjs.com/' },
    { stack: Electron, link: 'https://www.electronjs.org/' },
    { stack: Three, link: 'https://threejs.org/' }
] as const
