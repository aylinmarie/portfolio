import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../lib/motion'
import styles from './Work.module.css'

type Role = { role: string; detail: string; period: string }
type Job  = { company: string; period: string; roles: Role[] }

const experience: Job[] = [
  {
    company: 'Intuit Mailchimp',
    period: '2019–Present',
    roles: [
      { role: 'Staff Software Engineer',  detail: 'Design Systems Engineering Tech Lead',       period: '2025–Present' },
      { role: 'Senior Software Engineer', detail: 'Experience Platform Team + Design Systems',   period: '2020–2025'    },
      { role: 'UX Engineer',              detail: 'Design Systems',                              period: '2019–2020'    },
    ],
  },
  {
    company: 'Banyan',
    period: '2017–2019',
    roles: [
      { role: 'Frontend Engineer', detail: 'Creative agency focused on social good', period: '2017–2019' },
    ],
  },
]

export default function Work() {
  return (
    <section id="work" className={styles.section} aria-labelledby="work-heading">
      <motion.div
        className={styles.inner}
        variants={stagger()} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
      >
        <motion.h2 id="work-heading" variants={fadeUp} className={styles.label}>01 / Experience</motion.h2>

        <div className={styles.list}>
          {experience.map((job) => (
            <motion.div key={job.company} variants={fadeUp} className={styles.item}>
              <div className={styles.left}>
                <h3 className={styles.company}>{job.company}</h3>

                {job.roles.length > 1 ? (
                  <div className={styles.roleTimeline}>
                    {job.roles.map((r) => (
                      <div key={r.role} className={styles.timelineItem}>
                        <p className={styles.role}>{r.role}</p>
                        <p className={styles.detail}>{r.detail} · {r.period}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <>
                    <p className={styles.role}>{job.roles[0].role}</p>
                    <p className={styles.detail}>{job.roles[0].detail}</p>
                  </>
                )}
              </div>

              <span className={styles.period}>{job.period}</span>
            </motion.div>
          ))}
        </div>

        <motion.a
          variants={fadeUp}
          href="https://linkedin.com/in/aylinatkins"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkedIn}
        >
          Full history on LinkedIn →<span className="sr-only"> (opens in new tab)</span>
        </motion.a>
      </motion.div>
    </section>
  )
}
