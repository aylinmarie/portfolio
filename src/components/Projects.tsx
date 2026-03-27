import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../lib/motion'
import styles from './Projects.module.css'

const projects = [
  {
    name: 'Knit Gauge Converter',
    description:
      'Web app that helps knitters substitute yarns by estimating gauge adjustments and needle recommendations. Features Ravelry pattern import and AI-powered guidance via Claude.',
    tags: ['Next.js', 'React', 'Supabase', 'Claude AI'],
    url: 'https://knit-gauge-converter.vercel.app/',
  },
  {
    name: 'Mailchimp Design System',
    description:
      'Engineering Tech Lead. Component library and design token architecture powering Mailchimp\'s product suite — built for accessibility, scale, and cross-team consistency.',
    tags: ['React', 'TypeScript', 'Design Tokens', 'a11y'],
    url: null,
  },
  {
    name: 'This Portfolio',
    description:
      'Built with Vite and React. Substack posts fetched at build time via a custom Vite plugin. Fully static and deployed on Vercel.',
    tags: ['Vite', 'React', 'CSS Modules'],
    url: 'https://github.com/aylinmarie/portfolio',
  },
]

export default function Projects() {
  return (
    <section id="projects" className={styles.section} aria-labelledby="projects-heading">
      <motion.div
        className={styles.inner}
        variants={stagger()} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
      >
        <motion.h2 id="projects-heading" variants={fadeUp} className={styles.label}>02 / Projects</motion.h2>

        <div className={styles.grid}>
          {projects.map((project) => (
            <motion.div
              key={project.name}
              variants={fadeUp}
              className={`${styles.card}${project.url ? ` ${styles.cardLinked}` : ''}`}
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
              <div className={styles.cardHeader}>
                <h3 className={styles.name}>{project.name}</h3>
                {project.url && <span className={styles.arrow} aria-hidden="true">↗</span>}
              </div>
              <p className={styles.description}>{project.description}</p>
              <ul className={styles.tags}>
                {project.tags.map((tag) => (
                  <li key={tag} className={styles.tag}>{tag}</li>
                ))}
              </ul>
            </motion.div>
          ))}
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
