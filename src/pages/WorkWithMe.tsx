import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../lib/motion'
import { projects } from '../data/projects'
import styles from './WorkWithMe.module.css'

const featured = [
  {
    project: projects.find((p) => p.slug === 'mailchimp-design-system')!,
    note: 'Design system engineering at Intuit Mailchimp — component library, token architecture, and dark mode across all product surfaces.',
    internal: true,
  },
  {
    project: projects.find((p) => p.name === 'Knit Gauge Converter')!,
    note: 'Full-stack web app with AI-powered yarn guidance via Claude and Ravelry API integration.',
    internal: false,
  },
  {
    project: projects.find((p) => p.name === 'This Portfolio')!,
    note: 'Built with Vite, React, and a custom Vite plugin for Substack. Fully static, deployed on Vercel.',
    internal: false,
  },
]

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

        <motion.p variants={fadeUp} className={styles.intro}>
          I thrive in environments where engineers have real ownership and the
          work they ship actually matters. I'm drawn to growth-stage and larger
          companies with a genuine community culture, teams where people invest
          in each other, collaboration happens across functions, and diverse
          perspectives are part of how decisions get made, not a checkbox. I
          move fast and adapt easily when priorities shift or the roadmap
          changes; that kind of ambiguity doesn't bother me, it's just how good
          product work goes. When it comes to interviews, I do my best in
          portfolio reviews, take-homes, and behavioral conversations, formats
          that reflect how I actually think and build. Purely algorithmic
          screening isn't a fit for me because it doesn't reflect how I actually
          work or how I collaborate with others. Neither is a culture that
          mistakes availability for commitment. Remote flexibility is a
          requirement.
        </motion.p>

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
                Staff or principal frontend engineer
              </dd>
            </div>
            <div className={styles.criteriaRow}>
              <dt className={styles.criteriaKey}>Environments</dt>
              <dd className={styles.criteriaValue}>
                Growth-stage or larger orgs
              </dd>
            </div>
            <div className={styles.criteriaRow}>
              <dt className={styles.criteriaKey}>Focus areas</dt>
              <dd className={styles.criteriaValue}>
                Design systems, frontend infrastructure, platform work
              </dd>
            </div>
            <div className={styles.criteriaRow}>
              <dt className={styles.criteriaKey}>Remote</dt>
              <dd className={styles.criteriaValue}>Required</dd>
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
            and build. Processes that rely primarily on Leetcode-style screening
            aren't a good fit, and I'll say so upfront rather than waste
            either side's time.
          </p>
        </motion.section>

        <motion.hr variants={fadeUp} className={styles.rule} />

        <motion.section
          variants={fadeUp}
          aria-labelledby="my-work-heading"
          className={styles.section}
        >
          <h2 id="my-work-heading" className={styles.sectionLabel}>
            My work
          </h2>
          <ul className={styles.projectList}>
            {featured.map(({ project, note, internal }) => (
              <li key={project.name} className={styles.projectItem}>
                {internal ? (
                  <Link
                    to={`/projects/${project.slug}`}
                    className={styles.projectLink}
                  >
                    {project.name}
                    <span className={styles.arrow} aria-hidden="true">
                      →
                    </span>
                  </Link>
                ) : (
                  <a
                    href={project.url!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                  >
                    {project.name}
                    <span className={styles.arrow} aria-hidden="true">
                      →
                    </span>
                    <span className="sr-only">(opens in new tab)</span>
                  </a>
                )}
                <p className={styles.projectNote}>{note}</p>
              </li>
            ))}
          </ul>
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
