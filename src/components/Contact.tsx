import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../lib/motion'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.section} aria-labelledby="contact-heading">
      <motion.div
        className={styles.inner}
        variants={stagger()} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
      >
        <motion.span variants={fadeUp} className={styles.label}>05 / Contact</motion.span>

        <motion.h2 id="contact-heading" variants={fadeUp} className={styles.heading}>
          Let's connect<span className={styles.dot}>.</span>
        </motion.h2>

        <motion.div variants={fadeUp} className={styles.links}>
          <div className={styles.social}>
            <a
              href="https://www.linkedin.com/in/aylinatkins/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              LinkedIn<span className="sr-only"> (opens in new tab)</span>
            </a>
            <a
              href="https://github.com/aylinmarie"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              GitHub<span className="sr-only"> (opens in new tab)</span>
            </a>
          </div>
        </motion.div>
      </motion.div>

      <div className={styles.footer}>
        <div className={styles.footerInner}>
          <span className={styles.footerName}>Aylin Marie © {new Date().getFullYear()}</span>
          <span className={styles.footerRole}>
            Built with{' '}
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">Vercel<span className="sr-only"> (opens in new tab)</span></a>,{' '}
            <a href="https://react.dev" target="_blank" rel="noopener noreferrer">React<span className="sr-only"> (opens in new tab)</span></a>{' '}
            &amp;{' '}
            <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">Vite<span className="sr-only"> (opens in new tab)</span></a>
          </span>
        </div>
      </div>
    </section>
  )
}
