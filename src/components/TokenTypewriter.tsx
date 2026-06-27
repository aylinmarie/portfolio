import { useEffect, useState } from 'react'
import styles from './TokenTypewriter.module.css'

type TokenKind = 'property' | 'punctuation' | 'value' | 'unit' | 'string'

interface Token {
  text: string
  kind: TokenKind
}

const LINES: Token[][] = [
  [
    { text: '--color-accent', kind: 'property' },
    { text: ': ', kind: 'punctuation' },
    { text: '#FCA354', kind: 'value' },
    { text: ';', kind: 'punctuation' },
  ],
  [
    { text: '--color-surface', kind: 'property' },
    { text: ': ', kind: 'punctuation' },
    { text: '#1B2024', kind: 'value' },
    { text: ';', kind: 'punctuation' },
  ],
  [
    { text: '--radius-md', kind: 'property' },
    { text: ': ', kind: 'punctuation' },
    { text: '14', kind: 'value' },
    { text: 'px', kind: 'unit' },
    { text: ';', kind: 'punctuation' },
  ],
  [
    { text: '--font-weight-heading', kind: 'property' },
    { text: ': ', kind: 'punctuation' },
    { text: '700', kind: 'value' },
    { text: ';', kind: 'punctuation' },
  ],
  [
    { text: '--space-lg', kind: 'property' },
    { text: ': ', kind: 'punctuation' },
    { text: '24', kind: 'value' },
    { text: 'px', kind: 'unit' },
    { text: ';', kind: 'punctuation' },
  ],
]

function lineText(line: Token[]) {
  return line.map((t) => t.text).join('')
}

function renderTyped(line: Token[], chars: number) {
  const nodes: React.ReactNode[] = []
  let remaining = chars
  for (let i = 0; i < line.length; i++) {
    const token = line[i]
    if (remaining <= 0) break
    const slice = token.text.slice(0, remaining)
    if (slice.length > 0) {
      nodes.push(
        <span key={i} className={styles[token.kind]}>
          {slice}
        </span>
      )
    }
    remaining -= token.text.length
  }
  return nodes
}

const TYPE_SPEED = 28
const LINE_PAUSE = 400
const LOOP_PAUSE = 1600

export default function TokenTypewriter() {
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(query.matches)
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    query.addEventListener('change', handler)
    return () => query.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    if (reducedMotion) return

    const currentLine = LINES[lineIndex]
    const fullLength = lineText(currentLine).length

    if (charIndex < fullLength) {
      const id = setTimeout(() => setCharIndex((c) => c + 1), TYPE_SPEED)
      return () => clearTimeout(id)
    }

    const isLastLine = lineIndex === LINES.length - 1
    const id = setTimeout(
      () => {
        if (isLastLine) {
          setLineIndex(0)
          setCharIndex(0)
        } else {
          setLineIndex((l) => l + 1)
          setCharIndex(0)
        }
      },
      isLastLine ? LOOP_PAUSE : LINE_PAUSE
    )
    return () => clearTimeout(id)
  }, [charIndex, lineIndex, reducedMotion])

  return (
    <div className={styles.editor} role="img" aria-label="Animated demo of design tokens being typed into a code editor">
      <div className={styles.titleBar}>
        <span className={styles.dot} style={{ background: '#FF5F57' }} aria-hidden="true" />
        <span className={styles.dot} style={{ background: '#FEBC2E' }} aria-hidden="true" />
        <span className={styles.dot} style={{ background: '#28C840' }} aria-hidden="true" />
      </div>
      <div className={styles.tabBar}>
        <span className={styles.tab}>tokens.css</span>
      </div>
      <div className={styles.code}>
        {LINES.map((line, i) => {
          const isPast = i < lineIndex || reducedMotion
          const isCurrent = i === lineIndex && !reducedMotion
          const chars = isPast ? lineText(line).length : isCurrent ? charIndex : 0
          if (!isPast && !isCurrent) return null
          return (
            <div key={i} className={styles.line}>
              {renderTyped(line, chars)}
              {isCurrent && (
                <span className={styles.cursor} aria-hidden="true" />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
