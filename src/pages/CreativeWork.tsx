import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../lib/motion'
import { useTheme } from '../hooks/useTheme'
import styles from './CreativeWork.module.css'

const placeholderCount = 6

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

export default function CreativeWork() {
  const { dark, toggle } = useTheme()
  const headingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    headingRef.current?.focus()
  }, [])

  useEffect(() => {
    const prev = document.title
    document.title = 'Creative work — Aylin Marie'
    return () => { document.title = prev }
  }, [])

  return (
    <article className={styles.page} aria-labelledby="creative-work-heading">
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
        <motion.a variants={fadeUp} href="https://aylinmarie.co" className={styles.kicker}>
          Aylin Marie
        </motion.a>

        <motion.header variants={fadeUp} className={styles.header}>
          <h1 ref={headingRef} tabIndex={-1} id="creative-work-heading" className={styles.title}>
            Creative work
          </h1>
          <p className={styles.subtitle}>Illustration and design, collected here.</p>
        </motion.header>

        <motion.div variants={fadeUp} className={styles.gallery}>
          {Array.from({ length: placeholderCount }).map((_, i) => (
            <div key={i} className={styles.frame} aria-hidden="true" />
          ))}
        </motion.div>

        <motion.p variants={fadeUp} className={styles.note}>
          Pieces are going up here soon.
        </motion.p>
      </motion.div>
    </article>
  )
}
