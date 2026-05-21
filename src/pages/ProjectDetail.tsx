import { useRef, useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../lib/motion'
import { projects } from '../data/projects'
import styles from './ProjectDetail.module.css'

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((p) => p.slug === slug)
  const headingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    headingRef.current?.focus()
  }, [])

  if (!project || !project.detail) {
    return <Navigate to="/" replace />
  }

  const { detail } = project

  return (
    <article className={styles.page} aria-labelledby="project-heading">
      <motion.div
        className={styles.inner}
        variants={stagger()}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeUp}>
          <Link to="/" className={styles.back}>
            <span aria-hidden="true">←</span> Back to projects
          </Link>
        </motion.div>

        <motion.header variants={fadeUp} className={styles.header}>
          <h1 ref={headingRef} tabIndex={-1} id="project-heading" className={styles.title}>{project.name}</h1>
          <ul className={styles.tags} aria-label="Technologies">
            {project.tags.map((tag) => (
              <li key={tag} className={styles.tag}>{tag}</li>
            ))}
          </ul>
        </motion.header>

        <motion.p variants={fadeUp} className={styles.role}>
          {detail.role}
        </motion.p>

        {detail.image && (
          <motion.div variants={fadeUp} className={styles.imageWrap}>
            <img
              src={detail.image.src}
              alt={detail.image.alt}
              className={styles.image}
            />
          </motion.div>
        )}

        <motion.hr variants={fadeUp} className={styles.rule} />

        <motion.section variants={fadeUp} aria-labelledby="approach-heading">
          <h2 id="approach-heading" className={styles.sectionLabel}>Approach</h2>
          <div className={styles.approachGrid}>
            {detail.approach.map((block, i) => (
              <div key={i} className={styles.approachBlock}>
                <h3 className={styles.approachHeading}>{block.heading}</h3>
                <p className={styles.approachBody}>{block.body}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.hr variants={fadeUp} className={styles.rule} />

        <motion.section variants={fadeUp} aria-labelledby="outcome-heading">
          <h2 id="outcome-heading" className={styles.sectionLabel}>Outcome</h2>
          <ul className={styles.outcomeList}>
            {detail.outcome.map((item, i) => (
              <li key={i} className={styles.outcomeItem}>{item}</li>
            ))}
          </ul>
        </motion.section>
      </motion.div>
    </article>
  )
}
