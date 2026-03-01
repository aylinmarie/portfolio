import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Atlanta, GA</p>
        <h1 className={styles.heading}>
          Staff Software<br />
          Engineer<span className={styles.dot}>.</span>
        </h1>
        <p className={styles.sub}>
          Aylin Marie. Design systems &amp; frontend infrastructure.<br />
          Engineering Tech Lead at Mailchimp.
        </p>
        <a href="#work" className={styles.cta}>View work ↓</a>
      </div>
    </section>
  )
}
