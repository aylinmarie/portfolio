import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../lib/motion'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="home" className={styles.hero} aria-labelledby="home-heading">
      <motion.div className={styles.inner} variants={stagger(0.15)} initial="hidden" animate="visible">
        <motion.p variants={fadeUp} className={styles.eyebrow}>Atlanta, GA</motion.p>
        <motion.h1 id="home-heading" variants={fadeUp} className={styles.heading}>
          Merhaba!<br />
          I'm Aylin<span className={styles.dot}>.</span>
        </motion.h1>
        <motion.p variants={fadeUp} className={styles.sub}>
          Staff Software Engineer at <a href="https://mailchimp.com/" target="_blank" rel="noopener noreferrer">Mailchimp<span className="sr-only"> (opens in new tab)</span></a>. Working in the intersection of Design Systems and Generative AI. Currently focused on building the UI infrastructure and developer tooling that enables engineering teams to leverage AI for high-velocity, accessible, and system-compliant product development.
        </motion.p>
        <motion.a variants={fadeUp} href="#work" className={styles.cta}>View work ↓</motion.a>
      </motion.div>
    </section>
  )
}
