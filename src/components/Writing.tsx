import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../lib/motion'
import { posts } from 'virtual:substack-posts'
import styles from './Writing.module.css'

export default function Writing() {
  if (posts.length === 0) return null

  return (
    <section id="writing" className={styles.section} aria-labelledby="writing-heading">
      <motion.div
        className={styles.inner}
        variants={stagger()} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
      >
        <motion.h2 id="writing-heading" variants={fadeUp} className={styles.label}>04 / Writing</motion.h2>

        <ul className={styles.list}>
          {posts.map((post) => (
            <motion.li key={post.url} variants={fadeUp} className={styles.item}>
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                <span className={styles.title}>{post.title}</span>
                <span className={styles.meta}>
                  {post.date && <span className={styles.date}>{post.date}</span>}
                  <span className={styles.arrow} aria-hidden="true">↗</span>
                </span>
                <span className="sr-only"> (opens in new tab)</span>
              </a>
            </motion.li>
          ))}
        </ul>

        <motion.a
          variants={fadeUp}
          href="https://aylinmarie.substack.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.substackLink}
        >
          All posts on Substack →<span className="sr-only"> (opens in new tab)</span>
        </motion.a>
      </motion.div>
    </section>
  )
}
