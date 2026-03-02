import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../lib/motion'
import styles from './Projects.module.css'

const projects = [
  {
    name: 'Mailchimp Design System',
    description:
      'Component library and design token architecture powering Mailchimp\'s product suite — built for accessibility, scale, and cross-team consistency.',
    tags: ['React', 'TypeScript', 'Design Tokens', 'a11y'],
    url: null,
  },
  {
    name: 'OneYoungTraveler',
    description:
      'Travel platform and community for young professionals exploring the world. Founded, designed, and built independently.',
    tags: ['Next.js', 'Squarespace', 'Brand'],
    url: 'https://oneyoungtraveler.com',
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
            <motion.div key={project.name} variants={fadeUp} className={styles.card}>
              <div className={styles.cardHeader}>
                <h3 className={styles.name}>{project.name}</h3>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.arrow}
                    aria-label={`View ${project.name} (opens in new tab)`}
                  >
                    ↗
                  </a>
                )}
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
      </motion.div>
    </section>
  )
}
