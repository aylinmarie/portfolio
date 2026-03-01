/// <reference types="vite/client" />

declare module 'virtual:substack-posts' {
  export interface SubstackPost {
    title: string
    url: string
    date: string
  }
  export const posts: SubstackPost[]
}
