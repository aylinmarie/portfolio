import { useRef, useEffect, useState, useMemo } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../lib/motion'
import { projects } from '../data/projects'
import TokenTypewriter from '../components/TokenTypewriter'
import styles from './ProjectDetail.module.css'

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((p) => p.slug === slug)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const [activeId, setActiveId] = useState('approach-heading')

  const relatedCount = project?.detail?.related?.length ?? 0
  const tocIds = useMemo(
    () => [
      'approach-heading',
      'outcome-heading',
      ...Array.from({ length: relatedCount }, (_, i) => `related-${i}`),
    ],
    [relatedCount]
  )

  useEffect(() => {
    headingRef.current?.focus()
  }, [])

  useEffect(() => {
    if (!project) return
    const prev = document.title
    document.title = `${project.name} — Aylin Marie`
    return () => { document.title = prev }
  }, [project])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-20% 0px -65% 0px' }
    )
    tocIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [tocIds])

  if (!project || !project.detail) {
    return <Navigate to="/" replace />
  }

  const { detail } = project

  return (
    <article className={styles.page} aria-labelledby="project-heading">
      <div className={styles.layout}>
        <motion.div
          className={styles.content}
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
          </motion.header>

          <motion.p variants={fadeUp} className={styles.role}>
            {detail.role}
          </motion.p>

          {detail.demo === 'token-typewriter' && (
            <motion.div variants={fadeUp} className={styles.imageWrap}>
              <TokenTypewriter />
            </motion.div>
          )}

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

          {detail.related && detail.related.length > 0 && (
            <>
              <motion.hr variants={fadeUp} className={styles.rule} style={{ marginTop: 64 }} />

              <motion.section variants={fadeUp} aria-labelledby="related-heading">
                <h2 id="related-heading" className={styles.sectionLabel}>Related work</h2>
                <div className={styles.relatedList}>
                  {detail.related.map((item, i) => (
                    <div key={i} className={styles.relatedItem}>
                      <div className={styles.relatedHeader}>
                        <h3 id={`related-${i}`} className={styles.relatedName}>{item.name}</h3>
                        <ul className={styles.tags} aria-label="Technologies">
                          {item.tags.map((tag) => (
                            <li key={tag} className={styles.tag}>{tag}</li>
                          ))}
                        </ul>
                      </div>

                      {item.image && (
                        <div className={styles.imageWrap}>
                          <img src={item.image.src} alt={item.image.alt} className={styles.image} />
                        </div>
                      )}

                      <div className={styles.approachGrid}>
                        {item.approach.map((block, j) => (
                          <div key={j} className={styles.approachBlock}>
                            <h4 className={styles.approachHeading}>{block.heading}</h4>
                            <p className={styles.approachBody}>{block.body}</p>
                          </div>
                        ))}
                      </div>

                      <ul className={styles.outcomeList}>
                        {item.outcome.map((o, j) => (
                          <li key={j} className={styles.outcomeItem}>{o}</li>
                        ))}
                      </ul>

                      {i < detail.related!.length - 1 && (
                        <hr className={styles.relatedRule} />
                      )}
                    </div>
                  ))}
                </div>
              </motion.section>
            </>
          )}
        </motion.div>

        <nav className={styles.toc} aria-label="On this page">
          <p className={styles.tocLabel} aria-hidden="true">On this page</p>
          <ul className={styles.tocList}>
            <li>
              <a
                href="#approach-heading"
                aria-current={activeId === 'approach-heading' ? 'location' : undefined}
                className={`${styles.tocLink} ${activeId === 'approach-heading' ? styles.tocLinkActive : ''}`}
              >
                Approach
              </a>
            </li>
            <li>
              <a
                href="#outcome-heading"
                aria-current={activeId === 'outcome-heading' ? 'location' : undefined}
                className={`${styles.tocLink} ${activeId === 'outcome-heading' ? styles.tocLinkActive : ''}`}
              >
                Outcome
              </a>
            </li>
            {detail.related && detail.related.length > 0 && (
              <>
                <li className={styles.tocDivider} aria-hidden="true" />
                {detail.related.map((item, i) => (
                  <li key={i}>
                    <a
                      href={`#related-${i}`}
                      aria-current={activeId === `related-${i}` ? 'location' : undefined}
                      className={`${styles.tocLink} ${activeId === `related-${i}` ? styles.tocLinkActive : ''}`}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </>
            )}
          </ul>
        </nav>
      </div>
    </article>
  )
}
