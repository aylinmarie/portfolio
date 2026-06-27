import { useEffect, useState } from 'react'
import styles from './TokenTypewriter.module.css'

type TokenKind = 'selector' | 'string' | 'property' | 'punctuation' | 'value'

interface Token {
  text: string
  kind: TokenKind
}

interface Line {
  indent: number
  tokens: Token[]
  swatch?: string
}

function tokenLine(property: string, hex: string): Line {
  return {
    indent: 1,
    swatch: hex,
    tokens: [
      { text: property, kind: 'property' },
      { text: ': ', kind: 'punctuation' },
      { text: hex, kind: 'value' },
      { text: ';', kind: 'punctuation' },
    ],
  }
}

const LINES: Line[] = [
  {
    indent: 0,
    tokens: [
      { text: '[data-theme=', kind: 'punctuation' },
      { text: '"mailchimp"', kind: 'string' },
      { text: ']', kind: 'punctuation' },
      { text: ' {', kind: 'punctuation' },
    ],
  },
  tokenLine('--color-action-standard', '#017E89'),
  tokenLine('--color-action-standard-hover', '#006771'),
  tokenLine('--color-action-negative', '#B61A37'),
  tokenLine('--color-action-special-use', '#FFE01B'),
  tokenLine('--color-action-passive', '#E2E9ED'),
  tokenLine('--color-code-keyword', '#D72792'),
  tokenLine('--color-code-string', '#00828D'),
  tokenLine('--color-code-number', '#C84F00'),
  tokenLine('--color-code-boolean', '#6100C2'),
  tokenLine('--color-code-attribute', '#00892E'),
  tokenLine('--color-code-type', '#FCA354'),
  tokenLine('--color-link-text', '#017E89'),
  tokenLine('--color-text-primary', '#21262A'),
  tokenLine('--color-text-secondary', '#4C555B'),
  tokenLine('--color-text-accent', '#017E89'),
  tokenLine('--color-ui-positive', '#00892E'),
  tokenLine('--color-ui-new', '#D72792'),
  tokenLine('--color-ui-info', '#7C00F6'),
  tokenLine('--color-ui-discover', '#2B77CC'),
  tokenLine('--color-ui-beta', '#00B3C2'),
  { indent: 0, tokens: [{ text: '}', kind: 'punctuation' }] },
]

function lineText(line: Line) {
  return line.tokens.map((t) => t.text).join('')
}

function renderTyped(line: Line, chars: number) {
  const nodes: React.ReactNode[] = []
  let remaining = chars
  for (let i = 0; i < line.tokens.length; i++) {
    const token = line.tokens[i]
    if (remaining <= 0) break
    const slice = token.text.slice(0, remaining)
    if (slice.length > 0) {
      const showSwatch = token.kind === 'value' && line.swatch
      nodes.push(
        <span key={i} className={styles[token.kind]}>
          {showSwatch && (
            <span
              className={styles.swatch}
              style={{ background: line.swatch }}
              aria-hidden="true"
            />
          )}
          {slice}
        </span>
      )
    }
    remaining -= token.text.length
  }
  return nodes
}

const TYPE_SPEED = 18
const LINE_PAUSE = 220
const LOOP_PAUSE = 1800

function FileIcon() {
  return (
    <svg className={styles.fileIcon} viewBox="0 0 16 16" aria-hidden="true">
      <path
        d="M3 1.5h6l4 4v9a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12.5a.5.5 0 0 1 .5-.5z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path d="M9 1.5v4h4" fill="none" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}

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

  const currentLineNumber = reducedMotion ? LINES.length : lineIndex + 1

  return (
    <div
      className={styles.editor}
      role="img"
      aria-label="Animated demo of Mailchimp design tokens being typed into a code editor"
    >
      <div className={styles.titleBar}>
        <div className={styles.dots}>
          {['#FF5F57', '#FEBC2E', '#28C840'].map((color) => (
            <span key={color} className={styles.dot} style={{ background: color }} aria-hidden="true" />
          ))}
        </div>
        <span className={styles.title}>mailchimp — tokens.css</span>
      </div>
      <div className={styles.tabBar}>
        <span className={`${styles.tab} ${styles.tabActive}`}>
          <FileIcon />
          tokens.css
        </span>
        <span className={styles.tab}>
          <FileIcon />
          README.md
        </span>
      </div>
      <div className={styles.code}>
        {LINES.map((line, i) => {
          const isPast = i < lineIndex || reducedMotion
          const isCurrent = i === lineIndex && !reducedMotion
          if (!isPast && !isCurrent) return null
          const chars = isPast ? lineText(line).length : charIndex
          return (
            <div key={i} className={styles.line}>
              <span className={styles.lineNumber}>{i + 1}</span>
              <span className={styles.lineContent} style={{ paddingLeft: line.indent * 16 }}>
                {renderTyped(line, chars)}
                {isCurrent && <span className={styles.cursor} aria-hidden="true" />}
              </span>
            </div>
          )
        })}
      </div>
      <div className={styles.statusBar}>
        <span className={styles.statusLeft}>
          <span className={styles.statusDot} aria-hidden="true" />
          CSS
          <span className={styles.statusSep}>UTF-8</span>
          <span className={styles.statusSep}>Spaces: 2</span>
        </span>
        <span className={styles.statusRight}>Ln {currentLineNumber}, Col 1</span>
      </div>
    </div>
  )
}
