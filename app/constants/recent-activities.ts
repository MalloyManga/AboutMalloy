// Recent activities data
import type { RecentActivity } from '~/types'

export const RECENT_ACTIVITIES: RecentActivity[] = [
    // add new recent activity
    { 
        time: '2025/08/05', 
        activity: 'MC render "Endless Dream"', 
        nuxtLink: '/renders' 
    },
    { 
        time: '2025/07/30', 
        activity: 'MC render "Nine of Swords"', 
        nuxtLink: '/renders' 
    },
    { 
        time: '2025/07/15', 
        activity: 'Launch a custom-component-library', 
        link: 'https://malloymanga.github.io/Custom-component-library/' 
    },
] as const
