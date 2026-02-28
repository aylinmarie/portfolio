import { posts } from 'virtual:substack-posts'
import styles from './Writing.module.css'

export default function Writing() {
  if (posts.length === 0) return null

  return (
    <section id="writing" className={styles.section}>
      <div className={styles.inner}>
        <span className={styles.label}>03 / Writing</span>

        <ul className={styles.list}>
          {posts.map((post) => (
            <li key={post.url} className={styles.item}>
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
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://aylinmarie.substack.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.substackLink}
        >
          All posts on Substack →
        </a>
      </div>
    </section>
  )
}
