import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeUp, stagger } from '../lib/motion'
import { projects } from '../data/projects'
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <section id="projects" className={styles.section} aria-labelledby="projects-heading">
      <motion.div
        className={styles.inner}
        variants={stagger()} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
      >
        <motion.h2 id="projects-heading" variants={fadeUp} className={styles.label}>03 / Projects</motion.h2>

        <div className={styles.grid}>
          {projects.map((project) => {
            const isLinked = !!(project.url || project.slug)
            return (
              <motion.div
                key={project.name}
                variants={fadeUp}
                className={`${styles.card}${isLinked ? ` ${styles.cardLinked}` : ''}`}
              >
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.cardLink}
                    aria-label={`View ${project.name} (opens in new tab)`}
                  />
                )}
                {!project.url && project.slug && (
                  <Link
                    to={`/projects/${project.slug}`}
                    className={styles.cardLink}
                    aria-label={`View ${project.name} case study`}
                  />
                )}
                <div className={styles.cardHeader}>
                  <h3 className={styles.name}>{project.name}</h3>
                  {project.url && <span className={styles.arrow} aria-hidden="true">↗</span>}
                  {!project.url && project.slug && <span className={styles.arrow} aria-hidden="true">→</span>}
                </div>
                <p className={styles.description}>{project.description}</p>
                <ul className={styles.tags} aria-label="Tags">
                  {project.tags.map((tag) => (
                    <li key={tag} className={styles.tag}>{tag}</li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

        <motion.a
          variants={fadeUp}
          href="https://github.com/aylinmarie"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.githubLink}
        >
          See other projects on GitHub →<span className="sr-only"> (opens in new tab)</span>
        </motion.a>
      </motion.div>
    </section>
  )
}
