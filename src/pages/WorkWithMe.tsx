import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../lib/motion'
import styles from './WorkWithMe.module.css'

export default function WorkWithMe() {
  const headingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    headingRef.current?.focus()
  }, [])

  return (
    <article className={styles.page} aria-labelledby="wwm-heading">
      <motion.div
        className={styles.content}
        variants={stagger()}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeUp}>
          <Link to="/" className={styles.back}>
            <span aria-hidden="true">←</span> Back
          </Link>
        </motion.div>

        <motion.header variants={fadeUp} className={styles.header}>
          <h1
            ref={headingRef}
            tabIndex={-1}
            id="wwm-heading"
            className={styles.title}
          >
            Work with me
          </h1>
        </motion.header>

        <motion.div variants={fadeUp} className={styles.intro}>
          <p>
            I thrive in environments where engineers have real ownership of their
            work and the features they ship. I'm drawn to large/mid-size
            established companies with a genuine community culture, teams where
            people invest in each other, and diverse perspectives are part of how
            decisions get made. I can move fast and adapt easily when priorities
            shift or the roadmap changes.
          </p>
          <p>
            When it comes to interviews, I do my best in portfolio reviews,
            take-homes, and behavioral conversations, formats that reflect how I
            actually think and build. Purely algorithmic screening isn't a fit
            for me because it doesn't reflect how I actually work or collaborate
            with others.
          </p>
        </motion.div>

        <motion.hr variants={fadeUp} className={styles.rule} />

        <motion.section
          variants={fadeUp}
          aria-labelledby="looking-for-heading"
          className={styles.section}
        >
          <h2 id="looking-for-heading" className={styles.sectionLabel}>
            What I'm looking for
          </h2>
          <dl className={styles.criteria}>
            <div className={styles.criteriaRow}>
              <dt className={styles.criteriaKey}>Role</dt>
              <dd className={styles.criteriaValue}>
                Staff Software Engineer
              </dd>
            </div>
            <div className={styles.criteriaRow}>
              <dt className={styles.criteriaKey}>Environments</dt>
              <dd className={styles.criteriaValue}>
                Large or mid-size orgs
              </dd>
            </div>
            <div className={styles.criteriaRow}>
              <dt className={styles.criteriaKey}>Focus areas</dt>
              <dd className={styles.criteriaValue}>
                Design systems, frontend infrastructure, platform work, agentic systems
              </dd>
            </div>
            <div className={styles.criteriaRow}>
              <dt className={styles.criteriaKey}>Remote</dt>
              <dd className={styles.criteriaValue}>Hybrid / Remote Flexibility</dd>
            </div>
          </dl>
        </motion.section>

        <motion.hr variants={fadeUp} className={styles.rule} />

        <motion.section
          variants={fadeUp}
          aria-labelledby="how-i-interview-heading"
          className={styles.section}
        >
          <h2 id="how-i-interview-heading" className={styles.sectionLabel}>
            How I interview
          </h2>
          <p className={styles.body}>
            Portfolio reviews, take-homes, and behavioral conversations are the
            formats where I do my best work. They reflect how I actually think
            and build, and how I work with teams. Processes that rely primarily
            on Leetcode-style screening aren't a good fit, and I'd rather name
            that early so we can both make an informed decision.
          </p>
        </motion.section>

        <motion.hr variants={fadeUp} className={styles.rule} />

        <motion.section
          variants={fadeUp}
          aria-labelledby="resume-heading"
          className={styles.section}
        >
          <h2 id="resume-heading" className={styles.sectionLabel}>
            Resume
          </h2>
          <a
            href="/Aylin_Atkins_Resume.pdf"
            download="Aylin_Atkins_Resume.pdf"
            className={styles.resumeButton}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download resume
          </a>
        </motion.section>

        <motion.hr variants={fadeUp} className={styles.rule} />

        <motion.section
          variants={fadeUp}
          aria-labelledby="contact-heading"
          className={styles.section}
        >
          <h2 id="contact-heading" className={styles.sectionLabel}>
            Get in touch
          </h2>
          <a
            href="mailto:aylin.mcginnis@gmail.com"
            className={styles.contactLink}
          >
            aylin.mcginnis@gmail.com
          </a>
        </motion.section>
      </motion.div>
    </article>
  )
}
