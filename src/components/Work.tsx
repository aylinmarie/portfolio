import styles from './Work.module.css'

const experience = [
  {
    company: 'Mailchimp',
    role: 'Staff Software Engineer',
    detail: 'Engineering Tech Lead, Design Systems',
    period: '2019–Present',
  },
  {
    company: 'Banyan',
    role: 'Frontend Engineer',
    detail: 'Agency focused on social good',
    period: '2017–2019',
  },
]

export default function Work() {
  return (
    <section id="work" className={styles.section}>
      <div className={styles.inner}>
        <span className={styles.label}>01 / Experience</span>

        <div className={styles.list}>
          {experience.map((job) => (
            <div key={job.company} className={styles.item}>
              <div className={styles.left}>
                <h3 className={styles.company}>{job.company}</h3>
                <p className={styles.role}>{job.role}</p>
                <p className={styles.detail}>{job.detail}</p>
              </div>
              <span className={styles.period}>{job.period}</span>
            </div>
          ))}
        </div>

        <a
          href="https://linkedin.com/in/aylinmarie"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkedIn}
        >
          Full history on LinkedIn →
        </a>
      </div>
    </section>
  )
}
