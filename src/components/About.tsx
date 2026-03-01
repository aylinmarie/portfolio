import styles from './About.module.css'

const also = [
  'Founder of OneYoungTraveler LLC',
  'General Assembly Workshop Instructor',
  'Squarespace Circle Member',
  'Portfolio Consultant — 2017 A3C Creator Complex Conference',
  'Amateur knitter (Michelle Obama retweeted my baby\u2019s onesie)',
  '30+ countries and counting',
]

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <span className={styles.label}>02 / About</span>

        <div className={styles.grid}>
          <div className={styles.bio}>
            <p>
              I&apos;m a software engineer who finds the intersection of engineering and
              design endlessly interesting. I specialize in design systems with a
              focus on accessibility, and I&apos;ve spent my career finding ways to help
              organizations &mdash; from small businesses to enterprise &mdash; build better
              products faster.
            </p>
            <p>
              My path started as an independent Squarespace developer, moved through
              a creative agency focused on social good, and brought me to Mailchimp
              where I now lead engineering for our design system. I&apos;m also a proud
              General Assembly alum.
            </p>
            <p>
              Currently based in Atlanta, embarking on my most exciting adventure
              yet &mdash; being someone&apos;s mama.
            </p>
          </div>

          <div className={styles.also}>
            <h3 className={styles.alsoTitle}>Also</h3>
            <ul className={styles.alsoList}>
              {also.map((item) => (
                <li key={item} className={styles.alsoItem}>
                  <span className={styles.bullet} aria-hidden="true">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
