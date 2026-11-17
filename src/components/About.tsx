import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../lib/motion'
import styles from './About.module.css'

const currentTools = ['CSS Variables', 'React', 'Vite', 'Storybook', 'Theming', 'Figma', 'Github', 'Vercel']
const pastTools    = ['Sass', 'Less', 'Angular']

const also: ReactNode[] = [
  'Founder of OneYoungTraveler LLC',
  'General Assembly Workshop Instructor',
  'Squarespace Circle Member',
  'Portfolio Consultant — 2017 A3C Creator Complex Conference',
  <><a href="https://www.ravelry.com/people/aylinmarie" target="_blank" rel="noopener noreferrer">Amateur knitter<span className="sr-only"> (opens in new tab)</span></a>{' '}+ recently picked up sewing</>,
  'Visited 30+ countries and counting',
]

export default function About() {
  return (
    <section id="about" className={styles.section} aria-labelledby="about-heading">
      <div className={styles.inner}>
        <motion.h2
          id="about-heading"
          className={styles.label}
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
        >01 / About</motion.h2>

        <motion.div
          className={styles.grid}
          variants={stagger()} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
        >
          <motion.img
            variants={fadeUp}
            src="/aylin.jpg"
            alt="Aylin Marie"
            className={styles.photo}
          />

          <motion.div variants={fadeUp} className={styles.content}>
            <div className={styles.bio}>
              <p>
                Dedicated to architecting the bridge between design and engineering. I specialize in design systems with a deep commitment to accessibility, and I've spent my career helping organizations, from small businesses to enterprise, build better products at scale.
              </p>
              <p>
                As the landscape of development shifts, I'm focused on the mechanics of building the tooling and infrastructure that helps engineers ship UI faster without sacrificing quality or inclusive design.
              </p>
              <p>
                I started at <a href="https://generalassemb.ly/" target="_blank" rel="noopener noreferrer">General Assembly<span className="sr-only"> (opens in new tab)</span></a>, became an independent developer with Squarespace, then built apps for a social good creative agency. The last 8 years, I've been steering design system engineering at Intuit Mailchimp and QuickBooks.
              </p>
            </div>

            <div className={styles.bottomGrid}>
              <div className={styles.tools}>
                <h3 className={styles.toolsTitle}>What I work with</h3>
                <ul className={styles.tagList} aria-label="Current tools">
                  {currentTools.map((tool) => (
                    <li key={tool} className={styles.tag}>{tool}</li>
                  ))}
                </ul>
                <h3 className={styles.toolsTitle}>What I used to work with</h3>
                <ul className={styles.tagList} aria-label="Past tools">
                  {pastTools.map((tool) => (
                    <li key={tool} className={`${styles.tag} ${styles.tagMuted}`}>{tool}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.also}>
                <h3 className={styles.alsoTitle}>& Other Things</h3>
                <ul className={styles.alsoList}>
                  {also.map((item, i) => (
                    <li key={i} className={styles.alsoItem}>
                      <span className={styles.bullet} aria-hidden="true">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
