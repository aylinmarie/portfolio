import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <span className={styles.label}>05 / Contact</span>

        <h2 className={styles.heading}>
          Let's work<br />
          together<span className={styles.dot}>.</span>
        </h2>

        <div className={styles.links}>
          <a href="mailto:hello@aylinmarie.co" className={styles.email}>
            hello@aylinmarie.co
          </a>
          <div className={styles.social}>
            <a
              href="https://linkedin.com/in/aylinmarie"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/aylinmarie"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.footerInner}>
          <span className={styles.footerName}>Aylin Marie © 2025</span>
          <span className={styles.footerRole}>Staff Software Engineer</span>
        </div>
      </div>
    </section>
  )
}
