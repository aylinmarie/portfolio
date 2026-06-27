import styles from './TokenTypewriter.module.css'

type TokenKind = 'string' | 'property' | 'punctuation' | 'value'

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
  tokenLine('--color-action-negative', '#B61A37'),
  tokenLine('--color-action-special-use', '#FFE01B'),
  tokenLine('--color-code-keyword', '#D72792'),
  tokenLine('--color-code-string', '#00828D'),
  tokenLine('--color-code-number', '#C84F00'),
  tokenLine('--color-text-primary', '#21262A'),
  tokenLine('--color-ui-positive', '#00892E'),
  tokenLine('--color-ui-discover', '#2B77CC'),
  { indent: 0, tokens: [{ text: '}', kind: 'punctuation' }] },
]

function renderLine(line: Line) {
  return line.tokens.map((token, i) => (
    <span key={i} className={styles[token.kind]}>
      {token.kind === 'value' && line.swatch && (
        <span className={styles.swatch} style={{ background: line.swatch }} aria-hidden="true" />
      )}
      {token.text}
    </span>
  ))
}

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
  return (
    <div
      className={styles.editor}
      role="img"
      aria-label="Mailchimp design tokens shown in a code editor"
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
        {LINES.map((line, i) => (
          <div key={i} className={styles.line}>
            <span className={styles.lineNumber}>{i + 1}</span>
            <span className={styles.lineContent} style={{ paddingLeft: line.indent * 16 }}>
              {renderLine(line)}
            </span>
          </div>
        ))}
        <div className={styles.line}>
          <span className={styles.lineNumber}>{LINES.length + 1}</span>
          <span className={styles.lineContent}>
            <span className={styles.cursor} aria-hidden="true" />
          </span>
        </div>
      </div>
      <div className={styles.statusBar}>
        <span className={styles.statusLeft}>
          <span className={styles.statusDot} aria-hidden="true" />
          CSS
          <span className={styles.statusSep}>UTF-8</span>
          <span className={styles.statusSep}>Spaces: 2</span>
        </span>
        <span className={styles.statusRight}>Ln {LINES.length + 1}, Col 1</span>
      </div>
    </div>
  )
}
