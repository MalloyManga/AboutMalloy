// Type definitions for the application

export interface RecentActivity {
  time: string
  activity: string
  link?: string
  nuxtLink?: string
}

export interface TechStack {
  stack: Component
  link: string
}

export type CardName = 'intro' | 'now' | 'recent' | 'about1' | 'contact1' | 'renders'

export interface CardStages {
  [key: string]: number
}
