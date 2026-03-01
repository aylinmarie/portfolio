import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Atlanta, GA</p>
        <h1 className={styles.heading}>
          Merhaba, I'm<br />
          <span className={styles.name}>Aylin</span><span className={styles.dot}>.</span>
        </h1>
        <p className={styles.sub}>
          Staff Software Engineer. Design systems &amp; frontend infrastructure.<br />
          Engineering Tech Lead at Mailchimp.
        </p>
        <a href="#work" className={styles.cta}>View work ↓</a>
      </div>
    </section>
  )
}
