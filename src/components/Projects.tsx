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
    <section id="projects" className={styles.section}>
      <div className={styles.inner}>
        <span className={styles.label}>02 / Projects</span>

        <div className={styles.grid}>
          {projects.map((project) => (
            <div key={project.name} className={styles.card}>
              <div className={styles.cardHeader}>
                <h3 className={styles.name}>{project.name}</h3>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.arrow}
                    aria-label={`View ${project.name}`}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
