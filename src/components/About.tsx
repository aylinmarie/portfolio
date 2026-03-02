import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../lib/motion'
import styles from './About.module.css'

const also: React.ReactNode[] = [
  'Founder of OneYoungTraveler LLC',
  'General Assembly Workshop Instructor',
  'Squarespace Circle Member',
  'Portfolio Consultant — 2017 A3C Creator Complex Conference',
  'Amateur knitter + recently picked up sewing',
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
        >03 / About</motion.h2>

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
                Dedicated to architecting the bridge between design intent and production code. I specialize in design systems with a deep commitment to accessibility, and I've spent my career helping organizations, from small businesses to enterprise, build better products at scale.
              </p>
              <p>
                As the landscape of development shifts, I'm now focused on the mechanics of velocity by building the tooling and AI-driven infrastructure that helps engineers ship UI faster without sacrificing quality or inclusive design.
              </p>
              <p>
                My path started at <a href="https://generalassemb.ly/" target="_blank" rel="noopener noreferrer">General Assembly<span className="sr-only"> (opens in new tab)</span></a>. I was an independent Squarespace developer, moved through a creative agency focused on social good, and led me to Mailchimp, where I lead engineering for our design system.
              </p>
            </div>

            <div className={styles.also}>
              <h3 className={styles.alsoTitle}>Also</h3>
              <ul className={styles.alsoList}>
                {also.map((item, i) => (
                  <li key={i} className={styles.alsoItem}>
                    <span className={styles.bullet} aria-hidden="true">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
