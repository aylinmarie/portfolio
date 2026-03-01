import type { Plugin } from 'vite'

export interface SubstackPost {
  title: string
  url: string
  date: string
}

const VIRTUAL_ID = 'virtual:substack-posts'
const RESOLVED_ID = '\0' + VIRTUAL_ID

function decodeEntities(str: string): string {
  return str
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, '&')
}

function parseRSS(xml: string): SubstackPost[] {
  const posts: SubstackPost[] = []
  const itemRegex = /<item>([\s\S]*?)<\/item>/g
  let match

  while ((match = itemRegex.exec(xml)) !== null) {
    const chunk = match[1]

    const titleMatch =
      chunk.match(/<title><!\[CDATA\[([\s\S]*?)\]\]><\/title>/) ??
      chunk.match(/<title>([\s\S]*?)<\/title>/)

    const linkMatch = chunk.match(/<link>([\s\S]*?)<\/link>/)
    const dateMatch = chunk.match(/<pubDate>(.*?)<\/pubDate>/)

    const title = titleMatch ? decodeEntities(titleMatch[1].trim()) : ''
    const url = linkMatch ? linkMatch[1].trim() : ''
    const pubDate = dateMatch ? dateMatch[1].trim() : ''

    if (!title || !url) continue

    const dateObj = pubDate ? new Date(pubDate) : null
    const date =
      dateObj && !isNaN(dateObj.getTime())
        ? dateObj.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
        : ''

    posts.push({ title, url, date })
  }

  return posts.slice(0, 10)
}

export function substackPlugin(feedUrl: string): Plugin {
  // Cache per build session so HMR doesn't re-fetch on every change
  let cache: SubstackPost[] | null = null

  return {
    name: 'vite-plugin-substack',

    buildStart() {
      cache = null
    },

    resolveId(id) {
      if (id === VIRTUAL_ID) return RESOLVED_ID
    },

    async load(id) {
      if (id !== RESOLVED_ID) return

      if (cache) {
        return `export const posts = ${JSON.stringify(cache)}`
      }

      try {
        const res = await fetch(feedUrl, { signal: AbortSignal.timeout(8000) })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const xml = await res.text()
        cache = parseRSS(xml)
        console.log(`[substack] fetched ${cache.length} posts from ${feedUrl}`)
      } catch (err) {
        console.warn(`[substack] could not fetch feed: ${err}`)
        cache = []
      }

      return `export const posts = ${JSON.stringify(cache)}`
    },
  }
}
