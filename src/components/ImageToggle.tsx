import { useState } from 'react'
import styles from './ImageToggle.module.css'

interface ImageToggleProps {
  images: { src: string; alt: string; label: string }[]
}

export default function ImageToggle({ images }: ImageToggleProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = images[activeIndex]

  return (
    <div className={styles.wrap}>
      <div className={styles.toggle} role="group" aria-label="Toggle before and after images">
        {images.map((img, i) => (
          <button
            key={img.label}
            type="button"
            className={`${styles.toggleButton} ${i === activeIndex ? styles.toggleButtonActive : ''}`}
            aria-pressed={i === activeIndex}
            onClick={() => setActiveIndex(i)}
          >
            {img.label}
          </button>
        ))}
      </div>
      <img src={active.src} alt={active.alt} className={styles.image} />
    </div>
  )
}
