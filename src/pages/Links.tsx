import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../lib/motion'
import { useTheme } from '../hooks/useTheme'
import styles from './Links.module.css'

const links = [
  {
    label: 'Portfolio',
    detail: 'AYLINmarie.co',
    href: 'https://aylinmarie.co',
  },
  {
    label: 'Digital Garden',
    detail: 'Notes, ideas & works in progress',
    href: 'https://aylinmarie.notion.site/Digital-Garden-3cef80c7cc8280639ca9eed29cfa1e6a',
  },
  {
    label: 'Fable',
    detail: 'What I’m reading',
    href: 'https://fable.co/fabler/aylin-atkins-153638976777',
  },
]

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <line x1="12" y1="2" x2="12" y2="4" />
      <line x1="12" y1="20" x2="12" y2="22" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="2" y1="12" x2="4" y2="12" />
      <line x1="20" y1="12" x2="22" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

export default function Links() {
  const { dark, toggle } = useTheme()

  useEffect(() => {
    const prev = document.title
    document.title = 'Links — Aylin Marie'
    return () => { document.title = prev }
  }, [])

  return (
    <div className={styles.page}>
      <label className={styles.themeToggle}>
        <SunIcon />
        <input
          type="checkbox"
          className={styles.themeInput}
          checked={dark}
          onChange={toggle}
          aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
        />
        <span className={styles.themeTrack}>
          <span className={styles.themeThumb} />
        </span>
        <MoonIcon />
      </label>

      <motion.div
        className={styles.content}
        variants={stagger()}
        initial="hidden"
        animate="visible"
      >
        <motion.img
          variants={fadeUp}
          src="/aylin.jpg"
          alt="Aylin Marie"
          className={styles.avatar}
        />

        <motion.h1 variants={fadeUp} className={styles.name}>
          Aylin Marie
        </motion.h1>

        <motion.p variants={fadeUp} className={styles.tagline}>
          Staff Software Engineer
        </motion.p>

        <motion.nav variants={fadeUp} aria-label="Links" className={styles.linkList}>
          {links.map(({ label, detail, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkCard}
            >
              <span className={styles.linkLabel}>{label}</span>
              <span className={styles.linkDetail}>{detail}</span>
              <span className="sr-only"> (opens in new tab)</span>
            </a>
          ))}
        </motion.nav>

        <motion.a variants={fadeUp} href="/" className={styles.back}>
          Full portfolio &rarr;
        </motion.a>
      </motion.div>
    </div>
  )
}
